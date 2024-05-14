import{_ as A,F as Q,o as B,ak as M,G as l,H as k,I as n,R as a,J as o,P as d,al as u,L as c,M as m,O as r,K as f,S as y,T as C,t as S,am as v,an as q,ao as b,ap as _,aq as N,ar as T,as as H}from"./index.2b736ce4.js";import{Q as U}from"./QBtnGroup.0e1fb1c1.js";import{Q as w}from"./QTime.d307f490.js";import{Q as E}from"./QCircularProgress.c96eb793.js";import{Q as $}from"./QItem.a35543d0.js";import{Q as V}from"./QList.6ca4989f.js";import{Q as L}from"./QPage.e35f8b86.js";import{d as D}from"./date.b41de16f.js";import{u as P,Q as Y}from"./QSpinnerFacebook.f469f825.js";import{u as F}from"./store_habits.b81099c1.js";import{u as I}from"./store_successes.8258fdd2.js";import{u as R}from"./store_settings.4d1fc436.js";import"./TouchPan.d22b85af.js";import"./selection.13d7029c.js";const z=Q({name:"HabitsPage",setup(){const e=P();let i;return B(()=>{i!==void 0&&(clearTimeout(i),e.loading.hide())}),{showLoading(){e.loading.show({spinner:Y,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your habits... Please wait!",messageColor:"white"}),i=setTimeout(()=>{e.loading.hide(),i=void 0},500)}}},data(){return{changeDateDialog:!1,changeAlertTimeDialog:!1}},beforeMount(){this.settingsStore=R(),this.settingsStore.initialize(),this.habitsStore=F(),this.habitsStore.initialize(),this.successesStore=I(),this.successesStore.initialize(),this.$emit("refresh-header"),this.settingsStore.termsUpToDate()||this.$router.push("terms")},created(){this.showLoading()},computed:{...M(R,["useBigButtons"]),buttonClass(){return this.useBigButtons?"bigBtn":""},habitCardClass(){return e=>this.habitsStore.habitNotCompleted(e)?"habit-card":"habit-card-complete"},formattedDate(){return function(e){const i=new Date(Date.parse(e));let g=D.formatDate(i,this.settingsStore.useDateFormat);return g+=", ",g+=D.formatDate(i,"h:mm A"),g}}},methods:{completeHabit(e){if(this.habitsStore.habitNotCompleted(e)&&!e.ready){e.ready=!0,this.$q.notify("Click again to mark complete!");return}var i=this.getDateWithTime();this.habitsStore.habitNotCompleted(e)?e.habit.length===0?this.$q.notify("Please enter a title for your new habit!"):this.$q.dialog({title:"Confirm",message:'Confirm completion of habit: "'+e.habit+'"',cancel:!0,persistent:!0}).onOk(()=>{e.lastDate==null&&(e.startDate=i,new Date(e.modifiedDate)<=new Date(e.startDate)&&(e.modifiedDate=null)),this.habitsStore.streakExpired(e)&&(e.streak=0),e.lastDate=i,e.timeTieBreaker=this.getTime(),e.streak=e.streak+1;var g=this.habitsStore.habitReward(e.streak);this.$q.notify("Rewarded "+g+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+g,this.settingsStore.totalCoins=this.settingsStore.totalCoins+g,e.total=e.total+1,e.streak>e.longestStreak&&(e.longestStreak=e.streak),this.$q.notify(e.habit+" completed for "+this.getDate()+"!");var h=!1;if((e.streak==3||e.streak==5||e.streak==7||e.streak==14||e.streak==30||e.streak==60)&&(h=!0),h){var p=Object.assign({},e);p.date=this.getDateWithTime(),p.type="habit",this.successesStore.addEntry(p),this.$q.notify("Reached milestone of "+p.streak+" days!")}this.settingsStore.saveCoins(),this.$emit("refresh-header"),this.habitsStore.sortHabits()}):this.$q.notify("Habit already complete until "+e.resetTime+"!")},removeHabit(e){e.habit&&e.habit.length>0?this.$q.dialog({title:"Confirm",message:'Are you sure you want to delete the habit: "'+e.habit+'"?',cancel:!0,persistent:!0}).onOk(()=>{this.habitsStore.removeHabit(e.id),this.$q.notify('Habit deleted: "'+e.habit+'"')}):this.$q.dialog({title:"Confirm",message:"Are you sure you want to delete the unnamed habit?",cancel:!0,persistent:!0}).onOk(()=>{this.habitsStore.removeHabit(e.id),this.$q.notify("Habit deleted")})},hideTutorial(){this.$q.dialog({title:"Acknowledge",message:"Have you read and understood the instructions?",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.tutorialSettings.habitsTutorialHidden=!0,this.settingsStore.saveTutorialSettings()})},getDenseDisplayButtonText(){return this.settingsStore.useDenseModeHabits?"Dense Mode Active":"Dense Mode Disabled"},toggleDenseDisplay(){this.settingsStore.useDenseModeHabits||(this.settingsStore.useDenseModeHabits=!1),this.settingsStore.useDenseModeHabits=!this.settingsStore.useDenseModeHabits,this.settingsStore.saveDenseModeHabitsSetting()},getDate(){const e=Date().toString();return D.formatDate(e,"MMM D, YYYY")},getDateWithTime(){const e=Date().toString();return D.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()},displayAlertTime(e){const i=new Date;return i.setHours(parseInt(e.split(":")[0],10)),i.setMinutes(parseInt(e.split(":")[1],10)),i.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})},closeAlertTimeDialog(e){e.changeAlertTimeDialog=!1,this.habitsStore.saveHabits()},showResetTime(e){return e.resetTime?e.resetTime:"12:00 AM"},closeResetTimeDialog(e){e.changeResetTimeDialog=!1,this.habitsStore.saveHabits()}}}),O={class:"flex justify-center q-mb-lg"},j=a("p",{class:"motivational"},null,-1),W={key:0,class:"tutorial"},G=a("p",null,` Click "New Habit" to create a new Habit. You can click the Habit Reset Time (which defaults to 12:00 AM) to adjust it. This is the time the habit resets and can be completed again. If an entire cycle goes without completion, then the habit will lose its streak and have to be restarted. Larger streaks grant higher coin rewards, so stay consistent for maximum benefits! Don't worry if you lose a habit streak though! It is normal to take breaks! The purpose is to get valuable stats on your work habits. `,-1),J={class:"habit-data"},K={class:"text-h6"},X={class:"reset-data"},Z=["onClick"],x={class:"row items-center justify-center"},ee=a("br",null,null,-1),te={key:0},se=a("span",{class:"bold"},"Current Streak:",-1),oe=a("span",{class:"bold"},"Longest Streak:",-1),ae=a("span",{class:"bold"},"Total completions:",-1),ie=a("br",null,null,-1),le=a("span",{class:"bold"},"Started:",-1),ne={key:0},re=a("span",{class:"bold"},"Habit Modified:",-1),de=a("span",{class:"bold"},"Last completed:",-1),ue={class:"text-black",style:{"margin-bottom":"-2em"}},ce=a("br",null,null,-1),me={key:1,class:"alert-data"},ge={key:0,"q-pa-lg":"",class:"text-black"},he=a("br",null,null,-1),fe={class:"row items-center justify-center"},pe={key:0},ke={key:0},De={key:1},ye={key:1},Ce={key:2,class:"alert-data"},Se={class:"habit-data"},ve={class:"text-h6"},be=["onClick"],_e={key:0},Te={key:0},He={key:1},we={key:1};function $e(e,i,g,h,p,Ve){return l(),k(L,{"items-center":"",class:"habits-page"},{default:n(()=>[a("div",O,[o(U,null,{default:n(()=>[o(d,{class:u([e.buttonClass,"top-button"]),onClick:i[0]||(i[0]=t=>this.habitsStore.addHabit())},{default:n(()=>[c("New Habit")]),_:1},8,["class"]),o(d,{class:u([e.buttonClass,"top-button"]),style:{"margin-left":"1rem","margin-right":"0.5rem"},onClick:i[1]||(i[1]=t=>this.toggleDenseDisplay())},{default:n(()=>[c(m(this.getDenseDisplayButtonText()),1)]),_:1},8,["class"])]),_:1})]),j,this.settingsStore.tutorialSettings.habitsTutorialHidden?f("",!0):(l(),r("div",W,[G,o(d,{flat:"",dense:"",glossy:"",icon:"done",color:"check",onClick:i[2]||(i[2]=t=>this.hideTutorial())})])),this.settingsStore.useDenseModeHabits?(l(),k(V,{key:2},{default:n(()=>[(l(!0),r(C,null,y(this.habitsStore.habits,t=>S((l(),k($,{key:t},{default:n(()=>[o(v,{class:u([e.habitCardClass(t),"text-white full-width"])},{default:n(()=>[a("div",Se,[a("div",ve,[o(b,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":s=>t.habit=s,onFocus:s=>{t.preEditHabit=t.habit,this.$q.notify("Habit will be saved once you enter a title")},onBlur:s=>{t.habit=t.habit.trim(),t.preEditHabit!==t.habit?(t.preEditHabit=null,t.modifiedDate=this.getDateWithTime(),this.habitsStore.saveHabits()):t.preEditHabit=null}},null,8,["modelValue","onUpdate:modelValue","onFocus","onBlur"])]),a("p",{class:u({dashed:!t.lastDate}),style:{padding:"1em 0.5em"},onClick:s=>{t.lastDate||(t.changeResetTimeDialog=!0)}}," Habit Resets at "+m(e.showResetTime(t)),11,be)]),o(T,null,{default:n(()=>[this.habitsStore.habitNotCompleted(t)?(l(),r("div",_e,[t.ready?(l(),r("div",Te,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"done_all",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])):(l(),r("div",He,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"check",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])]))])):(l(),r("div",we,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"assignment_turned_in",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])),o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"delete",color:"black",glossy:"",onClick:s=>e.removeHabit(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)),[[H]])),128))]),_:1})):(l(),k(V,{key:1},{default:n(()=>[(l(!0),r(C,null,y(this.habitsStore.habits,t=>S((l(),k($,{key:t},{default:n(()=>[o(v,{class:u([e.habitCardClass(t),"text-white full-width"])},{default:n(()=>[o(q,null,{default:n(()=>[a("div",J,[a("div",K,[o(b,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":s=>t.habit=s,onFocus:s=>{t.preEditHabit=t.habit,this.$q.notify("Habit will be saved once you enter a title")},onBlur:s=>{t.habit=t.habit.trim(),t.preEditHabit!==t.habit?(t.preEditHabit=null,t.modifiedDate=this.getDateWithTime(),this.habitsStore.saveHabits()):t.preEditHabit=null}},null,8,["modelValue","onUpdate:modelValue","onFocus","onBlur"]),a("div",X,[a("p",{class:u({dashed:!t.lastDate}),style:{margin:"0","padding-top":"0.5em","padding-left":"0"},onClick:s=>{t.lastDate||(t.changeResetTimeDialog=!0)}}," Habit Resets at "+m(e.showResetTime(t)),11,Z),o(_,{modelValue:t.changeResetTimeDialog,"onUpdate:modelValue":s=>t.changeResetTimeDialog=s},{default:n(()=>[o(w,{mask:"hh:mm A",modelValue:t.resetTime,"onUpdate:modelValue":[s=>t.resetTime=s,i[3]||(i[3]=s=>this.habitsStore.saveHabits())],onClose:s=>e.closeResetTimeDialog(t)},{default:n(()=>[a("div",x,[o(d,{label:"Close",color:"primary",onClick:s=>e.closeResetTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),ee,t.startDate!=null?(l(),r("div",te,[a("p",null,[se,c(" "+m(t.streak)+" days. ",1)]),a("p",null,[oe,c(" "+m(t.longestStreak)+" days. ",1)]),a("p",null,[ae,c(" "+m(t.total)+" completions. ",1)]),ie,a("p",null,[le,c(" "+m(e.formattedDate(t.startDate)),1)]),t.modifiedDate?(l(),r("p",ne,[re,c(" "+m(e.formattedDate(t.modifiedDate)),1)])):f("",!0),a("p",null,[de,c(" "+m(e.formattedDate(t.lastDate)),1)])])):f("",!0),a("p",ue,[c(" Reward for completion: "),o(E,{"show-value":"",class:"text-light-blue q-ma-md",value:this.habitsStore.habitRewardPercent(t.streak+1),size:"64px",color:"light-blue"},{default:n(()=>[c(m(this.habitsStore.habitReward(t.streak+1)),1),ce,c(" coins ")]),_:2},1032,["value"])]),this.settingsStore.useNotificationBeta?(l(),r("div",me,[t.alertTime?(l(),r("p",ge,[he,c("Alert Time: "+m(e.displayAlertTime(t.alertTime))+" Daily ",1)])):f("",!0),o(_,{modelValue:t.changeAlertTimeDialog,"onUpdate:modelValue":s=>t.changeAlertTimeDialog=s},{default:n(()=>[o(w,{modelValue:t.alertTime,"onUpdate:modelValue":[s=>t.alertTime=s,i[4]||(i[4]=s=>this.habitsStore.saveHabits())],onClose:s=>e.closeAlertTimeDialog(t)},{default:n(()=>[a("div",fe,[o(d,{"float-left":"",label:"Disable",onClick:s=>this.habitsStore.disableNotification(t),color:"primary",flat:""},null,8,["onClick"]),o(d,{label:"Close",color:"primary",onClick:s=>e.closeAlertTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):f("",!0)])]),_:2},1024),o(N,{dark:""}),o(T,null,{default:n(()=>[this.habitsStore.habitNotCompleted(t)?(l(),r("div",pe,[t.ready?(l(),r("div",ke,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"done_all",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])):(l(),r("div",De,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"check",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])]))])):(l(),r("div",ye,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"assignment_turned_in",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])),this.settingsStore.useNotificationBeta?(l(),r("div",Ce,[o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"notifications",color:"red",glossy:"",onClick:s=>t.changeAlertTimeDialog=!0},null,8,["class","onClick"])])):f("",!0),o(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"delete",color:"black",glossy:"",onClick:s=>e.removeHabit(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)),[[H]])),128))]),_:1}))]),_:1})}var ze=A(z,[["render",$e]]);export{ze as default};
