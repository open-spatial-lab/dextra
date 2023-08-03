import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Geo/src/Geo.ts";
import "../components/marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";
import * as d3 from "d3"

export default {
  title: "Marks",
}

export const MultiMap = () => {
    const fyinterval = d3.utcYear.every(10)
    console.log(fyinterval)
    return html`
      <osl-plot
      height = 2000
        projection="albers"
        fyInterval="10 years"
      >
        <osl-geo
            data="http://localhost:6006/data/nations.json" 
        ></osl-geo>
        <osl-geo
            data="http://localhost:6006/data/states.json" 
            strokeOpacity="0.5"
        ></osl-geo>
        <osl-geo
            data="http://localhost:6006/data/walmarts.json"
            fy="(d) => d.properties.date" 
            r="1.5"
            fill="blue"
        ></osl-geo>
      </osl-plot>
      `
  }

  