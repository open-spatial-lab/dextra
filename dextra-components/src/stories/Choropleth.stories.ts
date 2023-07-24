import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Choropleth/src/Choropleth.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Choropleth = () => {
  return html`
    <osl-plot
    width = 975
    height = 610
    projection="identity" 
    data="http://localhost:6006/unemployment.json" 

    >
      <osl-choropleth
      fill="(d) => d.properties.rate"

      ></osl-choropleth>
    </osl-plot>
    `
}

// in story book of glmap: 
// getPosition="(d) => [d.LONGITUDE, d.LATITUDE]"

// in OslMapLayer, the corresponding function is:
// @property({ converter: interpretFuncJsonOrString })
// getPosition?: (d: any) => number[] | number[]; 

// data="http://localhost:6006/hawaii_statewide_parcels.geojson" 
// fill="parcel1"
// tip="true"

      
// projection="identity" 
// colorType="quantize" 
// colorScheme="blue" 
// colorLegend="true"




// getPolygon="(d) => d.WKT"

// in maplayer: 
// getPolygon?: (d: any) => any;