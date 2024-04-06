import{_ as D,M as T,d as Q,ai as E,N as r,O as b,P as i,Y as a,R as o,X as n,aj as u,T as m,U as f,W as h,Z as G,$ as k,y as C,ak as z,al as _,am as U,aR as g,aS as B,an as V,S as $,ao as M,ap as q,aq as P}from"./index.ace1c050.js";import{u as R,Q as I,a as A}from"./QSpinnerFacebook.295496a6.js";import{Q as Y,C as x}from"./ClosePopup.8abbc9e1.js";import{Q as N}from"./QTime.c7ea8d04.js";import{a as F,Q as L}from"./QItem.2d8fd343.js";import{Q as j}from"./QPage.8854d63e.js";import{d as y}from"./date.a27bdcfa.js";import{u as O}from"./store_goals.7ad09172.js";import{u as W}from"./store_successes.e5f7974d.js";import{u as w}from"./store_settings.bff12325.js";import"./TouchPan.bfbe951a.js";import"./selection.26dc83ed.js";const H=T({name:"IndexPage",data(){return{changeAlertTimeDialog:!1,coinsStorageKey:"coins",enableNotificationsBeta:!1,days:[{label:"Sunday",value:0},{label:"Monday",value:1},{label:"Tuesday",value:2},{label:"Wednesday",value:3},{label:"Thursday",value:4},{label:"Friday",value:5},{label:"Saturday",value:6}]}},created(){this.showLoading()},beforeMount(){this.goalsStore=O(),this.goalsStore.initialize(),this.successesStore=W(),this.successesStore.initialize(),this.settingsStore=w(),this.settingsStore.initialize(),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()),this.$emit("refresh-header")},setup(){const e=R();let t;return Q(()=>{t!==void 0&&(clearTimeout(t),e.loading.hide())}),{showLoading(){e.loading.show({spinner:I,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your unscheduled goals... Please wait!",messageColor:"white"}),t=setTimeout(()=>{e.loading.hide(),t=void 0},500)}}},computed:{...E(w,["useBigButtons","goalsSortStyle"]),buttonClass(){return this.useBigButtons?"bigBtn":""},sortStyle(){return this.goalsSortStyle},buttonText(){return`Sort: ${this.sortStyle}`}},methods:{saveUnscheduledGoals(){this.$q.notify("Goals saved!"),this.goalsStore.saveUnscheduledGoals()},viewGoals(){this.$router.push("goals")},completeGoal(e){if(e.goal.length<1){this.$q.notify("Enter a title first!");return}if(e.stepsEnabled){for(var t=!0,d=0;d<e.stepsSize;d++)e.steps[d].value||(t=!1);if(!t){this.$q.notify("Complete all steps first!");return}}this.$q.dialog({title:"Confirm",message:'Confirm completion of goal: "'+e.goal+'"',cancel:!0,persistent:!0}).onOk(()=>{var S=this.goalsStore.goalReward(e);this.$q.notify("Rewarded "+S+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+S,this.settingsStore.totalCoins=this.settingsStore.totalCoins+S;var c=Object.assign({},e);c.alertTime=null,c.date=this.getDateWithTime(),c.dateTieBreaker=this.getTime(),c.type="goal",this.successesStore.addEntry(c),this.$q.notify('Goal complete! "'+c.goal+'"'),this.settingsStore.saveCoins(),this.goalsStore.removeUnscheduledGoal(e),this.$emit("refresh-header")})},toggleSteps(e){e.steps?(e.stepsEnabled=!e.stepsEnabled,e.stepsEnabled&&e.stepsSize==0&&this.addSteps(e)):(e.stepsEnabled=!0,e.steps=[],e.stepsSize=0,this.addSteps(e)),this.saveUnscheduledGoals()},toggleGoalsSortStyle(){this.settingsStore.toggleGoalsSortStyle(),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle())},findMatchingInput(){return new Promise(e=>{this.$nextTick(()=>{this.$nextTick(()=>{for(const t in this.$refs.stepDescRef){const d=this.$refs.stepDescRef[t];if(d.modelValue==this.selectedStep.label){e(d);return}}e(null)})})})},handleStepInput(e){if(e.key){if(e.key=="Enter")e.preventDefault(),e.stopPropagation(),this.addSteps(this.selectedGoal,this.selectedStepIndex+1),this.findMatchingInput().then(t=>{t&&(this.selectedStep.label="",t.focus(),this.saveUnscheduledGoals())}),this.saveUnscheduledGoals();else if(e.key=="End")e.preventDefault(),e.stopPropagation(),this.$q.dialog({title:"Confirm",message:"Confirm deletion of step.",cancel:!0,persistent:!0}).onOk(()=>{this.selectedGoal.steps.splice(this.selectedStepIndex,1),this.selectedGoal.stepsSize--,this.selectedGoal.stepsSize==0&&(this.selectedGoal.stepsEnabled=!1,this.selectedStep=null),this.saveUnscheduledGoals()});else if(e.key=="Backspace"&&this.selectedStep.label==""){if(e.preventDefault(),e.stopPropagation(),this.selectedGoal.stepsSize==0){this.selectedGoal.stepsEnabled=!1,this.selectedStep=null;return}this.selectedStepIndex+1<this.selectedGoal.steps.length&&(this.selectedStep=this.selectedGoal.steps[this.selectedStepIndex+1]),this.selectedGoal.steps.splice(this.selectedStepIndex,1),this.selectedGoal.stepsSize--,this.selectedStep=this.selectedGoal.steps[this.selectedStepIndex],this.selectedGoal.stepsSize==0&&(this.selectedGoal.stepsEnabled=!1,this.selectedStep=null),this.saveUnscheduledGoals()}}},addSteps(e,t){e.stepsSize<20&&(e.stepsSize++,t?(e.steps.splice(t,0,{label:"",value:!1}),this.selectedStep=e.steps[t],this.selectedStep.label="   "):(e.steps.push({label:"",value:!1}),this.selectedStep=e.steps[e.stepsSize-1]),this.saveUnscheduledGoals())},removeSteps(e){e.steps.splice(e.stepsSize-1,1),e.stepsSize--,e.stepsSize==0&&(e.stepsEnabled=!1,this.selectedStep=null),this.saveUnscheduledGoals()},removeUnscheduledGoal(e){var t='Are you sure you want to delete the goal: "'+e.goal+'"?';e.goal.length<1&&(t="Are you sure you want to delete the unnamed goal?"),this.$q.dialog({title:"Confirm",message:t,cancel:!0,persistent:!0}).onOk(()=>{this.$q.notify('Goal deleted: "'+e.goal+'"'),this.goalsStore.removeUnscheduledGoal(e)})},getDate(){const e=Date().toString();return y.formatDate(e,"MMM D, YYYY")},getDateWithTime(){const e=Date().toString();return y.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()},displayAlertTime(e){const t=new Date;return t.setHours(parseInt(e.split(":")[0],10)),t.setMinutes(parseInt(e.split(":")[1],10)),t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})},openDatePicker(e){e.changeDateDialog=!0},closeDatePicker(e){e.date=y.formatDate(e.date,"MMM D, YYYY"),e.changeDateDialog=!1,this.$q.notify("Goal added to schedule!"),this.goalsStore.addGoal(e),this.goalsStore.removeUnscheduledGoal(e),this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle())},cancelDatePicker(e){e.changeDateDialog=!1,this.goalsStore.saveUnscheduledGoals()}}}),K={class:"q-gutter-md row justify-center"},X={class:"goal-data"},Z={class:"text-h6"},J={class:"difficulty-select"},ee={key:0},te=a("br",null,null,-1),se={class:"steps_checkboxes full-width"},le={class:"stepTable full-width"},oe={scope:"row",class:"firstColumn"},ae=a("br",null,null,-1),ie={key:1},ne={"q-pa-lg":"",class:"text-black"},re={class:"row items-center justify-end"},de=a("span",{style:{"margin-left":"0.5em"}},"Schedule Goal",-1),ue={key:2,class:"alert-data"},ce={key:0,"q-pa-lg":"",class:"text-black"},he=a("br",null,null,-1),pe={class:"row items-center justify-center"};function me(e,t,d,S,c,fe){return r(),b(j,{"items-center":"",class:"goal-page"},{default:i(()=>[a("div",K,[o(A,{"no-wrap":""},{default:i(()=>[o(n,{class:u([e.buttonClass,"top-button"]),onClick:t[0]||(t[0]=s=>this.goalsStore.addUnscheduledGoal(null,this.settingsStore.getGoalsSortStyle())),style:{"margin-left":"0.5rem"}},{default:i(()=>[m("New Goal")]),_:1},8,["class"]),o(n,{class:u([e.buttonClass,"top-button"]),onClick:t[1]||(t[1]=s=>this.toggleGoalsSortStyle()),style:{"margin-left":"1rem","margin-right":"0.5rem"}},{default:i(()=>[m(f(e.buttonText),1)]),_:1},8,["class"]),o(n,{class:u([e.buttonClass,"top-button"]),onClick:t[2]||(t[2]=s=>this.viewGoals()),style:{"margin-left":"0.5rem","margin-right":"0.5rem"}},{default:i(()=>[m("Scheduled")]),_:1},8,["class"])]),_:1})]),o(F,null,{default:i(()=>[(r(!0),h(k,null,G(this.goalsStore.unscheduledGoals,s=>C((r(),b(L,{key:s},{default:i(()=>[o(z,{class:"goal-card text-white full-width"},{default:i(()=>[o(_,null,{default:i(()=>[a("div",X,[a("div",Z,[o(U,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Goal Title",modelValue:s.goal,"onUpdate:modelValue":[l=>s.goal=l,t[3]||(t[3]=l=>this.goalsStore.saveUnscheduledGoals())],onFocus:t[4]||(t[4]=l=>this.$q.notify("Goal will be saved once you enter a title"))},null,8,["modelValue","onUpdate:modelValue"])]),a("div",J,[o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[5]||(t[5]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Easy",label:"Easy",color:"green"},null,8,["modelValue","onUpdate:modelValue"]),o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[6]||(t[6]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Moderate",label:"Moderate",color:"orange"},null,8,["modelValue","onUpdate:modelValue"]),o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[7]||(t[7]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Hard",label:"Hard",color:"red"},null,8,["modelValue","onUpdate:modelValue"]),o(g,{"keep-color":"",modelValue:s.difficulty,"onUpdate:modelValue":[l=>s.difficulty=l,t[8]||(t[8]=l=>this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle()))],val:"Epic",label:"Epic",color:"black"},null,8,["modelValue","onUpdate:modelValue"])]),s.stepsEnabled?(r(),h("div",ee,[a("p",null,[m(" Base Reward: "+f(this.goalsStore.baseReward(s))+" coins.",1),te]),a("div",se,[a("table",le,[a("thead",null,[(r(!0),h(k,null,G(s.steps,(l,v)=>(r(),h("tr",{key:v},[a("th",oe,[o(B,{modelValue:l.value,"onUpdate:modelValue":[p=>l.value=p,t[9]||(t[9]=p=>this.saveUnscheduledGoals())]},null,8,["modelValue","onUpdate:modelValue"])]),a("th",null,[o(U,{ref_for:!0,ref:"stepDescRef",multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width","input-class":"text-left",label:"Step Description",modelValue:l.label,"onUpdate:modelValue":[p=>l.label=p,t[10]||(t[10]=p=>this.goalsStore.saveUnscheduledGoals())],onKeydown:e.handleStepInput,onFocus:p=>{this.selectedGoal=s,this.selectedStep=l,this.selectedStepIndex=v}},null,8,["modelValue","onUpdate:modelValue","onKeydown","onFocus"])])]))),128))])]),o(n,{flat:"",dense:"",glossy:"",icon:"add",color:"green",onClick:l=>e.addSteps(s)},null,8,["onClick"]),o(n,{flat:"",dense:"",glossy:"",icon:"remove",color:"red",onClick:l=>e.removeSteps(s)},null,8,["onClick"])]),m(" Total Reward: "+f(this.goalsStore.goalReward(s))+" coins.",1),ae])):(r(),h("div",ie,[a("p",ne," Reward for completion: "+f(this.goalsStore.goalReward(s))+" coins. ",1)])),a("div",{class:u(["text-goal",{overdue:this.goalsStore.goalExpired(s)}])},[o(n,{flat:"",glossy:"",color:"green",icon:"event",class:u(e.buttonClass),onClick:l=>e.openDatePicker(s)},{default:i(()=>[o(V,{modelValue:s.changeDateDialog,"onUpdate:modelValue":l=>s.changeDateDialog=l},{default:i(()=>[o(Y,{modelValue:s.date,"onUpdate:modelValue":[l=>s.date=l,l=>e.closeDatePicker(s)]},{default:i(()=>[a("div",re,[C(o(n,{onClick:l=>e.cancelDatePicker(s),label:"Cancel",color:"primary",flat:""},null,8,["onClick"]),[[x]])])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"]),de]),_:2},1032,["class","onClick"])],2),this.settingsStore.useNotificationBeta?(r(),h("div",ue,[s.alertTime?(r(),h("p",ce,[he,m("Alert Time: "+f(e.displayAlertTime(s.alertTime))+" day of goal. ",1)])):$("",!0),o(V,{modelValue:s.changeAlertTimeDialog,"onUpdate:modelValue":l=>s.changeAlertTimeDialog=l},{default:i(()=>[o(N,{modelValue:s.alertTime,"onUpdate:modelValue":[l=>s.alertTime=l,t[11]||(t[11]=l=>this.saveUnscheduledGoals())],onClose:l=>e.closeAlertTimeDialog(s)},{default:i(()=>[a("div",pe,[o(n,{"float-left":"",label:"Disable",onClick:l=>this.goalsStore.disableNotification(s),color:"primary",flat:""},null,8,["onClick"]),o(n,{label:"Close",color:"primary",onClick:l=>e.closeAlertTimeDialog(s),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):$("",!0)])]),_:2},1024),o(M,{dark:""}),o(q,null,{default:i(()=>[o(n,{class:u(e.buttonClass),flat:"",glossy:"",icon:"check",color:"green",onClick:l=>e.completeGoal(s)},null,8,["class","onClick"]),o(n,{class:u(e.buttonClass),flat:"",glossy:"",icon:"123",color:"yellow",onClick:l=>e.toggleSteps(s),style:{"margin-left":"0"}},null,8,["class","onClick"]),o(n,{class:u(e.buttonClass),flat:"",glossy:"",icon:"delete",color:"black",onClick:l=>this.removeUnscheduledGoal(s),style:{"margin-left":"0"}},null,8,["class","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[P]])),128))]),_:1})]),_:1})}var De=D(H,[["render",me]]);export{De as default};
