import{x as l}from"./lit-element-47511895.js";import"./SelectControl-d2ad9350.js";import"./Interface-70c6c183.js";import"./safeCustomElement-f1504f3f.js";import"./Select-e8e62103.js";import"./spectrum-icon-chevron.css-9a6b70a0.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./ValtioElement-af4c0565.js";import"./reparent-children-b157c91e.js";import"./sp-icon-alert-c2c8caf1.js";import"./spectrum-icon-checkmark.css-89242d34.js";import"./like-anchor-18458c06.js";import"./if-defined-92735e40.js";import"./loader-3f25ec13.js";import"./mutation_controller-e745007b.js";import"./modal.css-00710f10.js";import"./first-focusable-in-7a384f7f.js";import"./class-map-6e0cd4e0.js";import"./directive-12249aa5.js";import"./sp-help-text-e5f96728.js";import"./converters-40be0569.js";const M={title:"Interface"},t=()=>{const e=JSON.stringify([{label:"Magnitude",value:"mag"},{label:"Depth",value:"depth"},{label:"Time",value:"time"}]),i=JSON.stringify(["http://localhost:6006/data/interaction.json","http://localhost:6006/data/interaction2.json"]);return l`
    The value is:
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
    <br />
    <br />
    <osl-select-control
      data=${i}
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select-control>
    <br />
    <hr/>
    <br />
    The value is:
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag2"
      initialValue="mag"
    > </osl-interface>
    <br />
    <br />
    <osl-select-control
      data="http://localhost:6006/data/interaction.json"
      option="mag2"
      options=${e}
    >
    </osl-select-control>
  `};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const complexOptions = JSON.stringify([{
    label: "Magnitude",
    value: "mag"
  }, {
    label: "Depth",
    value: "depth"
  }, {
    label: "Time",
    value: "time"
  }]);
  const options = JSON.stringify(["http://localhost:6006/data/interaction.json", "http://localhost:6006/data/interaction2.json"]);
  return html\`
    The value is:
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
    <br />
    <br />
    <osl-select-control
      data=\${options}
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select-control>
    <br />
    <hr/>
    <br />
    The value is:
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag2"
      initialValue="mag"
    > </osl-interface>
    <br />
    <br />
    <osl-select-control
      data="http://localhost:6006/data/interaction.json"
      option="mag2"
      options=\${complexOptions}
    >
    </osl-select-control>
  \`;
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["Select"];export{t as Select,E as __namedExportsOrder,M as default};
//# sourceMappingURL=Select.stories-7ded8583.js.map
