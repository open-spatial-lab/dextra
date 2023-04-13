import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { LinearRegressionOptions } from "@observablehq/plot";
import { LinearRegressionXOptions } from "@observablehq/plot";


@customElement("dexter-regression")
export class DexterRegression extends PlotMark {
  mark = "regression"

  @property({ type: String })
  x?: LinearRegressionXOptions["x"];

  @property({ type: String })
  y?: LinearRegressionXOptions["y"];

  @property({ type: String })
  ci?: LinearRegressionOptions["ci"];

  markOptions: (keyof this)[] = ["x", "y", "ci"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.linearRegressionX(data, { ...overrideOptions, ...options});
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-regression": DexterRegression;
  }
}