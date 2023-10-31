import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/GlMap/src/GlMap.ts";
import "../components/GlMap/src/GlMapLayer.ts";
import "../components/Slider/src/Slider.ts";
import "../components/Select/src/SelectControl.ts";
import "../components/FlexBox/src/FlexBox.ts";
import "../components/StatTable/src/StatTable.ts";
import "../components/DataTable/src/DataTable.ts";
import "../components/Download/src/Download.ts";
import "../components/Stat/src/Stat.ts";
import "../components/marks/Line/src/Line.ts";
import "../components/marks/Axis/src/Axis.ts";
import "../components/Plot/src/Plot.ts";
import "../components/Modal/src/Modal.ts";
import "../components/Radio/src/Radio.ts";
import "../components/ParamView/src/ParamView.ts";

import {
  yearLabels,
  siteLabels,
  aiClassLabels,
  aiTypeLabels,
  aiTypeSpecificLabels,
  zipCodeData,
  zipCodeColumns,
  demogZipCodeColumns,
  filteredDatasets,
  overTimeByAiClass,
  overTimeByAiType,
  overTimeByAiProduct,
  overTimeByAgNonAg,
  censusTractData,
  censusTractColumns,
} from "./utils";

import {
  CprDataDescription,
  CprFilterHeader,
  CprTimeSeriesHeader,
} from "./Cpr";

export default {
  title: "Data",
};

