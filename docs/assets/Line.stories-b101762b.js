import{x as r}from"./lit-element-47511895.js";import"./Axis-afb139c5.js";import"./Plot-e459c07e.js";import"./Select-e8e62103.js";import"./SelectControl-d2ad9350.js";import"./PlotMark-3b7eceed.js";import"./Data-0e2d5449.js";import"./safeCustomElement-f1504f3f.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./line-9121e799.js";import"./bin-007f1e6b.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";import"./spectrum-icon-chevron.css-9a6b70a0.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./reparent-children-b157c91e.js";import"./sp-icon-alert-c2c8caf1.js";import"./spectrum-icon-checkmark.css-89242d34.js";import"./like-anchor-18458c06.js";import"./if-defined-92735e40.js";import"./loader-3f25ec13.js";import"./mutation_controller-e745007b.js";import"./modal.css-00710f10.js";import"./first-focusable-in-7a384f7f.js";import"./class-map-6e0cd4e0.js";import"./directive-12249aa5.js";import"./sp-help-text-e5f96728.js";import"./Interface-70c6c183.js";const N={title:"Marks"},t=()=>r`
  <osl-select-control
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1ac2972e0e000881230a"    
options='["1","2","3","4","5","6","7","8"]'
option="congressional_district"
defaultOption="1"
initialValue="1"
>
</osl-select-control>
<br/>&nbsp;
  <div style="height: 60vh; width: 100%">

<osl-plot
colorLegend="true" 
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1ac2972e0e000881230a"    
>
<osl-line 
x="Date"
y="total_capacity"
direction="horizontal"
></osl-line>
</osl-plot>
</div>
  `,o=()=>r`
    <div style="height: 60vh; width: 100%">
      <osl-plot
        data="http://localhost:6006/data/temperature.json"
        marginBottom="80"
        marginRight="80"
      >
        <osl-line x="date" y="temp_min" stroke="teal"></osl-line>
      </osl-plot>
    </div>
  `,e=()=>r` <div style="height:60vh; width: 100%">
    <osl-plot
      colorLegend="true"
      data="https://d14xp4vykd1up4.cloudfront.net/data-query/65398b212a30750008bf0ef1?community=16"
    >
      <osl-line x="date" y="crashes" direction="horizontal"></osl-line>
    </osl-plot>
  </div>`;var n,i,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return html\`
  <osl-select-control
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1ac2972e0e000881230a"    
options='["1","2","3","4","5","6","7","8"]'
option="congressional_district"
defaultOption="1"
initialValue="1"
>
</osl-select-control>
<br/>&nbsp;
  <div style="height: 60vh; width: 100%">

<osl-plot
colorLegend="true" 
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1ac2972e0e000881230a"    
>
<osl-line 
x="Date"
y="total_capacity"
direction="horizontal"
></osl-line>
</osl-plot>
</div>
  \`;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return html\`
    <div style="height: 60vh; width: 100%">
      <osl-plot
        data="http://localhost:6006/data/temperature.json"
        marginBottom="80"
        marginRight="80"
      >
        <osl-line x="date" y="temp_min" stroke="teal"></osl-line>
      </osl-plot>
    </div>
  \`;
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return html\` <div style="height:60vh; width: 100%">
    <osl-plot
      colorLegend="true"
      data="https://d14xp4vykd1up4.cloudfront.net/data-query/65398b212a30750008bf0ef1?community=16"
    >
      <osl-line x="date" y="crashes" direction="horizontal"></osl-line>
    </osl-plot>
  </div>\`;
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const P=["TestLine","Line","LiveLine"];export{o as Line,e as LiveLine,t as TestLine,P as __namedExportsOrder,N as default};
//# sourceMappingURL=Line.stories-b101762b.js.map
