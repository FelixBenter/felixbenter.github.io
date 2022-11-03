import * as shaders from "./shaders";
const SENSOR_RADIUS = 2.0; // in pixels
const TARGET_FPS = 30;
var DO_RENDER;

const config = {
  agents: null,
  agentColors: null,
  canvas: null,
  preset: null,
};

var GL_CONTEXT = null;
var SHADERS = null;
var BUFFERS = null;
var FRAME_BUFFERS = null;
var TEXTURES = null;
var FPS_ELEM = null;

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

function init(canvas, preset) {
  FPS_ELEM = document.getElementById("fps");
  config.canvas = canvas;
  config.preset = preset;
  let agentData = config.preset.createAgents();
  config.agents = agentData.agents;
  config.agentColors = agentData.colors;
  config.sensorRadius = SENSOR_RADIUS;

  var params = {
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: true,
    premultipliedAlpha: false,
  };
  var gl = canvas.getContext("webgl2", params);
  if (!gl) {
    gl =
      canvas.getContext("webgl", params) ||
      canvas.getContext("experimental-webgl", params);
  }

  // DEBUG ERROR HANDLING
  /*
  gl = debug.default.makeDebugContext(gl, function (err, funcName, args) {
    throw (
      debug.default.glEnumToString(err) + " was caused by call to: " + funcName
    );
  });
  */
  GL_CONTEXT = gl;
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  var ext = gl.getExtension("EXT_color_buffer_float");
  if (!ext) {
    alert("EXT_color_buffer_float failed to load");
    return;
  }
  DO_RENDER = true;
  SHADERS = setupShaders(gl);
  setupUniforms(gl, config, SHADERS);
  setupAgentControl(gl, config, SHADERS);
}

function setupShaders(gl) {
  const moveAgent = buildProgram(
    gl,
    shaders.moveAgentVert,
    shaders.moveAgentFrag
  );
  const renderAgent = buildProgram(
    gl,
    shaders.renderAgentVert,
    shaders.renderAgentFrag
  );
  const postProcessing = buildProgram(
    gl,
    shaders.postProcessingVert,
    shaders.postProcessingFrag
  );
  return {
    moveAgent,
    renderAgent,
    postProcessing,
  };
}

function buildProgram(gl, vertSrc, fragSrc) {
  // compile shaders and link to new program
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vertSrc);
  gl.compileShader(vs);
  if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
    console.error(gl.getShaderInfoLog(vs));

  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fragSrc);
  gl.compileShader(fs);
  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
    console.error(gl.getShaderInfoLog(fs));

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
    console.error(gl.getProgramInfoLog(prog));

  // get uniforms
  var uniformCount = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
  var uniforms = {};
  for (let i = 0; i < uniformCount; i++) {
    var uniformName = gl.getActiveUniform(prog, i).name;
    uniforms[uniformName] = gl.getUniformLocation(prog, uniformName);
  }

  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return {
    program: prog,
    uniforms: uniforms,
    use: function () {
      gl.useProgram(this.program);
    },
  };
}

function setupUniforms(gl, config, shaders) {
  // moveAgent
  shaders.moveAgent.use();
  let mvUni = shaders.moveAgent.uniforms;
  gl.uniform1i(mvUni.agentTex, 0);
  gl.uniform1i(mvUni.renderTex, 1);
  gl.uniform1f(mvUni.width, config.canvas.width);
  gl.uniform1f(mvUni.height, config.canvas.height);

  // renderAgent
  shaders.renderAgent.use();
  let raUni = shaders.renderAgent.uniforms;
  gl.uniform1i(raUni.agentTex, 0);
  gl.uniform1i(raUni.agentCol, 1);
  gl.uniform1f(raUni.pointSize, config.preset.pointSize);

  // postprocessing
  shaders.postProcessing.use();
  let ppUni = shaders.postProcessing.uniforms;
  gl.uniform1i(ppUni.renderTex, 0);
  gl.uniform1f(ppUni.fadeSpeed, config.preset.fadeSpeed / 255.0);
  gl.uniform1f(ppUni.width, config.canvas.width);
  gl.uniform1f(ppUni.height, config.canvas.width);

  gl.useProgram(null);
}

