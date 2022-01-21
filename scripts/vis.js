var g = {};
const config = {
    agents: null,
    canvas: null,
    preset: null,
};

GL_CONTEXT = null;
SHADER = null;
BUFFERS = null;
FRAME_BUFFERS = null;
TEXTURES = null;

/*
The general idea here is to store the agent's index, position and angle in a texture,
then run the fragment shader on it, which will ensure each agent gets processed, 
which will calculate their new position based on their current velocity,
checking for edge of screen bounces and so on

                ============FRAME START============
                ↑ READ agentTex_ (read agent position)
                | WRITE agentTex (write new agent position)
    moveAgent → |
                | READ renderTex (read surrounding pixels)
                ↓ WRITE agentTex (update direction based on sense)
                
                ↑ READ agentTex (read agent position)
  renderAgent → ↓ WRITE renderTex (write agents onto render buffer)

                ↑ READ renderTex
  postProcess → | WRITE renderTex_
                ↓ WRITE output buffer (show frame)
                ============FRAME END============
*/

function init(presetIndex)
{
    const canvas = document.getElementById("vis");
    config.canvas = canvas;
    config.preset = presets[presetIndex];
    config.agents = config.preset.createAgents();
    config.sensorRadius = SENSOR_RADIUS;

    const gl = canvas.getContext("webgl2", {preserveDrawingBuffer: true});
    GL_CONTEXT = gl;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
        alert("EXT_color_buffer_float failed to load");
    return;
    }

    SHADERS = setupShaders(gl);
    setupAgentControl(gl, config, SHADERS);
}

