import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { GeoOptions } from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";


@customElement("osl-geo")
export class OslGeo extends PlotMark {
  mark = "geo"

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
    "osl-geo": OslGeo;
  }
}