function setupAgentControl(gl, config, shaders) {
  // ---------- TEXTURES ----------
  let agentData = [];
  let aspectRatio = config.canvas.height / config.canvas.width;

  for (let i = 0; i < config.agents.length; i++) {
    agentData.push(config.agents[i].x * aspectRatio + 0.5);
    agentData.push(config.agents[i].y + 0.5);
    agentData.push(config.agents[i].rot);
    agentData.push(0.5); // percentage of max speed
  }
  TEXTURES = createTextures(
    gl,
    new Float32Array(agentData),
    new Uint8Array(config.agentColors)
  );

  // ---------- USER INPUT ----------
  gl.useProgram(shaders.moveAgentProg);
  gl.useProgram(null);

  // ---------- VERTEX BUFFERS ----------
  var m_position = gl.getAttribLocation(
    shaders.moveAgent.program,
    "m_position"
  );
  var r_agentCoord = gl.getAttribLocation(
    shaders.renderAgent.program,
    "r_agentCoord"
  );
  var m_position_postprocess = gl.getAttribLocation(
    shaders.postProcessing.program,
    "m_position"
  );

  BUFFERS = {
    positionBuffer: gl.createBuffer(),
    lookupBuffer: gl.createBuffer(),
    inputBuffer: gl.createBuffer(),
  };

  // Vertex + coordinate buffer for rectangle across entire canvas
  gl.bindBuffer(gl.ARRAY_BUFFER, BUFFERS.positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1,
      1,
    ]),
    gl.STATIC_DRAW
  );
  // Give moveAgent and postProcessing access to the vertex buffer
  gl.enableVertexAttribArray(m_position);
  gl.vertexAttribPointer(m_position, 4, gl.FLOAT, false, 0, 0);
  gl.vertexAttribPointer(m_position_postprocess, 4, gl.FLOAT, false, 0, 0);

  // Vertex buffer with locations for each agent pixel in agentTex
  gl.bindBuffer(gl.ARRAY_BUFFER, BUFFERS.lookupBuffer);
  // coordinates for the centre of each pixel in agentTex
  let lookupBufferData = [];
  for (let i = 0; i < TEXTURES.agentTextureLength; i++) {
    for (let j = 0; j < TEXTURES.agentTextureLength; j++) {
      // push x and y coordinates for centre of each pixel
      lookupBufferData.push((j + 0.5) / TEXTURES.agentTextureLength);
      lookupBufferData.push((i + 0.5) / TEXTURES.agentTextureLength);
    }
  }
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(lookupBufferData),
    gl.STATIC_DRAW
  );
  // Give renderAgent this buffer
  gl.enableVertexAttribArray(r_agentCoord);
  gl.bindBuffer(gl.ARRAY_BUFFER, BUFFERS.lookupBuffer);
  gl.vertexAttribPointer(r_agentCoord, 2, gl.FLOAT, false, 0, 0);

  // ---------- FRAME BUFFERS ----------
  FRAME_BUFFERS = {
    agentFramebuffer: gl.createFramebuffer(),
    postProcessingFrameBuffer: gl.createFramebuffer(),
  };

  // ---------- RENDER ----------
  var ping = true;
  var then = window.performance.now();
  var targetInterval = 1000 / TARGET_FPS;

  function tick(now) {
    if (!DO_RENDER) return;
    let deltaTime = now - then;
    if (deltaTime > targetInterval) {
      then = now - (deltaTime % targetInterval);

      updateUniforms(gl, config, SHADERS);
      render(ping, gl, SHADERS, FRAME_BUFFERS, TEXTURES);
      ping = !ping;
    }

    window.requestAnimationFrame(tick);
  }
  window.requestAnimationFrame(tick);
}

function createTexture(gl, internalFormat, width, height, format, type, data) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_BASE_LEVEL, 0);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL, 0);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    internalFormat,
    width,
    height,
    0,
    format,
    type,
    data
  );
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
function createTextures(gl, agentData, agentColorData) {
  const agentTextureLength = Math.ceil(Math.sqrt(config.agents.length));
  let agentDataUInt32 = new Uint32Array(agentData.buffer);

  const agentTex = createTexture(
    gl,
    gl.RGBA32UI,
    agentTextureLength,
    agentTextureLength,
    gl.RGBA_INTEGER,
    gl.UNSIGNED_INT,
    agentDataUInt32
  );
  // swap texture for every 2nd frame of computation
  const agentTex_ = createTexture(
    gl,
    gl.RGBA32UI,
    agentTextureLength,
    agentTextureLength,
    gl.RGBA_INTEGER,
    gl.UNSIGNED_INT,
    null
  );

  const agentColor = createTexture(
    gl,
    gl.RGBA,
    agentTextureLength,
    agentTextureLength,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    agentColorData
  );

  const renderTex = createTexture(
    gl,
    gl.RGBA,
    config.canvas.width,
    config.canvas.height,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    null
  );
  // swap texture for every 2nd frame of rendering
  const renderTex_ = createTexture(
    gl,
    gl.RGBA,
    config.canvas.width,
    config.canvas.height,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    null
  );

  return {
    agentTexture: agentTex,
    agentTextureSwap: agentTex_,
    agentColor: agentColor,
    agentTextureLength: agentTextureLength,
    renderTexture: renderTex,
    renderTextureSwap: renderTex_,
  };
}

