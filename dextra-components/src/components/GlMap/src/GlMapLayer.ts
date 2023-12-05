import { property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import * as maplibregl from "maplibre-gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import "maplibre-gl/dist/maplibre-gl.css";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { GeoJsonLayer } from "@deck.gl/layers/typed";
// @ts-ignore
import { parse as parseWkt } from "wkt";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
// @ts-ignore
import syncMaps from "mapbox-gl-sync-move";
// @ts-ignore
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
import { html } from "lit";
import { PickingInfo } from "@deck.gl/core/typed";
import { MjolnirEvent } from "mjolnir.js"
@safeCustomElement("osl-map-layer")
export class OslMapLayer extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  getPosition?: (d: any) => number[] | number[];

  @property({ type: String })
  layer: "polygon" | "circle" | "point" /** I'm an idiot and duplicated this somewhere  */ | "text" | "line" = "polygon";

  @property({ type: String })
  geometryEncoding: string = "wkt";

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

  @property({ converter: interpretFuncJsonOrString })
  filled: boolean = true;

  @property({ converter: interpretFuncJsonOrString })
  stroked: boolean = false;

  // units scaling
  @property({ type: String })
  radiusUnits: "meters" | "pixels" = "meters";

  @property({ type: String })
  lineWidthUnits: "meters" | "pixels" = "meters";

  @property({ type: String })
  textSizeUnits: "meters" | "pixels" = "meters";

// scaling modifier
  @property({ type: Number })
  textSizeScale: number = 1;

  @property({ type: Number })
  pointRadiusScale: number = 1;

  @property({ type: Number })
  lineWidthScale: number = 1

  // static props
  @property({ type: Number })
  staticRadius?: number

  @property({ type: Number })
  staticLineWidth?: number

  @property({ type: Array })
  staticFill?: Array<number>

  @property({ type: Array })
  staticStroke?: Array<number>

  @property({ type: Array })
  staticTextColor?: Array<number>

// min/max pixels
  @property({ type: Number})
  pointRadiusMaxPixels?: number;
  
  @property({ type: Number})
  pointRadiusMinPixels?: number;

  @property({ type: Number })
  textSizeMinPixels: number = 1;

  @property({ type: Number })
  textSizeMaxPixels: number = 100;

  @property({ type: Number })
  lineWidthMinPixels: number = 1;

  @property({ type: Number })
  lineWidthMaxPixels: number = 40;

  // text props
  @property({ type: Number })
  textSize: number = 32;

  @property({ type: String })
  textColumn?: string;

  @property({ type: Array })
  textBorderColor?: Array<number>;
  
  @property({ type: Number })
  textBorderWidth: number = 1;

  @property({ type: Array })
  textBackgroundColor?: Array<number>;

  @property({ type: Array })
  textBackgroundPadding: Array<number> = [0,0]

  @property({ type: Array })
  textOffset: Array<number> = [0,0]

  @property({ type: Number})
  textMaxWidth: number = -1

  @property({ type: String })
  textAnchor: "start" | "middle" | "end" = "middle";

  @property({ type: Number })
  opacity: number = 1;

  @property({ converter: interpretFuncJsonOrString })
  isolatedValues: any[] = [];
  
  @property({ type: String })
  isolatedColor?: string;

  @property({ type: Boolean })
  fixed: boolean = false;

  tooltipFormatters: { [key: string]: ReturnType<typeof getFormatter> } = {};
  binBuilder?: BinBuilder;
  colorStops?: any;
  layerProps: Partial<GeoJsonLayer["props"]> = {
    pickable: true,
    filled: this.filled,
    stroked: this.stroked,
    onHover: this.handleMapHover.bind(this),
    onClick: this.handleMapClick.bind(this),
    visible: this.visible,
  };

  legendElements: any = [];
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
    if (entry === undefined || x === -1 || y === -1) {
      tooltipStore.tooltips[this.elementId] = {
        x: null,
        y: null,
        data: [],
      };
      return
    }

    let data: TooltipEntry["data"] = [];
    if (!entry) {
      // nada
    } else if (typeof this.tooltips == "function") {
      data = this.tooltips(entry);
    } else if (this.tooltips.length) {
      data = this.tooltips.map((tooltip) => {
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
  
  handleMapClick(pickingInfo: PickingInfo, _event: MjolnirEvent) {
    const { object } = pickingInfo || {};
    if (object?.properties) {
      this.handleChange(object.properties)
    }
  }

  handleMapHover(pickingInfo: PickingInfo, _event: MjolnirEvent) {
      const { x, y, object } = pickingInfo || {};
      const data = object?.properties || object;
      this.setTooltip(data, x || null, y || null);
  }

  getColorFunc(){
    switch (this.type) {
      case "continuous":
        return this.binBuilder?.generateContinuousColorFunc("RGB-Array");
        case "categorical":
          return this.binBuilder?.generateCategoricalColorFunc("RGB-Array");
        default:
        return (_: any) => [0, 0, 0];
    }
  }
  
  updateLayerProps(){
    const colorFunc = this.getColorFunc() as typeof this.layerProps.getFillColor;
    this.layerProps = {
      ...this.layerProps,
      id: this.elementId,
      visible: this.visible,
      // @ts-ignore for some reason not a valid prpoerty
      beforeId: this.beforeId || undefined,
      // @ts-ignore
      getLineColor: this.staticStroke || colorFunc || [0,0,0,255],
      // @ts-ignore
      getFillColor: this.staticFill || colorFunc || [0,0,0,255],
      getLineWidth: this.staticLineWidth || 1,
      filled: this.filled,
      stroked: this.stroked,
      pointRadiusMinPixels: this.pointRadiusMinPixels || 1,
      pointRadiusMaxPixels: this.pointRadiusMaxPixels || 100,
      lineWidthMinPixels: this.lineWidthMinPixels || 1,
      lineWidthMaxPixels: this.lineWidthMaxPixels || 40,
      lineWidthUnits: this.lineWidthUnits || "meters",
      lineWidthScale: this.lineWidthScale || 1,
      getPointRadius: this.staticRadius,
      pointRadiusUnits: this.radiusUnits || "meters",
      pointRadiusScale: this.pointRadiusScale || 1,
      opacity: this.opacity || 1,
    }


    switch (this.layer) {
      case "line": {
        break
      }
      case "circle":
      case "point": {
        const accessor = this.binBuilder?.accessor;
        const shouldScalePoints = (this.type !== "categorical" && this.staticRadius === undefined && accessor !== undefined)
        if (shouldScalePoints) {
          const scaleFunc =  (d: any) => {
            const value = accessor(d);
            return value;
          };
          // @ts-ignore
          this.layerProps.getPointRadius = scaleFunc;
        }
      }
    }
    if (this.textColumn !== undefined) {
      this.layerProps.getText = (d: any) => d.properties[this.textColumn!];
      this.layerProps.getTextAnchor = this.textAnchor
      this.layerProps.getTextSize = this.textSize || 32;
      this.layerProps.textSizeUnits = this.textSizeUnits || "meters";
      this.layerProps.textSizeScale = this.textSizeScale || 1;
      this.layerProps.textSizeMinPixels = this.textSizeMinPixels
      this.layerProps.textSizeMaxPixels = this.textSizeMaxPixels
      this.layerProps.pointType = 'circle+text'
      this.layerProps.getTextPixelOffset = this.textOffset
      this.layerProps.textMaxWidth = this.textMaxWidth
      // @ts-ignore
      this.layerProps.getTextColor = this.staticTextColor || colorFunc || [0,0,0,255];
      if (this.textBorderColor) {
        // @ts-ignore
        this.layerProps.textOutlineColor = this.textBorderColor
        this.layerProps.textOutlineWidth = this.textBorderWidth
        this.layerProps.textFontSettings = {
          sdf: true
        }
      } else if (this.textBackgroundColor) {
        this.layerProps.textBackground = true
        // @ts-ignore
        this.layerProps.getTextBackgroundColor = this.textBackgroundColor
        this.layerProps.textBackgroundPadding = this.textBackgroundPadding
        this.layerProps.textFontSettings = {
          sdf: true,
          buffer: 0,
          radius: 0
        }
      }
    }
  }

  // @ts-ignore expect error 4053 
  async public renderLayer(_data?: DataResult) {
    const data = _data || this.currentResults || [];
    this.layerProps.data = data
    if (this.dataColumn !== undefined) {
      const column = this.dataColumn;
      const accessor = (row: Record<string, any>) => row.properties?.[column];
      const shouldGenerateBins = Boolean(this.binBuilder) && this.binBuilder?.data !== data && data
      if (shouldGenerateBins) {
        await this.binBuilder!.ingestDataAndAccesor(data, accessor);
        this.legendElements = this.binBuilder!.getLegend();
      }
    }
    this.updateLayerProps()
    this.setLegend({
      title: this.legendTitle || this.dataColumn || 'Layer',
      visible: this.visible,
      elements: this.legendElements,
      staticFill: this.staticFill,
      staticStroke: this.staticStroke,
      type: this.type,
      hasText: Boolean(this.textColumn)
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
      (store) => store.datasets[this.data].statuses,
      () => this.updateLayer()
    );
    this.subscribe(
      (store) => store.datasets[this.data].parameters,
      () => this.updateLayer()
    );
    this.binBuilder = new BinBuilder({
      // @ts-ignore
      type: this.type,
      colorScheme: this.colorScheme,
      colorStops: this.colorStops,
      labels: this.labels,
      labelFormat: this.labelFormat,
      method: this.method,
      bins: this.bins,
      manualBreaks: this.manualBreaks,
      mapping: this.mapping,
      isolatedValues:this.isolatedValues,
      isolatedColor:this.isolatedColor
    });
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-layer": OslMapLayer;
  }
}
