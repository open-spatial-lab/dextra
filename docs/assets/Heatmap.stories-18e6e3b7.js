import{x as d}from"./lit-element-47511895.js";import{s as f,n as i}from"./safeCustomElement-f1504f3f.js";import{P as y}from"./PlotMark-3b7eceed.js";import{c as P}from"./bin-007f1e6b.js";import{b as _}from"./rect-60102cfc.js";import"./Plot-e459c07e.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";import"./stack-9d0bf26d.js";var x=Object.defineProperty,O=Object.getOwnPropertyDescriptor,l=(o,r,s,e)=>{for(var t=e>1?void 0:e?O(r,s):r,a=o.length-1,m;a>=0;a--)(m=o[a])&&(t=(e?m(r,s,t):m(t))||t);return e&&t&&x(r,s,t),t};let p=class extends y{constructor(){super(...arguments),this.mark="heatmap",this.markOptions=["x","y"],this.transparent=!0}get plot(){const o=this==null?void 0:this.currentResults,r=this.allOptions;return(s,e)=>{const t=o!=null&&o.length?o:s,a=P({fillOpacity:"count"},{...e,...r});return _(t,a)}}render(){return null}};l([i({type:String})],p.prototype,"x",2);l([i({type:String})],p.prototype,"y",2);l([i({type:Boolean})],p.prototype,"transparent",2);p=l([f("osl-heatmap-plot")],p);const B={title:"Marks"},n=()=>d`
    <osl-plot
    data="http://localhost:6006/data/household.json"
    >
      <osl-heatmap-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-heatmap-plot>
    </osl-plot>
    `;var c,h,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
    data="http://localhost:6006/data/household.json"
    >
      <osl-heatmap-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-heatmap-plot>
    </osl-plot>
    \`;
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const D=["Heatmap"];export{n as Heatmap,D as __namedExportsOrder,B as default};
//# sourceMappingURL=Heatmap.stories-18e6e3b7.js.map
