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
    width = 1000
    height = 650
    projection="identity" 
    colorType="quantize"
    colorScheme="blues"
    colorLegend="true"
    colorDomain="[1, 10]"
    colorN="9"
    colorLabel="Unemployment rate (%)"
    data="http://localhost:6006/unemployment.json" 

    >
      <osl-choropleth
      fill="(d) => d.properties.rate"
      tip="true"
      ></osl-choropleth>
    </osl-plot>
    `
}

// color: {


//   label: "Unemployment rate (%)",

// }

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