function updateUniforms(gl, config, shaders) {
  // moveAgnet
  shaders.moveAgent.use();
  let mvUni = shaders.moveAgent.uniforms;
  gl.uniform1f(
    mvUni.maxSpeed,
    config.preset.maxSpeed.value / config.canvas.width
  );
  gl.uniform1f(mvUni.turnSpeed, config.preset.turnSpeed.value);
  gl.uniform1f(mvUni.sensorRadius, config.sensorRadius / config.canvas.width);
  gl.uniform1f(
    mvUni.sensorOffsetDistance,
    config.preset.sensorOffsetDistance.value / config.canvas.width
  );
  gl.uniform1f(mvUni.sensorAngle, config.preset.sensorAngle.value);
  gl.uniform1f(mvUni.randomWeight, 0.5);
}

function render(ping, gl, shaders, frameBuffers, textures) {
  /*
    Ping-pong buffer: Alternate between agentTex & agentTexSwap,
    and alternate between renderTexture and renderTextureSwap
    Swap the agentTextures
    */

  // ------- AGENT MOVEMENT UPDATE -------

  // Mobile rendering fails here

  gl.viewport(0, 0, textures.agentTextureLength, textures.agentTextureLength);
  shaders.moveAgent.use();

  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffers.agentFramebuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    ping ? textures.agentTextureSwap : textures.agentTexture,
    0
  );
  // set UNIT 0 to be agentTexture or agentTextureSwap
  gl.activeTexture(gl.TEXTURE0 + 0);
  gl.bindTexture(
    gl.TEXTURE_2D,
    ping ? textures.agentTexture : textures.agentTextureSwap
  );
  gl.activeTexture(gl.TEXTURE0 + 1);
  gl.bindTexture(gl.TEXTURE_2D, textures.renderTexture);

  gl.drawArrays(gl.TRIANGLES, 0, 6);

  //var pixels = new Uint32Array(textures.agentTextureLength * textures.agentTextureLength * 16);
  //gl.readPixels(0, 0, textures.agentTextureLength, textures.agentTextureLength, gl.RGBA_INTEGER, gl.UNSIGNED_INT, pixels);

  // --------------------------------------

  // ------- AGENT RENDERING -------
  gl.viewport(0, 0, config.canvas.width, config.canvas.height);
  // Render to the render-texture swap
  //gl.useProgram(shaders.renderAgentProg);
  shaders.renderAgent.use();
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffers.postProcessingFrameBuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    ping ? textures.renderTextureSwap : textures.renderTexture,
    0
  );

  gl.activeTexture(gl.TEXTURE0 + 0);
  gl.bindTexture(gl.TEXTURE_2D, textures.agentTexture);
  gl.activeTexture(gl.TEXTURE0 + 1);
  gl.bindTexture(gl.TEXTURE_2D, textures.agentColor);

  gl.drawArrays(gl.POINTS, 0, config.agents.length);
  // --------------------------------------

  // ------- POST PROCESSING -------
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    ping ? textures.renderTexture : textures.renderTextureSwap,
    0
  );

  //gl.useProgram(shaders.postProcessingProg);
  shaders.postProcessing.use();

  // set texture UNIT 0 to be the render/renderswap
  gl.activeTexture(gl.TEXTURE0 + 0);
  gl.bindTexture(
    gl.TEXTURE_2D,
    ping ? textures.renderTextureSwap : textures.renderTexture
  );

  gl.drawArrays(gl.TRIANGLES, 0, 6);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  gl.drawArrays(gl.TRIANGLES, 0, 6); // draw to screen
  // --------------------------------------
}

function shutdown() {
  DO_RENDER = false;
  var numTextureUnits = GL_CONTEXT.getParameter(
    GL_CONTEXT.MAX_TEXTURE_IMAGE_UNITS
  );
  for (var unit = 0; unit < numTextureUnits; ++unit) {
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

  gl.getExtension("WEBGL_lose_context").loseContext();
}

export { init, shutdown };
