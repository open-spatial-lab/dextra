import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { RuleOptions } from "@observablehq/plot";
import { RuleXOptions } from "@observablehq/plot";


@customElement("dexter-rulex")
export class DexterRuleX extends PlotMark {
  mark = "rulex"
  @property({ type: String })
  interval?: RuleOptions["interval"];

  @property({ type: String })
  x?: RuleXOptions["x"];

  @property({ type: String })
  y?: RuleXOptions["y"];

  @property({ type: String })
  y1?: RuleXOptions["y1"];

  @property({ type: String })
  y2?: RuleXOptions["y2"];

  @property({ type: Array })
  number?: "[0]";  

  markOptions: (keyof this)[] = ["interval", "x", "y", "y1", "y2", "number"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      if (this.number) {
        return Plot.ruleX(this.number);
      } else {
        return Plot.ruleX(data, { ...overrideOptions, ...options});
      }

    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-rulex": DexterRuleX;
  }
}