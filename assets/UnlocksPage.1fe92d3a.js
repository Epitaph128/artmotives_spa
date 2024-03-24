import{a as g,c as E,r as y,t as T,i as H,o as F,h as u,av as V,b as A,B as W,w as Y,au as U,g as G,_ as J,M as K,N as t,O as o,P as X,Y as n,T as Z}from"./index.71846c29.js";import{Q as x}from"./QPage.2dabb5f6.js";import{u as ee}from"./store_unlocks.250181bf.js";import{u as se}from"./store_settings.6082574d.js";const te={ratio:[String,Number]};function oe(e,s){return g(()=>{const k=Number(e.ratio||(s!==void 0?s.value:void 0));return isNaN(k)!==!0&&k>0?{paddingBottom:`${100/k}%`}:null})}const ie=1.7778;var i=E({name:"QImg",props:{...te,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ie},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:s,emit:k}){const _=y(e.initialRatio),p=oe(e,_),m=G(),{registerTimeout:l,removeTimeout:C}=T(),{registerTimeout:N,removeTimeout:w}=T(),b=g(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),z=g(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),c=[y(null),y(b.value)],d=y(0),f=y(!1),h=y(!1),B=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),L=g(()=>({width:e.width,height:e.height})),I=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),P=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function R(){if(w(),e.loadingShowDelay===0){f.value=!0;return}N(()=>{f.value=!0},e.loadingShowDelay)}function $(){w(),f.value=!1}function M({target:r}){U(m)===!1&&(C(),_.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,j(r,1))}function j(r,v){v===1e3||U(m)===!0||(r.complete===!0?Q(r):l(()=>{j(r,v+1)},50))}function Q(r){U(m)!==!0&&(d.value=d.value^1,c[d.value].value=null,$(),r.getAttribute("__qerror")!=="true"&&(h.value=!1),k("load",r.currentSrc||r.src))}function D(r){C(),$(),h.value=!0,c[d.value].value=z.value,c[d.value^1].value=b.value,k("error",r)}function q(r){const v=c[r].value,S={key:"img_"+r,class:I.value,style:P.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return d.value===r?Object.assign(S,{class:S.class+"current",onLoad:M,onError:D}):S.class+="loaded",u("div",{class:"q-img__container absolute-full",key:"img"+r},u("img",S))}function O(){return f.value===!1?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},A(s[h.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},s.loading!==void 0?s.loading():e.noSpinner===!0?void 0:[u(W,{color:e.spinnerColor,size:e.spinnerSize})])}{let r=function(){Y(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,v=>{C(),h.value=!1,v===null?($(),c[d.value^1].value=b.value):R(),c[d.value].value=v},{immediate:!0})};H.value===!0?F(r):r()}return()=>{const r=[];return p.value!==null&&r.push(u("div",{key:"filler",style:p.value})),c[0].value!==null&&r.push(q(0)),c[1].value!==null&&r.push(q(1)),r.push(u(V,{name:"q-transition--fade"},O)),u("div",{key:"main",class:B.value,style:L.value,role:"img","aria-label":e.alt},r)}}}),ne="/assets/1.8e9ba7b4.jpg",a="/assets/question-mark.1301a891.jpg",re="/assets/2.d9a59dc0.jpg",le="/assets/3.86c5fea7.jpg",ae="/assets/4.88c1fa7c.jpg",ce="/assets/5.0965c32e.jpg",de="/assets/6.57f4a578.jpg",ue="/assets/7.53a0c949.jpg",ke="/assets/8.82cbb885.jpg",ve="/assets/9.427a55a7.jpg",ge="/assets/10.28f628fa.jpg",ye="/assets/11.d238e4ec.jpg",me="/assets/12.cae42b5f.jpg",fe="/assets/13.86883532.jpg",he="/assets/14.3644eef2.jpg",Se="/assets/15.a815adcf.jpg",_e="/assets/16.3db103d7.jpg",pe="/assets/17.b9be9b2b.jpg",Ce="/assets/18.14405b14.jpg",be="/assets/19.bf659118.jpg",$e="/assets/20.648ba2f9.jpg",Ue="/assets/21.602d1d8e.jpg",we="/assets/22.4f30895f.jpg",je="/assets/23.73561a8b.jpg",qe="/assets/24.4ed4e501.jpg";const Te=K({name:"UnlocksPage",data(){return{}},beforeMount(){this.settingsStore=se(),this.settingsStore.initialize(),this.unlocksStore=ee(),this.unlocksStore.initialize(),this.$emit("refresh-header")},methods:{unlocked(e){return this.unlocksStore.unlocks.includes(e)},tryUnlock(e){this.unlocked(e)||(this.settingsStore.coins>=1e3?this.$q.dialog({title:"Confirm",message:"Spend 1000 coins to unlock?",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.coins=this.settingsStore.coins-1e3,this.settingsStore.saveCoins(),this.unlocksStore.unlocks.push(e),this.unlocksStore.saveUnlocks()}):this.$q.notify("Unlocking an artwork requires 1,000 coins."))}}}),Ne=n("h4",{class:"q-mt-none q-mb-none",style:{padding:"1em","text-align":"center"}}," Purchase Unlocks ",-1),ze={class:"q-pa-lg"},Be=n("p",null,[Z(" Click an image with a question mark to unlock the hidden image behind. Each unlock will cost 1,000 coins, so about the equivalent of completing two hard goals. Use the app honestly, no cheating! That ruins the fun and benefit!"),n("br"),n("br")],-1),Le={class:"q-pa-none example-row-equal-width"},Ie={class:"row"},Pe={class:"col art-col"},Re={class:"col art-col"},Me={class:"col art-col"},Qe={class:"row"},De={class:"col art-col"},Oe={class:"col art-col"},Ee={class:"col art-col"},He={class:"row"},Fe={class:"col art-col"},Ve={class:"col art-col"},Ae={class:"col art-col"},We={class:"row"},Ye={class:"col art-col"},Ge={class:"col art-col"},Je={class:"col art-col"},Ke={class:"row"},Xe={class:"col art-col"},Ze={class:"col art-col"},xe={class:"col art-col"},es={class:"row"},ss={class:"col art-col"},ts={class:"col art-col"},os={class:"col art-col"},is={class:"row"},ns={class:"col art-col"},rs={class:"col art-col"},ls={class:"col art-col"},as={class:"row"},cs={class:"col art-col"},ds={class:"col art-col"},us={class:"col art-col"};function ks(e,s,k,_,p,m){return t(),o(x,{"items-center":""},{default:X(()=>[Ne,n("div",ze,[Be,n("div",Le,[n("div",Ie,[n("div",Pe,[e.unlocked(1)?(t(),o(i,{key:0,src:ne})):(t(),o(i,{key:1,src:a,onClick:s[0]||(s[0]=l=>e.tryUnlock(1))}))]),n("div",Re,[e.unlocked(2)?(t(),o(i,{key:0,src:re})):(t(),o(i,{key:1,src:a,onClick:s[1]||(s[1]=l=>e.tryUnlock(2))}))]),n("div",Me,[e.unlocked(3)?(t(),o(i,{key:0,src:le})):(t(),o(i,{key:1,src:a,onClick:s[2]||(s[2]=l=>e.tryUnlock(3))}))])]),n("div",Qe,[n("div",De,[e.unlocked(4)?(t(),o(i,{key:0,src:ae})):(t(),o(i,{key:1,src:a,onClick:s[3]||(s[3]=l=>e.tryUnlock(4))}))]),n("div",Oe,[e.unlocked(5)?(t(),o(i,{key:0,src:ce})):(t(),o(i,{key:1,src:a,onClick:s[4]||(s[4]=l=>e.tryUnlock(5))}))]),n("div",Ee,[e.unlocked(6)?(t(),o(i,{key:0,src:de})):(t(),o(i,{key:1,src:a,onClick:s[5]||(s[5]=l=>e.tryUnlock(6))}))])]),n("div",He,[n("div",Fe,[e.unlocked(7)?(t(),o(i,{key:0,src:ue})):(t(),o(i,{key:1,src:a,onClick:s[6]||(s[6]=l=>e.tryUnlock(7))}))]),n("div",Ve,[e.unlocked(8)?(t(),o(i,{key:0,src:ke})):(t(),o(i,{key:1,src:a,onClick:s[7]||(s[7]=l=>e.tryUnlock(8))}))]),n("div",Ae,[e.unlocked(9)?(t(),o(i,{key:0,src:ve})):(t(),o(i,{key:1,src:a,onClick:s[8]||(s[8]=l=>e.tryUnlock(9))}))])]),n("div",We,[n("div",Ye,[e.unlocked(10)?(t(),o(i,{key:0,src:ge})):(t(),o(i,{key:1,src:a,onClick:s[9]||(s[9]=l=>e.tryUnlock(10))}))]),n("div",Ge,[e.unlocked(11)?(t(),o(i,{key:0,src:ye})):(t(),o(i,{key:1,src:a,onClick:s[10]||(s[10]=l=>e.tryUnlock(11))}))]),n("div",Je,[e.unlocked(12)?(t(),o(i,{key:0,src:me})):(t(),o(i,{key:1,src:a,onClick:s[11]||(s[11]=l=>e.tryUnlock(12))}))])]),n("div",Ke,[n("div",Xe,[e.unlocked(13)?(t(),o(i,{key:0,src:fe})):(t(),o(i,{key:1,src:a,onClick:s[12]||(s[12]=l=>e.tryUnlock(13))}))]),n("div",Ze,[e.unlocked(14)?(t(),o(i,{key:0,src:he})):(t(),o(i,{key:1,src:a,onClick:s[13]||(s[13]=l=>e.tryUnlock(14))}))]),n("div",xe,[e.unlocked(15)?(t(),o(i,{key:0,src:Se})):(t(),o(i,{key:1,src:a,onClick:s[14]||(s[14]=l=>e.tryUnlock(15))}))])]),n("div",es,[n("div",ss,[e.unlocked(16)?(t(),o(i,{key:0,src:_e})):(t(),o(i,{key:1,src:a,onClick:s[15]||(s[15]=l=>e.tryUnlock(16))}))]),n("div",ts,[e.unlocked(17)?(t(),o(i,{key:0,src:pe})):(t(),o(i,{key:1,src:a,onClick:s[16]||(s[16]=l=>e.tryUnlock(17))}))]),n("div",os,[e.unlocked(18)?(t(),o(i,{key:0,src:Ce})):(t(),o(i,{key:1,src:a,onClick:s[17]||(s[17]=l=>e.tryUnlock(18))}))])]),n("div",is,[n("div",ns,[e.unlocked(19)?(t(),o(i,{key:0,src:be})):(t(),o(i,{key:1,src:a,onClick:s[18]||(s[18]=l=>e.tryUnlock(19))}))]),n("div",rs,[e.unlocked(20)?(t(),o(i,{key:0,src:$e})):(t(),o(i,{key:1,src:a,onClick:s[19]||(s[19]=l=>e.tryUnlock(20))}))]),n("div",ls,[e.unlocked(21)?(t(),o(i,{key:0,src:Ue})):(t(),o(i,{key:1,src:a,onClick:s[20]||(s[20]=l=>e.tryUnlock(21))}))])])]),n("div",as,[n("div",cs,[e.unlocked(22)?(t(),o(i,{key:0,src:we})):(t(),o(i,{key:1,src:a,onClick:s[21]||(s[21]=l=>e.tryUnlock(22))}))]),n("div",ds,[e.unlocked(23)?(t(),o(i,{key:0,src:je})):(t(),o(i,{key:1,src:a,onClick:s[22]||(s[22]=l=>e.tryUnlock(23))}))]),n("div",us,[e.unlocked(24)?(t(),o(i,{key:0,src:qe})):(t(),o(i,{key:1,src:a,onClick:s[23]||(s[23]=l=>e.tryUnlock(24))}))])])])]),_:1})}var fs=J(Te,[["render",ks]]);export{fs as default};
