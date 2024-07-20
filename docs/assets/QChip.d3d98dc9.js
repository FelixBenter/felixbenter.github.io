import{c as C,m as _,n as x,l as B,o as r,p as z,R}from"./QBtn.70c0b5f7.js";import{u as w,e as I}from"./QCard.18a4d1d1.js";import{c as n,h as o,g as D,E as O}from"./index.1290fcd1.js";const u={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},j=Object.keys(u);u.all=!0;function $(e){const t={};for(const l of j)e[l]===!0&&(t[l]=!0);return Object.keys(t).length===0?u:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function A(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}const N={xs:8,sm:10,md:14,lg:20,xl:24};var K=C({name:"QChip",props:{...w,..._,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:l}){const{proxy:{$q:a}}=D(),h=I(e,a),v=x(e,N),b=n(()=>e.selected===!0||e.icon!==void 0),m=n(()=>e.selected===!0?e.iconSelected||a.iconSet.chip.selected:e.icon),g=n(()=>e.iconRemove||a.iconSet.chip.remove),c=n(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),q=n(()=>{const i=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(i?` text-${i} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(h.value===!0?" q-chip--dark q-dark":"")}),s=n(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function k(i){i.keyCode===13&&d(i)}function d(i){e.disable||(l("update:selected",!e.selected),l("click",i))}function f(i){(i.keyCode===void 0||i.keyCode===13)&&(O(i),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function S(){const i=[];c.value===!0&&i.push(o("div",{class:"q-focus-helper"})),b.value===!0&&i.push(o(r,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const y=e.label!==void 0?[o("div",{class:"ellipsis"},[e.label])]:void 0;return i.push(o("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},z(t.default,y))),e.iconRight&&i.push(o(r,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&i.push(o(r,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...s.value,onClick:f,onKeyup:f})),i}return()=>{if(e.modelValue===!1)return;const i={class:q.value,style:v.value};return c.value===!0&&Object.assign(i,s.value,{onClick:d,onKeyup:k}),B("div",i,S(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[R,e.ripple]])}}});export{K as Q,$ as g,A as s};