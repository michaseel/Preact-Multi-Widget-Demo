!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="pwNi")}({"0KTW":function(e,t,n){var r=n("wokU");"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n("BMrJ")(r,o);r.locals&&(e.exports=r.locals)},BMrJ:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(l(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],c=i[2],u=i[3],l={css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function i(e,t){var n=_(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=y++;n=m||(m=a(t)),r=f.bind(null,n,u,!1),o=f.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=d.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=g(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),_=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,y=0,b=[],g=n("DRTY");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=h[a.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},BtxX:function(e){!function(t){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}s(t.promise,r)})}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}var f=setTimeout;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new u(e,t,r)),r},o.all=function(e){return new o(function(t,n){function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(e,t)},n)}o[e]=s,0==--i&&t(o)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,s=0;s<o.length;s++)r(s,o[s])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=o:t.Promise||(t.Promise=o)}(this)},DRTY:function(e){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},DUrW:function(e,t,n){t=e.exports=n("lcwS")(!0),t.push([e.i,"body,html{font:14px/1.21 Helvetica Neue,arial,sans-serif;font-weight:400}h1{text-align:center}","",{version:3,sources:["/Users/michaelseel/dev/EXAMPLE/Preact-Multi-Widget/search/src/components/hello-world/style.scss"],names:[],mappings:"AAAA,UACC,+CACA,eAAgB,CAChB,GAGA,iBAAkB,CAClB",file:"style.scss",sourcesContent:["html, body {\n\tfont: 14px/1.21 'Helvetica Neue', arial, sans-serif;\n\tfont-weight: 400;\n}\n\nh1 {\n\ttext-align: center;\n}\n"],sourceRoot:""}])},JkW7:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n("KM04"),u=n.n(c),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},p=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},d=function(e,t){void 0===t&&(t={});var n=e.attributes,r=l({},t);return Object.keys(n).forEach(function(e){if(n.hasOwnProperty(e)){var t=n[e].name;if(!t||"string"!=typeof t)return!1;var o=t.split(/(data-props?-)/).pop()||"";if(o=f(o),t!==o){r[o]=n[e].nodeValue}}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}l(r,t)}}),r},h=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}}),n},v=function(e){var t=e.selector,n=e.inline,r=e.clientSpecified,o=[],i=p();if(!0===n){o.push(i.parentNode)}return!0!==r||t||(t=h(i)),t&&[].forEach.call(document.querySelectorAll(t),function(e){o.push(e)}),o},_=function(e,t,n,r,o){t.forEach(function(t){var i=t;if(!i._habitat){i._habitat=!0;var s=d(t,o)||o;return r&&(i.innerHTML=""),u.a.render(u.a.h(e,s),i,n)}})},m=function(e){var t=e;return{render:function(e){void 0===e&&(e={});var n=e.selector;void 0===n&&(n=null);var r=e.inline;void 0===r&&(r=!1);var o=e.clean;void 0===o&&(o=!1);var i=e.clientSpecified;void 0===i&&(i=!1);var s=e.defaultProps;void 0===s&&(s={});var a=v({selector:n,inline:r,clientSpecified:i}),c=function(){if(a.length>0){var e=v({selector:n,inline:r,clientSpecified:i});return _(t,e,null,o,s)}};c(),document.addEventListener("DOMContentLoaded",c),document.addEventListener("load",c)}}},y=m,b=(n("fSYV"),function(e){function t(){return r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(e){return Object(c.h)("div",null,Object(c.h)("h1",{style:{color:e.color}},"Hello, Search!"))},t}(c.Component)),g=(n("0KTW"),function(e){function t(){return i(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(e){var t=e.alertMessage,n=e.text;return Object(c.h)("div",null,Object(c.h)("button",{onClick:function(){return alert(t)}},n))},t}(c.Component));n("m+Gh");y(b).render({selector:'[data-widget-host="search"]',clean:!0}),y(g).render({selector:'[data-widget-host="button"]',clean:!0})},KM04:function(e){!function(){"use strict";function t(e,t){var n,r,o,i,s=B;for(i=arguments.length;i-- >2;)O.push(arguments[i]);for(t&&null!=t.children&&(O.length||O.push(t.children),delete t.children);O.length;)if((r=O.pop())&&void 0!==r.pop)for(i=r.length;i--;)O.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?s[s.length-1]+=r:s===B?s=[r]:s.push(r),n=o;var a=new k;return a.nodeName=e,a.children=s,a.attributes=null==t?void 0:t,a.key=null==t?void 0:t.key,void 0!==N.vnode&&N.vnode(a),a}function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e,r){return t(e.nodeName,n(n({},e.attributes),r),arguments.length>2?[].slice.call(arguments,2):e.children)}function o(e){!e.__d&&(e.__d=!0)&&1==L.push(e)&&(N.debounceRendering||E)(i)}function i(){var e,t=L;for(L=[];e=t.pop();)e.__d&&C(e)}function s(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&a(e,t.nodeName):n||e._componentConstructor===t.nodeName}function a(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=n({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function u(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function l(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===T.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,p,s):e.removeEventListener(t,p,s),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var a=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function p(e){return this.__l[e.type](N.event&&N.event(e)||e)}function d(){for(var e;e=P.pop();)N.afterMount&&N.afterMount(e),e.componentDidMount&&e.componentDidMount()}function h(e,t,n,r,o,i){R++||(M=null!=o&&void 0!==o.ownerSVGElement,W=null!=e&&!("__preactattr_"in e));var s=v(e,t,n,r,i);return o&&s.parentNode!==o&&o.appendChild(s),--R||(W=!1,i||d()),s}function v(e,t,n,r,o){var i=e,s=M;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0))),i.__preactattr_=!0,i;var c=t.nodeName;if("function"==typeof c)return A(e,t,n,r);if(M="svg"===c||"foreignObject"!==c&&M,c+="",(!e||!a(e,c))&&(i=u(c,M),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0)}var l=i.firstChild,f=i.__preactattr_,p=t.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!W&&p&&1===p.length&&"string"==typeof p[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=p[0]&&(l.nodeValue=p[0]):(p&&p.length||null!=l)&&_(i,p,n,r,W||null!=f.dangerouslySetInnerHTML),b(i,t.attributes,f),M=s,i}function _(e,t,n,r,o){var i,a,c,u,f,p=e.childNodes,d=[],h={},_=0,y=0,b=p.length,g=0,w=t?t.length:0;if(0!==b)for(var x=0;x<b;x++){var C=p[x],A=C.__preactattr_,j=w&&A?C._component?C._component.__k:A.key:null;null!=j?(_++,h[j]=C):(A||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(d[g++]=C)}if(0!==w)for(var x=0;x<w;x++){u=t[x],f=null;var j=u.key;if(null!=j)_&&void 0!==h[j]&&(f=h[j],h[j]=void 0,_--);else if(y<g)for(i=y;i<g;i++)if(void 0!==d[i]&&s(a=d[i],u,o)){f=a,d[i]=void 0,i===g-1&&g--,i===y&&y++;break}f=v(f,u,n,r),c=p[x],f&&f!==e&&f!==c&&(null==c?e.appendChild(f):f===c.nextSibling?l(c):e.insertBefore(f,c))}if(_)for(var x in h)void 0!==h[x]&&m(h[x],!1);for(;y<=g;)void 0!==(f=d[g--])&&m(f,!1)}function m(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||l(e),y(e))}function y(e){for(e=e.lastChild;e;){var t=e.previousSibling;m(e,!0),e=t}}function b(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||f(e,r,n[r],n[r]=void 0,M);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||f(e,r,n[r],n[r]=t[r],M)}function g(e,t,n){var r,o=F.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),U.call(r,t,n)):(r=new U(t,n),r.constructor=e,r.render=w);o--;)if(F[o].constructor===e)return r.__b=F[o].__b,F.splice(o,1),r;return r}function w(e,t,n){return this.constructor(e,n)}function x(e,t,n,r,i){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===N.syncComponentUpdates&&e.base?o(e):C(e,1,i)),e.__r&&e.__r(e))}function C(e,t,r,o){if(!e.__x){var i,s,a,u=e.props,l=e.state,f=e.context,p=e.__p||u,v=e.__s||l,_=e.__c||f,y=e.base,b=e.__b,w=y||b,A=e._component,U=!1,S=_;if(e.constructor.getDerivedStateFromProps&&(l=n(n({},l),e.constructor.getDerivedStateFromProps(u,l)),e.state=l),y&&(e.props=p,e.state=v,e.context=_,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,l,f)?U=!0:e.componentWillUpdate&&e.componentWillUpdate(u,l,f),e.props=u,e.state=l,e.context=f),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!U){i=e.render(u,l,f),e.getChildContext&&(f=n(n({},f),e.getChildContext())),y&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(p,v));var k,O,B=i&&i.nodeName;if("function"==typeof B){var E=c(i);s=A,s&&s.constructor===B&&E.key==s.__k?x(s,E,1,f,!1):(k=s,e._component=s=g(B,E,f),s.__b=s.__b||b,s.__u=e,x(s,E,0,f,!1),C(s,1,r,!0)),O=s.base}else a=w,k=A,k&&(a=e._component=null),(w||1===t)&&(a&&(a._component=null),O=h(a,i,f,r||!y,w&&w.parentNode,!0));if(w&&O!==w&&s!==A){var T=w.parentNode;T&&O!==T&&(T.replaceChild(O,w),k||(w._component=null,m(w,!1)))}if(k&&j(k),e.base=O,O&&!o){for(var L=e,M=e;M=M.__u;)(L=M).base=O;O._component=L,O._componentConstructor=L.constructor}}for(!y||r?P.unshift(e):U||(e.componentDidUpdate&&e.componentDidUpdate(p,v,S),N.afterUpdate&&N.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);R||o||d()}}function A(e,t,n,r){for(var o=e&&e._component,i=o,s=e,a=o&&e._componentConstructor===t.nodeName,u=a,l=c(t);o&&!u&&(o=o.__u);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(x(o,l,3,n,r),e=o.base):(i&&!a&&(j(i),e=s=null),o=g(t.nodeName,l,n),e&&!o.__b&&(o.__b=e,s=null),x(o,l,1,n,r),e=o.base,s&&e!==s&&(s._component=null,m(s,!1))),e}function j(e){N.beforeUnmount&&N.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?j(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,l(t),F.push(e),y(t)),e.__r&&e.__r(null)}function U(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function S(e,t,n){return h(n,e,{},!1,t,!1)}var k=function(){},N={},O=[],B=[],E="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,T=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,L=[],P=[],R=0,M=!1,W=!1,F=[];n(U.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),o(this)},forceUpdate:function(e){e&&this.__h.push(e),C(this,2)},render:function(){}});var D={h:t,createElement:t,cloneElement:r,Component:U,render:S,rerender:i,options:N};e.exports=D}()},QAmr:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){function o(){var e,t=[],n=[],r={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,i,s){t.push(i=i.toLowerCase()),n.push([i,s]),e=r[i],r[i]=e?e+","+s:s}),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:o,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}var i=new XMLHttpRequest;i.open(t.method||"get",e,!0);for(var s in t.headers)i.setRequestHeader(s,t.headers[s]);i.withCredentials="include"==t.credentials,i.onload=function(){n(o())},i.onerror=r,i.send(t.body)})}},VS7n:function(e,t,n){e.exports=window.fetch||(window.fetch=n("QAmr").default||n("QAmr"))},fSYV:function(e,t,n){var r=n("DUrW");"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n("BMrJ")(r,o);r.locals&&(e.exports=r.locals)},h6ac:function(e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},lcwS:function(e){function t(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},"m+Gh":function(e,t,n){"use strict";(function(e){e.Promise||(e.Promise=n("BtxX")),e.fetch||(e.fetch=n("VS7n"))}).call(t,n("h6ac"))},pwNi:function(e,t,n){"use strict";var r=n("KM04"),o=function(e){return e&&e.default?e.default:e};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,s=function(){var e=o(n("JkW7"));i=(0,r.render)((0,r.h)(e),document.body,i)};s()}},wokU:function(e,t,n){t=e.exports=n("lcwS")(!0),t.push([e.i,"button{border:3px solid #0e83cd;color:#0e83cd;background:none;cursor:pointer;padding:25px 80px;display:inline-block;margin:15px 30px;text-transform:uppercase;letter-spacing:1px;outline:none;position:relative;-webkit-transition:all .3s;transition:all .3s;text-rendering:auto;word-spacing:normal;text-indent:0;text-shadow:none;font:700 11px system-ui;-webkit-writing-mode:horizontal-tb!important;-webkit-appearance:button}","",{version:3,sources:["/Users/michaelseel/dev/EXAMPLE/Preact-Multi-Widget/search/src/components/ButtonWidget/style.scss"],names:[],mappings:"AACA,OACE,yBACA,cACA,gBACA,eACA,kBACA,qBACA,iBACA,yBACA,mBACA,aACA,kBACA,2BACA,mBAEA,oBACA,oBACA,cACA,iBACA,wBACA,6CACA,yBAA0B,CACzB",file:"style.scss",sourcesContent:["\nbutton {\n  border: 3px solid #0e83cd;\n  color: #0e83cd;\n  background: none;\n  cursor: pointer;\n  padding: 25px 80px;\n  display: inline-block;\n  margin: 15px 30px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  outline: none;\n  position: relative;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s;\n  text-rendering: auto;\n  word-spacing: normal;\n  text-indent: 0px;\n  text-shadow: none;\n  font: 700 11px system-ui;\n  -webkit-writing-mode: horizontal-tb !important;\n  -webkit-appearance: button;\n  }\n"],sourceRoot:""}])}})});
//# sourceMappingURL=bundle.js.map