import{S as n,i as s,s as a,e as t,c as p,a as o,d as e,b as c,f as l,n as r,_ as i,g as u,h as k,j as m,k as f,l as h,t as g,m as d,q as v,o as y,p as b,r as E,u as $,v as x,w as D,x as w,y as C}from"./client.f81d29d5.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/defineProperty";import{L as I}from"./Leaflet.de470149.js";function R(n){let s;return{c(){s=t("pre"),this.h()},l(n){s=p(n,"PRE",{class:!0}),o(s).forEach(e),this.h()},h(){c(s,"class","language-html")},m(n,a){l(n,s,a),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    zoom<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>\n    center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    circles<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80.005</span><span class="token punctuation">,</span>\n        color<span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span>\n        fillColor<span class="token operator">:</span> <span class="token string">"#0f0"</span><span class="token punctuation">,</span>\n        fillOpacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n        radius<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>\n        tooltip<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">sticky across the entire raduis</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n          direction<span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>\n          sticky<span class="token operator">:</span><span class="token boolean">true</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n        color<span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n        fillColor<span class="token operator">:</span> <span class="token string">"#f03"</span><span class="token punctuation">,</span>\n        fillOpacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n        radius<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>\n        tooltip<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yaay I can also have tooltips</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n          direction<span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(n){n&&e(s)}}}class j extends n{constructor(n){super(),s(this,n,null,R,a,{})}}function P(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,t=u(n);if(s){var p=u(this).constructor;a=Reflect.construct(t,arguments,p)}else a=t.apply(this,arguments);return k(this,a)}}function O(n){var s,a,i,u,k,m,f,R,P,O,V,q,z,A,H,L,M,N,S,T,Y,_,B,F,G,J,K,Q,U;return L=new j({}),Q=new I({props:{options:n[0]}}),{c:function(){s=h(),a=t("div"),i=t("div"),u=t("div"),k=t("a"),m=g("←Examples"),f=h(),R=t("h4"),P=g("Drawing circle overlays on a map "),O=t("span"),V=g("@0.0.6^"),q=h(),z=t("p"),A=g("Circle markers are declared as arrays just like markers it can have\r\n        tooltips and popups"),H=h(),d(L.$$.fragment),M=h(),N=t("h4"),S=g("Note"),T=h(),Y=t("p"),_=g("Radius are in meters more info "),B=t("a"),F=g("here"),G=h(),J=t("div"),K=t("div"),d(Q.$$.fragment),this.h()},l:function(n){v('[data-svelte="svelte-1ey7k6q"]',document.head).forEach(e),s=y(n),a=p(n,"DIV",{class:!0});var t=o(a);i=p(t,"DIV",{class:!0});var c=o(i);u=p(c,"DIV",{class:!0});var l=o(u);k=p(l,"A",{href:!0});var r=o(k);m=b(r,"←Examples"),r.forEach(e),f=y(l),R=p(l,"H4",{});var h=o(R);P=b(h,"Drawing circle overlays on a map "),O=p(h,"SPAN",{class:!0});var g=o(O);V=b(g,"@0.0.6^"),g.forEach(e),h.forEach(e),q=y(l),z=p(l,"P",{});var d=o(z);A=b(d,"Circle markers are declared as arrays just like markers it can have\r\n        tooltips and popups"),d.forEach(e),H=y(l),E(L.$$.fragment,l),M=y(l),N=p(l,"H4",{});var $=o(N);S=b($,"Note"),$.forEach(e),T=y(l),Y=p(l,"P",{});var x=o(Y);_=b(x,"Radius are in meters more info "),B=p(x,"A",{href:!0});var D=o(B);F=b(D,"here"),D.forEach(e),x.forEach(e),l.forEach(e),G=y(c),J=p(c,"DIV",{class:!0});var w=o(J);K=p(w,"DIV",{class:!0});var C=o(K);E(Q.$$.fragment,C),C.forEach(e),w.forEach(e),c.forEach(e),t.forEach(e),this.h()},h:function(){document.title="Drawing circle overlays on a map",c(k,"href","examples"),c(O,"class","chip"),c(B,"href","https://leafletjs.com/reference-1.7.1.html#circle"),c(u,"class","col-6"),c(K,"class","map svelte-dt8ylx"),c(J,"class","col-6"),c(i,"class","row is-center"),c(a,"class","container")},m:function(n,t){l(n,s,t),l(n,a,t),$(a,i),$(i,u),$(u,k),$(k,m),$(u,f),$(u,R),$(R,P),$(R,O),$(O,V),$(u,q),$(u,z),$(z,A),$(u,H),x(L,u,null),$(u,M),$(u,N),$(N,S),$(u,T),$(u,Y),$(Y,_),$(Y,B),$(B,F),$(i,G),$(i,J),$(J,K),x(Q,K,null),U=!0},p:r,i:function(n){U||(D(L.$$.fragment,n),D(Q.$$.fragment,n),U=!0)},o:function(n){w(L.$$.fragment,n),w(Q.$$.fragment,n),U=!1},d:function(n){n&&e(s),n&&e(a),C(L),C(Q)}}}function V(n){return[{zoom:15,center:[13,80],circles:[{lat:13,lng:80.005,color:"green",fillColor:"#0f0",fillOpacity:.5,radius:250,tooltip:{text:"sticky across the entire raduis",direction:"top",sticky:!0}},{lat:13,lng:80,color:"red",fillColor:"#f03",fillOpacity:.5,radius:250,tooltip:{text:"Yaay I can also have tooltips",direction:"top"}}],mapID:"map"}]}var q=function(t){i(o,n);var p=P(o);function o(n){var t;return m(this,o),t=p.call(this),s(f(t),n,V,O,a,{}),t}return o}();export default q;
