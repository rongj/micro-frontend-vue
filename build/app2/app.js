(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("vue-router"),require("vue")):"function"===typeof define&&define.amd?define(["vue-router","vue"],e):"object"===typeof exports?exports["app2"]=e(require("vue-router"),require("vue")):t["app2"]=e(t["vue-router"],t["vue"])})(window,(function(t,e){return function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=0,a=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&a.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(a.length)a.shift()()}var n={},r={app:0};function o(t){return i.p+"js/"+({"app2-page1":"app2-page1","app2-page2":"app2-page2","app2-page3":"app2-page3"}[t]||t)+"."+{"app2-page1":"fbbe2862","app2-page2":"50f7a846","app2-page3":"4c6967a4"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=c);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=o(t);var f=new Error;u=function(e){a.onerror=a.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,n[1](f)}r[t]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonpapp2"]=window["webpackJsonpapp2"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var f=u;return i(i.s=0)}({0:function(t,e,n){t.exports=n("56d7")},"00ee":function(t,e,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),c=n("fc6a"),u=n("c04e"),a=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),o=r("iterator"),i=!1;try{var c=0,u={next:function(){return{done:!!c++}},return:function(){i=!0}};u[o]=function(){return this},Array.from(u,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(a){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},2266:function(t,e,n){var r=n("825a"),o=n("e95a"),i=n("50c4"),c=n("0366"),u=n("35a1"),a=n("9bdd"),f=function(t,e){this.stopped=t,this.result=e},s=t.exports=function(t,e,n,s,p){var l,d,v,h,b,y,m,g=c(e,n,s?2:1);if(p)l=t;else{if(d=u(t),"function"!=typeof d)throw TypeError("Target is not iterable");if(o(d)){for(v=0,h=i(t.length);h>v;v++)if(b=s?g(r(m=t[v])[0],m[1]):g(t[v]),b&&b instanceof f)return b;return new f(!1)}l=d.call(t)}y=l.next;while(!(m=y.call(l)).done)if(b=a(l,g,m.value,s),"object"==typeof b&&b&&b instanceof f)return b;return new f(!1)};s.stop=function(t){return new f(!0,t)}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),u=n("ce4e"),a=n("e893"),f=n("94ca");t.exports=function(t,e){var n,s,p,l,d,v,h=t.target,b=t.global,y=t.stat;if(s=b?r:y?r[h]||u(h,{}):(r[h]||{}).prototype,s)for(p in e){if(d=e[p],t.noTargetGet?(v=o(s,p),l=v&&v.value):l=s[p],n=f(b?p:h+(y?".":"#")+p,t.forced),!n&&void 0!==l){if(typeof d===typeof l)continue;a(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(s,p,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2626:function(t,e,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),c=n("83ab"),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,u){var a,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,e){return a.call(e),s(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},"2cf4":function(t,e,n){var r,o,i,c=n("da84"),u=n("d039"),a=n("c6b6"),f=n("0366"),s=n("1be4"),p=n("cc12"),l=n("1cdc"),d=c.location,v=c.setImmediate,h=c.clearImmediate,b=c.process,y=c.MessageChannel,m=c.Dispatch,g=0,w={},x="onreadystatechange",j=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},O=function(t){return function(){j(t)}},S=function(t){j(t.data)},P=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};v&&h||(v=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return w[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(g),g},h=function(t){delete w[t]},"process"==a(b)?r=function(t){b.nextTick(O(t))}:m&&m.now?r=function(t){m.now(O(t))}:y&&!l?(o=new y,i=o.port2,o.port1.onmessage=S,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(P)?r=x in p("script")?function(t){s.appendChild(p("script"))[x]=function(){s.removeChild(this),j(t)}}:function(t){setTimeout(O(t),0)}:(r=P,c.addEventListener("message",S,!1))),t.exports={set:v,clear:h}},"2d00":function(t,e,n){var r,o,i=n("da84"),c=n("342f"),u=i.process,a=u&&u.versions,f=a&&a.v8;f?(r=f.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"33e3":function(t,e,n){(function(e){!function(e,n){t.exports=n()}(0,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var n;n=i,t.exports=function(t){if(t.CSS&&t.CSS.escape)return t.CSS.escape;var e=function(t){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var e,n=String(t),r=n.length,o=-1,i="",c=n.charCodeAt(0);++o<r;)0!=(e=n.charCodeAt(o))?i+=e>=1&&e<=31||127==e||0==o&&e>=48&&e<=57||1==o&&e>=48&&e<=57&&45==c?"\\"+e.toString(16)+" ":0==o&&1==r&&45==e||!(e>=128||45==e||95==e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122)?"\\"+n.charAt(o):n.charAt(o):i+="�";return i};return t.CSS||(t.CSS={}),t.CSS.escape=e,e}(n)}));var c={Vue:null,appOptions:null,template:null};function u(t){return t.loadRootComponent?t.loadRootComponent().then((function(e){return t.rootComponent=e})):Promise.resolve()}function a(t,e,n){return Promise.resolve().then((function(){var r=o({},t.appOptions);if(n.domElement&&!r.el&&(r.el=n.domElement),!r.el){var i="single-spa-application:".concat(n.name);r.el="#".concat(CSS.escape(i)," .single-spa-container");var c=document.getElementById(i);if(c||((c=document.createElement("div")).id=i,document.body.appendChild(c)),!c.querySelector(".single-spa-container")){var u=document.createElement("div");u.className="single-spa-container",c.appendChild(u)}e.domEl=c}return r.render||r.template||!t.rootComponent||(r.render=function(e){return e(t.rootComponent)}),r.data||(r.data={}),r.data=o({},r.data,{},n),e.instance=new t.Vue(r),e.instance.bind&&(e.instance=e.instance.bind(e.instance)),e.instance}))}function f(t,e,n){return Promise.resolve().then((function(){var r=o({},t.appOptions.data||{},{},n);for(var i in r)e.instance[i]=r[i]}))}function s(t,e){return Promise.resolve().then((function(){e.instance.$destroy(),e.instance.$el.innerHTML="",delete e.instance,e.domEl&&(e.domEl.innerHTML="",delete e.domEl)}))}return function(e){if("object"!==t(e))throw new Error("single-spa-vue requires a configuration object");var n=o({},c,{},e);if(!n.Vue)throw new Error("single-spa-vuejs must be passed opts.Vue");if(!n.appOptions)throw new Error("single-spa-vuejs must be passed opts.appOptions");var r={};return{bootstrap:u.bind(null,n,r),mount:a.bind(null,n,r),unmount:s.bind(null,n,r),update:f.bind(null,n,r)}}}))}).call(this,n("c8ba"))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),o=n("3f8c"),i=n("b622"),c=i("iterator");t.exports=function(t){if(void 0!=t)return t[c]||t["@@iterator"]||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),c=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=c(e),u=r.length,a=0;while(u>a)o.f(t,n=r[a++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),c=r("unscopables"),u=Array.prototype;void 0==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),o=n("1c0b"),i=n("b622"),c=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[c])?e:o(n)}},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");function r(t,e){if(e||(e=1),"string"!==typeof t||0===t.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!==typeof e||e<=0||!Number.isInteger(e))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let r;try{if(r=window.System.resolve(t),!r)throw Error()}catch(i){throw Error("systemjs-webpack-interop: There is no such module '"+t+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=o(r,e)}function o(t,e){const n=new URL(t),r=new URL(t).pathname;let o=0,i=r.length;while(o!==e&&i>=0){const t=r[--i];"/"===t&&o++}if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+fullUrl);return n.pathname=n.pathname.slice(0,i+1),n.href}r("app2");var i=n("8bbf"),c=n.n(i),u=n("33e3"),a=n.n(u),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._v(" App 2 is working "),n("router-view")],1)},s=[],p=n("2877"),l={},d=Object(p["a"])(l,f,s,!1,null,null,null),v=d.exports,h=(n("d3b7"),n("6389")),b=n.n(h);c.a.use(b.a);var y=[{path:"/app2",redirect:"/app2/page1"},{path:"/app2/page1",name:"app2-page1",component:function(){return n.e("app2-page1").then(n.bind(null,"2b0b"))}},{path:"/app2/page2",name:"app2-page2",component:function(){return n.e("app2-page2").then(n.bind(null,"223d"))}},{path:"/app2/page3",name:"app2-page3",component:function(){return n.e("app2-page3").then(n.bind(null,"e0b6"))}}],m=new b.a({mode:"hash",routes:y}),g=m;n.d(e,"bootstrap",(function(){return x})),n.d(e,"mount",(function(){return j})),n.d(e,"unmount",(function(){return O})),c.a.config.productionTip=!1;var w=a()({Vue:c.a,appOptions:{el:"#app",render:function(t){return t(v)},router:g}}),x=w.bootstrap,j=w.mount,O=w.unmount},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),c=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"60da":function(t,e,n){"use strict";var r=n("83ab"),o=n("d039"),i=n("df75"),c=n("7418"),u=n("d1e7"),a=n("7b0b"),f=n("44ad"),s=Object.assign,p=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||i(s({},e)).join("")!=o}))?function(t,e){var n=a(t),o=arguments.length,s=1,p=c.f,l=u.f;while(o>s){var d,v=f(arguments[s++]),h=p?i(v).concat(p(v)):i(v),b=h.length,y=0;while(b>y)d=h[y++],r&&!l.call(v,d)||(n[d]=v[d])}return n}:s},6389:function(e,n){e.exports=t},"69f3":function(t,e,n){var r,o,i,c=n("7f9a"),u=n("da84"),a=n("861d"),f=n("9112"),s=n("5135"),p=n("f772"),l=n("d012"),d=u.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},h=function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c){var b=new d,y=b.get,m=b.has,g=b.set;r=function(t,e){return g.call(b,t,e),e},o=function(t){return y.call(b,t)||{}},i=function(t){return m.call(b,t)}}else{var w=p("state");l[w]=!0,r=function(t,e){return f(t,w,e),e},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:v,getterFor:h}},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),i=n("5135"),c=n("ce4e"),u=n("8925"),a=n("69f3"),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,o=n("825a"),i=n("37e8"),c=n("7839"),u=n("d012"),a=n("1be4"),f=n("cc12"),s=n("f772"),p=">",l="<",d="prototype",v="script",h=s("IE_PROTO"),b=function(){},y=function(t){return l+v+p+t+l+"/"+v+p},m=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},g=function(){var t,e=f("iframe"),n="java"+v+":";return e.style.display="none",a.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}w=r?m(r):g();var t=c.length;while(t--)delete w[d][c[t]];return w()};u[h]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(b[d]=o(t),n=new b,b[d]=null,n[h]=t):n=w(),void 0===e?n:i(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),o=n("9ed3"),i=n("e163"),c=n("d2bb"),u=n("d44e"),a=n("9112"),f=n("6eeb"),s=n("b622"),p=n("c430"),l=n("3f8c"),d=n("ae93"),v=d.IteratorPrototype,h=d.BUGGY_SAFARI_ITERATORS,b=s("iterator"),y="keys",m="values",g="entries",w=function(){return this};t.exports=function(t,e,n,s,d,x,j){o(n,e,s);var O,S,P,E=function(t){if(t===d&&A)return A;if(!h&&t in C)return C[t];switch(t){case y:return function(){return new n(this,t)};case m:return function(){return new n(this,t)};case g:return function(){return new n(this,t)}}return function(){return new n(this)}},_=e+" Iterator",T=!1,C=t.prototype,k=C[b]||C["@@iterator"]||d&&C[d],A=!h&&k||E(d),M="Array"==e&&C.entries||k;if(M&&(O=i(M.call(new t)),v!==Object.prototype&&O.next&&(p||i(O)===v||(c?c(O,v):"function"!=typeof O[b]&&a(O,b,w)),u(O,_,!0,!0),p&&(l[_]=w))),d==m&&k&&k.name!==m&&(T=!0,A=function(){return k.call(this)}),p&&!j||C[b]===A||a(C,b,A),l[e]=A,d)if(S={values:E(m),keys:x?A:E(y),entries:E(g)},j)for(P in S)!h&&!T&&P in C||f(C,P,S[P]);else r({target:e,proto:!0,forced:h||T},S);return S}},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"8bbf":function(t,n){t.exports=e},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"9bdd":function(t,e,n){var r=n("825a");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(c){var i=t["return"];throw void 0!==i&&r(i.call(t)),c}}},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),c=n("c04e"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),c=n("d44e"),u=n("3f8c"),a=function(){return this};t.exports=function(t,e,n){var f=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,f,!1,!0),u[f]=a,t}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),c=n("d039"),u=n("d066"),a=n("4840"),f=n("cdf9"),s=n("6eeb"),p=!!i&&c((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));r({target:"Promise",proto:!0,real:!0,forced:p},{finally:function(t){var e=a(this,u("Promise")),n="function"==typeof t;return this.then(n?function(n){return f(e,t()).then((function(){return n}))}:t,n?function(n){return f(e,t()).then((function(){throw n}))}:t)}}),o||"function"!=typeof i||i.prototype["finally"]||s(i.prototype,"finally",u("Promise").prototype["finally"])},ae93:function(t,e,n){"use strict";var r,o,i,c=n("e163"),u=n("9112"),a=n("5135"),f=n("b622"),s=n("c430"),p=f("iterator"),l=!1,d=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=c(c(i)),o!==Object.prototype&&(r=o)):l=!0),void 0==r&&(r={}),s||a(r,p)||u(r,p,d),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:l}},b041:function(t,e,n){"use strict";var r=n("00ee"),o=n("f5df");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b575:function(t,e,n){var r,o,i,c,u,a,f,s,p=n("da84"),l=n("06cf").f,d=n("c6b6"),v=n("2cf4").set,h=n("1cdc"),b=p.MutationObserver||p.WebKitMutationObserver,y=p.process,m=p.Promise,g="process"==d(y),w=l(p,"queueMicrotask"),x=w&&w.value;x||(r=function(){var t,e;g&&(t=y.domain)&&t.exit();while(o){e=o.fn,o=o.next;try{e()}catch(n){throw o?c():i=void 0,n}}i=void 0,t&&t.enter()},g?c=function(){y.nextTick(r)}:b&&!h?(u=!0,a=document.createTextNode(""),new b(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){v.call(p,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("5135"),c=n("90e3"),u=n("4930"),a=n("fdbf"),f=o("wks"),s=r.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,c=n("d012");t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);while(e.length>a)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(t,e,n){var r=n("825a"),o=n("861d"),i=n("f069");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),c=n.resolve;return c(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,o=n("5135"),i=n("b622"),c=i("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e163:function(t,e,n){var r=n("5135"),o=n("7b0b"),i=n("f772"),c=n("e177"),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),c=n("69f3"),u=n("7dd0"),a="Array Iterator",f=c.set,s=c.getterFor(a);t.exports=u(Array,"Array",(function(t,e){f(this,{type:a,target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,o,i,c,u=n("23e7"),a=n("c430"),f=n("da84"),s=n("d066"),p=n("fea9"),l=n("6eeb"),d=n("e2cc"),v=n("d44e"),h=n("2626"),b=n("861d"),y=n("1c0b"),m=n("19aa"),g=n("c6b6"),w=n("8925"),x=n("2266"),j=n("1c7e"),O=n("4840"),S=n("2cf4").set,P=n("b575"),E=n("cdf9"),_=n("44de"),T=n("f069"),C=n("e667"),k=n("69f3"),A=n("94ca"),M=n("b622"),I=n("2d00"),R=M("species"),L="Promise",D=k.get,F=k.set,N=k.getterFor(L),q=p,U=f.TypeError,$=f.document,V=f.process,G=s("fetch"),z=T.f,W=z,B="process"==g(V),H=!!($&&$.createEvent&&f.dispatchEvent),J="unhandledrejection",X="rejectionhandled",Y=0,K=1,Q=2,Z=1,tt=2,et=A(L,(function(){var t=w(q)!==String(q);if(!t){if(66===I)return!0;if(!B&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!q.prototype["finally"])return!0;if(I>=51&&/native code/.test(q))return!1;var e=q.resolve(1),n=function(t){t((function(){}),(function(){}))},r=e.constructor={};return r[R]=n,!(e.then((function(){}))instanceof n)})),nt=et||!j((function(t){q.all(t)["catch"]((function(){}))})),rt=function(t){var e;return!(!b(t)||"function"!=typeof(e=t.then))&&e},ot=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;P((function(){var o=e.value,i=e.state==K,c=0;while(r.length>c){var u,a,f,s=r[c++],p=i?s.ok:s.fail,l=s.resolve,d=s.reject,v=s.domain;try{p?(i||(e.rejection===tt&&at(t,e),e.rejection=Z),!0===p?u=o:(v&&v.enter(),u=p(o),v&&(v.exit(),f=!0)),u===s.promise?d(U("Promise-chain cycle")):(a=rt(u))?a.call(u,l,d):l(u)):d(o)}catch(h){v&&!f&&v.exit(),d(h)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&ct(t,e)}))}},it=function(t,e,n){var r,o;H?(r=$.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},(o=f["on"+t])?o(r):t===J&&_("Unhandled promise rejection",n)},ct=function(t,e){S.call(f,(function(){var n,r=e.value,o=ut(e);if(o&&(n=C((function(){B?V.emit("unhandledRejection",r,t):it(J,t,r)})),e.rejection=B||ut(e)?tt:Z,n.error))throw n.value}))},ut=function(t){return t.rejection!==Z&&!t.parent},at=function(t,e){S.call(f,(function(){B?V.emit("rejectionHandled",t):it(X,t,e.value)}))},ft=function(t,e,n,r){return function(o){t(e,n,o,r)}},st=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=Q,ot(t,e,!0))},pt=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw U("Promise can't be resolved itself");var o=rt(n);o?P((function(){var r={done:!1};try{o.call(n,ft(pt,t,r,e),ft(st,t,r,e))}catch(i){st(t,r,i,e)}})):(e.value=n,e.state=K,ot(t,e,!1))}catch(i){st(t,{done:!1},i,e)}}};et&&(q=function(t){m(this,q,L),y(t),r.call(this);var e=D(this);try{t(ft(pt,this,e),ft(st,this,e))}catch(n){st(this,e,n)}},r=function(t){F(this,{type:L,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Y,value:void 0})},r.prototype=d(q.prototype,{then:function(t,e){var n=N(this),r=z(O(this,q));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=B?V.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Y&&ot(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=D(t);this.promise=t,this.resolve=ft(pt,t,e),this.reject=ft(st,t,e)},T.f=z=function(t){return t===q||t===i?new o(t):W(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,e){var n=this;return new q((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof G&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(q,G.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:et},{Promise:q}),v(q,L,!1,!0),h(L),i=s(L),u({target:L,stat:!0,forced:et},{reject:function(t){var e=z(this);return e.reject.call(void 0,t),e.promise}}),u({target:L,stat:!0,forced:a||et},{resolve:function(t){return E(a&&this===i?q:this,t)}}),u({target:L,stat:!0,forced:nt},{all:function(t){var e=this,n=z(e),r=n.resolve,o=n.reject,i=C((function(){var n=y(e.resolve),i=[],c=0,u=1;x(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=z(e),r=n.reject,o=C((function(){var o=y(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},e95a:function(t,e,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},f069:function(t,e,n){"use strict";var r=n("1c0b"),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},f5df:function(t,e,n){var r=n("00ee"),o=n("c6b6"),i=n("b622"),c=i("toStringTag"),u="Arguments"==o(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),c))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}})}));