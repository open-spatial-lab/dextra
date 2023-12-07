import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { safeCustomElement } from "../../../core/decorators/safeCustomElement";

@safeCustomElement("osl-density-plot")
export class OslPlotDensity extends PlotMark {
  mark = "density"

  @property({ type: String })
  x?: string;

  @property({ type: String })
  y?: string;

  @property({ type: Number })
  bandwidth?: number;

  markOptions: (keyof this)[] = ['x','y','bandwidth'];

  connectedCallback(): void {
    // console.log('connected!')
    // console.log(this.allOptions)
    super.connectedCallback();
  }

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.density(data, { ...overrideOptions, ...options});
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-density-plot": OslPlotDensity;
  }
}