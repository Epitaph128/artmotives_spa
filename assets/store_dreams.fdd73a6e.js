import{a5 as s}from"./index.71846c29.js";import{d as t}from"./date.fc741467.js";const a="store_dreams",o=s("dreams",{state:()=>({dreams:[]}),actions:{getDate(e=""){return t.formatDate(e||new Date().toString(),"MMM D, YYYY")},getDateWithTime(e=""){return t.formatDate(e||new Date().toString(),"MMM D, YYYY, hh:mm A")},initialize(){const e=localStorage.getItem(a);this.dreams=e?JSON.parse(e):[],Array.isArray(this.dreams)||(this.dreams=[])},addDream(){Array.isArray(this.dreams)||(this.dream=[]),this.dreams.unshift({title:"",createdDate:t.formatDate(new Date().toString(),"MMM D, YYYY")})},removeDream(e){const r=this.dreams.indexOf(e);this.dreams.splice(r,1),this.saveDreams()},saveDreams(){localStorage.setItem(a,JSON.stringify(this.dreams))},eraseDreams(){localStorage.setItem(a,JSON.stringify([]))}}});export{o as u};
