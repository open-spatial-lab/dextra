import { html } from "lit";

const years = ["2021", "2022", "2023"];
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

const months2021 = ["09", "10", "11", "12"];
const monthyears = JSON.stringify(
  years
    .map((y) =>
      y === "2021"
        ? months2021.map((m) => `${y}-${m}`)
        : months.map((m) => `${y}-${m}`)
    )
    .flat()
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

const maxDbh = [
  "*",
  1, 2,3,4,5,10,15,20,30,40,50,60
]
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
                  initialValue="2021-09"
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
                <osl-select-control
                  data=${filterDatasets}
                  option="max_dbh"
                  options=${JSON.stringify(maxDbh)}
                  title="Max DBH"
                  initialValue="*"
                ></osl-select-control>
            </osl-flex-box>
            <br />
            <osl-flex-box breakpoint="sm">
              <osl-stat
                statSize="1.5rem"
                title="Total Trees"
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
                  beforeId="watername_ocean"
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
                  beforeId="watername_ocean"
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
                  beforeId="watername_ocean"
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
                  beforeId="watername_ocean"
                  legendTitle="Tree Locations (No Styling)"
                  visible="false"
                  geoType="WKB"
                  geoColumn="geometry"
                  filled="true"
                  attribution="Groundwork Bridfgeport"
                  layer="circle"
                  type="static"
                  pointRadiusMinPixels="1"
                  pointRadiusMaxPixels="8"
                  staticRadius="6"
                  statisFill="[0,0,0]"
                  stroked="true"
                  staticStroke="[0,0,0]"
                  data=${DATASETS.treesMainView}
                >
                </osl-map-layer>
              </osl-glmap>
            </div>
            <div style="position:relative;height:40vh;width:100%;">
              <h3>Trees Over Time</h3>
              <osl-plot
                colorLegend="true"
                data=${DATASETS.treesOverTime}
                marginBottom="80"
                marginRight="80"
                colorScheme="accent"
              >
                <osl-line x="monthyear" y="count"></osl-line>
                <osl-axis tickRotate="45" axis="x" label="Month and Year"></osl-axis>
              </osl-plot>
            </div>
          </div>
        </osl-flex-box>
      </sp-theme>
    </main>
  `;
};

export const GWBP2 = () => {
  return html`
    <main>
      <sp-theme>
        <osl-flex-box breakpoint="md" direction="row">
          <div style="flex-basis:19%;position:relative;">
            <h1>Bridgeport Tree Explorer</h1>
            <h2>Groundwork Bridgeport</h2>
            <br />
            <div style="max-height:60vh; overflow-y:auto;">
              <osl-flex-box breakpoint="sm">
                <osl-stat
                  statSize="1rem"
                  title="Most Common Species"
                  property="most common species"
                  data=${DATASETS.treeSummary}
                >
                </osl-stat>
                <osl-stat
                  statSize="1rem"
                  title="Most Common Species Percent"
                  subtitle="%"
                  property="species dominance"
                  data=${DATASETS.speciesDominance}
                >
                </osl-stat>
                <osl-stat
                  statSize="1rem"
                  title="Species Diversity"
                  subtitle="Simpson's Index"
                  property="species diversity"
                  format="nice"
                  data=${DATASETS.speciesDiversity}
                >
                </osl-stat>
                <osl-stat
                  statSize="1rem"
                  title="Most Common Genus"
                  property="most common genus"
                  data=${DATASETS.treeSummary}
                >
                </osl-stat>

                <osl-stat
                  statSize="1rem"
                  title="Most Common Genus Percent"
                  subtitle="%"
                  property="percent"
                  data=${DATASETS.genusDominance}
                >
                </osl-stat>
                <osl-stat
                  statSize="1rem"
                  subtitle="Simpson's Index"
                  title="Genus Diversity"
                  property="diversity"
                  format="nice"
                  data=${DATASETS.genusDiversity}
                >
                </osl-stat>
              </osl-flex-box>
            </div>
          </div>
          <div style="flex-basis:80%;position:relative; height:90vh;">
            ${MapSnippet("Tracts: Count of Trees")}
          </div>
        </osl-flex-box>
      </sp-theme>
    </main>
  `;
};

const layers = [
  {
    id: "Tracts: Total Population",
    data: DATASETS.tracts,
    dataColumn: "Total Population",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Non-Hispanic White People",
    method: "EQI",
    data: DATASETS.tracts,
    dataColumn: "White NH",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Non-Hispanic Black or African American People",
    method: "EQI",
    data: DATASETS.tracts,
    dataColumn: "Black or AA NH",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Non-Hispanic Asian People",
    method: "EQI",
    data: DATASETS.tracts,
    dataColumn: "AA NH",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Non-Hispanic American Indian and Alaska Native People",
    method: "EQI",
    data: DATASETS.tracts,
    dataColumn: "AIAN NH",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Non-Hispanic Native Hawaiian and Other Pacific Islander People",
    method: "EQI",
    data: DATASETS.tracts,
    dataColumn: "NHPI NH",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Hispanic or Latino People",
    method: "EQI",
    data: DATASETS.tracts,
    dataColumn: "Hispanic or Latino",
    colorScheme: "BuPu",
  },
  {
    id: "Tracts: Percent of Families in Poverty",
    data: DATASETS.tracts,
    dataColumn: "Percent of Families in Poverty",
    colorScheme: "YlOrRd",
  },
  // {
  //   id: "Tracts: Families",
  //   data: DATASETS.tracts,
  //   dataColumn: "Families",
  //   colorScheme: "GnBu",
  // },
  {
    id: "Tracts: Unemployment Pct",
    data: DATASETS.tracts,
    dataColumn: "Unemployment Pct",
    colorScheme: "YlOrRd",
  },
  {
    id: "Tracts: Percent of People with Less than a High School Education at Age 25",
    data: DATASETS.tracts,
    dataColumn: "Less than High School",
    colorScheme: "YlOrRd",
  },
  {
    id: "Tracts: Count of Trees",
    data: DATASETS.tracts,
    dataColumn: "count",
    colorScheme: "YlGn",
  },
  {
    id: "Tracts: Estimated Canopy (sq meters)",
    data: DATASETS.tracts,
    dataColumn: "Estimated Canopy",
    colorScheme: "YlGn",
  },
  {
    id: "Tracts: Estimated Canopy Coverage (%)",
    data: DATASETS.tracts,
    dataColumn: "Estimated Coverage Pct",
    colorScheme: "YlGn",
  },
  {
    id: "Tracts: Trees per 1000 people",
    data: DATASETS.tracts,
    dataColumn: "trees per 1000 people",
    colorScheme: "YlGn",
  },
];

function MapSnippet(activeLayer: string = "Tracts: Total Population") {
  return html`
    <osl-glmap
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      legendPosition="bottom-left"
      showNavigation="true"
      showSingleLayer="true"
      center="[-73.18,41.18]"
      zoom="12"
      mapGroup="1"
    >
      ${layers.map(
        (l) =>
          html`
            <osl-map-layer
              legendTitle=${l.id}
              geoType="WKB"
              geoColumn="geometry"
              filled="true"
              attribution="Groundwork Bridfgeport"
              layer="polygon"
              type="continuous"
              staticStroke="[0,0,0]"
              lineWidthMaxPixels="2"
              beforeId="water"
              lineWidthMinPixels="0"
              stroked="true"
              visible=${l.id === activeLayer}
              data=${l.data}
              datacolumn=${l.dataColumn}
              colorscheme=${l.colorScheme}
              method=${l.method || "QNT"}
            >
            </osl-map-layer>
          `
      )}
    </osl-glmap>
  `;
}
