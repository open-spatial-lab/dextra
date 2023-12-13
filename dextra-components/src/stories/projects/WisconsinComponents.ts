import { template as html } from "../../utils/templateFunction";
import { providerLocations } from "./WisconsinUtils";

const tooltipSpec = (idCol: String) =>
  JSON.stringify([
    {
      column: idCol,
      label: "ID",
    },
    {
      column: "Capacity",
      label: "Capacity",
    },
    {
      column: "Enrollment",
      label: "Enrollment",
    },
    { column: "count", label: "Count of Providers" },
    {
      column: "Payment Amount",
      label: "Childcare Counts Funding",
      format: "currency:usd",
    },
    {
      column: "children_with_parents_working",
      label: "Children with All Parent(s) Working",
    },
    {
      column: "capacity_over_children",
      label:
        "Capacity Percent Coverage (Capacity/Children with All Parent(s) Working)",
      format: "percent",
    },
    { column: "Total Population", label: "Total Population" },
    {
      column: "Median Household Income (In 2021 Inflation Adjusted Dollars)",
      label: "Median Household Income",
      format: "currency:usd",
    },
    {
      column: "Pop NH: Black or African American Alone",
      label: "Population: Black or African American",
    },
    {
      column: "Total Population: Hispanic or Latino",
      label: "Population: Hispanic or Latino",
    },
    {
      column: "Unemployment Pct",
      label: "Percent of people over 16 unemployed",
      format: "percent",
    },
    {
      column: "Pct Less Than Hs",
      label: "Percent of people over 25 with less than a High School Diploma",
      format: "percent",
    },
  ]);
export const makeLayers = (data: string, idCol: String) => {
  return html`
    <osl-glmap
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      legendPosition="bottom-left"
      showSingleLayer="true"
    >
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Childcare Capacity (LCC/CCC)"
        visible="true"
        data="${data}"
        geoType="WKB"
        geoColumn="geometry"
        dataColumn="Capacity"
        type="continuous"
        bins="5"
        colorScheme="YlGn"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Childcare Counts Funding"
        attribution="Wisconsin Childcare Counts"
        visible="false"
        data="${data}"
        geoType="WKB"
        geoColumn="geometry"
        dataColumn="Payment Amount"
        type="continuous"
        bins="5"
        colorScheme="GnBu"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Enrollment"
        visible="false"
        data="${data}"
        geoType="WKB"
        geoColumn="geometry"
        dataColumn="Enrollment"
        type="continuous"
        bins="5"
        colorScheme="BuGn"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Count of Providers"
        visible="false"
        data="${data}"
        geoType="WKB"
        geoColumn="geometry"
        dataColumn="count"
        type="continuous"
        bins="5"
        colorScheme="BuGn"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Children with All Parent(s) Working"
        attribution="American Community Survey 5-Year Estimates 2021"
        visible="false"
        data="${data}"
        geoType="WKB"
        geoColumn="geometry"
        dataColumn="children_with_parents_working"
        type="continuous"
        bins="5"
        colorScheme="PuRd"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Capacity Percent Coverage (Capacity/Children with All Parent(s) Working)"
        visible="false"
        data="${data}"
        attribution="American Community Survey 5-Year Estimates 2021"
        geoType="WKB"
        labelFormat="percent"
        geoColumn="geometry"
        dataColumn="capacity_over_children"
        type="continuous"
        bins="5"
        colorScheme="YlGnBu"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Total Population"
        attribution="American Community Survey 5-Year Estimates 2021"
        visible="false"
        data="${data}"
        geoType="WKB"
        geoColumn="geometry"
        dataColumn="Total Population"
        type="continuous"
        bins="5"
        colorScheme="Purples"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        attribution="American Community Survey 5-Year Estimates 2021"
        visible="false"
        data="${data}"
        geoType="WKB"
        labelFormat="currency:usd"
        geoColumn="geometry"
        dataColumn="Median Household Income (In 2021 Inflation Adjusted Dollars)"
        type="continuous"
        bins="5"
        colorScheme="Purples"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Percent of people over 16 unemployed"
        attribution="American Community Survey 5-Year Estimates 2021"
        visible="false"
        data="${data}"
        geoType="WKB"
        labelFormat="percent"
        geoColumn="geometry"
        dataColumn="Unemployment Pct"
        type="continuous"
        bins="5"
        colorScheme="YlOrRd"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>
      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Percent of people over 25 with less than a High School Diploma"
        attribution="American Community Survey 5-Year Estimates 2021"
        visible="false"
        data="${data}"
        geoType="WKB"
        labelFormat="percent"
        geoColumn="geometry"
        dataColumn="Pct Less Than Hs"
        type="continuous"
        bins="5"
        colorScheme="RdPu"
        beforeId="water"
        method="QNT"
        geoId="${idCol}"
        tooltips="${tooltipSpec(idCol)}"
      ></osl-map-layer>

      <osl-map-layer
        staticStroke="[255,255,255]"
        stroked="true"
        staticLineWidth="1"
        lineWidthUnits="pixels"
        legendTitle="Provider Locations"
        visible="true"
        fixed="true"
        data="${providerLocations}"
        geoType="WKB"
        geoColumn="geometry"
        staticRadius="100"
        geoId="ADDRESS"
        type="static"
        staticFill="[0,0,0]"
        layer="point"
        pointRadiusScale="2"
        pointRadiusMinPixels="1"
        pointRadiusMaxPixels="20"
      ></osl-map-layer>
    </osl-glmap>
  `;
};
