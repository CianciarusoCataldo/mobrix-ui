"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[376],{1592:function(e,n,r){var t=r(1413),a=r(6352),c=r(2591),o=r(1449),i=r(6417);n.Z=function(e){var n=(0,a.v9)(c.N2);return(0,i.jsx)(o.__,(0,t.Z)((0,t.Z)({},e),{},{dark:n}))}},1188:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(6123),a=r.n(t),c=r(1449),o=r(7313),i=r(196),s=r(6417),l=(0,i.EN)((function(e){var n=e.children,r=e.location.pathname;return(0,o.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,s.jsx)("div",{id:"scroll-manager",children:n||null})})),u=function(e){var n=e.className,r=e.children;return(0,s.jsx)(l,{children:(0,s.jsx)(c.W2,{animated:!0,unstyled:!0,className:a()("m-2",n),children:r})})}},5950:function(e,n,r){r.d(n,{L:function(){return d}});var t=r(4240),a=r(6352),c=r(6036),o=r(1449),i=r(1592),s=r(1188),l=r(1650),u=r(6417),d=function(e){var n=e.children,r=e.name,d=e.render,m=e.props,f=e.translations,h=(0,c.M)(),p=(0,t.$)(f?r.toLowerCase():"common").t,x=h("component",{componentName:r}),v=(0,a.v9)(l.sQ);return(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(i.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:x}),(0,u.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,u.jsx)("iframe",{className:"w-full h-[30rem]",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(v[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),n,d&&d(p,x),(0,u.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,u.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),m&&(0,u.jsx)(o.iA,{headers:!0,rows:m})]})]})}},8314:function(e,n,r){var t=r(1413),a=r(9325),c=r(6417);n.Z=function(e){var n=e.rows,r=e.props,o=e.children,i=e.parseProps,s=e.label,l=e.startColor;return(0,c.jsx)(a.B9,{props:r,rows:n,label:s,startColor:l,children:function(e,n){var r=(0,t.Z)({},e);return i&&(r=i(r,n)),(0,c.jsx)("div",{className:"flex flex-col items-center",children:o(r,n)})}})}},9399:function(e,n,r){r.d(n,{W:function(){return a},c:function(){return c}});var t=r(9325),a={className:(0,t.VV)(""),hide:(0,t.Hw)(!1),dark:(0,t.Hw)(!1),shadow:(0,t.Hw)(!1),unstyled:(0,t.Hw)(!1),animated:(0,t.Hw)(!0),a11y:(0,t.Hw)(!0),hover:(0,t.Hw)(!0),a11yLabel:(0,t.VV)("")},c=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},6036:function(e,n,r){r.d(n,{M:function(){return a},v:function(){return c}});var t=r(4240),a=function(){return(0,t.$)("common").t},c=function(){return(0,t.$)("overview").t}},2084:function(e,n,r){r.r(n);var t=r(3433),a=r(1413),c=r(9325),o=r(5950),i=r(8314),s=r(9399),l=r(1449),u=r(6417);n.default=function(){return(0,u.jsx)(o.L,{name:"Selector",render:function(e,n){return(0,u.jsx)(i.Z,{label:n,props:(0,a.Z)((0,a.Z)({},s.W),{},{value:(0,c.DS)(0),elements:(0,c.xJ)(["Element 1","Element 2"])}),rows:[["value"]].concat((0,t.Z)(s.c)),children:l.Qf})}})}}}]);