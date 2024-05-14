import{_ as p,F as D,o as S,ak as y,G as i,H as g,I as n,R as m,J as o,P as l,al as d,L as k,O as r,K as v,S as C,T as _,t as w,am as $,an as b,ao as c,ar as T,as as Q}from"./index.2b736ce4.js";import{Q as V}from"./QBtnGroup.0e1fb1c1.js";import{Q as B}from"./QItem.a35543d0.js";import{Q as M}from"./QList.6ca4989f.js";import{Q as Y}from"./QPage.e35f8b86.js";import{d as u}from"./date.b41de16f.js";import{u as q,Q as F}from"./QSpinnerFacebook.f469f825.js";import{u as U}from"./store_dreams.d4719c45.js";import{u as x}from"./store_successes.8258fdd2.js";import{u as f}from"./store_settings.4d1fc436.js";const A=D({name:"DreamsPage",data(){return[]},created(){this.showLoading()},beforeMount(){this.settingsStore=f(),this.settingsStore.initialize(),this.dreamsStore=U(),this.dreamsStore.initialize(),this.successesStore=x(),this.successesStore.initialize(),this.$emit("refresh-header"),this.settingsStore.termsUpToDate()||this.$router.push("terms")},setup(){const e=q();let s;return S(()=>{s!==void 0&&(clearTimeout(s),e.loading.hide())}),{showLoading(){e.loading.show({spinner:F,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your dreams... Please wait!",messageColor:"white"}),s=setTimeout(()=>{e.loading.hide(),s=void 0},500)}}},computed:{...y(f,["useBigButtons"]),buttonClass(){return this.useBigButtons?"bigBtn":""},formattedDate(){return function(e){const s=new Date(Date.parse(e));return u.formatDate(s,this.settingsStore.useDateFormat)}}},methods:{completeDream(e){if(!e.ready){e.ready=!0,this.$q.notify("Click again to mark complete!");return}this.$q.dialog({title:"Confirm",message:'Confirm you achieved your dream: "'+e.title+'"',cancel:!0,persistent:!0}).onOk(()=>{var s=2500;this.$q.notify("Rewarded "+s+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+s,this.settingsStore.totalCoins=this.settingsStore.totalCoins+s,e.date=this.getDateWithTime(),e.timeTieBreaker=this.getTime(),e.type="dream",this.successesStore.addEntry(e),this.$q.notify("Dream achieved: "+e.title+"!"),this.settingsStore.saveCoins(),this.dreamsStore.removeDream(e.id),this.$emit("refresh-header")})},removeDream(e){this.$q.dialog({title:"Confirm",message:"Are you sure you want to delete this dream?",cancel:!0,persistent:!0}).onOk(()=>{this.$q.notify("Dream Deleted."),this.dreamsStore.removeDream(e)})},hideTutorial(){this.$q.dialog({title:"Acknowledge",message:"Have you read and understood the instructions?",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.tutorialSettings.dreamsTutorialHidden=!0,this.settingsStore.saveTutorialSettings()})},getDate(){const e=Date().toString();return u.formatDate(e,"MMM D, YYYY")},getMaskDate(e){if(this.settingsStore.useDateFormat==="MMM D, YYYY")return"";const s=new Date(Date.parse(e));return u.formatDate(s,this.settingsStore.useDateFormat)},getDateWithTime(){const e=Date().toString();return u.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()}}}),E={class:"flex justify-center q-mb-lg"},I={key:0,class:"tutorial"},L=m("p",null," Go to Settings and then Export Report to generate an export report with your dreams. You can then paste this into the AI large language model of your choice and it should return a list of goals. If you copy those (only the goals code) into the import goals setting then you can use AI to create a schedule of goals for you based on your personal data! This won't happen automatically so your data is kept private by default. ",-1),P={class:"notes-data"},z=m("br",null,null,-1),N={key:0},H={key:1},O={key:0},R={key:1};function G(e,s,h,W,j,J){return i(),g(Y,{"items-center":"",class:"dreams-page"},{default:n(()=>[m("div",E,[o(V,{"no-wrap":""},{default:n(()=>[o(l,{class:d([e.buttonClass,"top-button"]),onClick:s[0]||(s[0]=t=>this.dreamsStore.addDream())},{default:n(()=>[k("New Dream")]),_:1},8,["class"])]),_:1})]),this.settingsStore.tutorialSettings.dreamsTutorialHidden?v("",!0):(i(),r("div",I,[L,o(l,{flat:"",dense:"",glossy:"",icon:"done",color:"check",onClick:s[1]||(s[1]=t=>this.hideTutorial())})])),o(M,null,{default:n(()=>[(i(!0),r(_,null,C(this.dreamsStore.dreams,t=>w((i(),g(B,{key:t},{default:n(()=>[o($,{class:"notes-card text-white full-width outlined"},{default:n(()=>[o(b,null,{default:n(()=>[m("div",P,[o(c,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Dream Title",modelValue:t.title,"onUpdate:modelValue":a=>t.title=a,onFocus:a=>{t.preEditTitle=t.title,this.$q.notify("Dream will be saved once you enter a title")},onBlur:a=>{t.title=t.title.trim(),t.preEditTitle!==t.title?(t.preEditTitle=null,t.modifiedDate=this.getDate(),this.dreamsStore.saveDreams()):t.preEditTitle=null}},null,8,["modelValue","onUpdate:modelValue","onFocus","onBlur"]),z,t.modifiedDate!=null&&t.modifiedDate!=t.createdDate?(i(),r("div",N,[o(c,{"no-outline":"",style:{"padding-right":"1em","min-width":"35%"},"input-class":"text-left",label:"Dream Modified",modelValue:t.modifiedDate,"onUpdate:modelValue":a=>t.modifiedDate=a,value:e.formattedDate(t.modifiedDate),mask:this.getMaskDate(t.modifiedDate),readonly:""},null,8,["modelValue","onUpdate:modelValue","value","mask"])])):(i(),r("div",H,[o(c,{"no-outline":"",style:{"padding-right":"1em","min-width":"35%"},"input-class":"text-left",label:"Dream Created",modelValue:t.createdDate,"onUpdate:modelValue":a=>t.createdDate=a,value:e.formattedDate(t.createdDate),mask:this.getMaskDate(t.createdDate),readonly:""},null,8,["modelValue","onUpdate:modelValue","value","mask"])]))])]),_:2},1024),o(T,null,{default:n(()=>[t.ready?(i(),r("div",O,[o(l,{class:d(e.buttonClass),flat:"",dense:"",glossy:"",icon:"done_all",color:"green",onClick:a=>e.completeDream(t)},null,8,["class","onClick"])])):(i(),r("div",R,[o(l,{class:d(e.buttonClass),flat:"",dense:"",glossy:"",icon:"check",color:"green",onClick:a=>e.completeDream(t)},null,8,["class","onClick"])])),o(l,{class:d(e.buttonClass),style:{margin:"0"},flat:"",dense:"",glossy:"",icon:"delete",color:"black",onClick:a=>e.removeDream(t.id)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[Q]])),128))]),_:1})]),_:1})}var re=p(A,[["render",G]]);export{re as default};
