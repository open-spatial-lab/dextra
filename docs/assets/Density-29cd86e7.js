import{s as q,n as W}from"./safeCustomElement-f1504f3f.js";import{P as _}from"./PlotMark-3b7eceed.js";import{a9 as tt,a7 as nt,aa as J,ax as Y,o as rt,M as et,ah as ot,D as it,d as st,e as at,f as ct,g as ft,l as ut,a8 as Q,aP as lt,aQ as ht,ai as dt,aR as gt,x as mt}from"./Plot-e459c07e.js";import{t as pt}from"./sturges-e5ae102c.js";const yt=wt(Mt);function wt(t){return function(r,c,a=c){if(!((c=+c)>=0))throw new RangeError("invalid rx");if(!((a=+a)>=0))throw new RangeError("invalid ry");let{data:n,width:o,height:i}=r;if(!((o=Math.floor(o))>=0))throw new RangeError("invalid width");if(!((i=Math.floor(i!==void 0?i:n.length/o))>=0))throw new RangeError("invalid height");if(!o||!i||!c&&!a)return r;const h=c&&t(c),l=a&&t(a),e=n.slice();return h&&l?(T(h,e,n,o,i),T(h,n,e,o,i),T(h,e,n,o,i),B(l,n,e,o,i),B(l,e,n,o,i),B(l,n,e,o,i)):h?(T(h,n,e,o,i),T(h,e,n,o,i),T(h,n,e,o,i)):l&&(B(l,n,e,o,i),B(l,e,n,o,i),B(l,n,e,o,i)),r}}function T(t,r,c,a,n){for(let o=0,i=a*n;o<i;)t(r,c,o,o+=a,1)}function B(t,r,c,a,n){for(let o=0,i=a*n;o<a;++o)t(r,c,o,o+i,a)}function Mt(t){const r=Math.floor(t);if(r===t)return vt(t);const c=t-r,a=2*t+1;return(n,o,i,h,l)=>{if(!((h-=l)>=i))return;let e=r*o[i];const f=l*r,g=f+l;for(let u=i,m=i+f;u<m;u+=l)e+=o[Math.min(h,u)];for(let u=i,m=h;u<=m;u+=l)e+=o[Math.min(h,u+f)],n[u]=(e+c*(o[Math.max(i,u-g)]+o[Math.min(h,u+g)]))/a,e-=o[Math.max(i,u-f)]}}function vt(t){const r=2*t+1;return(c,a,n,o,i)=>{if(!((o-=i)>=n))return;let h=t*a[n];const l=i*t;for(let e=n,f=n+l;e<f;e+=i)h+=a[Math.min(o,e)];for(let e=n,f=o;e<=f;e+=i)h+=a[Math.min(o,e+l)],c[e]=h/r,h-=a[Math.max(n,e-l)]}}function Et(t,r,c){let a;for(;;){const n=tt(t,r,c);if(n===a||n===0||!isFinite(n))return[t,r];n>0?(t=Math.floor(t/n)*n,r=Math.ceil(r/n)*n):n<0&&(t=Math.ceil(t*n)/n,r=Math.floor(r*n)/n),a=n}}var bt=Array.prototype,K=bt.slice;function zt(t,r){return t-r}function At(t){for(var r=0,c=t.length,a=t[c-1][1]*t[0][0]-t[c-1][0]*t[0][1];++r<c;)a+=t[r-1][1]*t[r][0]-t[r-1][0]*t[r][1];return a}const I=t=>()=>t;function Ct(t,r){for(var c=-1,a=r.length,n;++c<a;)if(n=xt(t,r[c]))return n;return 0}function xt(t,r){for(var c=r[0],a=r[1],n=-1,o=0,i=t.length,h=i-1;o<i;h=o++){var l=t[o],e=l[0],f=l[1],g=t[h],u=g[0],m=g[1];if(Nt(l,g,r))return 0;f>a!=m>a&&c<(u-e)*(a-f)/(m-f)+e&&(n=-n)}return n}function Nt(t,r,c){var a;return Pt(t,r,c)&&kt(t[a=+(t[0]===r[0])],c[a],r[a])}function Pt(t,r,c){return(r[0]-t[0])*(c[1]-t[1])===(c[0]-t[0])*(r[1]-t[1])}function kt(t,r,c){return t<=r&&r<=c||c<=r&&r<=t}function Dt(){}var D=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function U(){var t=1,r=1,c=pt,a=l;function n(e){var f=c(e);if(Array.isArray(f))f=f.slice().sort(zt);else{const g=nt(e,Ot);for(f=J(...Et(g[0],g[1],f),f);f[f.length-1]>=g[1];)f.pop();for(;f[1]<g[0];)f.shift()}return f.map(g=>o(e,g))}function o(e,f){const g=f==null?NaN:+f;if(isNaN(g))throw new Error(`invalid value: ${f}`);var u=[],m=[];return i(e,g,function(p){a(p,e,g),At(p)>0?u.push([p]):m.push(p)}),m.forEach(function(p){for(var E=0,N=u.length,w;E<N;++E)if(Ct((w=u[E])[0],p)!==-1){w.push(p);return}}),{type:"MultiPolygon",value:f,coordinates:u}}function i(e,f,g){var u=new Array,m=new Array,p,E,N,w,s,M;for(p=E=-1,w=R(e[0],f),D[w<<1].forEach(y);++p<t-1;)N=w,w=R(e[p+1],f),D[N|w<<1].forEach(y);for(D[w<<0].forEach(y);++E<r-1;){for(p=-1,w=R(e[E*t+t],f),s=R(e[E*t],f),D[w<<1|s<<2].forEach(y);++p<t-1;)N=w,w=R(e[E*t+t+p+1],f),M=s,s=R(e[E*t+p+1],f),D[N|w<<1|s<<2|M<<3].forEach(y);D[w|s<<3].forEach(y)}for(p=-1,s=e[E*t]>=f,D[s<<2].forEach(y);++p<t-1;)M=s,s=R(e[E*t+p+1],f),D[s<<2|M<<3].forEach(y);D[s<<3].forEach(y);function y(A){var b=[A[0][0]+p,A[0][1]+E],v=[A[1][0]+p,A[1][1]+E],x=h(b),P=h(v),d,z;(d=m[x])?(z=u[P])?(delete m[d.end],delete u[z.start],d===z?(d.ring.push(v),g(d.ring)):u[d.start]=m[z.end]={start:d.start,end:z.end,ring:d.ring.concat(z.ring)}):(delete m[d.end],d.ring.push(v),m[d.end=P]=d):(d=u[P])?(z=m[x])?(delete u[d.start],delete m[z.end],d===z?(d.ring.push(v),g(d.ring)):u[z.start]=m[d.end]={start:z.start,end:d.end,ring:z.ring.concat(d.ring)}):(delete u[d.start],d.ring.unshift(b),u[d.start=x]=d):u[x]=m[P]={start:x,end:P,ring:[b,v]}}}function h(e){return e[0]*2+e[1]*(t+1)*4}function l(e,f,g){e.forEach(function(u){var m=u[0],p=u[1],E=m|0,N=p|0,w=V(f[N*t+E]);m>0&&m<t&&E===m&&(u[0]=G(m,V(f[N*t+E-1]),w,g)),p>0&&p<r&&N===p&&(u[1]=G(p,V(f[(N-1)*t+E]),w,g))})}return n.contour=o,n.size=function(e){if(!arguments.length)return[t,r];var f=Math.floor(e[0]),g=Math.floor(e[1]);if(!(f>=0&&g>=0))throw new Error("invalid size");return t=f,r=g,n},n.thresholds=function(e){return arguments.length?(c=typeof e=="function"?e:Array.isArray(e)?I(K.call(e)):I(e),n):c},n.smooth=function(e){return arguments.length?(a=e?l:Dt,n):a===l},n}function Ot(t){return isFinite(t)?t:NaN}function R(t,r){return t==null?!1:+t>=r}function V(t){return t==null||isNaN(t=+t)?-1/0:t}function G(t,r,c,a){const n=a-r,o=c-r,i=isFinite(n)||isFinite(o)?n/o:Math.sign(n)/Math.sign(o);return isNaN(i)?t:t+i-.5}function Ft(t){return t[0]}function It(t){return t[1]}function Rt(){return 1}function jt(){var t=Ft,r=It,c=Rt,a=960,n=500,o=20,i=2,h=o*3,l=a+h*2>>i,e=n+h*2>>i,f=I(20);function g(s){var M=new Float32Array(l*e),y=Math.pow(2,-i),A=-1;for(const j of s){var b=(t(j,++A,s)+h)*y,v=(r(j,A,s)+h)*y,x=+c(j,A,s);if(x&&b>=0&&b<l&&v>=0&&v<e){var P=Math.floor(b),d=Math.floor(v),z=b-P-.5,O=v-d-.5;M[P+d*l]+=(1-z)*(1-O)*x,M[P+1+d*l]+=z*(1-O)*x,M[P+1+(d+1)*l]+=z*O*x,M[P+(d+1)*l]+=(1-z)*O*x}}return yt({data:M,width:l,height:e},o*y),M}function u(s){var M=g(s),y=f(M),A=Math.pow(2,2*i);return Array.isArray(y)||(y=J(Number.MIN_VALUE,Y(M)/A,y)),U().size([l,e]).thresholds(y.map(b=>b*A))(M).map((b,v)=>(b.value=+y[v],m(b)))}u.contours=function(s){var M=g(s),y=U().size([l,e]),A=Math.pow(2,2*i),b=v=>{v=+v;var x=m(y.contour(M,v*A));return x.value=v,x};return Object.defineProperty(b,"max",{get:()=>Y(M)/A}),b};function m(s){return s.coordinates.forEach(p),s}function p(s){s.forEach(E)}function E(s){s.forEach(N)}function N(s){s[0]=s[0]*Math.pow(2,i)-h,s[1]=s[1]*Math.pow(2,i)-h}function w(){return h=o*3,l=a+h*2>>i,e=n+h*2>>i,u}return u.x=function(s){return arguments.length?(t=typeof s=="function"?s:I(+s),u):t},u.y=function(s){return arguments.length?(r=typeof s=="function"?s:I(+s),u):r},u.weight=function(s){return arguments.length?(c=typeof s=="function"?s:I(+s),u):c},u.size=function(s){if(!arguments.length)return[a,n];var M=+s[0],y=+s[1];if(!(M>=0&&y>=0))throw new Error("invalid size");return a=M,n=y,w()},u.cellSize=function(s){if(!arguments.length)return 1<<i;if(!((s=+s)>=1))throw new Error("invalid cell size");return i=Math.floor(Math.log(s)/Math.LN2),w()},u.thresholds=function(s){return arguments.length?(f=typeof s=="function"?s:Array.isArray(s)?I(K.call(s)):I(s),u):f},u.bandwidth=function(s){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((s=+s)>=0))throw new Error("invalid bandwidth");return o=(Math.sqrt(4*s*s+1)-1)/2,w()},u}const Lt={ariaLabel:"density",fill:"none",stroke:"currentColor",strokeMiterlimit:1};class Tt extends et{constructor(r,{x:c,y:a,z:n,weight:o,fill:i,stroke:h,...l}={}){const e=H(i)&&(i="currentColor",!0),f=H(h)&&(h="currentColor",!0);super(r,{x:{value:c,scale:"x",optional:!0},y:{value:a,scale:"y",optional:!0},z:{value:ot({z:n,fill:i,stroke:h}),optional:!0},weight:{value:o,optional:!0}},Zt({...l,fill:i,stroke:h},e,f),Lt),e&&(this.fill=void 0),f&&(this.stroke=void 0),this.z=n}filter(r){return r}render(r,c,a,n,o){const{contours:i}=a,h=it();return st("svg:g",o).call(at,this,n,o).call(ct,this,{}).call(l=>l.selectAll().data(r).enter().append("path").call(ft,this).call(ut,this,a).attr("d",e=>h(i[e]))).node()}}function Bt(t,{x:r,y:c,...a}={}){return[r,c]=rt(r,c),new Tt(t,{...a,x:r,y:c})}const St=new Set(["x","y","z","weight"]);function Zt(t,r,c){let{bandwidth:n,thresholds:o}=t;return n=n===void 0?20:+n,o=o===void 0?20:typeof(o==null?void 0:o[Symbol.iterator])=="function"?Q(o):+o,lt(t,function(i,h,l,e,f,g){var j;const u=l.weight?Q(l.weight.value):null,m=(j=l.z)==null?void 0:j.value,{z:p}=this,[E,N]=mt(this,f),{width:w,height:s}=f,{x:M,y}=ht(l,e,g),A=Object.fromEntries(Object.entries(l).filter(([C])=>!St.has(C)).map(([C,k])=>[C,{...k,value:[]}])),b=r&&[],v=c&&[],x=jt().x(M?C=>M[C]:E).y(y?C=>y[C]:N).weight(u?C=>u[C]:1).size([w,s]).bandwidth(n),P=[];for(const C of h){const k=[];P.push(k);for(const F of m?dt(C,m,p):[C]){const L=x.contours(F);k.push([F,L])}}let d=o;if(!(d instanceof gt)){let C=0;for(const k of P)for(const[,F]of k){const L=F.max;L>C&&(C=L)}d=Float64Array.from({length:o-1},(k,F)=>C*100*(F+1)/o)}const z=[],O=[];for(const C of P){const k=[];z.push(k);for(const[F,L]of C)for(const $ of d){k.push(O.length),O.push(L($/100)),b&&b.push($),v&&v.push($);for(const X in A)A[X].value.push(l[X].value[F[0]])}}return b&&b.push(0),v&&v.push(0),{data:i,facets:z,channels:{...A,...b&&{fill:{value:b,scale:"color"}},...v&&{stroke:{value:v,scale:"color"}},contours:{value:O}}}})}function H(t){return/^density$/i.test(t)}var $t=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Z=(t,r,c,a)=>{for(var n=a>1?void 0:a?Vt(r,c):r,o=t.length-1,i;o>=0;o--)(i=t[o])&&(n=(a?i(r,c,n):i(n))||n);return a&&n&&$t(r,c,n),n};let S=class extends _{constructor(){super(...arguments),this.mark="density",this.markOptions=["x","y","bandwidth"]}connectedCallback(){console.log("connected!"),console.log(this.allOptions),super.connectedCallback()}get plot(){const t=this==null?void 0:this.currentResults,r=this.allOptions;return(c,a)=>{const n=t!=null&&t.length?t:c;return Bt(n,{...a,...r})}}render(){return null}};Z([W({type:String})],S.prototype,"x",2);Z([W({type:String})],S.prototype,"y",2);Z([W({type:Number})],S.prototype,"bandwidth",2);S=Z([q("osl-density-plot")],S);
//# sourceMappingURL=Density-29cd86e7.js.map