import { html } from "lit-html";
import { property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { DataResult, StateSchema } from "../../core/state/types";
import { Buffer } from "buffer";
// @ts-ignore
import { Geometry } from "@pieterprovoost/wkx";
import { FormatterPresets } from "../../core/utils/numberFormatter";
import { colorSchemes } from "../../core/utils/color";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { utils } from "../../core/utils/utilsClass";

const GEOM_CACHE: Record<string, GeoJSON.Geometry> = {};

const geomParsers = {
  WKT: (geoColumn: string) => (row: Record<string, unknown>) =>
    Geometry.parse(row[geoColumn]).toGeoJSON(),
  WKB: (geoColumn: string) => (row: Record<string, unknown>) => {
    if (!row[geoColumn]) console.warn("No geometry found in row", row)
    return Geometry._parseWkb(
      Buffer.from(row[geoColumn] as any, "hex")
      ).toGeoJSON() as GeoJSON.Geometry
  },
  GeoJSON: (geoColumn: string) => (row: Record<string, unknown>) => {
    const v = row[geoColumn]
    return typeof v === 'string' ? JSON.parse(v) as GeoJSON.Geometry : v as GeoJSON.Geometry
  }
    
} as const;

const buildGeomFunction = (
  geoType: "WKB" | "WKT" | "GeoJSON",
  geoColumn: string,
  id?: string
) => {
  const geomParser = geomParsers[geoType](geoColumn);
  if (id) {
    return (row: Record<string, unknown>) => {
      const rowId = row[id] as string;
      if (!GEOM_CACHE[rowId]) {
        GEOM_CACHE[rowId] = geomParser(row);
      }
      return GEOM_CACHE[rowId];
    };
  } else {
    return (row: Record<string, unknown>) => geomParser(row);
  }
};

const NULL_GEOM: never[] = [];
export class OslData extends ValtioElement<StateSchema>{
  utils = utils;

  @property({ type: String })
  geoColumn: string = "";

  @property({ type: String})
  dataColumn?: string = ""

  @property({ type: String })
  geoType: "WKB" | "WKT" | "GeoJSON" = "WKT";

  @property({ type: String })
  geoId?: string;

  @property({type: String})
  colorScheme?: keyof typeof colorSchemes = "RdPu";

  @property({type: String})
  type: 'categorical' | 'continuous' | 'ordinal' = 'continuous';

  @property({converter: interpretFuncJsonOrString})
  labels?: Array<string>

  @property({type: String})
  method?: "EQI" | "STD" | "APG" | "QNT" | "JNK";

  @property({type:Number})
  bins: number = 5;

  @property({converter: interpretFuncJsonOrString})
  manualBreaks?: number[]

  @property({converter: interpretFuncJsonOrString})
  mapping?: {
    [key: string]: string
  }
  // inner

  @property({ type: Boolean })
  useGeojsonData = Boolean(this.geoType && this.geoColumn);

  @property({ type: String })
  data = "";

  @property({ type: Array })
  currentResults: DataResult | Array<GeoJSON.Feature> = [];

  @property({ type: String })
  status = "loading";

  @property({ type: String })
  currentParametersHash = "{}";

  @property({ type: String })
  labelFormat: FormatterPresets = "nice";

  @property({ type: String })
  legendTitle?: string;

  protected async convertToGeojsonLike(
    results: Array<Record<string, unknown>>
  ): Promise<Array<GeoJSON.Feature>> {
    const { geoType, geoColumn, geoId } = this;
    const geomParser = buildGeomFunction(geoType, geoColumn, geoId);
    const nullGeomFilter = (row: Record<string, unknown>) => (
      row[geoColumn] !== null && row[geoColumn] !== undefined
    )
      
    const parseRow = (row: Record<string, unknown>) =>
      ({
        type: "Feature",
        geometry: geomParser(row),
        properties: row,
      } as GeoJSON.Feature);
    const out = []
    for (const row of results) {
      nullGeomFilter(row) && out.push(parseRow(row))
    }
    return out;
  }

  protected getDeepValue(obj: Record<string, any>, path: string) {
    const pathParts = path.split(".");
    let tempObj = obj;
    while (pathParts.length) {
      const part = pathParts.shift();
      if (!part) break;
      tempObj = tempObj[part];
    }
    return tempObj;
  }

  protected syncDataFromStore(data: string, useGeojsonData?: boolean) {
    const results = this.store.datasets[data].results;
    const currentParametersHash = JSON.stringify(
      this.store.datasets[data].parameters
    );
    const currentResults = results[currentParametersHash];
    if (
      !currentResults ||
      currentResults === "pending" ||
      (Array.isArray(currentResults) && !currentResults?.length)
    ) {
      return;
    }
    if (useGeojsonData) {
      const geoResultsHash = currentParametersHash + "_geo";
      if (results[geoResultsHash] === undefined) {
        this.store.datasets[data].results[geoResultsHash] = "pending";
        this.convertToGeojsonLike(currentResults as DataResult).then(
          (geoResults) => {
            this.store.datasets[data].results[geoResultsHash] = geoResults;
            this.currentResults = geoResults;
            this.currentParametersHash = geoResultsHash;
            this.requestUpdate();
          }
        );
      } else {
        const geoResults = this.store.datasets[data].results[geoResultsHash];
        if (geoResults !== "pending") {
          this.currentResults = geoResults;
          this.currentParametersHash = geoResultsHash;
        }
      }
    } else {
      this.currentResults = currentResults;
      this.currentParametersHash = currentParametersHash;
    }
  }

  protected initDataset(data: string, useGeojsonData?: boolean) {
    if (!data) return;

    if (!this.store.datasets[data] && data !== "") {
      this.store.datasets[data] = {
        parameters: {},
        headless: true,
        results: {},
        status: "loading",
      };
    } else {
      this.syncDataFromStore(data, useGeojsonData);
    }

    this.subscribe(
      (store) => store.datasets[data].results,
      () => this.syncDataFromStore(data, useGeojsonData)
    );

    this.subscribe(
      (store) => store.datasets[data].parameters,
      () => this.syncDataFromStore(data, useGeojsonData)
    );
  }

  connectedCallback() {
    super.connectedCallback();
    const useGeojsonData = Boolean(this.geoType && this.geoColumn);
    this.data && this.initDataset(this.data, useGeojsonData);
  }

  template() {
    if (this.currentResults) {
      return html`<pre>${JSON.stringify(this.currentResults, null, 2)}</pre>`;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
