import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";

@customElement("dexter-density")
export class DexterDensity extends PlotMark {
  override mark = "density"

  @property({ type: String })
  x?: string;

  @property({ type: String })
  y?: string;

  @property({ type: Number })
  bandwidth?: number;

  override markOptions: (keyof this)[] = ['x','y','bandwidth'];

  override connectedCallback(): void {
    console.log('connected!')
    console.log(this.allOptions)
    super.connectedCallback();
  }

  public override get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.density(data, { ...overrideOptions, ...options});
    };
  }

  override render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-density": DexterDensity;
  }
}