"use strict";(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[578],{2468:function(e,n,r){r(7313);n.Z=r.p+"static/media/off.f7e860b06fd0d8b59a26facad8e37761.svg"},1592:function(e,n,r){var t=r(1413),a=r(6352),s=r(2591),o=r(1449),c=r(6417);n.Z=function(e){var n=(0,a.v9)(s.N2);return(0,c.jsx)(o.__,(0,t.Z)((0,t.Z)({},e),{},{dark:n}))}},1188:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(6123),a=r.n(t),s=r(1449),o=r(7313),c=r(196),i=r(6417),l=(0,c.EN)((function(e){var n=e.children,r=e.location.pathname;return(0,o.useEffect)((function(){document.getElementById("scroll-manager")&&document.getElementById("scroll-manager").scrollIntoView()}),[r]),(0,i.jsx)("div",{id:"scroll-manager",children:n||null})})),u=function(e){var n=e.className,r=e.children;return(0,i.jsx)(l,{children:(0,i.jsx)(s.W2,{animated:!0,unstyled:!0,className:a()("m-2",n),children:r})})}},5950:function(e,n,r){r.d(n,{L:function(){return d}});var t=r(4240),a=r(6352),s=r(6036),o=r(1449),c=r(1592),i=r(1188),l=r(1650),u=r(6417),d=function(e){var n=e.children,r=e.name,d=e.render,m=e.props,f=e.translations,h=(0,s.M)(),p=(0,t.$)(f?r.toLowerCase():"common").t,x=h("component",{componentName:r}),v=(0,a.v9)(l.sQ);return(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(c.Z,{className:"text-4xl mt-12 mb-5 ml-3",children:x}),(0,u.jsxs)("div",{className:"flex flex-col p-3 items-center",children:[(0,u.jsx)("iframe",{className:"w-full h-[30rem]",title:"".concat(r," page"),src:"https://cianciarusocataldo.github.io/".concat(v[r].replace("/mobrix-ui","/mobrix-ui/docs"))}),n,d&&d(p,x),(0,u.jsx)("a",{target:"_blank",href:"https://cianciarusocataldo.github.io/demo-ui",rel:"noreferrer",children:(0,u.jsx)("img",{alt:"",className:"mt-0",src:"https://img.shields.io/badge/powered%20by-demo--ui-orange",height:"25"})}),m&&(0,u.jsx)(o.iA,{headers:!0,rows:m})]})]})}},8314:function(e,n,r){var t=r(1413),a=r(9325),s=r(6417);n.Z=function(e){var n=e.rows,r=e.props,o=e.children,c=e.parseProps,i=e.label,l=e.startColor;return(0,s.jsx)(a.B9,{props:r,rows:n,label:i,startColor:l,children:function(e,n){var r=(0,t.Z)({},e);return c&&(r=c(r,n)),(0,s.jsx)("div",{className:"flex flex-col items-center",children:o(r,n)})}})}},9399:function(e,n,r){r.d(n,{W:function(){return a},c:function(){return s}});var t=r(9325),a={className:(0,t.VV)(""),hide:(0,t.Hw)(!1),dark:(0,t.Hw)(!1),shadow:(0,t.Hw)(!1),unstyled:(0,t.Hw)(!1),animated:(0,t.Hw)(!0),a11y:(0,t.Hw)(!0),hover:(0,t.Hw)(!0),a11yLabel:(0,t.VV)("")},s=[["animated","dark","shadow"],["className","unstyled","hover"],["hide","a11y","a11yLabel"]]},6036:function(e,n,r){r.d(n,{M:function(){return a},v:function(){return s}});var t=r(4240),a=function(){return(0,t.$)("common").t},s=function(){return(0,t.$)("overview").t}},125:function(e,n,r){r.r(n);var t=r(3433),a=r(4942),s=r(1413),o=r(9399),c=r(9325),i=r(2468),l=r(1449),u=r(5950),d=r(8314),m=r(6417);n.default=function(){return(0,m.jsx)(u.L,{translations:!0,name:"List",render:function(e,n){var r,u=e("props",{context:"elements"}),f="Elementi clickabili";return(0,m.jsx)(d.Z,{label:n,props:(0,s.Z)((0,s.Z)({},o.W),{},(r={},(0,a.Z)(r,u,(0,c.DS)(3)),(0,a.Z)(r,f,(0,c.Hw)(!1)),r)),rows:[[u,f]].concat((0,t.Z)(o.c)),parseProps:function(n){var r=(0,s.Z)({},n);delete r[u],delete r[f],r.elements=[],r.elements.push((0,m.jsxs)("div",{className:"flex flex-row",children:[(0,m.jsx)("img",{alt:"",src:i.Z,width:15},"element_image"),(0,m.jsx)("span",{className:"ml-2",children:"Custom element"},"element_label")]}));for(var t=0;t<n[u];++t)r.elements.push(e("props",{context:"elements_single",index:t+1}));return n[f]&&(r.onChange=function(e){return console.log(e)}),r},children:l.aV})}})}}}]);