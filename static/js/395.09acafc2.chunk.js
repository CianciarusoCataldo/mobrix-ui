"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[395],{4182:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(7081),s=r(5001),o=r(5971),l=r(4414);const n=e=>{const t=(0,a.d4)(s.jJ);return(0,l.jsx)(o.ag,{...e,dark:t})}},7701:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(8738),s=r.n(a),o=r(5971),l=r(9950),n=r(5627),d=r(4414);const m=(0,n.y)((e=>{let{children:t,location:{pathname:r}}=e;return(0,l.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,d.jsx)("div",{id:"scroll-manager",children:t||null})})),c=e=>{let{className:t,children:r}=e;return(0,d.jsx)(m,{children:(0,d.jsx)(o.mc,{animated:!0,unstyled:!0,className:s()("m-2",t),children:r})})}},4477:(e,t,r)=>{r.d(t,{h:()=>i});var a=r(6742),s=r(7081),o=r(1123),l=r(5971),n=r(4182),d=r(7701),m=r(6555),c=r(4414);const i=e=>{let{children:t,name:r,render:i,props:h,translations:u}=e;const p=(0,o.S)(),{t:y}=(0,a.B)(u?r.toLowerCase():"common"),x=p("component",{componentName:r}),b=(0,s.d4)(m.X5);return(0,c.jsxs)(d.A,{children:[(0,c.jsx)(n.A,{className:"text-4xl mt-12 mb-5 ml-3",children:x}),(0,c.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,c.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(b[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),t,i&&i(y,x),(0,c.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,c.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),h&&(0,c.jsx)(l.XI,{headers:!0,rows:h})]})]})}},6827:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(9137),s=r(4414);const o=e=>{let{rows:t,props:r,children:o,parseProps:l,label:n,startColor:d}=e;return(0,s.jsx)(a.CH,{props:r,rows:t,label:n,startColor:d,children:(e,t)=>{let r={...e};return l&&(r=l(r,t)),(0,s.jsx)("div",{className:"flex flex-col items-center",children:o(r,t)})}})}},6597:(e,t,r)=>{r.d(t,{Q:()=>s,f:()=>o});var a=r(9137);const s={className:(0,a.BG)(""),hide:(0,a.Ue)(!1),dark:(0,a.Ue)(!1),shadow:(0,a.Ue)(!1),unstyled:(0,a.Ue)(!1),animated:(0,a.Ue)(!0),a11y:(0,a.Ue)(!0),hover:(0,a.Ue)(!0),a11yLabel:(0,a.BG)("")},o=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},1123:(e,t,r)=>{r.d(t,{B:()=>o,S:()=>s});var a=r(6742);const s=()=>{const{t:e}=(0,a.B)("common");return e},o=()=>{const{t:e}=(0,a.B)("overview");return e}},9433:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(9137),s=r(5971),o=r(4477),l=r(6597),n=r(6827),d=r(4414);const m=()=>(0,d.jsx)(o.h,{translations:!0,name:"Calendar",render:(e,t)=>(0,d.jsx)(n.A,{label:t,startColor:"#C3BBBB",props:{month:(0,a.rl)(0),year:(0,a.rl)(0),"Start month":(0,a.Ue)(!1),"Start year":(0,a.Ue)(!1),"Custom days":(0,a.Ue)(!0),"Custom months":(0,a.Ue)(!0),hideArrows:(0,a.Ue)(!1),fromToday:(0,a.Ue)(!0),dayLabel:(0,a.Ue)(!0),...l.Q},rows:[["fromToday","dayLabel"],["Start year","year"],["Start month","month"],["Custom days","Custom months","hideArrows"],...l.f],parseProps:t=>{let r={...t};return delete r["Custom days"],delete r["Custom months"],delete r["Start month"],delete r["Start year"],delete r.year,delete r.month,r.value={},r.startMonth=t["Start month"]?t.month:void 0,r.startYear=t["Start year"]?t.year:void 0,t["Custom days"]&&(r.days=e("days").split("-")),t["Custom months"]&&(r.months=e("months").split("-")),r},children:s.Vv})})}}]);