"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[2359],{4182:(e,s,t)=>{t.d(s,{A:()=>n});var r=t(7081),a=t(5001),o=t(5971),l=t(4414);const n=e=>{const s=(0,r.d4)(a.jJ);return(0,l.jsx)(o.ag,{...e,dark:s})}},7701:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(8738),a=t.n(r),o=t(5971),l=t(9950),n=t(5627),m=t(4414);const d=(0,n.y)((e=>{let{children:s,location:{pathname:t}}=e;return(0,l.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[t]),(0,m.jsx)("div",{id:"scroll-manager",children:s||null})})),c=e=>{let{className:s,children:t}=e;return(0,m.jsx)(d,{children:(0,m.jsx)(o.mc,{animated:!0,unstyled:!0,className:a()("m-2",s),children:t})})}},4477:(e,s,t)=>{t.d(s,{h:()=>i});var r=t(6742),a=t(7081),o=t(1123),l=t(5971),n=t(4182),m=t(7701),d=t(6555),c=t(4414);const i=e=>{let{children:s,name:t,render:i,props:h,translations:u}=e;const p=(0,o.S)(),{t:y}=(0,r.B)(u?t.toLowerCase():"common"),x=p("component",{componentName:t}),C=(0,a.d4)(d.X5);return(0,c.jsxs)(m.A,{children:[(0,c.jsx)(n.A,{className:"text-4xl mt-12 mb-5 ml-3",children:x}),(0,c.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,c.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(t," page"),src:"https://cianciarusocataldo.github.io/".concat(C[t].replace("/mobrix-ui","/mobrix-ui/docs"))}),s,i&&i(y,x),(0,c.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,c.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),h&&(0,c.jsx)(l.XI,{headers:!0,rows:h})]})]})}},6827:(e,s,t)=>{t.d(s,{A:()=>o});var r=t(9137),a=t(4414);const o=e=>{let{rows:s,props:t,children:o,parseProps:l,label:n,startColor:m}=e;return(0,a.jsx)(r.CH,{props:t,rows:s,label:n,startColor:m,children:(e,s)=>{let t={...e};return l&&(t=l(t,s)),(0,a.jsx)("div",{className:"flex flex-col items-center",children:o(t,s)})}})}},6597:(e,s,t)=>{t.d(s,{Q:()=>a,f:()=>o});var r=t(9137);const a={className:(0,r.BG)(""),hide:(0,r.Ue)(!1),dark:(0,r.Ue)(!1),shadow:(0,r.Ue)(!1),unstyled:(0,r.Ue)(!1),animated:(0,r.Ue)(!0),disabled:(0,r.Ue)(!1),hover:(0,r.Ue)(!0),a11y:(0,r.Ue)(!0),a11yLabel:(0,r.BG)("")},o=[["animated","dark","shadow"],["className","unstyled","hover","disabled"],["hide","a11y","a11yLabel"]]},1123:(e,s,t)=>{t.d(s,{B:()=>o,S:()=>a});var r=t(6742);const a=()=>{const{t:e}=(0,r.B)("common");return e},o=()=>{const{t:e}=(0,r.B)("overview");return e}},9693:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var r=t(9137),a=t(5971),o=t(4477),l=t(6597),n=t(6827),m=t(4414);const d=()=>(0,m.jsx)(o.h,{translations:!0,name:"DatePicker",render:(e,s)=>(0,m.jsx)(n.A,{label:s,startColor:"#C3BBBB",props:{month:(0,r.rl)(0),year:(0,r.rl)(0),"Custom month":(0,r.Ue)(!1),"Custom year":(0,r.Ue)(!1),"Custom days":(0,r.Ue)(!1),"Custom months":(0,r.Ue)(!1),hideArrows:(0,r.Ue)(!1),dayLabel:(0,r.Ue)(!0),fromToday:(0,r.Ue)(!0),...l.Q},rows:[["fromToday","Custom year","year"],["Custom month","month"],["Custom days","Custom months"],...l.f],parseProps:s=>{let t={...s};return delete t["Custom days"],delete t["Custom months"],delete t["Custom month"],delete t["Custom year"],delete t.year,delete t.month,t.value={},t.value.month=s["Custom month"]?s.month:void 0,t.value.year=s["Custom year"]?s.year:void 0,s["Custom days"]&&(t.days=e("days").split("-")),s["Custom months"]&&(t.months=e("months").split("-")),t},children:a.lr})})}}]);