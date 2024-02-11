"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[844],{1592:function(e,r,t){var n=t(1413),a=t(6352),s=t(2591),i=t(1449),c=t(6417);r.Z=function(e){var r=(0,a.v9)(s.N2);return(0,c.jsx)(i.__,(0,n.Z)((0,n.Z)({},e),{},{dark:r}))}},1188:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(6123),a=t.n(n),s=t(1449),i=t(7313),c=t(196),o=t(6417),l=(0,c.EN)((function(e){var r=e.children,t=e.location.pathname;return(0,i.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[t]),(0,o.jsx)("div",{id:"scroll-manager",children:r||null})})),u=function(e){var r=e.className,t=e.children;return(0,o.jsx)(l,{children:(0,o.jsx)(s.W2,{animated:!0,unstyled:!0,className:a()("m-2",r),children:t})})}},5950:function(e,r,t){t.d(r,{L:function(){return d}});var n=t(4240),a=t(6352),s=t(6036),i=t(1449),c=t(1592),o=t(1188),l=t(1650),u=t(6417),d=function(e){var r=e.children,t=e.name,d=e.render,m=e.props,h=e.translations,f=(0,s.M)(),p=(0,n.$)(h?t.toLowerCase():"common").t,v=f("component",{componentName:t}),x=(0,a.v9)(l.sQ);return(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(c.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:v}),(0,u.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,u.jsx)("iframe",{className:"w-full h-[30rem]",title:"".concat(t," page"),src:"https://cianciarusocataldo.github.io/".concat(x[t].replace("/mobrix-ui","/mobrix-ui/docs"))}),r,d&&d(p,v),(0,u.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,u.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),m&&(0,u.jsx)(i.iA,{headers:!0,rows:m})]})]})}},8314:function(e,r,t){var n=t(1413),a=t(9325),s=t(6417);r.Z=function(e){var r=e.rows,t=e.props,i=e.children,c=e.parseProps,o=e.label,l=e.startColor;return(0,s.jsx)(a.B9,{props:t,rows:r,label:o,startColor:l,children:function(e,r){var t=(0,n.Z)({},e);return c&&(t=c(t,r)),(0,s.jsx)("div",{className:"flex flex-col items-center",children:i(t,r)})}})}},9399:function(e,r,t){t.d(r,{W:function(){return a},c:function(){return s}});var n=t(9325),a={className:(0,n.VV)(""),hide:(0,n.Hw)(!1),dark:(0,n.Hw)(!1),shadow:(0,n.Hw)(!1),unstyled:(0,n.Hw)(!1),animated:(0,n.Hw)(!0),a11y:(0,n.Hw)(!0),hover:(0,n.Hw)(!0),a11yLabel:(0,n.VV)("")},s=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},6036:function(e,r,t){t.d(r,{M:function(){return a},v:function(){return s}});var n=t(4240),a=function(){return(0,n.$)("common").t},s=function(){return(0,n.$)("overview").t}},428:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(3433),a=t(4942),s=t(1413),i=t(9325);t(7313);var c=t.p+"static/media/react.bdbe905b8b87c8b1a529d633c21c0f9a.svg";var o=t.p+"static/media/redux.52534f628007c9af2016f3efde820fe0.svg",l=t(9399),u=t(1449),d=t(5950),m=t(8314),h=t(6417),f=function(){return(0,h.jsx)(d.L,{name:"Spinner",translations:!0,render:function(e,r){var t,d,f,p=e("props_value_notSet"),v=e("props_value_custom"),x=e("props_statuses_custom");return(0,h.jsx)(m.Z,{label:r,props:(0,s.Z)((f={value:(0,i.kb)((t={},(0,a.Z)(t,p,void 0),(0,a.Z)(t,"success","success"),(0,a.Z)(t,"error","error"),(0,a.Z)(t,"loading","loading"),t))},(0,a.Z)(f,x,(0,i.Hw)(!1)),(0,a.Z)(f,v,(0,i.kb)((d={},(0,a.Z)(d,p,void 0),(0,a.Z)(d,"react","react"),(0,a.Z)(d,"redux","redux"),d))),f),l.W),rows:[["value",x,v]].concat((0,n.Z)(l.c)),parseProps:function(e){var r=(0,s.Z)({},e);return delete r[x],delete r[v],e[x]?(r.statuses={react:(0,h.jsx)("div",{style:{width:"8rem",height:"8rem"},children:(0,h.jsx)("img",{src:c,width:"125px",height:"125px",alt:""})}),redux:(0,h.jsx)("div",{style:{width:"8rem",height:"8rem"},children:(0,h.jsx)("img",{src:o,alt:"",width:"125px",height:"125px"})})},r.value=e[v]):(r.statuses=void 0,r.value=e.value),r},children:u.$j})}})}}}]);