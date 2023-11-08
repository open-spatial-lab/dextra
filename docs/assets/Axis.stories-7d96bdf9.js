import{x as r}from"./lit-element-47511895.js";import"./Axis-afb139c5.js";import"./Plot-e459c07e.js";import"./PlotMark-3b7eceed.js";import"./Data-0e2d5449.js";import"./safeCustomElement-f1504f3f.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./line-9121e799.js";import"./bin-007f1e6b.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";const u={title:"Marks"},t=()=>r`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
      inset="10"
      grid="false"
      marginBottom="80"
    >
      <osl-line x="date" y="temp_min" z="weather" stroke="teal"></osl-line>
      <osl-axis
        ticks="month"
        anchor="bottom"
        tickPadding="5"
        tickSize="0"
        tickRotate="45"
        tickFormat="(d, i) => i % 40 === 0 ? (new Date(d)).toISOString().slice(0,10) : ''"
      ></osl-axis>
    </osl-plot>
  `;var o,i,e;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
      inset="10"
      grid="false"
      marginBottom="80"
    >
      <osl-line x="date" y="temp_min" z="weather" stroke="teal"></osl-line>
      <osl-axis
        ticks="month"
        anchor="bottom"
        tickPadding="5"
        tickSize="0"
        tickRotate="45"
        tickFormat="(d, i) => i % 40 === 0 ? (new Date(d)).toISOString().slice(0,10) : ''"
      ></osl-axis>
    </osl-plot>
  \`;
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const S=["Axis"];export{t as Axis,S as __namedExportsOrder,u as default};
//# sourceMappingURL=Axis.stories-7d96bdf9.js.map