export const PreventBlindness = () => {
  const abbrs = [
    "*",
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    // "CZ",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const specialties = [
    { value: "*", label: "All" },
    { value: "%207W00000X%", label: "Ophthalmology: " },
    {
      value: "%207WX0120X%",
      label: "Ophthalmology: Cornea and External Diseases Specialist",
    },
    { value: "%207WX0009X%", label: "Ophthalmology: Glaucoma Specialist" },
    { value: "%207WX0109X%", label: "Ophthalmology: Neuro-ophthalmology" },
    {
      value: "%207WX0200X%",
      label: "Ophthalmology: Ophthalmic Plastic and Reconstructive Surgery",
    },
    {
      value: "%207WX0110X%",
      label: "Ophthalmology: Pediatric Ophthalmology and Strabismus Specialist",
    },
    { value: "%207WX0107X%", label: "Ophthalmology: Retina Specialist" },
    {
      value: "%207WX0108X%",
      label: "Ophthalmology: Uveitis and Ocular Inflammatory Disease",
    },
    { value: "%152W00000X%", label: "Optometrist: " },
    {
      value: "%152WC0802X%",
      label: "Optometrist: Corneal and Contact Management",
    },
    { value: "%152WL0500X%", label: "Optometrist: Low Vision Rehabilitation" },
    { value: "%152WX0102X%", label: "Optometrist: Occupational Vision" },
    { value: "%152WP0200X%", label: "Optometrist: Pediatrics" },
    { value: "%152WS0006X%", label: "Optometrist: Sports Vision" },
    { value: "%152WV0400X%", label: "Optometrist: Vision Therapy" },
    { value: "%156F00000X%", label: "Technician\\/Technologist: " },
    { value: "%156FC0800X%", label: "Technician\\/Technologist: Contact Lens" },
    {
      value: "%156FC0801X%",
      label: "Technician\\/Technologist: Contact Lens Fitter",
    },
    { value: "%156FX1700X%", label: "Technician\\/Technologist: Ocularist" },
    { value: "%156FX1100X%", label: "Technician\\/Technologist: Ophthalmic" },
    {
      value: "%156FX1101X%",
      label: "Technician\\/Technologist: Ophthalmic Assistant",
    },
    { value: "%156FX1800X%", label: "Technician\\/Technologist: Optician" },
    {
      value: "%156FX1201X%",
      label: "Technician\\/Technologist: Optometric Assistant",
    },
    {
      value: "%156FX1202X%",
      label: "Technician\\/Technologist: Optometric Technician",
    },
    { value: "%156FX1900X%", label: "Technician\\/Technologist: Orthoptist" },
  ];
  const statTable = JSON.stringify([
    "providers_per_100k",
    "providers_count",
    "Vision Difficulty Rate",
    "Percent Without Health Insurance",
    "Percent Less than High School",
    "Total Population",
  ]);
  const bothDatasets = JSON.stringify([
    "https://d36q6zt0rhsb35.cloudfront.net/data-query/65303831181b4500089e4fe6",
    "https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629",
  ]);
  const tableColumns = JSON.stringify([
    "NPI",
    "Provider First Name",
    "Provider Last Name (Legal Name)",
    "Provider Credential Text",
    "Full Address",
    "Taxonomy",
    "County Name",
    "Congressional District GEOID",
    "Zip Code (ZCTA)",
    "County GEOID",
  ]);
  const tooltipSpec = JSON.stringify([
    {
      column: "NAME",
      label: "County",
    },
    {
      column: "providers_per_100k",
      label: "Providers / 100k Pop",
    },
    {
      column: "providers_count",
      label: "Total Providers",
    },
    {
      column: "Total Population",
    },
    {
      column: "Vision Difficulty Rate",
      format: "percent",
    },
    {
      column: "Percent Less than High School",
      format: "percent",
    },
    {
      column: "Percent Without Health Insurance",
      format: "percent",
    },
  ]);
  return html`
  <sp-theme>
    <div>
      <h1>US Vision Health Provider Data Explorer</h1>
    </div>  
    <osl-flex-box breakpoint="md">
      <div style="max-width: calc(50% - 20px); padding-right: 20px">
        <p>The US Vision Health Provider Data Explorer tool is an exploratory data and screening tool 
          for vision care providers across the US. The version of the tool providers data visualization
          by county for each state in the US and the subspecialties listed in the US Department of Health and 
          Human Services (HHS) National Provider Identifier (NPI) dataset. 
        </p>
      </div>
      <div style="max-width:50%">
        <p>
          On the left, you can filter by vision care provider subspecialty and state. Summary statistics will display in the table on the left and the map on the right
          will display the selected area and statistics. Click the layer icon on the map legend to visualize a different variable. Below, you can explore a full table of available providers
          and download the county summary data or a full list of providers for your query.
        </p>
      </div>  
    </osl-flex-box>
    <p style="font-size:0.75rem">
      Data sources: Providers - HHS NPI (Summer 2023); Population Data - ACS 2021 5-Year Estimates (via Social Explorer); 
      Geographies - US Census Administrative Boundaries (Counties - 2019)
    </p>
  </sp-theme>
  <br/>
  <hr/>
  <br/>
  <div style="display:flex;flex-direction:row;gap:1rem;">
    <div style="min-width:30%;">
      <div style="display:flex;flex-direction:column; gap:1rem;">
      <osl-select-control
        data=${bothDatasets}
        option="state"
        options=${JSON.stringify(abbrs)}
        title="Filter by state"
        initialValue="IL"
      ></osl-select-control>
      <osl-select-control
        data=${bothDatasets}
        option="taxonomy"
        options=${JSON.stringify(specialties)}
        title="Choose a specialty or subspecialty"
        initialValue="*"
      ></osl-select-control>
      <osl-stat-table
        title="Summary Statistics"
        data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
        columns=${statTable}
        ></osl-stat-table>
      </div>
    </div>
    <div style="height: 80vh; width: 100%; position:relative;">
      <osl-glmap 
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
        legendPosition="top-left" 
        showNavigation='true'
        showSingleLayer='true'
        center=[]
        >
<osl-map-layer 
 source="65303b14fc2a290008152629" 
 legendTitle="Providers Per 100k Population" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="providers_per_100k" 
 type="continuous" 
 bins='5' 
 colorScheme="RdYlBu" 
 filled='true' 
 attribution="HHS National Provider Identifier (2023)" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
<osl-map-layer 
 source="65303b14fc2a290008152629" 
 legendTitle="Total Providers" 
 visible='false' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="providers_count" 
 type="continuous" 
 bins='5' 
 colorScheme="YlGnBu" 
 filled='true' 
 attribution="HHS National Provider Identifier (2023)" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
<osl-map-layer 
 source="65303b14fc2a290008152629" 
 legendTitle="Vision Difficulty Rate" 
 visible='false' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Vision Difficulty Rate" 
 type="continuous" 
 bins='5' 
 colorScheme="d3-cividis" 
 filled='true' 
 attribution="American Community Survey 2021 (5 Year Estimates)" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
<osl-map-layer 
 source="65303b14fc2a290008152629" 
 legendTitle="Percent Without Health Insurance" 
 visible='false' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Percent Without Health Insurance" 
 type="continuous" 
 bins='5' 
 colorScheme="PuRd" 
 filled='true' 
 attribution="American Community Survey 2021 (5 Year Estimates)" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
<osl-map-layer 
 legendTitle="Percent Less than High School" 
 visible='false' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Percent Less than High School" 
 type="continuous" 
 bins='5' 
 colorScheme="BuPu" 
 filled='true' 
 attribution="American Community Survey 2021 (5 Year Estimates)" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
<osl-map-layer 
 source="65303b14fc2a290008152629" 
 legendTitle="Total Population" 
 visible='false' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Total Population" 
 type="continuous" 
 bins='5' 
 colorScheme="PuBuGn" 
 filled='true' 
 attribution="American Community Survey 2021 (5 Year Estimates)"
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
</osl-glmap>
                   <osl-flex-box breakpoint="lg">
    <osl-download
      title="Download County Summary Data"
      filename="counties-summary"
      parameterSuffixes=${JSON.stringify(["state", "taxonomy"])}
      data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
    ></osl-download>
    <osl-download
      title="Download All Providers"
      filename="vision-providers"
      parameterSuffixes=${JSON.stringify(["state", "taxonomy"])}
      data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303831181b4500089e4fe6"
    ></osl-download></osl-flex-box> 
    </div>
</div>
<br/><br/><hr/><br/><br/>
</div>
<osl-data-table
title="Providers"
    maxw="200vw"
      data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303831181b4500089e4fe6"
      columns=${tableColumns}
      pagination="true"
    ></osl-data-table>
  `;
};
export const Equiticity = () => {
  const dates = [
    "2019-01",
    "2019-02",
    "2019-03",
    "2019-04",
    "2019-05",
    "2019-06",
    "2019-07",
    "2019-08",
    "2019-09",
    "2019-10",
    "2019-11",
    "2019-12",
    "2020-01",
    "2020-02",
    "2020-03",
    "2020-04",
    "2020-05",
    "2020-06",
    "2020-07",
    "2020-08",
    "2020-09",
    "2020-10",
    "2020-11",
    "2020-12",
    "2021-01",
    "2021-02",
    "2021-03",
    "2021-04",
    "2021-05",
    "2021-06",
    "2021-07",
    "2021-08",
    "2021-09",
    "2021-10",
    "2021-11",
    "2021-12",
    "2022-01",
    "2022-02",
    "2022-03",
    "2022-04",
    "2022-05",
    "2022-06",
    "2022-07",
    "2022-08",
    "2022-09",
    "2022-10",
    "2022-11",
    "2022-12",
    "2023-01",
    "2023-02",
    "2023-03",
    "2023-04",
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10",
    //  '2023-11',
    //  '2023-12'
  ];

  const communityAreas = [
    { label: "ALBANY PARK", value: "14" },
    { label: "ARCHER HEIGHTS", value: "57" },
    { label: "ARMOUR SQUARE", value: "34" },
    { label: "ASHBURN", value: "70" },
    { label: "AUBURN GRESHAM", value: "71" },
    { label: "AUSTIN", value: "25" },
    { label: "AVALON PARK", value: "45" },
    { label: "AVONDALE", value: "21" },
    { label: "BELMONT CRAGIN", value: "19" },
    { label: "BEVERLY", value: "72" },
    { label: "BRIDGEPORT", value: "60" },
    { label: "BRIGHTON PARK", value: "58" },
    { label: "BURNSIDE", value: "47" },
    { label: "CALUMET HEIGHTS", value: "48" },
    { label: "CHATHAM", value: "44" },
    { label: "CHICAGO LAWN", value: "66" },
    { label: "CLEARING", value: "64" },
    { label: "DOUGLAS", value: "35" },
    { label: "DUNNING", value: "17" },
    { label: "EAST GARFIELD PARK", value: "27" },
    { label: "EAST SIDE", value: "52" },
    { label: "EDGEWATER", value: "77" },
    { label: "EDISON PARK", value: "9" },
    { label: "ENGLEWOOD", value: "68" },
    { label: "FOREST GLEN", value: "12" },
    { label: "FULLER PARK", value: "37" },
    { label: "GAGE PARK", value: "63" },
    { label: "GARFIELD RIDGE", value: "56" },
    { label: "GRAND BOULEVARD", value: "38" },
    { label: "GREATER GRAND CROSSING", value: "69" },
    { label: "HEGEWISCH", value: "55" },
    { label: "HERMOSA", value: "20" },
    { label: "HUMBOLDT PARK", value: "23" },
    { label: "HYDE PARK", value: "41" },
    { label: "IRVING PARK", value: "16" },
    { label: "JEFFERSON PARK", value: "11" },
    { label: "KENWOOD", value: "39" },
    { label: "LAKE VIEW", value: "6" },
    { label: "LINCOLN PARK", value: "7" },
    { label: "LINCOLN SQUARE", value: "4" },
    { label: "LOGAN SQUARE", value: "22" },
    { label: "LOOP", value: "32" },
    { label: "LOWER WEST SIDE", value: "31" },
    { label: "MCKINLEY PARK", value: "59" },
    { label: "MONTCLARE", value: "18" },
    { label: "MORGAN PARK", value: "75" },
    { label: "MOUNT GREENWOOD", value: "74" },
    { label: "NEAR NORTH SIDE", value: "8" },
    { label: "NEAR SOUTH SIDE", value: "33" },
    { label: "NEAR WEST SIDE", value: "28" },
    { label: "NEW CITY", value: "61" },
    { label: "NORTH CENTER", value: "5" },
    { label: "NORTH LAWNDALE", value: "29" },
    { label: "NORTH PARK", value: "13" },
    { label: "NORWOOD PARK", value: "10" },
    { label: "OAKLAND", value: "36" },
    { label: "OHARE", value: "76" },
    { label: "PORTAGE PARK", value: "15" },
    { label: "PULLMAN", value: "50" },
    { label: "RIVERDALE", value: "54" },
    { label: "ROGERS PARK", value: "1" },
    { label: "ROSELAND", value: "49" },
    { label: "SOUTH CHICAGO", value: "46" },
    { label: "SOUTH DEERING", value: "51" },
    { label: "SOUTH LAWNDALE", value: "30" },
    { label: "SOUTH SHORE", value: "43" },
    { label: "UPTOWN", value: "3" },
    { label: "WASHINGTON HEIGHTS", value: "73" },
    { label: "WASHINGTON PARK", value: "40" },
    { label: "WEST ELSDON", value: "62" },
    { label: "WEST ENGLEWOOD", value: "67" },
    { label: "WEST GARFIELD PARK", value: "26" },
    { label: "WEST LAWN", value: "65" },
    { label: "WEST PULLMAN", value: "53" },
    { label: "WEST RIDGE", value: "2" },
    { label: "WEST TOWN", value: "24" },
    { label: "WOODLAWN", value: "42" },
  ];
  const summary =
    "https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375";
  const geo =
    "https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e";
  const redLightDot =
    "https://d14xp4vykd1up4.cloudfront.net/data-query/6532789178d66b0009321d78";
  const speedDot =
    "https://d14xp4vykd1up4.cloudfront.net/data-query/653289411fc91e0008ec7996";
  return html`
<sp-theme>
  <div>
    <div style="display:flex;flex-direction:row; gap:1rem;">
    <h1>Transit Equity Explorer</h1>
    <osl-select-control
      data=${JSON.stringify([summary])}
      option="community"
      options=${JSON.stringify(communityAreas)}
      title="Select a Community Area"
      initialValue="43"
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([summary, geo, speedDot, redLightDot])}
      option="date"
      options=${JSON.stringify(dates)}
      title="Choose a date"
      initialValue="2023-09"
    ></osl-select-control>
    </div>
  </div>  
  <osl-flex-box breakpoint="md">
    <div style="max-width: calc(50% - 20px); padding-right: 20px">
      <p>
      </p>
    </div>
    <div style="max-width:50%">
      <p>
      </p>
    </div>  
  </osl-flex-box>
  <p style="font-size:0.75rem">
  </p>
</sp-theme>

<osl-flex-box
      breakpoint="sm"
    >
      <osl-stat
        title="Crashes"
        property="Crashes"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Injuries from Crashes"
        property="Injuries"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Fatalities from Crashes"
        property="Fatalities"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Speed Camera Tickets"
        property="Speed Camera Violations"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Right Light tickets"
        property="Red Light Violations"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
    </osl-flex-box>
<br/>
<hr/>
<br/>
<div style="display:flex;flex-direction:row;gap:1rem;">
  <div style="height: 70vh; width: 50%; position:relative;">
    <osl-glmap 
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Red Light Tickets" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="Red Light Violations"
 type="continuous" 
 bins='5' 
 colorScheme="RdPu" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Speed Tickets" 
 visible='true' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="Speed Camera Violations"
 type="continuous" 
 bins='5' 
 colorScheme="OrRd" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="JNK" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Crashes" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="Crashes"
 type="continuous" 
 bins='5' 
 colorScheme="d3-viridis" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Injuries from Crashes" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="injuries"
 type="continuous" 
 bins='5' 
 colorScheme="d3-magma" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Fatalities from Crashes" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="fatalities"
 type="continuous" 
 bins='5' 
 colorScheme="OrRd" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>        
</osl-glmap>
  </div>

  <div style="height: 70vh; width: 50%; position:relative;">
    <osl-glmap 
    mapGroup="1"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      >

<osl-map-layer
          layer="circle"
          data="https://d14xp4vykd1up4.cloudfront.net/data-query/6532789178d66b0009321d78"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="violations"
          legendtitle="Red Light Camera Locations and Violations"
          visible="false"
        >
        </osl-map-layer>
<osl-map-layer
          layer="circle"
          data="https://d14xp4vykd1up4.cloudfront.net/data-query/653289411fc91e0008ec7996"
          geoColumn="geometry"
          geoType="WKB"
          circleRadius="5"
          radiusUnits="pixels"
          fixedRadius="true"
          dataColumn="violations"
          legendtitle="Speed Camera Locations and Violations"
          visible="true"
        >
        </osl-map-layer>

        
</osl-glmap>
  </div>
</div>
<br/><br/><hr/><br/><br/>
</div>
`;
};
export const GlMap = () => {
  return html`
    <div>
      <div style="height: 500px; width: 100%">
        <osl-glmap
          mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
        </osl-glmap>
      </div>
    </div>
  `;
};

