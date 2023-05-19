import { customElement, property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import { ScatterplotLayer, PolygonLayer } from "@deck.gl/layers/typed";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
// @ts-ignore
import { parse as parseWkt } from "wkt";
import { html } from "lit-html";
const LayerTypes = {
  scatter: ScatterplotLayer,
  polygon: PolygonLayer,
  // 'geojson': GeoJSONLayer,
};

const formatter = new Intl.NumberFormat("en-US", {
  // style: 'decimal',
  // minimumFractionDigits: 2,
  // maximumFractionDigits: 2,
});

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
@customElement("osl-map-layer")
export class OslMapLayer extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  getPosition?: (d: any) => number[] | number[];

  @property({ converter: interpretFuncJsonOrString })
  fillColor?: Array<number> | ((row: any) => Array<number>);

  @property({ type: String })
  geometryEncoding: string = "wkt";

  @property({ converter: interpretFuncJsonOrString })
  getPolygon?: (d: any) => any;

  @property({ type: String })
  choroplethColumn?: string;

  @property({ converter: interpretFuncJsonOrString })
  choroplethColorScale?: string | Array<Array<number>> = DEFAULT_QUINTILE_SCALE;

  colorStops?: any;

  // @ts-ignore
  public get isMapLayer() {
    return true;
  }

  public get map(): maplibregl.Map | undefined {
    // @ts-ignore
    return this?.parentNode?.map;
  }
  public get deck(): DeckOverlay | undefined {
    // @ts-ignore
    return this?.parentNode?.deck;
  }

  @property({ type: String })
  layer: keyof typeof LayerTypes = "scatter";

  public get renderLayer() {
    const id = this.elementId;
    const L = LayerTypes[this.layer];
    let colorFunc =
      typeof this.fillColor === "function"
        ? this.fillColor
        : () => this.fillColor;
    if (this.choroplethColumn) {
      const column = this.choroplethColumn!;
      const colorScale = this.choroplethColorScale!;
      const accessor = (row: any) => row[column];
      const values = this.currentResults.map(accessor);
      const sorted = values.sort((a: any, b: any) => a - b);
      const quantiles = [0.2, 0.4, 0.6, 0.8, 0.99].map(
        (q) => sorted[Math.floor(q * sorted.length)]
      );
      this.colorStops = quantiles.map((q, i) => ({
        value: `${formatter.format(q)} to ${
          quantiles[i + 1] === undefined
            ? formatter.format(sorted[sorted.length - 1])
            : formatter.format(quantiles[i + 1])
        }`,
        color: colorScale[i],
      }));

      // @ts-ignore
      colorFunc = (row: any) => {
        const value = accessor(row);
        const index = quantiles.findIndex((q) => value <= q);
        if (!colorScale[index]) {
          return colorScale[colorScale.length - 1];
        }
        return colorScale[index];
      };
    }
    return new L({
      id,
      data: this.currentResults,
      // @ts-ignore
      getPosition: this.getPosition,
      filled: true,
      stroked: true,
      getPolygon: (row) => {
        const geom = this.getPolygon?.(row);
        if (!geom) {
          return NULL_GEOM;
        }
        let parsedGeom = NULL_GEOM;
        switch (this.geometryEncoding) {
          case "wkt":
            parsedGeom = parseWkt(geom).coordinates;
            break;
          default:
            parsedGeom = geom;
        }
        if (typeof parsedGeom[0][0] === "number") {
          return parsedGeom as any;
        } else {
          return parsedGeom[0] as any;
        }
        return parsedGeom;
      },
      // @ts-ignore
      getFillColor: colorFunc,
      getRadius: 1,
      radiusMinPixels: 10,
      beforeId: "countries-label",
    });
  }

  updateLayer() {
    this.deck?.setProps({
      layers: [this.renderLayer],
    });
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
    if (this.colorStops) {
      return html`
        <div
          style="position:absolute;right:0;bottom:0;z-index:50;background:white;padding:0.25rem;"
        >
          <h3 style="margin:0">Legend</h3>
          ${this.colorStops.map(
            (stop: any) => html`
              <div style="display:flex;align-items:center;">
                <div
                  style="width:1rem;height:1rem;background:rgb(${stop.color.join(
                    ","
                  )});margin-right:0.5rem;"
                ></div>
                <div>${stop.value}</div>
              </div>
            `
          )}
        </div>
      `;
    }
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-layer": OslMapLayer;
  }
}
