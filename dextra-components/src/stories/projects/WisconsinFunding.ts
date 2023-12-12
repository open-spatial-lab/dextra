import { html } from "lit";
import {
  stateAssemblyOptions,
  summaryData,
  congressionalDistrictOptions,
  stateSenateOptions,
  tractOptions,
  countyOptions,
  starOptions,
  dateOptionList,
} from "./WisconsinUtils";

export const WisconsinFunding = () => {
  return html`
    <sp-theme>
      <div>
        <h1>Funding Explorer</h1>
        <p>
          Below are key funding stats. Use the filter options underneath to
          filter for one or more county, assembly district, census tract,
          congressional district, or state senate district geographies. Click on
          the selected geographies to remove them from the filter
        </p>
      </div>
      <osl-eq-grid breakpoint="lg">
        <osl-stat
          title="Total Funding"
          property="Total Funding"
          format="currency:usd"
          data="${summaryData}"
        >
        </osl-stat>
      </osl-eq-grid>
      <osl-eq-grid breakpoint="lg">
        <osl-stat
          title="Average Funding"
          property="Average Funding"
          format="currency:usd"
          data="${summaryData}"
        >
        </osl-stat>
        <osl-stat
          title="Percent Receiving Funding"
          property="Percent Receiving Funding"
          format="percent"
          data="${summaryData}"
        >
        </osl-stat>
      </osl-eq-grid>
      <osl-eq-grid breakpoint="lg">
        <osl-stat
          title="Total Enrollment"
          property="Total Enrollment"
          data="${summaryData}"
          format="nice"
        >
        </osl-stat>
        <osl-stat
          title="Total Capacity"
          property="Total Capacity"
          data="${summaryData}"
          format="nice"
        >
        </osl-stat>
        <osl-stat
          title="Percent Capacity"
          property="Percent Capacity"
          format="percent"
          data="${summaryData}"
        >
        </osl-stat>
        <osl-stat
          title="Count of Providers"
          property="Count"
          data="${summaryData}"
          format="nice"
        >
        </osl-stat>
      </osl-eq-grid>
      <osl-eq-grid breakpoint="lg">
        <osl-stat
          title="Average Funding Per Capacity"
          property="Average Funding Per Capacity"
          format="currency:usd"
          data="${summaryData}"
        >
        </osl-stat>
        <osl-stat
          title="Average Funding Per Enrolled"
          property="Average Funding Per Enrolled"
          format="currency:usd"
          data="${summaryData}"
        >
        </osl-stat>
      </osl-eq-grid>

      <hr style="margin:2rem 0" />
      <osl-eq-grid breakpoint="lg">
        <div>
          <osl-chips
            data=${summaryData}
            option="county"
            optionsData="${countyOptions}"
            optionsDataValueColumn="NAMELSAD"
            initialValue="*"
            showAny
            multipleSelect
            title="County"
            showAllOptions
            ShowFilteredOptions
          ></osl-chips>
        </div>
        <div>
          <osl-chips
            data=${summaryData}
            option="assembly"
            optionsData="${stateAssemblyOptions}"
            optionsDataValueColumn="FIPS"
            initialValue="*"
            showAny
            multipleSelect
            title="Assembly District"
            showAllOptions
            ShowFilteredOptions
          ></osl-chips>
        </div>

        <div>
          <osl-chips
            data=${summaryData}
            option="tract"
            optionsData="${tractOptions}"
            optionsDataValueColumn="FIPS"
            initialValue="*"
            showAny
            multipleSelect
            title="Census Tract"
            showAllOptions
            ShowFilteredOptions
          ></osl-chips>
        </div>
        <div>
          <osl-chips
            data=${summaryData}
            option="congress"
            optionsData="${congressionalDistrictOptions}"
            optionsDataValueColumn="FIPS"
            initialValue="*"
            showAny
            multipleSelect
            title="Congressional District"
            showAllOptions
            ShowFilteredOptions
          ></osl-chips>
        </div>
        <div>
          <osl-chips
            data=${summaryData}
            option="senate"
            optionsData="${stateSenateOptions}"
            optionsDataValueColumn="FIPS"
            initialValue="*"
            showAny
            multipleSelect
            title="State Senate District"
            showAllOptions
            ShowFilteredOptions
          ></osl-chips>
        </div>
      </osl-eq-grid>
      <hr style="margin:2rem 0" />
      <osl-eq-grid breakpoint="lg">
        <div>
          <osl-select-control
            data=${summaryData}
            options=${JSON.stringify(["*", "1", "2", "3", "4", "5"])}
            initialValue="*"
            option="rating"
            title="Select Star Rating(s)"
            multipleSelect="true"
          >
          </osl-select-control>
        </div>
        <div>
          <osl-select-control
            data=${summaryData}
            optionsData=${dateOptionList}
            optionsDataValueColumn="Date"
            initialValue="2023-09"
            option="date"
            title="Select Month"
          >
          </osl-select-control>
        </div>
      </osl-eq-grid>
    </sp-theme>
  `;
};
