// import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../../components/GlMap/src/GlMap.js";
import "../../components/GlMap/src/GlMapLayer.js";
import "../../components/Slider/src/Slider.js";
import "../../components/Select/src/SelectControl.js";
import "../../components/FlexBox/src/FlexBox.js";
import "../../components/StatTable/src/StatTable.js";
import "../../components/DataTable/src/DataTable.js";
import "../../components/Download/src/Download.js";
import "../../components/Stat/src/Stat.js";
import "../../components/Plot/src/Plot.js";
import "../../components/Modal/src/Modal.js";
import "../../components/Radio/src/Radio.js";
import "../../components/ParamView/src/ParamView.js";
import "../../components/Chips/src/Chips";
import "../../components/EqualSpacingGrid/src/EqualSpacingGrid";
import {
  yearLabels,
  // siteLabels,
  // aiClassLabels,
  // aiTypeLabels,
  // aiTypeSpecificLabels,
  // zipCodeData,
  // zipCodeColumns,
  filteredDatasets,
  timeSeriesData,
  // zipCodes,
  // counties,
  productOptionsData,
  chemicalOptionsData,
  siteLocationOptionsData,
  aiTypeSpecificOptionsData,
  aiTypeOptionsData,
  aiClassOptionsData,
  townshipCodesOptionsData,
  countiesOptionsData,
  censusTractsOptionsData,
  schoolDistrictOptionsData,
} from "./CPRUtils";