export const ChoroTest = () => {
  return html`
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
  `;
};

export const ChoroplethMap = () => {
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
  return html`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <div slot="description">asdf</div>
      </osl-glmap>
      <br /><br />
    </div>
  `;
};

export const DotMap = () => {
  return html`
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
  `;
};
// console.log(PreventBlindness())

export const ControlledGlMap = () => {
  return html`
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
  `;
};

export const Wisconsin = () => {
  const dates = [
    "2021-03",
    "2021-05",
    "2021-07",
    "2021-08",
    "2021-09",
    "2021-11",
    "2022-01",
    "2022-02",
    "2022-03",
    "2022-05",
    "2022-06",
    "2022-07",
    "2022-08",
    "2022-09",
    "2022-10",
    "2022-11",
    "2022-12",
    "2023-01",
    "2023-02",
    "2023-03",
    "2023-04",
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
  ];
  const cccStatDataset =
    "https://d27ouidsqnp6r.cloudfront.net/data-query/653bc5df7ac484000866bdd4";
  const lccStatDataset =
    "https://d27ouidsqnp6r.cloudfront.net/data-query/653bc7487ac484000866bdd5";
  const tableDataset =
    "https://d27ouidsqnp6r.cloudfront.net/data-query/653baba66c4cd800085af0b2";
  const lineDataset =
    "https://d27ouidsqnp6r.cloudfront.net/data-query/653b1772972e0e0008812306";
  const allDatasets = JSON.stringify([
    cccStatDataset,
    lccStatDataset,
    tableDataset,
  ]);
  const allAndLineDataset = JSON.stringify([
    cccStatDataset,
    lccStatDataset,
    tableDataset,
    lineDataset,
  ]);
  const starOptions = ["*", "1", "2", "3", "4", "5"];
  const congressionalDistricts = ["*", "1", "2", "3", "4", "5", "6", "7", "8"];

  // <sp-help-text>Star Rating</sp-help-text>
  // <osl-select-control
  // data=${allDatasets}
  // options=${JSON.stringify(starOptions)}
  // option="star"
  // initialValue="*"
  // >
  // </osl-select-control>
  return html`
  <div style="display:flex;flex-direction:row;gap:1rem;">
  <div style="display:flex;flex-direction:column">
  <div>
  <osl-flex-box breakpoint="md">
  <sp-help-text>Open On</sp-help-text>
  <osl-select-control
data=${allDatasets}
options=${JSON.stringify(dates)}
option="open_on"
initialValue="2021-03"
>
</osl-select-control></div>
<div>
<sp-help-text>Closed on</sp-help-text>
  <osl-select-control
data=${allDatasets}
options=${JSON.stringify(dates)}
option="closed_on"
initialValue="2023-09"
>
</osl-select-control>
<sp-help-text>Congressional District</sp-help-text>
  <osl-select-control
data=${allAndLineDataset}
options=${JSON.stringify(congressionalDistricts)}
option="congressional_district"
initialValue="*"
>
</osl-select-control>


</osl-flex-box>
</div>
</div><div style="flex-grow:1;width:100%">

<osl-flex-box
      breakpoint="sm"
    >

    <osl-stat
        title="LCC Capacity Closed"
        property="LCC Total Capacity Lost"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc5df7ac484000866bdd4"
      >
      </osl-stat>
      <osl-stat
        title="Count of LCC Providers Closed"
        property="LCC Count of Providers Closings"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc5df7ac484000866bdd4"
      >
      </osl-stat>
    <osl-stat
        title="CCC Capacity Closed"
        property="CCC Total Capacity Lost"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc7487ac484000866bdd5"
      >
      </osl-stat>
      <osl-stat
        title="Count of CCC Providers Closed"
        property="CCC Count of Providers Closings"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc7487ac484000866bdd5"
      >
      </osl-stat>
    </osl-flex-box>
<div style="height: 60vh; width: 100%;">

<osl-plot
colorLegend="true" 
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1772972e0e0008812306"    
>
<osl-line 
x="Date"
y="total_capacity"
direction="horizontal"
></osl-line>
</osl-plot>
</div>
<hr/>
  <div style="height:80vh; width:100%">
  <osl-flex-box breakpoint="md">
  <h3>Closed during this period</h3>

  <osl-download
      title="Download Providers Data"
      filename="closed-summary"
      tsv
      parameterSuffixes=${JSON.stringify(["open_on", "closed_on"])}
      data="https://d27ouidsqnp6r.cloudfront.net/data-query/653baba66c4cd800085af0b2"
    ></osl-download>
  </osl-flex-box>
  <osl-data-table
      data="https://d27ouidsqnp6r.cloudfront.net/data-query/653baba66c4cd800085af0b2"
      columns='["Provider Number","ADDRESS", "CITY", "ZIP", "Capacity", "Application Type", "Star Level ", "CONGRESSIONAL_DISTRICT", "ASM2021", "SENATE_DISTRICT", "GEOID"]'
      pagination="true"
    ></osl-data-table>
    
  <div>
</div></div>`;
};

