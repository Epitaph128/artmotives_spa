import{M as i,_ as u,N as d,O as c,P as o,R as s,Y as a,am as r,al as m,X as y,ak as p,ap as f,aj as b,W as v,U as V,S as w}from"./index.70bccae1.js";const g=i({props:{entry:{type:Object,required:!0},buttonClass:{type:String,required:!0}},data(){return{localEntry:Object.assign({},this.entry)}},methods:{removeEntry(){this.$emit("remove-entry",this.entry)}}}),C={class:"success-data"},_={class:"text-h6"},k=a("br",null,null,-1),S=a("p",{class:"text-black"},"Congratulations on achieving your dream!",-1),x={class:"text-subtitle2"};function U(e,t,n,h,$,E){return d(),c(b,{class:"success-card text-white full-width outlined"},{default:o(()=>[s(m,null,{default:o(()=>[a("div",C,[a("div",_,[s(r,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,borderless:"",class:"full-width text-h6","input-class":"text-left",label:"Dream Title",modelValue:e.localEntry.title,"onUpdate:modelValue":t[0]||(t[0]=l=>e.localEntry.title=l),readonly:""},null,8,["modelValue"])]),k,S,a("div",x,[s(r,{"no-outline":"",style:{"padding-right":"1em","min-width":"35%"},"input-class":"text-left",label:"Dream Achieved",modelValue:e.localEntry.date,"onUpdate:modelValue":t[1]||(t[1]=l=>e.localEntry.date=l),readonly:""},null,8,["modelValue"])])])]),_:1}),s(f,null,{default:o(()=>[s(y,{class:p(this.buttonClass),flat:"",dense:"",glossy:"",icon:"delete",color:"black",onClick:t[2]||(t[2]=l=>e.removeEntry())},null,8,["class"])]),_:1})]),_:1})}var W=u(g,[["render",U]]);const j=i({props:{entry:{type:Object,required:!0},buttonClass:{type:String,required:!0}},data(){return{localEntry:Object.assign({},this.entry)}},methods:{displaySteps(e){for(var t="Steps Completed: ",n=0;n<e.stepsSize;n++)t+=e.steps[n].label,n+1!=e.stepsSize&&(t+=", ");return t},removeEntry(){this.$emit("remove-entry",this.entry)}}}),O={class:"success-data"},q={class:"text-h6"},D={class:"text-subtitle2"},B={key:0},Q=a("br",null,null,-1),z={key:0,class:"text-black",style:{"font-size":"1em"}};function G(e,t,n,h,$,E){return d(),c(b,{class:"success-card text-white full-width outlined"},{default:o(()=>[s(m,null,{default:o(()=>[a("div",O,[a("div",q,[s(r,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,borderless:"",class:"full-width text-h6","input-class":"text-left",label:"Goal Title",modelValue:e.localEntry.goal,"onUpdate:modelValue":t[0]||(t[0]=l=>e.localEntry.goal=l),readonly:""},null,8,["modelValue"])]),s(r,{readonly:"","no-outline":"",class:"full-width","input-class":"text-left",label:"Difficulty",modelValue:e.localEntry.difficulty,"onUpdate:modelValue":t[1]||(t[1]=l=>e.localEntry.difficulty=l)},null,8,["modelValue"]),a("div",D,[e.entry.stepsEnabled?(d(),v("div",B,[Q,e.entry.stepsEnabled?(d(),v("p",z,V(this.displaySteps(e.localEntry)),1)):w("",!0)])):w("",!0),s(r,{"no-outline":"",style:{"padding-right":"1em","min-width":"35%"},"input-class":"text-left",label:"Goal Completed",modelValue:e.localEntry.date,"onUpdate:modelValue":t[2]||(t[2]=l=>e.localEntry.date=l),readonly:""},null,8,["modelValue"])])])]),_:1}),s(f,null,{default:o(()=>[s(y,{class:p(e.buttonClass),flat:"",dense:"",glossy:"",icon:"delete",color:"black",onClick:t[3]||(t[3]=l=>e.removeEntry())},null,8,["class"])]),_:1})]),_:1})}var X=u(j,[["render",G]]);const H=i({props:{entry:{type:Object,required:!0},buttonClass:{type:String,required:!0}},data(){return{localEntry:Object.assign({},this.entry)}},methods:{removeEntry(){this.$emit("remove-entry",this.entry)}}}),N={class:"success-data"},T={class:"text-h6"},A=a("br",null,null,-1),M={class:"text-black"},R={class:"text-subtitle2"};function I(e,t,n,h,$,E){return d(),c(b,{class:"success-card text-white full-width outlined"},{default:o(()=>[s(m,null,{default:o(()=>[a("div",N,[a("div",T,[s(r,{multiline:"",autogrow:"",wrap:"on","min-rows":1,"max-rows":10,borderless:"",class:"full-width text-h6","input-class":"text-left",label:"Habit Title",modelValue:e.localEntry.habit,"onUpdate:modelValue":t[0]||(t[0]=l=>e.localEntry.habit=l),readonly:""},null,8,["modelValue"])]),A,a("p",M," Reached milestone: "+V(e.localEntry.streak)+" days in a row! ",1),a("div",R,[s(r,{"no-outline":"",style:{"padding-right":"1em","min-width":"35%"},"input-class":"text-left",label:"Habit Milestone Completed",modelValue:e.localEntry.date,"onUpdate:modelValue":t[1]||(t[1]=l=>e.localEntry.date=l),readonly:""},null,8,["modelValue"])])])]),_:1}),s(f,null,{default:o(()=>[s(y,{class:p(e.buttonClass),flat:"",dense:"",glossy:"",icon:"delete",color:"black",onClick:t[2]||(t[2]=l=>e.removeEntry())},null,8,["class"])]),_:1})]),_:1})}var Y=u(H,[["render",I]]);export{W as D,X as G,Y as H};
