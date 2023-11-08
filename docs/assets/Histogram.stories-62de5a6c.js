import{x as f}from"./lit-element-47511895.js";import{s as g,n as m}from"./safeCustomElement-f1504f3f.js";import{P as d}from"./PlotMark-3b7eceed.js";import{b as x,a as _}from"./bin-007f1e6b.js";import{r as v,a as y}from"./rect-60102cfc.js";import"./Plot-e459c07e.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";import"./stack-9d0bf26d.js";var b=Object.defineProperty,P=Object.getOwnPropertyDescriptor,i=(o,r,a,s)=>{for(var t=s>1?void 0:s?P(r,a):r,e=o.length-1,p;e>=0;e--)(p=o[e])&&(t=(s?p(r,a,t):p(t))||t);return s&&t&&b(r,a,t),t};let l=class extends d{constructor(){super(...arguments),this.mark="histogram",this.vertical=!1,this.markOptions=["x"]}get plot(){const o=this==null?void 0:this.currentResults,r=this.allOptions;return(a,s)=>{const t=o!=null&&o.length?o:a;if(this.vertical){const e=x({x:"count"},{...s,...r});return v(t,e)}else{const e=_({y:"count"},{...s,...r});return y(t,e)}}}render(){return null}};i([m({type:String})],l.prototype,"x",2);i([m({type:String})],l.prototype,"y",2);i([m({type:Boolean})],l.prototype,"vertical",2);l=i([g("osl-histogram-plot")],l);const D={title:"Marks"},n=()=>f` <osl-plot scheme="inferno"
  data="http://localhost:6006/data/household.json"
  >
    <osl-histogram-plot x="MedianHouseholdIncome" fill="forestgreen"></osl-histogram-plot>
  </osl-plot>`;var c,h,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return html\` <osl-plot scheme="inferno"
  data="http://localhost:6006/data/household.json"
  >
    <osl-histogram-plot x="MedianHouseholdIncome" fill="forestgreen"></osl-histogram-plot>
  </osl-plot>\`;
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const R=["Histogram"];export{n as Histogram,R as __namedExportsOrder,D as default};
//# sourceMappingURL=Histogram.stories-62de5a6c.js.map
