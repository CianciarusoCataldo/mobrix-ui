"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[546],{4182:(e,t,r)=>{r.d(t,{A:()=>n});var s=r(7081),o=r(5001),a=r(5971),l=r(4414);const n=e=>{const t=(0,s.d4)(o.jJ);return(0,l.jsx)(a.ag,{...e,dark:t})}},7701:(e,t,r)=>{r.d(t,{A:()=>d});var s=r(8738),o=r.n(s),a=r(5971),l=r(9950),n=r(5627),c=r(4414);const i=(0,n.y)((e=>{let{children:t,location:{pathname:r}}=e;return(0,l.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,c.jsx)("div",{id:"scroll-manager",children:t||null})})),d=e=>{let{className:t,children:r}=e;return(0,c.jsx)(i,{children:(0,c.jsx)(a.mc,{animated:!0,unstyled:!0,className:o()("m-2",t),children:r})})}},4477:(e,t,r)=>{r.d(t,{h:()=>m});var s=r(6742),o=r(7081),a=r(1123),l=r(5971),n=r(4182),c=r(7701),i=r(6555),d=r(4414);const m=e=>{let{children:t,name:r,render:m,props:h,translations:p}=e;const u=(0,a.S)(),{t:x}=(0,s.B)(p?r.toLowerCase():"common"),b=u("component",{componentName:r}),f=(0,o.d4)(i.X5);return(0,d.jsxs)(c.A,{children:[(0,d.jsx)(n.A,{className:"text-4xl mt-12 mb-5 ml-3",children:b}),(0,d.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,d.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(f[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),t,m&&m(x,b),(0,d.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,d.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),h&&(0,d.jsx)(l.XI,{headers:!0,rows:h})]})]})}},6827:(e,t,r)=>{r.d(t,{A:()=>a});var s=r(9137),o=r(4414);const a=e=>{let{rows:t,props:r,children:a,parseProps:l,label:n,startColor:c}=e;return(0,o.jsx)(s.CH,{props:r,rows:t,label:n,startColor:c,children:(e,t)=>{let r={...e};return l&&(r=l(r,t)),(0,o.jsx)("div",{className:"flex flex-col items-center",children:a(r,t)})}})}},6597:(e,t,r)=>{r.d(t,{Q:()=>o,f:()=>a});var s=r(9137);const o={className:(0,s.BG)(""),hide:(0,s.Ue)(!1),dark:(0,s.Ue)(!1),shadow:(0,s.Ue)(!1),unstyled:(0,s.Ue)(!1),animated:(0,s.Ue)(!0),a11y:(0,s.Ue)(!0),hover:(0,s.Ue)(!0),a11yLabel:(0,s.BG)("")},a=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},1123:(e,t,r)=>{r.d(t,{B:()=>a,S:()=>o});var s=r(6742);const o=()=>{const{t:e}=(0,s.B)("common");return e},a=()=>{const{t:e}=(0,s.B)("overview");return e}},7568:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var s=r(6597),o=r(9137),a=r(5971),l=r(4477),n=r(6827),c=r(4414);const i=()=>{let e={...s.Q};return e.hide=(0,o.Ku)(!0),(0,c.jsx)(l.h,{name:"Drawer",translations:!0,render:(t,r)=>(0,c.jsx)(n.A,{label:r,startColor:"#C3BBBB",props:{position:(0,o.KQ)({top:"top","top-left":"top-left","top-right":"top-right",bottom:"bottom","bottom-left":"bottom-left","bottom-right":"bottom-right",left:"left",right:"right"}),...e},rows:[["position"],s.f[0],s.f[1],s.f[2].splice(1)],parseProps:(e,t)=>({...e,onClose:()=>t({...e,hide:!0}),children:(0,c.jsx)(a.B8,{dark:e.dark,className:"p-4",elements:new Array(6).fill("Element ").map(((e,t)=>e+t))})}),children:(e,r)=>{const s=t("common_open");return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.$n,{onClick:()=>r({...e,hide:!1}),children:s}),(0,c.jsx)(a._s,{...e})]})}})})}}}]);