export const m3 = () => {
  return html`
    <div style="height:80vh; width:100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        legendPosition="top-right"
        showNavigation="true"
      >
        <osl-map-layer
          source="653ab1816cb151000835ae06"
          legendTitle="-"
          visible="true"
          geoType="WKB"
          geoColumn="geom"
          dataColumn="STATION_ID"
          type="continuous"
          bins="5"
          colorScheme="RdYlGn"
          filled="true"
          layer="point"
          data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ab1816cb151000835ae06"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>
  `;
};

// <osl-map-layer
//  source="653ab1816cb151000835ae06"
//  legendTitle="--"
//  visible='true'
//  geoType="WKB"
//  geoColumn="geom"
//  dataColumn="geom"
//  type="categorical"
//  bins='5'
//  colorScheme="d3-turbo"
//  filled='true'
//  layer="polygon"
//  attribution="CTA 2023"
//  data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ab1816cb151000835ae06"
// >

// </osl-map-layer>
// <osl-map-layer
//  source="653ab1816cb151000835ae06"
//  legendTitle="-"
//  visible='true'
//  geoType="WKB"
//  geoColumn="geom"
//  dataColumn="STATION_ID"
//  type="continuous"
//  bins='5'
//  colorScheme="RdYlGn"
//  filled='true'
//  layer="point"
//  data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ab1816cb151000835ae06"
// >

// </osl-map-layer>

