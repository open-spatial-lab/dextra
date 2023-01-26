import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'
import { getWorker, PromisifyClass } from '../../utils/getWorker'
import {DextraWorker} from "../../../../dextra-utils/src/schemas/worker-schema";
import {DataSchema} from '../../../../dextra-utils/src/schemas/data-schema'

export class DextraElement extends LitElement {
  /**
   * The data schema
   */
  @property({type: Object})
  dataSchema: DataSchema = {
    type: "csv",
    url: "https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018)/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018).csv"
  }

  /**
   * The web worker that handles requests, analytics, and data view requests.
   */
  protected worker: PromisifyClass<DextraWorker> | null = null;
  
  /**
   * Whether or not the data has been initialized.
   */
  protected dataInitialized = false;

  constructor(){
    super();
    this.worker = null;
    this.init()
    // window.addEventListener("data-filter-update", e => console.log(e))
    window.addEventListener("data-filter-update", e => console.log(e))
  }

  protected async init() {
    const {api, worker} = await getWorker<DextraWorker>();
    // console.log(worker.ActualWorker.port.onmessage)
    this.worker = api;
    const loadedData = await api.loadData(this.dataSchema);
    if (loadedData) {
      this.dataInitialized = true;
    } else {
      throw new Error("Could not load data");
    }
    this.runAnalysis();
  }
  
  protected async runAnalysis() {}
}
