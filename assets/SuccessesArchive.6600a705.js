import{_ as c,F as l,o as m,ak as d,G as r,H as i,I as s,R as n,J as a,P as h,al as p,L as g,O as f,S as v,T as b,t as y,b6 as S,as as _}from"./index.232183f4.js";import{Q as C}from"./QBtnGroup.2a8f0225.js";import{Q as E}from"./QItem.aa202a93.js";import{Q as w}from"./QList.5432aacd.js";import{Q as B}from"./QPage.7947ecf9.js";import{u as $,Q as k}from"./QSpinnerFacebook.7e0aa6c8.js";import{u as A}from"./store_successes.3567dcbb.js";import{u}from"./store_settings.a16beabf.js";import{D as Q,G as q,H as D}from"./HabitEntry.c88f98ae.js";import"./date.33bb54d8.js";const F=l({name:"SuccessesArchive",components:{DreamEntry:Q,GoalEntry:q,HabitEntry:D},data(){return{}},created(){this.showLoading()},beforeMount(){this.successesStore=A(),this.successesStore.initializeArchive(),this.settingsStore=u(),this.settingsStore.initialize(),this.$emit("refresh-header"),this.settingsStore.termsUpToDate()||this.$router.push("terms")},setup(){const e=$();let t;return m(()=>{t!==void 0&&(clearTimeout(t),e.loading.hide())}),{showLoading(){e.loading.show({spinner:k,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your successes archive... Please wait!",messageColor:"white"}),t=setTimeout(()=>{e.loading.hide(),t=void 0},500)}}},computed:{...d(u,["useBigButtons"]),buttonClass(){return this.useBigButtons?"bigBtn":""}},methods:{getComponentForEntry(e){switch(e.type){case"dream":return"DreamEntry";case"goal":return"GoalEntry";case"habit":return"HabitEntry";default:return null}},removeEntry(e){e.type=="goal"?this.$q.dialog({title:"Confirm",message:'Are you sure you want to delete the goal success: "'+e.goal+'"',cancel:!0,persistent:!0}).onOk(()=>{this.$q.notify('Goal record deleted: "'+e.goal+'"'),this.successesStore.removeArchivedEntry(e.id)}):e.type=="habit"?this.$q.dialog({title:"Confirm",message:'Are you sure you want to delete the habit milestone: "'+e.habit+'"',cancel:!0,persistent:!0}).onOk(()=>{this.$q.notify('Habit milestone record deleted: "'+e.habit+'"'),this.successesStore.removeArchivedEntry(e.id)}):e.type=="dream"?this.$q.dialog({title:"Confirm",message:'Are you sure you want to delete the dream achievement: "'+e.title+'"',cancel:!0,persistent:!0}).onOk(()=>{this.$q.notify('Dream achievement deleted: "'+e.title+'"'),this.successesStore.removeArchivedEntry(e.id)}):this.successesStore.removeArchivedEntry(e.id)}}}),G={class:"q-gutter-md row justify-center"},L=n("br",null,null,-1),H=n("h1",{class:"q-mt-none q-mb-none text-white"},"Your Archive",-1);function T(e,t,z,O,R,x){return r(),i(B,{"items-center":"",class:"successes-page"},{default:s(()=>[n("div",G,[a(C,{"no-wrap":""},{default:s(()=>[a(h,{class:p([e.buttonClass,"top-button"]),onClick:t[0]||(t[0]=o=>e.$router.push("successes"))},{default:s(()=>[g("Go back")]),_:1},8,["class"])]),_:1})]),L,H,a(w,null,{default:s(()=>[(r(!0),f(b,null,v(this.successesStore.successesArchive,o=>y((r(),i(E,{key:o},{default:s(()=>[(r(),i(S(e.getComponentForEntry(o)),{entry:o,buttonClass:this.useBigButtons?"bigBtn":"",dateFormat:this.settingsStore.useDateFormat,onRemoveEntry:e.removeEntry},null,40,["entry","buttonClass","dateFormat","onRemoveEntry"]))]),_:2},1024)),[[_]])),128))]),_:1})]),_:1})}var W=c(F,[["render",T]]);export{W as default};
