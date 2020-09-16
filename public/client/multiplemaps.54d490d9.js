import{S as a,i as n,s,e as t,c as p,a as o,d as e,b as c,f as l,n as u,g as r,t as i,h as k,q as m,j as g,k as f,l as h,m as v,o as d,p as E,r as $,u as w}from"./client.27f5503e.js";import{L as y}from"./Leaflet.764aae6b.js";function D(a){let n;return{c(){n=t("pre"),this.h()},l(a){n=p(a,"PRE",{class:!0}),o(n).forEach(e),this.h()},h(){c(n,"class","language-html")},m(a,s){l(a,n,s),n.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> options2 <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map2"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;options2&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:u,i:u,o:u,d(a){a&&e(n)}}}class b extends a{constructor(a){super(),n(this,a,null,D,s,{})}}function I(a){let n,s,D,I,M,x,q,V,z,j,C,O,Z,H,L,P,N,A,R,S,T,B,F,G,J,K,Q,U,W,X,Y,_,aa,na,sa,ta,pa,oa,ea;return N=new b({}),sa=new y({props:{options:a[0]}}),oa=new y({props:{options:a[1]}}),{c(){n=r(),s=t("div"),D=t("div"),I=t("div"),M=t("a"),x=i("←Examples"),q=r(),V=t("h4"),z=i("Multiple Maps"),j=r(),C=t("p"),O=i("Multiple maps on same page can be achieved by supplying unique "),Z=t("code"),H=i("mapID"),L=i("."),P=r(),k(N.$$.fragment),A=r(),R=t("h4"),S=i("Note"),T=r(),B=t("p"),F=t("code"),G=i("recenter"),J=i(" by default is false, setting it to true and "),K=t("code"),Q=i("maxZoom/minZoom"),U=i("\r\n        values will not work, however if you give value for "),W=t("code"),X=i("zoom"),Y=i(" it\r\n        will reset and recenter."),_=r(),aa=t("div"),na=t("div"),k(sa.$$.fragment),ta=r(),pa=t("div"),k(oa.$$.fragment),this.h()},l(a){m('[data-svelte="svelte-co408m"]',document.head).forEach(e),n=g(a),s=p(a,"DIV",{class:!0});var t=o(s);D=p(t,"DIV",{class:!0});var c=o(D);I=p(c,"DIV",{class:!0});var l=o(I);M=p(l,"A",{href:!0});var u=o(M);x=f(u,"←Examples"),u.forEach(e),q=g(l),V=p(l,"H4",{});var r=o(V);z=f(r,"Multiple Maps"),r.forEach(e),j=g(l),C=p(l,"P",{});var i=o(C);O=f(i,"Multiple maps on same page can be achieved by supplying unique "),Z=p(i,"CODE",{});var k=o(Z);H=f(k,"mapID"),k.forEach(e),L=f(i,"."),i.forEach(e),P=g(l),h(N.$$.fragment,l),A=g(l),R=p(l,"H4",{});var v=o(R);S=f(v,"Note"),v.forEach(e),T=g(l),B=p(l,"P",{});var d=o(B);F=p(d,"CODE",{});var E=o(F);G=f(E,"recenter"),E.forEach(e),J=f(d," by default is false, setting it to true and "),K=p(d,"CODE",{});var $=o(K);Q=f($,"maxZoom/minZoom"),$.forEach(e),U=f(d,"\r\n        values will not work, however if you give value for "),W=p(d,"CODE",{});var w=o(W);X=f(w,"zoom"),w.forEach(e),Y=f(d," it\r\n        will reset and recenter."),d.forEach(e),l.forEach(e),_=g(c),aa=p(c,"DIV",{class:!0});var y=o(aa);na=p(y,"DIV",{class:!0});var b=o(na);h(sa.$$.fragment,b),b.forEach(e),ta=g(y),pa=p(y,"DIV",{class:!0});var ea=o(pa);h(oa.$$.fragment,ea),ea.forEach(e),y.forEach(e),c.forEach(e),t.forEach(e),this.h()},h(){document.title="Multiple Maps",c(M,"href","examples"),c(I,"class","col-6"),c(na,"class","map svelte-szbau7"),c(pa,"class","map svelte-szbau7"),c(aa,"class","col-6"),c(D,"class","row is-center"),c(s,"class","container")},m(a,t){l(a,n,t),l(a,s,t),v(s,D),v(D,I),v(I,M),v(M,x),v(I,q),v(I,V),v(V,z),v(I,j),v(I,C),v(C,O),v(C,Z),v(Z,H),v(C,L),v(I,P),d(N,I,null),v(I,A),v(I,R),v(R,S),v(I,T),v(I,B),v(B,F),v(F,G),v(B,J),v(B,K),v(K,Q),v(B,U),v(B,W),v(W,X),v(B,Y),v(D,_),v(D,aa),v(aa,na),d(sa,na,null),v(aa,ta),v(aa,pa),d(oa,pa,null),ea=!0},p:u,i(a){ea||(E(N.$$.fragment,a),E(sa.$$.fragment,a),E(oa.$$.fragment,a),ea=!0)},o(a){$(N.$$.fragment,a),$(sa.$$.fragment,a),$(oa.$$.fragment,a),ea=!1},d(a){a&&e(n),a&&e(s),w(N),w(sa),w(oa)}}}function M(a){return[{recenter:!0,markers:[{lat:13,lng:80}],mapID:"map"},{zoom:5,center:[6,6],markers:[{lat:6,lng:6}],mapID:"map2"}]}export default class extends a{constructor(a){super(),n(this,a,M,I,s,{})}}