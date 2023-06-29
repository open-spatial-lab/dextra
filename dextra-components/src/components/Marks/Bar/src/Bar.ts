import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";

@customElement("osl-bar")
export class OslBar extends PlotMark {
  mark = "bar"

  @property({ type: String })
  x?: string;

  @property({ type: String })
  y?: string;

  @property({ type: String })
  direction?: "horizontal" | "vertical" = "vertical";

  markOptions: (keyof this)[] = ["x", "y", "direction"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      
      switch (this.direction) {
        case "horizontal":
          return Plot.barX(data, {...overrideOptions, ...options});
        case "vertical":
          return Plot.barY(data, {...overrideOptions, ...options});
        default:
          return Plot.barY(data, {...overrideOptions, ...options});
      }
  }
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