export const CirculateSanDiego = () => {
  const raw311 =
    "https://dcoszmf9no5hj.cloudfront.net/data-query/653be6b05ff01600085e5eef";
  const walkAudits =
    "https://dcoszmf9no5hj.cloudfront.net/data-query/653bf1235ecf29000896210d";
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
  const years = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const complaints = [
    "*",
    "Other",
    "Pavement Maintenance",
    "Traffic Signal Timing",
    "Encampment",
    "Street Light Maintenance",
    "Traffic Signal Issue",
    "Street Flooded",
    "Stormwater",
    "Tree Maintenance",
    "Pothole",
    "Parking",
    "Illegal Dumping",
    "Graffiti - Public",
    "Environmental Services Code Compliance",
    "Missed Collection",
    "Parks Issue",
    "Street Sweeping",
    "Traffic Sign Maintenance",
    "ROW Maintenance",
    "Graffiti - Code Enforcement",
    "Stormwater Code Enforcement",
    "Sidewalk Repair Issue",
    "Parking Violation",
    "Waste on Private Property",
    "Shared Mobility Device",
    "Traffic Engineering",
    "Development Services - Code Enforcement",
    "Dead Animal",
    "Vegetation Encroachment",
    "Trash/Recycling Collection",
    "Weed Cleanup",
    "Right-of-Way Code Enforcement",
  ];
  let dates: string[] = [];
  years.forEach((year) => {
    months.forEach((month) => {
      dates.push(`${year}-${month}`);
    });
  });

  return html`<div style="height:auto; width:100%">
  <osl-flex-box breakpoint="md">

<osl-select-control
    data=${JSON.stringify([raw311])}
    option="month"
    options=${JSON.stringify(dates)}
    title="311 Complaints Month"
    initialValue="2023-01"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([raw311])}
    option="service"
    options=${JSON.stringify(complaints)}
    title="311 Complaints Type"
    initialValue="*"
  ></osl-select-control>
</osl-flex-box>
  <br/><br/>
    <osl-flex-box breakpoint="xl">
    <div style="height:80vh">

    <osl-glmap 
    mapGroup="1"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      center="[-117.2,32.7]"
      zoom="11"
      >

<osl-map-layer
          layer="circle"
          data=${walkAudits}
          geoColumn="geometry"
          type="categorical"
          staticColor="[255,0,0]"
          geoType="WKB"
          legendtitle="Walk Audits"
          visible="true"
          colorscheme="d3-sinebow"
          circleRadius="30"
          dataColumn="site"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>

        
</osl-glmap>
    </div>
    <div style="height:80vh">

    <osl-glmap 
    mapGroup="1"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      center="[-117.2,32.7]"
      zoom="11"
      >

<osl-map-layer
          layer="circle"
          data=${raw311}
          geoColumn="geometry"
          type="categorical"
          staticColor="[255,0,0]"
          geoType="WKB"
          legendtitle="311 Complaints by Type"
          visible="true"
          colorscheme="d3-turbo"
          circleRadius="30"
          dataColumn="service_name"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>

        
</osl-glmap>
</osl-flex-box>
    </div>
  </div>
  `;
};

export const CirculateSanDiego2 = () => {
  const raw311 =
    "https://dcoszmf9no5hj.cloudfront.net/data-query/653be6b05ff01600085e5eef";
  const walkAudits =
    "https://dcoszmf9no5hj.cloudfront.net/data-query/653bf1235ecf29000896210d";
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
  const years = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const complaints = [
    "*",
    "Other",
    "Pavement Maintenance",
    "Traffic Signal Timing",
    "Encampment",
    "Street Light Maintenance",
    "Traffic Signal Issue",
    "Street Flooded",
    "Stormwater",
    "Tree Maintenance",
    "Pothole",
    "Parking",
    "Illegal Dumping",
    "Graffiti - Public",
    "Environmental Services Code Compliance",
    "Missed Collection",
    "Parks Issue",
    "Street Sweeping",
    "Traffic Sign Maintenance",
    "ROW Maintenance",
    "Graffiti - Code Enforcement",
    "Stormwater Code Enforcement",
    "Sidewalk Repair Issue",
    "Parking Violation",
    "Waste on Private Property",
    "Shared Mobility Device",
    "Traffic Engineering",
    "Development Services - Code Enforcement",
    "Dead Animal",
    "Vegetation Encroachment",
    "Trash/Recycling Collection",
    "Weed Cleanup",
    "Right-of-Way Code Enforcement",
  ];

  const lineData =
    "https://dcoszmf9no5hj.cloudfront.net/data-query/653bf6dbc5ea2b0008cd63c0";
  let dates: string[] = [];
  years.forEach((year) => {
    months.forEach((month) => {
      dates.push(`${year}-${month}`);
    });
  });

  return html`<div style="height:auto; width:100%">
  <osl-flex-box breakpoint="md">

<osl-select-control
    data=${JSON.stringify([raw311])}
    option="month"
    options=${JSON.stringify(dates)}
    title="311 Complaints Month"
    initialValue="2023-01"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([raw311])}
    option="service"
    options=${JSON.stringify(complaints)}
    title="311 Complaints Type"
    initialValue="*"
  ></osl-select-control>
</osl-flex-box>
  <br/><br/>
    <osl-flex-box breakpoint="xl">
    <div style="height:80vh;width:50%;flex-grow:0;overflow-y:auto">
    <div style="height:400vh;width:100%">

    <osl-plot
colorLegend="true" 
data=${lineData}
marginRight="150"
>
<osl-line 
x="date"
y="count"
fy="service_name"
colorScheme="accent"
direction="horizontal"
></osl-line>
</osl-plot></div>
    </div>
    <div style="height:80vh">

    <osl-glmap 
    mapGroup="1"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      center="[-117.2,32.7]"
      zoom="11"
      >

<osl-map-layer
          layer="circle"
          data=${raw311}
          geoColumn="geometry"
          type="categorical"
          staticColor="[255,0,0]"
          geoType="WKB"
          legendtitle="311 Complaints by Type"
          visible="true"
          colorscheme="d3-turbo"
          circleRadius="30"
          dataColumn="service_name"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>
<osl-map-layer
          layer="circle"
          data=${walkAudits}
          geoColumn="geometry"
          type="categorical"
          staticColor="[255,0,0]"
          geoType="WKB"
          legendtitle="Walk Audits"
          visible="true"
          colorscheme="d3-sinebow"
          circleRadius="30"
          dataColumn="site"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>


        
</osl-glmap>
</osl-flex-box>
    </div>
  </div>
  <br/>
  <hr/>
  <br/>
  <h3>311 Complaints table</h3>
<osl-data-table
  pagination="true"
  data=${raw311}
  columns='["service_name", "service_name_detail", "public_description", "street_address", "date", "status"]'
></osl-data-table>
  <br/>
  <hr/>
  <br/>
  <h3>Walk Audits Table</h3>
<osl-data-table
  pagination="true"
  data=${walkAudits}
  columns='["Name", "site", "Description"]'
></osl-data-table>
  `;
};

