import{S as e,i as t,s as a,e as l,t as s,c as r,a as i,k as o,d as h,b as n,f as c,m,n as p,g as f,q as u,j as d,C as v}from"./client.a52649eb.js";function g(e,t,a){const l=e.slice();return l[1]=t[a],l}function E(e){let t,a,f,u,d=e[1].title+"";return{c(){t=l("li"),a=l("a"),f=s(d),this.h()},l(e){t=r(e,"LI",{});var l=i(t);a=r(l,"A",{href:!0});var s=i(a);f=o(s,d),s.forEach(h),l.forEach(h),this.h()},h(){n(a,"href",u="examples/"+e[1].path)},m(e,l){c(e,t,l),m(t,a),m(a,f)},p:p,d(e){e&&h(t)}}}function x(e){let t,a,x,k,y,D,b,w,I=e[0].reverse(),L=[];for(let t=0;t<I.length;t+=1)L[t]=E(g(e,I,t));return{c(){t=f(),a=l("div"),x=l("div"),k=l("div"),y=l("h2"),D=s("Extra examples and implementations"),b=f(),w=l("ul");for(let e=0;e<L.length;e+=1)L[e].c();this.h()},l(e){u('[data-svelte="svelte-mkl8ec"]',document.head).forEach(h),t=d(e),a=r(e,"DIV",{class:!0});var l=i(a);x=r(l,"DIV",{class:!0});var s=i(x);k=r(s,"DIV",{class:!0});var n=i(k);y=r(n,"H2",{});var c=i(y);D=o(c,"Extra examples and implementations"),c.forEach(h),b=d(n),w=r(n,"UL",{});var m=i(w);for(let e=0;e<L.length;e+=1)L[e].l(m);m.forEach(h),n.forEach(h),s.forEach(h),l.forEach(h),this.h()},h(){document.title="Examples",n(k,"class","col"),n(x,"class","row"),n(a,"class","container")},m(e,l){c(e,t,l),c(e,a,l),m(a,x),m(x,k),m(k,y),m(y,D),m(k,b),m(k,w);for(let e=0;e<L.length;e+=1)L[e].m(w,null)},p(e,[t]){if(1&t){let a;for(I=e[0].reverse(),a=0;a<I.length;a+=1){const l=g(e,I,a);L[a]?L[a].p(l,t):(L[a]=E(l),L[a].c(),L[a].m(w,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=I.length}},i:p,o:p,d(e){e&&h(t),e&&h(a),v(L,e)}}}function k(e){return[[{path:"multiplemaps",title:"Multiple maps on same page"},{path:"autocenter",title:"Auto Center markers that are far apart @0.0.4^"},{path:"disablescrollwheelzoom",title:"Disable scroll wheel zoom @0.0.4^"},{path:"tooltip",title:"Tooltip @0.0.6^"},{path:"circle",title:"Drawing circle overlays on a map @0.0.6^"},{path:"themes",title:"Themes with custom tileLayer, updated example @0.0.7^"},{path:"tilelayer",title:"Multiple tileLayer, Breaking Change @0.0.7^"},{path:"dynamicmarker",title:"Dynamic marker via bind:this @0.0.7^"}]]}export default class extends e{constructor(e){super(),t(this,e,k,x,a,{})}}
