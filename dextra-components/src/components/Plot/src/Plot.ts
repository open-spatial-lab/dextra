import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslData } from '../../data/src/Data'
import * as Plot from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../core/utils/converters";

export type MarkFunction = (data: any, overrideOptions: any) => any

@customElement("osl-plot")
export class OslPlot extends OslData {
  get markFunctions(): Array<MarkFunction> {
    const children = Array.from(this.childNodes)
    const marks = children.filter((node) => 'mark' in node)
    return marks.map((mark) => 'plot' in mark ? mark.plot as MarkFunction : (_f: any) => []) 
  }

  get marks() {
    const data = this.currentResults
    const marks= [
      this.framed ? Plot.frame() : null,
      this.markFunctions.map((mark) => mark(data, {}))
    ]
    return marks
  }

  @property({ type: Number })
  inset = 20;

  @property({ type: Boolean })
  framed = true

  @property({ converter: interpretFuncJsonOrString })
  grid: boolean = true

  @property({ type: Boolean })
  colorLegend = false

  // properties for eachmargin top, left, bottom, right
  @property({ type: Number })
  marginTop = 20;

  @property({ type: Number })
  marginLeft = 20;

  @property({ type: Number })
  marginBottom = 30;

  @property({ type: Number })
  marginRight = 20;

  @property({ type: Number })
  width = 600;

  @property({ type: Number })
  height = 400; 

  @property({ converter: interpretFuncJsonOrString })
  projection?: Plot.PlotOptions["projection"];

  @property({ converter: interpretFuncJsonOrString })
  colorType?: Plot.ScaleOptions["type"];

  @property({ converter: interpretFuncJsonOrString })
  colorScheme?: Plot.ScaleOptions["scheme"];

  @property({ converter: interpretFuncJsonOrString })
  colorDomain?: Plot.ScaleOptions["domain"];

  @property({ converter: interpretFuncJsonOrString })
  colorN?: Plot.ScaleOptions["n"];

  protected plot(){
    const { inset, marks, marginBottom, marginLeft, marginTop, marginRight, width, height, projection } = this
    const plot = Plot.plot({
      marginTop,
      marginLeft,
      marginBottom,
      marginRight,
      width, 
      height, 
      grid: this.grid,
      color: {legend: this.colorLegend, 
        type: this.colorType, 
        scheme: this.colorScheme, 
        domain: this.colorDomain, 
        n: this.colorN, 
      },
      inset,
      marks,
      projection, 
    })
    return plot
  }
  render() {
    return html`
      <div>
        ${this.plot()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-plot": OslPlot;
  }
}