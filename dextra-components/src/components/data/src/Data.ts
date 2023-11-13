import { html } from "lit-html";
import { property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { DataResult, StateSchema } from "../../core/state/types";
import { FormatterPresets } from "../../core/utils/numberFormatter";
import { colorSchemes } from "../../core/utils/color";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { utils } from "../../core/utils/utilsClass";
import { nonReactiveStore } from "../../core/state/Store";
export class OslData extends ValtioElement<StateSchema> {
  utils = utils;

  @property({ type: String })
  geoColumn: string = "";

  @property({ type: String })
  dataColumn?: string = "";

  @property({ type: String })
  geoType: "WKB" | "WKT" | "GeoJSON" = "WKT";

  @property({ type: String })
  geoId?: string;

  @property({ type: String })
  colorScheme?: keyof typeof colorSchemes = "RdPu";

  @property({ type: String })
  type: "categorical" | "continuous" | "ordinal" | "static" = "continuous";

  @property({ converter: interpretFuncJsonOrString })
  labels?: Array<string>;

  @property({ type: String })
  method?: "EQI" | "STD" | "APG" | "QNT" | "JNK";

  @property({ type: Number })
  bins: number = 5;

  @property({ converter: interpretFuncJsonOrString })
  manualBreaks?: number[];

  @property({ converter: interpretFuncJsonOrString })
  mapping?: {
    [key: string]: string;
  };
  
  @property({ type: String })
  option: string = "";

  @property({ type: Boolean })
  useGeojsonData = Boolean(this.geoType && this.geoColumn);

  @property({ type: String })
  data = "";

  @property({ type: Array })
  currentResults: DataResult | Array<GeoJSON.Feature> = [];

  @property({ type: String })
  status = "pending";

  @property({ type: String })
  currentParametersHash = "";

  @property({ type: String })
  labelFormat: FormatterPresets = "nice";

  @property({ type: String })
  legendTitle?: string;

  @property({ converter: interpretFuncJsonOrString })
  onInteractDataset?: string | string[]; 

  @property({ type: String })
  onInteractProperty?: string = ""

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

  @property({ type: Boolean })
  isReady = false;

  protected syncDataFromStore(data: string, useGeojsonData?: boolean) {
    const statuses = this.store.datasets[data].statuses;
    const parametersHash = JSON.stringify(this.store.datasets[data].parameters);
    const currentParametersHash = useGeojsonData
      ? `${parametersHash}/geo/${this.geoColumn}`
      : parametersHash;
    const currentStatus = statuses?.[currentParametersHash];
    if (currentStatus === "success" && this.currentParametersHash !== currentParametersHash) {
      this.currentResults = nonReactiveStore[data][currentParametersHash];
      this.currentParametersHash = currentParametersHash;
      this.isReady = true;
    } else if (currentStatus !== "success" ){
      this.isReady = false;
    }
  }

  protected initDataset(data: string, useGeojsonData?: boolean) {
    if (!data) return;

    if (!this.store.datasets[data] && data !== "") {
      this.store.datasets[data] = {
        parameters: {},
        statuses: {}
      };
      nonReactiveStore[data] = {};
    } else {
      this.syncDataFromStore(data, useGeojsonData);
    }

    this.subscribe(
      (store) => store.datasets[data].statuses,
      () => this.syncDataFromStore(data, useGeojsonData)
    );

    this.subscribe(
      (store) => store.datasets[data].parameters,
      () => this.syncDataFromStore(data, useGeojsonData)
    );
  }

  protected eventValueAccessor(feature: any) {
    if (!this.onInteractProperty) return;
    return feature[this.onInteractProperty]
  }

  protected handleChange(event: Event) {
    if (!this.onInteractDataset || !this.option || !this.onInteractProperty) return;
    const value = this.eventValueAccessor(event);
    const datasets = Array.isArray(this.onInteractDataset) ? this.onInteractDataset : [this.onInteractDataset];
    datasets.forEach((dataset) => {
      this.store.datasets[dataset].parameters[this.option] = value;
    })
  }

  connectedCallback() {
    super.connectedCallback();
    const useGeojsonData = Boolean(this.geoType && this.geoColumn);
    this.data && this.initDataset(this.data, useGeojsonData);
    const shouldRegister =
      useGeojsonData &&
      !this.store.geoListeners.find(
        (listener) =>
          listener.geoColumn === this.geoColumn &&
          listener.geoType === this.geoType &&
          listener.dataset === this.data
      );
    if (shouldRegister) {
      this.store.geoListeners.push({
        geoColumn: this.geoColumn,
        geoType: this.geoType,
        geoId: this.geoId,
        dataset: this.data,
      });
    }
  }

  template() {
    return html`<pre>
${JSON.stringify(this.currentResults || [], null, 2)}</pre
    >`;
  }

  preloader() {
    if (this.isReady) {
      return html``;
    }
    return html`
      <div
        style="position:absolute;width:100%;height:100%;background:rgba(255,255,255,0.75);z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center"
      >
        ${super.preloader()}
      </div>
    `;
  }

  render() {
    return html`
      <sp-theme scale="" color="light" style="height:100%; width:100%;">
        ${this.preloader()} ${this.template()}
      </sp-theme>
    `;
  }
}
