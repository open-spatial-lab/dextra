import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslData } from '../../data/src/Data'
import * as Plot from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../core/utils/converters";

export type MarkFunction = (data: any, overrideOptions: any) => any

@customElement("osl-plot")
export class OslPlot extends OslData {
  get childMarks(): Array<ChildNode> {
    const children = Array.from(this.childNodes)
    return children.filter((node) => 'mark' in node)
  }

  get markFunctions(): Array<MarkFunction> {
    return this.childMarks.map((mark) => 'plot' in mark ? mark.plot as MarkFunction : (_f: any) => []) 
  }

  get markSources(): Array<string> {
    return this.childMarks.map((mark) => '__data' in mark ? mark.__data : false).filter(f => f) as Array<string>
  }
  
  get marks() {
    const data = this.currentResults
    const marks = [
      this.framed ? Plot.frame() : null,
      this.markFunctions.map((mark) => mark(data, {}))
    ]
    return marks
  }
  override connectedCallback() {
    super.connectedCallback();
    this.markSources.forEach((source) => this.initDataset(source));
  }

  @property({ type: Number })
  inset = 20;

  @property({ type: Boolean })
  framed = true

  @property({ converter: interpretFuncJsonOrString })
  grid: boolean = true

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

  @property({ type: String })
  projection?: Plot.PlotOptions["projection"];

  @property({ type: String })
  colorType?: Plot.ScaleOptions["type"];

  @property({ type: String })
  colorScheme?: Plot.ScaleOptions["scheme"];

  @property({ type: Array })
  colorDomain?: Plot.ScaleOptions["domain"];

  @property({ type: Number })
  colorInterval?: Plot.ScaleOptions["n"];

  @property({ type: Boolean })
  colorLegend = false

  @property({ type: String })
  colorLabel?: Plot.ScaleOptions["label"];

  @property({ converter: interpretFuncJsonOrString })
  xAxisAnchor?: Plot.AxisOptions["anchor"] | null = "bottom";

  @property({ converter: interpretFuncJsonOrString })
  yAxisAnchor?: Plot.AxisOptions["anchor"] | null = "left";

  @property({ converter: interpretFuncJsonOrString })
  xAxisScaling?: Plot.ScaleOptions["type"];

  @property({ converter: interpretFuncJsonOrString })
  yAxisScaling?: Plot.ScaleOptions["type"]; 
  
  @property({ converter: interpretFuncJsonOrString })
  fxInterval?: Plot.ScaleOptions["interval"]; 

  @property({ converter: interpretFuncJsonOrString })
  fxTickFormat?: Plot.ScaleOptions["tickFormat"]; 

  @property({ converter: interpretFuncJsonOrString })
  fyInterval?: Plot.ScaleOptions["interval"]; 

  @property({ converter: interpretFuncJsonOrString })
  fyTickFormat?: Plot.ScaleOptions["tickFormat"]; 

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
        n: this.colorInterval, 
        label: this.colorLabel
      },
      inset,
      x: {axis: this.xAxisAnchor, type: this.xAxisScaling}, 
      y: {axis: this.yAxisAnchor, type: this.yAxisScaling},
      fx: {interval: this.fxInterval, tickFormat: this.fxTickFormat},
      fy: {interval: this.fyInterval, tickFormat: this.fyTickFormat},
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