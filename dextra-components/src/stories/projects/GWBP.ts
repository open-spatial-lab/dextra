import { html } from "lit";

const years = ["2019", "2020", "2021", "2022", "2023"];
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const monthyears = JSON.stringify(
  years.map((y) => months.map((m) => `${y}-${m}`)).flat()
);
const DATASETS = {
  treesOverTime:
    "https://d148axxp71p64w.cloudfront.net/data-query/655530b0eae2010008c783cf",
  treesMainView:
    "https://d148axxp71p64w.cloudfront.net/data-query/65553bbd621c9500088edeff",
  tracts:
    "https://d148axxp71p64w.cloudfront.net/data-query/65553d11621c9500088edf01",
  cbgs: "https://d148axxp71p64w.cloudfront.net/data-query/65553d0d621c9500088edf00",
  treeSummary:
    "https://d148axxp71p64w.cloudfront.net/data-query/6556320e7c58d9000894828e",
  speciesDiversity:
    "https://d148axxp71p64w.cloudfront.net/data-query/655638a2d2d81200086f7697",
  genusDiversity:
    "https://d148axxp71p64w.cloudfront.net/data-query/65563658d2d81200086f7693",
  speciesDominance:
    "https://d148axxp71p64w.cloudfront.net/data-query/6556378ed2d81200086f7696",
  genusDominance:
    "https://d148axxp71p64w.cloudfront.net/data-query/655636c8d2d81200086f7694",
};

const filterDatasets = JSON.stringify([
  DATASETS.treesMainView,
  DATASETS.treeSummary,
]);
export const GWBP1 = () => {
  return html`
    <main>
      <sp-theme>
        <osl-flex-box breakpoint="md" direction="row">
          <div style="flex-basis:33%;position:relative; max-height:80vw">
            <h1>Bridgeport Tree Explorer</h1>
            <h2>Groundwork Bridgeport</h2>

            <osl-flex-box breakpoint="lg" direction="row">
              <div>
                <osl-select-control
                  data=${filterDatasets}
                  option="start"
                  options=${monthyears}
                  title="Start Date"
                  initialValue="2019-01"
                ></osl-select-control>
              </div>
              <div>
                <osl-select-control
                  data=${filterDatasets}
                  option="end"
                  options=${monthyears}
                  title="End Date"
                  initialValue="2023-12"
                ></osl-select-control>
              </div>
            </osl-flex-box>
            <br />
            <osl-flex-box breakpoint="sm">
              <osl-stat
                statSize="1.5rem"
                title="Total Trees Planted"
                subtitle="From selected dates"
                property="count"
                data=${DATASETS.treeSummary}
              >
              </osl-stat>
              <osl-stat
                statSize="1.5rem"
                title="Estimated Canopy"
                subtitle="Area based on 2.5 * dbh in Square Meters"
                property="total_canopy"
                format="nice"
                data=${DATASETS.treeSummary}
              >
              </osl-stat>
              <osl-stat
                statSize="1.5rem"
                title="Most Common Species"
                property="most common species"
                data=${DATASETS.treeSummary}
              >
              </osl-stat>
              <osl-stat
                statSize="1.5rem"
                title="Most Common Genus"
                property="most common genus"
                data=${DATASETS.treeSummary}
              >
              </osl-stat>
            </osl-flex-box>
          </div>
          <div style="flex-basis:66%;position:relative; max-height:80vh">
            <div style="position:relative;height:60vh;width:100%;">
          
            <osl-glmap
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              legendPosition="bottom-left"
              showNavigation="true"
              showSingleLayer="true"
              center="[-73.18,41.18]"
              zoom="12"
            >
              <osl-map-layer
                legendTitle="Tree Genus"
                visible="true"
                geoType="WKB"
                geoColumn="geometry"
                filled="true"
                attribution="Groundwork Bridfgeport"
                layer="circle"
                type="categorical"
                colorscheme="d3-turbo"
                staticRadius="8"
                datacolumn="genus"
                staticStroke="[0,0,0, 120]"
                lineWidthMaxPixels="1"
                lineWidthMinPixels="0"
                pointRadiusMinPixels="3"
                pointRadiusMaxPixels="8"
                stroked="true"
                data=${DATASETS.treesMainView}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Tree Species"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                filled="true"
                attribution="Groundwork Bridfgeport"
                layer="circle"
                type="categorical"
                colorscheme="d3-turbo"
                staticRadius="8"
                datacolumn="Scientific"
                staticStroke="[0,0,0, 120]"
                lineWidthMaxPixels="1"
                lineWidthMinPixels="0"
                pointRadiusMinPixels="3"
                pointRadiusMaxPixels="8"
                stroked="true"
                data=${DATASETS.treesMainView}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Diameter at Breast Height (DBH) "
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                filled="true"
                attribution="Groundwork Bridfgeport"
                layer="circle"
                type="continuous"
                colorscheme="d3-cool"
                datacolumn="DBH"
                staticStroke="[0,0,0, 120]"
                lineWidthMaxPixels="1"
                lineWidthMinPixels="0"
                pointRadiusMinPixels="1"
                pointRadiusMaxPixels="10"
                stroked="true"
                method="EQI"
                data=${DATASETS.treesMainView}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Tree Locations (No Styling)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                filled="true"
                attribution="Groundwork Bridfgeport"
                layer="circle"
                type="static"
                staticRadius="9"
                statisFill="[0,0,0]"
                stroked="true"
                staticStroke="[0,0,0]"
                data=${DATASETS.treesMainView}
              >
              </osl-map-layer>
            </osl-glmap>
            </div>
            <div style="position:relative;height:40vh;width:100%;">
              <h3>Tree Planting Over Time</h3>
              <osl-plot
                colorLegend="true"
                data=${DATASETS.treesOverTime}
                marginBottom="80"
                marginRight="80"
                colorScheme="accent"
              >
                <osl-line x="monthyear" y="count"></osl-line>
              </osl-plot>
            </div>
          </div>
        </osl-flex-box>
      </sp-theme>
    </main>
  `;
};

export const GWBP2 = () => {
  return html``;
};
