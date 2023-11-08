import{x as s}from"./lit-element-47511895.js";import"./Geo-a7aaf6b9.js";import"./Density-29cd86e7.js";import"./Dot-8d81f0ef.js";import"./Plot-e459c07e.js";import"./safeCustomElement-f1504f3f.js";import"./PlotMark-3b7eceed.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./dot-04a474de.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";const x={title:"Marks"},t=()=>s`
  <osl-plot
    projection="albers" 
    colorScheme="YlGnBu"
    colorLegend="true"
    colorLabel="Walmart Density"
  >
    <osl-density-plot
        data="http://localhost:6006/data/walmarts.tsv" 
        x="longitude"
        y="latitude"
        bandwidth="10"
        fill="density"
        tip="false"
    ></osl-density-plot>
    <osl-geo
        data="http://localhost:6006/data/nations.json" 
    ></osl-geo>
    <osl-geo
        data="http://localhost:6006/data/states.json" 
        strokeOpacity="0.3"
    ></osl-geo>
    <osl-dot-plot
        data="http://localhost:6006/data/walmarts.tsv" 
        x="longitude"
        y="latitude"
        r="1"
        fill="currentColor"
        title="date"
    ><osl-dot-plot>
  </osl-plot>

    `;var o,l,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return html\`
  <osl-plot
    projection="albers" 
    colorScheme="YlGnBu"
    colorLegend="true"
    colorLabel="Walmart Density"
  >
    <osl-density-plot
        data="http://localhost:6006/data/walmarts.tsv" 
        x="longitude"
        y="latitude"
        bandwidth="10"
        fill="density"
        tip="false"
    ></osl-density-plot>
    <osl-geo
        data="http://localhost:6006/data/nations.json" 
    ></osl-geo>
    <osl-geo
        data="http://localhost:6006/data/states.json" 
        strokeOpacity="0.3"
    ></osl-geo>
    <osl-dot-plot
        data="http://localhost:6006/data/walmarts.tsv" 
        x="longitude"
        y="latitude"
        r="1"
        fill="currentColor"
        title="date"
    ><osl-dot-plot>
  </osl-plot>

    \`;
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const b=["DensityMap"];export{t as DensityMap,b as __namedExportsOrder,x as default};
//# sourceMappingURL=DensityMap.stories-e56fd5d9.js.map
