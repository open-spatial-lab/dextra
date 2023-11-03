import { html } from "lit";
import {
  overTimeByAiClass,
  overTimeByAiType,
  overTimeByAiProduct,
  overTimeByAgNonAg,
} from "./CPRUtils";

import {
  CprTimeSeriesHeader,
} from "./CPRComponents";

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
