import{_ as l,E as S,F as g,V as F}from"./index.478b8c5f.js";const w=2,U=30,n={agents:null,agentColors:null,canvas:null,preset:null};var _=null,R=null,A=null,m=null;function P(e){const t=document.getElementById("vis");document.getElementById("fps"),n.canvas=t,n.preset=e;let a=n.preset.createAgents();n.agents=a.agents,n.agentColors=a.colors,n.sensorRadius=w;const r=t.getContext("webgl2",{preserveDrawingBuffer:!0,premultipliedAlpha:!1});r||(r=t.getContext("webgl",params)||t.getContext("experimental-webgl",params)),r.viewport(0,0,t.width,t.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);var o=r.getExtension("EXT_color_buffer_float");if(!o){alert("EXT_color_buffer_float failed to load");return}_=B(r),D(r,n,_)}function B(e){const t=`#version 300 es
    precision mediump float;

    in vec4 m_position;

    out vec2 v_texCoord;

    void main(void)
    {
        gl_Position = vec4(m_position.xy, 0.0, 1.0);
        v_texCoord = m_position.zw;
    }`,a=`#version 300 es
    precision mediump float;
    precision mediump int;
    precision mediump sampler2D;
    precision mediump usampler2D;

    uniform usampler2D agentTex; // agent positions
    uniform sampler2D renderTex;
    in vec2 v_texCoord;

    const float PI = 3.141;
    const float maxSpeed = `+(n.preset.maxSpeed/n.canvas.width).toFixed(4)+`;
    const float turnSpeed = `+n.preset.turnSpeed.toFixed(4)+`;
    const float width = `+n.canvas.width.toFixed(1)+`;
    const float height = `+n.canvas.height.toFixed(1)+`;
    const float sensorRadius = `+(n.sensorRadius/n.canvas.width).toFixed(4)+`;
    const float sensorOffsetDistance = `+(n.preset.sensorOffsetDistance/n.canvas.width).toFixed(4)+`;
    const float leftSensorAngle = `+n.preset.leftSensorAngle.toFixed(2)+`;
    const float rightSensorAngle = `+n.preset.rightSensorAngle.toFixed(2)+`;
    const float randomWeight = 0.05;

    const float aspectRatio = width/height;
    const float aspectRatioInv = height/width;

    out uvec4 result;

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
                sum += length(reading.rgb);
            }
        }
        return sum;
    }

    void main(void)
    {
        uint pixelIndex = uint((gl_FragCoord.y * width) + (gl_FragCoord.x));
        uint pseudoRandomNumber = hash(pixelIndex);
        float pseudoRandomWeight = float(pseudoRandomNumber) / 4294967295.0; // normalise

        uvec4 agent = texture(agentTex, v_texCoord);
        float x = uintBitsToFloat(agent.x);
        float y = uintBitsToFloat(agent.y);
        float r = uintBitsToFloat(agent.z);
        float v = uintBitsToFloat(agent.w);

        // move agent along current path
        x += cos(r) * v * maxSpeed * aspectRatioInv;
        y += sin(r) * v * maxSpeed;

        // check boundaries and reflect angle if hit
        if ( x < 0.0 || x > 1.0 || y < 0.0 || y > 1.0 )
        {
            /*
            x = min(0.99, max(-0.99, x));
            y = min(0.99, max(-0.99, y));
            float pseudoRandomTurnWeight = float(hash(pseudoRandomNumber)) / 4294967295.0;
            r += pseudoRandomTurnWeight * PI;
            */

            // pass to other side
            if (x < 0.0) x = 0.99; if (x > 1.0) x = 0.01;
            if (y < 0.0) y = 0.99; if (y > 1.0) y = 0.01;
        }


        float forwardReading = sense(x, y, r, 0.0);
        float leftReading = sense(x, y, r, leftSensorAngle);
        float rightReading = sense(x, y, r, rightSensorAngle);

        if (forwardReading > leftReading && forwardReading > rightReading)
        {
            r += 0.0; // no change
            v = min(v + 0.005 * pseudoRandomWeight, 1.0);
        }
        else if (forwardReading < leftReading && forwardReading < rightReading)
        {
            r += (pseudoRandomWeight-0.5) * turnSpeed; // turn randomly
            v = max(v - 0.005 * pseudoRandomWeight, 0.1);
        }
        else if (rightReading > forwardReading && forwardReading > leftReading)
        {
            r -= turnSpeed + turnSpeed * (pseudoRandomWeight-0.5); // turn left
        }
        else if (leftReading > forwardReading && forwardReading > rightReading)
        {
            r += turnSpeed + turnSpeed * (pseudoRandomWeight-0.5); // turn right
        }

        uint x_ = floatBitsToUint(x);
        uint y_ = floatBitsToUint(y);
        uint r_ = floatBitsToUint(r);
        uint v_ = floatBitsToUint(v);

        result = uvec4(x_, y_, r_, v_);
    }`,r=`#version 300 es
    precision mediump float;

    in vec2 r_position;
    in vec2 r_agentCoord;

    precision mediump sampler2D;
    precision mediump usampler2D;

    uniform usampler2D agentTex;
    uniform sampler2D agentCol;

    out vec4 col;

    void main(void)
    {
        // get the r & g (x & y positions) value of pixels in agentTex
        uvec4 agent = texture(agentTex, r_agentCoord);
        float v = uintBitsToFloat(agent.w);

        col = texture(agentCol, r_agentCoord);
        //col = vec4(v * col.r, col.g, (1.0-v) * col.b, col.a);

        float x = uintBitsToFloat(agent.x);
        float y = uintBitsToFloat(agent.y);
        gl_Position = vec4(2.0 * x - 1.0, 2.0 * y - 1.0, 0.0, 1.0);

        gl_PointSize = `+n.preset.pointSize.toFixed(2)+`;
    }`,o=`#version 300 es
    precision mediump float;
    precision mediump int;
    precision mediump sampler2D;

    in vec4 col;

    out vec4 color;

    void main(void)
    {
        color = col;
    }`,i=`#version 300 es
    precision mediump float;
    in vec4 m_position;
    out vec2 v_texCoord;

    void main(void)
    {
        gl_Position = vec4(m_position.xy, 0.0, 1.0);
        v_texCoord = m_position.pq;
    }`,d=`#version 300 es
    precision mediump float;
    precision mediump sampler2D;

    const float fadeSpeed = `+(n.preset.fadeSpeed/255).toFixed(7)+`;
    const float width = `+n.canvas.width.toFixed(1)+`;
    const float height = `+n.canvas.height.toFixed(1)+`;

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
    }`,u=E(e,t,a);e.useProgram(u);const f=e.getUniformLocation(u,"agentTex");e.uniform1i(f,0);const T=e.getUniformLocation(u,"renderTex");e.uniform1i(T,1);const p=E(e,r,o);e.useProgram(p);const h=e.getUniformLocation(p,"agentTex");e.uniform1i(h,0);const v=e.getUniformLocation(p,"agentCol");e.uniform1i(v,1);const s=E(e,i,d);e.useProgram(s);const c=e.getUniformLocation(s,"renderTex");return e.uniform1i(c,0),e.useProgram(null),{moveAgentProg:u,renderAgentProg:p,postProcessingProg:s}}function E(e,t,a){const r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(r));const o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,a),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(o));const i=e.createProgram();return e.attachShader(i,r),e.attachShader(i,o),e.linkProgram(i),e.deleteShader(r),e.deleteShader(o),i}function D(e,t,a){let r=[],o=t.canvas.height/t.canvas.width;for(let s=0;s<t.agents.length;s++)r.push(t.agents[s].x*o+.5),r.push(t.agents[s].y+.5),r.push(t.agents[s].rot),r.push(.5);m=C(e,new Float32Array(r),new Uint8Array(t.agentColors)),e.useProgram(a.moveAgentProg),e.useProgram(null);var i=e.getAttribLocation(a.moveAgentProg,"m_position"),d=e.getAttribLocation(a.renderAgentProg,"r_agentCoord"),u=e.getAttribLocation(a.postProcessingProg,"m_position");R={positionBuffer:e.createBuffer(),lookupBuffer:e.createBuffer(),inputBuffer:e.createBuffer()},e.bindBuffer(e.ARRAY_BUFFER,R.positionBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,-1,1,0,1,1,-1,1,0,1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(i),e.vertexAttribPointer(i,4,e.FLOAT,!1,0,0),e.vertexAttribPointer(u,4,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,R.lookupBuffer);let f=[];for(let s=0;s<m.agentTextureLength;s++)for(let c=0;c<m.agentTextureLength;c++)f.push((c+.5)/m.agentTextureLength),f.push((s+.5)/m.agentTextureLength);e.bufferData(e.ARRAY_BUFFER,new Float32Array(f),e.STATIC_DRAW),e.enableVertexAttribArray(d),e.bindBuffer(e.ARRAY_BUFFER,R.lookupBuffer),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0),A={agentFramebuffer:e.createFramebuffer(),postProcessingFrameBuffer:e.createFramebuffer()};var T=!0,p=window.performance.now(),h=1e3/U;function v(s){let c=s-p;c>h&&(p=s-c%h,b(T,e,_,A,m),T=!T),window.requestAnimationFrame(v)}window.requestAnimationFrame(v)}function x(e,t,a,r,o,i,d){const u=e.createTexture();return e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_BASE_LEVEL,0),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAX_LEVEL,0),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,a,r,0,o,i,d),e.bindTexture(e.TEXTURE_2D,null),u}function C(e,t,a){const r=Math.ceil(Math.sqrt(n.agents.length));let o=new Uint32Array(t.buffer);const i=x(e,e.RGBA32UI,r,r,e.RGBA_INTEGER,e.UNSIGNED_INT,o),d=x(e,e.RGBA32UI,r,r,e.RGBA_INTEGER,e.UNSIGNED_INT,null),u=x(e,e.RGBA,r,r,e.RGBA,e.UNSIGNED_BYTE,a),f=x(e,e.RGBA,n.canvas.width,n.canvas.height,e.RGBA,e.UNSIGNED_BYTE,null),T=x(e,e.RGBA,n.canvas.width,n.canvas.height,e.RGBA,e.UNSIGNED_BYTE,null);return{agentTexture:i,agentTextureSwap:d,agentColor:u,agentTextureLength:r,renderTexture:f,renderTextureSwap:T}}function b(e,t,a,r,o){t.viewport(0,0,o.agentTextureLength,o.agentTextureLength),t.useProgram(a.moveAgentProg),t.bindFramebuffer(t.FRAMEBUFFER,r.agentFramebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e?o.agentTextureSwap:o.agentTexture,0),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,e?o.agentTexture:o.agentTextureSwap),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,o.renderTexture),t.drawArrays(t.TRIANGLES,0,6),t.viewport(0,0,n.canvas.width,n.canvas.height),t.useProgram(a.renderAgentProg),t.bindFramebuffer(t.FRAMEBUFFER,r.postProcessingFrameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e?o.renderTextureSwap:o.renderTexture,0),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,o.agentTexture),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,o.agentColor),t.drawArrays(t.POINTS,0,n.agents.length),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e?o.renderTexture:o.renderTextureSwap,0),t.useProgram(a.postProcessingProg),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,e?o.renderTextureSwap:o.renderTexture),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.drawArrays(t.TRIANGLES,0,6)}const y=2**(2*8);let I=[{name:"Circle Towards Centre",createAgents:function(){let e=[],t=[],a=.4;for(let r=0;r<y;r++){let o=2*Math.PI*Math.random(),i=a*Math.sqrt(Math.random()),d=i*Math.cos(o),u=i*Math.sin(o),f=Math.atan2(-u,-d);e.push({x:Math.sin(r),x:d,y:u,rot:f.toFixed(2)}),t.push(255),t.push(255),t.push(255),t.push(255)}return{agents:e,colors:t}},pointSize:2,turnSpeed:.25,maxSpeed:4,fadeSpeed:10,sensorOffsetDistance:10,leftSensorAngle:.3,rightSensorAngle:-.3}];const L=S({name:"BackgroundVisualiser",components:{},mounted(){this.$nextTick(()=>{var e=this.$refs.visCanvas;e.width=Math.round(window.innerWidth),e.height=Math.round(window.innerHeight);var e=this.$refs.visCanvas,t=e.parentNode,a=getComputedStyle(t),r=parseInt(a.getPropertyValue("width"),10),o=parseInt(a.getPropertyValue("height"),10);e.width=r-100,e.height=o-300,console.log(r,o),P(I[0])})},methods:{},setup(){return{}}}),X={id:"vis",ref:"visCanvas"};function N(e,t,a,r,o,i){return g(),F("canvas",X,null,512)}var G=l(L,[["render",N]]);export{G as default};
