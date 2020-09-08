import{S as s,i as a,s as n,e as t,c as o,a as p,d as e,b as c,f as l,n as r,g as u,t as i,h as k,q as m,j as h,k as g,l as f,m as d,o as v,p as b,r as $,u as E}from"./client.9dc3ed9e.js";import{C as w}from"./Component.0b7885c2.js";function y(s){let a;return{c(){a=t("pre"),this.h()},l(s){a=o(s,"PRE",{class:!0}),p(a).forEach(e),this.h()},h(){c(a,"class","language-html")},m(s,n){l(s,a,n),a.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n     <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n      recenter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      zoom<span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>\n      markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">&#123;</span>\n          lat<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n          lng<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#123;</span>\n          lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n          lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      scrollWheelZoom<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>\n      mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n      attributionControl<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(s){s&&e(a)}}}class D extends s{constructor(s){super(),a(this,s,null,y,n,{})}}function z(s){let a,n,y,z,I,C,x,V,j,P,W,Z,H,M,N,q,S,A,L,O,R,T,B,F,G,J;return H=new D({}),G=new w({props:{options:s[0]}}),{c(){a=u(),n=t("div"),y=t("div"),z=t("div"),I=t("h4"),C=i("Disable scroll wheel zoom "),x=t("span"),V=i("@0.0.4^"),j=u(),P=t("p"),W=i("Disables mouse wheel intereactions for zoom and allows only zoom via\r\n        controls."),Z=u(),k(H.$$.fragment),M=u(),N=t("h4"),q=i("Note"),S=u(),A=t("p"),L=t("code"),O=i("scrollWheelZoom"),R=i(" by default is true."),T=u(),B=t("div"),F=t("div"),k(G.$$.fragment),this.h()},l(s){m('[data-svelte="svelte-50lzuc"]',document.head).forEach(e),a=h(s),n=o(s,"DIV",{class:!0});var t=p(n);y=o(t,"DIV",{class:!0});var c=p(y);z=o(c,"DIV",{class:!0});var l=p(z);I=o(l,"H4",{});var r=p(I);C=g(r,"Disable scroll wheel zoom "),x=o(r,"SPAN",{class:!0});var u=p(x);V=g(u,"@0.0.4^"),u.forEach(e),r.forEach(e),j=h(l),P=o(l,"P",{});var i=p(P);W=g(i,"Disables mouse wheel intereactions for zoom and allows only zoom via\r\n        controls."),i.forEach(e),Z=h(l),f(H.$$.fragment,l),M=h(l),N=o(l,"H4",{});var k=p(N);q=g(k,"Note"),k.forEach(e),S=h(l),A=o(l,"P",{});var d=p(A);L=o(d,"CODE",{});var v=p(L);O=g(v,"scrollWheelZoom"),v.forEach(e),R=g(d," by default is true."),d.forEach(e),l.forEach(e),T=h(c),B=o(c,"DIV",{class:!0});var b=p(B);F=o(b,"DIV",{class:!0});var $=p(F);f(G.$$.fragment,$),$.forEach(e),b.forEach(e),c.forEach(e),t.forEach(e),this.h()},h(){document.title="Disable scroll wheel zoom",c(x,"class","chip"),c(z,"class","col-6"),c(F,"class","map svelte-dt8ylx"),c(B,"class","col-6"),c(y,"class","row is-center"),c(n,"class","container")},m(s,t){l(s,a,t),l(s,n,t),d(n,y),d(y,z),d(z,I),d(I,C),d(I,x),d(x,V),d(z,j),d(z,P),d(P,W),d(z,Z),v(H,z,null),d(z,M),d(z,N),d(N,q),d(z,S),d(z,A),d(A,L),d(L,O),d(A,R),d(y,T),d(y,B),d(B,F),v(G,F,null),J=!0},p:r,i(s){J||(b(H.$$.fragment,s),b(G.$$.fragment,s),J=!0)},o(s){$(H.$$.fragment,s),$(G.$$.fragment,s),J=!1},d(s){s&&e(a),s&&e(n),E(H),E(G)}}}function I(s){return[{recenter:!0,zoom:5,markers:[{lat:8,lng:8},{lat:13,lng:80}],controls:{zoomControl:!0,position:"topright",scale:!1},scrollWheelZoom:!1,mapID:"map",attributionControl:!0}]}export default class extends s{constructor(s){super(),a(this,s,I,z,n,{})}}
