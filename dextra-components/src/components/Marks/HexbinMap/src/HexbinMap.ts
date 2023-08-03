import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
// import { GeoOptions } from "@observablehq/plot";
import { DotOptions } from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";
import * as Plot from "@observablehq/plot";

@customElement("osl-hexbinmap")
export class OslHexbinMap extends PlotMark {
  mark = "hexbinmap"

  @property({ converter: interpretFuncJsonOrString })
  x?: DotOptions["x"];

  @property({ converter: interpretFuncJsonOrString })
  y?: DotOptions["y"];

  @property({ type: String })
  hexbinR?: string;

  @property({ type: String })
  hexbinFill?: string;

  markOptions: (keyof this)[] = ["x", "y", "hexbinR", "hexbinFill"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      // return Plot.dot(data, { ...overrideOptions, ...options});
      return Plot.dot(data, { ...overrideOptions, ...options});
    };
  }

  render() {
    return null;
  }
  }
declare global {
  interface HTMLElementTagNameMap {
    "osl-hexbinmap": OslHexbinMap;
  }
}