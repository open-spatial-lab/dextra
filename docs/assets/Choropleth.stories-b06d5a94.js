import{x as l}from"./lit-element-47511895.js";import"./Geo-a7aaf6b9.js";import"./Plot-e459c07e.js";import"./safeCustomElement-f1504f3f.js";import"./PlotMark-3b7eceed.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./dot-04a474de.js";const d={title:"Marks"},o=()=>l`
    <osl-plot
      height="650"
      projection="albers"
      colorType="quantize"
      colorScheme="blues"
      colorLegend="true"
      colorDomain="[10000000, 500000000]"
      colorInterval="4"
      colorLabel="Area land"
      data="http://localhost:6006/data/choropleth.json"
      geoColumn="WKT"
      geoType="WKT"
    >
      <osl-geo
        fill="ALAND10"
        tip="true"
      ></osl-geo>
    </osl-plot>
  `;var e,r,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return html\`
    <osl-plot
      height="650"
      projection="albers"
      colorType="quantize"
      colorScheme="blues"
      colorLegend="true"
      colorDomain="[10000000, 500000000]"
      colorInterval="4"
      colorLabel="Area land"
      data="http://localhost:6006/data/choropleth.json"
      geoColumn="WKT"
      geoType="WKT"
    >
      <osl-geo
        fill="ALAND10"
        tip="true"
      ></osl-geo>
    </osl-plot>
  \`;
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const g=["Choropleth"];export{o as Choropleth,g as __namedExportsOrder,d as default};
//# sourceMappingURL=Choropleth.stories-b06d5a94.js.map
