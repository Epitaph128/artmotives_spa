import{a as c,c as He,f as Be,at as Ae,k as je,au as Fe,r as Q,w as se,ad as Ie,b as Ke,h as s,g as Pe,av as Te,s as $e,X as pe,V as Ye,t as Le,P as Ne}from"./index.232183f4.js";import{T as Qe}from"./TouchPan.d4a15679.js";import{p as y,t as ze,_ as z,f as We}from"./date.33bb54d8.js";const Xe=["gregorian","persian"],Ee={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:l=>Xe.includes(l),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Je=["update:modelValue"];function Ue(l){return l.year+"/"+y(l.month)+"/"+y(l.day)}function Ge(l,w){const H=c(()=>l.disable!==!0&&l.readonly!==!0),x=c(()=>H.value===!0?0:-1),k=c(()=>{const _=[];return l.color!==void 0&&_.push(`bg-${l.color}`),l.textColor!==void 0&&_.push(`text-${l.textColor}`),_.join(" ")});function W(){return l.locale!==void 0?{...w.lang.date,...l.locale}:w.lang.date}function g(_){const C=new Date,b=_===!0?null:0;if(l.calendar==="persian"){const M=ze(C);return{year:M.jy,month:M.jm,day:M.jd}}return{year:C.getFullYear(),month:C.getMonth()+1,day:C.getDate(),hour:b,minute:b,second:b,millisecond:b}}return{editable:H,tabindex:x,headerClass:k,getLocale:W,getCurrentDate:g}}function Ze(l,w){if(l.hour!==null){if(l.minute===null)return"minute";if(w===!0&&l.second===null)return"second"}return"hour"}function Re(){const l=new Date;return{hour:l.getHours(),minute:l.getMinutes(),second:l.getSeconds(),millisecond:l.getMilliseconds()}}var nt=He({name:"QTime",props:{...Be,...Ae,...Ee,mask:{default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:l=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(l)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:Je,setup(l,{slots:w,emit:H}){const x=Pe(),{$q:k}=x.proxy,W=je(l,k),{tabindex:g,headerClass:_,getLocale:C,getCurrentDate:b}=Ge(l,k),M=Fe(l),re=Te(M);let B,A;const ee=Q(null),j=c(()=>he()),F=c(()=>C()),te=c(()=>ge()),I=z(l.modelValue,j.value,F.value,l.calendar,te.value),i=Q(Ze(I)),n=Q(I),d=Q(I.hour===null||I.hour<12),ce=c(()=>`q-time q-time--${l.landscape===!0?"landscape":"portrait"}`+(W.value===!0?" q-time--dark q-dark":"")+(l.disable===!0?" disabled":l.readonly===!0?" q-time--readonly":"")+(l.bordered===!0?" q-time--bordered":"")+(l.square===!0?" q-time--square no-border-radius":"")+(l.flat===!0?" q-time--flat no-shadow":"")),X=c(()=>{const e=n.value;return{hour:e.hour===null?"--":f.value===!0?y(e.hour):String(d.value===!0?e.hour===0?12:e.hour:e.hour>12?e.hour-12:e.hour),minute:e.minute===null?"--":y(e.minute),second:e.second===null?"--":y(e.second)}}),f=c(()=>l.format24h!==null?l.format24h:k.lang.date.format24h),de=c(()=>{const e=i.value==="hour",t=e===!0?12:60,u=n.value[i.value];let r=`rotate(${Math.round(u*(360/t))-180}deg) translateX(-50%)`;return e===!0&&f.value===!0&&n.value.hour>=12&&(r+=" scale(.7)"),{transform:r}}),le=c(()=>n.value.hour!==null),ve=c(()=>le.value===!0&&n.value.minute!==null),D=c(()=>l.hourOptions!==void 0?e=>l.hourOptions.includes(e):l.options!==void 0?e=>l.options(e,null,null):null),K=c(()=>l.minuteOptions!==void 0?e=>l.minuteOptions.includes(e):l.options!==void 0?e=>l.options(n.value.hour,e,null):null),P=c(()=>l.secondOptions!==void 0?e=>l.secondOptions.includes(e):l.options!==void 0?e=>l.options(n.value.hour,n.value.minute,e):null),h=c(()=>{if(D.value===null)return null;const e=$(0,11,D.value),t=$(12,11,D.value);return{am:e,pm:t,values:e.values.concat(t.values)}}),S=c(()=>K.value!==null?$(0,59,K.value):null),O=c(()=>P.value!==null?$(0,59,P.value):null),T=c(()=>{switch(i.value){case"hour":return h.value;case"minute":return S.value;case"second":return O.value}}),fe=c(()=>{let e,t,u=0,o=1;const r=T.value!==null?T.value.values:void 0;i.value==="hour"?f.value===!0?(e=0,t=23):(e=0,t=11,d.value===!1&&(u=12)):(e=0,t=55,o=5);const m=[];for(let a=e,v=e;a<=t;a+=o,v++){const q=a+u,Oe=r!==void 0&&r.includes(q)===!1,Ve=i.value==="hour"&&a===0?f.value===!0?"00":"12":a;m.push({val:q,index:v,disable:Oe,label:Ve})}return m}),me=c(()=>[[Qe,_e,void 0,{stop:!0,prevent:!0,mouse:!0}]]);se(()=>l.modelValue,e=>{const t=z(e,j.value,F.value,l.calendar,te.value);(t.dateHash!==n.value.dateHash||t.timeHash!==n.value.timeHash)&&(n.value=t,t.hour===null?i.value="hour":d.value=t.hour<12)}),se([j,F],()=>{$e(()=>{R()})});function ne(){const e={...b(),...Re()};R(e),Object.assign(n.value,e),i.value="hour"}function $(e,t,u){const o=Array.apply(null,{length:t+1}).map((r,m)=>{const a=m+e;return{index:a,val:u(a)===!0}}).filter(r=>r.val===!0).map(r=>r.index);return{min:o[0],max:o[o.length-1],values:o,threshold:t+1}}function ue(e,t,u){const o=Math.abs(e-t);return Math.min(o,u-o)}function E(e,{min:t,max:u,values:o,threshold:r}){if(e===t)return t;if(e<t||e>u)return ue(e,t,r)<=ue(e,u,r)?t:u;const m=o.findIndex(q=>e<=q),a=o[m-1],v=o[m];return e-a<=v-e?a:v}function he(){return l.calendar!=="persian"&&l.mask!==null?l.mask:`HH:mm${l.withSeconds===!0?":ss":""}`}function ge(){if(typeof l.defaultDate!="string"){const e=b(!0);return e.dateHash=Ue(e),e}return z(l.defaultDate,"YYYY/MM/DD",void 0,l.calendar)}function J(){return pe(x)===!0||T.value!==null&&(T.value.values.length===0||i.value==="hour"&&f.value!==!0&&h.value[d.value===!0?"am":"pm"].values.length===0)}function U(){const e=ee.value,{top:t,left:u,width:o}=e.getBoundingClientRect(),r=o/2;return{top:t+r,left:u+r,dist:r*.7}}function _e(e){if(J()!==!0){if(e.isFirst===!0){B=U(),A=p(e.evt,B);return}A=p(e.evt,B,A),e.isFinal===!0&&(B=!1,A=null,ae())}}function ae(){i.value==="hour"?i.value="minute":l.withSeconds&&i.value==="minute"&&(i.value="second")}function p(e,t,u){const o=Ie(e),r=Math.abs(o.top-t.top),m=Math.sqrt(Math.pow(Math.abs(o.top-t.top),2)+Math.pow(Math.abs(o.left-t.left),2));let a,v=Math.asin(r/m)*(180/Math.PI);if(o.top<t.top?v=t.left<o.left?90-v:270+v:v=t.left<o.left?v+90:270-v,i.value==="hour"){if(a=v/30,h.value!==null){const q=f.value!==!0?d.value===!0:h.value.am.values.length!==0&&h.value.pm.values.length!==0?m>=t.dist:h.value.am.values.length!==0;a=E(a+(q===!0?0:12),h.value[q===!0?"am":"pm"])}else a=Math.round(a),f.value===!0?m<t.dist?a<12&&(a+=12):a===12&&(a=0):d.value===!0&&a===12?a=0:d.value===!1&&a!==12&&(a+=12);f.value===!0&&(d.value=a<12)}else a=Math.round(v/6)%60,i.value==="minute"&&S.value!==null?a=E(a,S.value):i.value==="second"&&O.value!==null&&(a=E(a,O.value));return u!==a&&Me[i.value](a),a}const G={hour(){i.value="hour"},minute(){i.value="minute"},second(){i.value="second"}};function ye(e){e.keyCode===13&&oe()}function ke(e){e.keyCode===13&&ie()}function be(e){J()!==!0&&(k.platform.is.desktop!==!0&&p(e,U()),ae())}function qe(e){J()!==!0&&p(e,U())}function we(e){if(e.keyCode===13)i.value="hour";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(h.value!==null){const u=f.value===!0?h.value.values:h.value[d.value===!0?"am":"pm"].values;if(u.length===0)return;if(n.value.hour===null)Y(u[0]);else{const o=(u.length+u.indexOf(n.value.hour)+t)%u.length;Y(u[o])}}else{const u=f.value===!0?24:12,o=f.value!==!0&&d.value===!1?12:0,r=n.value.hour===null?-t:n.value.hour;Y(o+(24+r+t)%u)}}}function Ce(e){if(e.keyCode===13)i.value="minute";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(S.value!==null){const u=S.value.values;if(u.length===0)return;if(n.value.minute===null)L(u[0]);else{const o=(u.length+u.indexOf(n.value.minute)+t)%u.length;L(u[o])}}else{const u=n.value.minute===null?-t:n.value.minute;L((60+u+t)%60)}}}function xe(e){if(e.keyCode===13)i.value="second";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(O.value!==null){const u=O.value.values;if(u.length===0)return;if(n.value.seconds===null)N(u[0]);else{const o=(u.length+u.indexOf(n.value.second)+t)%u.length;N(u[o])}}else{const u=n.value.second===null?-t:n.value.second;N((60+u+t)%60)}}}function Y(e){n.value.hour!==e&&(n.value.hour=e,V())}function L(e){n.value.minute!==e&&(n.value.minute=e,V())}function N(e){n.value.second!==e&&(n.value.second=e,V())}const Me={hour:Y,minute:L,second:N};function oe(){d.value===!1&&(d.value=!0,n.value.hour!==null&&(n.value.hour-=12,V()))}function ie(){d.value===!0&&(d.value=!1,n.value.hour!==null&&(n.value.hour+=12,V()))}function Z(e){const t=l.modelValue;i.value!==e&&t!==void 0&&t!==null&&t!==""&&typeof t!="string"&&(i.value=e)}function V(){if(D.value!==null&&D.value(n.value.hour)!==!0){n.value=z(),Z("hour");return}if(K.value!==null&&K.value(n.value.minute)!==!0){n.value.minute=null,n.value.second=null,Z("minute");return}if(l.withSeconds===!0&&P.value!==null&&P.value(n.value.second)!==!0){n.value.second=null,Z("second");return}n.value.hour===null||n.value.minute===null||l.withSeconds===!0&&n.value.second===null||R()}function R(e){const t=Object.assign({...n.value},e),u=l.calendar==="persian"?y(t.hour)+":"+y(t.minute)+(l.withSeconds===!0?":"+y(t.second):""):We(new Date(t.year,t.month===null?null:t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),j.value,F.value,t.year,t.timezoneOffset);t.changed=u!==l.modelValue,H("update:modelValue",u,t)}function De(){const e=[s("div",{class:"q-time__link "+(i.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:G.hour,onKeyup:we},X.value.hour),s("div",":"),s("div",le.value===!0?{class:"q-time__link "+(i.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onKeyup:Ce,onClick:G.minute}:{class:"q-time__link"},X.value.minute)];l.withSeconds===!0&&e.push(s("div",":"),s("div",ve.value===!0?{class:"q-time__link "+(i.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onKeyup:xe,onClick:G.second}:{class:"q-time__link"},X.value.second));const t=[s("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},e)];return f.value===!1&&t.push(s("div",{class:"q-time__header-ampm column items-between no-wrap"},[s("div",{class:"q-time__link "+(d.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:oe,onKeyup:ye},"AM"),s("div",{class:"q-time__link "+(d.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:ie,onKeyup:ke},"PM")])),s("div",{class:"q-time__header flex flex-center no-wrap "+_.value},t)}function Se(){const e=n.value[i.value];return s("div",{class:"q-time__content col relative-position"},[s(Ye,{name:"q-transition--scale"},()=>s("div",{key:"clock"+i.value,class:"q-time__container-parent absolute-full"},[s("div",{ref:ee,class:"q-time__container-child fit overflow-hidden"},[Le(s("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:be,onMousedown:qe},[s("div",{class:"q-time__clock-circle fit"},[s("div",{class:"q-time__clock-pointer"+(n.value[i.value]===null?" hidden":l.color!==void 0?` text-${l.color}`:""),style:de.value}),fe.value.map(t=>s("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${t.index}`+(t.val===e?" q-time__clock-position--active "+_.value:t.disable===!0?" q-time__clock-position--disable":"")},[s("span",t.label)]))])]),me.value)])])),l.nowBtn===!0?s(Ne,{class:"q-time__now-button absolute",icon:k.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:l.color,textColor:l.textColor,tabindex:g.value,onClick:ne}):null])}return x.proxy.setNow=ne,()=>{const e=[Se()],t=Ke(w.default);return t!==void 0&&e.push(s("div",{class:"q-time__actions"},t)),l.name!==void 0&&l.disable!==!0&&re(e,"push"),s("div",{class:ce.value,tabindex:-1},[De(),s("div",{class:"q-time__main col overflow-auto"},e)])}}});export{nt as Q,Je as a,Ge as b,Ue as g,Ee as u};
