function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a,i,c=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return A()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function y(){}function g(){}function b(){}var $={};$[i]=function(){return this};var x=Object.getPrototypeOf,_=x&&x(x(j([])));_&&_!==r&&o.call(_,i)&&($=_);var w=b.prototype=y.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){var r;this._invoke=function(a,i){function c(){return new n((function(r,c){!function r(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}(a,i,r,c)}))}return r=r?r.then(c,c):c()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:A}}function A(){return{value:n,done:!0}}return g.prototype=w.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(f(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),s(w,u,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(a={path:o,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&a.path)}},a.exports),a.exports);function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(g)}function x(t){return"function"==typeof t}function _(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function w(t,e,n){t.$$.on_destroy.push(function(t){if(null==t)return m;for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=t.subscribe.apply(t,n);return o.unsubscribe?function(){return o.unsubscribe()}:o}(e,n))}function E(t,e,n,r){if(t){var o=S(t,e,n,r);return t[0](o)}}function S(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function L(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var s=S(n,r,o,c);e.p(s,u)}}function R(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function C(){return O(" ")}function N(){return O("")}function D(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function q(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):A(e)}function H(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return O(e)}function U(t){return H(t," ")}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function z(t){i=t}function B(){if(!i)throw new Error("Function called outside component initialization");return i}function J(t){B().$$.on_mount.push(t)}function M(){var t=B();return function(e,n){var r=t.$$.callbacks[e];if(r){var o=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((function(e){e.call(t,o)}))}}}var K=[],V=[],Y=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){Y.push(t)}var tt=!1,et=new Set;function nt(){if(!tt){tt=!0;do{for(var t=0;t<K.length;t+=1){var e=K[t];z(e),rt(e.$$)}for(K.length=0;V.length;)V.pop()();for(var n=0;n<Y.length;n+=1){var r=Y[n];et.has(r)||(et.add(r),r())}Y.length=0}while(K.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,at=new Set;function it(){ot={r:0,c:[],p:ot}}function ct(){ot.r||$(ot.c),ot=ot.p}function ut(t,e){t&&t.i&&(at.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(at.has(t))return;at.add(t),ot.c.push((function(){at.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}var ft="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function lt(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function pt(e){return"object"===t(e)&&null!==e?e:{}}function ht(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function vt(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),Z((function(){var e=a.map(g).filter(x);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(Z)}function mt(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(K.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(t,e,n,r,o,a){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=i;z(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(f.ctx=n?n(t,s,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),l&&yt(t,e)),n})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){var p=I(e.target);f.fragment&&f.fragment.l(p),p.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&ut(t.$$.fragment),vt(t,e.target,e.anchor),nt()}z(u)}var bt=function(){function t(){d(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){mt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,n),r&&v(e,r),t}(),$t=[];function xt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(_(t,n)&&(t=n,e)){for(var o=!$t.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),$t.push(i,t)}if(o){for(var c=0;c<$t.length;c+=2)$t[c][0]($t[c+1]);$t.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var _t={};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Et(t){var e,n,o,a,i,c,u,s,f,l,p,h,d,v,y,g,b,$,x,_,w;return{c:function(){e=A("nav"),n=A("ul"),o=A("li"),a=A("a"),i=O("home"),u=C(),s=A("li"),f=A("a"),l=O("markers"),h=C(),d=A("li"),v=A("a"),y=O("misc"),b=C(),$=A("li"),x=A("a"),_=O("examples"),this.h()},l:function(t){var r=I(e=q(t,"NAV",{class:!0})),c=I(n=q(r,"UL",{class:!0})),p=I(o=q(c,"LI",{class:!0})),m=I(a=q(p,"A",{"aria-current":!0,href:!0,class:!0}));i=H(m,"home"),m.forEach(k),p.forEach(k),u=U(c);var g=I(s=q(c,"LI",{class:!0})),w=I(f=q(g,"A",{"aria-current":!0,href:!0,class:!0}));l=H(w,"markers"),w.forEach(k),g.forEach(k),h=U(c);var E=I(d=q(c,"LI",{class:!0})),S=I(v=q(E,"A",{"aria-current":!0,href:!0,class:!0}));y=H(S,"misc"),S.forEach(k),E.forEach(k),b=U(c);var L=I($=q(c,"LI",{class:!0})),R=I(x=q(L,"A",{"aria-current":!0,href:!0,class:!0}));_=H(R,"examples"),R.forEach(k),L.forEach(k),c.forEach(k),r.forEach(k),this.h()},h:function(){T(a,"aria-current",c=void 0===t[0]?"page":void 0),T(a,"href","."),T(a,"class","svelte-1dbd5up"),T(o,"class","svelte-1dbd5up"),T(f,"aria-current",p="markers"===t[0]?"page":void 0),T(f,"href","markers"),T(f,"class","svelte-1dbd5up"),T(s,"class","svelte-1dbd5up"),T(v,"aria-current",g="misc"===t[0]?"page":void 0),T(v,"href","misc"),T(v,"class","svelte-1dbd5up"),T(d,"class","svelte-1dbd5up"),T(x,"aria-current",w="examples"===t[0]?"page":void 0),T(x,"href","examples"),T(x,"class","svelte-1dbd5up"),T($,"class","svelte-1dbd5up"),T(n,"class","svelte-1dbd5up"),T(e,"class","svelte-1dbd5up")},m:function(t,r){P(t,e,r),R(e,n),R(n,o),R(o,a),R(a,i),R(n,u),R(n,s),R(s,f),R(f,l),R(n,h),R(n,d),R(d,v),R(v,y),R(n,b),R(n,$),R($,x),R(x,_)},p:function(t,e){var n=r(e,1)[0];1&n&&c!==(c=void 0===t[0]?"page":void 0)&&T(a,"aria-current",c),1&n&&p!==(p="markers"===t[0]?"page":void 0)&&T(f,"aria-current",p),1&n&&g!==(g="misc"===t[0]?"page":void 0)&&T(v,"aria-current",g),1&n&&w!==(w="examples"===t[0]?"page":void 0)&&T(x,"aria-current",w)},i:m,o:m,d:function(t){t&&k(e)}}}function St(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var Lt=function(t){f(n,bt);var e=wt(n);function n(t){var r;return d(this,n),gt(l(r=e.call(this)),t,St,Et,_,{segment:0}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Pt(t){var e,n,o,a;e=new Lt({props:{segment:t[0]}});var i=t[2].default,c=E(i,t,t[1],null);return{c:function(){ht(e.$$.fragment),n=C(),o=A("main"),c&&c.c(),this.h()},l:function(t){dt(e.$$.fragment,t),n=U(t);var r=I(o=q(t,"MAIN",{class:!0}));c&&c.l(r),r.forEach(k),this.h()},h:function(){T(o,"class","svelte-1fhquo8")},m:function(t,r){vt(e,t,r),P(t,n,r),P(t,o,r),c&&c.m(o,null),a=!0},p:function(t,n){var o=r(n,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),c&&c.p&&2&o&&L(c,i,t,t[1],o,null,null)},i:function(t){a||(ut(e.$$.fragment,t),ut(c,t),a=!0)},o:function(t){st(e.$$.fragment,t),st(c,t),a=!1},d:function(t){mt(e,t),t&&k(n),t&&k(o),c&&c.d(t)}}}function kt(t,e,n){var r=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,i=t.$$scope)},[r,i,a]}var jt=function(t){f(n,bt);var e=Rt(n);function n(t){var r;return d(this,n),gt(l(r=e.call(this)),t,kt,Pt,_,{segment:0}),r}return n}();function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Ot(t){var e,n,r=t[1].stack+"";return{c:function(){e=A("pre"),n=O(r)},l:function(t){var o=I(e=q(t,"PRE",{}));n=H(o,r),o.forEach(k)},m:function(t,r){P(t,e,r),R(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&G(n,r)},d:function(t){t&&k(e)}}}function Ct(t){var e,n,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Ot(t);return{c:function(){n=C(),o=A("h1"),a=O(t[0]),i=C(),c=A("p"),u=O(l),s=C(),p&&p.c(),f=N(),this.h()},l:function(e){F('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(k),n=U(e);var r=I(o=q(e,"H1",{class:!0}));a=H(r,t[0]),r.forEach(k),i=U(e);var h=I(c=q(e,"P",{class:!0}));u=H(h,l),h.forEach(k),s=U(e),p&&p.l(e),f=N(),this.h()},h:function(){T(o,"class","svelte-8od9u6"),T(c,"class","svelte-8od9u6")},m:function(t,e){P(t,n,e),P(t,o,e),R(o,a),P(t,i,e),P(t,c,e),R(c,u),P(t,s,e),p&&p.m(t,e),P(t,f,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&G(a,t[0]),2&o&&l!==(l=t[1].message+"")&&G(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Ot(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&k(n),t&&k(o),t&&k(i),t&&k(c),t&&k(s),p&&p.d(t),t&&k(f)}}}function Nt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Dt=function(t){f(n,bt);var e=At(n);function n(t){var r;return d(this,n),gt(l(r=e.call(this)),t,Nt,Ct,_,{status:0,error:1}),r}return n}();function Tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function It(t){var e,n,r,o=[{segment:t[2][1]},t[4].props],a=t[4].component;function i(t){for(var e={$$slots:{default:[Ut]},$$scope:{ctx:t}},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return a&&(e=new a(i(t))),{c:function(){e&&ht(e.$$.fragment),n=N()},l:function(t){e&&dt(e.$$.fragment,t),n=N()},m:function(t,o){e&&vt(e,t,o),P(t,n,o),r=!0},p:function(t,r){var c=20&r?lt(o,[4&r&&{segment:t[2][1]},16&r&&pt(t[4].props)]):{};if(288&r&&(c.$$scope={dirty:r,ctx:t}),a!==(a=t[4].component)){if(e){it();var u=e;st(u.$$.fragment,1,0,(function(){mt(u,1)})),ct()}a?(ht((e=new a(i(t))).$$.fragment),ut(e.$$.fragment,1),vt(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o:function(t){e&&st(e.$$.fragment,t),r=!1},d:function(t){t&&k(n),e&&mt(e,t)}}}function qt(t){var e,n;return e=new Dt({props:{error:t[0],status:t[1]}}),{c:function(){ht(e.$$.fragment)},l:function(t){dt(e.$$.fragment,t)},m:function(t,r){vt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){st(e.$$.fragment,t),n=!1},d:function(t){mt(e,t)}}}function Ht(t){var e,n,r,o=[t[5].props],a=t[5].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ht(e.$$.fragment),n=N()},l:function(t){e&&dt(e.$$.fragment,t),n=N()},m:function(t,o){e&&vt(e,t,o),P(t,n,o),r=!0},p:function(t,r){var c=32&r?lt(o,[pt(t[5].props)]):{};if(a!==(a=t[5].component)){if(e){it();var u=e;st(u.$$.fragment,1,0,(function(){mt(u,1)})),ct()}a?(ht((e=new a(i())).$$.fragment),ut(e.$$.fragment,1),vt(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o:function(t){e&&st(e.$$.fragment,t),r=!1},d:function(t){t&&k(n),e&&mt(e,t)}}}function Ut(t){var e,n,r=t[5]&&Ht(t);return{c:function(){r&&r.c(),e=N()},l:function(t){r&&r.l(t),e=N()},m:function(t,o){r&&r.m(t,o),P(t,e,o),n=!0},p:function(t,n){t[5]?r?(r.p(t,n),32&n&&ut(r,1)):((r=Ht(t)).c(),ut(r,1),r.m(e.parentNode,e)):r&&(it(),st(r,1,1,(function(){r=null})),ct())},i:function(t){n||(ut(r),n=!0)},o:function(t){st(r),n=!1},d:function(t){r&&r.d(t),t&&k(e)}}}function Gt(t){var e,n,r,o,a=[qt,It],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){i[e].m(t,n),P(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(it(),st(i[u],1,1,(function(){i[u]=null})),ct(),(n=i[e])||(n=i[e]=a[e](t)).c(),ut(n,1),n.m(r.parentNode,r))},i:function(t){o||(ut(n),o=!0)},o:function(t){st(n),o=!1},d:function(t){i[e].d(t),t&&k(r)}}}function Ft(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Gt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=y(a,o[i]);return e=new jt({props:a}),{c:function(){ht(e.$$.fragment)},l:function(t){dt(e.$$.fragment,t)},m:function(t,r){vt(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?lt(o,[4&a&&{segment:t[2][0]},8&a&&pt(t[3].props)]):{};311&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){st(e.$$.fragment,t),n=!1},d:function(t){mt(e,t)}}}function zt(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,p=e.level2,h=void 0===p?null:p,d=e.notify;return function(t){B().$$.after_update.push(t)}(d),r=_t,o=a,B().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(6,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,l=t.level1),"level2"in t&&n(5,h=t.level2),"notify"in t&&n(7,d=t.notify)},[i,c,u,s,l,h,a,d]}var Bt=function(t){f(n,bt);var e=Tt(n);function n(t){var r;return d(this,n),gt(l(r=e.call(this)),t,zt,Ft,_,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5,notify:7}),r}return n}(),Jt=[/^\/snippets\/disablescrollwheelzoom\/?$/,/^\/snippets\/multiplemarker\/?$/,/^\/snippets\/autocenter\/?$/,/^\/snippets\/markers\/?$/,/^\/snippets\/tooltip\/?$/,/^\/snippets\/circle\/?$/,/^\/snippets\/themes\/?$/,/^\/snippets\/home\/?$/,/^\/snippets\/misc\/?$/],Mt=[{js:function(){return import("./index.8cfd25a9.js")},css:"__SAPPER_CSS_PLACEHOLDER:index.svelte__"},{js:function(){return import("./_layout.df0f82dc.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/_layout.svelte__"},{js:function(){return import("./index.049368df.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/index.svelte__"},{js:function(){return import("./disablescrollwheelzoom.782ed2d2.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/disablescrollwheelzoom.svelte__"},{js:function(){return import("./multiplemaps.b49b0cf2.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/multiplemaps.svelte__"},{js:function(){return import("./autocenter.a0a13d03.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/autocenter.svelte__"},{js:function(){return import("./tooltip.751cddde.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/tooltip.svelte__"},{js:function(){return import("./circle.98910681.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/circle.svelte__"},{js:function(){return import("./themes.7c0d2543.js")},css:"__SAPPER_CSS_PLACEHOLDER:examples/themes.svelte__"},{js:function(){return import("./markers.41c16984.js")},css:"__SAPPER_CSS_PLACEHOLDER:markers.svelte__"},{js:function(){return import("./misc.c6047d50.js")},css:"__SAPPER_CSS_PLACEHOLDER:misc.svelte__"}],Kt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/examples\/?$/,parts:[{i:1},{i:2}]},{pattern:/^\/examples\/disablescrollwheelzoom\/?$/,parts:[{i:1},{i:3}]},{pattern:/^\/examples\/multiplemaps\/?$/,parts:[{i:1},{i:4}]},{pattern:/^\/examples\/autocenter\/?$/,parts:[{i:1},{i:5}]},{pattern:/^\/examples\/tooltip\/?$/,parts:[{i:1},{i:6}]},{pattern:/^\/examples\/circle\/?$/,parts:[{i:1},{i:7}]},{pattern:/^\/examples\/themes\/?$/,parts:[{i:1},{i:8}]},{pattern:/^\/markers\/?$/,parts:[{i:9}]},{pattern:/^\/misc\/?$/,parts:[{i:10}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Vt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=ve(new URL(t,document.baseURI));return n?(pe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),ye(n,null,e.noscroll).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Wt,Xt,Qt,Zt,te,ee="undefined"!=typeof __SAPPER__&&__SAPPER__,ne=!1,re=[],oe="{}",ae={page:function(t){var e=xt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:xt(null),session:xt(ee&&ee.session)};ae.session.subscribe((function(t){return Vt(void 0,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Zt=t,ne){e.next=3;break}return e.abrupt("return");case 3:return te=!0,n=ve(new URL(location.href)),r=Xt={},e.next=8,$e(n);case 8:if(o=e.sent,a=o.redirect,i=o.props,u=o.branch,r===Xt){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,Yt(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,ge(u,i,n.page);case 21:case"end":return e.stop()}}),e)})))}));var ie,ce=null;var ue,se=1;var fe,le,pe="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},he={};function de(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(c):n[a]=c})),n}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ee.baseUrl))return null;var e=t.pathname.slice(ee.baseUrl.length);if(""===e&&(e="/"),!Jt.some((function(t){return t.test(e)})))for(var n=0;n<Kt.length;n+=1){var r=Kt[n],o=r.pattern.exec(e);if(o){var a=de(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function me(){return{x:pageXOffset,y:pageYOffset}}function ye(t,e,n,r){return Vt(this,void 0,void 0,c.mark((function o(){var a,i,u,s,f,l,p,h,d;return c.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e?ue=e:(a=me(),he[ue]=a,e=ue=++se,he[ue]=n?a:{x:0,y:0}),ue=e,Wt&&ae.preloading.set(!0),i=ce&&ce.href===t.href?ce.promise:$e(t),ce=null,u=Xt={},o.next=8,i;case 8:if(s=o.sent,f=s.redirect,u===Xt){o.next=12;break}return o.abrupt("return");case 12:if(!f){o.next=17;break}return o.next=15,Yt(f.location,{replaceState:!0});case 15:o.next=20;break;case 17:return l=s.props,p=s.branch,o.next=20,ge(p,l,t.page);case 20:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(h=he[e],r&&(d=document.getElementById(r.slice(1)))&&(h={x:0,y:d.getBoundingClientRect().top+scrollY}),he[ue]=h,h&&(f?scrollTo(0,0):scrollTo(h.x,h.y)));case 22:case"end":return o.stop()}}),o)})))}function ge(t,e,n){return Vt(this,void 0,void 0,c.mark((function r(){return c.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ae.page.set(n),ae.preloading.set(!1),!Wt){r.next=6;break}Wt.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ae.page.subscribe},preloading:{subscribe:ae.preloading.subscribe},session:ae.session},r.next=9,Qt;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ae.page.notify,Wt=new Bt({target:ie,props:e,hydrate:!0});case 13:re=t,oe=JSON.stringify(n.query),ne=!0,te=!1;case 17:case"end":return r.stop()}}),r)})))}function be(t,e,n,r){if(r!==oe)return!0;var o=re[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function $e(t){return Vt(this,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u,s,f,l,p,h,d,v=this;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},Qt||(s=function(){},Qt=ee.preloaded[0]||s.call(u,{host:r.host,path:r.path,query:r.query,params:{}},Zt)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),d=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Vt(v,void 0,void 0,c.mark((function a(){var s,f,v,m,y,g;return c.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=o[n],be(n,s,h,p)&&(d=!0),i.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:s});case 5:if(f=l++,te||d||!re[n]||re[n].part!==e.i){a.next=8;break}return a.abrupt("return",re[n]);case 8:return d=!1,a.next=11,_e(Mt[e.i]);case 11:if(v=a.sent,m=v.default,y=v.preload,!ne&&ee.preloaded[n+1]){a.next=25;break}if(!y){a.next=21;break}return a.next=18,y.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},Zt);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:g=a.t0,a.next=26;break;case 25:g=ee.preloaded[n+1];case 26:return a.abrupt("return",i["level".concat(f)]={component:m,props:g,segment:s,match:h,part:e.i});case 27:case"end":return a.stop()}}),a)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),i.error=e.t0,i.status=500,f=[];case 21:return e.abrupt("return",{redirect:a,props:i,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}function xe(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)}))}function _e(t){var e="string"==typeof t.css?[]:t.css.map(xe);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function we(t){var e=ve(new URL(t,document.baseURI));if(e)return ce&&t===ce.href||function(t,e){ce={href:t,promise:e}}(t,$e(e)),ce.promise}function Ee(t){clearTimeout(fe),fe=setTimeout((function(){Se(t)}),20)}function Se(t){var e=Re(t.target);e&&"prefetch"===e.rel&&we(e.href)}function Le(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Re(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ve(a);if(i)ye(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),pe.pushState({id:ue},"",a.href)}}}else location.hash||e.preventDefault()}}}function Re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Pe(t){if(he[ue]=me(),t.state){var e=ve(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else(function(t){ue=t})(se=se+1),pe.replaceState({id:ue},"",location.href)}le={target:document.querySelector("#sapper")},"scrollRestoration"in pe&&(pe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){pe.scrollRestoration="auto"})),addEventListener("load",(function(){pe.scrollRestoration="manual"})),function(t){ie=t}(le.target),addEventListener("click",Le),addEventListener("popstate",Pe),addEventListener("touchstart",Se),addEventListener("mousemove",Ee),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;pe.replaceState({id:se},"",n);var r,o,a,i,c,u,s,f,l=new URL(location.href);if(ee.error)return r=location,o=r.host,a=r.pathname,i=r.search,c=ee.session,u=ee.preloaded,s=ee.status,f=ee.error,Qt||(Qt=u&&u[0]),void ge([],{error:f,status:s,session:c,level0:{props:Qt},level1:{props:{status:s,error:f},component:Dt},segments:u},{host:o,path:a,query:de(i),params:{}});var p=ve(l);return p?ye(p,se,!0,e):void 0}));export{w as A,M as B,J as C,D,ft as E,V as F,E as G,r as H,L as I,j as J,bt as S,f as _,I as a,T as b,q as c,k as d,A as e,P as f,u as g,p as h,gt as i,d as j,l as k,C as l,ht as m,m as n,U as o,H as p,F as q,dt as r,_ as s,O as t,R as u,vt as v,ut as w,st as x,mt as y,xt as z};
