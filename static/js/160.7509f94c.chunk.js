"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[160],{1592:function(e,n,r){var t=r(1413),i=r(6352),a=r(2591),c=r(1449),o=r(6417);n.Z=function(e){var n=(0,i.v9)(a.N2);return(0,o.jsx)(c.__,(0,t.Z)((0,t.Z)({},e),{},{dark:n}))}},1188:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(6123),i=r.n(t),a=r(1449),c=r(7313),o=r(196),s=r(6417),l=(0,o.EN)((function(e){var n=e.children,r=e.location.pathname;return(0,c.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,s.jsx)("div",{id:"scroll-manager",children:n||null})})),u=function(e){var n=e.className,r=e.children;return(0,s.jsx)(l,{children:(0,s.jsx)(a.W2,{animated:!0,unstyled:!0,className:i()("m-2",n),children:r})})}},5950:function(e,n,r){r.d(n,{L:function(){return d}});var t=r(4240),i=r(6352),a=r(6036),c=r(1449),o=r(1592),s=r(1188),l=r(1650),u=r(6417),d=function(e){var n=e.children,r=e.name,d=e.render,m=e.props,h=e.translations,f=(0,a.M)(),x=(0,t.$)(h?r.toLowerCase():"common").t,p=f("component",{componentName:r}),v=(0,i.v9)(l.sQ);return(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(o.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:p}),(0,u.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,u.jsx)("iframe",{className:"w-full h-[30rem] mb-2",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(v[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),n,d&&d(x,p),(0,u.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,u.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),m&&(0,u.jsx)(c.iA,{headers:!0,rows:m})]})]})}},9399:function(e,n,r){r.d(n,{W:function(){return i},c:function(){return a}});var t=r(9325),i={className:(0,t.VV)(""),hide:(0,t.Hw)(!1),dark:(0,t.Hw)(!1),shadow:(0,t.Hw)(!1),unstyled:(0,t.Hw)(!1),animated:(0,t.Hw)(!0),a11y:(0,t.Hw)(!0),hover:(0,t.Hw)(!0),a11yLabel:(0,t.VV)("")},a=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},6036:function(e,n,r){r.d(n,{M:function(){return i},v:function(){return a}});var t=r(4240),i=function(){return(0,t.$)("common").t},a=function(){return(0,t.$)("overview").t}},5183:function(e,n,r){r.r(n),r.d(n,{ModalPage:function(){return d}});var t=r(3433),i=r(4942),a=r(1413),c=r(9325),o=r(1449),s=r(5950),l=r(9399),u=r(6417),d=function(){return(0,u.jsx)(s.L,{name:"Modal",translations:!0,render:function(e,n){var r,s=e("props_closeButton"),d=e("props_openButton");return(0,u.jsx)(c.B9,{startColor:"#999",label:n,props:(0,a.Z)((0,a.Z)((r={title:(0,c.VV)("title"),children:(0,c.VV)("children")},(0,i.Z)(r,s,(0,c.Hw)(!0)),(0,i.Z)(r,"closeOutside",(0,c.Hw)(!0)),r),l.W),{},{hide:(0,c.xJ)(!0)}),rows:[["title","children","closeOutside",s]].concat((0,t.Z)(l.c)),children:function(e,n){var r=(0,a.Z)({},e);return delete r[s],(0,u.jsxs)("div",{className:"flex flex-col items-center",children:[(0,u.jsx)(o.zx,{onClick:function(){return n((0,a.Z)((0,a.Z)({},e),{},{hide:!1}))},children:d}),(0,u.jsx)(o.u_,(0,a.Z)((0,a.Z)({},r),{},{children:(0,u.jsx)("div",{children:r.children}),onClose:e[s]&&function(){return n((0,a.Z)((0,a.Z)({},e),{},{hide:!0}))}}))]})}})}})};n.default=d}}]);