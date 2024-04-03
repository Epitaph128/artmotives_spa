import{a5 as n}from"./index.f7ca1694.js";import{d as o}from"./date.759e3ab3.js";const r="store_successes",c="store_successes_archive",a="store_successes_first_date";function h(){const s=Date().toString();return o.formatDate(s,"MMM D, YYYY")}const d=n("successes",{state:()=>({successes:[],successesArchive:[],firstSuccessDate:null}),actions:{initialize(){const s=localStorage.getItem(a);s&&(this.firstSuccessDate=s);const e=localStorage.getItem(r);e?this.successes=JSON.parse(e):this.successes={},Array.isArray(this.successes)||(this.successes=[])},initializeArchive(){const s=localStorage.getItem(c);s?this.successesArchive=JSON.parse(s):this.successesArchive={},Array.isArray(this.successesArchive)||(this.successesArchive=[])},addEntry(s){this.successes.push(s),this.firstSuccessDate||(this.firstSuccessDate=h(),this.saveFirstSuccessDate()),this.sortEntries()},removeEntry(s){const e=this.successes.indexOf(s);this.successes.splice(e,1),this.saveEntries()},removeArchivedEntry(s){const e=this.successesArchive.indexOf(s);this.successesArchive.splice(e,1),this.saveArchivedEntries()},saveEntries(){localStorage.setItem(r,JSON.stringify(this.successes))},saveArchivedEntries(){localStorage.setItem(c,JSON.stringify(this.successesArchive))},saveFirstSuccessDate(){localStorage.setItem(a,this.firstSuccessDate)},eraseSettings(){localStorage.setItem(a,"")},eraseEntries(){localStorage.setItem(r,JSON.stringify([]))},eraseArchivedEntries(){localStorage.setItem(c,JSON.stringify([]))},sortEntries(){this.successes.sort((s,e)=>{const i=new Date(s.date),t=new Date(e.date);return i<t?1:i>t?-1:e.dateTieBreaker-s.dateTieBreaker}),this.saveEntries()},sortArchivedEntries(){this.successesArchive.sort((s,e)=>{const i=new Date(s.date),t=new Date(e.date);return i<t?1:i>t?-1:e.dateTieBreaker-s.dateTieBreaker}),this.saveArchivedEntries()},daysSinceFirstSuccess(){const s=this.firstSuccessDate?new Date(this.firstSuccessDate):new Date,e=new Date,i=Math.abs(e-s);let t=Math.round(i/(1e3*60*60*24));return t<1&&(t=1),t},archiveOldEntries(){if(this.successes.length<=30)return!0;for(;this.successes.length>30;)this.successesArchive.unshift(this.successes.pop());return this.saveEntries(),this.saveArchivedEntries(),!1}}});export{d as u};
