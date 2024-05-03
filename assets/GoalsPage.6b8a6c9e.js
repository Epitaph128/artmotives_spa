import{_ as P,F as x,o as Y,ak as I,G as i,H as v,I as n,R as a,J as o,P as d,al as u,L as p,M as f,O as r,K as g,S as V,T as C,t as w,am as $,an as F,ao as b,aC as S,aD as U,ap as T,aq as N,ar as _,as as M}from"./index.932670c2.js";import{Q}from"./QBtnGroup.2b0a8702.js";import{Q as q}from"./QCircularProgress.697b2596.js";import{Q as E}from"./QSelect.dc419f30.js";import{Q as H}from"./QDate.52b29264.js";import{Q as L}from"./QTime.c6ac9ba4.js";import{d as D,Q as z}from"./QItem.c434e113.js";import{Q as B}from"./QList.fdbbf5bc.js";import{Q as O}from"./QPage.f1b91efe.js";import{u as j,C as R}from"./store_goals.d8e47141.js";import{u as K,Q as W}from"./QSpinnerFacebook.3395adb9.js";import{u as J}from"./store_successes.9b04ff6c.js";import{u as A}from"./store_settings.8cf37e64.js";import"./QItemSection.4c25930c.js";import"./QItemLabel.0e058b2b.js";import"./QMenu.beace42d.js";import"./selection.ae45dc58.js";import"./TouchPan.d2f3d540.js";const X=x({name:"GoalsPage",data(){return{changeAlertTimeDialog:!1,coinsStorageKey:"coins",enableNotificationsBeta:!1,days:[{label:"Sunday",value:0},{label:"Monday",value:1},{label:"Tuesday",value:2},{label:"Wednesday",value:3},{label:"Thursday",value:4},{label:"Friday",value:5},{label:"Saturday",value:6}]}},beforeMount(){this.goalsStore=j(),this.goalsStore.initialize(),this.successesStore=J(),this.successesStore.initialize(),this.settingsStore=A(),this.settingsStore.initialize(),this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()),this.$emit("refresh-header")},created(){this.showLoading()},setup(){const e=K();let l;return Y(()=>{l!==void 0&&(clearTimeout(l),e.loading.hide())}),{showLoading(){e.loading.show({spinner:W,spinnerColor:"white",spinnerSize:140,backgroundColor:"black",message:"Loading your goals... Please wait!",messageColor:"white"}),l=setTimeout(()=>{e.loading.hide(),l=void 0},500)}}},computed:{...I(A,["useBigButtons","goalsSortStyle"]),buttonClass(){return this.useBigButtons?"bigBtn":""},sortStyle(){return this.goalsSortStyle},buttonText(){return`Sort: ${this.sortStyle}`},formattedDate(){return function(e){const l=new Date(Date.parse(e));return D.formatDate(l,this.settingsStore.useDateFormat)}}},methods:{getDenseDisplayButtonText(){return this.settingsStore.useDenseModeGoals?"Dense Mode Active":"Dense Mode Disabled"},getMaskDate(e){if(this.settingsStore.useDateFormat==="MMM D, YYYY")return"";const l=new Date(Date.parse(e));return D.formatDate(l,this.settingsStore.useDateFormat)},viewUnscheduledGoals(){this.$router.push("unscheduledGoals")},unscheduleGoal(e){this.$q.notify("Goal unscheduled!"),e.changeDateDialog=!1,e.date=this.getDate(),this.goalsStore.addUnscheduledGoal(e),this.goalsStore.removeGoal(e.id),this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()),this.goalsStore.sortUnscheduledGoals(this.settingsStore.getGoalsSortStyle())},saveGoals(){this.$q.notify("Goals saved!"),this.goalsStore.saveGoals()},completeGoal(e){if(!e.ready){e.ready=!0,this.$q.notify("Click again to mark complete!");return}if(e.goal.length<1){this.$q.notify("Enter a title first!");return}if(e.stepsEnabled){for(var l=!0,m=0;m<e.stepsSize;m++)e.steps[m].value||(l=!1);if(!l){this.$q.notify("Complete all steps first!");return}}this.$q.dialog({title:"Confirm",message:'Confirm completion of goal: "'+e.goal+'"',cancel:!0,persistent:!0}).onOk(()=>{var G=this.goalsStore.goalReward(e);this.$q.notify("Rewarded "+G+" coins for completion!"),this.settingsStore.coins=this.settingsStore.coins+G,this.settingsStore.totalCoins=this.settingsStore.totalCoins+G;var y=Object.assign({},e);if(y.alertTime=null,y.date=this.getDateWithTime(),y.timeTieBreaker=this.getTime(),y.type="goal",this.successesStore.addEntry(y),this.$q.notify('Goal complete! "'+y.goal+'"'),this.settingsStore.saveCoins(),Array.isArray(e.repeatDays)&&e.repeatDays.length>0){var h=Object.assign({},e);if(h.date=this.goalsStore.nextDate(e),h.nextDate=this.goalsStore.nextDate(h),h.stepsEnabled)for(var t=0;t<h.stepsSize;t++)h.steps[t].value=!1;this.goalsStore.addGoal(h,this.settingsStore.getGoalsSortStyle()),this.$q.notify("Repeat goal "+h.goal+" set for "+h.date)}this.goalsStore.removeGoal(e.id),this.$emit("refresh-header")})},toggleSteps(e){e.steps?(e.stepsEnabled=!e.stepsEnabled,e.stepsEnabled&&e.stepsSize==0&&this.addSteps(e)):(e.stepsEnabled=!0,e.steps=[],e.stepsSize=0,this.addSteps(e)),this.saveGoals()},toggleGoalsSortStyle(){this.settingsStore.toggleGoalsSortStyle(),this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle())},findMatchingInput(){return new Promise(e=>{this.$nextTick(()=>{this.$nextTick(()=>{for(const l in this.$refs.stepDescRef){const m=this.$refs.stepDescRef[l];if(m.modelValue==this.selectedStep.label){e(m);return}}e(null)})})})},handleStepInput(e){if(e.key){if(e.key=="Enter")e.preventDefault(),e.stopPropagation(),this.addSteps(this.selectedGoal,this.selectedStepIndex+1),this.findMatchingInput().then(l=>{l&&(this.selectedStep.label="",l.focus(),this.saveGoals())}),this.saveGoals();else if(e.key=="End")e.preventDefault(),e.stopPropagation(),this.$q.dialog({title:"Confirm",message:"Confirm deletion of step.",cancel:!0,persistent:!0}).onOk(()=>{this.selectedGoal.steps.splice(this.selectedStepIndex,1),this.selectedGoal.stepsSize--,this.selectedGoal.stepsSize==0&&(this.selectedGoal.stepsEnabled=!1,this.selectedStep=null),this.saveGoals()});else if(e.key=="Backspace"&&this.selectedStep.label==""){if(e.preventDefault(),e.stopPropagation(),this.selectedGoal.stepsSize==0){this.selectedGoal.stepsEnabled=!1,this.selectedStep=null;return}this.selectedStepIndex+1<this.selectedGoal.steps.length&&(this.selectedStep=this.selectedGoal.steps[this.selectedStepIndex+1]),this.selectedGoal.steps.splice(this.selectedStepIndex,1),this.selectedGoal.stepsSize--,this.selectedStep=this.selectedGoal.steps[this.selectedStepIndex],this.selectedGoal.stepsSize==0&&(this.selectedGoal.stepsEnabled=!1,this.selectedStep=null),this.saveGoals()}}},addSteps(e,l){e.stepsSize<20&&(e.stepsSize++,l?(e.steps.splice(l,0,{label:"",value:!1}),this.selectedStep=e.steps[l],this.selectedStep.label="   "):(e.steps.push({label:"",value:!1}),this.selectedStep=e.steps[e.stepsSize-1]),this.saveGoals())},removeSteps(e){e.steps.splice(e.stepsSize-1,1),e.stepsSize--,e.stepsSize==0&&(e.stepsEnabled=!1,this.selectedStep=null),this.saveGoals()},removeGoal(e){var l='Are you sure you want to delete the goal: "'+e.goal+'"?';e.goal.length<1&&(l="Are you sure you want to delete the unnamed goal?"),this.$q.dialog({title:"Confirm",message:l,cancel:!0,persistent:!0}).onOk(()=>{e.goal.length<1?this.$q.notify("Goal deleted"):this.$q.notify('Goal deleted: "'+e.goal+'"'),this.goalsStore.removeGoal(e.id)})},hideTutorial(){this.$q.dialog({title:"Acknowledge",message:"Have you read and understood the instructions?",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.tutorialSettings.goalsTutorialHidden=!0,this.settingsStore.saveTutorialSettings()})},toggleDenseDisplay(){this.settingsStore.useDenseModeGoals||(this.settingsStore.useDenseModeGoals=!1),this.settingsStore.useDenseModeGoals=!this.settingsStore.useDenseModeGoals,this.settingsStore.saveDenseModeGoalsSetting()},getDate(){const e=Date().toString();return D.formatDate(e,"MMM D, YYYY")},getDateWithTime(){const e=Date().toString();return D.formatDate(e,"MMM D, YYYY, hh:mm A")},getTime(){return new Date().getTime()},displayAlertTime(e){const l=new Date;return l.setHours(parseInt(e.split(":")[0],10)),l.setMinutes(parseInt(e.split(":")[1],10)),l.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})},openDatePicker(e){e.changeDateDialog=!0},closeDatePicker(e){e.date=D.formatDate(e.date,"MMM D, YYYY"),e.changeDateDialog=!1,this.$q.notify("Goals saved!"),this.settingsStore.getGoalsSortStyle()=="Date"&&this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle())},closeAlertTimeDialog(e){e.changeAlertTimeDialog=!1,this.saveGoals()}}}),Z={class:"q-gutter-md row justify-center"},ee={class:"q-gutter-md row justify-center",style:{"margin-top":"-2em","margin-bottom":"-1em"}},te={key:0,class:"tutorial"},se=a("p",null,' Click "New Goal" to create a new goal as part of the schedule. You can click "Unscheduled" to create goals without a desired end date. Clicking the sort button will toggle between sorting by date (soonest to complete first), or difficulty from easy to epic or epic to easy (depending on the direction of the arrow). ',-1),le={class:"goal-data"},oe={class:"text-h6"},ae={class:"difficulty-select"},ie={key:0},ne=a("br",null,null,-1),re={class:"steps_checkboxes full-width"},de={class:"stepTable full-width"},ue={scope:"row",class:"firstColumn"},ce={class:"text-black",style:{margin:"0"}},pe=a("br",null,null,-1),me={key:1},he={class:"text-black",style:{margin:"0"}},fe=a("br",null,null,-1),Se={key:0},ye=a("br",null,null,-1),ge={class:"row items-center justify-end"},ve={key:2,class:"alert-data"},ke={key:0,"q-pa-lg":"",class:"text-black"},be=a("br",null,null,-1),De={class:"row items-center justify-center"},Ge={key:0},Ve={key:1},Ce={key:2,class:"alert-data"},we={key:3},$e={class:"goal-data"},Ue={class:"text-h6"},Te={class:"difficulty-select q-pa-sm"},_e={key:0},Me={class:"steps_checkboxes full-width"},Qe={class:"stepTable full-width"},qe={scope:"row",class:"firstColumn"},Ee={key:1,class:"q-pa-sm"},ze={key:0},Be=a("br",null,null,-1),Re={style:{"margin-bottom":"0"}},Ae={key:0},Pe={key:1},xe={key:2,class:"alert-data"},Ye={key:3};function Ie(e,l,m,G,y,h){return i(),v(O,{"items-center":"",class:"goal-page"},{default:n(()=>[a("div",Z,[o(Q,{"no-wrap":""},{default:n(()=>[o(d,{class:u([e.buttonClass,"top-button"]),onClick:l[0]||(l[0]=t=>this.goalsStore.addGoal(null,this.settingsStore.getGoalsSortStyle())),style:{"margin-left":"0.5rem"}},{default:n(()=>[p("New Goal")]),_:1},8,["class"]),o(d,{class:u([e.buttonClass,"top-button"]),onClick:l[1]||(l[1]=t=>this.toggleGoalsSortStyle()),style:{"margin-left":"1rem","margin-right":"0.5rem"}},{default:n(()=>[p(f(e.buttonText),1)]),_:1},8,["class"]),o(d,{class:u([e.buttonClass,"top-button"]),onClick:l[2]||(l[2]=t=>this.viewUnscheduledGoals()),style:{"margin-left":"0.5rem","margin-right":"0.5rem"}},{default:n(()=>[p("Unscheduled")]),_:1},8,["class"])]),_:1})]),a("div",ee,[o(Q,{"no-wrap":""},{default:n(()=>[o(d,{class:u([e.buttonClass,"top-button"]),onClick:l[3]||(l[3]=t=>this.toggleDenseDisplay())},{default:n(()=>[p(f(this.getDenseDisplayButtonText()),1)]),_:1},8,["class"])]),_:1})]),this.settingsStore.tutorialSettings.goalsTutorialHidden?g("",!0):(i(),r("div",te,[se,o(d,{flat:"",dense:"",glossy:"",icon:"done",color:"check",onClick:l[4]||(l[4]=t=>this.hideTutorial())})])),this.settingsStore.useDenseModeGoals?(i(),v(B,{key:2},{default:n(()=>[(i(!0),r(C,null,V(this.goalsStore.goals,t=>w((i(),v(z,{key:t},{default:n(()=>[o($,{class:"goal-card text-white full-width"},{default:n(()=>[a("div",$e,[a("div",Ue,[o(b,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Goal Title",modelValue:t.goal,"onUpdate:modelValue":[s=>t.goal=s,l[15]||(l[15]=s=>this.goalsStore.saveGoals())],onFocus:l[16]||(l[16]=s=>this.$q.notify("Goal will be saved once you enter a title"))},null,8,["modelValue","onUpdate:modelValue"])]),a("div",Te,[o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[17]||(l[17]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Easy",label:"Easy",color:"green"},null,8,["modelValue","onUpdate:modelValue"]),o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[18]||(l[18]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Moderate",label:"Moderate",color:"orange"},null,8,["modelValue","onUpdate:modelValue"]),o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[19]||(l[19]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Hard",label:"Hard",color:"red"},null,8,["modelValue","onUpdate:modelValue"]),o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[20]||(l[20]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Epic",label:"Epic",color:"black"},null,8,["modelValue","onUpdate:modelValue"])]),t.stepsEnabled?(i(),r("div",_e,[a("div",Me,[a("table",Qe,[a("thead",null,[(i(!0),r(C,null,V(t.steps,(s,k)=>(i(),r("tr",{key:k},[a("th",qe,[o(U,{modelValue:s.value,"onUpdate:modelValue":[c=>s.value=c,l[21]||(l[21]=c=>this.saveGoals())]},null,8,["modelValue","onUpdate:modelValue"])]),a("th",null,[o(b,{ref_for:!0,ref:"stepDescRef",multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,dense:"",standout:"bg-primary text-black",class:"full-width","input-class":"text-left",modelValue:s.label,"onUpdate:modelValue":[c=>s.label=c,l[22]||(l[22]=c=>this.goalsStore.saveGoals())],onKeydown:e.handleStepInput,onFocus:c=>{this.selectedGoal=t,this.selectedStep=s,this.selectedStepIndex=k}},null,8,["modelValue","onUpdate:modelValue","onKeydown","onFocus"])])]))),128))])])])])):g("",!0),t.repeatDays&&t.repeatDays.length>0?(i(),r("div",Ee,[o(E,{modelValue:t.repeatDays,"onUpdate:modelValue":[s=>t.repeatDays=s,l[23]||(l[23]=s=>this.saveGoals())],multiple:"","multiple-sort":"",options:e.days,label:"Repeats on these days","display-value":this.goalsStore.displayRepeatDays(t.repeatDays)},null,8,["modelValue","onUpdate:modelValue","options","display-value"]),t.repeatDays&&t.repeatDays.length>0?(i(),r("div",ze,[Be,a("p",Re," Will occur again on "+f(this.formattedDate(this.goalsStore.nextDate(t))),1)])):g("",!0)])):g("",!0)]),o(_,null,{default:n(()=>[t.ready?(i(),r("div",Ae,[o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"done_all",color:"green",onClick:s=>e.completeGoal(t)},null,8,["class","onClick"])])):(i(),r("div",Pe,[o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"check",color:"green",onClick:s=>e.completeGoal(t)},null,8,["class","onClick"])])),o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"123",color:"yellow",onClick:s=>e.toggleSteps(t),style:{"margin-left":"0"}},null,8,["class","onClick"]),this.settingsStore.useNotificationBeta?(i(),r("div",xe,[o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"notifications",color:"red",onClick:s=>t.changeAlertTimeDialog=!0},null,8,["class","onClick"])])):(i(),r("div",Ye)),o(d,{class:u(e.buttonClass),style:{padding:"0","min-width":"40px"},flat:"",glossy:"",icon:"delete",color:"black",onClick:s=>e.removeGoal(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[M]])),128))]),_:1})):(i(),v(B,{key:1},{default:n(()=>[(i(!0),r(C,null,V(this.goalsStore.goals,t=>w((i(),v(z,{key:t},{default:n(()=>[o($,{class:"goal-card text-white full-width"},{default:n(()=>[o(F,null,{default:n(()=>[a("div",le,[a("div",oe,[o(b,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width text-h6","input-class":"text-left",label:"Goal Title",modelValue:t.goal,"onUpdate:modelValue":[s=>t.goal=s,l[5]||(l[5]=s=>this.goalsStore.saveGoals())],onFocus:l[6]||(l[6]=s=>this.$q.notify("Goal will be saved once you enter a title"))},null,8,["modelValue","onUpdate:modelValue"])]),a("div",ae,[o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[7]||(l[7]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Easy",label:"Easy",color:"green"},null,8,["modelValue","onUpdate:modelValue"]),o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[8]||(l[8]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Moderate",label:"Moderate",color:"orange"},null,8,["modelValue","onUpdate:modelValue"]),o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[9]||(l[9]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Hard",label:"Hard",color:"red"},null,8,["modelValue","onUpdate:modelValue"]),o(S,{"keep-color":"",modelValue:t.difficulty,"onUpdate:modelValue":[s=>t.difficulty=s,l[10]||(l[10]=s=>this.goalsStore.sortGoals(this.settingsStore.getGoalsSortStyle()))],val:"Epic",label:"Epic",color:"black"},null,8,["modelValue","onUpdate:modelValue"])]),t.stepsEnabled?(i(),r("div",ie,[a("p",null,[p(" Base Reward: "+f(this.goalsStore.baseReward(t))+" coins.",1),ne]),a("div",re,[a("table",de,[a("thead",null,[(i(!0),r(C,null,V(t.steps,(s,k)=>(i(),r("tr",{key:k},[a("th",ue,[o(U,{modelValue:s.value,"onUpdate:modelValue":[c=>s.value=c,l[11]||(l[11]=c=>this.saveGoals())]},null,8,["modelValue","onUpdate:modelValue"])]),a("th",null,[o(b,{ref_for:!0,ref:"stepDescRef",multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,standout:"bg-primary text-black",class:"full-width","input-class":"text-left",modelValue:s.label,"onUpdate:modelValue":[c=>s.label=c,l[12]||(l[12]=c=>this.goalsStore.saveGoals())],onKeydown:e.handleStepInput,onFocus:c=>{this.selectedGoal=t,this.selectedStep=s,this.selectedStepIndex=k}},null,8,["modelValue","onUpdate:modelValue","onKeydown","onFocus"])])]))),128))])]),o(d,{flat:"",dense:"",glossy:"",icon:"add",color:"green",onClick:s=>e.addSteps(t)},null,8,["onClick"]),o(d,{flat:"",dense:"",glossy:"",icon:"remove",color:"red",onClick:s=>e.removeSteps(t)},null,8,["onClick"])]),a("p",ce,[p(" Reward for completion: "),o(q,{"show-value":"",class:"text-light-blue q-ma-md shrinkP",value:this.goalsStore.goalReward(t)/1e3*100,size:"64px",color:"light-blue"},{default:n(()=>[p(f(this.goalsStore.goalReward(t)),1),pe,p(" coins ")]),_:2},1032,["value"])])])):(i(),r("div",me,[a("p",he,[p(" Reward for completion: "),o(q,{"show-value":"",class:"text-light-blue q-ma-md shrinkP",value:this.goalsStore.goalReward(t)/1e3*100,size:"64px",color:"light-blue"},{default:n(()=>[p(f(this.goalsStore.goalReward(t)),1),fe,p(" coins ")]),_:2},1032,["value"])])])),a("div",{class:u(["text-goal",{overdue:this.goalsStore.goalExpired(t)}])},[o(E,{modelValue:t.repeatDays,"onUpdate:modelValue":[s=>t.repeatDays=s,l[13]||(l[13]=s=>this.saveGoals())],multiple:"","multiple-sort":"",options:e.days,label:"Repeats on these days","display-value":this.goalsStore.displayRepeatDays(t.repeatDays)},null,8,["modelValue","onUpdate:modelValue","options","display-value"]),t.repeatDays&&t.repeatDays.length>0?(i(),r("div",Se,[ye,a("p",null," Will occur again on "+f(this.formattedDate(this.goalsStore.nextDate(t))),1)])):g("",!0),(i(),v(b,{key:t.date,"no-outline":"",style:{"padding-right":"1e","min-width":"35%"},"input-class":"text-left text-bold",label:"Complete By",modelValue:t.date,"onUpdate:modelValue":s=>t.date=s,value:e.formattedDate(t.date),mask:this.getMaskDate(t.date),onClick:s=>e.openDatePicker(t)},{default:n(()=>[o(T,{modelValue:t.changeDateDialog,"onUpdate:modelValue":s=>t.changeDateDialog=s},{default:n(()=>[o(H,{modelValue:t.date,"onUpdate:modelValue":[s=>t.date=s,s=>e.closeDatePicker(t)]},{default:n(()=>[a("div",ge,[w(o(d,{onClick:s=>e.unscheduleGoal(t),label:"Unschedule",color:"primary",flat:""},null,8,["onClick"]),[[R]]),w(o(d,{onClick:s=>e.closeDatePicker(t),label:"Close",color:"primary",flat:""},null,8,["onClick"]),[[R]])])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","value","mask","onClick"]))],2),this.settingsStore.useNotificationBeta?(i(),r("div",ve,[t.alertTime?(i(),r("p",ke,[be,p("Alert Time: "+f(e.displayAlertTime(t.alertTime))+" day of goal. ",1)])):g("",!0),o(T,{modelValue:t.changeAlertTimeDialog,"onUpdate:modelValue":s=>t.changeAlertTimeDialog=s},{default:n(()=>[o(L,{modelValue:t.alertTime,"onUpdate:modelValue":[s=>t.alertTime=s,l[14]||(l[14]=s=>this.saveGoals())],onClose:s=>e.closeAlertTimeDialog(t)},{default:n(()=>[a("div",De,[o(d,{"float-left":"",label:"Disable",onClick:s=>this.goalsStore.disableNotification(t),color:"primary",flat:""},null,8,["onClick"]),o(d,{label:"Close",color:"primary",onClick:s=>e.closeAlertTimeDialog(t),flat:""},null,8,["onClick"])])]),_:2},1032,["modelValue","onUpdate:modelValue","onClose"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])):g("",!0)])]),_:2},1024),o(N,{dark:""}),o(_,null,{default:n(()=>[t.ready?(i(),r("div",Ge,[o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"done_all",color:"green",onClick:s=>e.completeGoal(t)},null,8,["class","onClick"])])):(i(),r("div",Ve,[o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"check",color:"green",onClick:s=>e.completeGoal(t)},null,8,["class","onClick"])])),o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"123",color:"yellow",onClick:s=>e.toggleSteps(t),style:{"margin-left":"0"}},null,8,["class","onClick"]),this.settingsStore.useNotificationBeta?(i(),r("div",Ce,[o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"notifications",color:"red",onClick:s=>t.changeAlertTimeDialog=!0},null,8,["class","onClick"])])):(i(),r("div",we)),o(d,{class:u(e.buttonClass),flat:"",glossy:"",icon:"delete",color:"black",style:{"min-width":"40px"},onClick:s=>e.removeGoal(t)},null,8,["class","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[M]])),128))]),_:1}))]),_:1})}var nt=P(X,[["render",Ie]]);export{nt as default};