function setupShaders(gl)
{
    // pasthrough shader
    const moveAgentVertSrc = `#version 300 es
    precision mediump float;

    in vec4 m_position;
    out vec2 v_texCoord;

    void main(void)
    {
        gl_Position = vec4(m_position.xy, 0.0, 1.0);
        v_texCoord = m_position.zw;
    }`;

    // Calculates new x, y and r values for the agent state texture
    const moveAgentFragSrc = `#version 300 es
    precision mediump float;
    precision mediump int;
    precision mediump sampler2D;

    uniform sampler2D agentTex;
    uniform sampler2D renderTex;
    in vec2 v_texCoord;

    const float moveSpeed = ` + (config.preset.moveSpeed/config.canvas.width).toFixed(4) + `;
    const float turnSpeed = ` + config.preset.turnSpeed.toFixed(4) + `;
    const float width = ` + config.canvas.width.toFixed(1) + `;
    const float height = ` + config.canvas.height.toFixed(1) + `;
    const float sensorRadius = ` + (config.sensorRadius/config.canvas.width).toFixed(4) + `;
    const float sensorOffsetDistance = ` + (config.preset.sensorOffsetDistance/config.canvas.width).toFixed(4) + `;
    const float leftSensorAngle = ` + config.preset.leftSensorAngle.toFixed(2) + `;
    const float rightSensorAngle = ` + config.preset.rightSensorAngle.toFixed(2) + `;

    out vec4 result;

    uint hash(uint x);
    uint hash(uint x)
    {
        x ^= 2747636419u;
        x *= 2654435769u;
        x ^= x >> 16;
        x *= 2654435769u;
        x ^= x >> 16;
        x *= 2654435769u;
        return x;
    }

    float sense(float x, float y, float r, float offset);
    float sense(float x, float y, float r, float offset)
    {
        float sensorAngle = r + offset;
        vec2 sensorDirection = vec2(cos(sensorAngle), sin(sensorAngle));
        vec2 sensorCentre = vec2(x, y) + sensorDirection * sensorOffsetDistance;
        float sum = 0.0;
        for (float i = -sensorRadius; i <= sensorRadius; i += 1.0/width)
        {
            for (float j = -sensorRadius; j <= sensorRadius; j += 1.0/height)
            {
                vec4 reading = texture(renderTex, sensorCentre + vec2(i, j));
                sum += reading.x;
            }
        }
        return sum;
    }

    void main(void)
    {
        uint pixelIndex = uint((gl_FragCoord.y * width) + (gl_FragCoord.x));
        float pseudoRandomNumber = float(hash(pixelIndex)) / 4294967295.0; // normalise

        vec4 agent = texture(agentTex, v_texCoord);
        float x = agent.x;
        float y = agent.y;
        float r = agent.z;

        // move agent along current path
        x += cos(r) * moveSpeed;
        y += sin(r) * moveSpeed;

        // check boundaries and reflect angle if hit
        if (x < 0.0 || x > 1.0 || y < 0.0 || y > 1.0)
        {
            x = min(0.99, max(-0.99, x));
            y = min(0.99, max(-0.99, y));
            r += pseudoRandomNumber * 0.2 + 3.141;
            //r += 3.141;

            //if (x < 0.0) x = 0.99;
            //if (x > 1.0) x = 0.01;
            //if (y < 0.0) y = 0.99;
            //if (y > 1.0) y = 0.01;
        }
        
        float forwardReading = sense(x, y, r, 0.0);
        float leftReading = sense(x, y, r, leftSensorAngle);
        float rightReading = sense(x, y, r, rightSensorAngle);

        if (forwardReading > leftReading && forwardReading > rightReading) r += pseudoRandomNumber * 0.2;
        else if (forwardReading < leftReading && forwardReading < rightReading) r += (pseudoRandomNumber-0.5) * turnSpeed;
        else if (rightReading > leftReading) r -= pseudoRandomNumber * turnSpeed;
        else if (rightReading < leftReading) r += pseudoRandomNumber * turnSpeed;

        result = vec4(vec3(x, y, r), 1.0);
    }`;

    // Runs for each vertex defined over a pixel in the agent state texture
    // to get the R and G (x and y position) values and passes that through
    // for the fragment shader to draw those pixels
    const renderAgentVertSrc = `#version 300 es
    precision mediump float;
    
    in vec2 r_position;
    in vec2 r_agentCoord;
    
    precision mediump sampler2D;
    uniform sampler2D agentTex;
    uniform sampler2D agentCol;
    
    out vec4 agent;
    out vec4 col;

    void main(void)
    {
        // get the r & g (x & y positions) value of pixels in agentTex
        agent = texture(agentTex, r_agentCoord);
        col = texture(agentCol, r_agentCoord);

        float x = agent.x;
        float y = agent.y;
        

        gl_Position = vec4(2.0 * x - 1.0, 2.0 * y - 1.0, 0.0, 1.0);
        gl_PointSize = ` + config.preset.pointSize.toFixed(2) + `;
    }`;

    const renderAgentFragSrc = `#version 300 es
    precision mediump float;
    precision mediump int;
    precision mediump sampler2D;

    in vec4 agent;
    in vec4 col;

    out vec4 color;

    void main(void)
    {
        color = col;
    }`;

    const postProcessingVertSrc = `#version 300 es
    precision mediump float;
    in vec4 m_position;
    out vec2 v_texCoord;

    void main(void)
    {
        gl_Position = vec4(m_position.xy, 0.0, 1.0);
        v_texCoord = m_position.pq;
    }`;

    const postProcessingFragSrc = `#version 300 es
    precision mediump float;
    precision mediump sampler2D;

    const float fadeSpeed = ` + (config.preset.fadeSpeed/255.0).toFixed(7) + `;
    const float width = ` + config.canvas.width.toFixed(1) + `;
    const float height = ` + config.canvas.height.toFixed(1) + `;

    in vec2 v_texCoord;
    uniform sampler2D renderTex;

    out vec4 color;

    void main(void)
    {
        vec4 sum = vec4(0.0, 0.0, 0.0, 0.0);

        // 3x3 blur
        for (float offsetX = -1.0/width; offsetX <= 1.0/width; offsetX += 1.0/width)
        {
            for (float offsetY = -1.0/height; offsetY <= 1.0/height; offsetY += 1.0/height)
            {
                sum += texture(renderTex, v_texCoord + vec2(offsetX, offsetY));
            }
        }

	    vec4 blurredCol = sum / 9.0;

        color = blurredCol;

        // Fade each trailing agent pixel out over time
        color = color - fadeSpeed;
    }`;

    const moveAgentProg = compileShaders(gl, moveAgentVertSrc, moveAgentFragSrc);
    gl.useProgram(moveAgentProg);
    const pMoveAgentAgentTex = gl.getUniformLocation(moveAgentProg, "agentTex");
    gl.uniform1i(pMoveAgentAgentTex, 0);
    const pMoveAgentRenderTex = gl.getUniformLocation(moveAgentProg, "renderTex");
    gl.uniform1i(pMoveAgentRenderTex, 1);

    const renderAgentProg = compileShaders(gl, renderAgentVertSrc, renderAgentFragSrc);
    gl.useProgram(renderAgentProg);
    const pRenderAgentAgentTex = gl.getUniformLocation(renderAgentProg, "agentTex");
    gl.uniform1i(pRenderAgentAgentTex, 0);
    const pRenderAgentAgentColor = gl.getUniformLocation(renderAgentProg, "agentCol");
    gl.uniform1i(pRenderAgentAgentColor, 1);

    const postProcessingProg = compileShaders(gl, postProcessingVertSrc, postProcessingFragSrc);
    gl.useProgram(postProcessingProg);
    const pPostProcessingRenderTex = gl.getUniformLocation(postProcessingProg, "renderTex");
    gl.uniform1i(pPostProcessingRenderTex, 0);

    gl.useProgram(null);

    return {
        moveAgentProg: moveAgentProg,
        renderAgentProg: renderAgentProg,
        postProcessingProg: postProcessingProg,
    }
}

