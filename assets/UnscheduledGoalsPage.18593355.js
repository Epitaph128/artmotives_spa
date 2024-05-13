import{_ as D,F as T,o as _,ak as Q,G as d,H as G,I as i,R as a,J as o,P as n,al as u,L as f,M as p,O as m,S as b,T as k,t as C,am as B,an as E,ao as U,aC as g,aD as z,ap as $,K as V,aq as q,ar as P,as as M}from"./index.18356047.js";import{Q as I}from"./QBtnGroup.4a47740b.js";import{Q as R}from"./QDate.33ad5670.js";import{Q as A}from"./QTime.75a6da89.js";import{Q as Y}from"./QItem.37f64582.js";import{Q as x}from"./QList.b32b7405.js";import{Q as F}from"./QPage.89d9b736.js";import{u as N,C as L}from"./store_goals.6a97996b.js";import{u as O,Q as j}from"./QSpinnerFacebook.8be5a89d.js";import{d as y}from"./date.bd7568f5.js";import{u as H}from"./store_successes.c39e5903.js";import{u as w}from"./store_settings.a8a61be5.js";import"./TouchPan.16ddcace.js";import"./selection.f80a0604.js";const K=T({name:"UnscheduledGoalsPage",data(){return{changeAlertTimeDialog:!1,coinsStorageKey:"coins",enableNotificationsBeta:!1,days:[{label:"Sunday",value:0},{label:"Monday",value:1},{label:"Tuesday",value:2},{label:"Wednesday",value:3},{label:"Thursday",value:4},{label:"Friday",value:5},{label:"Saturday",value:6}]}},created(){this.showLoading()},beforeMount(){this.settingsStore=w(),this.settingsStore.initialize(),this.goalsStore=N(),this.goalsStore.initialize(),this.successesStore=H(),this.successesStore.initialize(),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()),this.$emit("refresh-header"),this.settingsStore.termsUpToDate()||this.$router.push("terms")},setup(){const e=O();let t;return _(()=>{t!==void 0&&(clearTimeout(t),e.loading.hide())}),{showLoading(){e.loading.show({spinner:j,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your unscheduled goals... Please wait!",messageColor:"white"}),t=setTimeout(()=>{e.loading.hide(),t=void 0},500)}}},computed:{...Q(w,["useBigButtons","goalsSortStyle"]),buttonClass(){return this.useBigButtons?"bigBtn":""},sortStyle(){return this.goalsSortStyle},buttonText(){return`Sort: ${this.sortStyle}`}},methods:{saveUnscheduledGoals(){this.$q.notify("Goals saved!"),this.goalsStore.saveUnscheduledGoals()},viewGoals(){this.$router.push("goals")},completeGoal(e){if(e.goal.length<1){this.$q.notify("Enter a title first!");return}if(e.stepsEnabled){for(var t=!0,r=0;r<e.stepsSize;r++)e.steps[r].value||(t=!1);if(!t){this.$q.notify("Complete all steps first!");return}}this.$q.dialog({title:"Confirm",message:'Confirm completion of goal: "'+e.goal+'"',cancel:!0,persistent:!0}).onOk(()=>{var S=this.goalsStore.goalReward(e);this.$q.notify("Rewarded "+S+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+S,this.settingsStore.totalCoins=this.settingsStore.totalCoins+S;var c=Object.assign({},e);c.alertTime=null,c.date=this.getDateWithTime(),c.timeTieBreaker=this.getTime(),c.type="goal",this.successesStore.addEntry(c),this.$q.notify('Goal complete! "'+c.goal+'"'),this.settingsStore.saveCoins(),this.goalsStore.removeUnscheduledGoal(e.id),this.$emit("refresh-header")})},toggleSteps(e){e.steps?(e.stepsEnabled=!e.stepsEnabled,e.stepsEnabled&&e.stepsSize==0&&this.addSteps(e)):(e.stepsEnabled=!0,e.steps=[],e.stepsSize=0,this.addSteps(e)),this.saveUnscheduledGoals()},toggleGoalsSortStyle(){this.settingsStore.toggleGoalsSortStyle(),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle())},findMatchingInput(){return new Promise(e=>{this.$nextTick(()=>{this.$nextTick(()=>{for(const t in this.$refs.stepDescRef){const r=this.$refs.stepDescRef[t];if(r.modelValue==this.selectedStep.label){e(r);return}}e(null)})})})},handleStepInput(e){if(e.key){if(e.key=="Enter")e.preventDefault(),e.stopPropagation(),this.addSteps(this.selectedGoal,this.selectedStepIndex+1),this.findMatchingInput().then(t=>{t&&(this.selectedStep.label="",t.focus(),this.saveUnscheduledGoals())}),this.saveUnscheduledGoals();else if(e.key=="End")e.preventDefault(),e.stopPropagation(),this.$q.dialog({title:"Confirm",message:"Confirm deletion of step.",cancel:!0,persistent:!0}).onOk(()=>{this.selectedGoal.steps.splice(this.selectedStepIndex,1),this.selectedGoal.stepsSize--,this.selectedGoal.stepsSize==0&&(this.selectedGoal.stepsEnabled=!1,this.selectedStep=null),this.saveUnscheduledGoals()});else if(e.key=="Backspace"&&this.selectedStep.label==""){if(e.preventDefault(),e.stopPropagation(),this.selectedGoal.stepsSize==0){this.selectedGoal.stepsEnabled=!1,this.selectedStep=null;return}this.selectedStepIndex+1<this.selectedGoal.steps.length&&(this.selectedStep=this.selectedGoal.steps[this.selectedStepIndex+1]),this.selectedGoal.steps.splice(this.selectedStepIndex,1),this.selectedGoal.stepsSize--,this.selectedStep=this.selectedGoal.steps[this.selectedStepIndex],this.selectedGoal.stepsSize==0&&(this.selectedGoal.stepsEnabled=!1,this.selectedStep=null),this.saveUnscheduledGoals()}}},addSteps(e,t){e.stepsSize<20&&(e.stepsSize++,t?(e.steps.splice(t,0,{label:"",value:!1}),this.selectedStep=e.steps[t],this.selectedStep.label="   "):(e.steps.push({label:"",value:!1}),this.selectedStep=e.steps[e.stepsSize-1]),this.saveUnscheduledGoals())},removeSteps(e){e.steps.splice(e.stepsSize-1,1),e.stepsSize--,e.stepsSize==0&&(e.stepsEnabled=!1,this.selectedStep=null),this.saveUnscheduledGoals()},removeUnscheduledGoal(e){var t='Are you sure you want to delete the goal: "'+e.goal+'"?';e.goal.length<1&&(t="Are you sure you want to delete the unnamed goal?");let r=!1;this.$q.dialog({title:"Confirm",message:t,cancel:!0,persistent:!0}).onOk(()=>{e.goal.length<1?this.$q.notify("Goal deleted"):this.$q.notify('Goal deleted: "'+e.goal+'"'),this.goalsStore.removeUnscheduledGoal(e.id),r=!0}),r||this.$q.notify("Failed to delete goal. Please try again.")},getDate(){const e=Date().toString();return y.formatDate(e,"MMM D, YYYY")},getDateWithTime(){const e=Date().toString();return y.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()},displayAlertTime(e){const t=new Date;return t.setHours(parseInt(e.split(":")[0],10)),t.setMinutes(parseInt(e.split(":")[1],10)),t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})},openDatePicker(e){e.changeDateDialog=!0},closeDatePicker(e){e.date=y.formatDate(e.date,"MMM D, YYYY"),e.changeDateDialog=!1,this.$q.notify("Goal added to schedule!"),this.goalsStore.addGoal(e),this.goalsStore.removeUnscheduledGoal(e.id),this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle())},cancelDatePicker(e){e.changeDateDialog=!1,this.goalsStore.saveUnscheduledGoals()}}}),W={class:"q-gutter-md row justify-center"},J={class:"goal-data"},X={class:"text-h6"},Z={class:"difficulty-select"},ee={key:0},te=a("br",null,null,-1),se={class:"steps_checkboxes full-width"},le={class:"stepTable full-width"},oe={scope:"row",class:"firstColumn"},ae={class:"steps-complete"},ie=a("br",null,null,-1),ne=a("br",null,null,-1),re=a("br",null,null,-1),de={key:1},ue={"q-pa-lg":"",class:"text-black"},ce={class:"row items-center justify-end"},he=a("span",{style:{"margin-left":"0.5em"}},"Schedule Goal",-1),pe={key:2,class:"alert-data"},me={key:0,"q-pa-lg":"",class:"text-black"},fe=a("br",null,null,-1),Se={class:"row items-center justify-center"};function ge(e,t,r,S,c,ye){return d(),G(F,{"items-center":"",class:"goal-page"},{default:i(()=>[a("div",W,[o(I,{"no-wrap":""},{default:i(()=>[o(n,{class:u([e.buttonClass,"top-button"]),onClick:t[0]||(t[0]=s=>this.goalsStore.addUnscheduledGoal(null,this.settingsStore.getGoalsSortStyle())),style:{"margin-left":"0.5rem"}},{default:i(()=>[f("New Goal")]),_:1},8,["class"]),o(n,{class:u([e.buttonClass,"top-button"]),onClick:t[1]||(t[1]=s=>this.toggleGoalsSortStyle()),style:{"margin-left":"1rem","margin-right":"0.5rem"}},{default:i(()=>[f(p(e.buttonText),1)]),_:1},8,["class"]),o(n,{class:u([e.buttonClass,"top-button"]),onClick:t[2]||(t[2]=s=>this.viewGoals()),style:{"margin-left":"0.5rem","margin-right":"0.5rem"}},{default:i(()=>[f("Scheduled")]),_:1},8,["class"])]),_:1})]),o(x,null,{default:i(()=>[(d(!0),m(k,null,b(this.goalsStore.unscheduledGoals,s=>C((d(),G(Y,{key:s},{default:i(()=>[o(B,{class:"goal-card text-white full-width"},{default:i(()=>[o(E,null,{default:i(()=>[a("div",J,[a("div",X,[o(U,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Goal Title",modelValue:s.goal,"onUpdate:modelValue":[l=>s.goal=l,t[3]||(t[3]=l=>this.goalsStore.saveUnscheduledGoals())],onFocus:t[4]||(t[4]=l=>this.$q.notify("Goal will be saved once you enter a title")),onBlur:l=>{s.goal=s.goal.trim(),this.goalsStore.saveUnscheduledGoals()}},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),a("div",Z,[o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[5]||(t[5]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Easy",label:"Easy",color:"green"},null,8,["modelValue","onUpdate:modelValue"]),o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[6]||(t[6]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Moderate",label:"Moderate",color:"orange"},null,8,["modelValue","onUpdate:modelValue"]),o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[7]||(t[7]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Hard",label:"Hard",color:"red"},null,8,["modelValue","onUpdate:modelValue"]),o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[8]||(t[8]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Epic",label:"Epic",color:"black"},null,8,["modelValue","onUpdate:modelValue"])]),s.stepsEnabled?(d(),m("div",ee,[a("p",null,[f(" Base Reward: "+p(this.goalsStore.baseReward(s))+" coins.",1),te]),a("div",se,[a("table",le,[a("thead",null,[(d(!0),m(k,null,b(s.steps,(l,v)=>(d(),m("tr",{key:v},[a("th",oe,[o(z,{modelValue:l.value,"onUpdate:modelValue":[h=>l.value=h,t[9]||(t[9]=h=>this.saveUnscheduledGoals())]},null,8,["modelValue","onUpdate:modelValue"])]),a("th",null,[o(U,{ref_for:!0,ref:"stepDescRef",multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width","input-class":"text-left",label:"Step Description",modelValue:l.label,"onUpdate:modelValue":[h=>l.label=h,t[10]||(t[10]=h=>this.goalsStore.saveUnscheduledGoals())],onKeydown:e.handleStepInput,onFocus:h=>{this.selectedGoal=s,this.selectedStep=l,this.selectedStepIndex=v},onBlur:h=>{l.label=l.label.trim(),this.goalsStore.saveUnscheduledGoals()}},null,8,["modelValue","onUpdate:modelValue","onKeydown","onFocus","onBlur"])])]))),128))])]),o(n,{flat:"",dense:"",glossy:"",icon:"add",color:"green",onClick:l=>e.addSteps(s)},null,8,["onClick"]),o(n,{flat:"",dense:"",glossy:"",icon:"remove",color:"red",onClick:l=>e.removeSteps(s)},null,8,["onClick"]),a("span",ae,p(this.goalsStore.stepsComplete(s))+" / "+p(s.steps.length)+" Steps Complete",1)]),ie,f(" Total Reward: "+p(this.goalsStore.goalReward(s))+" coins.",1),ne,re])):(d(),m("div",de,[a("p",ue," Reward for completion: "+p(this.goalsStore.goalReward(s))+" coins. ",1)])),a("div",{class:u(["text-goal",{overdue:this.goalsStore.goalExpired(s)}])},[o(n,{flat:"",glossy:"",color:"green",icon:"event",class:u(e.buttonClass),onClick:l=>e.openDatePicker(s)},{default:i(()=>[o($,{modelValue:s.changeDateDialog,"onUpdate:modelValue":l=>s.changeDateDialog=l},{default:i(()=>[o(R,{modelValue:s.date,"onUpdate:modelValue":[l=>s.date=l,l=>e.closeDatePicker(s)]},{default:i(()=>[a("div",ce,[C(o(n,{onClick:l=>e.cancelDatePicker(s),label:"Cancel",color:"primary",flat:""},null,8,["onClick"]),[[L]])])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"]),he]),_:2},1032,["class","onClick"])],2),this.settingsStore.useNotificationBeta?(d(),m("div",pe,[s.alertTime?(d(),m("p",me,[fe,f("Alert Time: "+p(e.displayAlertTime(s.alertTime))+" day of goal. ",1)])):V("",!0),o($,{modelValue:s.changeAlertTimeDialog,"onUpdate:modelValue":l=>s.changeAlertTimeDialog=l},{default:i(()=>[o(A,{modelValue:s.alertTime,"onUpdate:modelValue":[l=>s.alertTime=l,t[11]||(t[11]=l=>this.saveUnscheduledGoals())],onClose:l=>e.closeAlertTimeDialog(s)},{default:i(()=>[a("div",Se,[o(n,{"float-left":"",label:"Disable",onClick:l=>this.goalsStore.disableNotification(s),color:"primary",flat:""},null,8,["onClick"]),o(n,{label:"Close",color:"primary",onClick:l=>e.closeAlertTimeDialog(s),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):V("",!0)])]),_:2},1024),o(q,{dark:""}),o(P,null,{default:i(()=>[o(n,{class:u(e.buttonClass),flat:"",glossy:"",icon:"check",color:"green",onClick:l=>e.completeGoal(s)},null,8,["class","onClick"]),o(n,{class:u(e.buttonClass),flat:"",glossy:"",icon:"123",color:"yellow",onClick:l=>e.toggleSteps(s),style:{"margin-left":"0"}},null,8,["class","onClick"]),o(n,{class:u(e.buttonClass),flat:"",glossy:"",icon:"delete",color:"black",onClick:l=>this.removeUnscheduledGoal(s),style:{"margin-left":"0"}},null,8,["class","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[M]])),128))]),_:1})]),_:1})}var Ee=D(K,[["render",ge]]);export{Ee as default};
