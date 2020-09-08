import{S as a,i as s,s as n,e as t,c as o,a as e,d as r,b as c,f as i,n as l,_ as p,g as u,h,j as f,k as m,t as v,l as d,m as b,o as k,p as g,q as E,r as y,u as I,v as C,w as D,x as $}from"./client.a5bb1bec.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/slicedToArray";import{C as w}from"./Component.ec84a5b9.js";function z(a){let s;return{c(){s=t("pre"),this.h()},l(a){s=o(a,"PRE",{class:!0}),e(s).forEach(r),this.h()},h(){c(s,"class","language-js")},m(a,n){i(a,s,n),s.innerHTML='<code class="language-js"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n    zoom<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n    maxZoom<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>\n    minZoom<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    controls<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      zoomControl<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      position<span class="token operator">:</span> <span class="token string">"bottomright"</span><span class="token punctuation">,</span>\n      scale<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mapID<span class="token operator">:</span> <span class="token string">"map"</span><span class="token punctuation">,</span>\n    attributionControl<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:l,i:l,o:l,d(a){a&&r(s)}}}class x extends a{constructor(a){super(),s(this,a,null,z,n,{})}}function S(a){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var n,t=u(a);if(s){var o=u(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return h(this,n)}}function A(a){var s,n,p,u,h,f,m,z,S,A,O,P,V,j,L,R,H,T,M,N,Y,Z,q,U,_,B,F,G,J,K,Q,W,X,aa,sa,na,ta,oa,ea,ra,ca,ia,la,pa,ua,ha,fa,ma,va,da,ba,ka,ga,Ea,ya,Ia,Ca,Da,$a,wa,za,xa="<slots />";return B=new x({}),K=new w({props:{options:a[0]}}),{c:function(){s=t("div"),n=t("div"),p=t("div"),u=t("h4"),h=v("Miscellaneous Settings"),f=d(),m=t("p"),z=v("Covers additional customization of the map view this example has no markers, markers options can be omitted if you just need the map. You could set the "),S=t("code"),A=v("attributionControl"),O=v(" false to remove Attribution"),P=d(),V=t("p"),j=t("code"),L=v("controls"),R=v(" can be placed in the following locations the "),H=t("code"),T=v("scale"),M=v(" assumes the positions along with the zoom controls. Valid positions are\n        "),N=t("code"),Y=v("topleft', 'topright', 'bottomleft' or 'bottomright'"),Z=d(),q=t("h4"),U=v("Example"),_=d(),b(B.$$.fragment),F=d(),G=t("div"),J=t("div"),b(K.$$.fragment),Q=d(),W=t("div"),X=t("div"),aa=t("h4"),sa=v("Other existing libraries and Acreditation"),na=d(),ta=t("ul"),oa=t("li"),ea=v("This library aims to provide most options and simpler config. Personally I am not a huge fan of "),ra=t("code"),ca=v(xa),ia=v(" which is the key motivation."),la=d(),pa=t("li"),ua=t("a"),ha=v("Official Leaflet."),fa=d(),ma=t("li"),va=t("a"),da=v("IvanSanchez/svelte-leaflet"),ba=d(),ka=t("span"),ga=v("Has Sloted svelte components and closes 1-1 library."),Ea=d(),ya=t("li"),Ia=t("a"),Ca=v("beyonk-adventures/async-script-loader"),Da=d(),$a=t("span"),wa=v("used to load the styles and script."),this.h()},l:function(a){s=o(a,"DIV",{class:!0});var t=e(s);n=o(t,"DIV",{class:!0});var c=e(n);p=o(c,"DIV",{class:!0});var i=e(p);u=o(i,"H4",{});var l=e(u);h=k(l,"Miscellaneous Settings"),l.forEach(r),f=g(i),m=o(i,"P",{});var v=e(m);z=k(v,"Covers additional customization of the map view this example has no markers, markers options can be omitted if you just need the map. You could set the "),S=o(v,"CODE",{});var d=e(S);A=k(d,"attributionControl"),d.forEach(r),O=k(v," false to remove Attribution"),v.forEach(r),P=g(i),V=o(i,"P",{});var b=e(V);j=o(b,"CODE",{});var y=e(j);L=k(y,"controls"),y.forEach(r),R=k(b," can be placed in the following locations the "),H=o(b,"CODE",{});var I=e(H);T=k(I,"scale"),I.forEach(r),M=k(b," assumes the positions along with the zoom controls. Valid positions are\n        "),N=o(b,"CODE",{});var C=e(N);Y=k(C,"topleft', 'topright', 'bottomleft' or 'bottomright'"),C.forEach(r),b.forEach(r),Z=g(i),q=o(i,"H4",{});var D=e(q);U=k(D,"Example"),D.forEach(r),_=g(i),E(B.$$.fragment,i),i.forEach(r),F=g(c),G=o(c,"DIV",{class:!0});var $=e(G);J=o($,"DIV",{class:!0});var w=e(J);E(K.$$.fragment,w),w.forEach(r),$.forEach(r),c.forEach(r),Q=g(t),W=o(t,"DIV",{class:!0});var x=e(W);X=o(x,"DIV",{class:!0});var za=e(X);aa=o(za,"H4",{});var Sa=e(aa);sa=k(Sa,"Other existing libraries and Acreditation"),Sa.forEach(r),na=g(za),ta=o(za,"UL",{});var Aa=e(ta);oa=o(Aa,"LI",{});var Oa=e(oa);ea=k(Oa,"This library aims to provide most options and simpler config. Personally I am not a huge fan of "),ra=o(Oa,"CODE",{});var Pa=e(ra);ca=k(Pa,xa),Pa.forEach(r),ia=k(Oa," which is the key motivation."),Oa.forEach(r),la=g(Aa),pa=o(Aa,"LI",{});var Va=e(pa);ua=o(Va,"A",{href:!0});var ja=e(ua);ha=k(ja,"Official Leaflet."),ja.forEach(r),Va.forEach(r),fa=g(Aa),ma=o(Aa,"LI",{});var La=e(ma);va=o(La,"A",{href:!0});var Ra=e(va);da=k(Ra,"IvanSanchez/svelte-leaflet"),Ra.forEach(r),ba=g(La),ka=o(La,"SPAN",{});var Ha=e(ka);ga=k(Ha,"Has Sloted svelte components and closes 1-1 library."),Ha.forEach(r),La.forEach(r),Ea=g(Aa),ya=o(Aa,"LI",{});var Ta=e(ya);Ia=o(Ta,"A",{href:!0});var Ma=e(Ia);Ca=k(Ma,"beyonk-adventures/async-script-loader"),Ma.forEach(r),Da=g(Ta),$a=o(Ta,"SPAN",{});var Na=e($a);wa=k(Na,"used to load the styles and script."),Na.forEach(r),Ta.forEach(r),Aa.forEach(r),za.forEach(r),x.forEach(r),t.forEach(r),this.h()},h:function(){c(p,"class","col-6"),c(J,"class","map svelte-1clh5nd"),c(G,"class","col-6"),c(n,"class","row is-center"),c(ua,"href","https://leafletjs.com"),c(va,"href","https://gitlab.com/IvanSanchez/svelte-leaflet"),c(Ia,"href","https://github.com/beyonk-adventures/async-script-loader"),c(X,"class","col"),c(W,"class","row is-center"),c(s,"class","container")},m:function(a,t){i(a,s,t),y(s,n),y(n,p),y(p,u),y(u,h),y(p,f),y(p,m),y(m,z),y(m,S),y(S,A),y(m,O),y(p,P),y(p,V),y(V,j),y(j,L),y(V,R),y(V,H),y(H,T),y(V,M),y(V,N),y(N,Y),y(p,Z),y(p,q),y(q,U),y(p,_),I(B,p,null),y(n,F),y(n,G),y(G,J),I(K,J,null),y(s,Q),y(s,W),y(W,X),y(X,aa),y(aa,sa),y(X,na),y(X,ta),y(ta,oa),y(oa,ea),y(oa,ra),y(ra,ca),y(oa,ia),y(ta,la),y(ta,pa),y(pa,ua),y(ua,ha),y(ta,fa),y(ta,ma),y(ma,va),y(va,da),y(ma,ba),y(ma,ka),y(ka,ga),y(ta,Ea),y(ta,ya),y(ya,Ia),y(Ia,Ca),y(ya,Da),y(ya,$a),y($a,wa),za=!0},p:l,i:function(a){za||(C(B.$$.fragment,a),C(K.$$.fragment,a),za=!0)},o:function(a){D(B.$$.fragment,a),D(K.$$.fragment,a),za=!1},d:function(a){a&&r(s),$(B),$(K)}}}function O(a){return[{zoom:13,center:[13,80],mapID:"map",attributionControl:!1,controls:{zoomControl:!1,position:"bottomright",scale:!0}}]}var P=function(t){p(e,a);var o=S(e);function e(a){var t;return f(this,e),t=o.call(this),s(m(t),a,O,A,n,{}),t}return e}();export default P;