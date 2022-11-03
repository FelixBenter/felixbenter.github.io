import{f as z,i as g,c as d,u as A,j as E,e as L,k as u,l as O,R as P,m as Q,n as D,h as b}from"./QBtn.ba93bb19.js";import{X as N,c as i,h as a,g as w,v as j}from"./index.be9773e3.js";const I=[null,document,document.body,document.scrollingElement,document.documentElement];function H(e,t){let l=z(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return I.includes(l)?window:l}function M(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function X(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let r;function K(){if(r!==void 0)return r;const e=document.createElement("p"),t=document.createElement("div");g(e,{width:"100%",height:"200px"}),g(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return l===n&&(n=t.clientWidth),t.remove(),r=l-n,r}function U(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const f={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},W=Object.keys(f);f.all=!0;function Y(e){const t={};for(const l of W)e[l]===!0&&(t[l]=!0);return Object.keys(t).length===0?f:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function F(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function G(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),N.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const q={dark:{type:Boolean,default:null}};function y(e,t){return i(()=>e.dark===null?t.dark.isActive:e.dark)}const $={xs:8,sm:10,md:14,lg:20,xl:24};var J=d({name:"QChip",props:{...q,...A,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=w(),c=y(e,n),S=E(e,$),k=i(()=>e.selected===!0||e.icon!==void 0),C=i(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),x=i(()=>e.iconRemove||n.iconSet.chip.remove),s=i(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),_=i(()=>{const o=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(o?` text-${o} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(s.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(c.value===!0?" q-chip--dark q-dark":"")}),h=i(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function p(o){o.keyCode===13&&v(o)}function v(o){e.disable||(l("update:selected",!e.selected),l("click",o))}function m(o){(o.keyCode===void 0||o.keyCode===13)&&(j(o),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function B(){const o=[];s.value===!0&&o.push(a("div",{class:"q-focus-helper"})),k.value===!0&&o.push(a(u,{class:"q-chip__icon q-chip__icon--left",name:C.value}));const R=e.label!==void 0?[a("div",{class:"ellipsis"},[e.label])]:void 0;return o.push(a("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},O(t.default,R))),e.iconRight&&o.push(a(u,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&o.push(a(u,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:x.value,...h.value,onClick:m,onKeyup:m})),o}return()=>{if(e.modelValue===!1)return;const o={class:_.value,style:S.value};return s.value===!0&&Object.assign(o,h.value,{onClick:v,onKeyup:p}),L("div",o,B(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[P,e.ripple]])}}}),Z=d({name:"QCardActions",props:{...Q,vertical:Boolean},setup(e,{slots:t}){const l=D(e),n=i(()=>`q-card__actions ${l.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>a("div",{class:n.value},b(t.default))}}),ee=d({name:"QCard",props:{...q,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=w(),n=y(e,l),c=i(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>a(e.tag,{class:c.value},b(t.default))}});export{Z as Q,M as a,X as b,K as c,Y as d,G as e,y as f,H as g,ee as h,J as i,U as j,F as s,q as u};