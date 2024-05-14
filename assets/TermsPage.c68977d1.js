import{_ as r,F as n,G as a,H as c,I as i,R as e,O as l,J as h,L as o,P as u,K as p}from"./index.3e2fdd3f.js";import{Q as d}from"./QPage.a4a092f8.js";import{d as m}from"./date.7e204f1e.js";import{u as f}from"./store_settings.2ce65f01.js";const y=n({name:"TermsPage",beforeMount(){this.$emit("refresh-header"),this.settingsStore=f(),this.settingsStore.initialize()},methods:{acceptTerms(){this.$q.dialog({title:"Confirm",message:"I (the user) accept these terms of service.",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.acceptedTermsDate=this.getDateWithTime(),this.settingsStore.saveAcceptedTermsDate(),this.$router.push("dreams")}).onCancel(()=>{this.$q.notify("Sorry these terms weren't agreeable to you! Feel free to reach out to me with your questions!"),this.$q.notify("If you cannot accept these terms, please close and uninstall the application if applicable immediately.")})},getDateWithTime(){const s=Date().toString();return m.formatDate(s,"MMM D, YYYY, hh:mm A")}}}),g={class:"q-pa-lg terms-content"},_=e("h4",null,"Terms of Service",-1),v=e("p",null,' Please read this document in full. After doing so, scroll to the bottom and click the "Accept Terms of Service" button to accept these terms and enable the full application functionality. If you do not agree to these terms please close the application and uninstall it if applicable. ',-1),b=e("h6",null,"INTRODUCTION",-1),T=e("p",null," Art Motives (referred to here as the application, or as the app discussed) is a gamified lifestyle app focused on helping users to achieve their dreams through a system of dreams, a goal system (scheduled and unscheduled), habits with basic stats such as streak, last completion, and total completions, notes, and art unlocks (eventually I hope to build this into a virtual art gallery that the user may collect artwork in for simply aesthetic pleasure.) ",-1),w=e("h6",null,"TECHNOLOGY DISCLOSURE",-1),k=e("p",null," As much of the art in this app is currently AI generated, this app only uses services which allow for commercial use of their art generation technology to avoid potential copyright disputes. Each service is credited in the About page of the app with links for the user to check out these services for themselves. Some artwork was modified by the creator to improve its appearance for the purposes of the app subjectively, license permitting. ",-1),A=e("h6",null,"TERMS",-1),I=e("p",null,"To use this app you, the user, must accept these terms.",-1),S=e("p",null," The company refers to UnTe (the sole proprietorship of Walter J. Macfarland.) ",-1),C=e("p",null," The user agrees first and foremost to avoid use of the app for any illegal purposes. Any user below the legal age of consent must have parental consent prior to using this app. ",-1),M=e("p",null," When using the Export Report and Import Goals features, you, the user, are responsible for the security of the data. This means following best practices around clipboard management and using the clear clipboard feature. You agree to adhere to the terms of use and accept the privacy policy of the service you use to seek feedback on your report in addition to these terms. You agree to full responsibility for completing any suggested dreams or goals or starting any suggested habits. Do not use the AI related features if you are not psychologically capable of receiving criticism from a machine/AI intelligence. These systems can hallucinate and produce bad results, so exercise your best judgment. This feature is provided primarily to stimulate research into schedule generation and productivity. ",-1),D=e("p",null," You, the user, shall not circumvent accepting these terms of use. Circumvention constitutes acceptance of these terms. ",-1),Y=e("p",null," If and when the service adds an account system, the user agrees to protect the confidentiality of their account information to the best of their ability. ",-1),x=e("p",null," The company accepts no liability for unauthorized access or use of the user\u2019s account. ",-1),P=e("p",null," The company retains all intellectual property rights to the application \u201CArt Motives\u201D. ",-1),N=e("p",null," In the future the app may offer personalized AI services for the user. These are provided simply for the enjoyment of the user and should not be sold, traded, or exchanged for any goods or services without the sole and express permission of UnTe. ",-1),O=e("p",null," The user agrees not to use the software for commercial purposes, including but not limited to using the software for generating revenue, commercial advertising, or other business-related activities without the express consent of UnTe or Walter J. Macfarland. Please view the contact information below if you are interested in Art Motives for your business. ",-1),$=e("p",null," The company waives responsibility for any third-party links provided in the application. No warranty is provided. Use of this application is at the user\u2019s sole risk. The user must indemnify UnTe of any claims or damages arising from their misuse of the application. The user agrees to adhere to the governing law and jurisdiction of Arizona of the United States of America. ",-1),q=e("p",null," You, the user, accept all consequences of using the app. Do not use the app if you cannot control yourself. Take breaks when necessary. Coins are virtual and are not worth anything. ",-1),U=e("p",null," These terms are subject to change in the future. Please check the version number of the software and review the terms for any modifications prior to using of the new version of the app. If any changes affecting your privacy are made, there will be a prompt requiring your acceptance of the new terms before the new terms take effect. ",-1),j=e("h6",null,"PRIVACY POLICY",-1),E=e("p",null," Art Motives stores all your user data in local storage currently. This data is currently unencrypted. ",-1),R=e("p",null," Your user data (that you create inside the application) is not sent to any servers without your permission. Some usage data may be tracked by Google/Choreo. Please review their privacy policies for more information depending on which service you use to access Art Motives. ",-1),B=e("p",null," If notifications are added, data about your goal or habit will be transmitted to a server or servers so they are able to alert your device in sleep mode (while the app isn\u2019t running.) They will remain toggled off in the options by default for a more privacy friendly setup by default. ",-1),V=e("p",null," In the future, there may be promotions which require you to accept a separate privacy policy in addition to this one. ",-1),W=e("p",null," This policy is subject to change as new developments occur and/or customer feedback is collected. This must be accepted in addition to the terms of service to use Art Motives. This policy is subject to change as new developments occur and/or customer feedback is collected. ",-1),z=e("h6",null,"CONTACT INFO",-1),F=e("p",null,[o(" For questions or concerns please reach out to Epitaph64 on "),e("a",{href:"https://twitter.com/Epitaph64"},"X"),o(" or email me at wjmacfarland@gmail.com ")],-1),G={key:0},L={class:"btn"};function J(s,t,Q,H,K,X){return a(),c(d,{"items-center":"",class:"terms-page"},{default:i(()=>[e("div",g,[_,v,b,T,w,k,A,I,S,C,M,D,Y,x,P,N,O,$,q,U,j,E,R,B,V,W,z,F,this.settingsStore.termsUpToDate()?p("",!0):(a(),l("div",G,[e("div",L,[h(u,{onClick:t[0]||(t[0]=Z=>this.acceptTerms())},{default:i(()=>[o("Accept Terms of Service")]),_:1})])]))])]),_:1})}var ae=r(y,[["render",J]]);export{ae as default};
