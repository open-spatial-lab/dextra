import { customElement, property } from "lit/decorators.js";
import * as Plot from "@observablehq/plot";
import { DotOptions } from "@observablehq/plot";
import { PlotMark } from "../../PlotMark/src/PlotMark";

@customElement("dexter-dot")
export class DexterDot extends PlotMark {
  override mark = "dot";

  @property({ type: String })
  x?: DotOptions["x"];

  @property({ type: String })
  y?: DotOptions["y"];

  @property({ type: String })
  r?: DotOptions["fill"];

  override markOptions: (keyof this)[] = ["x", "y", "r"];

  public override get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      return Plot.dot(data, { ...overrideOptions, ...options});
    };
  }

  override render() {
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-dot": DexterDot;
  }
}
