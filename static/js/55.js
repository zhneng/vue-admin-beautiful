/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-13 20:41:08
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/_zx-verify@0.0.2@zx-verify/dist/zx-verify.umd.min.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_zx-verify@0.0.2@zx-verify/dist/zx-verify.umd.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e():undefined})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="f4a0")}({"05a7":function(t,e,n){},"0a60":function(t,e){e.f=Object.getOwnPropertySymbols},"0c3c":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"0fc1":function(t,e,n){var r=n("1e2c"),i=n("d910"),o=n("38b9");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},1025:function(t,e,n){var r=n("3a08"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},1784:function(t,e,n){"use strict";var r=n("1c8b"),i=n("58d8").left,o=n("d7e1"),c=n("ff9c"),a=o("reduce"),u=c("reduce",{1:0});r({target:"Array",proto:!0,forced:!a||!u},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"18f6":function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1944:function(t,e,n){var r=n("d890"),i=n("0fc1"),o=n("faa8"),c=n("e4db"),a=n("1025"),u=n("b702"),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},"1b99":function(t,e,n){var r=n("d890");t.exports=r},"1c8b":function(t,e,n){var r=n("d890"),i=n("aa6b").f,o=n("0fc1"),c=n("1944"),a=n("e4db"),u=n("c69d"),f=n("e8d6");t.exports=function(t,e){var n,s,l,d,p,h,v=t.target,b=t.global,y=t.stat;if(s=b?r:y?r[v]||a(v,{}):(r[v]||{}).prototype,s)for(l in e){if(p=e[l],t.noTargetGet?(h=i(s,l),d=h&&h.value):d=s[l],n=f(b?l:v+(y?".":"#")+l,t.forced),!n&&void 0!==d){if(typeof p===typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&o(p,"sham",!0),c(s,l,p,t)}}},"1ca1":function(t,e,n){var r=n("a719"),i=n("74e7"),o=n("90fb"),c=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"1e2c":function(t,e,n){var r=n("efe2");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"1ea7":function(t,e,n){var r=n("efe2"),i=n("90fb"),o=n("f594"),c=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2039:function(t,e,n){var r=n("1e2c"),i=n("efe2"),o=n("ae25");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},2118:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},2732:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"2eeb":function(t,e,n){"use strict";var r=n("1c8b"),i=n("5dfd").map,o=n("1ea7"),c=n("ff9c"),a=o("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},3553:function(t,e,n){var r=n("2732");t.exports=function(t){return Object(r(t))}},"38b9":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"3a08":function(t,e,n){var r=n("d890"),i=n("e4db"),o="__core-js_shared__",c=r[o]||i(o,{});t.exports=c},"3da3":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"45af":function(t,e,n){var r=n("da10"),i=n("d88d"),o=n("e1d6"),c=function(t){return function(e,n,c){var a,u=r(e),f=i(u.length),s=o(c,f);if(t&&n!=n){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"4fda":function(t,e,n){var r=n("6d7a");t.exports=r("navigator","userAgent")||""},"50fb":function(t,e,n){var r=n("857c"),i=n("d1fd");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},"513c":function(t,e,n){"use strict";var r=n("1e2c"),i=n("d890"),o=n("e8d6"),c=n("1944"),a=n("faa8"),u=n("2118"),f=n("7063"),s=n("9f67"),l=n("efe2"),d=n("6d60"),p=n("b338").f,h=n("aa6b").f,v=n("d910").f,b=n("c10f").trim,y="Number",g=i[y],m=g.prototype,x=u(d(m))==y,w=function(t){var e,n,r,i,o,c,a,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(f=b(f),e=f.charCodeAt(0),43===e||45===e){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+f}for(o=f.slice(2),c=o.length,a=0;a<c;a++)if(u=o.charCodeAt(a),u<48||u>i)return NaN;return parseInt(o,r)}return+f};if(o(y,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?l((function(){m.valueOf.call(n)})):u(n)!=y)?f(new g(w(e)),n,_):w(e)},E=r?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;E.length>O;O++)a(g,S=E[O])&&!a(_,S)&&v(_,S,h(g,S));_.prototype=m,m.constructor=_,c(i,y,_)}},"58d8":function(t,e,n){var r=n("0c3c"),i=n("3553"),o=n("692f"),c=n("d88d"),a=function(t){return function(e,n,a,u){r(n);var f=i(e),s=o(f),l=c(f.length),d=t?l-1:0,p=t?-1:1;if(a<2)while(1){if(d in s){u=s[d],d+=p;break}if(d+=p,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=p)d in s&&(u=n(u,s[d],d,f));return u}};t.exports={left:a(!1),right:a(!0)}},"5dfd":function(t,e,n){var r=n("e349"),i=n("692f"),o=n("3553"),c=n("d88d"),a=n("1ca1"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,d=5==t||l;return function(p,h,v,b){for(var y,g,m=o(p),x=i(m),w=r(h,v,3),S=c(x.length),_=0,E=b||a,O=e?E(p,S):n?E(p,0):void 0;S>_;_++)if((d||_ in x)&&(y=x[_],g=w(y,_,m),t))if(e)O[_]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:u.call(O,y)}else if(s)return!1;return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},"604f":function(t,e,n){var r=n("d890"),i=n("1025"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"692f":function(t,e,n){var r=n("efe2"),i=n("2118"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"6d28":function(t,e,n){var r=n("9b9d"),i=n("3a08");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"6d60":function(t,e,n){var r,i=n("857c"),o=n("dbe8"),c=n("18f6"),a=n("d5a8"),u=n("6fdf"),f=n("ae25"),s=n("7db2"),l=">",d="<",p="prototype",h="script",v=s("IE_PROTO"),b=function(){},y=function(t){return d+h+l+t+d+"/"+h+l},g=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},m=function(){var t,e=f("iframe"),n="java"+h+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},x=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}x=r?g(r):m();var t=c.length;while(t--)delete x[p][c[t]];return x()};a[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(b[p]=i(t),n=new b,b[p]=null,n[v]=t):n=x(),void 0===e?n:o(n,e)}},"6d7a":function(t,e,n){var r=n("1b99"),i=n("d890"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},"6fdf":function(t,e,n){var r=n("6d7a");t.exports=r("document","documentElement")},7063:function(t,e,n){var r=n("a719"),i=n("50fb");t.exports=function(t,e,n){var o,c;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(c=o.prototype)&&c!==n.prototype&&i(t,c),t}},"74cb":function(t,e,n){var r=n("c54b");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"74e7":function(t,e,n){var r=n("2118");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"7db2":function(t,e,n){var r=n("6d28"),i=n("7e8b"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},"7e8b":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},"857c":function(t,e,n){var r=n("a719");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"8d44":function(t,e,n){var r=n("6d7a"),i=n("b338"),o=n("0a60"),c=n("857c");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=o.f;return n?e.concat(n(t)):e}},"8d4e":function(t,e,n){"use strict";var r=n("05a7"),i=n.n(r);i.a},"90fb":function(t,e,n){var r=n("d890"),i=n("6d28"),o=n("faa8"),c=n("7e8b"),a=n("c54b"),u=n("74cb"),f=i("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return o(f,t)||(a&&o(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},"9b9d":function(t,e){t.exports=!1},"9edd":function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},"9f67":function(t,e,n){var r=n("a719");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},a719:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},aa6b:function(t,e,n){var r=n("1e2c"),i=n("ef71"),o=n("38b9"),c=n("da10"),a=n("9f67"),u=n("faa8"),f=n("2039"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),f)try{return s(t,e)}catch(n){}if(u(t,e))return o(!i.f.call(t,e),t[e])}},ae25:function(t,e,n){var r=n("d890"),i=n("a719"),o=r.document,c=i(o)&&i(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},b338:function(t,e,n){var r=n("ead4"),i=n("18f6"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},b702:function(t,e,n){var r,i,o,c=n("604f"),a=n("d890"),u=n("a719"),f=n("0fc1"),s=n("faa8"),l=n("7db2"),d=n("d5a8"),p=a.WeakMap,h=function(t){return o(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c){var b=new p,y=b.get,g=b.has,m=b.set;r=function(t,e){return m.call(b,t,e),e},i=function(t){return y.call(b,t)||{}},o=function(t){return g.call(b,t)}}else{var x=l("state");d[x]=!0,r=function(t,e){return f(t,x,e),e},i=function(t){return s(t,x)?t[x]:{}},o=function(t){return s(t,x)}}t.exports={set:r,get:i,has:o,enforce:h,getterFor:v}},c10f:function(t,e,n){var r=n("2732"),i=n("fc8c"),o="["+i+"]",c=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},c54b:function(t,e,n){var r=n("efe2");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},c59c:function(t,e,n){var r,i,o;(function(n,c){i=[],r=c,o="function"===typeof r?r.apply(e,i):r,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,i=/@([^@]*):(\d+):(\d+)\s*$/gi,o=r.exec(l.stack)||i.exec(l.stack),c=o&&o[1]||!1,a=o&&o[2]||!1,u=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");c===u&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var s=0;s<f.length;s++){if("interactive"===f[s].readyState)return f[s];if(f[s].src===c)return f[s];if(c===u&&f[s].innerHTML&&f[s].innerHTML.trim()===n)return f[s]}return null}}return t}))},c69d:function(t,e,n){var r=n("faa8"),i=n("8d44"),o=n("aa6b"),c=n("d910");t.exports=function(t,e){for(var n=i(e),a=c.f,u=o.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||a(t,s,u(e,s))}}},cbab:function(t,e,n){var r=n("ead4"),i=n("18f6");t.exports=Object.keys||function(t){return r(t,i)}},d1fd:function(t,e,n){var r=n("a719");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},d5a8:function(t,e){t.exports={}},d7e1:function(t,e,n){"use strict";var r=n("efe2");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},d88d:function(t,e,n){var r=n("3da3"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},d890:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("9edd"))},d910:function(t,e,n){var r=n("1e2c"),i=n("2039"),o=n("857c"),c=n("9f67"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=c(e,!0),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},da10:function(t,e,n){var r=n("692f"),i=n("2732");t.exports=function(t){return r(i(t))}},dbe8:function(t,e,n){var r=n("1e2c"),i=n("d910"),o=n("857c"),c=n("cbab");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=c(e),a=r.length,u=0;while(a>u)i.f(t,n=r[u++],e[n]);return t}},e1d6:function(t,e,n){var r=n("3da3"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},e349:function(t,e,n){var r=n("0c3c");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},e4db:function(t,e,n){var r=n("d890"),i=n("0fc1");t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},e8d6:function(t,e,n){var r=n("efe2"),i=/#|\.prototype\./,o=function(t,e){var n=a[c(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},c=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},u=o.NATIVE="N",f=o.POLYFILL="P";t.exports=o},ead4:function(t,e,n){var r=n("faa8"),i=n("da10"),o=n("45af").indexOf,c=n("d5a8");t.exports=function(t,e){var n,a=i(t),u=0,f=[];for(n in a)!r(c,n)&&r(a,n)&&f.push(n);while(e.length>u)r(a,n=e[u++])&&(~o(f,n)||f.push(n));return f}},ef71:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},efe2:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},f4a0:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var r=window.document.currentScript,i=n("c59c");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide-verify",attrs:{id:"slideVerify",onselectstart:"return false;"}},[n("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.w,height:t.h}}),n("div",{staticClass:"slide-verify-refresh-icon",on:{click:t.refresh}}),n("canvas",{ref:"block",staticClass:"slide-verify-block",attrs:{width:t.w,height:t.h}}),n("div",{staticClass:"slide-verify-slider",class:{"container-active":t.containerActive,"container-success":t.containerSuccess,"container-fail":t.containerFail}},[n("div",{staticClass:"slide-verify-slider-mask",style:{width:t.sliderMaskWidth}},[n("div",{staticClass:"slide-verify-slider-mask-item",style:{left:t.sliderLeft},on:{mousedown:t.sliderDown,touchstart:t.touchStartEvent,touchmove:t.touchMoveEvent,touchend:t.touchEndEvent}},[n("i",{staticClass:"el-icon-arrow-right"})])]),n("span",{staticClass:"slide-verify-slider-text"},[t._v(t._s(t.sliderText))])])])},a=[],u=(n("2eeb"),n("1784"),n("513c"),Math.PI);function f(t,e){return t+e}function s(t){return t*t}var l={name:"Verify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:310},h:{type:Number,default:155},sliderText:{type:String,default:"Slide filled right"}},data:function(){return{containerActive:!1,containerSuccess:!1,containerFail:!1,canvasCtx:null,blockCtx:null,block:null,block_x:void 0,block_y:void 0,L:this.l+2*this.r+3,img:void 0,originX:void 0,originY:void 0,isMouseDown:!1,trail:[],sliderLeft:0,sliderMaskWidth:0}},mounted:function(){this.init()},methods:{init:function(){this.initDom(),this.initImg(),this.bindEvents()},initDom:function(){this.block=this.$refs.block,this.canvasCtx=this.$refs.canvas.getContext("2d"),this.blockCtx=this.block.getContext("2d")},initImg:function(){var t=this,e=this.createImg((function(){t.drawBlock(),t.canvasCtx.drawImage(e,0,0,t.w,t.h),t.blockCtx.drawImage(e,0,0,t.w,t.h);var n=t.block_x,r=t.block_y,i=t.r,o=t.L,c=r-2*i-1,a=t.blockCtx.getImageData(n,c,o,o);t.block.width=o,t.blockCtx.putImageData(a,0,c)}));this.img=e},drawBlock:function(){this.block_x=this.getRandomNumberByRange(this.L+10,this.w-(this.L+10)),this.block_y=this.getRandomNumberByRange(10+2*this.r,this.h-(this.L+10)),this.draw(this.canvasCtx,this.block_x,this.block_y,"fill"),this.draw(this.blockCtx,this.block_x,this.block_y,"clip")},draw:function(t,e,n,r){var i=this.l,o=this.r;t.beginPath(),t.moveTo(e,n),t.arc(e+i/2,n-o+2,o,.72*u,2.26*u),t.lineTo(e+i,n),t.arc(e+i+o-2,n+i/2,o,1.21*u,2.78*u),t.lineTo(e+i,n+i),t.lineTo(e,n+i),t.arc(e+o-2,n+i/2,o+.4,2.76*u,1.24*u,!0),t.lineTo(e,n),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.8)",t.strokeStyle="rgba(255, 255, 255, 0.8)",t.stroke(),t[r](),t.globalCompositeOperation="xor"},createImg:function(t){var e=this,n=document.createElement("img");return n.crossOrigin="Anonymous",n.onload=t,n.onerror=function(){n.src=e.getRandomImg()},n.src=this.getRandomImg(),n},getRandomImg:function(){return"https://picsum.photos/350/170/?image="+this.getRandomNumberByRange(0,50)},getRandomNumberByRange:function(t,e){return Math.round(Math.random()*(e-t)+t)},refresh:function(){this.reset(),this.$emit("refresh")},sliderDown:function(t){this.originX=t.clientX,this.originY=t.clientY,this.isMouseDown=!0},touchStartEvent:function(t){this.originX=t.changedTouches[0].pageX,this.originY=t.changedTouches[0].pageY,this.isMouseDown=!0},bindEvents:function(){var t=this;document.addEventListener("mousemove",(function(e){if(!t.isMouseDown)return!1;var n=e.clientX-t.originX,r=e.clientY-t.originY;if(n<0||n+38>=t.w)return!1;t.sliderLeft=n+"px";var i=(t.w-40-20)/(t.w-40)*n;t.block.style.left=i+"px",t.containerActive=!0,t.sliderMaskWidth=n+"px",t.trail.push(r)})),document.addEventListener("mouseup",(function(e){if(!t.isMouseDown)return!1;if(t.isMouseDown=!1,e.clientX===t.originX)return!1;t.containerActive=!1;var n=t.verify(),r=n.spliced,i=n.TuringTest;r?i?(t.containerSuccess=!0,t.$emit("success")):(t.containerFail=!0,t.sliderText="try again",t.reset()):(t.containerFail=!0,t.$emit("fail"),setTimeout((function(){t.reset()}),1e3))}))},touchMoveEvent:function(t){if(!this.isMouseDown)return!1;var e=t.changedTouches[0].pageX-this.originX,n=t.changedTouches[0].pageY-this.originY;if(e<0||e+38>=this.w)return!1;this.sliderLeft=e+"px";var r=(this.w-40-20)/(this.w-40)*e;this.block.style.left=r+"px",this.containerActive=!0,this.sliderMaskWidth=e+"px",this.trail.push(n)},touchEndEvent:function(t){var e=this;if(!this.isMouseDown)return!1;if(this.isMouseDown=!1,t.changedTouches[0].pageX===this.originX)return!1;this.containerActive=!1;var n=this.verify(),r=n.spliced,i=n.TuringTest;r?i?(this.containerSuccess=!0,this.$emit("success")):(this.containerFail=!0,this.sliderText="try again",this.reset()):(this.containerFail=!0,this.$emit("fail"),setTimeout((function(){e.reset()}),1e3))},verify:function(){var t=this.trail,e=t.reduce(f)/t.length,n=t.map((function(t){return t-e})),r=Math.sqrt(n.map(s).reduce(f)/t.length),i=parseInt(this.block.style.left);return{spliced:Math.abs(i-this.block_x)<10,TuringTest:e!==r}},reset:function(){this.containerActive=!1,this.containerSuccess=!1,this.containerFail=!1,this.sliderLeft=0,this.block.style.left=0,this.sliderMaskWidth=0;var t=this.w,e=this.h;this.canvasCtx.clearRect(0,0,t,e),this.blockCtx.clearRect(0,0,t,e),this.block.width=t,this.img.src=this.getRandomImg()}}},d=l;n("8d4e");function p(t,e,n,r,i,o,c,a){var u,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=u):i&&(u=a?function(){i.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(f.functional){f._injectStyles=u;var s=f.render;f.render=function(t,e){return u.call(e),s(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:f}}var h=p(d,c,a,!1,null,"53d79ea0",null),v=h.exports,b=v;"undefined"!==typeof window&&window.Vue&&window.Vue.component("zx-verify",v);e["default"]=b},f594:function(t,e,n){var r,i,o=n("d890"),c=n("4fda"),a=o.process,u=a&&a.versions,f=u&&u.v8;f?(r=f.split("."),i=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},faa8:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},fc8c:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},ff9c:function(t,e,n){var r=n("1e2c"),i=n("efe2"),o=n("faa8"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],f=!!o(e,"ACCESSORS")&&e.ACCESSORS,s=o(e,0)?e[0]:u,l=o(e,1)?e[1]:void 0;return a[t]=!!n&&!i((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,l)}))}}})}));
//# sourceMappingURL=zx-verify.umd.min.js.map

/***/ })

}]);