import { customElement, property } from "lit/decorators.js";
import * as Plot from "@observablehq/plot";
import { DotOptions } from "@observablehq/plot";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";

@customElement("osl-dot-plot")
export class OslDotPlot extends PlotMark {
  override mark = "dot";

  @property({ converter: interpretFuncJsonOrString })
  x?: DotOptions["x"];

  @property({ converter: interpretFuncJsonOrString })
  y?: DotOptions["y"];

  @property({ converter: interpretFuncJsonOrString })
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
    "osl-dot-plot": OslDotPlot;
  }
}