export const CprFilterHeader = () => {
  return html`
    <osl-flex-box breakpoint="lg">
      <div>
        <sp-theme>
          <h1>California Pesticide Use Data Explorer</h1>
          <p>
            The California Pesticide Use Data Explorer was developed for
            Californians for Pesticide Reform by the Open Spatial Lab at the
            University of Chicago Data Science Institute. This
            publicly-accessible data tool aims to make pesticide data accessible
            and stable online for Californians for Pesticide Reform, statewide
            coalition partners, researchers, policy and decision makers, and
            community residents.
          </p>
        </sp-theme>
      </div>
      <osl-select-control
        data=${filteredDatasets}
        option="start"
        options=${JSON.stringify(yearLabels)}
        title="Start Date"
        initialValue="2021-01"
      ></osl-select-control>
      <osl-select-control
        data=${filteredDatasets}
        option="end"
        options=${JSON.stringify(yearLabels)}
        title="End Date"
        initialValue="2021-12"
      ></osl-select-control>
      <osl-modal label="Additional Filters" title="Filter Data" size="l">
        <div style="min-width:80vw;min-height:80vh; overflow-y:auto;">
          <h3>Active Ingredients</h3>
          <osl-eq-grid breakpoint="lg">
            <osl-select-control
              data=${filteredDatasets}
              option="ai_class"
              multipleSelect="true"
              title="Active Ingredient Class"
              label="Search for AI classes"
              optionsData=${aiClassOptionsData}
              optionsDataValueColumn="ai_class"
              initialValue="*"
            ></osl-select-control>
            <osl-select-control
              data=${filteredDatasets}
              option="ai_type"
              multipleSelect="true"
              title="Active Ingredient Type"
              optionsData=${aiTypeOptionsData}
              optionsDataValueColumn="ai_type"
              initialValue="*"
            ></osl-select-control>
            <osl-select-control
              data=${filteredDatasets}
              option="ai_type_specific"
              optionsData=${aiTypeSpecificOptionsData}
              optionsDataValueColumn="ai_type_specific"
              multipleSelect="true"
              title="Active Ingredient Type (Specific)"
              initialValue="*"
            ></osl-select-control
          ></osl-eq-grid>
          <hr style="margin:2rem 0 1rem 0" />
          <osl-eq-grid breakpoint="lg">
            <div>
              <h3>Commodity Type</h3>

              <osl-select-control
                data=${filteredDatasets}
                option="site"
                title="Location that pesticide was applied to"
                initialValue="*"
                multipleSelect
                optionsData=${siteLocationOptionsData}
                optionsDataLabelColumn="site_name"
                optionsDataValueColumn="site_code"
              ></osl-select-control>
            </div>
            <div>
              <h3>Application Site Type</h3>
              <osl-radio
                data=${filteredDatasets}
                option="agtype"
                initialValue="ag"
                options=${JSON.stringify([
                  {
                    label: "Agricultural",
                    value: "ag",
                  },
                  {
                    label: "Non-Agricultural (County Only)",
                    value: "nonag",
                  },
                  {
                    label: "Both  (County Only)",
                    value: "*",
                  },
                ])}
              >
              </osl-radio>
            </div>
          </osl-eq-grid>
          <hr style="margin:2rem 0 1rem 0" />
          <osl-eq-grid breakpoint="lg">
            <div>
              <h3>Specific Chemical(s)</h3>

              <osl-select-control
                data=${filteredDatasets}
                option="chemical"
                multipleSelect="true"
                title="Specific Chemical(s)"
                initialValue="*"
                optionsData=${chemicalOptionsData}
                optionsDataLabelColumn="chem_name"
                optionsDataValueColumn="chem_code"
              ></osl-select-control>
              <!-- chemical -->
            </div>
            <div>
              <h3>Specific Product(s)</h3>

              <osl-select-control
                data=${filteredDatasets}
                option="product"
                multipleSelect="true"
                title="Specific Chemical(s)"
                initialValue="*"
                optionsData=${productOptionsData}
                optionsDataLabelColumn="product_name"
                optionsDataValueColumn="product_code"
              ></osl-select-control>
            </div>
          </osl-eq-grid>
          <hr style="margin:2rem 0 1rem 0" />
          <osl-eq-grid breakpoint="lg">

          <div>
              <h3>Filter by County</h3>
              <osl-chips
                data=${filteredDatasets}
                initialValue="[]"
                title="County"
                option="county"
                label="Enter county name to filter options"
                optionsData=${countiesOptionsData}
                optionsDataValueColumn="FIPS"
                optionsDataLabelColumn="Area Name"
                showAllOptions="true"
                maxOptions="50"
              ></osl-chips>

            </div>
            <div>
              <h3>Filter by Township</h3>
              <osl-chips
                data=${filteredDatasets}
                initialValue="[]"
                title="Township"
                option="townshiprange"
                label="Enter township ID to filter options"
                optionsData=${townshipCodesOptionsData}
                optionsDataValueColumn="TownshipRange"
                showAllOptions="true"
                maxOptions="50"
              ></osl-chips>
          </div>
            <div>
              <h3>Filter by School District</h3>

              <osl-chips
                data=${filteredDatasets}
                initialValue="[]"
                title="School District"
                option="schooldistrict"
                label="Enter zip code to filter options"
                optionsData=${schoolDistrictOptionsData}
                optionsDataValueColumn="FIPS"
                optionsDataLabelColumn="Area Name"
                showAllOptions="true"
                maxOptions="50"
              ></osl-chips>
            </div>

            <div>
              <h3>Filter by Census Tract</h3>
              <osl-chips
                data=${filteredDatasets}
                initialValue="[]"
                title="Tract"
                option="tract"
                label="Enter tract ID to filter options"
                optionsData=${censusTractsOptionsData}
                optionsDataValueColumn="FIPS"
                showAllOptions="true"
                maxOptions="50"
              ></osl-chips>

            </div>
          </osl-eq-grid>

          <hr style="margin:2rem 0 1rem 0" />
          <osl-eq-grid breakpoint="lg">
            <div>
              Percent Black

              <osl-slider
                data="${filteredDatasets}"
                option="pctblack"
                min="0"
                max="1"
                step=".01"
                initialValue="0"
                title="Percent Non-hispanic Black or African American (ACS Race/Ethnicity)"
              ></osl-slider>
            </div>
            <div>
              Percent Hispanic
              <osl-slider
                data="${filteredDatasets}"
                option="pcthispanic"
                min="0"
                max="1"
                step=".01"
                initialValue="0"
                title="Percent Hispanic or Latino (ACS Race/Ethnicity)"
              ></osl-slider>
            </div>
            <div>
              Median Income
              <osl-slider
                data="${filteredDatasets}"
                option="income"
                min="0"
                max="120000"
                step="1000"
                initialValue="0"
                title="Median Household Income (2021 Dollars)"
              ></osl-slider>
            </div>
          </osl-eq-grid>

        </div>
      </osl-modal>
    </osl-flex-box>
  `;
};
export const CprTimeSeriesHeader = () => {
  return html`
    <osl-flex-box breakpoint="lg">
      <div>
        <sp-theme>
          <h1>California Pesticide Use Data Explorer</h1>
        </sp-theme>
      </div>
      <osl-select-control
        data=${timeSeriesData}
        option="start"
        options=${JSON.stringify(yearLabels)}
        title="Start Date"
        initialValue="2017-01"
      ></osl-select-control>
      <osl-select-control
        data=${timeSeriesData}
        option="end"
        options=${JSON.stringify(yearLabels)}
        title="End Date"
        initialValue="2021-12"
      ></osl-select-control>
      <osl-modal label="Additional Filters" title="Filter Data" size="l">
        <div style="min-width:80vw;min-height:80vh;">
          <h3>Active Ingredients</h3>
          <osl-flex-box breakpoint="lg">
            <osl-select-control
              data=${timeSeriesData}
              option="ai_class"
              optionsData=${aiClassOptionsData}
              optionsDataValueColumn="ai_class"
              title="Active Ingredient Class"
              initialValue="*"
            ></osl-select-control>
            <osl-select-control
              data=${timeSeriesData}
              option="ai_type"
              optionsData=${aiTypeOptionsData}
              optionsDataValueColumn="ai_type"
              title="Active Ingredient Type"
              initialValue="*"
            ></osl-select-control>
            <osl-select-control
              data=${timeSeriesData}
              option="ai_type_specific"
              optionsData=${aiTypeSpecificOptionsData}
              optionsDataValueColumn="ai_type_specific"
              title="Active Ingredient Type (Specific)"
              initialValue="*"
            ></osl-select-control
          ></osl-flex-box>
          <br /><br />
          <hr />

          <h3>Locations</h3>
          <osl-flex-box breakpoint="lg">
            <osl-select-control
              data=${timeSeriesData}
              option="zip"
              optionsData=${zipCodesOptionsData}
              optionsDataValueColumn="GEOID"
              title="Zip Code"
              initialValue="*"
            ></osl-select-control>
            <osl-select-control
              data=${timeSeriesData}
              option="county"
              optionsData=${countiesOptionsData}
              optionsDataValueColumn="FIPS"
              optionsDataLabelColumn="Area Name"
              title="County"
              initialValue="*"
            ></osl-select-control
          ></osl-flex-box>
        </div>
      </osl-modal>
    </osl-flex-box>
  `;
};

