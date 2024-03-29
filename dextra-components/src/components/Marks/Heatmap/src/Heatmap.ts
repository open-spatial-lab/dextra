import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { ChannelValueBinSpec, BinOptions } from "@observablehq/plot";
import { safeCustomElement } from "../../../core/decorators/safeCustomElement";

type BinInputs = {
  x?: ChannelValueBinSpec;
  y?: ChannelValueBinSpec;
} & BinOptions;

@safeCustomElement("osl-heatmap-plot")
export class HeatmapPlot extends PlotMark {
  mark = "heatmap";

  @property({ type: String })
  x?: BinInputs["x"];

  @property({ type: String })
  y?: BinInputs["y"];

  markOptions: (keyof this)[] = ["x", "y"];

  @property({ type: Boolean })
  transparent?: boolean = true;

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;
    // const useTransparent = this.transparent;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      const bin = Plot.bin(
        { fillOpacity: "count" },
        { ...overrideOptions, ...options }
      );
      return Plot.rect(data, bin);
    };
  }

  render() {
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-heatmap-plot": HeatmapPlot;
  }
}
