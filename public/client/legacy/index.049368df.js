import{_ as t,g as a,h as e,j as r,i as n,k as o,S as s,s as c,e as i,t as l,c as f,a as u,p as h,d as p,b as v,f as m,u as d,n as g,l as E,o as y,H as x,J as D}from"./client.48d5e9eb.js";function w(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(r){var s=a(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return e(this,n)}}function R(t,a,e){var r=t.slice();return r[1]=a[e],r}function b(t){var a,e,r,n=t[1].title+"";return{c:function(){a=i("li"),e=i("a"),r=l(n),this.h()},l:function(t){a=f(t,"LI",{});var o=u(a);e=f(o,"A",{href:!0});var s=u(e);r=h(s,n),s.forEach(p),o.forEach(p),this.h()},h:function(){v(e,"href","examples/"+t[1].path)},m:function(t,n){m(t,a,n),d(a,e),d(e,r)},p:g,d:function(t){t&&p(a)}}}function I(t){for(var a,e,r,n,o,s,c,w=t[0].reverse(),I=[],L=0;L<w.length;L+=1)I[L]=b(R(t,w,L));return{c:function(){a=i("div"),e=i("div"),r=i("div"),n=i("h2"),o=l("Extra examples and implementations"),s=E(),c=i("ul");for(var t=0;t<I.length;t+=1)I[t].c();this.h()},l:function(t){a=f(t,"DIV",{class:!0});var i=u(a);e=f(i,"DIV",{class:!0});var l=u(e);r=f(l,"DIV",{class:!0});var v=u(r);n=f(v,"H2",{});var m=u(n);o=h(m,"Extra examples and implementations"),m.forEach(p),s=y(v),c=f(v,"UL",{});for(var d=u(c),g=0;g<I.length;g+=1)I[g].l(d);d.forEach(p),v.forEach(p),l.forEach(p),i.forEach(p),this.h()},h:function(){v(r,"class","col"),v(e,"class","row"),v(a,"class","container")},m:function(t,i){m(t,a,i),d(a,e),d(e,r),d(r,n),d(n,o),d(r,s),d(r,c);for(var l=0;l<I.length;l+=1)I[l].m(c,null)},p:function(t,a){var e=x(a,1)[0];if(1&e){var r;for(w=t[0].reverse(),r=0;r<w.length;r+=1){var n=R(t,w,r);I[r]?I[r].p(n,e):(I[r]=b(n),I[r].c(),I[r].m(c,null))}for(;r<I.length;r+=1)I[r].d(1);I.length=w.length}},i:g,o:g,d:function(t){t&&p(a),D(I,t)}}}function L(t){return[[{path:"multiplemaps",title:"Multiple maps on same page"},{path:"autocenter",title:"Auto Center markers that are far apart @0.0.4^"},{path:"disablescrollwheelzoom",title:"Disable scroll wheel zoom @0.0.4^"},{path:"themes",title:"Themes with custom tileLayer @0.0.4^"},{path:"tooltip",title:"Tooltip @0.0.6^"},{path:"circle",title:"Drawing circle overlays on a map @0.0.6^"}]]}var V=function(a){t(i,s);var e=w(i);function i(t){var a;return r(this,i),a=e.call(this),n(o(a),t,L,I,c,{}),a}return i}();export default V;