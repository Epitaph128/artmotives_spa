import{aa as u}from"./index.3abaa4ed.js";const c="coins",l="coins_total",o="useNotificationBeta",i="useBigButtons",a="useDenseModeGoals",n="useDenseModeHabits",g="goalsSortStyle",r="exportAIInstructions",S="tutorial_settings",I=u("settings",{state:()=>({coins:0,totalCoins:0,useNotificationBeta:!1,useBigButtons:!0,useDenseModeGoals:!0,useDenseModeHabits:!0,goalsSortStyle:"Date",exportAIInstructions:!0,tutorialSettings:{}}),actions:{initialize(){this.coins=this.getCoins(),this.totalCoins=this.getTotalCoins(),this.useNotificationBeta=this.getNotificationBeta(),this.useBigButtons=this.getBigButtons(),this.useDenseModeGoals=this.getDenseModeGoals(),this.useDenseModeHabits=this.getDenseModeHabits(),this.goalsSortStyle=this.getGoalsSortStyle(),this.exportAIInstructions=this.getExportAIInstructions(),this.tutorialSettings=this.getTutorialSettings()},getCoins(){const t=localStorage.getItem(c);if(t){let e=0;try{e=JSON.parse(t)}catch(s){return console.error(s)}this.coins=e}else this.coins=0;return this.coins},getTotalCoins(){const t=localStorage.getItem(l);if(t){var e=0;try{e=JSON.parse(t)}catch(s){return console.error(s)}this.totalCoins=e}else this.totalCoins=0;return this.totalCoins},getTutorialSettings(){const t=localStorage.getItem(S);if(t){var e={};try{e=JSON.parse(t)}catch(s){return console.error(s)}this.tutorialSettings=e}else this.tutorialSettings={};return this.tutorialSettings},saveCoins(){localStorage.setItem(c,this.coins),localStorage.setItem(l,this.totalCoins)},resetCoins(){this.coins=0,this.saveCoins()},getNotificationBeta(){return localStorage.getItem(o)=="1"},getBigButtons(){return localStorage.getItem(i)!="0"},getDenseModeGoals(){return localStorage.getItem(a)=="1"},getDenseModeHabits(){return localStorage.getItem(n)=="1"},toggleGoalsSortStyle(){this.goalsSortStyle=="Date"?this.goalsSortStyle="Difficulty \u2197":this.goalsSortStyle=="Difficulty \u2197"?this.goalsSortStyle="Difficulty \u2198":this.goalsSortStyle="Date",localStorage.setItem(g,this.goalsSortStyle)},getGoalsSortStyle(){const t=localStorage.getItem(g);return t||"Date"},getExportAIInstructions(){return localStorage.getItem(r)=="1"},saveGoalsSortStyle(){localStorage.setItem(g,this.goalsSortStyle)},saveNotificationBetaSetting(){this.useNotificationBeta?localStorage.setItem(o,"1"):localStorage.setItem(o,"0")},saveBigButtonsSetting(){this.useBigButtons?localStorage.setItem(i,"1"):localStorage.setItem(i,"0")},saveDenseModeGoalsSetting(){this.useDenseModeGoals?localStorage.setItem(a,"1"):localStorage.setItem(a,"0")},saveDenseModeHabitsSetting(){this.useDenseModeHabits?localStorage.setItem(n,"1"):localStorage.setItem(n,"0")},saveExportAIInstructions(){this.exportAIInstructions?localStorage.setItem(r,"1"):localStorage.setItem(r,"0")},saveTutorialSettings(){this.tutorialSettings&&localStorage.setItem(S,JSON.stringify(this.tutorialSettings))},eraseSettings(){this.resetCoins(),this.totalCoins=0,localStorage.setItem(l,this.totalCoins),localStorage.setItem(o,"0"),localStorage.setItem(i,"1"),localStorage.setItem(a,"0"),localStorage.setItem(n,"0"),localStorage.setItem(r,"1"),localStorage.setItem(S,JSON.stringify({})),this.useBigButtons=!0,this.tutorialSettings={}}}});export{I as u};
