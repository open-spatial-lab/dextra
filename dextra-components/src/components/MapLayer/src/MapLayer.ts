import { customElement, property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import { interpretFuncJsonOrString } from "../../core/utils/converters";

const LayerTypes = {
  scatter: ScatterplotLayer,
  // 'geojson': GeoJSONLayer,
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

  connectedCallback(): void {
    super.connectedCallback();
    this.updateLayer();
    this.subscribe(
      (store) => store.datasets[this.data].results,
      () => this.updateLayer()
    );
  }

  render() {
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-layer": OslMapLayer;
  }
}
