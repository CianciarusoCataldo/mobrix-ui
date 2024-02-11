"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[747],{1592:function(e,t,r){var n=r(1413),a=r(6352),o=r(2591),s=r(1449),i=r(6417);t.Z=function(e){var t=(0,a.v9)(o.N2);return(0,i.jsx)(s.__,(0,n.Z)((0,n.Z)({},e),{},{dark:t}))}},1188:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(6123),a=r.n(n),o=r(1449),s=r(7313),i=r(196),c=r(6417),l=(0,i.EN)((function(e){var t=e.children,r=e.location.pathname;return(0,s.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,c.jsx)("div",{id:"scroll-manager",children:t||null})})),u=function(e){var t=e.className,r=e.children;return(0,c.jsx)(l,{children:(0,c.jsx)(o.W2,{animated:!0,unstyled:!0,className:a()("m-2",t),children:r})})}},5950:function(e,t,r){r.d(t,{L:function(){return d}});var n=r(4240),a=r(6352),o=r(6036),s=r(1449),i=r(1592),c=r(1188),l=r(1650),u=r(6417),d=function(e){var t=e.children,r=e.name,d=e.render,m=e.props,h=e.translations,f=(0,o.M)(),p=(0,n.$)(h?r.toLowerCase():"common").t,w=f("component",{componentName:r}),y=(0,a.v9)(l.sQ);return(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(i.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:w}),(0,u.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,u.jsx)("iframe",{className:"w-full h-[30rem]",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(y[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),t,d&&d(p,w),(0,u.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,u.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),m&&(0,u.jsx)(s.iA,{headers:!0,rows:m})]})]})}},8314:function(e,t,r){var n=r(1413),a=r(9325),o=r(6417);t.Z=function(e){var t=e.rows,r=e.props,s=e.children,i=e.parseProps,c=e.label,l=e.startColor;return(0,o.jsx)(a.B9,{props:r,rows:t,label:c,startColor:l,children:function(e,t){var r=(0,n.Z)({},e);return i&&(r=i(r,t)),(0,o.jsx)("div",{className:"flex flex-col items-center",children:s(r,t)})}})}},9399:function(e,t,r){r.d(t,{W:function(){return a},c:function(){return o}});var n=r(9325),a={className:(0,n.VV)(""),hide:(0,n.Hw)(!1),dark:(0,n.Hw)(!1),shadow:(0,n.Hw)(!1),unstyled:(0,n.Hw)(!1),animated:(0,n.Hw)(!0),a11y:(0,n.Hw)(!0),hover:(0,n.Hw)(!0),a11yLabel:(0,n.VV)("")},o=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},6036:function(e,t,r){r.d(t,{M:function(){return a},v:function(){return o}});var n=r(4240),a=function(){return(0,n.$)("common").t},o=function(){return(0,n.$)("overview").t}},1768:function(e,t,r){r.r(t);var n=r(3433),a=r(1413),o=r(9325),s=r(1449),i=r(5950),c=r(9399),l=r(8314),u=r(6417);t.default=function(){return(0,u.jsx)(i.L,{translations:!0,name:"Calendar",render:function(e,t){return(0,u.jsx)(l.Z,{label:t,startColor:"#C3BBBB",props:(0,a.Z)({month:(0,o.DS)(0),year:(0,o.DS)(0),"Start month":(0,o.Hw)(!1),"Start year":(0,o.Hw)(!1),"Custom days":(0,o.Hw)(!0),"Custom months":(0,o.Hw)(!0),hideArrows:(0,o.Hw)(!1),fromToday:(0,o.Hw)(!0),dayLabel:(0,o.Hw)(!0)},c.W),rows:[["fromToday","dayLabel"],["Start year","year"],["Start month","month"],["Custom days","Custom months","hideArrows"]].concat((0,n.Z)(c.c)),parseProps:function(t){var r=(0,a.Z)({},t);return delete r["Custom days"],delete r["Custom months"],delete r["Start month"],delete r["Start year"],delete r.year,delete r.month,r.value={},r.startMonth=t["Start month"]?t.month:void 0,r.startYear=t["Start year"]?t.year:void 0,t["Custom days"]&&(r.days=e("days").split("-")),t["Custom months"]&&(r.months=e("months").split("-")),r},children:s.f})}})}}}]);