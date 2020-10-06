import{S as n,i as s,s as a,e as t,c as p,a as o,d as e,b as c,f as l,n as r,g as u,t as i,h as k,q as m,j as g,k as h,l as f,m as y,o as d,p as v,r as b,u as x}from"./client.a52649eb.js";import{L as E}from"./Leaflet.1975f146.js";function z(n){let s;return{c(){s=t("pre"),this.h()},l(n){s=p(n,"PRE",{class:!0}),o(s).forEach(e),this.h()},h(){c(s,"class","language-html")},m(n,a){l(n,s,a),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    zoom<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    tilelayers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        url<span class="token operator">:</span> <span class="token string">"//&#123;s&#125;.google.com/vt/lyrs=s&amp;x=&#123;x&#125;&amp;y=&#123;y&#125;&amp;z=&#123;z&#125;"</span><span class="token punctuation">,</span>\n        maxZoom<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>\n        subdomains<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"mt0"</span><span class="token punctuation">,</span> <span class="token string">"mt1"</span><span class="token punctuation">,</span> <span class="token string">"mt2"</span><span class="token punctuation">,</span> <span class="token string">"mt3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        attribution<span class="token operator">:</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span>\n        minZoom<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n        opacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        url<span class="token operator">:</span> <span class="token string">"//&#123;s&#125;.google.com/vt/lyrs=m&amp;x=&#123;x&#125;&amp;y=&#123;y&#125;&amp;z=&#123;z&#125;"</span><span class="token punctuation">,</span>\n        maxZoom<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>\n        subdomains<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"mt0"</span><span class="token punctuation">,</span> <span class="token string">"mt1"</span><span class="token punctuation">,</span> <span class="token string">"mt2"</span><span class="token punctuation">,</span> <span class="token string">"mt3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        attribution<span class="token operator">:</span> <span class="token string">"zzz"</span><span class="token punctuation">,</span>\n        minZoom<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n        opacity<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(n){n&&e(s)}}}class $ extends n{constructor(n){super(),s(this,n,null,z,a,{})}}function L(n){let s,a,z,L,Z,w,D,I,M,T,V,j,A,P,S,q,H,N,R,B,C,F,G,J,K,O,Q,U,W,X,Y,_,nn,sn,an="<0.0.6";return C=new $({}),nn=new E({props:{options:n[0]}}),{c(){s=u(),a=t("div"),z=t("div"),L=t("div"),Z=t("a"),w=i("←Examples"),D=u(),I=t("h4"),M=i("Multiple tileLayer "),T=t("span"),V=i("@0.0.7^"),j=u(),A=t("p"),P=i("Regarding\r\n        "),S=t("a"),q=i("Support for\r\n          multiple layers #1"),H=i("\r\n        tileLayer supplied as array of tielayer. This is introducing a breaking\r\n        change and affects versions\r\n        "),N=i(an),R=i("."),B=u(),k(C.$$.fragment),F=u(),G=t("h4"),J=i("Note"),K=u(),O=t("p"),Q=i("This change has effect on themes example and is\r\n        "),U=t("a"),W=i("updated."),X=u(),Y=t("div"),_=t("div"),k(nn.$$.fragment),this.h()},l(n){m('[data-svelte="svelte-1leuxnq"]',document.head).forEach(e),s=g(n),a=p(n,"DIV",{class:!0});var t=o(a);z=p(t,"DIV",{class:!0});var c=o(z);L=p(c,"DIV",{class:!0});var l=o(L);Z=p(l,"A",{href:!0});var r=o(Z);w=h(r,"←Examples"),r.forEach(e),D=g(l),I=p(l,"H4",{});var u=o(I);M=h(u,"Multiple tileLayer "),T=p(u,"SPAN",{class:!0});var i=o(T);V=h(i,"@0.0.7^"),i.forEach(e),u.forEach(e),j=g(l),A=p(l,"P",{});var k=o(A);P=h(k,"Regarding\r\n        "),S=p(k,"A",{href:!0});var y=o(S);q=h(y,"Support for\r\n          multiple layers #1"),y.forEach(e),H=h(k,"\r\n        tileLayer supplied as array of tielayer. This is introducing a breaking\r\n        change and affects versions\r\n        "),N=h(k,an),R=h(k,"."),k.forEach(e),B=g(l),f(C.$$.fragment,l),F=g(l),G=p(l,"H4",{});var d=o(G);J=h(d,"Note"),d.forEach(e),K=g(l),O=p(l,"P",{});var v=o(O);Q=h(v,"This change has effect on themes example and is\r\n        "),U=p(v,"A",{href:!0});var b=o(U);W=h(b,"updated."),b.forEach(e),v.forEach(e),l.forEach(e),X=g(c),Y=p(c,"DIV",{class:!0});var x=o(Y);_=p(x,"DIV",{class:!0});var E=o(_);f(nn.$$.fragment,E),E.forEach(e),x.forEach(e),c.forEach(e),t.forEach(e),this.h()},h(){document.title="Multiple tileLayer",c(Z,"href","examples"),c(T,"class","chip"),c(S,"href","https://github.com/anoram/leaflet-svelte/issues/1"),c(U,"href","./examples/themes"),c(L,"class","col-6"),c(_,"class","map svelte-dt8ylx"),c(Y,"class","col-6"),c(z,"class","row is-center"),c(a,"class","container")},m(n,t){l(n,s,t),l(n,a,t),y(a,z),y(z,L),y(L,Z),y(Z,w),y(L,D),y(L,I),y(I,M),y(I,T),y(T,V),y(L,j),y(L,A),y(A,P),y(A,S),y(S,q),y(A,H),y(A,N),y(A,R),y(L,B),d(C,L,null),y(L,F),y(L,G),y(G,J),y(L,K),y(L,O),y(O,Q),y(O,U),y(U,W),y(z,X),y(z,Y),y(Y,_),d(nn,_,null),sn=!0},p:r,i(n){sn||(v(C.$$.fragment,n),v(nn.$$.fragment,n),sn=!0)},o(n){b(C.$$.fragment,n),b(nn.$$.fragment,n),sn=!1},d(n){n&&e(s),n&&e(a),x(C),x(nn)}}}function Z(n){return[{center:[13,80],zoom:15,mapID:"map",markers:[{lat:13,lng:80}],tilelayers:[{url:"//{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",maxZoom:36,subdomains:["mt0","mt1","mt2","mt3"],attribution:"yyy",minZoom:5,opacity:.5},{url:"//{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",maxZoom:36,subdomains:["mt0","mt1","mt2","mt3"],attribution:"zzz",minZoom:5,opacity:.5}]}]}export default class extends n{constructor(n){super(),s(this,n,Z,L,a,{})}}
