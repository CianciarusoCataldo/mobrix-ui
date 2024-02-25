/*! For license information please see 8258.bfa8c536.chunk.js.LICENSE.txt */
(self.webpackChunkmobrix_ui_app=self.webpackChunkmobrix_ui_app||[]).push([[8258],{2576:e=>{e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},7960:(e,t,n)=>{var r=n(2576);e.exports=h,e.exports.parse=i,e.exports.compile=function(e,t){return u(i(e,t),t)},e.exports.tokensToFunction=u,e.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,a=0,u="",p=t&&t.delimiter||"/";null!=(n=o.exec(e));){var l=n[0],f=n[1],h=n.index;if(u+=e.slice(a,h),a=h+l.length,f)u+=f[1];else{var d=e[a],v=n[2],y=n[3],m=n[4],g=n[5],b=n[6],x=n[7];u&&(r.push(u),u="");var w=null!=v&&null!=d&&d!==v,E="+"===b||"*"===b,S="?"===b||"*"===b,C=n[2]||p,O=m||g;r.push({name:y||i++,prefix:v||"",delimiter:C,optional:S,repeat:E,partial:w,asterisk:!!x,pattern:O?s(O):x?".*":"[^"+c(C)+"]+?"})}}return a<e.length&&(u+=e.substr(a)),u&&r.push(u),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function u(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"===typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",l(t)));return function(t,o){for(var i="",u=t||{},c=(o||{}).pretty?a:encodeURIComponent,s=0;s<e.length;s++){var p=e[s];if("string"!==typeof p){var l,f=u[p.name];if(null==f){if(p.optional){p.partial&&(i+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be defined')}if(r(f)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=c(f[h]),!n[s].test(l))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?p.prefix:p.delimiter)+l}}else{if(l=p.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):c(f),!n[s].test(l))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+l+'"');i+=p.prefix+l}}else i+=p}return i}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function p(e,t){return e.keys=t,e}function l(e){return e&&e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",u=0;u<e.length;u++){var s=e[u];if("string"===typeof s)a+=c(s);else{var f=c(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+f+h+")*"),a+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var d=c(n.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",p(new RegExp("^"+a,l(n)),t)}function h(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return p(new RegExp("(?:"+r.join("|")+")",l(n)),t)}(e,t,n):function(e,t,n){return f(i(e,n),t,n)}(e,t,n)}},3488:(e,t,n)=>{"use strict";var r=n(3959);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},1942:(e,t,n)=>{e.exports=n(3488)()},3959:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6742:(e,t,n)=>{"use strict";n.d(t,{B:()=>m});var r=n(6369);var o=n(8394),i=n(6562);function a(e,t){return(0,r.A)(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,t)||(0,o.A)(e,t)||(0,i.A)()}var u=n(4467),c=n(9950),s=n(6955);function p(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var l={};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),p.apply(void 0,t))}function h(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e,t){var n=(0,c.useRef)();return(0,c.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,c.useContext)(s.gJ)||{},o=r.i18n,i=r.defaultNS,u=n||o||(0,s.TO)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.hz),!u){f("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},l=[p,{},!1];return l.t=p,l.i18n={},l.ready=!1,l}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=v(v(v({},(0,s.rV)()),u.options.react),t),m=d.useSuspense,g=d.keyPrefix,b=e||i||u.options&&u.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(b);var x=(u.isInitialized||u.initializedStoreOnce)&&b.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!a(r,e)||o&&!a(i,e)))}(e,t,n):(f("i18n.languages were undefined or empty",t.languages),!0)}(e,u,d)}));function w(){return u.getFixedT(null,"fallback"===d.nsMode?b:b[0],g)}var E=a((0,c.useState)(w),2),S=E[0],C=E[1],O=b.join(),_=y(O),A=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=d.bindI18n,t=d.bindI18nStore;function n(){A.current&&C(w)}return A.current=!0,x||m||h(u,b,(function(){A.current&&C(w)})),x&&_&&_!==O&&A.current&&C(w),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){A.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,O]);var R=(0,c.useRef)(!0);(0,c.useEffect)((function(){A.current&&!R.current&&C(w),R.current=!1}),[u,g]);var k=[S,u,x];if(k.t=S,k.i18n=u,k.ready=x,x)return k;if(!x&&!m)return k;throw new Promise((function(e){h(u,b,(function(){e()}))}))}},5627:(e,t,n)=>{"use strict";n.d(t,{rd:()=>R,qh:()=>U,Ix:()=>E,dO:()=>D,y:()=>B});var r=n(3662);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.A)(e,t)}var i=n(9950),a=n(1942),u=n.n(a),c=n(125),s=n(7033),p=n(8168),l=n(7960),f=n.n(l);n(4390);function h(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var d=n(3876),v=n.n(d),y=1073741823,m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{};var g=i.createContext||function(e,t){var n,r,a="__create-react-context-"+function(){var e="__global_unique_id__";return m[e]=(m[e]||0)+1}()+"__",c=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}(t.props.value),t}o(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[a]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?n=0:(n="function"===typeof t?t(r,o):y,0!==(n|=0)&&this.emitter.set(e.value,n))}var i,a},r.render=function(){return this.props.children},n}(i.Component);c.childContextTypes=((n={})[a]=u().object.isRequired,n);var s=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).observedBits=void 0,e.state={value:e.getValue()},e.onUpdate=function(t,n){0!==((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}o(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?y:t},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?y:e},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(i.Component);return s.contextTypes=((r={})[a]=u().object,r),{Provider:c,Consumer:s}},b=function(e){var t=g();return t.displayName=e,t},x=b("Router-History"),w=b("Router"),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._pendingLocation=e}))),n}o(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(t){e._isMounted&&e.setState({location:t})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return i.createElement(w.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.createElement(x.Provider,{children:this.props.children||null,value:this.props.history}))},t}(i.Component);i.Component;var S=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(i.Component);var C={},O=1e4,_=0;function A(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(C[e])return C[e];var t=f().compile(e);return _<O&&(C[e]=t,_++),t}(e)(t,{pretty:!0})}function R(e){var t=e.computedMatch,n=e.to,r=e.push,o=void 0!==r&&r;return i.createElement(w.Consumer,null,(function(e){e||(0,s.A)(!1);var r=e.history,a=e.staticContext,u=o?r.push:r.replace,l=(0,c.yJ)(t?"string"===typeof n?A(n,t.params):(0,p.A)({},n,{pathname:A(n.pathname,t.params)}):n);return a?(u(l),null):i.createElement(S,{onMount:function(){u(l)},onUpdate:function(e,t){var n=(0,c.yJ)(t.to);(0,c.Fu)(n,(0,p.A)({},l,{key:n.key}))||u(l)},to:n})}))}var k={},j=1e4,T=0;function P(e,t){void 0===t&&(t={}),("string"===typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,u=void 0!==a&&a,c=n.sensitive,s=void 0!==c&&c;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=k[n]||(k[n]={});if(r[e])return r[e];var o=[],i={regexp:f()(e,o,t),keys:o};return T<j&&(r[e]=i,T++),i}(n,{end:i,strict:u,sensitive:s}),o=r.regexp,a=r.keys,c=o.exec(e);if(!c)return null;var p=c[0],l=c.slice(1),h=e===p;return i&&!h?null:{path:n,url:"/"===n&&""===p?"/":p,isExact:h,params:a.reduce((function(e,t,n){return e[t.name]=l[n],e}),{})}}),null)}var U=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this;return i.createElement(w.Consumer,null,(function(t){t||(0,s.A)(!1);var n=e.props.location||t.location,r=e.props.computedMatch?e.props.computedMatch:e.props.path?P(n.pathname,e.props):t.match,o=(0,p.A)({},t,{location:n,match:r}),a=e.props,u=a.children,c=a.component,l=a.render;return Array.isArray(u)&&function(e){return 0===i.Children.count(e)}(u)&&(u=null),i.createElement(w.Provider,{value:o},o.match?u?"function"===typeof u?u(o):u:c?i.createElement(c,o):l?l(o):null:"function"===typeof u?u(o):null)}))},t}(i.Component);function I(e){return"/"===e.charAt(0)?e:"/"+e}function N(e,t){if(!e)return t;var n=I(e);return 0!==t.pathname.indexOf(n)?t:(0,p.A)({},t,{pathname:t.pathname.substr(n.length)})}function L(e){return"string"===typeof e?e:(0,c.AO)(e)}function M(e){return function(){(0,s.A)(!1)}}function $(){}i.Component;var D=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this;return i.createElement(w.Consumer,null,(function(t){t||(0,s.A)(!1);var n,r,o=e.props.location||t.location;return i.Children.forEach(e.props.children,(function(e){if(null==r&&i.isValidElement(e)){n=e;var a=e.props.path||e.props.from;r=a?P(o.pathname,(0,p.A)({},e.props,{path:a})):t.match}})),r?i.cloneElement(n,{location:o,computedMatch:r}):null}))},t}(i.Component);function B(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(t){var n=t.wrappedComponentRef,r=h(t,["wrappedComponentRef"]);return i.createElement(w.Consumer,null,(function(t){return t||(0,s.A)(!1),i.createElement(e,(0,p.A)({},r,t,{ref:n}))}))};return n.displayName=t,n.WrappedComponent=e,v()(n,e)}i.useContext},330:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case p:case l:case i:case u:case a:case h:return e;default:switch(e=e&&e.$$typeof){case s:case f:case y:case v:case c:return e;default:return t}}case o:return t}}}function E(e){return w(e)===l}},4390:(e,t,n)=>{"use strict";n(330)},2654:(e,t,n)=>{"use strict";var r=n(9950),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,p=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:p,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},4414:(e,t,n)=>{"use strict";e.exports=n(2654)},8738:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},4939:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var r=n(9950),o=n(5627),i=n(125),a=n(2107),u=function(e){var t=e.config,n=(null===t||void 0===t?void 0:t.routes)||{},i=(null===t||void 0===t?void 0:t.homePage)||"",a=(null===t||void 0===t?void 0:t.render)||function(){return function(){return r.createElement("div",null)}};return r.createElement(o.dO,null,Object.keys(n).map((function(e){return r.createElement(o.qh,{component:a(e),key:e,exact:!0,path:n[e]})})),r.createElement(o.rd,{to:i}))},c=function(e){var t,n=e.creatorConfig,a=(null===(t=n.pageRouter)||void 0===t?void 0:t.history)||(0,i.zR)();return r.createElement(o.Ix,{history:a},r.createElement(u,{config:n.pageRouter}))},s=(0,a.y)("mobrix-designer-router",(function(){return{internalComponent:c,field:function(e){var t=e.pageRouter||{},n=t.history,r=t.homePage,o=t.routes;return{name:"pageRouter",content:{render:t.render,routes:o,homePage:r,history:n}}}}}))},2107:(e,t,n)=>{"use strict";n.d(t,{y:()=>r});var r=function(e,t){function n(){return t?t():{}}return n.toString=function(){return"mobrix-designer plugin "+e},n.type="mobrix-designer-plugin",n.feature=e,n.match=function(t){return t.feature===e},n}}}]);