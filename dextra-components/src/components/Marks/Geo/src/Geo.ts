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
}
export class GeoConverterMark extends PlotMark {
  @property({ converter: interpretFuncJsonOrString })
  geometry?: GeoOptions["geometry"];

  currentGeoData: GeoJSON.FeatureCollection | undefined;
  protected convertToGeojsonLike(data: Array<Record<string, unknown>>) {
    if (!data?.length) return EMPTY_GEOJSON
    const features = [];

    for (let i = 0; i < data.length; i++) {
      // @ts-ignore
      const geometry = parseWkt(data[i][this.geometry]);
      features.push({
        type: "Feature",
        properties: {
          ...data[i],
        },
        geometry
      } as GeoJSON.Feature);
    }
    return {
      type: "FeatureCollection",
      features: features,
    };
  }
}

@customElement("osl-geo")
export class OslGeo extends GeoConverterMark {
  mark = "geo";

  @property({ converter: interpretFuncJsonOrString })
  geometry?: GeoOptions["geometry"];

  @property({ converter: interpretFuncJsonOrString })
  r?: GeoOptions["r"];

  markOptions: (keyof this)[] = ["geometry", "r"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = this.convertToGeojsonLike(innerData?.length ? innerData : overrideData)
      // @ts-ignore
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
