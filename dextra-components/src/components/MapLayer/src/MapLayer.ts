import { customElement, property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";

const LayerTypes = {
  scatter: ScatterplotLayer,
  // 'geojson': GeoJSONLayer,
};

const interpretFuncJsonOrString = (value: string | null, _type: unknown) => {
  if (value === null) {
    return value;
  }
  // regex to check if string contians (*)=>
  const isArrowFunction = /\(\w+\)\s*=>/g.test(value);
  // regex to check if arrow function with no parenthesis
  const isArrowFunctionNoParenthesis = /\w+\s*=>/g.test(value);
  // regex to check if string is stringified function
  const isNormalFunction = /^function\s*\([^\)]*\)\s*\{.*\}$/s.test(value);
  if (isArrowFunction || isArrowFunctionNoParenthesis) {
    const splitArrowSimpleParts = value.split("=>")
    const parts = isArrowFunctionNoParenthesis
      ? [null, null, splitArrowSimpleParts[0], splitArrowSimpleParts[1]]
      : /^\s*([^\(]*)?\s*\(?([^\)]*)\)?\s*=>\s*{?([\s\S]*)}?/.exec(value);

    if (parts?.length && parts.length > 3) {
      const p = parts as RegExpExecArray;
      let body = p[3];
      // check if implicit return
      if (!body.includes("return")) {
        body = "return " + body;
      }
      // check if last character is } and slice
      if (body[body.length - 1] === "}") {
        body = body.slice(0, -1);
      }
      return new Function(p[2], body);
    } else {
      return (d: any) => d;
    }
  }
  if (isNormalFunction) {
    const parts = /function\s*([^\(]*)\s*\(([^\)]*)\)\s*\{([\s\S]*)\}/.exec(
      value
    );
    if (parts) {
      return new Function(parts[2], parts[3]);
    } else {
      return (d: any) => d;
    }
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

@customElement("osl-map-layer")
export class OslMapLayer extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  getPosition?: (d: any) => number[] | number[];


  // @ts-ignore
  public get isMapLayer() {
    return true;
  }

  public get map(): maplibregl.Map | undefined {
    // @ts-ignore
    return this?.parentNode?.map
  }
  public get deck(): DeckOverlay | undefined {
    // @ts-ignore
    return this?.parentNode?.deck
  }


  @property({ type: String })
  layer: keyof typeof LayerTypes = "scatter";

  public get renderLayer() {
    const id = this.elementId;
    const L = LayerTypes[this.layer];
    return new L({
      id,
      data: this.currentResults,
      // @ts-ignore
      getPosition: this.getPosition,
      getFillColor: [255, 0, 0],
      getRadius: 1,
      radiusMinPixels: 10,
      // beforeId: "countries-label",
    });
      
  }

  updateLayer(){ 
    this.deck?.setProps({
      layers: [this.renderLayer],
    })
    this.map?.redraw();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateLayer();
    this.subscribe(
      (store) => store.datasets[this.data].results,
      () => this.updateLayer()
    );
  }

  override render() {
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-layer": OslMapLayer;
  }
}
