import{r as q,ai as be,ab as N,s as ye,a9 as U,w as H,q as pe,o as j,g as ae,ae as Te,a2 as D,aW as Z,a7 as we,B as Ee,c as Ce,u as He,f as ke,aX as We,j as Me,a as C,k as Se,aY as qe,m as Pe,aZ as Be,n as Le,a_ as Ae,a$ as ze,ad as $e,b0 as Fe,b1 as G,a3 as Re,b2 as De,h as J,b as Ke,V as je,b3 as Oe,b4 as Qe,b5 as Ve,af as Ie}from"./index.2b736ce4.js";import{c as Xe}from"./selection.13d7029c.js";const Ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function _e({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:c}=ae(),i=q(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),N(a),ye(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:N,mobileTouch(a){if(r.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const s=a.target;U(r,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Xe()}}),o=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let s;a===!0?l.$q.platform.is.mobile===!0?s=[[i.value,"touchstart","mobileTouch","passive"]]:s=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:s=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],U(r,"anchor",s)});function d(){Te(r,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)g(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return H(()=>t.contextMenu,a=>{i.value!==null&&(d(),o(a))}),H(()=>t.target,()=>{i.value!==null&&d(),x()}),H(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),pe(()=>{x(),n!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),j(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:r}}function Ne(e,n){const o=q(null);let t;function l(f,h){const r=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[r]("scroll",d,D.passive),window[r]("scroll",d,D.passive),t=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(c(),n())});return j(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:P}=D,w=[];function B(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=Z.length-1;for(;o>=0;){const t=Z[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=w.length-1;t>=0;t--){const l=w[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ue(e){w.push(e),w.length===1&&(document.addEventListener("mousedown",B,P),document.addEventListener("touchstart",B,P))}function ee(e){const n=w.findIndex(o=>o===e);n!==-1&&(w.splice(n,1),w.length===0&&(document.removeEventListener("mousedown",B,P),document.removeEventListener("touchstart",B,P)))}let te,ne;function oe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const K={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{K[`${e}#ltr`]=e,K[`${e}#rtl`]=e});function le(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:K[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function Ge(e,n){let{top:o,left:t,right:l,bottom:c,width:i,height:f}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],c+=n[1],l+=n[0],i+=n[0],f+=n[1]),{top:o,bottom:c,height:f,left:t,right:l,width:i,middle:t+(l-t)/2,center:o+(c-o)/2}}function Je(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function et(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ie(e,n,o,t){return{top:e[o.vertical]-n[t.vertical],left:e[o.horizontal]-n[t.horizontal]}}function ue(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ue(e,n+1)},10);return}const{targetEl:o,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:r,maxHeight:d,maxWidth:g}=e;if(we.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:b,offsetTop:y}=window.visualViewport;b!==te&&(E.setProperty("--q-pe-left",b+"px"),te=b),y!==ne&&(E.setProperty("--q-pe-top",y+"px"),ne=y)}const{scrollLeft:x,scrollTop:a}=o,s=f===void 0?Ge(l,r===!0?[0,0]:t):Je(l,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:M,offsetHeight:k}=o,{elWidth:S,elHeight:L}=h===!0||r===!0?{elWidth:Math.max(s.width,M),elHeight:r===!0?Math.max(s.height,k):k}:{elWidth:M,elHeight:k};let v={maxWidth:g,maxHeight:d};(h===!0||r===!0)&&(v.minWidth=s.width+"px",r===!0&&(v.minHeight=s.height+"px")),Object.assign(o.style,v);const p=et(S,L);let m=ie(s,p,c,i);if(f===void 0||t===void 0)R(m,s,p,c,i);else{const{top:E,left:b}=m;R(m,s,p,c,i);let y=!1;if(m.top!==E){y=!0;const T=2*t[1];s.center=s.top-=T,s.bottom-=T+2}if(m.left!==b){y=!0;const T=2*t[0];s.middle=s.left-=T,s.right-=T+2}y===!0&&(m=ie(s,p,c,i),R(m,s,p,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",s.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",s.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(o.style,v),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==x&&(o.scrollLeft=x)}function R(e,n,o,t,l){const c=o.bottom,i=o.right,f=Ee(),h=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(n[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-i):0;else if(n[t.horizontal]>r/2){const d=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,r-e.left)}var ot=Ce({name:"QMenu",inheritAttrs:!1,props:{...Ye,...He,...ke,...We,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:Ze},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Me,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let l=null,c,i,f;const h=ae(),{proxy:r}=h,{$q:d}=r,g=q(null),x=q(!1),a=C(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),s=Se(e,d),{registerTick:M,removeTick:k}=qe(),{registerTimeout:S}=Pe(),{transitionProps:L,transitionStyle:v}=Be(e),{localScrollTarget:p,changeScrollEvent:m,unconfigureScrollTarget:E}=Ne(e,Y),{anchorEl:b,canShow:y}=_e({showing:x}),{hide:T}=Le({showing:x,canShow:y,handleShow:fe,handleHide:he,hideOnRouteChange:a,processOnMount:!0}),{showPortal:O,hidePortal:Q,renderPortal:se}=Ae(h,g,ve,"menu"),A={anchorEl:b,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return T(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ie(u),!0}},V=C(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),re=C(()=>e.cover===!0?V.value:le(e.self||"top start",d.lang.rtl)),ce=C(()=>(e.square===!0?" q-menu--square":"")+(s.value===!0?" q-menu--dark q-dark":"")),de=C(()=>e.autoClose===!0?{onClick:me}:{}),I=C(()=>x.value===!0&&e.persistent!==!0);H(I,u=>{u===!0?(Oe($),Ue(A)):(G($),ee(A))});function z(){Qe(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function fe(u){if(l=e.noRefocus===!1?document.activeElement:null,ze(_),O(),Y(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=$e(u);if(F.left!==void 0){const{top:ge,left:xe}=b.value.getBoundingClientRect();c={left:F.left-xe,top:F.top-ge}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,W)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{W(),e.noFocus!==!0&&z()}),S(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),W(),O(!0),o("show",u)},e.transitionDuration)}function he(u){k(),Q(),X(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),S(()=>{Q(!0),o("hide",u)},e.transitionDuration)}function X(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(Fe(_),E(),ee(A),G($)),u!==!0&&(l=null)}function Y(){(b.value!==null||e.scrollTarget!==void 0)&&(p.value=Re(b.value,e.scrollTarget),m(p.value,W))}function me(u){f!==!0?(De(r,u),o("click",u)):f=!1}function _(u){I.value===!0&&e.noFocus!==!0&&Ve(g.value,u.target)!==!0&&z()}function $(u){o("escapeKey"),T(u)}function W(){ue({targetEl:g.value,offset:e.offset,anchorEl:b.value,anchorOrigin:V.value,selfOrigin:re.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(){return J(je,L.value,()=>x.value===!0?J("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,t.class],style:[t.style,v.value],...de.value},Ke(n.default)):null)}return j(X),Object.assign(r,{focus:z,updatePosition:W}),se}});export{ot as Q,Ze as a,Ne as b,_e as c,Ue as d,le as p,ee as r,ue as s,Ye as u,oe as v};
