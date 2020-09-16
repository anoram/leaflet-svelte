import{S as a,i as s,s as n,e as t,c as e,a as p,d as o,b as c,f as l,n as r,_ as i,g as u,h as f,j as k,k as m,l as h,t as g,m as v,q as d,o as b,p as y,r as E,u as $,v as D,w,x as I,y as x}from"./client.552f27ae.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/defineProperty";import"@babel/runtime/helpers/esm/slicedToArray";import{L as P}from"./Leaflet.b4123ade.js";function R(a){let s;return{c(){s=t("pre"),this.h()},l(a){s=e(a,"PRE",{class:!0}),p(s).forEach(o),this.h()},h(){c(s,"class","language-html")},m(a,n){l(a,s,n),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">\'@anoram/leaflet-svelte\'</span>\n<span class="token keyword">let</span> options<span class="token operator">=</span><span class="token punctuation">&#123;</span>\n  center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span>\n      lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n      lng<span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  mapID<span class="token operator">:</span> <span class="token string">"map"</span>\n<span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(a){a&&o(s)}}}class S extends a{constructor(a){super(),s(this,a,null,R,n,{})}}function M(a){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var n,t=u(a);if(s){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return f(this,n)}}function H(a){var s,n,i,u,f,k,m,R,M,H,C,T,V,j,q,A,L,O,Q,z,F,_,B,G,J,K,N,U,W,X,Y,Z,aa,sa,na,ta,ea,pa,oa,ca,la="{options}";return X=new S({}),oa=new P({props:{options:a[0]}}),{c:function(){s=h(),n=t("div"),i=t("div"),u=t("div"),f=t("h4"),k=g("Quick Start"),m=h(),R=t("p"),M=g("Svelte wrapper for leaflet. To use in "),H=t("a"),C=g("svelte"),T=g(".\n        For bugs and suggestions please file issue "),V=t("a"),j=g("here"),q=h(),A=t("pre"),L=g("npm i @anoram/leaflet-svelte"),O=h(),Q=t("p"),z=g("Have "),F=t("code"),_=g("<Map options="),B=g(la),G=g("/>"),J=g(" a child of a div and supply\n        custom css for height/width."),K=h(),N=t("h4"),U=g("Minimal Example"),W=h(),v(X.$$.fragment),Y=h(),Z=t("p"),aa=t("code"),sa=g("mapID"),na=g(" is unique like if you are planning to use multiple maps on the same page consider having different mapID"),ta=h(),ea=t("div"),pa=t("div"),v(oa.$$.fragment),this.h()},l:function(a){d('[data-svelte="svelte-1zskho"]',document.head).forEach(o),s=b(a),n=e(a,"DIV",{class:!0});var t=p(n);i=e(t,"DIV",{class:!0});var c=p(i);u=e(c,"DIV",{class:!0});var l=p(u);f=e(l,"H4",{});var r=p(f);k=y(r,"Quick Start"),r.forEach(o),m=b(l),R=e(l,"P",{});var h=p(R);M=y(h,"Svelte wrapper for leaflet. To use in "),H=e(h,"A",{href:!0});var g=p(H);C=y(g,"svelte"),g.forEach(o),T=y(h,".\n        For bugs and suggestions please file issue "),V=e(h,"A",{href:!0});var v=p(V);j=y(v,"here"),v.forEach(o),h.forEach(o),q=b(l),A=e(l,"PRE",{});var $=p(A);L=y($,"npm i @anoram/leaflet-svelte"),$.forEach(o),O=b(l),Q=e(l,"P",{});var D=p(Q);z=y(D,"Have "),F=e(D,"CODE",{});var w=p(F);_=y(w,"<Map options="),B=y(w,la),G=y(w,"/>"),w.forEach(o),J=y(D," a child of a div and supply\n        custom css for height/width."),D.forEach(o),K=b(l),N=e(l,"H4",{});var I=p(N);U=y(I,"Minimal Example"),I.forEach(o),W=b(l),E(X.$$.fragment,l),Y=b(l),Z=e(l,"P",{});var x=p(Z);aa=e(x,"CODE",{});var P=p(aa);sa=y(P,"mapID"),P.forEach(o),na=y(x," is unique like if you are planning to use multiple maps on the same page consider having different mapID"),x.forEach(o),l.forEach(o),ta=b(c),ea=e(c,"DIV",{class:!0});var S=p(ea);pa=e(S,"DIV",{class:!0});var ca=p(pa);E(oa.$$.fragment,ca),ca.forEach(o),S.forEach(o),c.forEach(o),t.forEach(o),this.h()},h:function(){document.title="Home Quick Start with leaflet on Svelte",c(H,"href","https://github.com/anoram/leaflet-svelte"),c(V,"href","https://github.com/anoram/leaflet-svelte"),c(u,"class","col-6"),c(pa,"class","map svelte-dt8ylx"),c(ea,"class","col-6"),c(i,"class","row is-center"),c(n,"class","container")},m:function(a,t){l(a,s,t),l(a,n,t),$(n,i),$(i,u),$(u,f),$(f,k),$(u,m),$(u,R),$(R,M),$(R,H),$(H,C),$(R,T),$(R,V),$(V,j),$(u,q),$(u,A),$(A,L),$(u,O),$(u,Q),$(Q,z),$(Q,F),$(F,_),$(F,B),$(F,G),$(Q,J),$(u,K),$(u,N),$(N,U),$(u,W),D(X,u,null),$(u,Y),$(u,Z),$(Z,aa),$(aa,sa),$(Z,na),$(i,ta),$(i,ea),$(ea,pa),D(oa,pa,null),ca=!0},p:r,i:function(a){ca||(w(X.$$.fragment,a),w(oa.$$.fragment,a),ca=!0)},o:function(a){I(X.$$.fragment,a),I(oa.$$.fragment,a),ca=!1},d:function(a){a&&o(s),a&&o(n),x(X),x(oa)}}}function C(a){return[{center:[13,80],markers:[{lat:13,lng:80}],mapID:"map"}]}var T=function(t){i(p,a);var e=M(p);function p(a){var t;return k(this,p),t=e.call(this),s(m(t),a,C,H,n,{}),t}return p}();export default T;
