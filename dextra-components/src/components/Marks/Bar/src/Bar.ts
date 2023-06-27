import { customElement } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";

@customElement("osl-bar")
export class OslBar extends PlotMark {
  mark = "bar"

  markOptions: (keyof this)[] = [];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.dot(data, { ...overrideOptions, ...options});
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-bar": OslBar;
  }
}