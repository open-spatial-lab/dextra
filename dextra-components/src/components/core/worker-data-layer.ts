import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { nanoid } from "nanoid";
import { Data } from "../../../../dextra-utils/src/schemas/data";
import { DataSchema } from "../../../../dextra-utils/src/schemas/interfaces";
import { store } from "../../../../dextra-utils/src/schemas/state";

declare global {
  interface Window {
    workerStatus: string | undefined;
  }
}

export class WorkerDataLayer extends LitElement {
  /**
   * The data schema
   */
  @property({ type: Object })
  dataSchema: DataSchema = {
    type: "csv",
    url: "https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018)/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018).csv",
  };

  /**
   * Whether or not the data has been initialized.
   */
  protected dataInitialized = false;

  /**
   * The id of the element
   */
  public id = nanoid();

  protected analyst: null | Data = null;

  constructor() {
    super();
  }

  protected async initData() {
    if (this.analyst !== null) return;
    this.analyst = new Data()
    await this.analyst.init();
    if (this.analyst.dbState === 'loading') {
      store.dispatch("setDb", "loaded");
    }
    await this.analyst.loadData(this.dataSchema);
  }

  protected async waitForWorker() {
    store.on("setDb", (state) => {
      if (state.db === "loaded") {
        console.log('got the db boss')
        this.initData();
      }
    })
  }

  protected async init() {
    // console.log(this.id, window.workerStatus)
    switch (this.analyst?.dbState) {
      // @ts-ignore intentional fallthrough case
      case undefined:
        store.dispatch("setDb", "loading");
      case "loaded":
        await this.initData();
        break;
      case "loading":
        this.waitForWorker();
        break;
    }
  }
}