export const CirculateSanDiego3 = () => {
  const tractJoined =
    "https://dcoszmf9no5hj.cloudfront.net/data-query/653bfcc7a723810008c2c81e";
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
  const years = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const complaints = [
    "Other",
    "Pavement Maintenance",
    "Traffic Signal Timing",
    "Encampment",
    "Street Light Maintenance",
    "Traffic Signal Issue",
    "Street Flooded",
    "Stormwater",
    "Tree Maintenance",
    "Pothole",
    "Parking",
    "Illegal Dumping",
    "Graffiti - Public",
    "Environmental Services Code Compliance",
    "Missed Collection",
    "Parks Issue",
    "Street Sweeping",
    "Traffic Sign Maintenance",
    "ROW Maintenance",
    "Graffiti - Code Enforcement",
    "Stormwater Code Enforcement",
    "Sidewalk Repair Issue",
    "Parking Violation",
    "Waste on Private Property",
    "Shared Mobility Device",
    "Traffic Engineering",
    "Development Services - Code Enforcement",
    "Dead Animal",
    "Vegetation Encroachment",
    "Trash/Recycling Collection",
    "Weed Cleanup",
    "Right-of-Way Code Enforcement",
  ];
  const walkAuditNames = [
    '"No Riding Bikes on Sidewalk" Sign, but no bike infrastructure',
    "10 Second Crossing Window",
    "10 second crossing window",
    "12th & Imperial Transit Center",
    "4-Way Stop",
    "4394 Mayberry St, San Diego, CA 92113, USA",
    "4853 Bunnell St, San Diego, CA 92113, USA",
    "4855 Ocean View Blvd, San Diego, CA 92113, USA",
    "932 Delta St, National City, CA 91950, USA",
    "Aggressive Drivers",
    "Audible Crossing",
    "Audible Pedestrian Crossing Signal",
    "Audible Pedestrian Signal",
    "Audible RRFB",
    "Audible Signal",
    "Beg Button Obscured",
    "Bicycle Lane",
    "Bike Lane",
    "Bike Lane Starts Here",
    "Bike Parking",
    "Bike Rack",
    "Bike lanes",
    "Broken Sidewalk",
    "Broken/Narrow Sidewalks",
    "Broken/Uneven Sidewalks",
    "Broken/narrow Sidewalk",
    "Bus Only Lane",
    "Cars Parked on Curb",
    "Cars Roll Stop",
    "Cars do not yield to pedestrians",
    "Chicano Park",
    "Chicano Park Museum and Cultural Center",
    "Construction",
    "County Center/Little Italy Station",
    "Cracked Sidewalk",
    "Cracked Sidewalks",
    "Crosswalks",
    "Curb Extension",
    "Curb Should be Painted Red",
    "Cycle Track",
    "Debris",
    "Debris on Sidewalk",
    "Diverters",
    "Division St & Highland Av, National City, CA 91950, USA",
    "Drivers Speeding",
    "Empty Lot",
    "Euclid Elementary School",
    "Excess Litter",
    "Faded Crosswalk",
    "Faded Crosswalk Paint",
    "Faded School Crosswalks",
    "Faded crosswalk",
    "Faded/ Missing Crosswalks",
    "Faded/Missing Crosswalk",
    "Faded/Missing Crosswalks",
    "Father Joe's",
    "Father Joe's\xa0",
    "Flooding",
    "Flooding Issues",
    "Former car crash",
    "Fridge in Curb Ramp",
    "High Visibility Crosswalk",
    "Hill",
    "Insufficient Street Lighting",
    "Intersection Mural",
    "Keeler Court Apartments",
    "Kennedy Neighborhood Park",
    "Lack of Lighting",
    "Las Serenas Apartments",
    "Las Serenas Apartments, Delta Street, San Diego, CA, USA",
    "Lincoln Senior High School",
    "Litter",
    "Little Italy",
    "Long Light, hard to catch bus",
    "Long Signals, Short Crossing Windows",
    "Marriott Marquis San Diego Marina",
    "Mayberry Street & South 44th Street, San Diego, CA, USA",
    "Mayberry Townhomes",
    "Memorial Dog Park",
    "Mid-Block Crossing",
    "Midblock Crossing",
    "Missing Crosswalk",
    "Missing Crosswalks",
    "Missing Curb Ramp",
    "Missing Sidewalk",
    "Missing/Broken Sidewalks",
    "Montgomery Middle School",
    "Mural",
    "Murals",
    "Murals/Art",
    "Narrow Sidewalk",
    "Narrow Sidewalks",
    "Narrow/ Broken Sidewalks",
    "No Audible Pedestrian Crossing Signals",
    "No Bench or Shade Bus Stop",
    "No Crossing",
    "No Crosswalk",
    "No Crosswalks or Stoppages",
    "No Crosswalk\xa0",
    "No Curb Ramp",
    "No Ramp",
    "No Ramp or Crosswalk",
    "No Ramps",
    "No School Crossing Markings",
    "No Shade",
    "No Shade Bus Stop",
    "No Sidewalk",
    "No Truncated Domes",
    "No crosswalk",
    "Nobel Drive Station",
    "Not Enough Time to Cross",
    "Obstruction",
    "Obstructions/Trash",
    "Only one crosswalk, no vehicle stoppage",
    "Overgrown Path",
    "Pacific Beach Middle School",
    "Pacific Beach Taylor Branch Library",
    "Paradise Senior Center",
    "Parking obscures line of sight during drop off and pick up, teachers would like no parking during x hours signage",
    "Parklets",
    "Pedestrian Median",
    "Pedestrian Refuge Island",
    "Pedestrian Scale Lighting",
    "Point 20",
    "Polk Avenue",
    "Poor Lighting",
    "Protected Pedestrian Promenade",
    "Rapid Flashing Beacon",
    "Rapid Flashing Beacon (RRFB)",
    "Route",
    "San Diego College of Continuing Education",
    "San Diego Convention Center",
    "Santa Fe Depot",
    "School Entrance",
    "Seaport Village",
    "Separated Bike Lane",
    "Shade",
    "Shaded Sidewalk",
    "Sharrow",
    "Sheltered Bus Stop",
    "Short Crossing Signal",
    "Short Crossing Time",
    "Sidewalk Obstruction",
    "Sidewalk Obstructions",
    "Speed Bump",
    "Speeding Cars",
    "Speeding Vehicles",
    "St. Rita's Catholic School",
    "Starting Point",
    "Teralta Park",
    "Traffic lights malfuctioning",
    "Trash",
    "Trash\xa0",
    "Tree Cover, Wide Sidewalks",
    "Trees",
    "Trees/ Shade",
    "Trees/Shade",
    "Uneven Sidewalk",
    "Uneven Sidewalks",
    "University Avenue",
    "Unusable Sidewalk",
    "Walk Audit Route",
    "Walk Audit Start Location",
    "Walking Route",
    "Walking route",
    "Waterfront Park",
    "Wayfinding Sign",
    "Weeds and Graffiti",
    "Wide Sidewalk",
    "Wide Sidewalks",
    "Witnessed Jaywalking",
    "Yellow Crosswalk",
    "Zebra Crosswalks",
  ];

  let dates: string[] = [];
  years.forEach((year) => {
    months.forEach((month) => {
      dates.push(`${year}-${month}`);
    });
  });

  return html`<div style="height:auto; width:100%">
  <osl-flex-box breakpoint="md">

<osl-select-control
    data=${JSON.stringify([tractJoined])}
    option="month"
    options=${JSON.stringify(dates)}
    title="311 Complaints Month"
    initialValue="2023-01"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([tractJoined])}
    option="service"
    options=${JSON.stringify(complaints)}
    title="311 Complaints Type"
    initialValue="Sidewalk Repair Issue"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([tractJoined])}
    option="walkaudit_name"
    options=${JSON.stringify(walkAuditNames)}
    title="Walk Audit Issue Type"
    initialValue=${walkAuditNames[0]}
  ></osl-select-control>
</osl-flex-box>
  <br/><br/>
  <div style="position:relative;width:100%;display:flex;flex-direcion:row;">
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Walk Audit Counts" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Walk Audit Count"
 type="continuous" 
 bins='5' 
 colorScheme="RdPu" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer></div>
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="311 Counts" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="311 Service Count"
 type="continuous" 
 bins='5' 
 colorScheme="d3-magma" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer>

</div>
</div>
  <div style="position:relative;width:100%;display:flex;flex-direcion:row;">
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Population" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Population"
 type="continuous" 
 bins='5' 
 colorScheme="RdPu" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer></div>
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Median Income" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Median Income"
 type="continuous" 
 bins='5' 
 colorScheme="d3-viridis" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer>

</div>
</div>
  `;
};

