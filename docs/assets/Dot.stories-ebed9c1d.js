import{x as l}from"./lit-element-47511895.js";import"./Dot-8d81f0ef.js";import"./Plot-e459c07e.js";import"./Slider-2002bcda.js";import"./safeCustomElement-f1504f3f.js";import"./Data-0e2d5449.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./dot-04a474de.js";import"./Interface-70c6c183.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./observe-slot-text-9cba5849.js";import"./mutation_controller-e745007b.js";import"./query-assigned-nodes-b5cd026e.js";import"./style-map-4c89b936.js";import"./directive-12249aa5.js";import"./class-map-6e0cd4e0.js";import"./if-defined-92735e40.js";import"./async-directive-591bdbc7.js";import"./directive-helpers-874877ed.js";const B={title:"Marks"},o=()=>l`
    <div style="height:75vh;width:100%;">
      <osl-plot>
        <osl-dot-plot
          data="http://localhost:6006/data/household.json"
          x="MedianHouseholdIncome"
          y="UnEmplyPrc"
        >
        </osl-dot-plot>
      </osl-plot>
    </div>
  `,t=()=>l`
    <p>Median Household Income vs Unemployment Percentage</p>
    <p>Size of the dot is Median Household Income</p>
    <p>Color by State</p>

    <osl-plot
      colorLegend="true"
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot r="MedianHouseholdIncome" x="MedianHouseholdIncome" y="UnEmplyPrc" fill="State"> </osl-dot-plot>
      </osl-dot-plot>
    </osl-plot>
  `,e=()=>l`
    <osl-slider
      data="http://localhost:6006/data/household.json"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-plot data="http://localhost:6006/data/household.json">
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
    </osl-plot>
  `;var s,n,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return html\`
    <div style="height:75vh;width:100%;">
      <osl-plot>
        <osl-dot-plot
          data="http://localhost:6006/data/household.json"
          x="MedianHouseholdIncome"
          y="UnEmplyPrc"
        >
        </osl-dot-plot>
      </osl-plot>
    </div>
  \`;
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return html\`
    <p>Median Household Income vs Unemployment Percentage</p>
    <p>Size of the dot is Median Household Income</p>
    <p>Color by State</p>

    <osl-plot
      colorLegend="true"
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot r="MedianHouseholdIncome" x="MedianHouseholdIncome" y="UnEmplyPrc" fill="State"> </osl-dot-plot>
      </osl-dot-plot>
    </osl-plot>
  \`;
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,h;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return html\`
    <osl-slider
      data="http://localhost:6006/data/household.json"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-plot data="http://localhost:6006/data/household.json">
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
    </osl-plot>
  \`;
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const L=["Dot","ComplexDot","ControlledDot"];export{t as ComplexDot,e as ControlledDot,o as Dot,L as __namedExportsOrder,B as default};
//# sourceMappingURL=Dot.stories-ebed9c1d.js.map
