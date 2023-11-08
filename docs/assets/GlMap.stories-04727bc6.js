import{x as t}from"./lit-element-47511895.js";import"./Modal-eeac8b11.js";import"./Slider-2002bcda.js";import"./SelectControl-d2ad9350.js";import"./FlexBox-d0c8f9ac.js";import"./StatTable-b6379de0.js";import"./DataTable-7b5e7f84.js";import"./Download-d434c86f.js";import"./Stat-cc7eb88d.js";import"./Axis-afb139c5.js";import"./Plot-e459c07e.js";import"./Radio-2c3f5af0.js";import"./ParamView-a63609a6.js";import"./safeCustomElement-f1504f3f.js";import"./ValtioElement-af4c0565.js";import"./Data-0e2d5449.js";import"./converters-40be0569.js";import"./_commonjsHelpers-725317a4.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./overlay-trigger-c0d74f1e.js";import"./modal.css-00710f10.js";import"./sp-button-group-34575c08.js";import"./ButtonBase-6b15501f.js";import"./like-anchor-18458c06.js";import"./if-defined-92735e40.js";import"./focusable-6e37aff0.js";import"./observe-slot-text-9cba5849.js";import"./mutation_controller-e745007b.js";import"./query-assigned-nodes-b5cd026e.js";import"./spectrum-icon-cross.css-7c034bb2.js";import"./sp-icon-alert-c2c8caf1.js";import"./class-map-6e0cd4e0.js";import"./directive-12249aa5.js";import"./first-focusable-in-7a384f7f.js";import"./platform-ad521189.js";import"./loader-3f25ec13.js";import"./state-8f8de3d4.js";import"./sp-checkbox-9ce0a2b0.js";import"./CheckboxBase-27463303.js";import"./spectrum-icon-checkmark.css-89242d34.js";import"./sp-action-button-d2a6278f.js";import"./Select-e8e62103.js";import"./spectrum-icon-chevron.css-9a6b70a0.js";import"./reparent-children-b157c91e.js";import"./sp-help-text-e5f96728.js";import"./Interface-70c6c183.js";import"./numberFormatter-30f4b9e1.js";import"./style-map-4c89b936.js";import"./async-directive-591bdbc7.js";import"./directive-helpers-874877ed.js";import"./Table-4e14750b.js";import"./RovingTabindex-e989c6f6.js";import"./PlotMark-3b7eceed.js";import"./line-9121e799.js";import"./bin-007f1e6b.js";import"./sturges-e5ae102c.js";import"./count-17af7dc7.js";import"./manage-help-text-f7a9171f.js";const qt={title:"Data"},o=()=>t`
    <div>
      <div style="height: 500px; width: 100%">
        <osl-glmap
          mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
        </osl-glmap>
      </div>
    </div>
  `,e=()=>t`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        ><osl-map-layer
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c6cccf4d9060008210a9c"
          legendtitle="asdf"
          visible="true"
          attribution="asdf2"
          colorscheme="RdYlGn"
          geoid="GEOID"
          geotype="WKB"
          geocolumn="geometry"
          datacolumn="Median DBH"
          type="continuous"
          filled="true"
        >
        </osl-map-layer
      ></osl-glmap>
    </div>
  `,n=()=>t`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <div slot="description">asdf</div>
      </osl-glmap>
      <br /><br />
    </div>
  `,a=()=>t`
    <div style="height: 700px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <osl-map-layer
          layer="circle"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c8c7766874a0008027019"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="DBH"
          legendtitle="Diameter at Breast Height (DBH)"
          beforeId="building"
          attribution="Groundwork Bridgeport"
          visible="false"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="circle"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c8c7766874a0008027019"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="Common Name"
          type="categorical"
          legendtitle="Species"
          circleRadius="10"
          radiusUnits="pixels"
          colorScheme="d3-turbo"
          attribution="Groundwork Bridgeport"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="polygon"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c6cccf4d9060008210a9c"
          geoColumn="geometry"
          geoType="WKB"
          beforeId="water"
          dataColumn="Population Density (Per Sq. Mile)"
          attribution="Groundwork Bridgeport"
        >
        </osl-map-layer>
      </osl-glmap>
      <br /><br />
    </div>
  `,l=()=>t`
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>

    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="xmin"
      min="-180"
      max="180"
      step="1"
      initialValue="-180"
      title="Min X"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="xmax"
      min="-180"
      max="180"
      step="1"
      initialValue="180"
      title="Max X"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="ymin"
      min="-90"
      max="90"
      step="1"
      initialValue="-90"
      title="Min Y"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="ymax"
      min="-90"
      max="90"
      step="1"
      initialValue="90"
      title="Max Y"
    ></osl-slider>
    <br /><br />

    <div style="height: 500px; width: 100%"></div>
    <div style="position:relative;height:500px;width:100%;">
      <osl-glmap
        center="[60, 22]"
        zoom="2"
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        <osl-map-layer
          type="scatter"
          getPosition="(d) => [d.x, d.y]"
          data="http://localhost:6006/data/interaction.json"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>

    <br /><br />
  `;var i,r,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return html\`
    <div>
      <div style="height: 500px; width: 100%">
        <osl-glmap
          mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
        </osl-glmap>
      </div>
    </div>
  \`;
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var p,m,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return html\`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        ><osl-map-layer
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c6cccf4d9060008210a9c"
          legendtitle="asdf"
          visible="true"
          attribution="asdf2"
          colorscheme="RdYlGn"
          geoid="GEOID"
          geotype="WKB"
          geocolumn="geometry"
          datacolumn="Median DBH"
          type="continuous"
          filled="true"
        >
        </osl-map-layer
      ></osl-glmap>
    </div>
  \`;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,y,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  //   <osl-map-layer
  //   layer="polygon"
  //   data="http://localhost:6006/data/choropleth.json"
  //   geoColumn="WKT"
  //   geoType="WKT"
  //   dataColumn="CITY"
  //   type="categorical"
  //   attribution="US Census 2020"
  //   bins="4"
  //   filled="false"
  //   stroked="true"
  //   method="JNK"
  //   colorScheme="d3-turbo"
  // >
  // </osl-map-layer>
  // <osl-map-layer
  //   layer="polygon"
  //   data="http://localhost:6006/data/choropleth.json"
  //   geoColumn="WKT"
  //   geoType="WKT"
  //   dataColumn="VISION_PROVIDERS"
  //   type="continuous"
  //   attribution="US Census 2020"
  //   colorScheme="d3-turbo"
  // >
  // </osl-map-layer>
  return html\`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <div slot="description">asdf</div>
      </osl-glmap>
      <br /><br />
    </div>
  \`;
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,h,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return html\`
    <div style="height: 700px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <osl-map-layer
          layer="circle"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c8c7766874a0008027019"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="DBH"
          legendtitle="Diameter at Breast Height (DBH)"
          beforeId="building"
          attribution="Groundwork Bridgeport"
          visible="false"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="circle"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c8c7766874a0008027019"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="Common Name"
          type="categorical"
          legendtitle="Species"
          circleRadius="10"
          radiusUnits="pixels"
          colorScheme="d3-turbo"
          attribution="Groundwork Bridgeport"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="polygon"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c6cccf4d9060008210a9c"
          geoColumn="geometry"
          geoType="WKB"
          beforeId="water"
          dataColumn="Population Density (Per Sq. Mile)"
          attribution="Groundwork Bridgeport"
        >
        </osl-map-layer>
      </osl-glmap>
      <br /><br />
    </div>
  \`;
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,v,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return html\`
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>

    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="xmin"
      min="-180"
      max="180"
      step="1"
      initialValue="-180"
      title="Min X"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="xmax"
      min="-180"
      max="180"
      step="1"
      initialValue="180"
      title="Max X"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="ymin"
      min="-90"
      max="90"
      step="1"
      initialValue="-90"
      title="Min Y"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="ymax"
      min="-90"
      max="90"
      step="1"
      initialValue="90"
      title="Max Y"
    ></osl-slider>
    <br /><br />

    <div style="height: 500px; width: 100%"></div>
    <div style="position:relative;height:500px;width:100%;">
      <osl-glmap
        center="[60, 22]"
        zoom="2"
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        <osl-map-layer
          type="scatter"
          getPosition="(d) => [d.x, d.y]"
          data="http://localhost:6006/data/interaction.json"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>

    <br /><br />
  \`;
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Dt=["GlMap","ChoroTest","ChoroplethMap","DotMap","ControlledGlMap"];export{e as ChoroTest,n as ChoroplethMap,l as ControlledGlMap,a as DotMap,o as GlMap,Dt as __namedExportsOrder,qt as default};
//# sourceMappingURL=GlMap.stories-04727bc6.js.map
