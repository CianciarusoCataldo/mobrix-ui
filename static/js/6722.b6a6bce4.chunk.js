"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[6722],{4182:(e,r,s)=>{s.d(r,{A:()=>n});var a=s(7081),t=s(5001),l=s(5971),c=s(4414);const n=e=>{const r=(0,a.d4)(t.jJ);return(0,c.jsx)(l.ag,{...e,dark:r})}},7701:(e,r,s)=>{s.d(r,{A:()=>d});var a=s(8738),t=s.n(a),l=s(5971),c=s(9950),n=s(5627),o=s(4414);const i=(0,n.y)((e=>{let{children:r,location:{pathname:s}}=e;return(0,c.useEffect)((()=>{document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[s]),(0,o.jsx)("div",{id:"scroll-manager",children:r||null})})),d=e=>{let{className:r,children:s}=e;return(0,o.jsx)(i,{children:(0,o.jsx)(l.mc,{animated:!0,background:!1,className:t()("m-2",r),animation:"fade-in",children:s})})}},4477:(e,r,s)=>{s.d(r,{h:()=>d});var a=s(6742),t=s(7081),l=s(1123),c=s(4182),n=s(7701),o=s(6555),i=s(4414);const d=e=>{let{children:r,name:s,render:d,props:m,translations:u}=e;const h=(0,l.S)(),{t:p}=(0,a.B)(u?s.toLowerCase():"common"),x=h("component",{componentName:s}),v=(0,t.d4)(o.X5);return(0,i.jsxs)(n.A,{children:[(0,i.jsx)(c.A,{className:"text-4xl mt-12 mb-5 ml-3",children:x}),(0,i.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[r,d&&d(p,x),(0,i.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,i.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),(0,i.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(s," page"),src:"https://cianciarusocataldo.github.io/".concat(v[s].replace("/mobrix-ui","/mobrix-ui/docs"))})]})]})}},6827:(e,r,s)=>{s.d(r,{A:()=>l});var a=s(9137),t=s(4414);const l=e=>{let{rows:r,props:s,children:l,parseProps:c,label:n,startColor:o}=e;return(0,t.jsx)(a.CH,{props:s,rows:r,label:n,startColor:o,children:(e,r)=>{let s={...e};return c&&(s=c(s,r)),(0,t.jsx)("div",{className:"flex flex-col items-center",children:l(s,r)})}})}},6597:(e,r,s)=>{s.d(r,{Q:()=>t,f:()=>l});var a=s(9137);const t={className:(0,a.BG)(""),hide:(0,a.Ue)(!1),dark:(0,a.Ue)(!1),shadow:(0,a.Ue)(!1),unstyled:(0,a.Ue)(!1),animated:(0,a.Ue)(!0),disabled:(0,a.Ue)(!1),hover:(0,a.Ue)(!0),a11y:(0,a.Ue)(!0),a11yLabel:(0,a.BG)("")},l=[["animated","dark","shadow"],["className","unstyled","hover","disabled"],["hide","a11y","a11yLabel"]]},1123:(e,r,s)=>{s.d(r,{B:()=>l,S:()=>t});var a=s(6742);const t=()=>{const{t:e}=(0,a.B)("common");return e},l=()=>{const{t:e}=(0,a.B)("overview");return e}},8912:(e,r,s)=>{s.r(r),s.d(r,{default:()=>m});var a=s(9137);s(9950);const t=s.p+"static/media/react.bdbe905b8b87c8b1a529d633c21c0f9a.svg";const l=s.p+"static/media/redux.52534f628007c9af2016f3efde820fe0.svg";var c=s(6597),n=s(5971),o=s(4477),i=s(6827),d=s(4414);const m=()=>(0,d.jsx)(o.h,{name:"Spinner",translations:!0,render:(e,r)=>{const s=e("props_value_notSet"),o=e("props_value_custom"),m=e("props_statuses_custom");return(0,d.jsx)(i.A,{label:r,props:{value:(0,a.KQ)({[s]:void 0,success:"success",error:"error",loading:"loading"}),[m]:(0,a.Ue)(!1),[o]:(0,a.KQ)({[s]:void 0,react:"react",redux:"redux"}),...c.Q},rows:[["value",m,o],...c.f],parseProps:e=>{let r={...e};return delete r[m],delete r[o],e[m]?(r.statuses={react:(0,d.jsx)("div",{style:{width:"8rem",height:"8rem"},children:(0,d.jsx)("img",{src:t,width:"125px",height:"125px",alt:""})}),redux:(0,d.jsx)("div",{style:{width:"8rem",height:"8rem"},children:(0,d.jsx)("img",{src:l,alt:"",width:"125px",height:"125px"})})},r.value=e[o]):(r.statuses=void 0,r.value=e.value),r},children:n.y$})}})}}]);