import{x as r}from"./lit-element-47511895.js";import"./Slider-2002bcda.js";import"./Select-e8e62103.js";import"./Interface-70c6c183.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./safeCustomElement-f1504f3f.js";import"./ValtioElement-af4c0565.js";import"./observe-slot-text-9cba5849.js";import"./mutation_controller-e745007b.js";import"./query-assigned-nodes-b5cd026e.js";import"./style-map-4c89b936.js";import"./directive-12249aa5.js";import"./class-map-6e0cd4e0.js";import"./if-defined-92735e40.js";import"./async-directive-591bdbc7.js";import"./directive-helpers-874877ed.js";import"./spectrum-icon-chevron.css-9a6b70a0.js";import"./reparent-children-b157c91e.js";import"./sp-icon-alert-c2c8caf1.js";import"./spectrum-icon-checkmark.css-89242d34.js";import"./like-anchor-18458c06.js";import"./loader-3f25ec13.js";import"./modal.css-00710f10.js";import"./first-focusable-in-7a384f7f.js";import"./sp-help-text-e5f96728.js";import"./converters-40be0569.js";const z={title:"Interface"},t=()=>{const n=JSON.stringify(["http://localhost:6006/data/interaction.json","http://localhost:6006/data/summary.json"]);return r`
    The value is:
    <osl-slider
      data="${n}"
      option="mag"
      min="5"
      max="8"
      step="1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface><osl-interface
      data="http://localhost:6006/data/summary.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
  `};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const data = ["http://localhost:6006/data/interaction.json", "http://localhost:6006/data/summary.json"];
  const dataString = JSON.stringify(data);
  return html\`
    The value is:
    <osl-slider
      data="\${dataString}"
      option="mag"
      min="5"
      max="8"
      step="1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface><osl-interface
      data="http://localhost:6006/data/summary.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
  \`;
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const A=["Slider"];export{t as Slider,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Slider.stories-268b3a5f.js.map
