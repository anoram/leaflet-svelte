import{S as a,i as s,s as n,e as t,c as p,a as e,d as o,b as c,f as l,n as r,g as u,t as i,h as k,q as m,j as h,k as f,l as g,m as v,o as d,p as E,r as w,u as $}from"./client.a52649eb.js";import{L as y}from"./Leaflet.1975f146.js";function b(a){let s;return{c(){s=t("pre"),this.h()},l(a){s=p(a,"PRE",{class:!0}),e(s).forEach(o),this.h()},h(){c(s,"class","language-html")},m(a,n){l(a,s,n),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    recenter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(a){a&&o(s)}}}class x extends a{constructor(a){super(),s(this,a,null,b,n,{})}}function D(a){let s,n,b,D,I,M,z,V,j,P,Z,q,C,H,L,N,O,R,A,S,T,B,F,G,J,K,Q,U,W,X,Y,_,aa,sa,na;return N=new x({}),sa=new y({props:{options:a[0]}}),{c(){s=u(),n=t("div"),b=t("div"),D=t("div"),I=t("a"),M=i("←Examples"),z=u(),V=t("h4"),j=i("Multiple markers that are far apart "),P=t("span"),Z=i("@0.0.4^"),q=u(),C=t("p"),H=i("Recenter and set map view to center of both the locations or a set of\r\n        markers."),L=u(),k(N.$$.fragment),O=u(),R=t("h4"),A=i("Note"),S=u(),T=t("p"),B=t("code"),F=i("recenter"),G=i(" by default is false, setting it to true and "),J=t("code"),K=i("maxZoom/minZoom"),Q=i("\r\n        values will not work, however if you give value for "),U=t("code"),W=i("zoom"),X=i(" it\r\n        will reset and zoom the map as far as it can go and have all markers in the view."),Y=u(),_=t("div"),aa=t("div"),k(sa.$$.fragment),this.h()},l(a){m('[data-svelte="svelte-uezrq0"]',document.head).forEach(o),s=h(a),n=p(a,"DIV",{class:!0});var t=e(n);b=p(t,"DIV",{class:!0});var c=e(b);D=p(c,"DIV",{class:!0});var l=e(D);I=p(l,"A",{href:!0});var r=e(I);M=f(r,"←Examples"),r.forEach(o),z=h(l),V=p(l,"H4",{});var u=e(V);j=f(u,"Multiple markers that are far apart "),P=p(u,"SPAN",{class:!0});var i=e(P);Z=f(i,"@0.0.4^"),i.forEach(o),u.forEach(o),q=h(l),C=p(l,"P",{});var k=e(C);H=f(k,"Recenter and set map view to center of both the locations or a set of\r\n        markers."),k.forEach(o),L=h(l),g(N.$$.fragment,l),O=h(l),R=p(l,"H4",{});var v=e(R);A=f(v,"Note"),v.forEach(o),S=h(l),T=p(l,"P",{});var d=e(T);B=p(d,"CODE",{});var E=e(B);F=f(E,"recenter"),E.forEach(o),G=f(d," by default is false, setting it to true and "),J=p(d,"CODE",{});var w=e(J);K=f(w,"maxZoom/minZoom"),w.forEach(o),Q=f(d,"\r\n        values will not work, however if you give value for "),U=p(d,"CODE",{});var $=e(U);W=f($,"zoom"),$.forEach(o),X=f(d," it\r\n        will reset and zoom the map as far as it can go and have all markers in the view."),d.forEach(o),l.forEach(o),Y=h(c),_=p(c,"DIV",{class:!0});var y=e(_);aa=p(y,"DIV",{class:!0});var x=e(aa);g(sa.$$.fragment,x),x.forEach(o),y.forEach(o),c.forEach(o),t.forEach(o),this.h()},h(){document.title="Multiple markers that are far apart",c(I,"href","examples"),c(P,"class","chip"),c(D,"class","col-6"),c(aa,"class","map svelte-dt8ylx"),c(_,"class","col-6"),c(b,"class","row is-center"),c(n,"class","container")},m(a,t){l(a,s,t),l(a,n,t),v(n,b),v(b,D),v(D,I),v(I,M),v(D,z),v(D,V),v(V,j),v(V,P),v(P,Z),v(D,q),v(D,C),v(C,H),v(D,L),d(N,D,null),v(D,O),v(D,R),v(R,A),v(D,S),v(D,T),v(T,B),v(B,F),v(T,G),v(T,J),v(J,K),v(T,Q),v(T,U),v(U,W),v(T,X),v(b,Y),v(b,_),v(_,aa),d(sa,aa,null),na=!0},p:r,i(a){na||(E(N.$$.fragment,a),E(sa.$$.fragment,a),na=!0)},o(a){w(N.$$.fragment,a),w(sa.$$.fragment,a),na=!1},d(a){a&&o(s),a&&o(n),$(N),$(sa)}}}function I(a){return[{recenter:!0,markers:[{lat:1,lng:1},{lat:13,lng:80}],mapID:"map"}]}export default class extends a{constructor(a){super(),s(this,a,I,D,n,{})}}