import{x as b}from"./lit-element-47511895.js";import{s as T,n as R}from"./safeCustomElement-f1504f3f.js";import{P as I}from"./PlotMark-3b7eceed.js";import{i as D,b as A,ae as N,a7 as w,af as Z,ag as J,M as K,ah as Q,d as V,e as _,f as ee,ai as te,g as j,aj as X,ak as ne,al as re}from"./Plot-e459c07e.js";import{m as oe,d as se}from"./bin-007f1e6b.js";import{w as le,c as m,a as ie,x as ae,y as ce,b as ue,s as pe}from"./line-9121e799.js";import"./Dot-8d81f0ef.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";import"./dot-04a474de.js";function F(n,e,t){var r=null,i=m(!0),a=null,c=ie,u=null,h=le(s);n=typeof n=="function"?n:n===void 0?ae:m(+n),e=typeof e=="function"?e:e===void 0?m(0):m(+e),t=typeof t=="function"?t:t===void 0?ce:m(+t);function s(o){var f,p,g,y=(o=ue(o)).length,d,M=!1,k,S=new Array(y),$=new Array(y);for(a==null&&(u=c(k=h())),f=0;f<=y;++f){if(!(f<y&&i(d=o[f],f,o))===M)if(M=!M)p=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),g=f-1;g>=p;--g)u.point(S[g],$[g]);u.lineEnd(),u.areaEnd()}M&&(S[f]=+n(d,f,o),$[f]=+e(d,f,o),u.point(r?+r(d,f,o):S[f],t?+t(d,f,o):$[f]))}if(k)return u=null,k+""||null}function l(){return pe().defined(i).curve(c).context(a)}return s.x=function(o){return arguments.length?(n=typeof o=="function"?o:m(+o),r=null,s):n},s.x0=function(o){return arguments.length?(n=typeof o=="function"?o:m(+o),s):n},s.x1=function(o){return arguments.length?(r=o==null?null:typeof o=="function"?o:m(+o),s):r},s.y=function(o){return arguments.length?(e=typeof o=="function"?o:m(+o),t=null,s):e},s.y0=function(o){return arguments.length?(e=typeof o=="function"?o:m(+o),s):e},s.y1=function(o){return arguments.length?(t=o==null?null:typeof o=="function"?o:m(+o),s):t},s.lineX0=s.lineY0=function(){return l().x(n).y(e)},s.lineY1=function(){return l().x(n).y(t)},s.lineX1=function(){return l().x(r).y(e)},s.defined=function(o){return arguments.length?(i=typeof o=="function"?o:m(!!o),s):i},s.curve=function(o){return arguments.length?(c=o,a!=null&&(u=c(a)),s):c},s.context=function(o){return arguments.length?(o==null?a=u=null:u=c(a=o),s):a},s}function fe(n,e,t){var r=1e-8,i=e-1,a=t-1,c=0,u,h,s,l,o,f,p,g,y,d,M;if(n<=0)return 0;if(n>=1)return 1;for(e>=1&&t>=1?(s=n<.5?n:1-n,l=Math.sqrt(-2*Math.log(s)),p=(2.30753+l*.27061)/(1+l*(.99229+l*.04481))-l,n<.5&&(p=-p),g=(p*p-3)/6,y=2/(1/(2*e-1)+1/(2*t-1)),d=p*Math.sqrt(g+y)/y-(1/(2*t-1)-1/(2*e-1))*(g+5/6-2/(3*y)),p=e/(e+t*Math.exp(2*d))):(u=Math.log(e/(e+t)),h=Math.log(t/(e+t)),l=Math.exp(e*u)/e,o=Math.exp(t*h)/t,d=l+o,n<l/d?p=Math.pow(e*d*n,1/e):p=1-Math.pow(t*d*(1-n),1/t)),M=-v(e)-v(t)+v(e+t);c<10;c++){if(p===0||p===1)return p;if(f=he(p,e,t)-n,l=Math.exp(i*Math.log(p)+a*Math.log(1-p)+M),o=f/l,p-=l=o/(1-.5*Math.min(1,o*(i/p-a/(1-p)))),p<=0&&(p=.5*(p+l)),p>=1&&(p=.5*(p+l+1)),Math.abs(l)<r*p&&c>0)break}return p}function he(n,e,t){var r=n===0||n===1?0:Math.exp(v(e+t)-v(e)-v(t)+e*Math.log(n)+t*Math.log(1-n));return n<0||n>1?!1:n<(e+1)/(e+t+2)?r*q(n,e,t)/e:1-r*q(1-n,t,e)/t}function q(n,e,t){var r=1e-30,i=1,a=e+t,c=e+1,u=e-1,h=1,s=1-a*n/c,l,o,f,p;for(Math.abs(s)<r&&(s=r),s=1/s,p=s;i<=100&&(l=2*i,o=i*(t-i)*n/((u+l)*(e+l)),s=1+o*s,Math.abs(s)<r&&(s=r),h=1+o/h,Math.abs(h)<r&&(h=r),s=1/s,p*=s*h,o=-(e+i)*(a+i)*n/((e+l)*(c+l)),s=1+o*s,Math.abs(s)<r&&(s=r),h=1+o/h,Math.abs(h)<r&&(h=r),s=1/s,f=s*h,p*=f,!(Math.abs(f-1)<3e-7));i++);return p}function v(n){var e=0,t=[76.18009172947146,-86.5053203294167,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],r=1.000000000190015,i,a,c;for(c=(a=i=n)+5.5,c-=(i+.5)*Math.log(c);e<6;e++)r+=t[e]/++a;return Math.log(2.506628274631*r/i)-c}function de(n,e){var t=fe(2*Math.min(n,1-n),.5*e,.5);return t=Math.sqrt(e*(1-t)/t),n>.5?t:-t}const me={ariaLabel:"linear-regression",fill:"currentColor",fillOpacity:.1,stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1};class W extends K{constructor(e,t={}){const{x:r,y:i,z:a,ci:c=.95,precision:u=4}=t;if(super(e,{x:{value:r,scale:"x"},y:{value:i,scale:"y"},z:{value:Q(t),optional:!0}},t,me),this.z=a,this.ci=+c,this.precision=+u,!(0<=this.ci&&this.ci<1))throw new Error(`invalid ci; not in [0, 1): ${c}`);if(!(this.precision>0))throw new Error(`invalid precision: ${u}`)}render(e,t,r,i,a){const{x:c,y:u,z:h}=r,{ci:s}=this;return V("svg:g",a).call(_,this,i,a).call(ee,this,t).call(l=>l.selectAll().data(h?te(e,h,this.z):[e]).enter().call(o=>o.append("path").attr("fill","none").call(j,this).call(X,this,{...r,fill:null,fillOpacity:null}).attr("d",f=>this._renderLine(f,c,u)).call(s&&!ne(this.fill)?f=>f.select(ge).attr("stroke","none").call(j,this).call(X,this,{...r,stroke:null,strokeOpacity:null,strokeWidth:null}).attr("d",p=>this._renderBand(p,c,u)):()=>{}))).node()}}function ge(){return this.parentNode.insertBefore(this.ownerDocument.createElementNS(re.svg,"path"),this)}let ye=class extends W{constructor(e,t){super(e,t)}_renderBand(e,t,r){const{ci:i,precision:a}=this,[c,u]=w(e,l=>r[l]),h=O(e,r,t),s=G(e,r,t,(1-i)/2,h);return F().y(l=>l).x0(l=>s(l,-1)).x1(l=>s(l,1))(Z(c,u-a/2,a).concat(u))}_renderLine(e,t,r){const[i,a]=w(e,u=>r[u]),c=O(e,r,t);return`M${c(i)},${i}L${c(a)},${a}`}},Me=class extends W{constructor(e,t){super(e,t)}_renderBand(e,t,r){const{ci:i,precision:a}=this,[c,u]=w(e,l=>t[l]),h=O(e,t,r),s=G(e,t,r,(1-i)/2,h);return F().x(l=>l).y0(l=>s(l,-1)).y1(l=>s(l,1))(Z(c,u-a/2,a).concat(u))}_renderLine(e,t,r){const[i,a]=w(e,u=>t[u]),c=O(e,t,r);return`M${i},${c(i)}L${a},${c(a)}`}};function ve(n,{y:e=D,x:t=A,stroke:r,fill:i=N(r)?"currentColor":r,...a}={}){return new ye(n,oe({...a,x:t,y:e,fill:i,stroke:r}))}function xe(n,{x:e=D,y:t=A,stroke:r,fill:i=N(r)?"currentColor":r,...a}={}){return new Me(n,se({...a,x:e,y:t,fill:i,stroke:r}))}function O(n,e,t){let r=0,i=0,a=0,c=0;for(const l of n){const o=e[l],f=t[l];r+=o,i+=f,a+=o*f,c+=o*o}const u=n.length,h=(u*a-r*i)/(u*c-r*r),s=(i-h*r)/u;return l=>h*l+s}function G(n,e,t,r,i){const a=J(n,l=>e[l])/n.length;let c=0,u=0;for(const l of n)c+=(e[l]-a)**2,u+=(t[l]-i(e[l]))**2;const h=Math.sqrt(u/(n.length-2)),s=de(r,n.length-2);return(l,o)=>{const f=i(l),p=h*Math.sqrt(1/n.length+(l-a)**2/c);return f+o*s*p}}var Le=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,L=(n,e,t,r)=>{for(var i=r>1?void 0:r?Ee(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Le(e,t,i),i};let x=class extends I{constructor(){super(...arguments),this.mark="regression",this.regressionX=!1,this.markOptions=["x","y","ci"]}get plot(){const n=this==null?void 0:this.currentResults,e=this.allOptions;return(t,r)=>{const i=n!=null&&n.length?n:t;return this.regressionX?ve(i,{...r,...e}):xe(i,{...r,...e})}}render(){return null}};L([R({type:String})],x.prototype,"x",2);L([R({type:String})],x.prototype,"y",2);L([R({type:String})],x.prototype,"ci",2);L([R({type:Boolean})],x.prototype,"regressionX",2);x=L([T("osl-regression-plot")],x);const Be={title:"Marks"},E=()=>b`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot 
      x="MedianHouseholdIncome" 
      y="UnEmplyPrc"
      strokeOpacity=0.5
      > </osl-dot-plot>
      <osl-regression-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    `,P=()=>b`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
    <osl-dot-plot 
    x="MedianHouseholdIncome" 
    y="UnEmplyPrc"
    strokeOpacity=0.5
    > </osl-dot-plot>
      <osl-regression-plot regressionX="true" x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    `;var H,U,Y;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot 
      x="MedianHouseholdIncome" 
      y="UnEmplyPrc"
      strokeOpacity=0.5
      > </osl-dot-plot>
      <osl-regression-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    \`;
}`,...(Y=(U=E.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,C,B;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
    <osl-dot-plot 
    x="MedianHouseholdIncome" 
    y="UnEmplyPrc"
    strokeOpacity=0.5
    > </osl-dot-plot>
      <osl-regression-plot regressionX="true" x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    \`;
}`,...(B=(C=P.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const be=["LinearRegressionY","LinearRegressionX"];export{P as LinearRegressionX,E as LinearRegressionY,be as __namedExportsOrder,Be as default};
//# sourceMappingURL=Regression.stories-22d097e3.js.map
