import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'
import { nanoid } from 'nanoid'
import { getWorker, PromisifyClass } from '../../utils/getWorker'
import {DextraWorker} from "../../../../dextra-utils/src/schemas/worker-schema";
import {DataSchema} from '../../../../dextra-utils/src/schemas/data-schema'

const onlyUnique = (value: any, index: number, self: any) => {
  return self.indexOf(value) === index;
}
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

  /**
   * The id of the element
   */
  protected id = nanoid();

  constructor(){
    super();
    this.worker = null;
    this.init()
  }
  protected async loadData() {
    if (!this.worker) {
      throw new Error("Worker not initialized");
    }
    const loadedData = await this.worker.loadData(this.dataSchema);
    if (loadedData) {
      this.dataInitialized = true;
    } else {
      throw new Error("Could not load data");
    }
    this.runAnalysis();
  }

  protected async initWorker() {
    if (this.worker == null) {
      const {api, worker} = await getWorker<DextraWorker>();
      window.workerInitialized = !!api;
      this.worker = api;
    }
    this.loadData();
  }

  protected async waitForWorker() {
    setTimeout(() => {
      if (window.workerInitialized) {
        this.initWorker();
      } else {
        this.waitForWorker();
      }
    }, 250);
  }

  protected async init() {
    const componentList = window?.intiializedComponents ? [...window.intiializedComponents, this.id] : [this.id];
    window.intiializedComponents = componentList.filter(onlyUnique);
    if (componentList.length === 1) {
      window.workerInitialized=false;
      this.initWorker()
    } else {
      this.waitForWorker();
    }
  }
  
  protected async runAnalysis() {}
}
