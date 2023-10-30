import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import * as Plot from "@observablehq/plot";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import "@spectrum-web-components/progress-bar/sp-progress-bar.js";

export type MarkFunction = (data: any, overrideOptions: any) => any;

@customElement("osl-plot")
export class OslPlot extends OslData {
  @property({ type: Number })
  containerWidth?: number;

  @property({ type: Number })
  containerHeight?: number;

  static get styles() {
    return css`
      .container {
        width: 100%;
        height: 100%;
        position: relative;
        svg {
          width: 100%;
          max-height: ${(this as any).containerHeight || 200}px;
        }
      }
    `;
  }

  get childMarks(): Array<ChildNode> {
    const children = Array.from(this.childNodes);
    return children.filter((node) => "mark" in node);
  }

  get markFunctions(): Array<MarkFunction> {
    return this.childMarks.map((mark) =>
      "plot" in mark ? (mark.plot as MarkFunction) : (_f: any) => []
    );
  }

  get markSources(): Array<string> {
    return this.childMarks
      .map((mark) => ("__data" in mark ? mark.__data : false))
      .filter((f) => f) as Array<string>;
  }

  get marks() {
    const data = this.currentResults;
    const marks = [
      this.framed ? Plot.frame() : null,
      this.markFunctions.map((mark) => mark(data, {})),
    ];
    return marks;
  }

  connectedCallback() {
    super.connectedCallback();
    this.markSources.forEach((source) => this.initDataset(source));
    this.updateContainerSize();
    window.addEventListener("resize", () => this.updateContainerSize());
  }

  @property({ type: Number })
  inset = 20;

  @property({ type: Boolean })
  framed = true;

  @property({ converter: interpretFuncJsonOrString })
  grid: boolean = true;

  @property({ type: Number })
  marginTop = 20;

  @property({ type: Number })
  marginLeft = 60;

  @property({ type: Number })
  marginBottom = 30;

  @property({ type: Number })
  marginRight = 20;

  @property({ type: Number })
  width?: number;

  @property({ type: Number })
  height?: number;

  @property({ type: String })
  projection?: Plot.PlotOptions["projection"];

  @property({ type: String })
  colorType?: Plot.ScaleOptions["type"];

  @property({ type: String }) //@ts-ignore
  colorScheme?: Plot.ScaleOptions["scheme"];

  @property({ type: Array })
  colorDomain?: Plot.ScaleOptions["domain"];

  @property({ type: Number })
  colorInterval?: Plot.ScaleOptions["n"];

  @property({ type: Boolean })
  colorLegend = false;

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

  protected plot() {
    this.updateContainerSize();
    const {
      inset,
      marks,
      marginBottom,
      marginLeft,
      marginTop,
      marginRight,
      width,
      height,
      projection,
    } = this;

    const plotWidth = width || this.containerWidth;
    const plotHeight = height || this.containerHeight;
    if (!plotWidth || !plotHeight) {
      return this.preloader();
    }
    const plot = Plot.plot({
      marginTop,
      marginLeft,
      marginBottom,
      marginRight,
      width: width || this.containerWidth,
      height: height || this.containerHeight,
      grid: this.grid,
      color: {
        legend: this.colorLegend,
        type: this.colorType,
        scheme: this.colorScheme,
        domain: this.colorDomain,
        n: this.colorInterval,
        label: this.colorLabel,
      },
      inset,
      x: { axis: this.xAxisAnchor, type: this.xAxisScaling },
      y: { axis: this.yAxisAnchor, type: this.yAxisScaling },
      marks,
      projection,
    });
    return plot;
  }
  render() {
    return html` <div class="container">${this.plot()}</div> `;
  }
  updateContainerSize() {
    const container = this.shadowRoot?.querySelector("div");
    if (container) {
      this.containerWidth = container.clientWidth;
      this.containerHeight = container.clientHeight;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-plot": OslPlot;
  }
}
