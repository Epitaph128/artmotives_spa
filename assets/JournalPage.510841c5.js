import{a1 as Qe,c as re,b7 as qe,aX as $e,r as _,b8 as Me,a as w,b9 as je,w as O,q as ue,h,Q as Ne,b as ce,P as T,g as Z,ac as ze,u as Ue,j as Ie,aY as Ke,m as We,aZ as Je,n as Ye,a_ as Ge,o as K,ae as fe,a9 as he,a3 as Xe,V as Ze,af as _e,aS as Oe,ab as me,ba as Ve,aJ as et,bb as ge,f as tt,k as ot,bc as nt,s as it,b4 as lt,_ as at,F as st,ak as rt,G as X,H as pe,I as H,R as I,J as C,al as F,L as ut,O as ve,S as ct,T as dt,t as ft,am as ht,an as mt,ao as ye,K as gt,ar as pt,as as vt}from"./index.2b736ce4.js";import{Q as Le}from"./QBtnGroup.0e1fb1c1.js";import{Q as yt,u as bt,v as be,a as wt,p as we,b as St,c as kt,r as Se,s as Ct,d as Tt}from"./QMenu.7e5a412b.js";import{c as ke}from"./selection.13d7029c.js";import{Q as He}from"./QItem.a35543d0.js";import{Q as Ce}from"./QItemSection.441ba431.js";import{Q as Bt}from"./QList.6ca4989f.js";import{Q as Pt}from"./QPage.e35f8b86.js";import{d as Te}from"./date.b41de16f.js";import{u as qt,Q as $t}from"./QSpinnerFacebook.f469f825.js";import{u as Nt}from"./store_notes.49d7497a.js";import{u as Be}from"./store_settings.4d1fc436.js";function xe(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const i=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,a=i.display;return a==="block"||a==="table"?e:xe(e.parentNode)}function ae(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Ee(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let i=0;t.count!==0&&i<e.childNodes.length;i++)o=Ee(e.childNodes[i],t,o);return o}const zt=/^https?:\/\//;class _t{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(ae(t.anchorNode,this.el,!0)&&ae(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?xe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),i=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),i.removeAllRanges(),i.addRange(o)):(i.selectAllChildren(this.el),i.collapseToEnd())}savePosition(){let t=-1,o;const i=document.getSelection(),a=this.el.parentNode;if(i.focusNode&&ae(i.focusNode,a))for(o=i.focusNode,t=i.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),i=Ee(this.el,{count:this.savedPos});i&&(i.collapse(!1),o.removeAllRanges(),o.addRange(i))}}hasParent(t,o){const i=o?this.parent:this.blockParent;return i!==null?i.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,i=this.parent){return i===null?!1:t.includes(i.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,i.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const i=document.queryCommandValue(t);return i===`"${o}"`||i===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(t);return o!==void 0?a===o:a}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,i=Qe){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){i();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(t==="link"){const a=this.getParentAttribute("href");if(a===null){const c=this.selectWord(this.selection),s=c?c.toString():"";if(!s.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=zt.test(s)?s:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(c.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),i();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),i();return}document.execCommand(t,!1,o),i()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const i=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=t.focusNode,c=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",i[0],"character"),t.modify("move",i[1],"word"),t.extend(a,c),t.modify("extend",i[1],"character"),t.modify("extend",i[0],"word"),t}}const Ot=Object.keys(qe);function Lt(e){return Ot.reduce((t,o)=>{const i=e[o];return i!==void 0&&(t[o]=i),t},{})}var Ht=re({name:"QBtnDropdown",props:{...qe,...$e,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:o}){const{proxy:i}=Z(),a=_(e.modelValue),c=_(null),s=Me(),u=w(()=>{const f={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s.value,"aria-label":e.toggleAriaLabel||i.$q.lang.label[a.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(f["aria-disabled"]="true"),f}),d=w(()=>"q-btn-dropdown__arrow"+(a.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),y=w(()=>je(e)),r=w(()=>Lt(e));O(()=>e.modelValue,f=>{c.value!==null&&c.value[f?"show":"hide"]()}),O(()=>e.split,P);function b(f){a.value=!0,o("beforeShow",f)}function B(f){o("show",f),o("update:modelValue",!0)}function v(f){a.value=!1,o("beforeHide",f)}function L(f){o("hide",f),o("update:modelValue",!1)}function k(f){o("click",f)}function q(f){ze(f),P(),o("click",f)}function $(f){c.value!==null&&c.value.toggle(f)}function x(f){c.value!==null&&c.value.show(f)}function P(f){c.value!==null&&c.value.hide(f)}return Object.assign(i,{show:x,hide:P,toggle:$}),ue(()=>{e.modelValue===!0&&x()}),()=>{const f=[h(Ne,{class:d.value,name:e.dropdownIcon||i.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&f.push(h(yt,{ref:c,id:s.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:b,onShow:B,onBeforeHide:v,onHide:L},t.default)),e.split===!1?h(T,{class:"q-btn-dropdown q-btn-dropdown--simple",...r.value,...u.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:()=>ce(t.label,[]).concat(f),loading:t.loading}):h(Le,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...y.value,glossy:e.glossy,stretch:e.stretch},()=>[h(T,{class:"q-btn-dropdown--current",...r.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:q},{default:t.label,loading:t.loading}),h(T,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...u.value,...y.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>f)])}}}),xt=re({name:"QTooltip",inheritAttrs:!1,props:{...bt,...Ue,...$e,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:be},self:{type:String,default:"top middle",validator:be},offset:{type:Array,default:()=>[14,14],validator:wt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Ie],setup(e,{slots:t,emit:o,attrs:i}){let a,c;const s=Z(),{proxy:{$q:u}}=s,d=_(null),y=_(!1),r=w(()=>we(e.anchor,u.lang.rtl)),b=w(()=>we(e.self,u.lang.rtl)),B=w(()=>e.persistent!==!0),{registerTick:v,removeTick:L}=Ke(),{registerTimeout:k}=We(),{transitionProps:q,transitionStyle:$}=Je(e),{localScrollTarget:x,changeScrollEvent:P,unconfigureScrollTarget:f}=St(e,Q),{anchorEl:g,canShow:V,anchorEvents:E}=kt({showing:y,configureAnchorEl:G}),{show:ee,hide:R}=Ye({showing:y,canShow:V,handleShow:oe,handleHide:ne,hideOnRouteChange:B,processOnMount:!0});Object.assign(E,{delayShow:ie,delayHide:le});const{showPortal:W,hidePortal:J,renderPortal:te}=Ge(s,d,j,"tooltip");if(u.platform.is.mobile===!0){const p={anchorEl:g,innerRef:d,onClickOutside(N){return R(N),N.target.classList.contains("q-dialog__backdrop")&&_e(N),!0}},A=w(()=>e.modelValue===null&&e.persistent!==!0&&y.value===!0);O(A,N=>{(N===!0?Tt:Se)(p)}),K(()=>{Se(p)})}function oe(p){W(),v(()=>{c=new MutationObserver(()=>D()),c.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),D(),Q()}),a===void 0&&(a=O(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,D)),k(()=>{W(!0),o("show",p)},e.transitionDuration)}function ne(p){L(),J(),Y(),k(()=>{J(!0),o("hide",p)},e.transitionDuration)}function Y(){c!==void 0&&(c.disconnect(),c=void 0),a!==void 0&&(a(),a=void 0),f(),fe(E,"tooltipTemp")}function D(){Ct({targetEl:d.value,offset:e.offset,anchorEl:g.value,anchorOrigin:r.value,selfOrigin:b.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(p){if(u.platform.is.mobile===!0){ke(),document.body.classList.add("non-selectable");const A=g.value,N=["touchmove","touchcancel","touchend","click"].map(n=>[A,n,"delayHide","passiveCapture"]);he(E,"tooltipTemp",N)}k(()=>{ee(p)},e.delay)}function le(p){u.platform.is.mobile===!0&&(fe(E,"tooltipTemp"),ke(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),k(()=>{R(p)},e.hideDelay)}function G(){if(e.noParentEvent===!0||g.value===null)return;const p=u.platform.is.mobile===!0?[[g.value,"touchstart","delayShow","passive"]]:[[g.value,"mouseenter","delayShow","passive"],[g.value,"mouseleave","delayHide","passive"]];he(E,"anchor",p)}function Q(){if(g.value!==null||e.scrollTarget!==void 0){x.value=Xe(g.value,e.scrollTarget);const p=e.noParentEvent===!0?D:R;P(x.value,p)}}function M(){return y.value===!0?h("div",{...i,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,$.value],role:"tooltip"},ce(t.default)):null}function j(){return h(Ze,q.value,M)}return K(Y),Object.assign(s.proxy,{updatePosition:D}),te}});function De(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function de(e){return h("div",{class:"q-editor__toolbar-group"},e)}function Ae(e,t,o,i=!1){const a=i||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),c=[];if(t.tip&&e.$q.platform.is.desktop){const s=t.key?h("div",[h("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;c.push(h(xt,{delay:1e3},()=>[h("div",{innerHTML:t.tip}),s]))}return h(T,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:a?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:a&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(s){o&&o(),De(s,t,e)}},()=>c)}function Et(e,t){const o=t.list==="only-icons";let i=t.label,a=t.icon!==null?t.icon:void 0,c,s;function u(){y.component.proxy.hide()}if(o)s=t.options.map(r=>{const b=r.type===void 0?e.caret.is(r.cmd,r.param):!1;return b&&(i=r.tip,a=r.icon!==null?r.icon:void 0),Ae(e,r,u,b)}),c=e.toolbarBackgroundClass.value,s=[de(s)];else{const r=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,b=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,B=t.list==="no-icons";s=t.options.map(v=>{const L=v.disable?v.disable(e):!1,k=v.type===void 0?e.caret.is(v.cmd,v.param):!1;k&&(i=v.tip,a=v.icon!==null?v.icon:void 0);const q=v.htmlTip;return h(He,{active:k,activeClass:r,clickable:!0,disable:L,dense:!0,onClick($){u(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),De($,v,e)}},()=>[B===!0?null:h(Ce,{class:k?r:b,side:!0},()=>h(Ne,{name:v.icon!==null?v.icon:void 0})),h(Ce,q?()=>h("div",{class:"text-no-wrap",innerHTML:v.htmlTip}):v.tip?()=>h("div",{class:"text-no-wrap"},v.tip):void 0)])}),c=[e.toolbarBackgroundClass.value,b]}const d=t.highlight&&i!==t.label,y=h(Ht,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:d?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:d&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:i,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:a,contentClass:c,onShow:r=>e.emit("dropdownShow",r),onHide:r=>e.emit("dropdownHide",r),onBeforeShow:r=>e.emit("dropdownBeforeShow",r),onBeforeHide:r=>e.emit("dropdownBeforeHide",r)},()=>s);return y}function Dt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>de(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?ce(e.slots[o.slot]):o.type==="dropdown"?Et(e,o):Ae(e,o))))}function At(e,t,o,i={}){const a=Object.keys(i);if(a.length===0)return{};const c={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return a.forEach(s=>{const u=i[s];c[s]={cmd:"fontName",param:u,icon:o,tip:u,htmlTip:`<font face="${u}">${u}</font>`}}),c}function Ft(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const i=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[h("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),h("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{ze(a),o=a.target.value},onKeydown:a=>{if(Oe(a)!==!0)switch(a.keyCode){case 13:return me(a),i();case 27:me(a),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),de([h(T,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),h(T,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:i})])]}}let U=0;const Rt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Qt=["update:fullscreen","fullscreen"];function Mt(){const e=Z(),{props:t,emit:o,proxy:i}=e;let a,c,s;const u=_(!1);Ve(e)===!0&&O(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&r()}),O(()=>t.fullscreen,b=>{u.value!==b&&d()}),O(u,b=>{o("update:fullscreen",b),o("fullscreen",b)});function d(){u.value===!0?r():y()}function y(){u.value!==!0&&(u.value=!0,s=i.$el.parentNode,s.replaceChild(c,i.$el),document.body.appendChild(i.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:r},ge.add(a))}function r(){u.value===!0&&(a!==void 0&&(ge.remove(a),a=void 0),s.replaceChild(i.$el,c),u.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return et(()=>{c=document.createElement("span")}),ue(()=>{t.fullscreen===!0&&y()}),K(r),Object.assign(i,{toggleFullscreen:d,setFullscreen:y,exitFullscreen:r}),{inFullscreen:u,toggleFullscreen:d}}const jt=Object.prototype.toString,se=Object.prototype.hasOwnProperty,Ut=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function Pe(e){if(e!==Object(e)||Ut.has(jt.call(e))===!0||e.constructor&&se.call(e,"constructor")===!1&&se.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||se.call(e,t)}function Fe(){let e,t,o,i,a,c,s=arguments[0]||{},u=1,d=!1;const y=arguments.length;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},u=2),Object(s)!==s&&typeof s!="function"&&(s={}),y===u&&(s=this,u--);u<y;u++)if((e=arguments[u])!==null)for(t in e)o=s[t],i=e[t],s!==i&&(d===!0&&i&&((a=Array.isArray(i))||Pe(i)===!0)?(a===!0?c=Array.isArray(o)===!0?o:[]:c=Pe(o)===!0?o:{},s[t]=Fe(d,c,i)):i!==void 0&&(s[t]=i));return s}var It=re({name:"QEditor",props:{...tt,...Rt,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Qt,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o}){const{proxy:i}=Z(),{$q:a}=i,c=ot(e,a),{inFullscreen:s,toggleFullscreen:u}=Mt(),d=nt(),y=_(null),r=_(null),b=_(null),B=_(!1),v=w(()=>!e.readonly&&!e.disable);let L,k,q=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),L=window.getComputedStyle(document.body).fontFamily;const $=w(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),x=w(()=>{const n=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!v.value,size:"sm"}}),P=w(()=>{const n=a.lang.editor,l=a.iconSet.editor;return{bold:{cmd:"bold",icon:l.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:l.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:l.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:l.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:l.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:l.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:l.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:l.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:m=>m.caret&&!m.caret.can("link"),icon:l.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:l.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:l.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:l.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:l.left,tip:n.left},center:{cmd:"justifyCenter",icon:l.center,tip:n.center},right:{cmd:"justifyRight",icon:l.right,tip:n.right},justify:{cmd:"justifyFull",icon:l.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:l.print,tip:n.print,key:80},outdent:{type:"no-state",disable:m=>m.caret&&!m.caret.can("outdent"),cmd:"outdent",icon:l.outdent,tip:n.outdent},indent:{type:"no-state",disable:m=>m.caret&&!m.caret.can("indent"),cmd:"indent",icon:l.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:l.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:l.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:l.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:l.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:l.heading1||l.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:l.heading2||l.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:l.heading3||l.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:l.heading4||l.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:l.heading5||l.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:l.heading6||l.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:l.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:l.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:l.size1||l.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:l.size2||l.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:l.size3||l.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:l.size4||l.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:l.size5||l.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:l.size6||l.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:l.size7||l.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),f=w(()=>{const n=e.definitions||{},l=e.definitions||e.fonts?Fe(!0,{},P.value,n,At(L,a.lang.editor.defaultFont,a.iconSet.editor.font,e.fonts)):P.value;return e.toolbar.map(m=>m.map(S=>{if(S.options)return{type:"dropdown",icon:S.icon,label:S.label,size:"sm",dense:!0,fixedLabel:S.fixedLabel,fixedIcon:S.fixedIcon,highlight:S.highlight,list:S.list,options:S.options.map(Re=>l[Re])};const z=l[S];return z?z.type==="no-state"||n[S]&&(z.cmd===void 0||P.value[z.cmd]&&P.value[z.cmd].type==="no-state")?z:Object.assign({type:"toggle"},z):{type:"slot",slot:S}}))}),g={$q:a,props:e,slots:t,emit:o,inFullscreen:s,toggleFullscreen:u,runCmd:j,isViewingSource:B,editLinkUrl:b,toolbarBackgroundClass:$,buttonProps:x,contentRef:r,buttons:f,setContent:M};O(()=>e.modelValue,n=>{q!==n&&(q=n,M(n,!0))}),O(b,n=>{o(`link${n?"Show":"Hide"}`)});const V=w(()=>e.toolbar&&e.toolbar.length!==0),E=w(()=>{const n={},l=m=>{m.key&&(n[m.key]={cmd:m.cmd,param:m.param})};return f.value.forEach(m=>{m.forEach(S=>{S.options?S.options.forEach(l):l(S)})}),n}),ee=w(()=>s.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),R=w(()=>`q-editor q-editor--${B.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(s.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(c.value===!0?" q-editor--dark q-dark":"")),W=w(()=>[e.contentClass,"q-editor__content",{col:s.value,"overflow-auto":s.value||e.maxHeight}]),J=w(()=>e.disable===!0?{"aria-disabled":"true"}:{});function te(){if(r.value!==null){const n=`inner${B.value===!0?"Text":"HTML"}`,l=r.value[n];l!==e.modelValue&&(q=l,o("update:modelValue",l))}}function oe(n){if(o("keydown",n),n.ctrlKey!==!0||Oe(n)===!0){p();return}const l=n.keyCode,m=E.value[l];if(m!==void 0){const{cmd:S,param:z}=m;_e(n),j(S,z,!1)}}function ne(n){p(),o("click",n)}function Y(n){if(r.value!==null){const{scrollTop:l,scrollHeight:m}=r.value;k=m-l}g.caret.save(),o("blur",n)}function D(n){it(()=>{r.value!==null&&k!==void 0&&(r.value.scrollTop=r.value.scrollHeight-k)}),o("focus",n)}function ie(n){const l=y.value;if(l!==null&&l.contains(n.target)===!0&&(n.relatedTarget===null||l.contains(n.relatedTarget)!==!0)){const m=`inner${B.value===!0?"Text":"HTML"}`;g.caret.restorePosition(r.value[m].length),p()}}function le(n){const l=y.value;l!==null&&l.contains(n.target)===!0&&(n.relatedTarget===null||l.contains(n.relatedTarget)!==!0)&&(g.caret.savePosition(),p())}function G(){k=void 0}function Q(n){g.caret.save()}function M(n,l){if(r.value!==null){l===!0&&g.caret.savePosition();const m=`inner${B.value===!0?"Text":"HTML"}`;r.value[m]=n,l===!0&&(g.caret.restorePosition(r.value[m].length),p())}}function j(n,l,m=!0){A(),g.caret.restore(),g.caret.apply(n,l,()=>{A(),g.caret.save(),m&&p()})}function p(){setTimeout(()=>{b.value=null,i.$forceUpdate()},1)}function A(){lt(()=>{r.value!==null&&r.value.focus({preventScroll:!0})})}function N(){return r.value}return ue(()=>{g.caret=i.caret=new _t(r.value,g),M(e.modelValue),p(),document.addEventListener("selectionchange",Q)}),K(()=>{document.removeEventListener("selectionchange",Q)}),Object.assign(i,{runCmd:j,refreshToolbar:p,focus:A,getContentEl:N}),()=>{let n;if(V.value){const l=[h("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+$.value},Dt(g))];b.value!==null&&l.push(h("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+$.value},Ft(g))),n=h("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},l)}return h("div",{ref:y,class:R.value,style:{height:s.value===!0?"100%":null},...J.value,onFocusin:ie,onFocusout:le},[n,h("div",{ref:r,style:ee.value,class:W.value,contenteditable:v.value,placeholder:e.placeholder,...d.listeners.value,onInput:te,onKeydown:oe,onClick:ne,onBlur:Y,onFocus:D,onMousedown:G,onTouchstartPassive:G})])}}});const Kt=st({name:"JournalPage",created(){this.showLoading()},beforeMount(){this.notesStore=Nt(),this.notesStore.initialize(),this.settingsStore=Be(),this.settingsStore.initialize(),this.notesStore.notes.forEach(e=>{e.note.length>1e3&&(e.show=!1)}),this.$emit("refresh-header"),this.settingsStore.termsUpToDate()||this.$router.push("terms")},computed:{...rt(Be,["useBigButtons"]),buttonClass(){return this.useBigButtons?"bigBtn":""},formattedDate(){return function(e){const t=new Date(Date.parse(e));return Te.formatDate(t,this.settingsStore.useDateFormat)}}},setup(){const e=qt();let t;return K(()=>{t!==void 0&&(clearTimeout(t),e.loading.hide())}),{showLoading(){e.loading.show({spinner:$t,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your notes... Please wait!",messageColor:"white"}),t=setTimeout(()=>{e.loading.hide(),t=void 0},500)}}},methods:{moveNote(e,t,o){if(o){const i=this.notesStore.notes[e];t<0?(this.notesStore.notes.splice(e,1),this.notesStore.notes.unshift(i)):(this.notesStore.notes.splice(e,1),this.notesStore.notes.push(i)),this.notesStore.saveNotes()}else if(t<0){if(e>0){const i=this.notesStore.notes[e-1];this.notesStore.notes[e-1]=this.notesStore.notes[e],this.notesStore.notes[e]=i,this.notesStore.saveNotes()}}else if(e<this.notesStore.notes.length-1){const i=this.notesStore.notes[e+1];this.notesStore.notes[e+1]=this.notesStore.notes[e],this.notesStore.notes[e]=i,this.notesStore.saveNotes()}},getMaskDate(e){if(this.settingsStore.useDateFormat==="MMM D, YYYY")return"";const t=new Date(Date.parse(e));return Te.formatDate(t,this.settingsStore.useDateFormat)},toggleNote(e){this.notesStore.notes[e].show?this.notesStore.notes[e].show=!1:this.notesStore.notes[e].show=!0,this.notesStore.saveNotes()},removeNote(e){this.$q.dialog({title:"Confirm",message:"Are you sure you want to delete this note?",cancel:!0,persistent:!0}).onOk(()=>{this.$q.notify("Note Deleted."),this.notesStore.removeNote(e.id)})},handleTabKey(e){e.key&&e.key=="Tab"&&(e.preventDefault(),e.stopPropagation(),this.$refs.editorRef[this.focusedEditor].runCmd("insertText","	"))}}}),Wt={class:"flex justify-center q-mb-lg"},Jt={class:"notes-data"},Yt={key:0},Gt=I("br",null,null,-1),Xt=I("br",null,null,-1),Zt={class:"text-subtitle2"};function Vt(e,t,o,i,a,c){return X(),pe(Pt,{"items-center":"",class:"notes-page"},{default:H(()=>[I("div",Wt,[C(Le,{"no-wrap":""},{default:H(()=>[C(T,{class:F([e.buttonClass,"top-button"]),onClick:t[0]||(t[0]=s=>this.notesStore.addNote())},{default:H(()=>[ut("New Note")]),_:1},8,["class"])]),_:1})]),C(Bt,null,{default:H(()=>[(X(!0),ve(dt,null,ct(this.notesStore.notes,(s,u)=>ft((X(),pe(He,{key:s},{default:H(()=>[C(ht,{class:"notes-card text-white full-width outlined"},{default:H(()=>[C(mt,null,{default:H(()=>[I("div",Jt,[C(ye,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Note Title",modelValue:s.title,"onUpdate:modelValue":d=>s.title=d,onFocus:t[1]||(t[1]=d=>this.$q.notify("Note will be saved once you enter a title")),onBlur:d=>{s.title=s.title.trim(),this.notesStore.saveNotes()}},null,8,["modelValue","onUpdate:modelValue","onBlur"]),s.show?(X(),ve("div",Yt,[Gt,C(It,{ref_for:!0,ref:"editorRef",modelValue:s.note,"onUpdate:modelValue":d=>s.note=d,onBlur:t[2]||(t[2]=d=>this.notesStore.saveNotes()),onKeydown:e.handleTabKey,onFocus:d=>this.focusedEditor=u,toolbar:[["bold","italic","underline"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h5","h6","code"]}]]},null,8,["modelValue","onUpdate:modelValue","onKeydown","onFocus","toolbar"])])):gt("",!0),Xt,I("div",Zt,[C(ye,{"no-outline":"",style:{"padding-right":"1em","min-width":"35%"},"input-class":"text-left",label:"Note Created",modelValue:s.date,"onUpdate:modelValue":d=>s.date=d,value:e.formattedDate(s.date),mask:this.getMaskDate(s.date),readonly:""},null,8,["modelValue","onUpdate:modelValue","value","mask"])])])]),_:2},1024),C(pt,null,{default:H(()=>[C(T,{class:F(e.buttonClass),flat:"",dense:"",glossy:"",icon:"arrow_upward",color:"yellow",onClick:d=>e.moveNote(u,-1,!1),style:{margin:"0"}},null,8,["class","onClick"]),C(T,{class:F(e.buttonClass),flat:"",dense:"",glossy:"",icon:"arrow_downward",color:"yellow",onClick:d=>e.moveNote(u,1,!1),style:{margin:"0"}},null,8,["class","onClick"]),C(T,{class:F(e.buttonClass),flat:"",dense:"",glossy:"",icon:"keyboard_double_arrow_up",color:"yellow",onClick:d=>e.moveNote(u,-1,!0),style:{margin:"0"}},null,8,["class","onClick"]),C(T,{class:F(e.buttonClass),flat:"",dense:"",glossy:"",icon:"keyboard_double_arrow_down",color:"yellow",onClick:d=>e.moveNote(u,1,!0),style:{margin:"0"}},null,8,["class","onClick"]),C(T,{class:F(e.buttonClass),flat:"",dense:"",glossy:"",icon:"text_snippet",color:"green",onClick:d=>e.toggleNote(u),style:{margin:"0"}},null,8,["class","onClick"]),C(T,{class:F(e.buttonClass),flat:"",dense:"",glossy:"",icon:"delete",color:"black",onClick:d=>e.removeNote(s),style:{margin:"0"}},null,8,["class","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[vt]])),128))]),_:1})]),_:1})}var ho=at(Kt,[["render",Vt]]);export{ho as default};
