import{S as t,i as e,s as a,e as l,t as s,c as r,a as o,k as h,d as i,b as n,f as c,m as p,n as m,g as f,j as u,C as v}from"./client.bba8b1e3.js";function d(t,e,a){const l=t.slice();return l[1]=e[a],l}function g(t){let e,a,f,u,v=t[1].title+"";return{c(){e=l("li"),a=l("a"),f=s(v),this.h()},l(t){e=r(t,"LI",{});var l=o(e);a=r(l,"A",{href:!0});var s=o(a);f=h(s,v),s.forEach(i),l.forEach(i),this.h()},h(){n(a,"href",u="examples/"+t[1].path)},m(t,l){c(t,e,l),p(e,a),p(a,f)},p:m,d(t){t&&i(e)}}}function E(t){let e,a,E,x,b,w,D,I=t[0].reverse(),L=[];for(let e=0;e<I.length;e+=1)L[e]=g(d(t,I,e));return{c(){e=l("div"),a=l("div"),E=l("div"),x=l("h2"),b=s("Extra examples and implementations"),w=f(),D=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var l=o(e);a=r(l,"DIV",{class:!0});var s=o(a);E=r(s,"DIV",{class:!0});var n=o(E);x=r(n,"H2",{});var c=o(x);b=h(c,"Extra examples and implementations"),c.forEach(i),w=u(n),D=r(n,"UL",{});var p=o(D);for(let t=0;t<L.length;t+=1)L[t].l(p);p.forEach(i),n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){n(E,"class","col"),n(a,"class","row"),n(e,"class","container")},m(t,l){c(t,e,l),p(e,a),p(a,E),p(E,x),p(x,b),p(E,w),p(E,D);for(let t=0;t<L.length;t+=1)L[t].m(D,null)},p(t,[e]){if(1&e){let a;for(I=t[0].reverse(),a=0;a<I.length;a+=1){const l=d(t,I,a);L[a]?L[a].p(l,e):(L[a]=g(l),L[a].c(),L[a].m(D,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=I.length}},i:m,o:m,d(t){t&&i(e),v(L,t)}}}function x(t){return[[{path:"multiplemaps",title:"Multiple maps on same page"},{path:"autocenter",title:"Auto Center markers that are far apart @0.0.4^"},{path:"disablescrollwheelzoom",title:"Disable scroll wheel zoom @0.0.4^"},{path:"themes",title:"Themes with custom tileLayer @0.0.4^"},{path:"tooltip",title:"Tooltip @0.0.6^"},{path:"circle",title:"Drawing circle overlays on a map @0.0.6^"}]]}export default class extends t{constructor(t){super(),e(this,t,x,E,a,{})}}
