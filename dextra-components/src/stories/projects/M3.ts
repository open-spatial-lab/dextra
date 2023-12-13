import { template as html } from "../../utils/templateFunction";

export const m3 = () => {
  return html`
  <main>
    <sp-theme>
    <h1>
      Chicago Tract Demography, Block Clubs, and Participants by School
    </h1>
    <div style="height:80vh; width:100%">
      <div style="width:49.8%;height:100%;display:inline-block">

      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        legendPosition="top-left"
        showNavigation="true"
  mapGroup="1"
      >
        <osl-map-layer
          legendTitle="Gang Boundaries"
          visible="true"
          geoType="WKB"
          geoColumn="geometry"
          radiusUnits="pixels"
          dataColumn="GANG_NAME"
          layer="polygon"
          type="categorical"
          colorScheme="d3-turbo"
          attribution="Chicago Police Department, 2022"
          beforeId="waterway"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ab0386cb151000835ae01"
        >
        </osl-map-layer>
        <osl-map-layer
          legendTitle="Median Household Income"
          visible="false"
          geoType="WKB"
          geoColumn="geometry"
          radiusUnits="pixels"
          dataColumn="Median Household Income (In 2021 Inflation Adjusted Dollars)"
          layer="polygon"
          type="continuous"
          colorScheme="YlGnBu"
          attribution="Census ACS 2021 5-year estimates"
          beforeId="waterway"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ababd25d70300085d5d78"
        >
        </osl-map-layer>
        <osl-map-layer
          legendTitle="Population"
          visible="false"
          geoType="WKB"
          geoColumn="geometry"
          radiusUnits="pixels"
          dataColumn="Total Population"
          layer="polygon"
          type="continuous"
          colorScheme="PuBu"
          attribution="Census ACS 2021 5-year estimates"
          beforeId="waterway"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ababd25d70300085d5d78"
        >
        </osl-map-layer>
        <osl-map-layer
          legendTitle="Percent High School Graduate"
          visible="false"
          geoType="WKB"
          geoColumn="geometry"
          method="JNK"
          radiusUnits="pixels"
          dataColumn="pct_hs"
          layer="polygon"
          type="continuous"
          colorScheme="RdPu"
          attribution="Census ACS 2021 5-year estimates"
          beforeId="waterway"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ababd25d70300085d5d78"
        >
        </osl-map-layer>

        
        <osl-map-layer
          legendTitle="CTA Stations"
          visible="true"
          geoType="WKB"
          geoColumn="geometry"
          type="static"
          radiusUnits="pixels"
          pointRadiusScale="0.5"
          filled="true"
          attribution="CTA"
          layer="point"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ab1816cb151000835ae06"
        >
        </osl-map-layer>
        <osl-map-layer
          legendTitle="CTA Lines"
          visible="true"
          geoType="WKB"
          geoColumn="geometry"
          type="static"
          radiusUnits="pixels"
          pointRadiusScale="0.25"
          attribution="CTA"
          circleRadius="1"
          filled="false"
          stroked="true"
          layer="line"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bc3f2e1ad3c000842d50f"
        >
        </osl-map-layer>

        
        
      </osl-glmap>
</div>

<div style="width:49.8%;height:100%;display:inline-block">

<osl-glmap
  mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
  legendPosition="top-left"
  showNavigation="true"
  mapGroup="1"
>
  <osl-map-layer
    legendTitle="Participants by School"
    visible="true"
    geoType="WKB"
    geoColumn="geometry"
    dataColumn="Number of Participants"
    layer="point"
    pointRadiusScale="20"
    type="continuous"
    colorScheme="PuYlGn"
    attribution="M3"
    data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd0d123e4520008e9d1a0"
  >
  </osl-map-layer>
  <osl-map-layer
    legendTitle="Block Clubs"
    visible="true"
    geoType="WKB"
    geoColumn="geometry"
    layer="point"
    pointRadiusScale="20"
    type="static"
    attribution="M3"
    data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653aaffe6cb151000835ae00"
  >
  </osl-map-layer>

  

  
  
</osl-glmap>
</div>
      
    </div>
    <div style="width:100%;">
      <h1>Program Area Outcomes</h1>
      <osl-flex-box breakpoint="lg">
      <osl-stat
      title="Average Confidence Change"
      property="Change Confidence"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd48223e4520008e9d1a1"
      format="percent"
      ></osl-stat>
      <osl-stat
      title="Average Trust Change"
      property="Change Trust"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd48223e4520008e9d1a1"

      format="percent"
      ></osl-stat>

      <osl-stat
      title="Average Generosity Change"
      property="Change Generosity"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd48223e4520008e9d1a1"

      format="percent"
      ></osl-stat>
      <osl-stat
      title="Average Belonging Change"
      property="Change Belonging"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd48223e4520008e9d1a1"

      format="percent"
      ></osl-stat>
      <osl-stat
      title="Average Empathy Change"
      property="Change Empathy"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd48223e4520008e9d1a1"

      format="percent"
      ></osl-stat>
      <osl-stat
      title="Average Comfort Change"
      property="Change Comfort"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/654bd48223e4520008e9d1a1"

      format="percent"
      ></osl-stat>
      
      </osl-flex-box>

    <osl-data-table
          title="Participant Outcomes"
          maxw="200vw"
      data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ac865a05c610008d74774"

      columns='["ID Number","Age","School","Confidence (Pre)","Confidence (Post)","Trust (Pre)","Trust (Post)","Generosity (Pre)","Generosity (Post)","Belonging (Pre)","Belonging (Post)","Comfort (Pre)","Comfort (Post)","Change Confidence","Change Trust","Change Generosity","Change Belonging","Change Empathy","Change Comfort"]'
    ></osl-data-table>
    </div>
</sp-theme>
</main>
  `;
};