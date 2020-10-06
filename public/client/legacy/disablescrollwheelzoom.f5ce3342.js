import{S as n,i as s,s as a,e as t,c as o,a as e,d as p,b as c,f as l,n as r,_ as u,g as i,h as k,j as m,k as f,l as h,t as g,m as d,q as v,o as b,p as y,r as E,u as z,v as D,w as $,x as w,y as C}from"./client.e1fa59dc.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/defineProperty";import{L as x}from"./Leaflet.6f0b781f.js";function I(n){let s;return{c(){s=t("pre"),this.h()},l(n){s=o(n,"PRE",{class:!0}),e(s).forEach(p),this.h()},h(){c(s,"class","language-html")},m(n,a){l(n,s,a),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    recenter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    zoom<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    controls<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      zoomControl<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    scrollWheelZoom<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n    attributionControl<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(n){n&&p(s)}}}class P extends n{constructor(n){super(),s(this,n,null,I,a,{})}}function R(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,t=i(n);if(s){var o=i(this).constructor;a=Reflect.construct(t,arguments,o)}else a=t.apply(this,arguments);return k(this,a)}}function V(n){var s,a,u,i,k,m,f,I,R,V,j,W,Z,H,L,M,N,O,S,q,A,T,_,B,F,G,J,K,Q,U,X,Y,nn="controls: {zoomControl: true }";return M=new P({}),X=new x({props:{options:n[0]}}),{c:function(){s=h(),a=t("div"),u=t("div"),i=t("div"),k=t("a"),m=g("←Examples"),f=h(),I=t("h4"),R=g("Disable scroll wheel zoom "),V=t("span"),j=g("@0.0.4^"),W=h(),Z=t("p"),H=g("Disables mouse wheel intereactions for zoom and allows only zoom via\r\n        controls."),L=h(),d(M.$$.fragment),N=h(),O=t("h4"),S=g("Note"),q=h(),A=t("p"),T=t("code"),_=g("scrollWheelZoom"),B=g(" by default is true additionally you can remove the zoom control element by setting "),F=t("code"),G=g(nn),J=g(" to false."),K=h(),Q=t("div"),U=t("div"),d(X.$$.fragment),this.h()},l:function(n){v('[data-svelte="svelte-50lzuc"]',document.head).forEach(p),s=b(n),a=o(n,"DIV",{class:!0});var t=e(a);u=o(t,"DIV",{class:!0});var c=e(u);i=o(c,"DIV",{class:!0});var l=e(i);k=o(l,"A",{href:!0});var r=e(k);m=y(r,"←Examples"),r.forEach(p),f=b(l),I=o(l,"H4",{});var h=e(I);R=y(h,"Disable scroll wheel zoom "),V=o(h,"SPAN",{class:!0});var g=e(V);j=y(g,"@0.0.4^"),g.forEach(p),h.forEach(p),W=b(l),Z=o(l,"P",{});var d=e(Z);H=y(d,"Disables mouse wheel intereactions for zoom and allows only zoom via\r\n        controls."),d.forEach(p),L=b(l),E(M.$$.fragment,l),N=b(l),O=o(l,"H4",{});var z=e(O);S=y(z,"Note"),z.forEach(p),q=b(l),A=o(l,"P",{});var D=e(A);T=o(D,"CODE",{});var $=e(T);_=y($,"scrollWheelZoom"),$.forEach(p),B=y(D," by default is true additionally you can remove the zoom control element by setting "),F=o(D,"CODE",{});var w=e(F);G=y(w,nn),w.forEach(p),J=y(D," to false."),D.forEach(p),l.forEach(p),K=b(c),Q=o(c,"DIV",{class:!0});var C=e(Q);U=o(C,"DIV",{class:!0});var x=e(U);E(X.$$.fragment,x),x.forEach(p),C.forEach(p),c.forEach(p),t.forEach(p),this.h()},h:function(){document.title="Disable scroll wheel zoom",c(k,"href","examples"),c(V,"class","chip"),c(i,"class","col-6"),c(U,"class","map svelte-dt8ylx"),c(Q,"class","col-6"),c(u,"class","row is-center"),c(a,"class","container")},m:function(n,t){l(n,s,t),l(n,a,t),z(a,u),z(u,i),z(i,k),z(k,m),z(i,f),z(i,I),z(I,R),z(I,V),z(V,j),z(i,W),z(i,Z),z(Z,H),z(i,L),D(M,i,null),z(i,N),z(i,O),z(O,S),z(i,q),z(i,A),z(A,T),z(T,_),z(A,B),z(A,F),z(F,G),z(A,J),z(u,K),z(u,Q),z(Q,U),D(X,U,null),Y=!0},p:r,i:function(n){Y||($(M.$$.fragment,n),$(X.$$.fragment,n),Y=!0)},o:function(n){w(M.$$.fragment,n),w(X.$$.fragment,n),Y=!1},d:function(n){n&&p(s),n&&p(a),C(M),C(X)}}}function j(n){return[{recenter:!0,zoom:5,markers:[{lat:8,lng:8},{lat:13,lng:80}],controls:{zoomControl:!0},scrollWheelZoom:!1,mapID:"map",attributionControl:!0}]}var W=function(t){u(e,n);var o=R(e);function e(n){var t;return m(this,e),t=o.call(this),s(f(t),n,j,V,a,{}),t}return e}();export default W;