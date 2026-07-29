import{A as e,C as t,D as n,E as r,F as i,G as a,H as o,K as s,O as c,Q as l,R as u,S as d,T as f,U as p,W as m,_ as h,a as ee,ct as g,ft as _,g as v,gt as y,it as b,lt as x,n as S,o as C,ot as w,q as T,w as E,x as D,y as O,z as te}from"./index-Bm-AxUdT.js";import{g as ne}from"./use-align-rrgVsID_.js";import{a as re,i as k,s as A,t as j}from"./format-hyAgd6Xk.js";import{n as M,t as ie}from"./use-dark-3sLj9JLR.js";import{t as N}from"./QSelect-BdkfEcj5.js";import{n as P}from"./use-timeout-CMYv7PRi.js";import{n as F,t as I}from"./touch-Cv4_s950.js";import{n as L,t as ae}from"./QCard-CaBWBndW.js";function R(e,t,n){let r=d(e),i,a=r.left-t.event.x,o=r.top-t.event.y,s=Math.abs(a),c=Math.abs(o),l=t.direction;l.horizontal===!0&&l.vertical!==!0?i=a<0?`left`:`right`:l.horizontal!==!0&&l.vertical===!0?i=o<0?`up`:`down`:l.up===!0&&o<0?(i=`up`,s>c&&(l.left===!0&&a<0?i=`left`:l.right===!0&&a>0&&(i=`right`))):l.down===!0&&o>0?(i=`down`,s>c&&(l.left===!0&&a<0?i=`left`:l.right===!0&&a>0&&(i=`right`))):l.left===!0&&a<0?(i=`left`,s<c&&(l.up===!0&&o<0?i=`up`:l.down===!0&&o>0&&(i=`down`))):l.right===!0&&a>0&&(i=`right`,s<c&&(l.up===!0&&o<0?i=`up`:l.down===!0&&o>0&&(i=`down`)));let u=!1;if(i===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};i=t.event.lastDir,u=!0,i===`left`||i===`right`?(r.left-=a,s=0,a=0):(r.top-=o,c=0,o=0)}return{synthetic:u,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:r,direction:i,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:s,y:c},offset:{x:a,y:o},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}var z=0,oe=c({name:`touch-pan`,beforeMount(n,{value:i,modifiers:a}){if(a.mouse!==!0&&e.has.touch!==!0)return;function o(e,n){a.mouse===!0&&n===!0?r(e):(a.stop===!0&&f(e),a.prevent===!0&&t(e))}let s={uid:`qvtp_`+ z++,handler:i,modifiers:a,direction:I(a),noop:D,mouseStart(e){F(e,s)&&O(e)&&(v(s,`temp`,[[document,`mousemove`,`move`,`notPassiveCapture`],[document,`mouseup`,`end`,`passiveCapture`]]),s.start(e,!0))},touchStart(e){if(F(e,s)){let t=e.target;v(s,`temp`,[[t,`touchmove`,`move`,`notPassiveCapture`],[t,`touchcancel`,`end`,`passiveCapture`],[t,`touchend`,`end`,`passiveCapture`]]),s.start(e)}},start(r,i){if(e.is.firefox===!0&&E(n,!0),s.lastEvt=r,i===!0||a.stop===!0){if(s.direction.all!==!0&&(i!==!0||s.modifiers.mouseAllDir!==!0&&s.modifiers.mousealldir!==!0)){let e=r.type.indexOf(`mouse`)===-1?new TouchEvent(r.type,r):new MouseEvent(r.type,r);r.defaultPrevented===!0&&t(e),r.cancelBubble===!0&&f(e),Object.assign(e,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[s.uid]:r.qClonedBy.concat(s.uid)}),s.initialEvent={target:r.target,event:e}}f(r)}let{left:o,top:c}=d(r);s.event={x:o,y:c,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:o,lastY:c}},move(e){if(s.event===void 0)return;let t=d(e),n=t.left-s.event.x,r=t.top-s.event.y;if(n===0&&r===0)return;s.lastEvt=e;let i=s.event.mouse===!0,c=()=>{o(e,i);let t;a.preserveCursor!==!0&&a.preservecursor!==!0&&(t=document.documentElement.style.cursor||``,document.documentElement.style.cursor=`grabbing`),i===!0&&document.body.classList.add(`no-pointer-events--children`),document.body.classList.add(`non-selectable`),P(),s.styleCleanup=e=>{if(s.styleCleanup=void 0,t!==void 0&&(document.documentElement.style.cursor=t),document.body.classList.remove(`non-selectable`),i===!0){let t=()=>{document.body.classList.remove(`no-pointer-events--children`)};e===void 0?t():setTimeout(()=>{t(),e()},50)}else e!==void 0&&e()}};if(s.event.detected===!0){s.event.isFirst!==!0&&o(e,s.event.mouse);let{payload:t,synthetic:n}=R(e,s,!1);t!==void 0&&(s.handler(t)===!1?s.end(e):(s.styleCleanup===void 0&&s.event.isFirst===!0&&c(),s.event.lastX=t.position.left,s.event.lastY=t.position.top,s.event.lastDir=n===!0?void 0:t.direction,s.event.isFirst=!1));return}if(s.direction.all===!0||i===!0&&(s.modifiers.mouseAllDir===!0||s.modifiers.mousealldir===!0)){c(),s.event.detected=!0,s.move(e);return}let l=Math.abs(n),u=Math.abs(r);l!==u&&(s.direction.horizontal===!0&&l>u||s.direction.vertical===!0&&l<u||s.direction.up===!0&&l<u&&r<0||s.direction.down===!0&&l<u&&r>0||s.direction.left===!0&&l>u&&n<0||s.direction.right===!0&&l>u&&n>0?(s.event.detected=!0,s.move(e)):s.end(e,!0))},end(t,r){if(s.event!==void 0){if(h(s,`temp`),e.is.firefox===!0&&E(n,!1),r===!0){var i;(i=s.styleCleanup)==null||i.call(s),s.event.detected!==!0&&s.initialEvent!==void 0&&s.initialEvent.target.dispatchEvent(s.initialEvent.event)}else if(s.event.detected===!0){s.event.isFirst===!0&&s.handler(R(t===void 0?s.lastEvt:t,s).payload);let{payload:e}=R(t===void 0?s.lastEvt:t,s,!0),n=()=>{s.handler(e)};s.styleCleanup===void 0?n():s.styleCleanup(n)}s.event=void 0,s.initialEvent=void 0,s.lastEvt=void 0}}};n.__qtouchpan=s,a.mouse===!0&&v(s,`main`,[[n,`mousedown`,`mouseStart`,`passive${a.mouseCapture===!0||a.mousecapture===!0?`Capture`:``}`]]),e.has.touch===!0&&v(s,`main`,[[n,`touchstart`,`touchStart`,`passive${a.capture===!0?`Capture`:``}`],[n,`touchmove`,`noop`,`notPassiveCapture`]])},updated(e,t){let n=e.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!=`function`&&n.end(),n.handler=t.value),n.direction=I(t.modifiers))},beforeUnmount(t){let n=t.__qtouchpan;if(n!==void 0){var r;n.event!==void 0&&n.end(),h(n,`main`),h(n,`temp`),e.is.firefox===!0&&E(t,!1),(r=n.styleCleanup)==null||r.call(n),delete t.__qtouchpan}}}),se=`q-slider__marker-labels`,ce=e=>({value:e}),le=({marker:e})=>T(`div`,{key:e.value,style:e.style,class:e.classes},e.label),ue=[34,37,40,33,39,38],B={...M,...A,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:`20px`},trackSize:{type:String,default:`4px`},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:`M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0`}},de=[`pan`,`update:modelValue`,`change`];function fe({updateValue:e,updatePosition:t,getDragging:n,formAttrs:r}){let{props:i,emit:a,slots:o,proxy:{$q:c}}=s(),f=ie(i,c),p=re(r),m=_(!1),h=_(!1),g=_(!1),v=_(!1),y=u(()=>i.vertical===!0?`--v`:`--h`),b=u(()=>`-`+(i.switchLabelSide===!0?`switched`:`standard`)),x=u(()=>i.vertical===!0?i.reverse===!0:i.reverse!==(c.lang.rtl===!0)),S=u(()=>isNaN(i.innerMin)===!0||i.innerMin<i.min?i.min:i.innerMin),w=u(()=>isNaN(i.innerMax)===!0||i.innerMax>i.max?i.max:i.innerMax),E=u(()=>i.disable!==!0&&i.readonly!==!0&&S.value<w.value),D=u(()=>{if(i.step===0)return e=>e;let e=(String(i.step).trim().split(`.`)[1]||``).length;return t=>parseFloat(t.toFixed(e))}),O=u(()=>i.step===0?1:i.step),te=u(()=>E.value===!0?i.tabindex||0:-1),k=u(()=>i.max-i.min),A=u(()=>w.value-S.value),M=u(()=>H(S.value)),N=u(()=>H(w.value)),P=u(()=>i.vertical===!0?x.value===!0?`bottom`:`top`:x.value===!0?`right`:`left`),F=u(()=>i.vertical===!0?`height`:`width`),I=u(()=>i.vertical===!0?`width`:`height`),L=u(()=>i.vertical===!0?`vertical`:`horizontal`),ae=u(()=>{let e={role:`slider`,"aria-valuemin":S.value,"aria-valuemax":w.value,"aria-orientation":L.value,"data-step":i.step};return i.disable===!0?e[`aria-disabled`]=`true`:i.readonly===!0&&(e[`aria-readonly`]=`true`),e}),R=u(()=>`q-slider q-slider${y.value} q-slider--${m.value===!0?``:`in`}active inline no-wrap `+(i.vertical===!0?`row`:`column`)+(i.disable===!0?` disabled`:` q-slider--enabled`+(E.value===!0?` q-slider--editable`:``))+(g.value===`both`?` q-slider--focus`:``)+(i.label||i.labelAlways===!0?` q-slider--label`:``)+(i.labelAlways===!0?` q-slider--label-always`:``)+(f.value===!0?` q-slider--dark`:``)+(i.dense===!0?` q-slider--dense q-slider--dense`+y.value:``));function z(e){let t=`q-slider__`+e;return`${t} ${t}${y.value} ${t}${y.value}${b.value}`}function B(e){let t=`q-slider__`+e;return`${t} ${t}${y.value}`}let de=u(()=>{let e=i.selectionColor||i.color;return`q-slider__selection absolute`+(e===void 0?``:` text-${e}`)}),fe=u(()=>B(`markers`)+` absolute overflow-hidden`),pe=u(()=>B(`track-container`)),me=u(()=>z(`pin`)),he=u(()=>z(`label`)),ge=u(()=>z(`text-container`)),_e=u(()=>z(`marker-labels-container`)+(i.markerLabelsClass===void 0?``:` ${i.markerLabelsClass}`)),ve=u(()=>`q-slider__track relative-position no-outline`+(i.trackColor===void 0?``:` bg-${i.trackColor}`)),ye=u(()=>{let e={[I.value]:i.trackSize};return i.trackImg!==void 0&&(e.backgroundImage=`url(${i.trackImg}) !important`),e}),be=u(()=>`q-slider__inner absolute`+(i.innerTrackColor===void 0?``:` bg-${i.innerTrackColor}`)),V=u(()=>{let e=N.value-M.value,t={[P.value]:`${100*M.value}%`,[F.value]:e===0?`2px`:`${100*e}%`};return i.innerTrackImg!==void 0&&(t.backgroundImage=`url(${i.innerTrackImg}) !important`),t});function xe(e){let{min:t,max:n,step:r}=i,a=t+e*(n-t);if(r>0){let e=(a-S.value)%r;a+=(Math.abs(e)>=r/2?(e<0?-1:1)*r:0)-e}return a=D.value(a),j(a,S.value,w.value)}function H(e){return k.value===0?0:(e-i.min)/k.value}function U(e,t){let n=d(e),r=i.vertical===!0?j((n.top-t.top)/t.height,0,1):j((n.left-t.left)/t.width,0,1);return j(x.value===!0?1-r:r,M.value,N.value)}let W=u(()=>ee(i.markers)===!0?i.markers:O.value),G=u(()=>{let e=[],t=W.value,n=i.max,r=i.min;do e.push(r),r+=t;while(r<n);return e.push(n),e}),K=u(()=>{let e=` ${se}${y.value}-`;return`q-slider__marker-labels${e}${i.switchMarkerLabelsSide===!0?`switched`:`standard`}${e}${x.value===!0?`rtl`:`ltr`}`}),q=u(()=>i.markerLabels===!1?null:Ce(i.markerLabels).map((e,t)=>({index:t,value:e.value,label:e.label||e.value,classes:K.value+(e.classes===void 0?``:` `+e.classes),style:{...Y(e.value),...e.style||{}}}))),J=u(()=>({markerList:q.value,markerMap:we.value,classes:K.value,getStyle:Y})),Se=u(()=>{let e=A.value===0?`2px`:100*W.value/A.value;return{...V.value,backgroundSize:i.vertical===!0?`2px ${e}%`:`${e}% 2px`}});function Ce(e){if(e===!1)return null;if(e===!0)return G.value.map(ce);if(typeof e==`function`)return G.value.map(t=>{let n=e(t);return C(n)===!0?{...n,value:t}:{value:t,label:n}});let t=({value:e})=>e>=i.min&&e<=i.max;return Array.isArray(e)===!0?e.map(e=>C(e)===!0?e:{value:e}).filter(t):Object.keys(e).map(t=>{let n=e[t],r=Number(t);return C(n)===!0?{...n,value:r}:{value:r,label:n}}).filter(t)}function Y(e){return{[P.value]:`${100*(e-i.min)/k.value}%`}}let we=u(()=>{if(i.markerLabels===!1)return null;let e={};return q.value.forEach(t=>{e[t.value]=t}),e});function X(){if(o[`marker-label-group`]!==void 0)return o[`marker-label-group`](J.value);let e=o[`marker-label`]||le;return q.value.map(t=>e({marker:t,...J.value}))}let Z=u(()=>[[oe,Te,void 0,{[L.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Te(r){r.isFinal===!0?(v.value!==void 0&&(t(r.evt),r.touch===!0&&e(!0),v.value=void 0,a(`pan`,`end`)),m.value=!1,g.value=!1):r.isFirst===!0?(v.value=n(r.evt),t(r.evt),e(),m.value=!0,a(`pan`,`start`)):(t(r.evt),e())}function Q(){g.value=!1}function Ee(r){t(r,n(r)),e(),h.value=!0,m.value=!0,document.addEventListener(`mouseup`,$,!0)}function $(){h.value=!1,m.value=!1,e(!0),Q(),document.removeEventListener(`mouseup`,$,!0)}function De(r){t(r,n(r)),e(!0)}function Oe(t){ue.includes(t.keyCode)&&e(!0)}function ke(e){if(i.vertical===!0)return null;let t=c.lang.rtl===i.reverse?e:1-e;return{transform:`translateX(calc(${2*t-1} * ${i.thumbSize} / 2 + ${50-100*t}%))`}}function Ae(e){let t=u(()=>h.value===!1&&(g.value===e.focusValue||g.value===`both`)?` q-slider--focus`:``),n=u(()=>`q-slider__thumb q-slider__thumb${y.value} q-slider__thumb${y.value}-${x.value===!0?`rtl`:`ltr`} absolute non-selectable`+t.value+(e.thumbColor.value===void 0?``:` text-${e.thumbColor.value}`)),r=u(()=>({width:i.thumbSize,height:i.thumbSize,[P.value]:`${100*e.ratio.value}%`,zIndex:g.value===e.focusValue?2:void 0})),a=u(()=>e.labelColor.value===void 0?``:` text-${e.labelColor.value}`),o=u(()=>ke(e.ratio.value)),s=u(()=>`q-slider__text`+(e.labelTextColor.value===void 0?``:` text-${e.labelTextColor.value}`));return()=>{let t=[T(`svg`,{class:`q-slider__thumb-shape absolute-full`,viewBox:`0 0 20 20`,"aria-hidden":`true`},[T(`path`,{d:i.thumbPath})]),T(`div`,{class:`q-slider__focus-ring fit`})];return(i.label===!0||i.labelAlways===!0)&&(t.push(T(`div`,{class:me.value+` absolute fit no-pointer-events`+a.value},[T(`div`,{class:he.value,style:{minWidth:i.thumbSize}},[T(`div`,{class:ge.value,style:o.value},[T(`span`,{class:s.value},e.label.value)])])])),i.name!==void 0&&i.disable!==!0&&p(t,`push`)),T(`div`,{class:n.value,style:r.value,...e.getNodeData()},t)}}function je(e,t,n,r){let a=[];i.innerTrackColor!==`transparent`&&a.push(T(`div`,{key:`inner`,class:be.value,style:V.value})),i.selectionColor!==`transparent`&&a.push(T(`div`,{key:`selection`,class:de.value,style:e.value})),i.markers!==!1&&a.push(T(`div`,{key:`marker`,class:fe.value,style:Se.value})),r(a);let o=[ne(`div`,{key:`trackC`,class:pe.value,tabindex:t.value,...n.value},[T(`div`,{class:ve.value,style:ye.value},a)],`slide`,E.value,()=>Z.value)];return i.markerLabels!==!1&&o[i.switchMarkerLabelsSide===!0?`unshift`:`push`](T(`div`,{key:`markerL`,class:_e.value},X())),o}return l(()=>{document.removeEventListener(`mouseup`,$,!0)}),{state:{active:m,focus:g,preventFocus:h,dragging:v,editable:E,classes:R,tabindex:te,attributes:ae,roundValueFn:D,keyStep:O,trackLen:k,innerMin:S,innerMinRatio:M,innerMax:w,innerMaxRatio:N,positionProp:P,sizeProp:F,isReversed:x},methods:{onActivate:Ee,onMobileClick:De,onBlur:Q,onKeyup:Oe,getContent:je,getThumbRenderFn:Ae,convertRatioToModel:xe,convertModelToRatio:H,getDraggingRatio:U}}}var pe=()=>({}),me=n({name:`QSlider`,props:{...B,modelValue:{required:!0,default:null,validator:e=>typeof e==`number`||e===null},labelValue:[String,Number]},emits:de,setup(e,{emit:t}){let{proxy:{$q:n}}=s(),{state:i,methods:a}=fe({updateValue:v,updatePosition:b,getDragging:y,formAttrs:k(e)}),o=_(null),c=_(0),l=_(0);function d(){l.value=e.modelValue===null?i.innerMin.value:j(e.modelValue,i.innerMin.value,i.innerMax.value)}g(()=>`${e.modelValue}|${i.innerMin.value}|${i.innerMax.value}`,d),d();let f=u(()=>a.convertModelToRatio(l.value)),p=u(()=>i.active.value===!0?c.value:f.value),m=u(()=>{let t={[i.positionProp.value]:`${100*i.innerMinRatio.value}%`,[i.sizeProp.value]:`${100*(p.value-i.innerMinRatio.value)}%`};return e.selectionImg!==void 0&&(t.backgroundImage=`url(${e.selectionImg}) !important`),t}),h=a.getThumbRenderFn({focusValue:!0,getNodeData:pe,ratio:p,label:u(()=>e.labelValue===void 0?l.value:e.labelValue),thumbColor:u(()=>e.thumbColor||e.color),labelColor:u(()=>e.labelColor),labelTextColor:u(()=>e.labelTextColor)}),ee=u(()=>i.editable.value===!0?n.platform.is.mobile===!0?{onClick:a.onMobileClick}:{onMousedown:a.onActivate,onFocus:x,onBlur:a.onBlur,onKeydown:S,onKeyup:a.onKeyup}:{});function v(n){l.value!==e.modelValue&&t(`update:modelValue`,l.value),n===!0&&t(`change`,l.value)}function y(){return o.value.getBoundingClientRect()}function b(t,n=i.dragging.value){let r=a.getDraggingRatio(t,n);l.value=a.convertRatioToModel(r),c.value=e.snap!==!0||e.step===0?r:a.convertModelToRatio(l.value)}function x(){i.focus.value=!0}function S(t){if(ue.includes(t.keyCode)===!1)return;r(t);let n=([34,33].includes(t.keyCode)?10:1)*i.keyStep.value,a=([34,37,40].includes(t.keyCode)?-1:1)*(i.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*n;l.value=j(i.roundValueFn.value(l.value+a),i.innerMin.value,i.innerMax.value),v()}return()=>{let t=a.getContent(m,i.tabindex,ee,e=>{e.push(h())});return T(`div`,{ref:o,class:i.classes.value+(e.modelValue===null?` q-slider--no-value`:``),...i.attributes.value,"aria-valuenow":e.modelValue},t)}}}),he=`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2D;
precision mediump usampler2D;

uniform usampler2D agentTex; // agent positions
uniform sampler2D renderTex;

uniform float width;
uniform float height;
uniform float maxSpeed;
uniform float turnSpeed;

uniform float sensorWidth;
uniform float sensorHeight;
uniform float maxPossibleReading;

uniform float sensorOffsetDistance;
uniform float sensorAngle;
uniform float randomWeight;

uniform float acceleration;

in vec2 v_texCoord;

const float PI = 3.141;

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
    for (float i = -sensorWidth; i <= sensorWidth; i += 1.0/width)
    {
        for (float j = -sensorHeight; j <= sensorHeight; j += 1.0/height)
        {
            vec4 reading = texture(renderTex, sensorCentre + vec2(i, j));
            sum += reading.r + reading.g + reading.b;
        }
    }
    return sum / maxPossibleReading;
}

void main(void)
{
    uint pixelIndex = uint((gl_FragCoord.y * width) + (gl_FragCoord.x));
    uint pseudoRandomNumber = hash(pixelIndex);
    float pseudoRandomWeight = float(pseudoRandomNumber) / 4294967295.0; // normalise
    pseudoRandomWeight *= randomWeight;

    uvec4 agent = texture(agentTex, v_texCoord);
    float x = uintBitsToFloat(agent.x);
    float y = uintBitsToFloat(agent.y);
    float r = uintBitsToFloat(agent.z);
    float v = uintBitsToFloat(agent.w);

    // move agent along current path
    x += cos(r) * v * (1.0/width);
    y += sin(r) * v * (1.0/height);

    // check boundaries and reflect angle if hit
    if ( x < 0.0 || x > 1.0 || y < 0.0 || y > 1.0 )
    {
        // pass to other side
        if (x < 0.0) x = 0.99; if (x > 1.0) x = 0.01;
        if (y < 0.0) y = 0.99; if (y > 1.0) y = 0.01;

        // turn them a little
        r += pseudoRandomWeight * PI;
    }


    float forwardReading = sense(x, y, r, 0.0);
    float leftReading = sense(x, y, r, sensorAngle);
    float rightReading = sense(x, y, r, -1.0 * sensorAngle);

    if (forwardReading > leftReading && forwardReading > rightReading)
    {
        r += 0.0; // no change
    }
    else if (forwardReading < leftReading && forwardReading < rightReading)
    {
        r += (pseudoRandomWeight-0.5) * turnSpeed; // turn randomly
    }
    else if (rightReading > forwardReading && forwardReading > leftReading)
    {
        r -= turnSpeed +  ((pseudoRandomWeight-0.5) * turnSpeed); // turn left
    }
    else if (leftReading > forwardReading && forwardReading > rightReading)
    {
        r += turnSpeed + ((pseudoRandomWeight-0.5) * turnSpeed); // turn right
    }

    v = max(max(forwardReading, max(leftReading, rightReading)) * acceleration, 0.1);

    //v = max(max(forwardReading, max(leftReading, rightReading)) * acceleration, 0.1);
    //v += ((forwardReading - 0.5) / 50.0) * acceleration;
    v = min(v, maxSpeed);

    uint x_ = floatBitsToUint(x);
    uint y_ = floatBitsToUint(y);
    uint r_ = floatBitsToUint(r);
    uint v_ = floatBitsToUint(v);

    result = uvec4(x_, y_, r_, v_);
}
`,ge=`#version 300 es

precision mediump float;

in vec4 m_position;

out vec2 v_texCoord;

void main(void)
{
  gl_Position = vec4(m_position.xy, 0.0, 1.0);
  v_texCoord = m_position.zw;
}
`,_e=`#version 300 es
precision mediump float;
precision mediump sampler2D;

uniform float fadeSpeed;
uniform float width;
uniform float height;

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
}
`,ve=`#version 300 es

precision mediump float;

in vec4 m_position;

out vec2 v_texCoord;

void main(void)
{
  gl_Position = vec4(m_position.xy, 0.0, 1.0);
  v_texCoord = m_position.pq;
}
`,ye=`#version 300 es

precision mediump float;
precision mediump int;
precision mediump sampler2D;

in vec4 col;

out vec4 color;

void main(void)
{
  color = col;
}
`,be=`#version 300 es
precision mediump float;

in vec2 r_position;
in vec2 r_agentCoord;

precision mediump sampler2D;
precision mediump usampler2D;

uniform usampler2D agentTex;
uniform sampler2D agentCol;
uniform float pointSize;

const vec3 col1 = vec3(0.00, 0.22, 0.66);
const vec3 col2 = vec3(0.61, 0.31, 0.59);
const vec3 col3 = vec3(0.84, 0.01, 0.44);

out vec4 col;

void main(void)
{
  // get the r & g (x & y positions) value of pixels in agentTex
  uvec4 agent = texture(agentTex, r_agentCoord);
  float v = uintBitsToFloat(agent.w);

  col = texture(agentCol, r_agentCoord);

  col.rgb = mix(col1, col2, smoothstep(0.0, 0.5, v));
  col.rgb = mix(col.rgb, col3, smoothstep(0.5, 1.0, v));

  float x = uintBitsToFloat(agent.x);
  float y = uintBitsToFloat(agent.y);
  gl_Position = vec4(2.0 * x - 1.0, 2.0 * y - 1.0, 0.0, 1.0);

  gl_PointSize = pointSize;
}
`,V=2,xe=30,H,U={agents:null,agentColors:null,canvas:null,preset:null},W=null,G=null,K=null,q=null,J=null;function Se(e,t){document.getElementById(`fps`),U.canvas=e,U.preset=t;let n=U.preset.createAgents();U.agents=n.agents,U.agentColors=n.colors,U.sensorRadius=V;var r={depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!1},i=e.getContext(`webgl2`,r);if(i||(i=e.getContext(`webgl`,r)||e.getContext(`experimental-webgl`,r)),W=i,i.viewport(0,0,e.width,e.height),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),!i.getExtension(`EXT_color_buffer_float`)){alert(`EXT_color_buffer_float failed to load`);return}H=!0,G=Ce(i),we(i,U,G),X(i,U,G)}function Ce(e){return{moveAgent:Y(e,ge,he),renderAgent:Y(e,be,ye),postProcessing:Y(e,ve,_e)}}function Y(e,t,n){let r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(r));let i=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(i));let a=e.createProgram();e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)||console.error(e.getProgramInfoLog(a));var o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS),s={};for(let t=0;t<o;t++){var c=e.getActiveUniform(a,t).name;s[c]=e.getUniformLocation(a,c)}return e.deleteShader(r),e.deleteShader(i),{program:a,uniforms:s,use:function(){e.useProgram(this.program)}}}function we(e,t,n){n.moveAgent.use();let r=n.moveAgent.uniforms;e.uniform1i(r.agentTex,0),e.uniform1i(r.renderTex,1),e.uniform1f(r.width,t.canvas.width),e.uniform1f(r.height,t.canvas.height),n.renderAgent.use();let i=n.renderAgent.uniforms;e.uniform1i(i.agentTex,0),e.uniform1i(i.agentCol,1),e.uniform1f(i.pointSize,t.preset.pointSize),n.postProcessing.use();let a=n.postProcessing.uniforms;e.uniform1i(a.renderTex,0),e.uniform1f(a.fadeSpeed,t.preset.fadeSpeed/255),e.uniform1f(a.width,t.canvas.width),e.uniform1f(a.height,t.canvas.width),e.useProgram(null)}function X(e,t,n){let r=[],i=t.canvas.height/t.canvas.width;for(let e=0;e<t.agents.length;e++)r.push(t.agents[e].x*i+.5),r.push(t.agents[e].y+.5),r.push(t.agents[e].rot),r.push(.5);J=Te(e,new Float32Array(r),new Uint8Array(t.agentColors)),e.useProgram(n.moveAgentProg),e.useProgram(null);var a=e.getAttribLocation(n.moveAgent.program,`m_position`),o=e.getAttribLocation(n.renderAgent.program,`r_agentCoord`),s=e.getAttribLocation(n.postProcessing.program,`m_position`);K={positionBuffer:e.createBuffer(),lookupBuffer:e.createBuffer(),inputBuffer:e.createBuffer()},e.bindBuffer(e.ARRAY_BUFFER,K.positionBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,-1,1,0,1,1,-1,1,0,1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,4,e.FLOAT,!1,0,0),e.vertexAttribPointer(s,4,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,K.lookupBuffer);let c=[];for(let e=0;e<J.agentTextureLength;e++)for(let t=0;t<J.agentTextureLength;t++)c.push((t+.5)/J.agentTextureLength),c.push((e+.5)/J.agentTextureLength);e.bufferData(e.ARRAY_BUFFER,new Float32Array(c),e.STATIC_DRAW),e.enableVertexAttribArray(o),e.bindBuffer(e.ARRAY_BUFFER,K.lookupBuffer),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),q={agentFramebuffer:e.createFramebuffer(),postProcessingFrameBuffer:e.createFramebuffer()};var l=!0,u=window.performance.now(),d=1e3/xe;function f(n){if(!H)return;let r=n-u;r>d&&(u=n-r%d,Q(e,t,G),Ee(l,e,G,q,J),l=!l),window.requestAnimationFrame(f)}window.requestAnimationFrame(f)}function Z(e,t,n,r,i,a,o){let s=e.createTexture();return e.bindTexture(e.TEXTURE_2D,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_BASE_LEVEL,0),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAX_LEVEL,0),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,n,r,0,i,a,o),e.bindTexture(e.TEXTURE_2D,null),s}function Te(e,t,n){let r=Math.ceil(Math.sqrt(U.agents.length)),i=new Uint32Array(t.buffer);return{agentTexture:Z(e,e.RGBA32UI,r,r,e.RGBA_INTEGER,e.UNSIGNED_INT,i),agentTextureSwap:Z(e,e.RGBA32UI,r,r,e.RGBA_INTEGER,e.UNSIGNED_INT,null),agentColor:Z(e,e.RGBA,r,r,e.RGBA,e.UNSIGNED_BYTE,n),agentTextureLength:r,renderTexture:Z(e,e.RGBA,U.canvas.width,U.canvas.height,e.RGBA,e.UNSIGNED_BYTE,null),renderTextureSwap:Z(e,e.RGBA,U.canvas.width,U.canvas.height,e.RGBA,e.UNSIGNED_BYTE,null)}}function Q(e,t,n){n.moveAgent.use();let r=n.moveAgent.uniforms;e.uniform1f(r.maxSpeed,t.preset.maxSpeed.value),e.uniform1f(r.turnSpeed,t.preset.turnSpeed.value),e.uniform1f(r.sensorWidth,t.sensorRadius/t.canvas.width),e.uniform1f(r.sensorHeight,t.sensorRadius/t.canvas.height);var i=2*t.sensorRadius+1,a=i*i*3;e.uniform1f(r.maxPossibleReading,a),e.uniform1f(r.sensorOffsetDistance,t.preset.sensorOffsetDistance.value/t.canvas.width),e.uniform1f(r.sensorAngle,t.preset.sensorAngle.value),e.uniform1f(r.randomWeight,t.preset.randomWeight),e.uniform1f(r.acceleration,t.preset.acceleration.value)}function Ee(e,t,n,r,i){t.viewport(0,0,i.agentTextureLength,i.agentTextureLength),n.moveAgent.use(),t.bindFramebuffer(t.FRAMEBUFFER,r.agentFramebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e?i.agentTextureSwap:i.agentTexture,0),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,e?i.agentTexture:i.agentTextureSwap),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,i.renderTexture),t.drawArrays(t.TRIANGLES,0,6),t.viewport(0,0,U.canvas.width,U.canvas.height),n.renderAgent.use(),t.bindFramebuffer(t.FRAMEBUFFER,r.postProcessingFrameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e?i.renderTextureSwap:i.renderTexture,0),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,i.agentTexture),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,i.agentColor),t.drawArrays(t.POINTS,0,U.agents.length),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e?i.renderTexture:i.renderTextureSwap,0),n.postProcessing.use(),t.activeTexture(t.TEXTURE0+0),t.bindTexture(t.TEXTURE_2D,e?i.renderTextureSwap:i.renderTexture),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.drawArrays(t.TRIANGLES,0,6)}function $(){H=!1;for(var e=W.getParameter(W.MAX_TEXTURE_IMAGE_UNITS),t=0;t<e;++t)W.activeTexture(W.TEXTURE0+t),W.bindTexture(W.TEXTURE_2D,null),W.bindTexture(W.TEXTURE_CUBE_MAP,null);W.bindBuffer(W.ARRAY_BUFFER,null),W.bindBuffer(W.ELEMENT_ARRAY_BUFFER,null),W.bindRenderbuffer(W.RENDERBUFFER,null),W.bindFramebuffer(W.FRAMEBUFFER,null),W.deleteProgram(G.moveAgentProg),W.deleteProgram(G.renderAgentProg),W.deleteProgram(G.postProcessingProg),W.deleteFramebuffer(q.agentFramebuffer),W.deleteFramebuffer(q.postProcessingFrameBuffer),W.deleteBuffer(K.lookupBuffer),W.deleteBuffer(K.positionBuffer),W.deleteTexture(J.agentTex),W.deleteTexture(J.agentTex_),W.deleteTexture(J.agentColor),W.deleteTexture(J.renderTex),W.deleteTexture(J.renderTex_),gl.getExtension(`WEBGL_lose_context`).loseContext()}var De=a({name:`SlimeSim`,components:{},data(){let e=2**16;return{presetSelection:null,presets:[{label:`Circle Moving Towards Centre`,createAgents:function(){let t=[],n=[];for(let r=0;r<e;r++){let e=2*Math.PI*Math.random(),r=.4*Math.sqrt(Math.random()),i=r*Math.cos(e),a=r*Math.sin(e),o=Math.atan2(-a,-i);t.push({x:i,y:a,rot:o.toFixed(2)}),n.push(255),n.push(255),n.push(255),n.push(255)}return{agents:t,colors:n}},pointSize:.1,fadeSpeed:10,randomWeight:.1},{label:`Orbit`,createAgents:function(){let t=[],n=[];for(let r=0;r<e;r++){let e=2*Math.PI*Math.random(),r=.4*Math.sqrt(Math.random()),i=r*Math.cos(e),a=r*Math.sin(e),o=Math.atan2(-a,-i)+.5*Math.PI;o+=Math.random()*.1,t.push({x:i,y:a,rot:o.toFixed(2)}),n.push(255),n.push(255),n.push(255),n.push(255)}return{agents:t,colors:n}},pointSize:.1,fadeSpeed:8,randomWeight:.3}],params:{turnSpeed:{value:.1,min:.1,max:1,label:`Turn Speed`},maxSpeed:{value:2,min:0,max:5,label:`Max Speed`},sensorOffsetDistance:{value:1,min:10,max:100,label:`Sensor Range`},sensorAngle:{value:.8,min:.1,max:.6,label:`Sensor Angle`},acceleration:{value:5,min:1,max:10,label:`Acceleration`}}}},watch:{presetSelection(e){try{$()}catch{}var t=this.$refs.visCanvas;t.width=Math.round(window.innerWidth),t.height=Math.round(window.innerHeight),Se(t,{...e,...this.params})}},mounted(){this.presetSelection=this.presets[1]}}),Oe={id:`vis`,ref:`visCanvas`,class:`bg-black`};function ke(e,t,n,r,a,s){return b(),o(i,null,[te(`canvas`,Oe,null,512),m(ae,{class:`overlay`,square:``,flat:``,bordered:``,style:{width:`250px`}},{default:x(()=>[m(L,null,{default:x(()=>[m(N,{modelValue:e.presetSelection,"onUpdate:modelValue":t[0]||(t[0]=t=>e.presetSelection=t),options:e.presets,label:`Initial Condition`,class:`full-width`},null,8,[`modelValue`,`options`]),(b(!0),o(i,null,w(Object.keys(e.params),t=>(b(),o(`div`,{key:t,style:{width:`100%`}},[p(y(e.params[t].label)+`: `+y(e.params[t].value)+` `,1),m(me,{modelValue:e.params[t].value,"onUpdate:modelValue":n=>e.params[t].value=n,min:e.params[t].min,max:e.params[t].max,step:.1,"track-size":`10px`,"thumb-size":`20px`,color:`accent`},null,8,[`modelValue`,`onUpdate:modelValue`,`min`,`max`])]))),128))]),_:1})]),_:1})],64)}var Ae=S(De,[[`render`,ke]]);export{Ae as default};