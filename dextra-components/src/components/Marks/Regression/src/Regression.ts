import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { LinearRegressionOptions } from "@observablehq/plot";
import { LinearRegressionYOptions } from "@observablehq/plot";
import { safeCustomElement } from "../../../core/decorators/safeCustomElement";


@safeCustomElement("osl-regression-plot")
export class OslRegressionPlot extends PlotMark {
  mark = "regression"

  @property({ type: String })
  x?: LinearRegressionYOptions["x"];

  @property({ type: String })
  y?: LinearRegressionYOptions["y"];

  @property({ type: String })
  ci?: LinearRegressionOptions["ci"];

  @property({ type: Boolean })
  regressionX?: boolean=false;

  markOptions: (keyof this)[] = ["x", "y", "ci"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      
      if (this.regressionX) {
        return Plot.linearRegressionX(data, { ...overrideOptions, ...options});
      } else {
        return Plot.linearRegressionY(data, { ...overrideOptions, ...options});
      }
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-regression-plot": OslRegressionPlot;
  }
}