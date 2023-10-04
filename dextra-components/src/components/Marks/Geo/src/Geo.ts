import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { GeoOptions } from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";
//@ts-ignore
import { parse as parseWkt } from "wkt";

const EMPTY_GEOJSON = {
  type: "FeatureCollection",
  features: [],
};

@customElement("osl-geo")
export class OslGeo extends PlotMark {
  mark = "geo";

  @property({ converter: interpretFuncJsonOrString })
  geometry?: GeoOptions["geometry"];

  @property({ converter: interpretFuncJsonOrString })
  r?: GeoOptions["r"];

  markOptions: (keyof this)[] = ["geometry", "r"];

  converters?: Record<string, (f: any) => any> = {
    fill: (fillParam: any) =>
      typeof fillParam === "function"
        ? fillParam
        : (data: Record<string, unknown>) =>
            this.getDeepValue(
              data,
              fillParam.includes("properties")
                ? fillParam
                : `properties.${fillParam}`
            ),
  };

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      // @ts-ignore
      const dataToUse = overrideData || innerData;
      const data = !dataToUse?.type ? EMPTY_GEOJSON : dataToUse;
      return Plot.geo(data, {
        ...overrideOptions,
        ...options,
      });
    };
  }

  render() {
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-geo": OslGeo;
  }
}
