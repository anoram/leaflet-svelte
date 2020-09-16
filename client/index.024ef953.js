import{S as a,i as s,s as n,e as t,c as p,a as e,d as o,b as c,f as l,n as r,g as u,t as i,h as k,q as h,j as m,k as f,l as g,m as v,o as d,p as E,r as $,u as y}from"./client.27f5503e.js";import{L as D}from"./Leaflet.764aae6b.js";function w(a){let s;return{c(){s=t("pre"),this.h()},l(a){s=p(a,"PRE",{class:!0}),e(s).forEach(o),this.h()},h(){c(s,"class","language-html")},m(a,n){l(a,s,n),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">\'@anoram/leaflet-svelte\'</span>\n<span class="token keyword">let</span> options<span class="token operator">=</span><span class="token punctuation">&#123;</span>\n  center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span>\n      lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n      lng<span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  mapID<span class="token operator">:</span> <span class="token string">"map"</span>\n<span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(a){a&&o(s)}}}class I extends a{constructor(a){super(),s(this,a,null,w,n,{})}}function b(a){let s,n,w,b,x,M,S,H,P,V,j,q,L,Q,T,A,C,F,O,R,z,B,G,J,K,N,U,W,X,Y,Z,_,aa,sa,na,ta,pa,ea,oa,ca,la="{options}";return Y=new I({}),oa=new D({props:{options:a[0]}}),{c(){s=u(),n=t("div"),w=t("div"),b=t("div"),x=t("h4"),M=i("Quick Start"),S=u(),H=t("p"),P=i("Svelte wrapper for leaflet. To use in "),V=t("a"),j=i("svelte"),q=i(".\n        For bugs and suggestions please file issue "),L=t("a"),Q=i("here"),T=u(),A=t("pre"),C=i("npm i @anoram/leaflet-svelte"),F=u(),O=t("p"),R=i("Have "),z=t("code"),B=i("<Map options="),G=i(la),J=i("/>"),K=i(" a child of a div and supply\n        custom css for height/width."),N=u(),U=t("h4"),W=i("Minimal Example"),X=u(),k(Y.$$.fragment),Z=u(),_=t("p"),aa=t("code"),sa=i("mapID"),na=i(" is unique like if you are planning to use multiple maps on the same page consider having different mapID"),ta=u(),pa=t("div"),ea=t("div"),k(oa.$$.fragment),this.h()},l(a){h('[data-svelte="svelte-1zskho"]',document.head).forEach(o),s=m(a),n=p(a,"DIV",{class:!0});var t=e(n);w=p(t,"DIV",{class:!0});var c=e(w);b=p(c,"DIV",{class:!0});var l=e(b);x=p(l,"H4",{});var r=e(x);M=f(r,"Quick Start"),r.forEach(o),S=m(l),H=p(l,"P",{});var u=e(H);P=f(u,"Svelte wrapper for leaflet. To use in "),V=p(u,"A",{href:!0});var i=e(V);j=f(i,"svelte"),i.forEach(o),q=f(u,".\n        For bugs and suggestions please file issue "),L=p(u,"A",{href:!0});var k=e(L);Q=f(k,"here"),k.forEach(o),u.forEach(o),T=m(l),A=p(l,"PRE",{});var v=e(A);C=f(v,"npm i @anoram/leaflet-svelte"),v.forEach(o),F=m(l),O=p(l,"P",{});var d=e(O);R=f(d,"Have "),z=p(d,"CODE",{});var E=e(z);B=f(E,"<Map options="),G=f(E,la),J=f(E,"/>"),E.forEach(o),K=f(d," a child of a div and supply\n        custom css for height/width."),d.forEach(o),N=m(l),U=p(l,"H4",{});var $=e(U);W=f($,"Minimal Example"),$.forEach(o),X=m(l),g(Y.$$.fragment,l),Z=m(l),_=p(l,"P",{});var y=e(_);aa=p(y,"CODE",{});var D=e(aa);sa=f(D,"mapID"),D.forEach(o),na=f(y," is unique like if you are planning to use multiple maps on the same page consider having different mapID"),y.forEach(o),l.forEach(o),ta=m(c),pa=p(c,"DIV",{class:!0});var I=e(pa);ea=p(I,"DIV",{class:!0});var ca=e(ea);g(oa.$$.fragment,ca),ca.forEach(o),I.forEach(o),c.forEach(o),t.forEach(o),this.h()},h(){document.title="Home Quick Start with leaflet on Svelte",c(V,"href","https://github.com/anoram/leaflet-svelte"),c(L,"href","https://github.com/anoram/leaflet-svelte"),c(b,"class","col-6"),c(ea,"class","map svelte-dt8ylx"),c(pa,"class","col-6"),c(w,"class","row is-center"),c(n,"class","container")},m(a,t){l(a,s,t),l(a,n,t),v(n,w),v(w,b),v(b,x),v(x,M),v(b,S),v(b,H),v(H,P),v(H,V),v(V,j),v(H,q),v(H,L),v(L,Q),v(b,T),v(b,A),v(A,C),v(b,F),v(b,O),v(O,R),v(O,z),v(z,B),v(z,G),v(z,J),v(O,K),v(b,N),v(b,U),v(U,W),v(b,X),d(Y,b,null),v(b,Z),v(b,_),v(_,aa),v(aa,sa),v(_,na),v(w,ta),v(w,pa),v(pa,ea),d(oa,ea,null),ca=!0},p:r,i(a){ca||(E(Y.$$.fragment,a),E(oa.$$.fragment,a),ca=!0)},o(a){$(Y.$$.fragment,a),$(oa.$$.fragment,a),ca=!1},d(a){a&&o(s),a&&o(n),y(Y),y(oa)}}}function x(a){return[{center:[13,80],markers:[{lat:13,lng:80}],mapID:"map"}]}export default class extends a{constructor(a){super(),s(this,a,x,b,n,{})}}
