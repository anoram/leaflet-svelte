import{S as n,i as a,s,e as t,c as p,a as o,d as e,b as c,f as l,n as u,g as r,t as i,h as k,q as m,j as h,k as d,l as g,m as f,o as v,p as b,r as w,u as y}from"./client.a52649eb.js";import{L as x}from"./Leaflet.1975f146.js";function A(n){let a;return{c(){a=t("pre"),this.h()},l(n){a=p(n,"PRE",{class:!0}),o(a).forEach(e),this.h()},h(){c(a,"class","language-html")},m(n,s){l(n,a,s),a.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    zoom<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n    center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13.001</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80.01</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n        popup<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          isOpen<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Marker 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          iconUrl<span class="token operator">:</span> <span class="token string">"https://leafletjs.com/examples/custom-icons/leaf-red.png"</span><span class="token punctuation">,</span>\n          shadowUrl<span class="token operator">:</span>\n            <span class="token string">"https://leafletjs.com/examples/custom-icons/leaf-shadow.png"</span><span class="token punctuation">,</span>\n          iconSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          shadowSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          iconAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          shadowAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          popupAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">76</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n    attributionControl<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:u,i:u,o:u,d(n){n&&e(a)}}}class E extends n{constructor(n){super(),a(this,n,null,A,s,{})}}function $(n){let a,s,A,$,M,I,j,D,H,z,L,P,S,V,U,C,O,T,q,N,R,B,F,G,J;return L=new E({}),G=new x({props:{options:n[0]}}),{c(){a=r(),s=t("div"),A=t("div"),$=t("div"),M=t("h4"),I=i("Multiple markers Example"),j=r(),D=t("p"),H=i("Markers are large part of any mapping API and they are declared as array and can have custom icons. Markers can be extended with Icons and popups(tooltip) and can have HTML inside it you can experiment."),z=r(),k(L.$$.fragment),P=r(),S=t("h4"),V=i("Note"),U=r(),C=t("p"),O=i("Adjust the icon and popup offset by changing "),T=t("code"),q=i("iconAnchor, shadowAnchor, popupAnchor"),N=i(" Having no icon will result a default marker."),R=r(),B=t("div"),F=t("div"),k(G.$$.fragment),this.h()},l(n){m('[data-svelte="svelte-1tm7rp2"]',document.head).forEach(e),a=h(n),s=p(n,"DIV",{class:!0});var t=o(s);A=p(t,"DIV",{class:!0});var c=o(A);$=p(c,"DIV",{class:!0});var l=o($);M=p(l,"H4",{});var u=o(M);I=d(u,"Multiple markers Example"),u.forEach(e),j=h(l),D=p(l,"P",{});var r=o(D);H=d(r,"Markers are large part of any mapping API and they are declared as array and can have custom icons. Markers can be extended with Icons and popups(tooltip) and can have HTML inside it you can experiment."),r.forEach(e),z=h(l),g(L.$$.fragment,l),P=h(l),S=p(l,"H4",{});var i=o(S);V=d(i,"Note"),i.forEach(e),U=h(l),C=p(l,"P",{});var k=o(C);O=d(k,"Adjust the icon and popup offset by changing "),T=p(k,"CODE",{});var f=o(T);q=d(f,"iconAnchor, shadowAnchor, popupAnchor"),f.forEach(e),N=d(k," Having no icon will result a default marker."),k.forEach(e),l.forEach(e),R=h(c),B=p(c,"DIV",{class:!0});var v=o(B);F=p(v,"DIV",{class:!0});var b=o(F);g(G.$$.fragment,b),b.forEach(e),v.forEach(e),c.forEach(e),t.forEach(e),this.h()},h(){document.title="Markers",c($,"class","col-6"),c(F,"class","map svelte-1clh5nd"),c(B,"class","col-6"),c(A,"class","row is-center"),c(s,"class","container")},m(n,t){l(n,a,t),l(n,s,t),f(s,A),f(A,$),f($,M),f(M,I),f($,j),f($,D),f(D,H),f($,z),v(L,$,null),f($,P),f($,S),f(S,V),f($,U),f($,C),f(C,O),f(C,T),f(T,q),f(C,N),f(A,R),f(A,B),f(B,F),v(G,F,null),J=!0},p:u,i(n){J||(b(L.$$.fragment,n),b(G.$$.fragment,n),J=!0)},o(n){w(L.$$.fragment,n),w(G.$$.fragment,n),J=!1},d(n){n&&e(a),n&&e(s),y(L),y(G)}}}function M(n){return[{zoom:13,center:[13,80],markers:[{lat:13.001,lng:80.01},{lat:13,lng:80,popup:{isOpen:!0,text:"Marker 1"},icon:{iconUrl:"https://leafletjs.com/examples/custom-icons/leaf-red.png",shadowUrl:"https://leafletjs.com/examples/custom-icons/leaf-shadow.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76]}}],mapID:"map",attributionControl:!0}]}export default class extends n{constructor(n){super(),a(this,n,M,$,s,{})}}
