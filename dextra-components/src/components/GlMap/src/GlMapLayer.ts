import { property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import * as maplibregl from "maplibre-gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import "maplibre-gl/dist/maplibre-gl.css";
import { ScatterplotLayer, GeoJsonLayer } from "@deck.gl/layers/typed";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
// @ts-ignore
import { parse as parseWkt } from "wkt";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
// @ts-ignore
import syncMaps from "mapbox-gl-sync-move";
import bbox from "@turf/bbox";
import { getFormatter } from "../../core/utils/numberFormatter";
import { OslGlMap } from "./GlMap";
import { LegendSpec } from "./types";
import { BinBuilder } from "../../core/utils/binBuilder";
import { DataResult } from "../../core/state/types";
import { legendStore } from "../../core/state/MapLegendStore";
import type {
  TooltipSpec,
  ManualTooltipSpec,
  TooltipEntry,
} from "../../core/state/MapTooltipStore/types";
import { tooltipStore } from "../../core/state/MapTooltipStore";
const LayerTypes = {
  scatter: ScatterplotLayer,
  // polygon: PolygonLayer,
  polygon: GeoJsonLayer,
};

const DEFAULT_QUINTILE_SCALE = [
  [237, 248, 251],
  [178, 226, 226],
  [102, 194, 164],
  [44, 162, 95],
  [0, 109, 44],
];

const NULL_GEOM = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

@safeCustomElement("osl-map-layer")
export class OslMapLayer extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  getPosition?: (d: any) => number[] | number[];

  @property({ converter: interpretFuncJsonOrString })
  fillColor?: Array<number> | ((row: any) => Array<number>);

  @property({ type: String })
  geometryEncoding: string = "wkt";

  @property({ converter: interpretFuncJsonOrString })
  getPolygon?: (d: any) => any;

  @property({ converter: interpretFuncJsonOrString })
  choroplethColorScale?: string | Array<Array<number>> = DEFAULT_QUINTILE_SCALE;

  @property({ type: String })
  attribution?: string;

  @property({ type: String })
  beforeId?: string;

  @property({ converter: interpretFuncJsonOrString })
  visible: boolean = true;

  @property({ type: String })
  legendTitle?: string;

  @property({ converter: interpretFuncJsonOrString })
  tooltips: ManualTooltipSpec | TooltipSpec[] = [];

  @property({ type: String })
  radiusUnits: "meters" | "pixels" = "meters";

  @property({ type: Number })
  circleRadius: number = 5;

  @property({ type: Number })
  pointRadiusScale: number = 1;

  @property({ type: Boolean })
  fixedRadius: boolean = false;

  @property({ converter: interpretFuncJsonOrString })
  filled: boolean = true;

  @property({ converter: interpretFuncJsonOrString })
  stroked: boolean = false;

  @property({ converter: interpretFuncJsonOrString })
  staticColor?: Array<number>;

  @property({ type: Number})
  pointRadiusMaxPixels?: number;
  
  @property({ type: Number})
  pointRadiusMinPixels?: number;


  binBuilder?: BinBuilder;
  colorStops?: any;

  public get map(): maplibregl.Map | null {
    return this.parent.map;
  }

  public get deck(): DeckOverlay | null {
    return this.parent.deck;
  }

  public get parent(): OslGlMap {
    return (this?.parentNode || {}) as OslGlMap;
  }

  public toggleVisibility() {
    this.visible = !this.visible;
    this.updateLayer();
  }
  public setVisibility(visibility: boolean) {
    this.visible = visibility;
    this.updateLayer();
  }
  
  setLegend(legend: LegendSpec) {
    legendStore.legends[this.elementId] = legend;
  }

  setTooltip(entry: Record<string, any>, x: number | null, y: number | null) {
    if (x === null || y === null) {
      tooltipStore.tooltips[this.elementId] = {
        x,
        y,
        data: [],
      };
    }

    let data: TooltipEntry["data"] = [];
    if (!entry) {
      // nada
    } else if (typeof this.tooltips == "function") {
      data = this.tooltips(entry);
    } else if (this.tooltips.length) {
      data = this.tooltips.map((tooltip) => {
        // console.log('tooltip', tooltip)
        const formatter = this.tooltipFormatters[tooltip.format || "nice"];
        const value = entry[tooltip.column];
        const formatted =
          typeof value === "number" ? formatter.format(value) : value;
        return {
          label: tooltip.label || tooltip.column,
          value: formatted,
        };
      });
    } else {
      data = Object.keys(entry)
        .filter((key) => key !== this.geoColumn)
        .slice(0, 10)
        .map((key) => {
          const formatter = this.tooltipFormatters["nice"];
          const value = entry[key];
          const formatted =
            typeof value === "number" ? formatter.format(value) : value;
          return {
            label: key,
            value: formatted,
          };
        });
    }

    tooltipStore.tooltips[this.elementId] = {
      x,
      y,
      data,
    };
  }

  @property({ type: String })
  layer: "polygon" | "circle" | "text" = "polygon";

  tooltipFormatters: { [key: string]: ReturnType<typeof getFormatter> } = {};

  layerProps: Partial<GeoJsonLayer["props"]> = {
    pickable: true,
    filled: this.filled,
    stroked: this.stroked,
    onHover: (info) => {
      const { x, y, object } = info || {};
      const data = object?.properties || object;
      this.setTooltip(data, x || null, y || null);
    },
    visible: this.visible,
  };
  legendElements: any = [];

  // @ts-ignore
  public async renderLayer(_data?: DataResult) {
    const id = this.elementId;
    const data = _data || this.currentResults || [];
    this.layerProps.data = data;
    this.layerProps.id = id;
    this.layerProps.visible = this.visible;
    if (this.beforeId) {
      // @ts-ignore
      this.layerProps.beforeId = this.beforeId;
    }

    if (this.dataColumn) {
      const column = this.dataColumn!;
      const accessor = (row: any) => row.properties?.[column];
      if (this.binBuilder && this.binBuilder.data !== data && data) {
        await this.binBuilder.ingestDataAndAccesor(data, accessor);
        let colorFunc: any;
        switch (this.type) {
          case "continuous":
            colorFunc =
              this.binBuilder?.generateContinuousColorFunc("RGB-Array");
            break;
          case "categorical":
            colorFunc =
              this.binBuilder?.generateCategoricalColorFunc("RGB-Array");
            break;
        }
        if (this.stroked && !this.filled) {
          this.layerProps.getLineColor = colorFunc;
          this.layerProps.lineWidthUnits = "pixels";
          this.layerProps.getLineWidth = 5;
        } else if (this.filled) {
          this.layerProps.getFillColor = colorFunc;
        }
        switch (this.layer) {
          case "polygon":
            break;
            // @ts-ignore
          case "point":
          case "circle":
            this.layerProps.getPointRadius =
              this.type === "categorical" || this.fixedRadius
                ? this.circleRadius
                : (d: any) => {
                    const value = accessor(d);
                    return value;
                  };
            this.layerProps.pointRadiusMinPixels = this.pointRadiusMinPixels || 1;
            this.layerProps.pointRadiusMaxPixels = this.pointRadiusMaxPixels || 40;
            this.layerProps.pointRadiusUnits = this.radiusUnits || "meters";
            this.layerProps.pointRadiusScale = this.pointRadiusScale || 1
            break;
          case "text":
            break;
        }

        this.legendElements = this.binBuilder?.getLegend();
      }
    } else if (this.type === "static") {
      const colorFunc = (_: any) => this.staticColor || [0, 0, 0];
      // @ts-ignore
      this.layerProps.getFillColor = colorFunc;
      if (this.stroked && !this.filled) {
        // @ts-ignore
        this.layerProps.getLineColor = colorFunc;
        this.layerProps.lineWidthUnits = "pixels";
        this.layerProps.getLineWidth = 5;
      } else if (this.filled) {
        // @ts-ignore
        this.layerProps.getFillColor = colorFunc;
      }
      switch (this.layer) {
        case "polygon":
          break;
          // @ts-ignore
        case "point":
        case "circle":
          this.layerProps.pointRadiusMinPixels = this.pointRadiusMinPixels || 1;
          this.layerProps.pointRadiusMaxPixels = this.pointRadiusMaxPixels || 100;
          this.layerProps.getPointRadius = this.circleRadius;
          this.layerProps.pointRadiusUnits = this.radiusUnits || "meters";
          this.layerProps.pointRadiusScale = this.pointRadiusScale || 1
          break;
        case "text":
          break;
      }
    }

    this.setLegend({
      title: this.legendTitle || this.dataColumn || 'Layer',
      visible: this.visible,
      elements: this.legendElements,
    });
    return new GeoJsonLayer(this.layerProps);
  }

  protected syncMapViewFromBbox() {
    const { center, zoom, hasMovedToBbox } = this.parentNode as any;
    if (
      Boolean(
        !center &&
          !zoom &&
          !hasMovedToBbox &&
          typeof this.currentResults !== "string" &&
          this.currentResults?.length
      )
      ) {
      // @ts-ignore
      !this.parentNode.moveEveryDataChange && (this.parentNode.hasMovedToBbox = true)
      const bounds = bbox({
        type: "FeatureCollection",
        features: this.currentResults,
      }) as [number, number, number, number];
      this.map?.fitBounds(bounds, { padding: 20, duration: 0 });
    }
  }

  updateLayer() {
    this.syncMapViewFromBbox();
    this.parent.updateLayers();
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (Array.isArray(this.tooltips)) {
      this.tooltipFormatters["nice"] = getFormatter("nice");
      for (const tooltip of this.tooltips) {
        if (tooltip.format && !this.tooltipFormatters[tooltip.format]) {
          this.tooltipFormatters[tooltip.format] = getFormatter(tooltip.format);
        }
      }
    }
    this.updateLayer();
    this.subscribe(
      (store) => store.datasets[this.data].results,
      () => this.updateLayer()
    );
    this.binBuilder = new BinBuilder({
      type: this.type,
      colorScheme: this.colorScheme,
      colorStops: this.colorStops,
      labels: this.labels,
      labelFormat: this.labelFormat,
      method: this.method,
      bins: this.bins,
      manualBreaks: this.manualBreaks,
      mapping: this.mapping,
    });
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
