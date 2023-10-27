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
  const speedDot = "https://d14xp4vykd1up4.cloudfront.net/data-query/653289411fc91e0008ec7996"
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
  return html`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <osl-map-layer
          layer="polygon"
          data="http://localhost:6006/data/choropleth.json"
          geoColumn="WKT"
          geoType="WKT"
          dataColumn="CITY"
          type="categorical"
          attribution="US Census 2020"
          bins="4"
          filled="false"
          stroked="true"
          method="JNK"
          colorScheme="d3-turbo"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="polygon"
          data="http://localhost:6006/data/choropleth.json"
          geoColumn="WKT"
          geoType="WKT"
          dataColumn="VISION_PROVIDERS"
          type="continuous"
          attribution="US Census 2020"
          colorScheme="d3-turbo"
        >
        </osl-map-layer>
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


export const m3 = () => {
  return html`
  <div style="height:80vh; width:100%">
  <osl-glmap 
 mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json" 
 legendPosition="top-right" 
 showNavigation='true'
>
<osl-map-layer 
 source="653ab1816cb151000835ae06" 
 legendTitle="-" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geom" 
 dataColumn="STATION_ID" 
 type="continuous" 
 bins='5' 
 colorScheme="RdYlGn" 
 filled='true' 
 layer="point" 
 data="https://d1mix2z5lvvl4x.cloudfront.net/data-query/653ab1816cb151000835ae06"
>

</osl-map-layer>
</osl-glmap>
</div>
  
  `
}


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