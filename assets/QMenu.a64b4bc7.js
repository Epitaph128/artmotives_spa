import{c as ie,a as w,h as D,b as ue,r as M,a3 as ye,D as N,e as Te,ac as U,w as H,o as we,d as j,g as se,ag as Ee,l as K,aT as Z,aa as Ce,I as He,u as ke,p as qe,aU as We,q as Be,s as Me,aV as Se,t as Pe,aW as Le,v as $e,aX as Ae,aY as ze,af as Fe,aZ as Re,a_ as J,E as De,a$ as Ke,av as Qe,b0 as je,b1 as Oe,b2 as Ve,a4 as Ie}from"./index.71846c29.js";import{c as Xe}from"./selection.ae08f995.js";var ot=ie({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const o=w(()=>{const t=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${t.length!==0?" "+t:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>D("div",{class:o.value},ue(n.default))}});const Ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function _e({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:c}=se(),a=M(null);let f=null;function h(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){ye(i,13)===!0&&r.toggle(i)},contextClick(i){l.hide(i),N(i),Te(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:N,mobileTouch(i){if(r.mobileCleanup(i),h(i)!==!0)return;l.hide(i),a.value.classList.add("non-selectable");const s=i.target;U(r,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&i!==void 0&&Xe()}}),o=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let s;i===!0?l.$q.platform.is.mobile===!0?s=[[a.value,"touchstart","mobileTouch","passive"]]:s=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:s=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],U(r,"anchor",s)});function d(){Ee(r,"anchor")}function g(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)a.value=null;else if(t.target===!0)g(l.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,o()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return H(()=>t.contextMenu,i=>{a.value!==null&&(d(),o(i))}),H(()=>t.target,()=>{a.value!==null&&d(),x()}),H(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?d():o())}),we(()=>{x(),n!==!0&&t.modelValue===!0&&a.value===null&&c("update:modelValue",!1)}),j(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:a,canShow:h,anchorEvents:r}}function Ge(e,n){const o=M(null);let t;function l(f,h){const r=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[r]("scroll",d,K.passive),window[r]("scroll",d,K.passive),t=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const a=H(()=>e.noParentEvent,()=>{o.value!==null&&(c(),n())});return j(a),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:S}=K,E=[];function P(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=Z.length-1;for(;o>=0;){const t=Z[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=E.length-1;t>=0;t--){const l=E[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ne(e){E.push(e),E.length===1&&(document.addEventListener("mousedown",P,S),document.addEventListener("touchstart",P,S))}function ee(e){const n=E.findIndex(o=>o===e);n!==-1&&(E.splice(n,1),E.length===0&&(document.removeEventListener("mousedown",P,S),document.removeEventListener("touchstart",P,S)))}let te,ne;function oe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ue(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Q[`${e}#ltr`]=e,Q[`${e}#rtl`]=e});function le(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:Q[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function Ze(e,n){let{top:o,left:t,right:l,bottom:c,width:a,height:f}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],c+=n[1],l+=n[0],a+=n[0],f+=n[1]),{top:o,bottom:c,height:f,left:t,right:l,width:a,middle:t+(l-t)/2,center:o+(c-o)/2}}function Je(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function et(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ae(e,n,o,t){return{top:e[o.vertical]-n[t.vertical],left:e[o.horizontal]-n[t.horizontal]}}function re(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{re(e,n+1)},10);return}const{targetEl:o,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:a,absoluteOffset:f,fit:h,cover:r,maxHeight:d,maxWidth:g}=e;if(Ce.is.ios===!0&&window.visualViewport!==void 0){const C=document.body.style,{offsetLeft:b,offsetTop:p}=window.visualViewport;b!==te&&(C.setProperty("--q-pe-left",b+"px"),te=b),p!==ne&&(C.setProperty("--q-pe-top",p+"px"),ne=p)}const{scrollLeft:x,scrollTop:i}=o,s=f===void 0?Ze(l,r===!0?[0,0]:t):Je(l,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:W,offsetHeight:k}=o,{elWidth:B,elHeight:L}=h===!0||r===!0?{elWidth:Math.max(s.width,W),elHeight:r===!0?Math.max(s.height,k):k}:{elWidth:W,elHeight:k};let m={maxWidth:g,maxHeight:d};(h===!0||r===!0)&&(m.minWidth=s.width+"px",r===!0&&(m.minHeight=s.height+"px")),Object.assign(o.style,m);const y=et(B,L);let v=ae(s,y,c,a);if(f===void 0||t===void 0)R(v,s,y,c,a);else{const{top:C,left:b}=v;R(v,s,y,c,a);let p=!1;if(v.top!==C){p=!0;const T=2*t[1];s.center=s.top-=T,s.bottom-=T+2}if(v.left!==b){p=!0;const T=2*t[0];s.middle=s.left-=T,s.right-=T+2}p===!0&&(v=ae(s,y,c,a),R(v,s,y,c,a))}m={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(m.maxHeight=v.maxHeight+"px",s.height>v.maxHeight&&(m.minHeight=m.maxHeight)),v.maxWidth!==void 0&&(m.maxWidth=v.maxWidth+"px",s.width>v.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(o.style,m),o.scrollTop!==i&&(o.scrollTop=i),o.scrollLeft!==x&&(o.scrollLeft=x)}function R(e,n,o,t,l){const c=o.bottom,a=o.right,f=He(),h=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(n[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+a>r)if(e.maxWidth=Math.min(a,r),l.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-a):0;else if(n[t.horizontal]>r/2){const d=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(a,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(a,r-e.left)}var lt=ie({name:"QMenu",inheritAttrs:!1,props:{...Ye,...ke,...qe,...We,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:Ue},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Be,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let l=null,c,a,f;const h=se(),{proxy:r}=h,{$q:d}=r,g=M(null),x=M(!1),i=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),s=Me(e,d),{registerTick:W,removeTick:k}=Se(),{registerTimeout:B}=Pe(),{transitionProps:L,transitionStyle:m}=Le(e),{localScrollTarget:y,changeScrollEvent:v,unconfigureScrollTarget:C}=Ge(e,_),{anchorEl:b,canShow:p}=_e({showing:x}),{hide:T}=$e({showing:x,canShow:p,handleShow:ve,handleHide:me,hideOnRouteChange:i,processOnMount:!0}),{showPortal:O,hidePortal:V,renderPortal:ce}=Ae(h,g,xe,"menu"),$={anchorEl:b,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return T(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ie(u),!0}},I=w(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),de=w(()=>e.cover===!0?I.value:le(e.self||"top start",d.lang.rtl)),fe=w(()=>(e.square===!0?" q-menu--square":"")+(s.value===!0?" q-menu--dark q-dark":"")),he=w(()=>e.autoClose===!0?{onClick:ge}:{}),X=w(()=>x.value===!0&&e.persistent!==!0);H(X,u=>{u===!0?(je(z),Ne($)):(J(z),ee($))});function A(){Oe(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function ve(u){if(l=e.noRefocus===!1?document.activeElement:null,ze(G),O(),_(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=Fe(u);if(F.left!==void 0){const{top:be,left:pe}=b.value.getBoundingClientRect();c={left:F.left-pe,top:F.top-be}}}a===void 0&&(a=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,q)),e.noFocus!==!0&&document.activeElement.blur(),W(()=>{q(),e.noFocus!==!0&&A()}),B(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),q(),O(!0),o("show",u)},e.transitionDuration)}function me(u){k(),V(),Y(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),B(()=>{V(!0),o("hide",u)},e.transitionDuration)}function Y(u){c=void 0,a!==void 0&&(a(),a=void 0),(u===!0||x.value===!0)&&(Re(G),C(),ee($),J(z)),u!==!0&&(l=null)}function _(){(b.value!==null||e.scrollTarget!==void 0)&&(y.value=De(b.value,e.scrollTarget),v(y.value,q))}function ge(u){f!==!0?(Ke(r,u),o("click",u)):f=!1}function G(u){X.value===!0&&e.noFocus!==!0&&Ve(g.value,u.target)!==!0&&A()}function z(u){o("escapeKey"),T(u)}function q(){re({targetEl:g.value,offset:e.offset,anchorEl:b.value,anchorOrigin:I.value,selfOrigin:de.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function xe(){return D(Qe,L.value,()=>x.value===!0?D("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+fe.value,t.class],style:[t.style,m.value],...he.value},ue(n.default)):null)}return j(Y),Object.assign(r,{focus:A,updatePosition:q}),ce}});export{lt as Q,ot as a,Ue as b,Ge as c,_e as d,Ne as e,le as p,ee as r,re as s,Ye as u,oe as v};
