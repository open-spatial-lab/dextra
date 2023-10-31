import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { safeCustomElement } from "../../../core/decorators/safeCustomElement";

@safeCustomElement("osl-histogram-plot")
export class HistogramPlot extends PlotMark {
  mark = "histogram"

  @property({ type: String })
  x?: string;

  @property({ type: String })
  y?: string;

  @property({ type: Boolean })
  vertical?: boolean = false;
  
  markOptions: (keyof this)[] = ['x'];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      if (this.vertical) {
        const bin = Plot.binY(
          { x: "count" },
          { ...overrideOptions, ...options }
        );
        return Plot.rectX(data, bin);
      } else {

        const bin = Plot.binX(
          { y: "count" },
          { ...overrideOptions, ...options }
        );
        return Plot.rectY(data, bin);
      }
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-histogram-plot": HistogramPlot;
  }
}