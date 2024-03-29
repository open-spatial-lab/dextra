import { html, css } from "lit";
import { property, query } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import * as maplibregl from "maplibre-gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import "maplibre-gl/dist/maplibre-gl.css";
import { styles } from "./mapStyles";
import type { LayersList } from "@deck.gl/core/typed";
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
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { renderTemplateAsString } from "../../../utils/renderTemplateAsString";
import { GWBP1 } from "../../../stories/projects/GWBP";

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
  static styles = css`
    ${styles}
    .description {
      position: absolute;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      max-height: 30vh;
      border: 1px solid lightgray;
      background-color: var(--spectrum-background-layer-2-color);
    }
  `;

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
  showNavigation?: boolean = true;

  @property({ type: Boolean })
  showFullScreen?: boolean = true;

  
  @property({ type: Boolean })
  showSingleLayer?: boolean = false;

  @property({ type: Boolean })
  moveEveryDataChange?: boolean = false;

  @property({ type: String })
  legendPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right" =
    "bottom-left";

  @property({ type: String })
  descriptionPosition:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right" = "top-right";

  @property({ type: Object })
  public legend: {
    [key: string]: LegendSpec;
  } = {};

  public hasMovedToBbox: false = false;
  public map: maplibregl.Map | null = null;
  public deck: DeckOverlay | null = null;
  debouncedResize: any;

  get childMapLayers(): Array<OslMapLayer> {
    const children = Array.from(this.childNodes);
    return children.filter((node) => "renderLayer" in node) as OslMapLayer[];
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

  async getLayers(): Promise<LayersList> {
    const layers = await Promise.all(
      this.childMapLayers.map(async (l) => {
        const isReady = Boolean(l.isReady);
        const layer = "renderLayer" in l ? await l.renderLayer() : null;
        return {
          layer,
          isReady,
        };
      })
    );
    this.isReady = layers.every((l) => l.isReady);
    return layers.map((l) => l.layer);
  }
  // @ts-ignore
  handleChange(mapView: {
    minLng: number;
    minLat: number;
    maxLng: number;
    maxLat: number;
    centerLng: number;
    centerLat: number;
    zoom: number;
  }) {
    if (!this.onInteractDataset) {
      return;
    }
    const datasets = Array.isArray(this.onInteractDataset)
      ? this.onInteractDataset
      : [this.onInteractDataset];
    datasets.forEach((dataset) => {
      this.store.datasets[dataset].parameters = {
        ...this.store.datasets[dataset].parameters,
        ...mapView,
      }
      // Object.entries(mapView).forEach(([key, value]) => {
      //   this.store.datasets[dataset].parameters[key] = value;
      // });
    });
  }

  timeoutFn: any = null;
  handleMapMove() {
    this.timeoutFn && clearTimeout(this.timeoutFn);
  }

  handleMapMoveEnd() {
    if (!this.onInteractDataset) {
      return;
    }
    const bounds = this.map?.getBounds();
    const center = this.map?.getCenter();
    const zoom = this.map?.getZoom();
    if (bounds && center && zoom) {
      const {
        _sw: { lng: minLng, lat: minLat },
        _ne: { lng: maxLng, lat: maxLat },
      } = bounds;
      const { lng: centerLng, lat: centerLat } = center;
      this.timeoutFn = setTimeout(() => {
        this.handleChange({
          minLng,
          minLat,
          maxLng,
          maxLat,
          centerLng,
          centerLat,
          zoom: Math.floor(zoom)
        });
      }, 250);
    }
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
    if (!this.mapGroup || syncedMaps[this.mapGroup] === this.map) {
      this.map.on("moveend", () => {
        this.handleMapMoveEnd();
      });
      this.map.on("move", () => {
        this.handleMapMove();
      })
    }
    this.map.addControl(
      new maplibregl.AttributionControl({
        customAttribution: this.customAttribution,
        compact: true,
      })
    );
    this.getLayers().then((layers: LayersList) => {
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
      if (this.showFullScreen) {
        this.map!.addControl(new maplibregl.FullscreenControl({
          container: this.parentElement!
        }));
      }
      // @ts-ignore
      this.map.addControl(this.deck);
    });
  }

  updateTimeoutFunction?: any;
  updateLayers() {
    clearTimeout(this.updateTimeoutFunction);
    this.updateTimeoutFunction = setTimeout(() => {
      this.getLayers().then((layers: LayersList) => {
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
    const filter = (l: any) => l.elementId === key;
    const inverseFilter = (l: any) => l.elementId !== key && l.fixed !== true;
    if (this.showSingleLayer) {
      this.childMapLayers.find(filter)?.setVisibility(true);
      this.childMapLayers
        .filter(inverseFilter)
        ?.forEach((l) => l.setVisibility(false));
    } else {
      this.childMapLayers.find(filter)?.toggleVisibility();
    }
  }

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

  renderDescription() {
    return html``;
  }

  template() {
    const [yPosition, xPosition] = this.descriptionPosition.split("-");
    return html`
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
          .showSingleLayer=${this.showSingleLayer}
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
