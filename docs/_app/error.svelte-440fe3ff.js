import{S as w,i as y,s as z,e as v,t as E,c as d,a as b,g as P,d as _,f as u,H as R,h as H,k as N,l as j,n as S,I as q}from"./chunks/vendor-c9049e09.js";function C(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(_)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&H(a,t)},d(l){l&&_(f)}}}function I(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(_)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&H(a,t)},d(l){l&&_(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&C(r),n=r[1].stack&&I(r);return{c(){f=v("h1"),t=E(r[0]),a=N(),l=v("pre"),c=E(s),k=N(),i&&i.c(),m=N(),n&&n.c(),p=j()},l(e){f=d(e,"H1",{});var o=b(f);t=P(o,r[0]),o.forEach(_),a=S(e),l=d(e,"PRE",{});var h=b(l);c=P(h,s),h.forEach(_),k=S(e),i&&i.l(e),m=S(e),n&&n.l(e),p=j()},m(e,o){u(e,f,o),R(f,t),u(e,a,o),u(e,l,o),R(l,c),u(e,k,o),i&&i.m(e,o),u(e,m,o),n&&n.m(e,o),u(e,p,o)},p(e,[o]){o&1&&H(t,e[0]),o&2&&s!==(s=e[1].message+"")&&H(c,s),e[1].frame?i?i.p(e,o):(i=C(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?n?n.p(e,o):(n=I(e),n.c(),n.m(p.parentNode,p)):n&&(n.d(1),n=null)},i:q,o:q,d(e){e&&_(f),e&&_(a),e&&_(l),e&&_(k),i&&i.d(e),e&&_(m),n&&n.d(e),e&&_(p)}}}function F({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class G extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{G as default,F as load};
