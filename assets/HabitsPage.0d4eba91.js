import{_ as D,M as T,ai as b,N as i,O as k,P as n,Y as o,R as l,X as d,aj as u,T as c,W as r,Z as $,$ as w,y as V,ak as H,al as R,am as S,U as f,an as C,S as h,ao as A,ap as Q,aq as q}from"./index.e157ab8e.js";import{Q as B}from"./QBtnGroup.53240083.js";import{Q as y}from"./QTime.497482fc.js";import{a as U,Q as N}from"./QItem.20db34a6.js";import{Q as M}from"./QPage.39266aac.js";import{d as _}from"./date.942fa460.js";import{u as Y}from"./store_habits.39fa5417.js";import{u as j}from"./store_successes.32132764.js";import{u as v}from"./store_settings.53546f04.js";import"./TouchPan.9ed9ed8c.js";import"./selection.0a7863d9.js";const L=T({name:"HabitsPage",setup(){return{}},data(){return{changeDateDialog:!1,changeAlertTimeDialog:!1}},beforeMount(){this.habitsStore=Y(),this.habitsStore.initialize(),this.successesStore=j(),this.successesStore.initialize(),this.settingsStore=v(),this.settingsStore.initialize(),this.$emit("refresh-header"),this.habitsStore.habits.forEach(e=>{e.startDate==null&&e.lastDate!=null&&(e.startDate=e.date)})},computed:{...b(v,["useBigButtons"]),buttonClass(){return this.useBigButtons?"bigBtn":""},habitCardClass(e){return a=>this.habitsStore.habitNotCompleted(a)?"habit-card":"habit-card-complete"}},methods:{completeHabit(e){if(!e.ready){e.ready=!0,this.$q.notify("Click again to mark complete!");return}var a=this.getDateWithTime();this.habitsStore.habitNotCompleted(e)?e.habit.length===0?this.$q.notify("Please enter a title for your new habit!"):this.$q.dialog({title:"Confirm",message:'Confirm completion of habit: "'+e.habit+'"',cancel:!0,persistent:!0}).onOk(()=>{e.lastDate==null&&(e.startDate=a),this.habitsStore.streakExpired(e)&&(e.streak=0),e.lastDate=a,e.dateTieBreaker=this.getTime(),e.streak=e.streak+1;var p=this.habitsStore.habitReward(e.streak);this.$q.notify("Rewarded "+p+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+p,this.settingsStore.totalCoins=this.settingsStore.totalCoins+p,e.total=e.total+1,e.streak>e.longestStreak&&(e.longestStreak=e.streak),this.$q.notify(e.habit+" completed for "+this.getDate()+"!");var m=!1;if((e.streak==3||e.streak==5||e.streak==7||e.streak==14||e.streak==30||e.streak==60)&&(m=!0),m){var g=Object.assign({},e);g.date=this.getDateWithTime(),g.type="habit",this.successesStore.addEntry(g),this.$q.notify("Reached milestone of "+g.streak+" days!")}this.settingsStore.saveCoins(),this.$emit("refresh-header"),this.habitsStore.sortHabits()}):this.$q.notify("Habit already complete until "+e.resetTime+"!")},removeHabit(e){e.habit?this.$q.dialog({title:"Confirm",message:'Are you sure you want to delete the habit: "'+e.habit+'"?',cancel:!0,persistent:!0}).onOk(()=>{this.habitsStore.removeHabit(e),this.$q.notify('Habit deleted: "'+e.habit+'"')}):this.habitsStore.removeHabit(e)},getDate(){const e=Date().toString();return _.formatDate(e,"MMM D, YYYY")},getDateWithTime(){const e=Date().toString();return _.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()},displayAlertTime(e){const a=new Date;return a.setHours(parseInt(e.split(":")[0],10)),a.setMinutes(parseInt(e.split(":")[1],10)),a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})},closeAlertTimeDialog(e){e.changeAlertTimeDialog=!1,this.habitsStore.saveHabits()},showResetTime(e){return e.resetTime?e.resetTime:"12:00 AM"},closeResetTimeDialog(e){e.changeResetTimeDialog=!1,this.habitsStore.saveHabits()}}}),P={class:"flex justify-center q-mb-lg"},z=o("div",{class:"flex justify-center q-mb-lg"},[o("h5",{dense:""}," Complete your habits every day for increasing rewards as your streak continues! ")],-1),E={class:"habit-data"},I={class:"text-h6"},O={key:0},W={key:1},x={class:"reset-data"},F=["onClick"],G={class:"row items-center justify-center"},X=o("br",null,null,-1),Z={key:0},J=o("span",{class:"bold"},"Current Streak:",-1),K=o("span",{class:"bold"},"Longest Streak:",-1),ee=o("span",{class:"bold"},"Total completions:",-1),te=o("br",null,null,-1),se=o("span",{class:"bold"},"Started:",-1),oe=o("span",{class:"bold"},"Last completed:",-1),ae=o("br",null,null,-1),le=o("span",{class:"bold"},"Reward for next completion:",-1),ie={key:1,class:"alert-data"},ne={key:0,"q-pa-lg":"",class:"text-black"},re=o("br",null,null,-1),de={class:"row items-center justify-center"},me={key:0},ue={key:0},ce={key:1},fe={key:1},pe={key:2,class:"alert-data"};function ge(e,a,p,m,g,he){return i(),k(M,{"items-center":"",class:"habits-page"},{default:n(()=>[o("div",P,[l(B,null,{default:n(()=>[l(d,{class:u([e.buttonClass,"top-button"]),onClick:a[0]||(a[0]=t=>this.habitsStore.addHabit())},{default:n(()=>[c("New Habit")]),_:1},8,["class"])]),_:1})]),z,l(U,null,{default:n(()=>[(i(!0),r(w,null,$(this.habitsStore.habits,t=>V((i(),k(N,{key:t},{default:n(()=>[l(H,{class:u([e.habitCardClass(t),"text-white full-width"])},{default:n(()=>[l(R,null,{default:n(()=>[o("div",E,[o("div",I,[t.lastDate!=null?(i(),r("div",O,[l(S,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":s=>t.habit=s,readonly:""},null,8,["modelValue","onUpdate:modelValue"])])):(i(),r("div",W,[l(S,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:t.habit,"onUpdate:modelValue":[s=>t.habit=s,a[1]||(a[1]=s=>this.habitsStore.saveHabits())],onFocus:a[2]||(a[2]=s=>this.$q.notify("Habit will be saved once you enter a title"))},null,8,["modelValue","onUpdate:modelValue"])])),o("div",x,[o("p",{class:u({dashed:!t.lastDate}),onClick:s=>{t.lastDate||(t.changeResetTimeDialog=!0)}}," Habit Resets at "+f(e.showResetTime(t)),11,F),l(C,{modelValue:t.changeResetTimeDialog,"onUpdate:modelValue":s=>t.changeResetTimeDialog=s},{default:n(()=>[l(y,{mask:"hh:mm A",modelValue:t.resetTime,"onUpdate:modelValue":[s=>t.resetTime=s,a[3]||(a[3]=s=>this.habitsStore.saveHabits())],onClose:s=>e.closeResetTimeDialog(t)},{default:n(()=>[o("div",G,[l(d,{label:"Close",color:"primary",onClick:s=>e.closeResetTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),X,t.startDate!=null?(i(),r("div",Z,[o("p",null,[J,c(" "+f(t.streak)+" days. ",1)]),o("p",null,[K,c(" "+f(t.longestStreak)+" days. ",1)]),o("p",null,[ee,c(" "+f(t.total)+" completions. ",1)]),te,o("p",null,[se,c(" "+f(t.startDate),1)]),o("p",null,[oe,c(" "+f(t.lastDate),1)]),ae])):h("",!0),o("p",null,[le,c(" "+f(this.habitsStore.habitReward(t.streak+1))+" coins. ",1)]),this.settingsStore.useNotificationBeta?(i(),r("div",ie,[t.alertTime?(i(),r("p",ne,[re,c("Alert Time: "+f(e.displayAlertTime(t.alertTime))+" Daily ",1)])):h("",!0),l(C,{modelValue:t.changeAlertTimeDialog,"onUpdate:modelValue":s=>t.changeAlertTimeDialog=s},{default:n(()=>[l(y,{modelValue:t.alertTime,"onUpdate:modelValue":[s=>t.alertTime=s,a[4]||(a[4]=s=>this.habitsStore.saveHabits())],onClose:s=>e.closeAlertTimeDialog(t)},{default:n(()=>[o("div",de,[l(d,{"float-left":"",label:"Disable",onClick:s=>this.habitsStore.disableNotification(t),color:"primary",flat:""},null,8,["onClick"]),l(d,{label:"Close",color:"primary",onClick:s=>e.closeAlertTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):h("",!0)])]),_:2},1024),l(A,{dark:""}),l(Q,null,{default:n(()=>[this.habitsStore.habitNotCompleted(t)?(i(),r("div",me,[t.ready?(i(),r("div",ue,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"done_all",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])):(i(),r("div",ce,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"check",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])]))])):(i(),r("div",fe,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"assignment_turned_in",color:"green",glossy:"",onClick:s=>e.completeHabit(t)},null,8,["class","onClick"])])),this.settingsStore.useNotificationBeta?(i(),r("div",pe,[l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"notifications",color:"red",glossy:"",onClick:s=>t.changeAlertTimeDialog=!0},null,8,["class","onClick"])])):h("",!0),l(d,{class:u(e.buttonClass),flat:"",dense:"",icon:"delete",color:"black",glossy:"",onClick:s=>e.removeHabit(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)),[[q]])),128))]),_:1})]),_:1})}var Ve=D(L,[["render",ge]]);export{Ve as default};
