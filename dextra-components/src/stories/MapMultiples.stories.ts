import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Geo/src/Geo.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const MapMultiples = () => {
    return html`
      <osl-plot
        height = 2000
        marginLeft="50"
        projection="albers"
        fyInterval="10 years"
        fyTickFormat="${(d) => `${d.getUTCFullYear()}’s`}"
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
            tip="null"
        ></osl-geo>
      </osl-plot>
      `
  }

  