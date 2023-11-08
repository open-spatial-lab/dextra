import{x as p}from"./lit-element-47511895.js";import{s as D,n as e}from"./safeCustomElement-f1504f3f.js";import{P as X}from"./PlotMark-3b7eceed.js";import{i as x}from"./converters-40be0569.js";import{B as Y,C as B}from"./Plot-e459c07e.js";import"./Dot-8d81f0ef.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./dot-04a474de.js";var C=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(r,s,a,n)=>{for(var o=n>1?void 0:n?b(s,a):s,h=r.length-1,y;h>=0;h--)(y=r[h])&&(o=(n?y(s,a,o):y(o))||o);return n&&o&&C(s,a,o),o};let t=class extends X{constructor(){super(...arguments),this.mark="rule",this.direction="horizontal",this.markOptions=["x","y","interval","x1","x2","y1","y2","direction"]}get plot(){const r=this==null?void 0:this.currentResults,s=this.allOptions;return(a,n)=>{const o=r!=null&&r.length?r:a;return this.direction=="vertical"?Y(o,{...n,...s}):B(o,{...n,...s})}}render(){return null}};l([e({converter:x})],t.prototype,"x",2);l([e({converter:x})],t.prototype,"y",2);l([e({converter:x})],t.prototype,"interval",2);l([e({type:String})],t.prototype,"x1",2);l([e({type:String})],t.prototype,"x2",2);l([e({type:String})],t.prototype,"y1",2);l([e({type:String})],t.prototype,"y2",2);l([e({type:String})],t.prototype,"direction",2);t=l([D("osl-rule-plot")],t);const N={title:"Marks"},c=()=>p`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="vertical" x="0"></osl-rule-plot>
    </osl-plot>
  `,d=()=>p`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="vertical" x="MedianHouseholdIncome" strokeOpacity=0.1></osl-rule-plot>
    </osl-plot>
  `,u=()=>p`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="horizontal" y="[0]"></osl-rule-plot>
    </osl-plot>
  `,i=()=>p`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="horizontal" y="UnEmplyPrc"></osl-rule-plot>
    </osl-plot>
  `,m=()=>p`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
    >
      <osl-rule-plot direction="vertical" x="date" y1="temp_min" y2="temp_max"></osl-rule-plot>
      <osl-rule-plot direction="horizontal" y=[0]></osl-rule-plot>
    </osl-plot>
  `;var v,P,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="vertical" x="0"></osl-rule-plot>
    </osl-plot>
  \`;
}`,...(g=(P=c.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};var f,R,_;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="vertical" x="MedianHouseholdIncome" strokeOpacity=0.1></osl-rule-plot>
    </osl-plot>
  \`;
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var j,E,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="horizontal" y="[0]"></osl-rule-plot>
    </osl-plot>
  \`;
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,H,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="horizontal" y="UnEmplyPrc"></osl-rule-plot>
    </osl-plot>
  \`;
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var O,U,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
    >
      <osl-rule-plot direction="vertical" x="date" y1="temp_min" y2="temp_max"></osl-rule-plot>
      <osl-rule-plot direction="horizontal" y=[0]></osl-rule-plot>
    </osl-plot>
  \`;
}`,...(z=(U=m.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const Q=["RuleX","RuleXData","RuleY","RuleYData","RuleBound"];export{m as RuleBound,c as RuleX,d as RuleXData,u as RuleY,i as RuleYData,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Rule.stories-2cecc193.js.map
