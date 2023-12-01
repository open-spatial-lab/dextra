import { customElement } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { property } from "lit/decorators.js";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";
import { LineOptions } from "@observablehq/plot";
import { safeCustomElement } from "../../../core/decorators/safeCustomElement";

@safeCustomElement("osl-line")
export class OslLine extends PlotMark {
  mark = "line"

  @property({ type: String })
  direction: "horizontal" | "vertical" = "horizontal";

  @property({ converter: interpretFuncJsonOrString })
  x?: LineOptions["x"];

  @property({ converter: interpretFuncJsonOrString })
  y?: LineOptions["y"];

  @property({ converter: interpretFuncJsonOrString })
  z?: LineOptions["z"];

  @property({type: Number})
  strokeWidth: LineOptions["strokeWidth"] = 2.5;

  markOptions: (keyof this)[] = ["x", "y", "direction", "strokeWidth"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;
    console.log(options)
    const plotFn = this.direction === "horizontal" ? Plot.lineY : Plot.lineX;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return plotFn(data, { ...overrideOptions, ...options});
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-line": OslLine;
  }
}