function compileShaders(gl, vertSrc, fragSrc)
{
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vertSrc);
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(vs));

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fragSrc);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(fs));

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    gl.deleteShader(vs);
    gl.deleteShader(fs);

    return prog;
}

function setupAgentControl(gl, config, shaders)
{
    let agentData = [];
    for (let i = 0; i < config.agents.length; i++) {
        agentData.push(config.agents[i].x);
        agentData.push(config.agents[i].y);
        agentData.push(config.agents[i].rot);
        agentData.push(0.0);
    }
    agentColorData = config.preset.getColor();

    TEXTURES = createTextures(gl, new Float32Array(agentData), new Uint8Array(agentColorData));

    var m_position = gl.getAttribLocation(shaders.moveAgentProg, 'm_position');

    var r_agentCoord = gl.getAttribLocation(shaders.renderAgentProg, 'r_agentCoord');
    var m_position_postprocess = gl.getAttribLocation(shaders.postProcessingProg, 'm_position');

    BUFFERS = {
        positionBuffer: gl.createBuffer(),
        lookupBuffer: gl.createBuffer(),
    }

    // Vertex + coordinate buffer for rectangle across entire canvas
    gl.bindBuffer(gl.ARRAY_BUFFER, BUFFERS.positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 0,0,  1,-1, 1,0, -1,1, 0,1,  -1,1, 0,1,  1,-1, 1,0,  1,1, 1,1]), gl.STATIC_DRAW);
    // Give moveAgent and postProcessing access to the vertex buffer
    gl.enableVertexAttribArray(m_position);
    gl.vertexAttribPointer(m_position, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(m_position_postprocess, 4, gl.FLOAT, false, 0, 0);

    // Vertex buffer with locations for each agent pixel in agentTex
    gl.bindBuffer(gl.ARRAY_BUFFER, BUFFERS.lookupBuffer);
    // coordinates for the centre of each pixel in agentTex
    let lookupBufferData = []; 
    for (let i = 0; i < TEXTURES.agentTextureLength; i++)
    {
        for (let j = 0; j < TEXTURES.agentTextureLength; j++)
        {
            // push x and y coordinates for centre of each pixel
            lookupBufferData.push((j + 0.5)/TEXTURES.agentTextureLength);
            lookupBufferData.push((i + 0.5)/TEXTURES.agentTextureLength);
        }
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lookupBufferData), gl.STATIC_DRAW);
    // Give renderAgent this buffer
    gl.enableVertexAttribArray(r_agentCoord);
    gl.bindBuffer(gl.ARRAY_BUFFER, BUFFERS.lookupBuffer);
    gl.vertexAttribPointer(r_agentCoord, 2, gl.FLOAT, false, 0, 0);

    // create framebuffer for agent info output
    FRAME_BUFFERS = {
        agentFramebuffer: gl.createFramebuffer(),
        postProcessingFrameBuffer: gl.createFramebuffer()
    }

    var ping = true;
    const fpsElem = document.getElementById("fps");
    let then = 0;

    function tick(now)
    {
        render(ping, gl, SHADERS, FRAME_BUFFERS, TEXTURES);
        ping = !ping;

        // get FPS
        now *= 0.001;                          // convert to seconds
        const deltaTime = now - then;          // compute time since last frame
        then = now;                            // remember time for next frame
        const fps = 1 / deltaTime;             // compute frames per second
        fpsElem.textContent = fps.toFixed(1);
        
        if (doRender) window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
}

