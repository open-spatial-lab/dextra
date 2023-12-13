import { template as html } from "../../utils/templateFunction";
import {
  timeSeriesData,
  monthlyByAgNonAg,
  monthlyByAiClass,
  monthlyByAiType,
  yearlyByAgNonAg,
  yearlyByAiClass,
  yearlyByAiType,
  yearLabels,
} from "./CPRUtils";

import { CprTimeSeriesHeader } from "./CPRComponents";

export const CPR3 = () => {
  return html`
    <div style="width:100%;height:auto">
      ${CprTimeSeriesHeader()}
      <osl-tabs breakpoint="lg">
        <div data-tab="By Year">
          <div style="width:100%;height:40vh;position:relative">
            <h3>Use over time by Active Ingredient Class</h3>
              <osl-plot
                colorLegend="true"
                data=${yearlyByAiClass}
                marginBottom="80"
                marginLeft="80"
                marginRight="80"
                colorScheme="accent"
              >
                <osl-line
                  x="date"
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
              data=${yearlyByAiType}
              marginBottom="80"
              marginLeft="80"
              marginRight="80"
              
              colorScheme="turbo"
            >
              <osl-line
                x="date"
                y="lbs_chm_used"
                stroke="ai_type"
                colorscheme="tableau10"
              ></osl-line>
            </osl-plot>
          </div>
          <div style="width:100%;height:40vh;position:relative">
            <h3>Use over time by Agricultural or Non-Agricultural Use</h3>
            <osl-plot
              colorLegend="true"
              data=${yearlyByAgNonAg}
              marginBottom="80"
              marginLeft="80"
              marginRight="80"
            >
              <osl-line
                x="date"
                y="lbs_chm_used"
                stroke="usetype"
              ></osl-line>
            </osl-plot>
          </div>
        </div>
        <div data-tab="By Month">
          <div>
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
          </div>
        <div style="width:100%;height:40vh;position:relative">
          <h3>Use over time by Active Ingredient Class</h3>
          <osl-plot
            colorLegend="true"
            data=${monthlyByAiClass}
            marginBottom="80"
            marginLeft="80"
            marginRight="80"
            colorScheme="accent"
          >
            <osl-line
              x="date"
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
            data=${monthlyByAiType}
            marginBottom="80"
            marginLeft="80"
            marginRight="80"
            
            colorScheme="turbo"
          >
            <osl-line
              x="date"
              y="lbs_chm_used"
              stroke="ai_type"
              colorscheme="tableau10"
            ></osl-line>
            </osl-plot>
          </div>
          <div style="width:100%;height:40vh;position:relative">
            <h3>Use over time by Agricultural or Non-Agricultural Use</h3>
            <osl-plot
              colorLegend="true"
              data=${monthlyByAgNonAg}
              marginBottom="80"
              marginLeft="80"
              marginRight="80"
            >
              <osl-line
                x="date"
                y="lbs_chm_used"
                stroke="usetype"
              ></osl-line>
            </osl-plot>
          </div>
        </div>
      </osl-tabs>
    </div>
  `;
};
