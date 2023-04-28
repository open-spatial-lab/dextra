import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { RuleOptions } from "@observablehq/plot";
import { RuleYOptions } from "@observablehq/plot";


@customElement("dexter-ruley")
export class DexterRuleY extends PlotMark {
  mark = "ruley"
  @property({ type: String })
  interval?: RuleOptions["interval"];

  @property({ type: String })
  y?: RuleYOptions["y"];

  @property({ type: String })
  x?: RuleYOptions["x"];

  @property({ type: String })
  x1?: RuleYOptions["x1"];

  @property({ type: String })
  x2?: RuleYOptions["x2"];

  @property({ type: Array })
  number?: [0];  

  markOptions: (keyof this)[] = ["interval", "y", "x", "x1", "x2", "number"];

  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      if (this.number) {
        return Plot.ruleY(this.number);
      } else {
        return Plot.ruleY(data, { ...overrideOptions, ...options});
      }

    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-ruley": DexterRuleY;
  }
}