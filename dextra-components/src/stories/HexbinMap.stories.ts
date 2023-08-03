import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/HexbinMap/src/HexbinMap.ts";
import "../components/marks/Geo/src/Geo.ts";
import "../components/marks/Dot/src/Dot.ts";

import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const HexbinMap = () => {
    return html`
      <osl-plot
        projection="albers"
      >
        <osl-geo
            data="http://localhost:6006/data/nations.json" 
        ></osl-geo>
        <osl-geo
            data="http://localhost:6006/data/states.json" 
            strokeOpacity="0.5"
        ></osl-geo>
        <osl-hexbinmap
        data="http://localhost:6006/data/walmarts.tsv"
        x="longitude"
        y="latitude"
        fill="date" 
    ></osl-hexbinmap>
      </osl-plot>
      `
  }