export const CPR = () => {
  return html`
    <div style="width:100%;height:auto;">
      ${CprFilterHeader()}
      <br />
      <div style="width:100%;height:80vh;position:relative">
        <osl-flex-box breakpoint="lg" style="height:100%;">
          <div style="flex-basis:25%; flex-grow:0;">
            <div>
              <sp-theme>
              <p><b>Pesticide Use Map View</b></p>
              <p>
                The map on the right displays pesticide use reporting data 
                at the census tract or zip code scale. The colors on this map represent the pounds of pesticide used in each area.
                The color scale in the legend show the range of use, based on quantile breaks (septile).
                <br/><br/> 
                To change the scale from census tracts or zip codes, 
                click on the layer icon on the legend on the bottom left of the map.
                <br/><br/>
                To change the date range displayed, change the start date and end date drop downs above.
                <br/><br/>
                To filter the data for particular active ingredient types, classes, or commodities, click the "Additional Filters" button for additional options.
                <br/><br/>
                Your current filters are display below, along with a description of data sources.
                <br/><br/>
                Below this map, there is a table of data at both the census tract and zip code scale.
              <hr/>
</sp-theme>
              <osl-param-view
                data=${JSON.parse(filteredDatasets)[0]}
                parameters=${JSON.stringify([
                  "start",
                  "end",
                  "ai_class",
                  "ai_type",
                  "ai_type_specific",
                  "site",
                  "agtype",
                ])}
                parameterTitle="Filter"
                title="Current Data Filters"
              ></osl-param-view>

        <div>
                <br/><br/>
        <osl-download
          title="Download Zip Code Summary Data"
          filename="zip-code-summary"
          parameterSuffixes=${JSON.stringify([
            "start",
            "end",
            "ai_class",
            "ai_type",
            "ai_type_specific",
            "site",
            "agtype",
          ])}
          data=${zipCodeData}
        ></osl-download>
        <osl-download
          title="Download Census Tract Code Summary Data"
          filename="census-tract-summary"
          parameterSuffixes=${JSON.stringify([
            "start",
            "end",
            "ai_class",
            "ai_type",
            "ai_type_specific",
            "site",
            "agtype",
          ])}
          data=${zipCodeData}
        ></osl-download>
        </div>
            </div>

            <div>
              <br />
              ${CprDataDescription()}
            </div>
          </div>
          <div>
            <osl-glmap
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              legendPosition="bottom-left"
              showNavigation="true"
              showSingleLayer="true"
              center="[-120.1,36.9]"
              zoom="5"
            >
              <osl-map-layer
                legendTitle="Pounds of Chemical Used (Zip Code)"
                visible="true"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="lbs_chm_used"
                type="continuous"
                bins="7"
                colorScheme="d3-magma"
                filled="true"
                attribution="California Pesticide Use Reporting (PUR)"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Pounds of Chemical Used (Census Tract)"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="lbs_chm_used"
                type="continuous"
                bins="7"
                colorScheme="d3-magma"
                filled="true"
                attribution="California Pesticide Use Reporting (PUR)"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
                visible="false"
              >
              </osl-map-layer>
            </osl-glmap>
          </div>
        </osl-flex-box>
        </div></div>
        <br /><br />
        <div>
          <br /><br />
          <hr/>
          <br /><br />
        <osl-data-table
          title="Zip Code Data"
          maxw="200vw"
          data=${zipCodeData}
          columns=${zipCodeColumns}
          pagination="true"
        ></osl-data-table></div>
        <br/><br/>
        <div>

        <osl-data-table
          title="Census Tract Data"
          maxw="200vw"
          data=${censusTractData}
          columns=${censusTractColumns}
          pagination="true"
        ></osl-data-table>
        </div>

      </div>
    </div>
  `;
};
export const CPR2 = () => {
  return html`
    <div style="width:100%;height:auto">
      ${CprFilterHeader()}
      <br />
      <hr/>
      <br />
      <div>
        <div style="position:relative">
        <div style="display:flex;flex-direction:row; gap:1rem">
          <div style="flex-basis:50%">
            <sp-theme>
              <p><b>Pesticide Use and Demography Map View</b></p>
              <p>
                This data view shows a map of pesticide use reporting data and
                demographic data at the census tract or zip code scale. The
                colors on this map represent the pounds of pesticide used in
                each Area and various demographic characteristics from the US
                Census American Community Survey. The color scale in the legend
                show the ranges of the values based on quantile breaks
                (septile).
                <br /><br />
                To change the scale from census tracts or zip codes, or change
                the demographic data displayed, click the layer icon on the
                legend on the bottom left of the map.
                <br /><br />
                To change the date range displayed, change the start date and
                end date drop downs above.
                <br /><br />
                To filter the data for particular active ingredient types,
                classes, or commodities, click the "Additional Filters" button
                for additional options.
                <br /><br />
                Your current filters are display on the right, along with a
                description of data sources.
                <br /><br />
                Below this map, there is a table of data at both the census
                tract and zip code scale.
              </p>

            </sp-theme>
            ${CprDataDescription()}
          </div>

          <div style="flex-basis:50%">
            <osl-param-view
              data=${JSON.parse(filteredDatasets)[0]}
              parameters=${JSON.stringify([
                "start",
                "end",
                "ai_class",
                "ai_type",
                "ai_type_specific",
                "site",
                "agtype",
              ])}
              parameterTitle="Filter"
              title="Current Data Filters"
            ></osl-param-view>
          </div>
        </div>
            </div>
      </div>
      <br />
      <hr/>
      <br />
      <div style="width:100%;height:80vh;position:relative">
        <osl-flex-box breakpoint="lg" style="height:100%;">
          <div>
            <osl-glmap
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              legendPosition="bottom-left"
              showNavigation="true"
              showSingleLayer="true"
              center="[-120.1,36.9]"
              zoom="5"
              mapGroup="1"
            >
              <osl-map-layer
                legendTitle="Pounds of Chemical Used (Zip Code)"
                visible="true"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="lbs_chm_used"
                type="continuous"
                bins="7"
                colorScheme="d3-magma"
                filled="true"
                attribution="California Pesticide Use Reporting (PUR)"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Pounds of Chemical Used (Census Tract)"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="lbs_chm_used"
                type="continuous"
                bins="7"
                colorScheme="d3-magma"
                filled="true"
                attribution="California Pesticide Use Reporting (PUR)"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
                visible="false"
              >
              </osl-map-layer>
            </osl-glmap>
          </div>
          <div>
            <osl-glmap
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              legendPosition="bottom-left"
              showNavigation="true"
              showSingleLayer="true"
              center="[-120.1,36.9]"
              zoom="5"
              mapGroup="1"
            >
              <osl-map-layer
                legendTitle="Total Population (Zip Code)"
                visible="true"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic White Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH White"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Black Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Black"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic American Indian and Alaska Native Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH AIAN"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Asian Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Asian"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Native Hawaiian and Pacific Islander Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH NHPI"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic Another Race Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Other"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic Two or More Races Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Two or More"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Hispanic or Latinx Population (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Pop Hispanic or Latino"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Median Income (Zip Code)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Median Income"
                type="continuous"
                bins="7"
                colorScheme="YlGn"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="ZIP"
                data=${zipCodeData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Total Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic White Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH White"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Black Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Black"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic American Indian and Alaska Native Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH AIAN"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Asian Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Asian"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Native Hawaiian and Pacific Islander Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH NHPI"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic Another Race Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Other"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic Two or More Races Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Two or More"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Hispanic or Latinx Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Pop Hispanic or Latino"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Median Income (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Median Income"
                type="continuous"
                bins="7"
                colorScheme="YlGn"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
            </osl-glmap>
          </div>
        </osl-flex-box>
        <br /><br />
        <div>
          <osl-data-table
            title="Zip Code Data"
            maxw="300vw"
            data=${zipCodeData}
            columns=${demogZipCodeColumns}
            pagination="true"
          ></osl-data-table>
        </div>
        <div>
          <osl-data-table
            title="Census Tract Data"
            maxw="300vw"
            data=${censusTractData}
            columns=${demogZipCodeColumns}
            pagination="true"
          ></osl-data-table>
        </div>
        <div>
          <osl-download
            title="Download Zip Code Summary Data"
            filename="zip-code-summary"
            parameterSuffixes=${JSON.stringify([
              "start",
              "end",
              "ai_class",
              "ai_type",
              "ai_type_specific",
              "site",
              "agtype",
            ])}
            data=${zipCodeColumns}
          ></osl-download>
          <osl-download
            title="Download Tract Code Summary Data"
            filename="tract-summary"
            parameterSuffixes=${JSON.stringify([
              "start",
              "end",
              "ai_class",
              "ai_type",
              "ai_type_specific",
              "site",
              "agtype",
            ])}
            data=${zipCodeColumns}
          ></osl-download>
        </div>
      </div>
    </div>
  `;
};

