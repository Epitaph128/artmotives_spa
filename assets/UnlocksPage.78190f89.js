import{_ as g,M as _,ak as C,N as t,O as e,P as k,Y as r,W as a,R as d,X as v,al as y,T as p,S as $}from"./index.2c35263f.js";import{Q as u}from"./QBtnGroup.84e84f0b.js";import{Q as l}from"./QImg.a108d262.js";import{Q as f}from"./QPage.5e5647c8.js";import{u as U}from"./store_unlocks.32753318.js";import{u as m}from"./store_settings.38ce8ac4.js";var j="/assets/1.8e9ba7b4.jpg",i="/assets/question-mark.1301a891.jpg",b="/assets/2.d9a59dc0.jpg",w="/assets/3.86c5fea7.jpg",S="/assets/4.88c1fa7c.jpg",h="/assets/5.0965c32e.jpg",q="/assets/6.57f4a578.jpg",B="/assets/7.53a0c949.jpg",Q="/assets/8.82cbb885.jpg",N="/assets/9.427a55a7.jpg",P="/assets/10.28f628fa.jpg",A="/assets/11.d238e4ec.jpg",T="/assets/12.cae42b5f.jpg",V="/assets/13.86883532.jpg",z="/assets/14.3644eef2.jpg",G="/assets/15.a815adcf.jpg",E="/assets/16.3db103d7.jpg",M="/assets/17.b9be9b2b.jpg",O="/assets/18.14405b14.jpg",I="/assets/19.bf659118.jpg",R="/assets/20.648ba2f9.jpg",W="/assets/21.602d1d8e.jpg",X="/assets/22.4f30895f.jpg",Y="/assets/23.73561a8b.jpg",D="/assets/24.4ed4e501.jpg",F="/assets/25.022e662a.jpg",c="/assets/question-mark-2.33223f1f.jpg",H="/assets/26.3653b6b7.jpg",J="/assets/27.931b4b73.jpg",K="/assets/28.59356bb9.jpg",L="/assets/29.f60f1ecd.jpg",Z="/assets/30.872809e1.jpg",x="/assets/31.cbf5c9c4.jpg",ss="/assets/32.e8f33b9d.jpg",os="/assets/33.0d296bcc.jpg",ts="/assets/34.605d381e.jpg",es="/assets/35.27ae683d.jpg",ls="/assets/36.1854cfdc.jpg",rs="/assets/37.896a5a63.jpg",ns="/assets/38.60fcd1df.jpg",is="/assets/39.24b57bd5.jpg",cs="/assets/40.c5cecbad.jpg",ks="/assets/41.26c3554f.jpg",ds="/assets/42.2339b763.jpg",as="/assets/43.3b9112bd.jpg",vs="/assets/44.0a7cf462.jpg",ys="/assets/45.508f2d4b.jpg",ps="/assets/46.f17f798b.jpg",us="/assets/47.9fca516a.jpg",ms="/assets/48.9fb2a5bf.jpg";const gs=_({name:"UnlocksPage",data(){return{collection:1}},beforeMount(){this.settingsStore=m(),this.settingsStore.initialize(),this.unlocksStore=U(),this.unlocksStore.initialize(),this.$emit("refresh-header")},computed:{...C(m,["useBigButtons","goalsSortStyle"]),buttonClass(){return this.useBigButtons?"bigBtn":""},sortStyle(){return this.goalsSortStyle},buttonText(){return`Sort: ${this.sortStyle}`}},methods:{unlocked(s){return this.unlocksStore.unlocks.includes(s)},tryUnlock(s){this.unlocked(s)||(this.settingsStore.coins>=1e3?this.$q.dialog({title:"Confirm",message:"Spend 1000 coins to unlock?",cancel:!0,persistent:!0}).onOk(()=>{this.settingsStore.coins=this.settingsStore.coins-1e3,this.settingsStore.saveCoins(),this.unlocksStore.unlocks.push(s),this.unlocksStore.saveUnlocks()}):this.$q.notify("Unlocking an artwork requires 1,000 coins."))},openCollection(s){this.collection=s}}}),_s=r("h4",{class:"q-mt-none q-mb-none",style:{padding:"1em","text-align":"center"}}," Purchase Unlocks ",-1),Cs={class:"q-pa-sm unlocks-page"},$s=r("p",null," Click an image with a question mark to unlock the hidden image behind. Each unlock will cost 1,000 coins, so about the equivalent of completing two hard goals. Use the app honestly, no cheating! That ruins the fun and benefit! ",-1),fs=r("br",null,null,-1),Us={key:0},js={class:"q-gutter-md row justify-center"},bs=r("h4",null,"Artwork Collection 1",-1),ws={class:"q-pa-none example-row-equal-width"},Ss={class:"row"},hs={class:"col art-col"},qs={class:"col art-col"},Bs={class:"col art-col"},Qs={class:"row"},Ns={class:"col art-col"},Ps={class:"col art-col"},As={class:"col art-col"},Ts={class:"row"},Vs={class:"col art-col"},zs={class:"col art-col"},Gs={class:"col art-col"},Es={class:"row"},Ms={class:"col art-col"},Os={class:"col art-col"},Is={class:"col art-col"},Rs={class:"row"},Ws={class:"col art-col"},Xs={class:"col art-col"},Ys={class:"col art-col"},Ds={class:"row"},Fs={class:"col art-col"},Hs={class:"col art-col"},Js={class:"col art-col"},Ks={class:"row"},Ls={class:"col art-col"},Zs={class:"col art-col"},xs={class:"col art-col"},so={class:"row"},oo={class:"col art-col"},to={class:"col art-col"},eo={class:"col art-col"},lo={key:1},ro={class:"q-gutter-md row justify-center"},no=r("h4",null,"Artwork Collection 2",-1),io={class:"q-pa-none example-row-equal-width"},co={class:"row"},ko={class:"col art-col"},ao={class:"col art-col"},vo={class:"col art-col"},yo={class:"row"},po={class:"col art-col"},uo={class:"col art-col"},mo={class:"col art-col"},go={class:"row"},_o={class:"col art-col"},Co={class:"col art-col"},$o={class:"col art-col"},fo={class:"row"},Uo={class:"col art-col"},jo={class:"col art-col"},bo={class:"col art-col"},wo={class:"row"},So={class:"col art-col"},ho={class:"col art-col"},qo={class:"col art-col"},Bo={class:"row"},Qo={class:"col art-col"},No={class:"col art-col"},Po={class:"col art-col"},Ao={class:"row"},To={class:"col art-col"},Vo={class:"col art-col"},zo={class:"col art-col"},Go={class:"row"},Eo={class:"col art-col"},Mo={class:"col art-col"},Oo={class:"col art-col"};function Io(s,o,Ro,Wo,Xo,Yo){return t(),e(f,{"items-center":""},{default:k(()=>[_s,r("div",Cs,[$s,fs,this.collection==1?(t(),a("div",Us,[r("div",js,[d(u,{"no-wrap":""},{default:k(()=>[d(v,{class:y([s.buttonClass,"top-button"]),onClick:o[0]||(o[0]=n=>this.openCollection(2))},{default:k(()=>[p("Go to Artwork Collection #2")]),_:1},8,["class"])]),_:1})]),bs,r("div",ws,[r("div",Ss,[r("div",hs,[s.unlocked(1)?(t(),e(l,{key:0,src:j})):(t(),e(l,{key:1,src:i,onClick:o[1]||(o[1]=n=>s.tryUnlock(1))}))]),r("div",qs,[s.unlocked(2)?(t(),e(l,{key:0,src:b})):(t(),e(l,{key:1,src:i,onClick:o[2]||(o[2]=n=>s.tryUnlock(2))}))]),r("div",Bs,[s.unlocked(3)?(t(),e(l,{key:0,src:w})):(t(),e(l,{key:1,src:i,onClick:o[3]||(o[3]=n=>s.tryUnlock(3))}))])]),r("div",Qs,[r("div",Ns,[s.unlocked(4)?(t(),e(l,{key:0,src:S})):(t(),e(l,{key:1,src:i,onClick:o[4]||(o[4]=n=>s.tryUnlock(4))}))]),r("div",Ps,[s.unlocked(5)?(t(),e(l,{key:0,src:h})):(t(),e(l,{key:1,src:i,onClick:o[5]||(o[5]=n=>s.tryUnlock(5))}))]),r("div",As,[s.unlocked(6)?(t(),e(l,{key:0,src:q})):(t(),e(l,{key:1,src:i,onClick:o[6]||(o[6]=n=>s.tryUnlock(6))}))])]),r("div",Ts,[r("div",Vs,[s.unlocked(7)?(t(),e(l,{key:0,src:B})):(t(),e(l,{key:1,src:i,onClick:o[7]||(o[7]=n=>s.tryUnlock(7))}))]),r("div",zs,[s.unlocked(8)?(t(),e(l,{key:0,src:Q})):(t(),e(l,{key:1,src:i,onClick:o[8]||(o[8]=n=>s.tryUnlock(8))}))]),r("div",Gs,[s.unlocked(9)?(t(),e(l,{key:0,src:N})):(t(),e(l,{key:1,src:i,onClick:o[9]||(o[9]=n=>s.tryUnlock(9))}))])]),r("div",Es,[r("div",Ms,[s.unlocked(10)?(t(),e(l,{key:0,src:P})):(t(),e(l,{key:1,src:i,onClick:o[10]||(o[10]=n=>s.tryUnlock(10))}))]),r("div",Os,[s.unlocked(11)?(t(),e(l,{key:0,src:A})):(t(),e(l,{key:1,src:i,onClick:o[11]||(o[11]=n=>s.tryUnlock(11))}))]),r("div",Is,[s.unlocked(12)?(t(),e(l,{key:0,src:T})):(t(),e(l,{key:1,src:i,onClick:o[12]||(o[12]=n=>s.tryUnlock(12))}))])]),r("div",Rs,[r("div",Ws,[s.unlocked(13)?(t(),e(l,{key:0,src:V})):(t(),e(l,{key:1,src:i,onClick:o[13]||(o[13]=n=>s.tryUnlock(13))}))]),r("div",Xs,[s.unlocked(14)?(t(),e(l,{key:0,src:z})):(t(),e(l,{key:1,src:i,onClick:o[14]||(o[14]=n=>s.tryUnlock(14))}))]),r("div",Ys,[s.unlocked(15)?(t(),e(l,{key:0,src:G})):(t(),e(l,{key:1,src:i,onClick:o[15]||(o[15]=n=>s.tryUnlock(15))}))])]),r("div",Ds,[r("div",Fs,[s.unlocked(16)?(t(),e(l,{key:0,src:E})):(t(),e(l,{key:1,src:i,onClick:o[16]||(o[16]=n=>s.tryUnlock(16))}))]),r("div",Hs,[s.unlocked(17)?(t(),e(l,{key:0,src:M})):(t(),e(l,{key:1,src:i,onClick:o[17]||(o[17]=n=>s.tryUnlock(17))}))]),r("div",Js,[s.unlocked(18)?(t(),e(l,{key:0,src:O})):(t(),e(l,{key:1,src:i,onClick:o[18]||(o[18]=n=>s.tryUnlock(18))}))])]),r("div",Ks,[r("div",Ls,[s.unlocked(19)?(t(),e(l,{key:0,src:I})):(t(),e(l,{key:1,src:i,onClick:o[19]||(o[19]=n=>s.tryUnlock(19))}))]),r("div",Zs,[s.unlocked(20)?(t(),e(l,{key:0,src:R})):(t(),e(l,{key:1,src:i,onClick:o[20]||(o[20]=n=>s.tryUnlock(20))}))]),r("div",xs,[s.unlocked(21)?(t(),e(l,{key:0,src:W})):(t(),e(l,{key:1,src:i,onClick:o[21]||(o[21]=n=>s.tryUnlock(21))}))])]),r("div",so,[r("div",oo,[s.unlocked(22)?(t(),e(l,{key:0,src:X})):(t(),e(l,{key:1,src:i,onClick:o[22]||(o[22]=n=>s.tryUnlock(22))}))]),r("div",to,[s.unlocked(23)?(t(),e(l,{key:0,src:Y})):(t(),e(l,{key:1,src:i,onClick:o[23]||(o[23]=n=>s.tryUnlock(23))}))]),r("div",eo,[s.unlocked(24)?(t(),e(l,{key:0,src:D})):(t(),e(l,{key:1,src:i,onClick:o[24]||(o[24]=n=>s.tryUnlock(24))}))])])])])):this.collection==2?(t(),a("div",lo,[r("div",ro,[d(u,{"no-wrap":""},{default:k(()=>[d(v,{class:y([s.buttonClass,"top-button"]),onClick:o[25]||(o[25]=n=>this.openCollection(1))},{default:k(()=>[p("Go to Artwork Collection #1")]),_:1},8,["class"])]),_:1})]),no,r("div",io,[r("div",co,[r("div",ko,[s.unlocked(25)?(t(),e(l,{key:0,src:F})):(t(),e(l,{key:1,src:c,onClick:o[26]||(o[26]=n=>s.tryUnlock(25))}))]),r("div",ao,[s.unlocked(26)?(t(),e(l,{key:0,src:H})):(t(),e(l,{key:1,src:c,onClick:o[27]||(o[27]=n=>s.tryUnlock(26))}))]),r("div",vo,[s.unlocked(27)?(t(),e(l,{key:0,src:J})):(t(),e(l,{key:1,src:c,onClick:o[28]||(o[28]=n=>s.tryUnlock(27))}))])]),r("div",yo,[r("div",po,[s.unlocked(28)?(t(),e(l,{key:0,src:K})):(t(),e(l,{key:1,src:c,onClick:o[29]||(o[29]=n=>s.tryUnlock(28))}))]),r("div",uo,[s.unlocked(29)?(t(),e(l,{key:0,src:L})):(t(),e(l,{key:1,src:c,onClick:o[30]||(o[30]=n=>s.tryUnlock(29))}))]),r("div",mo,[s.unlocked(30)?(t(),e(l,{key:0,src:Z})):(t(),e(l,{key:1,src:c,onClick:o[31]||(o[31]=n=>s.tryUnlock(30))}))])]),r("div",go,[r("div",_o,[s.unlocked(31)?(t(),e(l,{key:0,src:x})):(t(),e(l,{key:1,src:c,onClick:o[32]||(o[32]=n=>s.tryUnlock(31))}))]),r("div",Co,[s.unlocked(32)?(t(),e(l,{key:0,src:ss})):(t(),e(l,{key:1,src:c,onClick:o[33]||(o[33]=n=>s.tryUnlock(32))}))]),r("div",$o,[s.unlocked(33)?(t(),e(l,{key:0,src:os})):(t(),e(l,{key:1,src:c,onClick:o[34]||(o[34]=n=>s.tryUnlock(33))}))])]),r("div",fo,[r("div",Uo,[s.unlocked(34)?(t(),e(l,{key:0,src:ts})):(t(),e(l,{key:1,src:c,onClick:o[35]||(o[35]=n=>s.tryUnlock(34))}))]),r("div",jo,[s.unlocked(35)?(t(),e(l,{key:0,src:es})):(t(),e(l,{key:1,src:c,onClick:o[36]||(o[36]=n=>s.tryUnlock(35))}))]),r("div",bo,[s.unlocked(36)?(t(),e(l,{key:0,src:ls})):(t(),e(l,{key:1,src:c,onClick:o[37]||(o[37]=n=>s.tryUnlock(36))}))])]),r("div",wo,[r("div",So,[s.unlocked(37)?(t(),e(l,{key:0,src:rs})):(t(),e(l,{key:1,src:c,onClick:o[38]||(o[38]=n=>s.tryUnlock(37))}))]),r("div",ho,[s.unlocked(38)?(t(),e(l,{key:0,src:ns})):(t(),e(l,{key:1,src:c,onClick:o[39]||(o[39]=n=>s.tryUnlock(38))}))]),r("div",qo,[s.unlocked(39)?(t(),e(l,{key:0,src:is})):(t(),e(l,{key:1,src:c,onClick:o[40]||(o[40]=n=>s.tryUnlock(39))}))])]),r("div",Bo,[r("div",Qo,[s.unlocked(40)?(t(),e(l,{key:0,src:cs})):(t(),e(l,{key:1,src:c,onClick:o[41]||(o[41]=n=>s.tryUnlock(40))}))]),r("div",No,[s.unlocked(41)?(t(),e(l,{key:0,src:ks})):(t(),e(l,{key:1,src:c,onClick:o[42]||(o[42]=n=>s.tryUnlock(41))}))]),r("div",Po,[s.unlocked(42)?(t(),e(l,{key:0,src:ds})):(t(),e(l,{key:1,src:c,onClick:o[43]||(o[43]=n=>s.tryUnlock(42))}))])]),r("div",Ao,[r("div",To,[s.unlocked(43)?(t(),e(l,{key:0,src:as})):(t(),e(l,{key:1,src:c,onClick:o[44]||(o[44]=n=>s.tryUnlock(43))}))]),r("div",Vo,[s.unlocked(44)?(t(),e(l,{key:0,src:vs})):(t(),e(l,{key:1,src:c,onClick:o[45]||(o[45]=n=>s.tryUnlock(44))}))]),r("div",zo,[s.unlocked(45)?(t(),e(l,{key:0,src:ys})):(t(),e(l,{key:1,src:c,onClick:o[46]||(o[46]=n=>s.tryUnlock(45))}))])]),r("div",Go,[r("div",Eo,[s.unlocked(46)?(t(),e(l,{key:0,src:ps})):(t(),e(l,{key:1,src:c,onClick:o[47]||(o[47]=n=>s.tryUnlock(46))}))]),r("div",Mo,[s.unlocked(47)?(t(),e(l,{key:0,src:us})):(t(),e(l,{key:1,src:c,onClick:o[48]||(o[48]=n=>s.tryUnlock(47))}))]),r("div",Oo,[s.unlocked(48)?(t(),e(l,{key:0,src:ms})):(t(),e(l,{key:1,src:c,onClick:o[49]||(o[49]=n=>s.tryUnlock(48))}))])])])])):$("",!0)])]),_:1})}var Zo=g(gs,[["render",Io]]);export{Zo as default};
