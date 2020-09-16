import{S as a,i as n,s,e as t,c as p,a as e,d as o,b as c,f as l,n as r,_ as u,g as i,h as k,j as m,k as f,l as h,t as g,m as v,q as d,o as b,p as y,r as E,u as $,v as w,w as D,x as I,y as M}from"./client.552f27ae.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/defineProperty";import"@babel/runtime/helpers/esm/slicedToArray";import{L as x}from"./Leaflet.b4123ade.js";function C(a){let n;return{c(){n=t("pre"),this.h()},l(a){n=p(a,"PRE",{class:!0}),e(n).forEach(o),this.h()},h(){c(n,"class","language-html")},m(a,s){l(a,n,s),n.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> options2 <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map2"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;options2&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(a){a&&o(n)}}}class R extends a{constructor(a){super(),n(this,a,null,C,s,{})}}function q(a){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,t=i(a);if(n){var p=i(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return k(this,s)}}function z(a){var n,s,u,i,k,m,f,C,q,z,P,V,O,j,Z,H,L,T,A,N,S,_,B,F,G,J,K,Q,U,W,X,Y,aa,na,sa,ta,pa,ea,oa;return L=new R({}),sa=new x({props:{options:a[0]}}),ea=new x({props:{options:a[1]}}),{c:function(){n=h(),s=t("div"),u=t("div"),i=t("div"),k=t("a"),m=g("←Examples"),f=h(),C=t("h4"),q=g("Multiple Maps"),z=h(),P=t("p"),V=g("Multiple maps on same page can be achieved by supplying unique "),O=t("code"),j=g("mapID"),Z=g("."),H=h(),v(L.$$.fragment),T=h(),A=t("h4"),N=g("Note"),S=h(),_=t("p"),B=t("code"),F=g("recenter"),G=g(" by default is false, setting it to true and "),J=t("code"),K=g("maxZoom/minZoom"),Q=g("\r\n        values will not work, however if you give value for "),U=t("code"),W=g("zoom"),X=g(" it\r\n        will reset and recenter."),Y=h(),aa=t("div"),na=t("div"),v(sa.$$.fragment),ta=h(),pa=t("div"),v(ea.$$.fragment),this.h()},l:function(a){d('[data-svelte="svelte-co408m"]',document.head).forEach(o),n=b(a),s=p(a,"DIV",{class:!0});var t=e(s);u=p(t,"DIV",{class:!0});var c=e(u);i=p(c,"DIV",{class:!0});var l=e(i);k=p(l,"A",{href:!0});var r=e(k);m=y(r,"←Examples"),r.forEach(o),f=b(l),C=p(l,"H4",{});var h=e(C);q=y(h,"Multiple Maps"),h.forEach(o),z=b(l),P=p(l,"P",{});var g=e(P);V=y(g,"Multiple maps on same page can be achieved by supplying unique "),O=p(g,"CODE",{});var v=e(O);j=y(v,"mapID"),v.forEach(o),Z=y(g,"."),g.forEach(o),H=b(l),E(L.$$.fragment,l),T=b(l),A=p(l,"H4",{});var $=e(A);N=y($,"Note"),$.forEach(o),S=b(l),_=p(l,"P",{});var w=e(_);B=p(w,"CODE",{});var D=e(B);F=y(D,"recenter"),D.forEach(o),G=y(w," by default is false, setting it to true and "),J=p(w,"CODE",{});var I=e(J);K=y(I,"maxZoom/minZoom"),I.forEach(o),Q=y(w,"\r\n        values will not work, however if you give value for "),U=p(w,"CODE",{});var M=e(U);W=y(M,"zoom"),M.forEach(o),X=y(w," it\r\n        will reset and recenter."),w.forEach(o),l.forEach(o),Y=b(c),aa=p(c,"DIV",{class:!0});var x=e(aa);na=p(x,"DIV",{class:!0});var R=e(na);E(sa.$$.fragment,R),R.forEach(o),ta=b(x),pa=p(x,"DIV",{class:!0});var oa=e(pa);E(ea.$$.fragment,oa),oa.forEach(o),x.forEach(o),c.forEach(o),t.forEach(o),this.h()},h:function(){document.title="Multiple Maps",c(k,"href","examples"),c(i,"class","col-6"),c(na,"class","map svelte-szbau7"),c(pa,"class","map svelte-szbau7"),c(aa,"class","col-6"),c(u,"class","row is-center"),c(s,"class","container")},m:function(a,t){l(a,n,t),l(a,s,t),$(s,u),$(u,i),$(i,k),$(k,m),$(i,f),$(i,C),$(C,q),$(i,z),$(i,P),$(P,V),$(P,O),$(O,j),$(P,Z),$(i,H),w(L,i,null),$(i,T),$(i,A),$(A,N),$(i,S),$(i,_),$(_,B),$(B,F),$(_,G),$(_,J),$(J,K),$(_,Q),$(_,U),$(U,W),$(_,X),$(u,Y),$(u,aa),$(aa,na),w(sa,na,null),$(aa,ta),$(aa,pa),w(ea,pa,null),oa=!0},p:r,i:function(a){oa||(D(L.$$.fragment,a),D(sa.$$.fragment,a),D(ea.$$.fragment,a),oa=!0)},o:function(a){I(L.$$.fragment,a),I(sa.$$.fragment,a),I(ea.$$.fragment,a),oa=!1},d:function(a){a&&o(n),a&&o(s),M(L),M(sa),M(ea)}}}function P(a){return[{recenter:!0,markers:[{lat:13,lng:80}],mapID:"map"},{zoom:5,center:[6,6],markers:[{lat:6,lng:6}],mapID:"map2"}]}var V=function(t){u(e,a);var p=q(e);function e(a){var t;return m(this,e),t=p.call(this),n(f(t),a,P,z,s,{}),t}return e}();export default V;
