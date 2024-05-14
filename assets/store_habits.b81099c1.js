import{a0 as d}from"./index.2b736ce4.js";const T="store_habits",u="storage_habits_next_id",b=d("habits",{state:()=>({habits:[]}),actions:{initialize(){const e=localStorage.getItem(u);this.nextId=e?JSON.parse(e):0;const t=localStorage.getItem(T);this.habits=t?JSON.parse(t):[],Array.isArray(this.habits)?this.habits.forEach(a=>{a.id||(a.id=this.getNextId())}):this.habits=[];for(var s=0;s<this.habits.length;s++)this.habits[s].lastDate!=null&&this.habits[s].streak!=0&&this.streakExpired(this.habits[s])&&(this.habits[s].streak=0),this.habits[s].timeTieBreaker||(this.habits[s].timeTieBreaker=this.habits[s].dateTieBreaker);this.sortHabits()},getNextId(){return this.nextId++,this.saveNextId(),this.nextId-1},saveNextId(){localStorage.setItem(u,JSON.stringify(this.nextId))},addHabit(){this.sortHabits(),this.habits.unshift({habit:"",id:this.getNextId(),timeTieBreaker:this.getTime(),streak:0,longestStreak:0,total:0}),this.saveHabits()},sortHabits(){this.habits.sort((e,t)=>{if(e.total===0&&t.total===0)return 0;if(e.total===0)return-1;if(t.total===0)return 1;const s=this.habitNotCompleted(e),a=this.habitNotCompleted(t);return s&&a?e.timeTieBreaker-t.timeTieBreaker:s?-1:a?1:e.timeTieBreaker-t.timeTieBreaker}),this.saveHabits()},saveHabits(){for(var e=0;e<this.habits.length;e++)this.habits[e].ready=!1;localStorage.setItem(T,JSON.stringify(this.habits))},habitReward(e){return e<=3?75:e<=5?100:e<=14?125:150},habitRewardPercent(e){return e<=3?25:e<=5?50:e<=14?75:100},removeHabit(e){const t=this.habits.findIndex(s=>s.id===e);this.habits.splice(t,1),this.saveHabits()},eraseHabits(){localStorage.setItem(T,JSON.stringify([])),localStorage.setItem(u,JSON.stringify(0))},disableNotification(e){e.alertTime=null,e.changeAlertTimeDialog=!1,this.saveHabits()},streakExpired(e,t){var s=Date.now();t!=null&&(s=t),e.resetTime||(e.resetTime="12:00 AM");const[a,n]=e.resetTime.split(" "),[m,c]=a.split(":"),o=parseInt(m,10),l=parseInt(c,10);let i=o;n==="PM"&&o!==12?i+=12:n==="AM"&&o===12&&(i=0);const r=new Date(e.timeTieBreaker);t&&(console.log(`

resetHoursAdjusted: `,i),console.log("lastCompletionDate.getHours()",r.getHours()));var h=2;(r.getHours()<i||r.getHours()==i&&r.getMinutes()<l)&&(h=1),t&&console.log("daysLater: "+h);const g=new Date(r.getFullYear(),r.getMonth(),r.getDate()+h,i,l).getTime();return s>=g},getPreviousDay(e){const t=new Date(e);return t.setDate(t.getDate()-1),t.toString()},getTime(){return new Date().getTime()},habitNotCompleted(e,t){if(t==null&&!e.lastDate)return!0;e.resetTime||(e.resetTime="12:00 AM");const s=e.timeTieBreaker,[a,n]=e.resetTime.split(" "),[m,c]=a.split(":"),o=parseInt(m,10),l=parseInt(c,10);var i=new Date;t&&(i=t);let r=o;n==="PM"&&o!==12?r+=12:n==="AM"&&o===12&&(r=0);const h=new Date(i.getFullYear(),i.getMonth(),i.getDate(),r,l).getTime();if(i.getTime()>=h)return s<h;{const g=h-864e5;return s<g}},testStreakExpired(){const e={resetTime:"7:00 AM",timeTieBreaker:new Date(2023,6,1,8).getTime()},t={resetTime:"10:30 PM",timeTieBreaker:new Date(2023,6,2,22).getTime()},s={resetTime:"12:00 PM",timeTieBreaker:new Date(2023,6,3,11,30).getTime()},a=new Date(2023,6,3,6,59,59,999).getTime();console.log("Test Case 1:",this.streakExpired(e,a),"false");const n=new Date(2023,6,3,7).getTime();console.log("Test Case 2:",this.streakExpired(e,n),"true");const m=new Date(2023,6,3,22,29,59,999).getTime();console.log("Test Case 3:",this.streakExpired(t,m),"false");const c=new Date(2023,6,3,22,30).getTime();console.log("Test Case 4:",this.streakExpired(t,c),"true");const o=new Date(2023,6,4,11,59,59,999).getTime();console.log("Test Case 5:",this.streakExpired(s,o),"false");const l=new Date(2023,6,5,12).getTime();console.log("Test Case 6:",this.streakExpired(s,l),"true");const i=new Date(2023,6,4,12).getTime();console.log("Test Case 7:",this.streakExpired(s,i),"true")},testHabitNotCompleted(){const e={resetTime:"7:00 AM",timeTieBreaker:new Date(2023,5,1,8).getTime()},t={resetTime:"10:30 PM",timeTieBreaker:new Date(2023,5,2,22).getTime()},s={resetTime:"12:00 PM",timeTieBreaker:new Date(2023,5,3,11,30).getTime()},a=new Date(2023,5,2,6,59,59,999);console.log("Test Case 1:",this.habitNotCompleted(e,a),"false");const n=new Date(2023,5,2,7);console.log("Test Case 2:",this.habitNotCompleted(e,n),"true");const m=new Date(2023,5,2,22,5);console.log("Test Case 3:",this.habitNotCompleted(t,m),"false");const c=new Date(2023,5,2,23,30);console.log("Test Case 4:",this.habitNotCompleted(t,c),"true");const o=new Date(2023,5,3,11,59);console.log("Test case 5:",this.habitNotCompleted(s,o),"false");const l=new Date(2023,5,3,12);console.log("Test case 6:",this.habitNotCompleted(s,l),"true")}}});export{b as u};
