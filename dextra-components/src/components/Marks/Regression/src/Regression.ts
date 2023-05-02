import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { LinearRegressionOptions } from "@observablehq/plot";
import { LinearRegressionYOptions } from "@observablehq/plot";


@customElement("osl-regression-plot")
export class OslRegressionPlot extends PlotMark {
  mark = "regression"

  @property({ type: String })
  x?: LinearRegressionYOptions["interval"];

  @property({ type: String })
  y?: LinearRegressionYOptions["y"];

  @property({ type: String })
  ci?: LinearRegressionOptions["ci"];

  markOptions: (keyof this)[] = ["x", "y", "ci"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.linearRegressionY(data, { ...overrideOptions, ...options});
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-regression-plot": OslRegression;
  }
}