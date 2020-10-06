import{S as n,i as s,s as a,e as t,c as p,a as o,d as e,b as c,f as l,n as r,_ as u,g as i,h as k,j as m,k as h,l as f,t as g,m as d,q as b,o as y,p as v,r as w,u as x,v as E,w as $,x as S,y as A}from"./client.f81d29d5.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/createClass";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/defineProperty";import{L as T}from"./Leaflet.de470149.js";function O(n){let s;return{c(){s=t("pre"),this.h()},l(n){s=p(n,"PRE",{class:!0}),o(s).forEach(e),this.h()},h(){c(s,"class","language-html")},m(n,a){l(n,s,a),s.innerHTML='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">"@anoram/leaflet-svelte"</span><span class="token punctuation">;</span>\n <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    center<span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    zoom<span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>\n    markers<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n        tooltip<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          isOpen<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Permanant Tooltip</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n          direction<span class="token operator">:</span> <span class="token string">"right"</span><span class="token punctuation">,</span>\n          permanent<span class="token operator">:</span><span class="token string">\'true\'</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        lat<span class="token operator">:</span> <span class="token number">13.005</span><span class="token punctuation">,</span>\n        lng<span class="token operator">:</span> <span class="token number">80.001</span><span class="token punctuation">,</span>\n        tooltip<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          isOpen<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sticky tooltip</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n          direction<span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>\n          sticky<span class="token operator">:</span><span class="token string">\'true\'</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          iconUrl<span class="token operator">:</span> <span class="token string">"https://leafletjs.com/examples/custom-icons/leaf-red.png"</span><span class="token punctuation">,</span>\n          shadowUrl<span class="token operator">:</span>\n            <span class="token string">"https://leafletjs.com/examples/custom-icons/leaf-shadow.png"</span><span class="token punctuation">,</span>\n          iconSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          shadowSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          iconAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          shadowAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          popupAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">76</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          tooltipAnchor<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">76</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n    tileLayer<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      url<span class="token operator">:</span> <span class="token string">"https://&#123;s&#125;.tile.openstreetmap.fr/hot/&#123;z&#125;/&#123;x&#125;/&#123;y&#125;.png"</span><span class="token punctuation">,</span>\n      attribution<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright">OpenStreetMap&lt;/a> contributors, Tiles style by &lt;a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team&lt;/a> hosted by &lt;a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France&lt;/a></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n  \n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.map</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">&#123;options&#125;</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'},p:r,i:r,o:r,d(n){n&&e(s)}}}class D extends n{constructor(n){super(),s(this,n,null,O,a,{})}}function I(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,t=i(n);if(s){var p=i(this).constructor;a=Reflect.construct(t,arguments,p)}else a=t.apply(this,arguments);return k(this,a)}}function j(n){var s,a,u,i,k,m,h,O,I,j,z,M,P,R,U,C,H,L,V,_,F,N,q,B,G,J,K,Q,W,X,Y,Z;return L=new D({}),Y=new T({props:{options:n[0]}}),{c:function(){s=f(),a=t("div"),u=t("div"),i=t("div"),k=t("a"),m=g("←Examples"),h=f(),O=t("h4"),I=g("Tooltip "),j=t("span"),z=g("@0.0.6^"),M=f(),P=t("p"),R=g("Used to display small texts on top of map layers. "),U=t("a"),C=g("Further\r\n          Reading about Tooltips"),H=f(),d(L.$$.fragment),V=f(),_=t("h4"),F=g("Note"),N=f(),q=t("p"),B=g("If you are using a custom icon then you need to offeset the tooltip via "),G=t("code"),J=g("tooltipAnchor"),K=g("in the icon options, refer second custom icon marker."),Q=f(),W=t("div"),X=t("div"),d(Y.$$.fragment),this.h()},l:function(n){b('[data-svelte="svelte-v5ko3m"]',document.head).forEach(e),s=y(n),a=p(n,"DIV",{class:!0});var t=o(a);u=p(t,"DIV",{class:!0});var c=o(u);i=p(c,"DIV",{class:!0});var l=o(i);k=p(l,"A",{href:!0});var r=o(k);m=v(r,"←Examples"),r.forEach(e),h=y(l),O=p(l,"H4",{});var f=o(O);I=v(f,"Tooltip "),j=p(f,"SPAN",{class:!0});var g=o(j);z=v(g,"@0.0.6^"),g.forEach(e),f.forEach(e),M=y(l),P=p(l,"P",{});var d=o(P);R=v(d,"Used to display small texts on top of map layers. "),U=p(d,"A",{href:!0});var x=o(U);C=v(x,"Further\r\n          Reading about Tooltips"),x.forEach(e),d.forEach(e),H=y(l),w(L.$$.fragment,l),V=y(l),_=p(l,"H4",{});var E=o(_);F=v(E,"Note"),E.forEach(e),N=y(l),q=p(l,"P",{});var $=o(q);B=v($,"If you are using a custom icon then you need to offeset the tooltip via "),G=p($,"CODE",{});var S=o(G);J=v(S,"tooltipAnchor"),S.forEach(e),K=v($,"in the icon options, refer second custom icon marker."),$.forEach(e),l.forEach(e),Q=y(c),W=p(c,"DIV",{class:!0});var A=o(W);X=p(A,"DIV",{class:!0});var T=o(X);w(Y.$$.fragment,T),T.forEach(e),A.forEach(e),c.forEach(e),t.forEach(e),this.h()},h:function(){document.title="Tooltip",c(k,"href","examples"),c(j,"class","chip"),c(U,"href","https://leafletjs.com/reference-1.7.1.html#tooltip"),c(i,"class","col-6"),c(X,"class","map svelte-dt8ylx"),c(W,"class","col-6"),c(u,"class","row is-center"),c(a,"class","container")},m:function(n,t){l(n,s,t),l(n,a,t),x(a,u),x(u,i),x(i,k),x(k,m),x(i,h),x(i,O),x(O,I),x(O,j),x(j,z),x(i,M),x(i,P),x(P,R),x(P,U),x(U,C),x(i,H),E(L,i,null),x(i,V),x(i,_),x(_,F),x(i,N),x(i,q),x(q,B),x(q,G),x(G,J),x(q,K),x(u,Q),x(u,W),x(W,X),E(Y,X,null),Z=!0},p:r,i:function(n){Z||($(L.$$.fragment,n),$(Y.$$.fragment,n),Z=!0)},o:function(n){S(L.$$.fragment,n),S(Y.$$.fragment,n),Z=!1},d:function(n){n&&e(s),n&&e(a),A(L),A(Y)}}}function z(n){return[{center:[13,80],zoom:15,markers:[{lat:13,lng:80,tooltip:{text:"Permanant Tooltip",direction:"right",permanent:"true"}},{lat:13.005,lng:80.001,tooltip:{isOpen:!1,text:"Sticky tooltip",direction:"top",sticky:"true"},icon:{iconUrl:"https://leafletjs.com/examples/custom-icons/leaf-red.png",shadowUrl:"https://leafletjs.com/examples/custom-icons/leaf-shadow.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76],tooltipAnchor:[-3,-76]}}],mapID:"map",tileLayer:{url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'}}]}var M=function(t){u(o,n);var p=I(o);function o(n){var t;return m(this,o),t=p.call(this),s(h(t),n,z,j,a,{}),t}return o}();export default M;
