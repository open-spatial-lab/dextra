import { html } from "lit"
import {html as staticHtml } from "lit/static-html.js";
import {
  filterableDatasets,
  pointData,
  populations,
  programSummary,
  projects,
  zipCodeData,
} from "./EECRCUtils";
import { getRenderString } from "../utils";

export const EECRC = () => {
  // select with programs / populations
  // MAP WITH demo and participants
  // key stats with participants

  return html`
    <sp-theme>
      <div style="width:100%;height:auto">
        <h1>EECRC Data Explorer</h1>
        <div style="display:flex;flex-direction:row;gap:1rem">
        <div style="flex-grow:0;display:flex;flex-direction:column;">
          <osl-select-control
            data=${filterableDatasets}
            option="project"
            options=${JSON.stringify(projects)}
            title="Project Name"
            initialValue="*"
          ></osl-select-control>
          <osl-select-control
            data=${filterableDatasets}
            option="population"
            options=${JSON.stringify(populations)}
            title="Population"
            initialValue="*"
          ></osl-select-control>
          <osl-flex-box>
                <osl-stat
                title="Participants"
                subtitle="Number of participants"
                property="Participants"
                data=${programSummary}
              >
              </osl-stat>
              <osl-stat
                title="Language"
                subtitle="Most Common Preferred Language"
                property="Language"
                data=${programSummary}
              ></osl-stat>
</osl-flex-box>
        </div>       
        <div style="width:100%;height:75vh;margin:1rem 0;">

        <osl-glmap
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              legendPosition="bottom-left"
              center="[-122.67,45.5]"
              zoom="9"
            >
            <osl-map-layer
                legendTitle="Participants"
                visible="true"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Participants"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Eastern Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Eastern Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Eastern Africa: Ethiopia"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Eastern Africa: Ethiopia"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Eastern Africa: Kenya"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Eastern Africa: Kenya"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Eastern Africa: Other Eastern Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Eastern Africa: Other Eastern Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Middle Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Middle Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Northern Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Northern Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Northern Africa: Egypt"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Northern Africa: Egypt"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Northern Africa: Other Northern Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Northern Africa: Other Northern Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Southern Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Southern Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Southern Africa: South Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Southern Africa: South Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Western Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Western Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Western Africa: Ghana"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Western Africa: Ghana"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Western Africa: Liberia"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Western Africa: Liberia"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Western Africa: Nigeria"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Western Africa: Nigeria"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Western Africa: Other Western Africa"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Western Africa: Other Western Africa"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Foreign-Born Population: Africa: Africa, N.e.c."
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Foreign-Born Population: Africa: Africa, N.e.c."
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: White Alone"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: White Alone"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: Black or African American Alone"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: Black or African American Alone"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: American Indian and Alaska Native Alone"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: American Indian and Alaska Native Alone"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: Asian Alone"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: Asian Alone"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: Native Hawaiian and Other Pacific Islander Alone"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: Native Hawaiian and Other Pacific Islander Alone"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: Some Other Race Alone"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: Some Other Race Alone"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Not Hispanic or Latino: Two or More Races"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Not Hispanic or Latino: Two or More Races"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>
<osl-map-layer
                legendTitle="Total Population: Hispanic or Latino"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population: Hispanic or Latino"
                type="continuous"
                bins="5"
                colorScheme="YlGnBu"
                filled="true"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="Zip Code"
                data=${zipCodeData}
              >
              </osl-map-layer>

<osl-map-layer
          layer="circle"
          data=${pointData}
          geoColumn="geometry"
          geoType="WKB"
          type="static"
          legendtitle="Locations"
          radiusUnits="pixels"
          
          visible="true"
        >
        </osl-map-layer>
</osl-glmap>
</div>
        </div>

        <br /><br />
        <osl-data-table
          title="Zip Code Data"
          maxw="150vw"
          data=${zipCodeData}
          columns=${JSON.stringify(['Zip Code', 'Participants', 'Most Common Language','Foreign-Born Population: Africa',
'Foreign-Born Population: Africa: Eastern Africa',
'Foreign-Born Population: Africa: Eastern Africa: Ethiopia',
'Foreign-Born Population: Africa: Eastern Africa: Kenya',
'Foreign-Born Population: Africa: Eastern Africa: Other Eastern Africa', ])}
          pagination="true"
        ></osl-data-table></div>
      </div>
    </sp-theme>
  `;
};
