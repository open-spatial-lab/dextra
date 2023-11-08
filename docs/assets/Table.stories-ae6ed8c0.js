import{x as i}from"./lit-element-47511895.js";import"./DataTable-7b5e7f84.js";import"./Slider-2002bcda.js";import"./safeCustomElement-f1504f3f.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./Table-4e14750b.js";import"./sp-checkbox-9ce0a2b0.js";import"./CheckboxBase-27463303.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./spectrum-icon-checkmark.css-89242d34.js";import"./if-defined-92735e40.js";import"./mutation_controller-e745007b.js";import"./directive-12249aa5.js";import"./async-directive-591bdbc7.js";import"./directive-helpers-874877ed.js";import"./FlexBox-d0c8f9ac.js";import"./Interface-70c6c183.js";import"./observe-slot-text-9cba5849.js";import"./query-assigned-nodes-b5cd026e.js";import"./style-map-4c89b936.js";import"./class-map-6e0cd4e0.js";const v={title:"Data"},t=()=>i`
    <osl-data-table
      data="http://localhost:6006/data/household.json"
      columns='["State","FIPS"]'
    ></osl-data-table>
  `,o=()=>i`
    <p></p>
    <osl-slider
      data="http://localhost:6006/data/household.json"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-table
      data="http://localhost:6006/data/household.json"
    ></osl-table>
  `;var a,r,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return html\`
    <osl-data-table
      data="http://localhost:6006/data/household.json"
      columns='["State","FIPS"]'
    ></osl-data-table>
  \`;
}`,...(e=(r=t.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};var l,s,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return html\`
    <p></p>
    <osl-slider
      data="http://localhost:6006/data/household.json"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-table
      data="http://localhost:6006/data/household.json"
    ></osl-table>
  \`;
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const w=["Table","ControlledTable"];export{o as ControlledTable,t as Table,w as __namedExportsOrder,v as default};
//# sourceMappingURL=Table.stories-ae6ed8c0.js.map
