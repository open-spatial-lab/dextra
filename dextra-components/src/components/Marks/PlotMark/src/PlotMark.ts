import { OslData } from "../../../data/src/Data";
import type { MarkOptions } from "@observablehq/plot";
import * as Plot from "@observablehq/plot";
import { property } from "lit/decorators.js";
import { interpretFuncJsonOrString } from "../../../core/utils/converters";

export class PlotMark extends OslData {
  mark = "base";

  @property({ converter: interpretFuncJsonOrString })
  filter?: MarkOptions["filter"];

  @property({ converter: interpretFuncJsonOrString })
  reverse?: MarkOptions["reverse"];

  @property({ converter: interpretFuncJsonOrString })
  sort?: MarkOptions["sort"];

  @property({ converter: interpretFuncJsonOrString })
  transform?: MarkOptions["transform"];

  @property({ converter: interpretFuncJsonOrString })
  initializer?: MarkOptions["initializer"];

  @property({ converter: interpretFuncJsonOrString })
  fx?: MarkOptions["fx"];

  @property({ converter: interpretFuncJsonOrString })
  fy?: MarkOptions["fy"];

  @property({ converter: interpretFuncJsonOrString })
  facet?: MarkOptions["facet"];

  @property({ converter: interpretFuncJsonOrString })
  facetAnchror?: MarkOptions["facetAnchor"];

  @property({ converter: interpretFuncJsonOrString })
  margin?: MarkOptions["margin"];

  @property({ converter: interpretFuncJsonOrString })
  marginTop?: MarkOptions["marginTop"];

  @property({ converter: interpretFuncJsonOrString })
  marginRight?: MarkOptions["marginRight"];

  @property({ converter: interpretFuncJsonOrString })
  marginBottom?: MarkOptions["marginBottom"];

  @property({ converter: interpretFuncJsonOrString })
  marginLeft?: MarkOptions["marginLeft"];

  @property({ converter: interpretFuncJsonOrString })
  ariaDescription?: MarkOptions["ariaDescription"];

  @property({ converter: interpretFuncJsonOrString })
  pointerEvents?: MarkOptions["pointerEvents"];

  @property({ converter: interpretFuncJsonOrString })
  clip?: MarkOptions["clip"];

  @property({ converter: interpretFuncJsonOrString })
  dx?: MarkOptions["dx"];

  @property({ converter: interpretFuncJsonOrString })
  dy?: MarkOptions["dy"];

  @property({ converter: interpretFuncJsonOrString })
  fill?: MarkOptions["fill"];

  @property({ converter: interpretFuncJsonOrString })
  fillOpacity?: MarkOptions["fillOpacity"];

  @property({ converter: interpretFuncJsonOrString })
  stroke?: MarkOptions["stroke"];
  
  @property({ converter: interpretFuncJsonOrString })
  strokeDasharray?: MarkOptions["strokeDasharray"];

  @property({ converter: interpretFuncJsonOrString })
  strokeDashoffset?: MarkOptions["strokeDashoffset"];

  @property({ converter: interpretFuncJsonOrString })
  strokeLinecap?: MarkOptions["strokeLinecap"];

  @property({ converter: interpretFuncJsonOrString })
  strokeLinejoin?: MarkOptions["strokeLinejoin"];

  @property({ converter: interpretFuncJsonOrString })
  strokeMiterlimit?: MarkOptions["strokeMiterlimit"];

  @property({ converter: interpretFuncJsonOrString })
  strokeOpacity?: MarkOptions["strokeOpacity"];

  @property({ converter: interpretFuncJsonOrString })
  strokeWidth?: MarkOptions["strokeWidth"];

  @property({ converter: interpretFuncJsonOrString })
  opacity?: MarkOptions["opacity"];

  @property({ converter: interpretFuncJsonOrString })
  mixBlendMode?: MarkOptions["mixBlendMode"];

  @property({ converter: interpretFuncJsonOrString })
  paintOrder?: MarkOptions["paintOrder"];

  @property({ converter: interpretFuncJsonOrString })
  shapeRendering?: MarkOptions["shapeRendering"];

  @property({ converter: interpretFuncJsonOrString })
  href?: MarkOptions["href"];

  @property({ converter: interpretFuncJsonOrString })
  target?: MarkOptions["target"];

  @property({ converter: interpretFuncJsonOrString })
  channels?: MarkOptions["channels"];

  @property({ converter: interpretFuncJsonOrString })
  tip?: MarkOptions["tip"] = true;

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
    "stroke",
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
    "tip",
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
  ) => Plot.RenderableMark | Plot.CompoundMark | never[] {
    return (_f, _j) => [];
  }

  render() {
    return null;
  }
}
