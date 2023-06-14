import { customElement } from "lit/decorators.js";
import { PlotMark } from "../../PlotMark/src/PlotMark";
import * as Plot from "@observablehq/plot";
import { property } from "lit/decorators.js";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";

@customElement("osl-axis")
export class OslAxis extends PlotMark {
  mark = "axis"

  markOptions: (keyof this)[] = ['axis', 'anchor','ticks','tickFormat', 'tickSize', 'tickPadding', 'tickRotate'];

  @property({ type: String })
  axis?: "x" | "y" = "x";

  @property({ type: String })
  anchor?: "bottom" | "top" | "left" | "right" = "bottom";

  @property({ converter: interpretFuncJsonOrString })
  tickFormat?: string | Function = (d: any) => d;
  
  @property({type: Number})
  ticks?: Plot.AxisOptions["ticks"] = 20;

  @property({type: Number})
  tickSize: Plot.AxisOptions["tickSize"] = 6;

  @property({type: Number})
  tickPadding?: Plot.AxisOptions["tickPadding"];
  
  @property({type: Number})
  tickRotate?: Plot.AxisOptions["tickRotate"];


  public get plot() {
    const innerData = this?.currentResults;
    const options = this.allOptions;

    return (overrideData?: any, overrideOptions?: {}) => {
      const data = innerData?.length ? innerData : overrideData;
      // console.log({
      //   ...overrideOptions,
      //   ...options,
      // })
      switch (this.axis) {
        case "x":
          return Plot.axisX({...overrideOptions, ...options });
        case "y":
          return Plot.axisY(data, {...overrideOptions, ...options});
        default:
          return Plot.axisX(data, {...overrideOptions, ...options});
      }
    };
  }

  render() {
    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-axis": OslAxis;
  }
}