import { customElement, property } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { RuleOptions } from "@observablehq/plot";
import { RuleXOptions } from "@observablehq/plot";
import { RuleYOptions } from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";


@customElement("osl-rule-plot")
export class OslRule extends PlotMark {
  mark = "rule"

  @property({ converter: interpretFuncJsonOrString })
  x?: string;

  @property({ converter: interpretFuncJsonOrString })
  y?: string;

  @property({ converter: interpretFuncJsonOrString })
  interval?: string;

  @property({ type: String })
  x1?: RuleYOptions["x1"];

  @property({ type: String })
  x2?: RuleYOptions["x2"];

  @property({ type: String })
  y1?: RuleXOptions["y1"];

  @property({ type: String })
  y2?: RuleXOptions["y2"];

  @property({ type: Boolean })
  vertical?: boolean = false;

  markOptions: (keyof this)[] = ["x", "y", "interval", "x1", "x2", "y1", "y2", "vertical"];

  public override get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;

      if (this.vertical) {
          return Plot.ruleX(data, { ...overrideOptions, ...options});
      } else {
          return Plot.ruleY(data, { ...overrideOptions, ...options});
      }
    }
  };

render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-rule-plot": OslRule;
  }
}