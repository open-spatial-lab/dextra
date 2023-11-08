import{x as a}from"./lit-element-47511895.js";import"./Geo-a7aaf6b9.js";import"./Plot-e459c07e.js";import"./safeCustomElement-f1504f3f.js";import"./PlotMark-3b7eceed.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./dot-04a474de.js";const m={title:"Marks"},t=()=>a`
    <osl-plot
    width = 800
    height = 450
    projection="equirectangular"
    >
      <osl-geo
      data="http://localhost:6006/data/world.json" 
      fill="currentColor"
      fillOpacity="0.2"
      ></osl-geo>

      <osl-geo
      data="http://localhost:6006/data/earthquack.json" 
      r="(d) => Math.pow(10, d.properties.mag)"
      fill="red",
      fillOpacity="0.2",
      stroke="red"
      tag="(d) => d.properties.title"
      href="(d) => d.properties.url"
      target="_blank"
      ></osl-geo>

    </osl-plot>
    `;var o,r,e;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
    width = 800
    height = 450
    projection="equirectangular"
    >
      <osl-geo
      data="http://localhost:6006/data/world.json" 
      fill="currentColor"
      fillOpacity="0.2"
      ></osl-geo>

      <osl-geo
      data="http://localhost:6006/data/earthquack.json" 
      r="(d) => Math.pow(10, d.properties.mag)"
      fill="red",
      fillOpacity="0.2",
      stroke="red"
      tag="(d) => d.properties.title"
      href="(d) => d.properties.url"
      target="_blank"
      ></osl-geo>

    </osl-plot>
    \`;
}`,...(e=(r=t.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const u=["DotMap"];export{t as DotMap,u as __namedExportsOrder,m as default};
//# sourceMappingURL=Dotmap.stories-1ea73f3d.js.map
