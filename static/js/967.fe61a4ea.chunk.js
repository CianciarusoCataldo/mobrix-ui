"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[967],{1592:function(n,e,r){var t=r(1413),o=r(6352),a=r(1269),i=r(1449),s=r(6417);e.Z=function(n){var e=(0,o.v9)(a.N2);return(0,s.jsx)(i.__,(0,t.Z)((0,t.Z)({},n),{},{dark:e}))}},1188:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(6123),o=r.n(t),a=r(1449),i=r(7313),s=r(196),c=r(6417),l=(0,s.EN)((function(n){var e=n.children,r=n.location.pathname;return(0,i.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,c.jsx)("div",{id:"scroll-manager",children:e||null})})),u=function(n){var e=n.className,r=n.children;return(0,c.jsx)(l,{children:(0,c.jsx)(a.W2,{animated:!0,unstyled:!0,className:o()("m-2",e),children:r})})}},5950:function(n,e,r){r.d(e,{L:function(){return l}});var t=r(4240),o=r(6036),a=r(1449),i=r(1592),s=r(1188),c=r(6417),l=function(n){var e=n.children,r=n.name,l=n.render,u=n.props,d=n.translations,m=(0,o.M)(),f=(0,t.$)(d?r.toLowerCase():"common").t,h=m("component",{componentName:r});return(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(i.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:h}),(0,c.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[e,l&&l(f,h),(0,c.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,c.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),u&&(0,c.jsx)(a.iA,{headers:!0,rows:u})]})]})}},8314:function(n,e,r){var t=r(1413),o=r(9325),a=r(6417);e.Z=function(n){var e=n.rows,r=n.props,i=n.children,s=n.parseProps,c=n.label,l=n.startColor;return(0,a.jsx)(o.B9,{props:r,rows:e,label:c,startColor:l,children:function(n,e){var r=(0,t.Z)({},n);return s&&(r=s(r,e)),(0,a.jsx)("div",{className:"flex flex-col items-center",children:i(r,e)})}})}},9399:function(n,e,r){r.d(e,{W:function(){return o},c:function(){return a}});var t=r(9325),o={className:(0,t.VV)(""),hide:(0,t.Hw)(!1),dark:(0,t.Hw)(!1),shadow:(0,t.Hw)(!1),unstyled:(0,t.Hw)(!1),animated:(0,t.Hw)(!0),a11y:(0,t.Hw)(!0),hover:(0,t.Hw)(!0),a11yLabel:(0,t.VV)("")},a=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},6036:function(n,e,r){r.d(e,{M:function(){return o},v:function(){return a}});var t=r(4240),o=function(){return(0,t.$)("common").t},a=function(){return(0,t.$)("overview").t}},7687:function(n,e,r){r.r(e);var t=r(1413),o=r(9399),a=r(9325),i=r(1449),s=r(5950),c=r(8314),l=r(6417);e.default=function(){var n=(0,t.Z)({},o.W);return n.hide=(0,a.xJ)(!0),(0,l.jsx)(s.L,{name:"Drawer",translations:!0,render:function(e,r){return(0,l.jsx)(c.Z,{label:r,startColor:"#C3BBBB",props:(0,t.Z)({position:(0,a.kb)({top:"top","top-left":"top-left","top-right":"top-right",bottom:"bottom","bottom-left":"bottom-left","bottom-right":"bottom-right",left:"left",right:"right"})},n),rows:[["position"],o.c[0],o.c[1],o.c[2].splice(1)],parseProps:function(n,e){return(0,t.Z)((0,t.Z)({},n),{},{onClose:function(){return e((0,t.Z)((0,t.Z)({},n),{},{hide:!0}))},children:(0,l.jsx)(i.aV,{dark:n.dark,className:"p-4",elements:new Array(6).fill("Element ").map((function(n,e){return n+e}))})})},children:function(n,r){var o=e("common_open");return(0,l.jsxs)("div",{children:[(0,l.jsx)(i.zx,{onClick:function(){return r((0,t.Z)((0,t.Z)({},n),{},{hide:!1}))},children:o}),(0,l.jsx)(i.dy,(0,t.Z)({},n))]})}})}})}}}]);