function createTexture(gl, internalFormat, width, height, format, type, data)
{
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_BASE_LEVEL, 0);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL, 0);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, format, type, data);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return texture;
}
/*
    Creates 4 textures:
    2 * agent texture (RGBA 32Float): Each pixel stores an agent's x & y positions, and their
    current rotation in the RGB values. A fragment shader will alternate between
    running on this texture and its swap, allowing it to read to one while writing to the other,
    updating their positions and check collisions.

    2 * render texture: The texture actually being drawn. This will have the
    fading + blurring effects progressively rendered onto it use the same ping pong buffer.

    In the agent shader, use texture(trailMap, vec2(x, y)), with some offsets
    to sense trails surrounding the agent, and use that to steer it.
*/
function createTextures(gl, agentData, agentColorData)
{
    const agentTextureLength = Math.ceil(Math.sqrt(config.agents.length));

    const agentTex = createTexture(gl, gl.RGBA32F, agentTextureLength, agentTextureLength, gl.RGBA, gl.FLOAT, agentData);
    // swap texture for every 2nd frame of computation
    const agentTex_ = createTexture(gl, gl.RGBA32F, agentTextureLength, agentTextureLength, gl.RGBA, gl.FLOAT, null);

    const agentColor = createTexture(gl, gl.RGBA, agentTextureLength, agentTextureLength, gl.RGBA, gl.UNSIGNED_BYTE, agentColorData);

    const renderTex = createTexture(gl, gl.RGBA, config.canvas.width, config.canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, null);
    // swap texture for every 2nd frame of rendering
    const renderTex_ = createTexture(gl, gl.RGBA, config.canvas.width, config.canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, null);

    return {
        agentTexture: agentTex,
        agentTextureSwap: agentTex_,
        agentColor: agentColor,
        agentTextureLength: agentTextureLength,
        renderTexture: renderTex,
        renderTextureSwap: renderTex_
    };
}