export const CPR3 = () => {
  return html`
    <div style="width:100%;height:auto">
      ${CprTimeSeriesHeader()}
      <br />
      <div style="width:100%;height:40vh;position:relative">
        <h3>Use over time by Active Ingredient Class</h3>
          <osl-plot
            colorLegend="true"
            data=${overTimeByAiClass}
            marginBottom="80"
            marginRight="80"
            colorScheme="accent"
          >
            <osl-line
              x="monthyear"
              y="lbs_chm_used"
              stroke="ai_class"
            ></osl-line>
          </osl-plot>
        </div>
        <br /><br />
      <div style="width:100%;height:40vh;position:relative">
        <h3>Use over time by Active Ingredient Type</h3>
          <osl-plot
            colorLegend="true"
            data=${overTimeByAiType}
            marginBottom="80"
            marginRight="80"
            
            colorScheme="turbo"
          >
            <osl-line
              x="monthyear"
              y="lbs_chm_used"
              stroke="ai_type"
              colorscheme="tableau10"
            ></osl-line>
          </osl-plot>
        </div>
        <br /><br />

        <!-- <div style="width:100%;height:40vh;position:relative">
      <h3>Use over time by Product</h3>
        <osl-flex-box breakpoint="lg" style="height:100%;">
          <div>
      <osl-plot
        colorLegend="true"
        data=${overTimeByAiProduct}
        marginBottom="80"
        marginRight="80"
      >
        <osl-line x="monthyear" y="lbs_chm_used" stroke="product_name"></osl-line>
      </osl-plot>
            
          </div>
        </osl-flex-box>
        <br /><br />
      </div> -->
        <div style="width:100%;height:40vh;position:relative">
          <h3>Use over time by Agricultural or Non-Agricultural Use</h3>
            <osl-plot
              colorLegend="true"
              data=${overTimeByAgNonAg}
              marginBottom="80"
              marginRight="80"
            >
              <osl-line
                x="monthyear"
                y="lbs_chm_used"
                stroke="usetype"
              ></osl-line>
            </osl-plot>
          </div>
          <br /><br />
        </div>
      </div>
    </div>
  `;
};
