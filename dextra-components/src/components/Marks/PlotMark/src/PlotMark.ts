import { DexterData } from "../../../data/src/Data";
import type { MarkOptions } from "@observablehq/plot";
import * as Plot from "@observablehq/plot";
import { property } from "lit/decorators.js";

export class PlotMark extends DexterData {
  mark = "base";

  @property({ type: String })
  filter?: MarkOptions["filter"];

  @property({ type: Boolean })
  reverse?: MarkOptions["reverse"];

  @property()
  sort?: MarkOptions["sort"];

  @property({ type: Function })
  transform?: MarkOptions["transform"];

  @property({ type: Function })
  initializer?: MarkOptions["initializer"];

  @property()
  fx?: MarkOptions["fx"];

  @property()
  fy?: MarkOptions["fy"];

  @property({ type: String })
  facet?: MarkOptions["facet"];

  @property({ type: String })
  facetAnchror?: MarkOptions["facetAnchor"];

  @property({ type: Number })
  margin?: MarkOptions["margin"];

  @property({ type: Number })
  marginTop?: MarkOptions["marginTop"];

  @property({ type: Number })
  marginRight?: MarkOptions["marginRight"];

  @property({ type: Number })
  marginBottom?: MarkOptions["marginBottom"];

  @property({ type: Number })
  marginLeft?: MarkOptions["marginLeft"];

  @property({ type: String })
  ariaDescription?: MarkOptions["ariaDescription"];

  @property({ type: String })
  pointerEvents?: MarkOptions["pointerEvents"];

  @property({ type: String })
  clip?: MarkOptions["clip"];

  @property({ type: Number })
  dx?: MarkOptions["dx"];

  @property({ type: Number })
  dy?: MarkOptions["dy"];

  @property({ type: String })
  fill?: MarkOptions["fill"];

  @property({ type: String })
  fillOpacity?: MarkOptions["fillOpacity"];

  @property({ type: String })
  strokeDasharray?: MarkOptions["strokeDasharray"];

  @property({ type: String })
  strokeDashoffset?: MarkOptions["strokeDashoffset"];

  @property({ type: String })
  strokeLinecap?: MarkOptions["strokeLinecap"];

  @property({ type: String })
  strokeLinejoin?: MarkOptions["strokeLinejoin"];

  @property({ type: String })
  strokeMiterlimit?: MarkOptions["strokeMiterlimit"];

  @property({ type: Number })
  strokeOpacity?: MarkOptions["strokeOpacity"];

  @property({ type: String })
  strokeWidth?: MarkOptions["strokeWidth"];

  @property({ type: String })
  opacity?: MarkOptions["opacity"];

  @property({ type: String })
  mixBlendMode?: MarkOptions["mixBlendMode"];

  @property({ type: String })
  paintOrder?: MarkOptions["paintOrder"];

  @property({ type: String })
  shapeRendering?: MarkOptions["shapeRendering"];

  @property({ type: String })
  href?: MarkOptions["href"];

  @property({ type: String })
  target?: MarkOptions["target"];

  @property({ type: String })
  channels?: MarkOptions["channels"];

  baseOptions: (keyof this)[] = [
    "filter",
    "reverse",
    "sort",
    "transform",
    "initializer",
    "fx",
    "fy",
    "facet",
    "facetAnchror",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "ariaDescription",
    "pointerEvents",
    "clip",
    "dx",
    "dy",
    "fill",
    "fillOpacity",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "opacity",
    "mixBlendMode",
    "paintOrder",
    "shapeRendering",
    "href",
    "target",
    "channels",
  ];

  markOptions: (keyof this)[] = [];

  protected get allOptions() {
    const options: { [key: string]: any } = {};
    this.baseOptions.forEach((option) => {
      if (this[option] !== undefined) {
        options[option as string] = this[option];
      }
    });
    this.markOptions.forEach((option) => {
      if (this[option] !== undefined) {
        options[option as string] = this[option];
      }
    });

    return options;
  }
  
  public get plot(): (
    _overrideData?: any,
    _overrideOptions?: {}
  ) => Plot.RenderableMark | never[] {
    return (_f, _j) => [];
  }

  render() {
    return null;
  }
}