export const CprDataDescription = () => {
  return html`
    <osl-modal
      label="Data Description"
      title="Data Description"
      variant="secondary"
      size="s"
    >
      <div>
        <p>
          California’s Pesticide Use Reporting (PUR) program has collected data
          on California’s agriculture and many non-agriculture pesticide uses
          across the state since 1970 through present day. Managed and collected
          by California’s Department of Pesticide Regulation, PUR data is
          refreshed about once per year. More information is available from [CA
          DPR](https://www.cdpr.ca.gov/docs/pur/purmain.htm).
        </p>
        <h3>California PUR Data</h3>
        <p>
          This interactive data explorer enables users to filter or summarize
          publicly available California PUR data based on the following
          parameters.
        </p>
        <p>
          PUR data was accessed in Fall 2023. Data from 2010 to 2021 (the most
          recent data year) are available in this tool.
        </p>
        <ul>
          <li>Year (start and end), months</li>
          <li>Active ingredient</li>
          <li>Active ingredient class or type</li>
          <li>Product</li>
          <li>Commodity</li>
          <li>
            Agricultural or non-agricultural use (Agricultural available at 1
            sq. mi units; non-agricultural available at county-level.)
          </li>
        </ul>
        <h3>Spatial Data (GIS)</h3>
        <p>
          Spatial data enables users to query data based on the following areas,
          or spatial units:
        </p>
        <p>
          <b>Census Administrative Boundaries:</b>
          ACS 2021 and 2020 boundaries, via census.gov
        </p>
        <ul>
          <li>Counties</li>
          <li>Zip codes</li>
          <li>Census tracts</li>
          <li>
            School districts: elementary, secondary, and unified school
            districts
          </li>
        </ul>
        <h3>Community Data</h3>
        <p>
          Community and demographic data allows users to better understand the
          impact of pesticide use on different populations locally and across
          the state. Demographic data available to filter, map, and explore
          include:
        </p>
        <p>
          <b>Census Demographic Data:</b>
          ACS 2021 5-year estimates, via Social Explorer
        </p>
        <ul>
          <li>Population</li>
          <li>Race and ethnicity</li>
          <li>Education</li>
        </ul>
      </div>
    </osl-modal>
  `;
};
