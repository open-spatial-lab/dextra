import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DexterData } from '../../data/src/Data'
import * as Plot from "@observablehq/plot";

export type MarkFunction = (data: any, overrideOptions: any) => any

@customElement("dexter-plot")
export class DexterPlot extends DexterData {
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

  protected plot(){
    const { inset, marks } = this
    const plot = Plot.plot({
      inset,
      marks
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
    "dexter-plot": DexterPlot;
  }
}