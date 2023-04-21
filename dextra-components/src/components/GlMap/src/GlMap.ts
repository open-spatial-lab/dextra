import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { DexterData } from "../../data/src/Data";
import * as maplibregl from "maplibre-gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import 'maplibre-gl/dist/maplibre-gl.css';
import { styles } from "./mapStyles"
import { DexterMapLayer } from "../../MapLayer/src/MapLayer";

const basicStyle = {
  "version": 8,
	"sources": {
    "osm": {
			"type": "raster",
			"tiles": ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
			"tileSize": 256,
      "attribution": "&copy; OpenStreetMap Contributors",
      "maxzoom": 19
    }
  },
  "layers": [
    {
      "id": "osm",
      "type": "raster",
      "source": "osm" // This must match the source key above
    }
  ]
};

@customElement("dexter-glmap")
export class DexterGlMap extends DexterData {
  static override styles = styles;

  @property({type: Array})
  center?: [number, number] = [0, 0];

  @property({type: Number})
  zoom?: number = 0;

  @property({type: String})
  mapStyle: string | object = basicStyle;

  @query(`#map-canvas`)
  mapCanvas?: HTMLDivElement;

  map: maplibregl.Map | null = null;
  deck: DeckOverlay | null = null;

  get layers(): Array<DexterMapLayer['renderLayer'] | null> {
    const children = Array.from(this.childNodes)
    const layers = children.filter((node) => 'renderLayer' in node) as DexterMapLayer[]
    return layers.map((layer) => 'renderLayer' in layer ? layer.renderLayer : null)
  }

  initializeMap() {
    if (!this.mapCanvas) {
      return;
    }
    const container = this.mapCanvas;
    
    this.map = new maplibregl.Map({
      container,
      // @ts-ignore
      style: this.mapStyle,
      center: this.center,
      zoom: this.zoom,
    });

    const layers = this.layers

    this.deck = new DeckOverlay({
      interleaved: true,
      layers
    });

    // @ts-ignore
    this.map.addControl(new maplibregl.NavigationControl());
    // @ts-ignore
    this.map.addControl(this.deck);
  }

  override firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(_changedProperties);
    this.initializeMap();
  }

  override render() {
    return html`
      <div
        style="position:relative; width:100%; height:80vh;"
      >
        <div id="map-canvas" style="width:100%;height:100%;" />
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-glmap": DexterGlMap;
  }
}
