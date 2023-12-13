import { template as html } from "../../utils/templateFunction";
import {
  dates,
  allAndLineDataset,
  stateSenateOptions,
  stateAssemblyOptions,
  tractOptions,
  congressionalDistrictOptions,
  lineDataset,
  cccStatDataset,
  lccStatDataset,
  tableDataset,
  timeseriesCountyOptions,
  starOptions,
} from "./WisconsinUtils";

export const WisconsinTimeSeries = () => {
  // <sp-help-text>Star Rating</sp-help-text>
  // <osl-select-control
  // data=${allDatasets}
  // options=${JSON.stringify(starOptions)}
  // option="star"
  // initialValue="*"
  // >
  // </osl-select-control>
  return html` <div style="display:flex;flex-direction:column">
      <osl-eq-grid breakpoint="md">
        <osl-select-control
          data=${allAndLineDataset}
          options=${JSON.stringify(dates)}
          option="open_on"
          title="Open On"
          initialValue="2021-03"
        >
        </osl-select-control>
        <osl-select-control
          data=${allAndLineDataset}
          options=${JSON.stringify(dates)}
          option="closed_on"
          title="Closed On"
          initialValue="2023-09"
        >
        </osl-select-control>
        <osl-select-control
          data=${allAndLineDataset}
          options=${JSON.stringify(starOptions)}
          option="rating"
          title="Star Rating"
          initialValue="*"
        >
        </osl-select-control>
      </osl-eq-grid>
      <hr style="margin: 2rem 0;" />
      <osl-eq-grid breakpoint="lg">
        <div>
          <osl-chips
            data=${allAndLineDataset}
            option="county"
            optionsData="${timeseriesCountyOptions}"
            optionsDataValueColumn="County"
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
            data=${allAndLineDataset}
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
            data=${allAndLineDataset}
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
            data=${allAndLineDataset}
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
            data=${allAndLineDataset}
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
    </div>
    <div style="flex-grow:1;width:100%">
      <osl-flex-box breakpoint="sm">
        <osl-stat
          title="LCC Capacity Closed"
          property="LCC Total Capacity Lost"
          statSize="1rem"
          data="${cccStatDataset}"
        >
        </osl-stat>
        <osl-stat
          title="Count of LCC Providers Closed"
          property="LCC Count of Providers Closings"
          statSize="1rem"
          data="${cccStatDataset}"
        >
        </osl-stat>
        <osl-stat
          title="CCC Capacity Closed"
          property="CCC Total Capacity Lost"
          statSize="1rem"
          data="${lccStatDataset}"
        >
        </osl-stat>
        <osl-stat
          title="Count of CCC Providers Closed"
          property="CCC Count of Providers Closings"
          statSize="1rem"
          data="${lccStatDataset}"
        >
        </osl-stat>
      </osl-flex-box>
      <div style="height: 60vh; width: 100%;">
        <osl-plot colorLegend="true" data="${lineDataset}">
          <osl-line
            x="Date"
            y="total_capacity"
            direction="horizontal"
          ></osl-line>
        </osl-plot>
      </div>
      <hr />
      <div style="height:80vh; width:100%">
        <osl-flex-box breakpoint="md">
          <h3>Closed during this period</h3>

          <osl-download
            title="Download Providers Data"
            filename="closed-summary"
            tsv
            parameterSuffixes=${JSON.stringify(["open_on", "closed_on"])}
            data="${tableDataset}"
          ></osl-download>
        </osl-flex-box>
        <osl-data-table
          data="${tableDataset}"
          maxw="250vw"
          columns='["Provider Number","Contact Name", "Contact Phone", "ADDRESS", "CITY", "ZIP", "Capacity", "Application Type", "Star Level ", "County", "CONGRESSIONAL_DISTRICT", "ASM2021", "SENATE_DISTRICT2021_1", "GEOID"]'
          pagination="true"
        ></osl-data-table>

        <div></div>
      </div>
    </div>`;
};
