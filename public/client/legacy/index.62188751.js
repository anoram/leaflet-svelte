import{_ as t,g as a,h as r,j as e,i as n,k as o,S as c,s,e as i,t as l,c as f,a as u,p as h,d as p,b as v,f as m,u as d,n as g,l as E,o as y,H as x,J as D}from"./client.9c8a37b7.js";function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return r(this,n)}}function R(t,a,r){var e=t.slice();return e[1]=a[r],e}function b(t){var a,r,e,n=t[1].title+"";return{c:function(){a=i("li"),r=i("a"),e=l(n),this.h()},l:function(t){a=f(t,"LI",{});var o=u(a);r=f(o,"A",{href:!0});var c=u(r);e=h(c,n),c.forEach(p),o.forEach(p),this.h()},h:function(){v(r,"href","examples/"+t[1].path)},m:function(t,n){m(t,a,n),d(a,r),d(r,e)},p:g,d:function(t){t&&p(a)}}}function I(t){for(var a,r,e,n,o,c,s,w=t[0].reverse(),I=[],L=0;L<w.length;L+=1)I[L]=b(R(t,w,L));return{c:function(){a=i("div"),r=i("div"),e=i("div"),n=i("h2"),o=l("Extra examples and implementations"),c=E(),s=i("ul");for(var t=0;t<I.length;t+=1)I[t].c();this.h()},l:function(t){a=f(t,"DIV",{class:!0});var i=u(a);r=f(i,"DIV",{class:!0});var l=u(r);e=f(l,"DIV",{class:!0});var v=u(e);n=f(v,"H2",{});var m=u(n);o=h(m,"Extra examples and implementations"),m.forEach(p),c=y(v),s=f(v,"UL",{});for(var d=u(s),g=0;g<I.length;g+=1)I[g].l(d);d.forEach(p),v.forEach(p),l.forEach(p),i.forEach(p),this.h()},h:function(){v(e,"class","col"),v(r,"class","row"),v(a,"class","container")},m:function(t,i){m(t,a,i),d(a,r),d(r,e),d(e,n),d(n,o),d(e,c),d(e,s);for(var l=0;l<I.length;l+=1)I[l].m(s,null)},p:function(t,a){var r=x(a,1)[0];if(1&r){var e;for(w=t[0].reverse(),e=0;e<w.length;e+=1){var n=R(t,w,e);I[e]?I[e].p(n,r):(I[e]=b(n),I[e].c(),I[e].m(s,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=w.length}},i:g,o:g,d:function(t){t&&p(a),D(I,t)}}}function L(t){return[[{path:"multiplemaps",title:"Multiple maps on same page"},{path:"autocenter",title:"Auto Center markers that are far apart @0.0.4^"},{path:"disablescrollwheelzoom",title:"Disable scroll wheel zoom @0.0.4^"},{path:"themes",title:"Themes with custom tileLayer @0.0.4^"},{path:"tooltip",title:"Tooltip @0.0.5^"},{path:"circle",title:"Drawing circle overlays on a map @0.0.5^"}]]}var V=function(a){t(i,c);var r=w(i);function i(t){var a;return e(this,i),a=r.call(this),n(o(a),t,L,I,s,{}),a}return i}();export default V;