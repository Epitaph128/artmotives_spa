import{_ as Q,M as A,d as M,ak as U,N as i,O as p,P as r,Y as a,R as l,X as d,al as u,T as c,U as m,W as n,S as k,Z as C,$ as v,y as S,am as b,an as q,ao as y,ap as D,aq as B,ar as _,as as T}from"./index.3abaa4ed.js";import{Q as N}from"./QBtnGroup.d65fb16d.js";import{Q as w}from"./QTime.a930fdae.js";import{Q as Y}from"./QCircularProgress.4ee72ac8.js";import{d as H,Q as $}from"./QItem.8947d8dd.js";import{Q as V}from"./QList.b6ef6eb5.js";import{Q as L}from"./QPage.665eaf37.js";import{u as P,Q as x}from"./QSpinnerFacebook.0996806e.js";import{u as z}from"./store_habits.9b66390e.js";import{u as j}from"./store_successes.ae122433.js";import{u as R}from"./store_settings.692ce5e9.js";import"./TouchPan.33ed2dcd.js";import"./selection.6a9442a8.js";const I=A({name:"HabitsPage",setup(){const e=P();let o;return M(()=>{o!==void 0&&(clearTimeout(o),e.loading.hide())}),{showLoading(){e.loading.show({spinner:x,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your habits... Please wait!",messageColor:"white"}),o=setTimeout(()=>{e.loading.hide(),o=void 0},500)}}},data(){return{changeDateDialog:!1,changeAlertTimeDialog:!1}},beforeMount(){this.habitsStore=z(),this.habitsStore.initialize(),this.successesStore=j(),this.successesStore.initialize(),this.settingsStore=R(),this.settingsStore.initialize(),this.$emit("refresh-header"),this.habitsStore.habits.forEach(e=>{e.startDate==null&&e.lastDate!=null&&(e.startDate=e.date)})},created(){this.showLoading()},computed:{...U(R,["useBigButtons"]),buttonClass(){return this.useBigButtons?"bigBtn":""},habitCardClass(e){return o=>this.habitsStore.habitNotCompleted(o)?"habit-card":"habit-card-complete"}},methods:{completeHabit(e){if(this.habitsStore.habitNotCompleted(e)&&!e.ready){e.ready=!0,this.$q.notify("Click again to mark complete!");return}var o=this.getDateWithTime();this.habitsStore.habitNotCompleted(e)?e.habit.length===0?this.$q.notify("Please enter a title for your new habit!"):this.$q.dialog({title:"Confirm",message:'Confirm completion of habit: "'+e.habit+'"',cancel:!0,persistent:!0}).onOk(()=>{e.lastDate==null&&(e.startDate=o),this.habitsStore.streakExpired(e)&&(e.streak=0),e.lastDate=o,e.dateTieBreaker=this.getTime(),e.streak=e.streak+1;var h=this.habitsStore.habitReward(e.streak);this.$q.notify("Rewarded "+h+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+h,this.settingsStore.totalCoins=this.settingsStore.totalCoins+h,e.total=e.total+1,e.streak>e.longestStreak&&(e.longestStreak=e.streak),this.$q.notify(e.habit+" completed for "+this.getDate()+"!");var g=!1;if((e.streak==3||e.streak==5||e.streak==7||e.streak==14||e.streak==30||e.streak==60)&&(g=!0),g){var f=Object.assign({},e);f.date=this.getDateWithTime(),f.type="habit",this.successesStore.addEntry(f),this.$q.notify("Reached milestone of "+f.streak+" days!")}this.settingsStore.saveCoins(),this.$emit("refresh-header"),this.habitsStore.sortHabits()}):this.$q.notify("Habit already complete until "+e.resetTime+"!")},removeHabit(e){e.habit?this.$q.dialog({title:"Confirm",message:'Are you sure you want to delete the habit: "'+e.habit+'"?',cancel:!0,persistent:!0}).onOk(()=>{this.habitsStore.removeHabit(e),this.$q.notify('Habit deleted: "'+e.habit+'"')}):this.habitsStore.removeHabit(e)},hideTutorial(){this.$q.dialog({title:"Acknowledge",message:"Have you read and understood the instructions?",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.tutorialSettings.habitsTutorialHidden=!0,this.settingsStore.saveTutorialSettings()})},getDenseDisplayButtonText(){return this.settingsStore.useDenseModeHabits?"Dense Mode Active":"Dense Mode Disabled"},toggleDenseDisplay(){this.settingsStore.useDenseModeHabits||(this.settingsStore.useDenseModeHabits=!1),this.settingsStore.useDenseModeHabits=!this.settingsStore.useDenseModeHabits,this.settingsStore.saveDenseModeHabitsSetting()},getDate(){const e=Date().toString();return H.formatDate(e,"MMM D, YYYY")},getDateWithTime(){const e=Date().toString();return H.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()},displayAlertTime(e){const o=new Date;return o.setHours(parseInt(e.split(":")[0],10)),o.setMinutes(parseInt(e.split(":")[1],10)),o.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})},closeAlertTimeDialog(e){e.changeAlertTimeDialog=!1,this.habitsStore.saveHabits()},showResetTime(e){return e.resetTime?e.resetTime:"12:00 AM"},closeResetTimeDialog(e){e.changeResetTimeDialog=!1,this.habitsStore.saveHabits()}}}),O={class:"flex justify-center q-mb-lg"},E={key:0,class:"tutorial"},F=a("p",null,' Click "New Habit" to create a new Habit. You can click the Habit Reset Time (which defaults to 12:00 AM) to adjust it. This is the time the habit resets and can be completed again. If an entire cycle goes without completion, then the habit will lose its streak and have to be restarted. Larger streaks grant higher coin rewards, so stay consistent for maximum benefits! ',-1),W={class:"habit-data"},G={class:"text-h6"},X={key:0},Z={key:1},J={class:"reset-data"},K=["onClick"],ee={class:"row items-center justify-center"},te=a("br",null,null,-1),se={key:0},oe=a("span",{class:"bold"},"Current Streak:",-1),le=a("span",{class:"bold"},"Longest Streak:",-1),ae=a("span",{class:"bold"},"Total completions:",-1),ie=a("br",null,null,-1),ne=a("span",{class:"bold"},"Started:",-1),re=a("span",{class:"bold"},"Last completed:",-1),de={class:"text-black"},ue=a("br",null,null,-1),ce={key:1,class:"alert-data"},me={key:0,"q-pa-lg":"",class:"text-black"},ge=a("br",null,null,-1),he={class:"row items-center justify-center"},fe={key:0},pe={key:0},ke={key:1},ye={key:1},Ce={key:2,class:"alert-data"},ve={class:"habit-data"},Se={class:"text-h6"},be={key:0},De={key:1},_e=["onClick"],Te={key:0},we={key:0},He={key:1},$e={key:1};function Ve(e,o,h,g,f,Re){return i(),p(L,{"items-center":"",class:"habits-page"},{default:r(()=>[a("div",O,[l(N,null,{default:r(()=>[l(d,{class:u([e.buttonClass,"top-button"]),onClick:o[0]||(o[0]=t=>this.habitsStore.addHabit())},{default:r(()=>[c("New Habit")]),_:1},8,["class"]),l(d,{class:u([e.buttonClass,"top-button"]),style:{"margin-left":"1rem","margin-right":"0.5rem"},onClick:o[1]||(o[1]=t=>this.toggleDenseDisplay())},{default:r(()=>[c(m(this.getDenseDisplayButtonText()),1)]),_:1},8,["class"])]),_:1})]),this.settingsStore.tutorialSettings.habitsTutorialHidden?k("",!0):(i(),n("div",E,[F,l(d,{flat:"",dense:"",glossy:"",icon:"done",color:"check",onClick:o[2]||(o[2]=t=>this.hideTutorial())})])),this.settingsStore.useDenseModeHabits?(i(),p(V,{key:2},{default:r(()=>[(i(!0),n(v,null,C(this.habitsStore.habits,t=>S((i(),p($,{key:t},{default:r(()=>[l(b,{class:u([e.habitCardClass(t),"text-white full-width"])},{default:r(()=>[a("div",ve,[a("div",Se,[t.lastDate!=null?(i(),n("div",be,[l(y,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":s=>t.habit=s,readonly:""},null,8,["modelValue","onUpdate:modelValue"])])):(i(),n("div",De,[l(y,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":[s=>t.habit=s,o[7]||(o[7]=s=>this.habitsStore.saveHabits())],onFocus:o[8]||(o[8]=s=>this.$q.notify("Habit will be saved once you enter a title"))},null,8,["modelValue","onUpdate:modelValue"])]))]),a("p",{class:u({dashed:!t.lastDate}),style:{padding:"1em 0.5em"},onClick:s=>{t.lastDate||(t.changeResetTimeDialog=!0)}}," Habit Resets at "+m(e.showResetTime(t)),11,_e)]),l(_,null,{default:r(()=>[this.habitsStore.habitNotCompleted(t)?(i(),n("div",Te,[t.ready?(i(),n("div",we,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"done_all",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])):(i(),n("div",He,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"check",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])]))])):(i(),n("div",$e,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"assignment_turned_in",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])),l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"delete",color:"black",glossy:"",onClick:s=>e.removeHabit(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)),[[T]])),128))]),_:1})):(i(),p(V,{key:1},{default:r(()=>[(i(!0),n(v,null,C(this.habitsStore.habits,t=>S((i(),p($,{key:t},{default:r(()=>[l(b,{class:u([e.habitCardClass(t),"text-white full-width"])},{default:r(()=>[l(q,null,{default:r(()=>[a("div",W,[a("div",G,[t.lastDate!=null?(i(),n("div",X,[l(y,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":s=>t.habit=s,readonly:""},null,8,["modelValue","onUpdate:modelValue"])])):(i(),n("div",Z,[l(y,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":[s=>t.habit=s,o[3]||(o[3]=s=>this.habitsStore.saveHabits())],onFocus:o[4]||(o[4]=s=>this.$q.notify("Habit will be saved once you enter a title"))},null,8,["modelValue","onUpdate:modelValue"])])),a("div",J,[a("p",{class:u({dashed:!t.lastDate}),onClick:s=>{t.lastDate||(t.changeResetTimeDialog=!0)}}," Habit Resets at "+m(e.showResetTime(t)),11,K),l(D,{modelValue:t.changeResetTimeDialog,"onUpdate:modelValue":s=>t.changeResetTimeDialog=s},{default:r(()=>[l(w,{mask:"hh:mm A",modelValue:t.resetTime,"onUpdate:modelValue":[s=>t.resetTime=s,o[5]||(o[5]=s=>this.habitsStore.saveHabits())],onClose:s=>e.closeResetTimeDialog(t)},{default:r(()=>[a("div",ee,[l(d,{label:"Close",color:"primary",onClick:s=>e.closeResetTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),te,t.startDate!=null?(i(),n("div",se,[a("p",null,[oe,c(" "+m(t.streak)+" days. ",1)]),a("p",null,[le,c(" "+m(t.longestStreak)+" days. ",1)]),a("p",null,[ae,c(" "+m(t.total)+" completions. ",1)]),ie,a("p",null,[ne,c(" "+m(t.startDate),1)]),a("p",null,[re,c(" "+m(t.lastDate),1)])])):k("",!0),a("p",de,[c(" Reward for completion: "),l(Y,{"show-value":"",class:"text-light-blue q-ma-md",value:this.habitsStore.habitRewardPercent(t.streak+1),size:"64px",color:"light-blue"},{default:r(()=>[c(m(this.habitsStore.habitReward(t.streak+1)),1),ue,c(" coins ")]),_:2},1032,["value"])]),this.settingsStore.useNotificationBeta?(i(),n("div",ce,[t.alertTime?(i(),n("p",me,[ge,c("Alert Time: "+m(e.displayAlertTime(t.alertTime))+" Daily ",1)])):k("",!0),l(D,{modelValue:t.changeAlertTimeDialog,"onUpdate:modelValue":s=>t.changeAlertTimeDialog=s},{default:r(()=>[l(w,{modelValue:t.alertTime,"onUpdate:modelValue":[s=>t.alertTime=s,o[6]||(o[6]=s=>this.habitsStore.saveHabits())],onClose:s=>e.closeAlertTimeDialog(t)},{default:r(()=>[a("div",he,[l(d,{"float-left":"",label:"Disable",onClick:s=>this.habitsStore.disableNotification(t),color:"primary",flat:""},null,8,["onClick"]),l(d,{label:"Close",color:"primary",onClick:s=>e.closeAlertTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):k("",!0)])]),_:2},1024),l(B,{dark:""}),l(_,null,{default:r(()=>[this.habitsStore.habitNotCompleted(t)?(i(),n("div",fe,[t.ready?(i(),n("div",pe,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"done_all",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])):(i(),n("div",ke,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"check",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])]))])):(i(),n("div",ye,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"assignment_turned_in",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])),this.settingsStore.useNotificationBeta?(i(),n("div",Ce,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"notifications",color:"red",glossy:"",onClick:s=>t.changeAlertTimeDialog=!0},null,8,["class","onClick"])])):k("",!0),l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"delete",color:"black",glossy:"",onClick:s=>e.removeHabit(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)),[[T]])),128))]),_:1}))]),_:1})}var Ie=Q(I,[["render",Ve]]);export{Ie as default};
