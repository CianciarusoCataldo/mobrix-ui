"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[8026],{4182:(e,r,a)=>{a.d(r,{A:()=>c});var s=a(7081),n=a(5001),t=a(5971),l=a(4414);const c=e=>{const r=(0,s.d4)(n.jJ);return(0,l.jsx)(t.ag,{...e,dark:r})}},7701:(e,r,a)=>{a.d(r,{A:()=>i});var s=a(8738),n=a.n(s),t=a(5971),l=a(9950),c=a(5627),o=a(4414);const d=(0,c.y)((e=>{let{children:r,location:{pathname:a}}=e;return(0,l.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[a]),(0,o.jsx)("div",{id:"scroll-manager",children:r||null})})),i=e=>{let{className:r,children:a}=e;return(0,o.jsx)(d,{children:(0,o.jsx)(t.mc,{animated:!0,unstyled:!0,className:n()("m-2",r),children:a})})}},4477:(e,r,a)=>{a.d(r,{h:()=>m});var s=a(6742),n=a(7081),t=a(1123),l=a(5971),c=a(4182),o=a(7701),d=a(6555),i=a(4414);const m=e=>{let{children:r,name:a,render:m,props:h,translations:p}=e;const u=(0,t.S)(),{t:x}=(0,s.B)(p?a.toLowerCase():"common"),b=u("component",{componentName:a}),j=(0,n.d4)(d.X5);return(0,i.jsxs)(o.A,{children:[(0,i.jsx)(c.A,{className:"text-4xl mt-12 mb-5 ml-3",children:b}),(0,i.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,i.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(a," page"),src:"https://cianciarusocataldo.github.io/".concat(j[a].replace("/mobrix-ui","/mobrix-ui/docs"))}),r,m&&m(x,b),(0,i.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,i.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),h&&(0,i.jsx)(l.XI,{headers:!0,rows:h})]})]})}},6827:(e,r,a)=>{a.d(r,{A:()=>t});var s=a(9137),n=a(4414);const t=e=>{let{rows:r,props:a,children:t,parseProps:l,label:c,startColor:o}=e;return(0,n.jsx)(s.CH,{props:a,rows:r,label:c,startColor:o,children:(e,r)=>{let a={...e};return l&&(a=l(a,r)),(0,n.jsx)("div",{className:"flex flex-col items-center",children:t(a,r)})}})}},6597:(e,r,a)=>{a.d(r,{Q:()=>n,f:()=>t});var s=a(9137);const n={className:(0,s.BG)(""),hide:(0,s.Ue)(!1),dark:(0,s.Ue)(!1),shadow:(0,s.Ue)(!1),unstyled:(0,s.Ue)(!1),animated:(0,s.Ue)(!0),disabled:(0,s.Ue)(!1),hover:(0,s.Ue)(!0),a11y:(0,s.Ue)(!0),a11yLabel:(0,s.BG)("")},t=[["animated","dark","shadow"],["className","unstyled","hover","disabled"],["hide","a11y","a11yLabel"]]},1123:(e,r,a)=>{a.d(r,{B:()=>t,S:()=>n});var s=a(6742);const n=()=>{const{t:e}=(0,s.B)("common");return e},t=()=>{const{t:e}=(0,s.B)("overview");return e}},2504:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var s=a(9137),n=a(5971),t=a(4477),l=a(6597),c=a(6827),o=a(4414);const d=()=>(0,o.jsx)(t.h,{name:"ExpandableContainer",translations:!0,render:(e,r)=>{const a=e("props_children");return(0,o.jsx)(c.A,{label:r,props:{children:(0,s.BG)(a),compact:(0,s.Ue)(!0),expanded:(0,s.Ku)((0,o.jsx)("div",{children:"Expanded area"})),...l.Q},rows:[["children","compact","expanded"],...l.f],children:n.uC})}})}}]);