function render(ping, gl, shaders, frameBuffers, textures)
{   
    /*
    Ping-pong buffer: Alternate between agentTex & agentTexSwap,
    and alternate between renderTexture and renderTextureSwap
    Swap the agentTextures
    */

    // ------- AGENT MOVEMENT UPDATE -------
    gl.viewport(0, 0, textures.agentTextureLength, textures.agentTextureLength); 
    gl.useProgram(shaders.moveAgentProg);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffers.agentFramebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, (ping) ? textures.agentTextureSwap : textures.agentTexture, 0);
    // set UNIT 0 to be agentTexture or agentTextureSwap
    gl.activeTexture(gl.TEXTURE0 + 0);
    gl.bindTexture(gl.TEXTURE_2D, (ping) ? textures.agentTexture : textures.agentTextureSwap);
    gl.activeTexture(gl.TEXTURE0 + 1);
    gl.bindTexture(gl.TEXTURE_2D, textures.renderTexture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    // --------------------------------------

    // ------- AGENT RENDERING -------
    gl.viewport(0, 0, config.canvas.width, config.canvas.height);
    // Render to the render-texture swap
    gl.useProgram(shaders.renderAgentProg);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffers.postProcessingFrameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, (ping) ? textures.renderTextureSwap : textures.renderTexture, 0);
    
    gl.activeTexture(gl.TEXTURE0 + 0);
    gl.bindTexture(gl.TEXTURE_2D, textures.agentTexture);
    gl.activeTexture(gl.TEXTURE0 + 1);
    gl.bindTexture(gl.TEXTURE_2D, textures.agentColor);
    
    gl.drawArrays(gl.POINTS, 0, config.agents.length);
    // --------------------------------------
    
    // ------- POST PROCESSING -------
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, (ping) ? textures.renderTexture : textures.renderTextureSwap, 0);
    
    gl.useProgram(shaders.postProcessingProg);

    // set texture UNIT 0 to be the render/renderswap
    gl.activeTexture(gl.TEXTURE0 + 0);
    gl.bindTexture(gl.TEXTURE_2D, (ping) ? textures.renderTextureSwap : textures.renderTexture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    
    gl.drawArrays(gl.TRIANGLES, 0, 6); // draw to screen
    // --------------------------------------
}

function shutdown()
{
    var numTextureUnits = GL_CONTEXT.getParameter(GL_CONTEXT.MAX_TEXTURE_IMAGE_UNITS);
    for (var unit = 0; unit < numTextureUnits; ++unit)
    {
        GL_CONTEXT.activeTexture(GL_CONTEXT.TEXTURE0 + unit);
        GL_CONTEXT.bindTexture(GL_CONTEXT.TEXTURE_2D, null);
        GL_CONTEXT.bindTexture(GL_CONTEXT.TEXTURE_CUBE_MAP, null);
    }
    GL_CONTEXT.bindBuffer(GL_CONTEXT.ARRAY_BUFFER, null);
    GL_CONTEXT.bindBuffer(GL_CONTEXT.ELEMENT_ARRAY_BUFFER, null);
    GL_CONTEXT.bindRenderbuffer(GL_CONTEXT.RENDERBUFFER, null);
    GL_CONTEXT.bindFramebuffer(GL_CONTEXT.FRAMEBUFFER, null);

    GL_CONTEXT.deleteProgram(SHADERS.moveAgentProg);
    GL_CONTEXT.deleteProgram(SHADERS.renderAgentProg);
    GL_CONTEXT.deleteProgram(SHADERS.postProcessingProg);

    GL_CONTEXT.deleteFramebuffer(FRAME_BUFFERS.agentFramebuffer);
    GL_CONTEXT.deleteFramebuffer(FRAME_BUFFERS.postProcessingFrameBuffer);

    GL_CONTEXT.deleteBuffer(BUFFERS.lookupBuffer);
    GL_CONTEXT.deleteBuffer(BUFFERS.positionBuffer);

    GL_CONTEXT.deleteTexture(TEXTURES.agentTex);
    GL_CONTEXT.deleteTexture(TEXTURES.agentTex_);
    GL_CONTEXT.deleteTexture(TEXTURES.agentColor);
    GL_CONTEXT.deleteTexture(TEXTURES.renderTex);
    GL_CONTEXT.deleteTexture(TEXTURES.renderTex_);
}