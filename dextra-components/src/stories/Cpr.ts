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
  zipCodeColumns
} from "./utils";

export const CprFilterHeader = () => {
  return html`
  
  <osl-flex-box breakpoint="lg">
        <div>
          <sp-theme>
          <h1>PUR Data Explorer</h1>
          </sp-theme>
        </div>
        <osl-select-control
          data=${JSON.stringify([zipCodeData])}
          option="start"
          options=${JSON.stringify(yearLabels)}
          title="Start Date"
          initialValue="2021-01"
        ></osl-select-control>
        <osl-select-control
          data=${JSON.stringify([zipCodeData])}
          option="end"
          options=${JSON.stringify(yearLabels)}
          title="End Date"
          initialValue="2021-12"
        ></osl-select-control>
        <osl-modal label="Additional Filters" title="Filter Data" size="l">
          <div style="min-width:80vw;min-height:80vh; overflow-y:auto;">
            <h3>Active Ingredients</h3>
            <osl-flex-box breakpoint="lg">
              <osl-select-control
                data=${JSON.stringify([zipCodeData])}
                option="ai_class"
                options=${JSON.stringify(aiClassLabels)}
                title="Active Ingredient Class"
                initialValue="*"
              ></osl-select-control>
              <osl-select-control
                data=${JSON.stringify([zipCodeData])}
                option="ai_type"
                options=${JSON.stringify(aiTypeLabels)}
                title="Active Ingredient Type"
                initialValue="*"
              ></osl-select-control>
              <osl-select-control
                data=${JSON.stringify([zipCodeData])}
                option="ai_type_specific"
                options=${JSON.stringify(aiTypeSpecificLabels)}
                title="Active Ingredient Type (Specific)"
                initialValue="*"
              ></osl-select-control
            ></osl-flex-box>
            <br />
            <br />
            <hr />
            <br />
            <h3>Commodity Type</h3>

            <osl-select-control
              data=${JSON.stringify([zipCodeData])}
              option="site"
              options=${JSON.stringify(siteLabels)}
              title="Active Ingredient Type (Specific)"
              initialValue="*"
            ></osl-select-control>
            <br />
            <br />
            <hr />
            <br />
            <h3>Application Site Type</h3>
            <osl-radio
              data=${JSON.stringify([zipCodeData])}
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
        </osl-modal>
      </osl-flex-box>
  `
}