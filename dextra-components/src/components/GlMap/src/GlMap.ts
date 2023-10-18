import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import * as maplibregl from "maplibre-gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import "maplibre-gl/dist/maplibre-gl.css";
import { styles } from "./mapStyles";
import type { LayerList } from "@deck.gl/core/typed";
// @ts-ignore
import { parse as parseWkt } from "wkt";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { syncedMaps } from "../../core/state/Store";
// @ts-ignore
import syncMaps from "mapbox-gl-sync-move";
import { OslMapLayer } from "./GlMapLayer";
import { LegendSpec } from "./types";
import "./MapLegend";
import "./MapTooltip";

const basicStyle = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap Contributors",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm", // This must match the source key above
    },
  ],
};

@safeCustomElement("osl-glmap")
export class OslGlMap extends OslData {
  static styles = styles;

  @property({ type: Array })
  center?: [number, number];

  @property({ type: Number })
  zoom?: number;

  @property({ type: String })
  mapStyle: string | object = basicStyle;

  @query(`#map-canvas`)
  mapCanvas?: HTMLDivElement;

  @property({ type: String })
  mapGroup?: string;

  @property({ type: Boolean })
  showNavigation?: boolean = false;

  @property({ type: String })
  legendPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right" =
    "bottom-left";

  public hasMovedToBbox: false = false;
  public map: maplibregl.Map | null = null;
  public deck: DeckOverlay | null = null;

  @property({ type: Object })
  public legend: {
    [key: string]: LegendSpec;
  } = {};

  get childMapLayers(): Array<OslMapLayer> {
    const children = Array.from(this.childNodes);
    return children.filter((node) => "renderLayer" in node) as OslMapLayer[];
  }

  async getLayers(): LayerList {
    return await Promise.all(
      this.childMapLayers.map((layer) =>
        "renderLayer" in layer ? layer.renderLayer() : null
      )
    );
  }

  get customAttribution(): string {
    return this.childMapLayers
      .map((layer) => layer.attribution || false)
      .filter(Boolean)
      .filter(this.utils.filterUnique)
      .join(", ");
  }
  get childElementIds() {
    return this.childMapLayers
      .map((layer) => layer["elementId"] || "")
      .filter((f) => f.length);
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
      center: this.center || [0, 0],
      zoom: this.zoom || 0,
      attributionControl: false,
    });
    if (this.mapGroup) {
      if (!syncedMaps[this.mapGroup]) {
        syncedMaps[this.mapGroup] = this.map;
      } else {
        syncMaps(this.map, syncedMaps[this.mapGroup]);
      }
    }
    this.map.addControl(
      new maplibregl.AttributionControl({
        customAttribution: this.customAttribution,
        compact: true,
      })
    );
    this.getLayers().then((layers: LayerList) => {
      this.deck = new DeckOverlay({
        interleaved: true,
        layers,
        parameters: {
          pickingRadius: 20,
        },
      });
      if (this.showNavigation) {
        this.map!.addControl(new maplibregl.NavigationControl({}));
      }
      // @ts-ignore
      this.map.addControl(this.deck);
    });
  }

  updateTimeoutFunction?: any;
  updateLayers() {
    clearTimeout(this.updateTimeoutFunction);
    this.updateTimeoutFunction = setTimeout(() => {
      this.getLayers().then((layers: LayerList) => {
        this.deck?.setProps({
          layers,
        });

        this.requestUpdate();
        this.map?.redraw();
      });
    }, 1);
  }

  firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(_changedProperties);
    this.initializeMap();
  }

  toggleLayer(key: string) {
    this.childMapLayers.find((l) => l.elementId === key)?.toggleVisibility();
  }

  debouncedResize: any; 

  connectedCallback() {
    super.connectedCallback();
    const parentElement = this.parentElement;
    const resizeObserver = new ResizeObserver(() => {
      this.debouncedResize && clearTimeout(this.debouncedResize);
      this.debouncedResize = setTimeout(() => {
        this.map?.resize();
      }, 100);
    });
    parentElement && resizeObserver.observe(parentElement);
  }

  template() {
    return html`
      <div style="padding:0;width:100%;height:100%;position:relative;">
        <div style="padding:0;width:100%;height:100%;position:relative;">
          <div
            id="map-canvas"
            style="width:100%;height:100%;max-height:300vh;min-width:50px;min-height:50px"
          />
          <slot></slot>
        </div>
        <osl-map-legend
          .legends=${this.childElementIds}
          .onLayerToggle=${(key: string) => this.toggleLayer(key)}
          .position=${this.legendPosition}
        ></osl-map-legend>
        <osl-map-tooltip
          .tooltips=${this.childElementIds}
        ></osl-map-legend>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-glmap": OslGlMap;
  }
}
