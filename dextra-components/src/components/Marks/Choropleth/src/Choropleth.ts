import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { GeoOptions } from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";
// import type {ChannelValue} from "../../../../../../node_modules/@observablehq/plot/src/channel.js";


@customElement("osl-choropleth")
export class OslChoropleth extends PlotMark {
  mark = "choropleth"

  @property({ converter: interpretFuncJsonOrString })
  geometry?: GeoOptions["geometry"];

  @property({ converter: interpretFuncJsonOrString })
  r?: GeoOptions["r"];


  markOptions: (keyof this)[] = ["geometry", "r"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.geo(data[0], {
         ...overrideOptions, ...options});
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-choropleth": OslChoropleth;
  }
}