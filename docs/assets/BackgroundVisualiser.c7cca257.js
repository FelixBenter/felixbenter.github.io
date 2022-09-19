import{_ as oe,E as ie,F as ue,V as fe}from"./index.50cc1cd0.js";var z=function(){var r=function(e){window.console&&window.console.log&&window.console.log(e)},t=function(e){window.console&&window.console.error?window.console.error(e):r(e)},m={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},bindBuffer:{2:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}},bufferData:{3:{0:!0,2:!0},4:{0:!0,2:!0},5:{0:!0,2:!0}},bufferSubData:{3:{0:!0},4:{0:!0},5:{0:!0}},copyBufferSubData:{5:{0:!0,1:!0}},getBufferSubData:{3:{0:!0},4:{0:!0},5:{0:!0}},blitFramebuffer:{10:{8:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]},9:!0}},framebufferTextureLayer:{5:{0:!0,1:!0}},invalidateFramebuffer:{2:{0:!0}},invalidateSubFramebuffer:{6:{0:!0}},readBuffer:{1:{0:!0}},getInternalformatParameter:{3:{0:!0,1:!0,2:!0}},renderbufferStorageMultisample:{5:{0:!0,2:!0}},texStorage2D:{5:{0:!0,2:!0}},texStorage3D:{6:{0:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0},10:{0:!0,2:!0,6:!0,7:!0}},texImage3D:{10:{0:!0,2:!0,7:!0,8:!0},11:{0:!0,2:!0,7:!0,8:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0},10:{0:!0,6:!0,7:!0}},texSubImage3D:{11:{0:!0,8:!0,9:!0},12:{0:!0,8:!0,9:!0}},copyTexSubImage3D:{9:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0},8:{0:!0,2:!0},9:{0:!0,2:!0}},compressedTexImage3D:{8:{0:!0,2:!0},9:{0:!0,2:!0},10:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0},9:{0:!0,6:!0},10:{0:!0,6:!0}},compressedTexSubImage3D:{10:{0:!0,8:!0},11:{0:!0,8:!0},12:{0:!0,8:!0}},vertexAttribIPointer:{5:{2:!0}},drawArraysInstanced:{4:{0:!0}},drawElementsInstanced:{5:{0:!0,2:!0}},drawRangeElements:{6:{0:!0,4:!0}},readPixels:{7:{4:!0,5:!0},8:{4:!0,5:!0}},clearBufferfv:{3:{0:!0},4:{0:!0}},clearBufferiv:{3:{0:!0},4:{0:!0}},clearBufferuiv:{3:{0:!0},4:{0:!0}},clearBufferfi:{4:{0:!0}},beginQuery:{2:{0:!0}},endQuery:{1:{0:!0}},getQuery:{2:{0:!0,1:!0}},getQueryParameter:{2:{1:!0}},samplerParameteri:{3:{1:!0,2:!0}},samplerParameterf:{3:{1:!0}},getSamplerParameter:{2:{1:!0}},fenceSync:{2:{0:!0,1:{enumBitwiseOr:[]}}},clientWaitSync:{3:{1:{enumBitwiseOr:["SYNC_FLUSH_COMMANDS_BIT"]}}},waitSync:{3:{1:{enumBitwiseOr:[]}}},getSyncParameter:{2:{1:!0}},bindTransformFeedback:{2:{0:!0}},beginTransformFeedback:{1:{0:!0}},transformFeedbackVaryings:{3:{2:!0}},bindBufferBase:{3:{0:!0}},bindBufferRange:{5:{0:!0}},getIndexedParameter:{2:{0:!0}},getActiveUniforms:{3:{2:!0}},getActiveUniformBlockParameter:{3:{2:!0}}},a=null,f=null;function E(e){if(a==null){a={},f={};for(var u in e)typeof e[u]=="number"&&(a[e[u]]=u,f[u]=e[u])}}function v(){if(a==null)throw"WebGLDebugUtils.init(ctx) not called"}function p(e){return v(),a[e]!==void 0}function h(e){v();var u=a[e];return u!==void 0?"gl."+u:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function B(e,u,c,T){var n=m[e];if(n!==void 0){var n=n[u];if(n!==void 0&&n[c])if(typeof n[c]=="object"&&n[c].enumBitwiseOr!==void 0){for(var L=n[c].enumBitwiseOr,d=0,A=[],x=0;x<L.length;++x){var g=f[L[x]];(T&g)!==0&&(d|=g,A.push(h(g)))}return d===T?A.join(" | "):h(T)}else return h(T)}return T===null?"null":T===void 0?"undefined":T.toString()}function D(e,u){for(var c="",T=u.length,n=0;n<T;++n)c+=(n==0?"":", ")+B(e,T,n,u[n]);return c}function G(e,u,c){e.__defineGetter__(c,function(){return u[c]}),e.__defineSetter__(c,function(T){u[c]=T})}function M(e,u,c,T){T=T||e,E(e),u=u||function(g,I,N){for(var F="",w=N.length,O=0;O<w;++O)F+=(O==0?"":", ")+B(I,w,O,N[O]);t("WebGL error "+h(g)+" in "+I+"("+F+")")};var n={};function L(g,I){return function(){c&&c(I,arguments);var N=g[I].apply(g,arguments),F=T.getError();return F!=0&&(n[F]=!0,u(F,I,arguments)),N}}var d={};for(var A in e)if(typeof e[A]=="function")if(A!="getExtension")d[A]=L(e,A);else{var x=L(e,A);d[A]=function(){var g=x.apply(e,arguments);return g?M(g,u,c,T):null}}else G(d,e,A);return d.getError=function(){for(var g in n)if(n.hasOwnProperty(g)&&n[g])return n[g]=!1,g;return e.NO_ERROR},d}function _(e){var u=!!e.createTransformFeedback;u&&e.bindVertexArray(null);var c=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,T);for(var n=0;n<c;++n)e.disableVertexAttribArray(n),e.vertexAttribPointer(n,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(n,0),u&&e.vertexAttribDivisor(n,0);e.deleteBuffer(T);for(var L=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),n=0;n<L;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null),u&&(e.bindTexture(e.TEXTURE_2D_ARRAY,null),e.bindTexture(e.TEXTURE_3D,null),e.bindSampler(n,null));if(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT),u){e.drawBuffers([e.BACK]),e.readBuffer(e.BACK),e.bindBuffer(e.COPY_READ_BUFFER,null),e.bindBuffer(e.COPY_WRITE_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null);for(var d=e.getParameter(e.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS),n=0;n<d;++n)e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,n,null);for(var A=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS),n=0;n<A;++n)e.bindBufferBase(e.UNIFORM_BUFFER,n,null);e.disable(e.RASTERIZER_DISCARD),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.hint(e.FRAGMENT_SHADER_DERIVATIVE_HINT,e.DONT_CARE)}for(;e.getError(););}function U(e){var u,n,c=[],T=[],n={},L=1,d=!1,A=[],x=0,g=0,I=!1,N=0,F,w={};e.getContext=function(o){return function(){var i=o.apply(e,arguments);if(i instanceof WebGLRenderingContext||window.WebGL2RenderingContext&&i instanceof WebGL2RenderingContext){if(i!=u){if(u)throw"got different context";F=window.WebGL2RenderingContext&&i instanceof WebGL2RenderingContext,u=i,n=ae(u)}return n}return i}}(e.getContext);function O(o){return typeof o=="function"?o:function(i){o.handleEvent(i)}}var Z=function(o){c.push(O(o))},J=function(o){T.push(O(o))};function ee(o){var i=o.addEventListener;o.addEventListener=function(b,S,y){switch(b){case"webglcontextlost":Z(S);break;case"webglcontextrestored":J(S);break;default:i.apply(o,arguments)}}}ee(e),e.loseContext=function(){if(!d){for(d=!0,x=0,++L;u.getError(););re(),w[u.CONTEXT_LOST_WEBGL]=!0;var o=$("context lost"),i=c.slice();setTimeout(function(){for(var b=0;b<i.length;++b)i[b](o);N>=0&&setTimeout(function(){e.restoreContext()},N)},0)}},e.restoreContext=function(){d&&T.length&&setTimeout(function(){if(!I)throw"can not restore. webglcontestlost listener did not call event.preventDefault";ne(),_(u),d=!1,g=0,I=!1;for(var o=T.slice(),i=$("context restored"),b=0;b<o.length;++b)o[b](i)},0)},e.loseContextInNCalls=function(o){if(d)throw"You can not ask a lost contet to be lost";x=g+o},e.getNumCalls=function(){return g},e.setRestoreTimeout=function(o){N=o};function re(){for(var o=Object.keys(w),i=0;i<o.length;++i)delete w[o[i]]}function P(){++g,d||x==g&&e.loseContext()}function te(o,i){var b=o[i];return function(){if(P(),!d){var S=b.apply(o,arguments);return S}}}function ne(){for(var o=0;o<A.length;++o){var i=A[o];i instanceof WebGLBuffer?u.deleteBuffer(i):i instanceof WebGLFramebuffer?u.deleteFramebuffer(i):i instanceof WebGLProgram?u.deleteProgram(i):i instanceof WebGLRenderbuffer?u.deleteRenderbuffer(i):i instanceof WebGLShader?u.deleteShader(i):i instanceof WebGLTexture?u.deleteTexture(i):F&&(i instanceof WebGLQuery?u.deleteQuery(i):i instanceof WebGLSampler?u.deleteSampler(i):i instanceof WebGLSync?u.deleteSync(i):i instanceof WebGLTransformFeedback?u.deleteTransformFeedback(i):i instanceof WebGLVertexArrayObject&&u.deleteVertexArray(i))}}function $(o){return{statusMessage:o,preventDefault:function(){I=!0}}}return e;function ae(o){for(var i in o)typeof o[i]=="function"?n[i]=te(o,i):G(n,o,i);n.getError=function(){if(P(),!d)for(var R;R=u.getError();)w[R]=!0;for(var R in w)if(w[R])return delete w[R],R;return n.NO_ERROR};var b=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"];F&&b.push("createQuery","createSampler","fenceSync","createTransformFeedback","createVertexArray");for(var S=0;S<b.length;++S){var y=b[S];n[y]=function(R){return function(){if(P(),d)return null;var H=R.apply(o,arguments);return H.__webglDebugContextLostId__=L,A.push(H),H}}(o[y])}var K=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];F&&K.push("getInternalformatParameter","getQuery","getQueryParameter","getSamplerParameter","getSyncParameter","getTransformFeedbackVarying","getIndexedParameter","getUniformIndices","getActiveUniforms","getActiveUniformBlockParameter","getActiveUniformBlockName");for(var S=0;S<K.length;++S){var y=K[S];n[y]=function(j){return function(){return P(),d?null:j.apply(o,arguments)}}(n[y])}var Y=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];F&&Y.push("isQuery","isSampler","isSync","isTransformFeedback","isVertexArray");for(var S=0;S<Y.length;++S){var y=Y[S];n[y]=function(j){return function(){return P(),d?!1:j.apply(o,arguments)}}(n[y])}return n.checkFramebufferStatus=function(R){return function(){return P(),d?n.FRAMEBUFFER_UNSUPPORTED:R.apply(o,arguments)}}(n.checkFramebufferStatus),n.getAttribLocation=function(R){return function(){return P(),d?-1:R.apply(o,arguments)}}(n.getAttribLocation),n.getVertexAttribOffset=function(R){return function(){return P(),d?0:R.apply(o,arguments)}}(n.getVertexAttribOffset),n.isContextLost=function(){return d},F&&(n.getFragDataLocation=function(R){return function(){return P(),d?-1:R.apply(o,arguments)}}(n.getFragDataLocation),n.clientWaitSync=function(R){return function(){return P(),d?n.WAIT_FAILED:R.apply(o,arguments)}}(n.clientWaitSync),n.getUniformBlockIndex=function(R){return function(){return P(),d?n.INVALID_INDEX:R.apply(o,arguments)}}(n.getUniformBlockIndex)),n}}return{init:E,mightBeEnum:p,glEnumToString:h,glFunctionArgToString:B,glFunctionArgsToString:D,makeDebugContext:M,makeLostContextSimulatingCanvas:U,resetToInitialState:_}}();const se=2,de=30;var q;const s={agents:null,agentColors:null,canvas:null,preset:null};var l=null,W=null,X=null,V=null,C=null;function le(r){const t=document.getElementById("vis");document.getElementById("fps"),s.canvas=t,s.preset=r;let m=s.preset.createAgents();s.agents=m.agents,s.agentColors=m.colors,s.sensorRadius=se;var a=t.getContext("webgl2",{preserveDrawingBuffer:!0,premultipliedAlpha:!1});a||(a=t.getContext("webgl",params)||t.getContext("experimental-webgl",params)),a=z.makeDebugContext(a,function(E,v,p){throw z.glEnumToString(E)+" was caused by call to: "+v}),l=a,a.viewport(0,0,t.width,t.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA);var f=a.getExtension("EXT_color_buffer_float");if(!f){alert("EXT_color_buffer_float failed to load");return}q=!0,W=me(a),Te(a,s,W)}function me(r){const t=`#version 300 es
    precision mediump float;

    in vec4 m_position;

    out vec2 v_texCoord;

    void main(void)
    {
        gl_Position = vec4(m_position.xy, 0.0, 1.0);
        v_texCoord = m_position.zw;
    }`,m=`#version 300 es
    precision mediump float;
    precision mediump int;
    precision mediump sampler2D;
    precision mediump usampler2D;

    uniform usampler2D agentTex; // agent positions
    uniform sampler2D renderTex;
    in vec2 v_texCoord;

    const float PI = 3.141;
    const float maxSpeed = `+(s.preset.maxSpeed/s.canvas.width).toFixed(4)+`;
    const float turnSpeed = `+s.preset.turnSpeed.toFixed(4)+`;
    const float width = `+s.canvas.width.toFixed(1)+`;
    const float height = `+s.canvas.height.toFixed(1)+`;
    const float sensorRadius = `+(s.sensorRadius/s.canvas.width).toFixed(4)+`;
    const float sensorOffsetDistance = `+(s.preset.sensorOffsetDistance/s.canvas.width).toFixed(4)+`;
    const float leftSensorAngle = `+s.preset.leftSensorAngle.toFixed(2)+`;
    const float rightSensorAngle = `+s.preset.rightSensorAngle.toFixed(2)+`;
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
    }`,a=`#version 300 es
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

        gl_PointSize = `+s.preset.pointSize.toFixed(2)+`;
    }`,f=`#version 300 es
    precision mediump float;
    precision mediump int;
    precision mediump sampler2D;

    in vec4 col;

    out vec4 color;

    void main(void)
    {
        color = col;
    }`,E=`#version 300 es
    precision mediump float;
    in vec4 m_position;
    out vec2 v_texCoord;

    void main(void)
    {
        gl_Position = vec4(m_position.xy, 0.0, 1.0);
        v_texCoord = m_position.pq;
    }`,v=`#version 300 es
    precision mediump float;
    precision mediump sampler2D;

    const float fadeSpeed = `+(s.preset.fadeSpeed/255).toFixed(7)+`;
    const float width = `+s.canvas.width.toFixed(1)+`;
    const float height = `+s.canvas.height.toFixed(1)+`;

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
    }`,p=Q(r,t,m);r.useProgram(p);const h=r.getUniformLocation(p,"agentTex");r.uniform1i(h,0);const B=r.getUniformLocation(p,"renderTex");r.uniform1i(B,1);const D=Q(r,a,f);r.useProgram(D);const G=r.getUniformLocation(D,"agentTex");r.uniform1i(G,0);const M=r.getUniformLocation(D,"agentCol");r.uniform1i(M,1);const _=Q(r,E,v);r.useProgram(_);const U=r.getUniformLocation(_,"renderTex");return r.uniform1i(U,0),r.useProgram(null),{moveAgentProg:p,renderAgentProg:D,postProcessingProg:_}}function Q(r,t,m){const a=r.createShader(r.VERTEX_SHADER);r.shaderSource(a,t),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)||console.error(r.getShaderInfoLog(a));const f=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(f,m),r.compileShader(f),r.getShaderParameter(f,r.COMPILE_STATUS)||console.error(r.getShaderInfoLog(f));const E=r.createProgram();return r.attachShader(E,a),r.attachShader(E,f),r.linkProgram(E),r.deleteShader(a),r.deleteShader(f),E}function Te(r,t,m){let a=[],f=t.canvas.height/t.canvas.width;for(let _=0;_<t.agents.length;_++)a.push(t.agents[_].x*f+.5),a.push(t.agents[_].y+.5),a.push(t.agents[_].rot),a.push(.5);C=Ee(r,new Float32Array(a),new Uint8Array(t.agentColors)),r.useProgram(m.moveAgentProg),r.useProgram(null);var E=r.getAttribLocation(m.moveAgentProg,"m_position"),v=r.getAttribLocation(m.renderAgentProg,"r_agentCoord"),p=r.getAttribLocation(m.postProcessingProg,"m_position");X={positionBuffer:r.createBuffer(),lookupBuffer:r.createBuffer(),inputBuffer:r.createBuffer()},r.bindBuffer(r.ARRAY_BUFFER,X.positionBuffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,-1,1,0,1,1,-1,1,0,1,1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(E),r.vertexAttribPointer(E,4,r.FLOAT,!1,0,0),r.vertexAttribPointer(p,4,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,X.lookupBuffer);let h=[];for(let _=0;_<C.agentTextureLength;_++)for(let U=0;U<C.agentTextureLength;U++)h.push((U+.5)/C.agentTextureLength),h.push((_+.5)/C.agentTextureLength);r.bufferData(r.ARRAY_BUFFER,new Float32Array(h),r.STATIC_DRAW),r.enableVertexAttribArray(v),r.bindBuffer(r.ARRAY_BUFFER,X.lookupBuffer),r.vertexAttribPointer(v,2,r.FLOAT,!1,0,0),V={agentFramebuffer:r.createFramebuffer(),postProcessingFrameBuffer:r.createFramebuffer()};var B=!0,D=window.performance.now(),G=1e3/de;function M(_){if(!q)return;let U=_-D;U>G&&(D=_-U%G,ge(B,r,W,V,C),B=!B),window.requestAnimationFrame(M)}window.requestAnimationFrame(M)}function k(r,t,m,a,f,E,v){const p=r.createTexture();return r.bindTexture(r.TEXTURE_2D,p),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_BASE_LEVEL,0),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAX_LEVEL,0),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,t,m,a,0,f,E,v),r.bindTexture(r.TEXTURE_2D,null),p}function Ee(r,t,m){const a=Math.ceil(Math.sqrt(s.agents.length));let f=new Uint32Array(t.buffer);const E=k(r,r.RGBA32UI,a,a,r.RGBA_INTEGER,r.UNSIGNED_INT,f),v=k(r,r.RGBA32UI,a,a,r.RGBA_INTEGER,r.UNSIGNED_INT,null),p=k(r,r.RGBA,a,a,r.RGBA,r.UNSIGNED_BYTE,m),h=k(r,r.RGBA,s.canvas.width,s.canvas.height,r.RGBA,r.UNSIGNED_BYTE,null),B=k(r,r.RGBA,s.canvas.width,s.canvas.height,r.RGBA,r.UNSIGNED_BYTE,null);return{agentTexture:E,agentTextureSwap:v,agentColor:p,agentTextureLength:a,renderTexture:h,renderTextureSwap:B}}function ge(r,t,m,a,f){t.viewport(0,0,f.agentTextureLength,f.agentTextureLength),t.useProgram(m.moveAgentProg),t.bindFramebuffer(t.FRAMEBUFFER,a.agentFramebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r?f.agentTextureSwap:f.agentTexture,0),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,r?f.agentTexture:f.agentTextureSwap),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,f.renderTexture),t.drawArrays(t.TRIANGLES,0,6),t.viewport(0,0,s.canvas.width,s.canvas.height),t.useProgram(m.renderAgentProg),t.bindFramebuffer(t.FRAMEBUFFER,a.postProcessingFrameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r?f.renderTextureSwap:f.renderTexture,0),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,f.agentTexture),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,f.agentColor),t.drawArrays(t.POINTS,0,s.agents.length),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r?f.renderTexture:f.renderTextureSwap,0),t.useProgram(m.postProcessingProg),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,r?f.renderTextureSwap:f.renderTexture),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.drawArrays(t.TRIANGLES,0,6)}function ce(){q=!1;for(var r=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),t=0;t<r;++t)l.activeTexture(l.TEXTURE0+t),l.bindTexture(l.TEXTURE_2D,null),l.bindTexture(l.TEXTURE_CUBE_MAP,null);l.bindBuffer(l.ARRAY_BUFFER,null),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null),l.bindRenderbuffer(l.RENDERBUFFER,null),l.bindFramebuffer(l.FRAMEBUFFER,null),l.deleteProgram(W.moveAgentProg),l.deleteProgram(W.renderAgentProg),l.deleteProgram(W.postProcessingProg),l.deleteFramebuffer(V.agentFramebuffer),l.deleteFramebuffer(V.postProcessingFrameBuffer),l.deleteBuffer(X.lookupBuffer),l.deleteBuffer(X.positionBuffer),l.deleteTexture(C.agentTex),l.deleteTexture(C.agentTex_),l.deleteTexture(C.agentColor),l.deleteTexture(C.renderTex),l.deleteTexture(C.renderTex_)}const Re=2**(2*8);let _e=[{name:"Circle Towards Centre",createAgents:function(){let r=[],t=[],m=.4;for(let a=0;a<Re;a++){let f=2*Math.PI*Math.random(),E=m*Math.sqrt(Math.random()),v=E*Math.cos(f),p=E*Math.sin(f),h=Math.atan2(-p,-v);r.push({x:Math.sin(a),x:v,y:p,rot:h.toFixed(2)}),t.push(255),t.push(255),t.push(255),t.push(255)}return{agents:r,colors:t}},pointSize:1,turnSpeed:.25,maxSpeed:4,fadeSpeed:10,sensorOffsetDistance:20,leftSensorAngle:.25,rightSensorAngle:-.25}];const pe=ie({name:"BackgroundVisualiser",components:{},mounted(){this.$nextTick(()=>{var r=this.$refs.visCanvas;r.width=Math.round(window.innerWidth),r.height=Math.round(window.innerHeight);var r=this.$refs.visCanvas,t=r.parentNode,m=getComputedStyle(t),a=parseInt(m.getPropertyValue("width"),10),f=parseInt(m.getPropertyValue("height"),10);r.width=a-100,r.height=f-300,le(_e[0])})},unmounted(){ce()},methods:{},setup(){return{}}}),ve={id:"vis",ref:"visCanvas"};function Ae(r,t,m,a,f,E){return ue(),fe("canvas",ve,null,512)}var he=oe(pe,[["render",Ae]]);export{he as default};
