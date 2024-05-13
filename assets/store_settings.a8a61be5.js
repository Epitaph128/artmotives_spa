import{a0 as f}from"./index.18356047.js";const S="accepted_terms_date",I="coins",u="coins_total",o="useNotificationBeta",a="useBigButtons",i="useDenseModeGoals",r="useDenseModeHabits",l="useDateFormatKey",h="goalsSortStyle",n="exportAIInstructions",g="exportNotes",c="exportSuccesses",m="tutorial_settings",D="May 13, 2024, 2:00 AM MST",M=f("settings",{state:()=>({acceptedTermsDate:"",coins:0,totalCoins:0,useNotificationBeta:!1,useBigButtons:!0,useDenseModeGoals:!0,useDenseModeHabits:!0,useDateFormat:"MMM D, YYYY",goalsSortStyle:"Date",exportAIInstructions:!0,exportNotes:!1,exportSuccesses:!1,tutorialSettings:{}}),actions:{initialize(){this.acceptedTermsDate=this.getAcceptedTermsDate(),this.coins=this.getCoins(),this.totalCoins=this.getTotalCoins(),this.useNotificationBeta=this.getNotificationBeta(),this.useNotificationBeta=!1,this.useBigButtons=this.getBigButtons(),this.useDenseModeGoals=this.getDenseModeGoals(),this.useDenseModeHabits=this.getDenseModeHabits(),this.useDateFormat=this.getDateFormat(),this.goalsSortStyle=this.getGoalsSortStyle(),this.exportAIInstructions=this.getExportAIInstructions(),this.exportNotes=this.getExportNotes(),this.exportSuccesses=this.getExportSuccesses(),this.tutorialSettings=this.getTutorialSettings()},termsUpToDate(){return!(this.acceptedTermsDate===""||new Date(this.acceptedTermsDate)<new Date(D))},getAcceptedTermsDate(){const t=localStorage.getItem(S);return t||""},getCoins(){const t=localStorage.getItem(I);if(t){let e=0;try{e=JSON.parse(t)}catch(s){return console.error(s)}this.coins=e}else this.coins=0;return this.coins},getTotalCoins(){const t=localStorage.getItem(u);if(t){var e=0;try{e=JSON.parse(t)}catch(s){return console.error(s)}this.totalCoins=e}else this.totalCoins=0;return this.totalCoins},getTutorialSettings(){const t=localStorage.getItem(m);if(t){var e={};try{e=JSON.parse(t)}catch(s){return console.error(s)}this.tutorialSettings=e}else this.tutorialSettings={};return this.tutorialSettings},getDateFormat(){const t=localStorage.getItem(l);return t||"MMM D, YYYY"},saveCoins(){localStorage.setItem(I,this.coins),localStorage.setItem(u,this.totalCoins)},resetCoins(){this.coins=0,this.saveCoins()},getNotificationBeta(){return localStorage.getItem(o)=="1"},getBigButtons(){return localStorage.getItem(a)!="0"},getDenseModeGoals(){return localStorage.getItem(i)=="1"},getDenseModeHabits(){return localStorage.getItem(r)=="1"},toggleGoalsSortStyle(){this.goalsSortStyle=="Date"?this.goalsSortStyle="Difficulty \u2197":this.goalsSortStyle=="Difficulty \u2197"?this.goalsSortStyle="Difficulty \u2198":this.goalsSortStyle="Date",localStorage.setItem(h,this.goalsSortStyle)},getGoalsSortStyle(){const t=localStorage.getItem(h);return t||"Date"},getExportAIInstructions(){return localStorage.getItem(n)=="1"},getExportNotes(){return localStorage.getItem(g)=="1"},getExportSuccesses(){return localStorage.getItem(c)=="1"},saveAcceptedTermsDate(){localStorage.setItem(S,this.acceptedTermsDate)},saveGoalsSortStyle(){localStorage.setItem(h,this.goalsSortStyle)},saveNotificationBetaSetting(){this.useNotificationBeta?localStorage.setItem(o,"1"):localStorage.setItem(o,"0")},saveBigButtonsSetting(){this.useBigButtons?localStorage.setItem(a,"1"):localStorage.setItem(a,"0")},saveDenseModeGoalsSetting(){this.useDenseModeGoals?localStorage.setItem(i,"1"):localStorage.setItem(i,"0")},saveDenseModeHabitsSetting(){this.useDenseModeHabits?localStorage.setItem(r,"1"):localStorage.setItem(r,"0")},saveDateFormatSetting(){this.useDateFormat?localStorage.setItem(l,this.useDateFormat):localStorage.setItem(l,"MMM D, YYYY")},saveExportAIInstructions(){this.exportAIInstructions?localStorage.setItem(n,"1"):localStorage.setItem(n,"0")},saveExportNotes(){this.exportNotes?localStorage.setItem(g,"1"):localStorage.setItem(g,"0")},saveExportSuccesses(){this.exportSuccesses?localStorage.setItem(c,"1"):localStorage.setItem(c,"0")},saveTutorialSettings(){this.tutorialSettings&&localStorage.setItem(m,JSON.stringify(this.tutorialSettings))},eraseSettings(){this.resetCoins(),localStorage.setItem(S,""),localStorage.setItem(u,this.totalCoins),localStorage.setItem(o,"0"),localStorage.setItem(a,"1"),localStorage.setItem(i,"0"),localStorage.setItem(r,"0"),localStorage.setItem(n,"1"),localStorage.setItem(g,"0"),localStorage.setItem(c,"0"),localStorage.setItem(m,JSON.stringify({})),localStorage.setItem(l,"MMM D, YYYY"),this.acceptedTermsDate="",this.totalCoins=0,this.useBigButtons=!0,this.useNotificationBeta=!1,this.useDenseModeGoals=!1,this.useDenseModeHabits=!1,this.exportAIInstructions=!0,this.exportNotesKey=!1,this.exportSuccesses=!1,this.tutorialSettings={},this.useDateFormat="MMM D, YYYY"}}});export{M as u};
