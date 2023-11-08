import{x as n}from"./lit-element-47511895.js";import"./Density-29cd86e7.js";import"./Plot-e459c07e.js";import"./safeCustomElement-f1504f3f.js";import"./PlotMark-3b7eceed.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";const u={title:"Marks"},o=()=>n`
    <osl-plot
      inset="50"
      data="http://localhost:6006/data/household.json"
    >
      <osl-density-plot
        x="MedianHouseholdIncome"
        y="UnEmplyPrc"
        bandwidth="6"
        stroke="red"
      ></osl-density-plot>
    </osl-plot>
  `;var t,s,e;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      inset="50"
      data="http://localhost:6006/data/household.json"
    >
      <osl-density-plot
        x="MedianHouseholdIncome"
        y="UnEmplyPrc"
        bandwidth="6"
        stroke="red"
      ></osl-density-plot>
    </osl-plot>
  \`;
}`,...(e=(s=o.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};const x=["Density"];export{o as Density,x as __namedExportsOrder,u as default};
//# sourceMappingURL=Density.stories-fd66040e.js.map
