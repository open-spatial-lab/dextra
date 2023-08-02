import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Geo/src/Geo.ts";
import "../components/marks/Density/src/Density.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const DensityMap = () => {
  return html`
  <osl-plot
    projection="albers" 
    colorScheme="YlGnBu"
    colorLegend="true"
    colorLabel="Walmart Density"
  >
    <osl-density-plot
        data="http://localhost:6006/data/walmarts.tsv" 
        x="longitude"
        y="latitude"
        bandwidth="10"
        fill="density"
    ></osl-density-plot>
    <osl-geo
        data="http://localhost:6006/data/nations.json" 
    ></osl-geo>
    <osl-geo
        data="http://localhost:6006/data/states.json" 
        strokeOpacity="0.3"
    ></osl-geo>
    <osl-dot-plot
        data="http://localhost:6006/data/walmarts.tsv" 
        x="longitude"
        y="latitude"
        r="1"
        fill="currentColor"
    ><osl-dot-plot>
  </osl-plot>

    `
}
