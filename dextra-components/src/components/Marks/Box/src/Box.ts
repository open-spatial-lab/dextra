import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { safeCustomElement } from "../../../core/decorators/safeCustomElement";

@safeCustomElement("osl-box")
export class OslBox extends PlotMark {
  mark = "box"

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
      // if (this.boxY) {
      //   return Plot.linearRegressionX(data, { ...overrideOptions, ...options});
      // } else {
      //   return Plot.linearRegressionY(data, { ...overrideOptions, ...options});
      // }    };
      switch (this.direction) {
        case "horizontal":
          return Plot.boxX(data, {...overrideOptions, ...options});
        case "vertical":
          return Plot.boxY(data, {...overrideOptions, ...options});
        default:
          return Plot.boxY(data, {...overrideOptions, ...options});
      }
  }
}
  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-box": OslBox;
  }
}