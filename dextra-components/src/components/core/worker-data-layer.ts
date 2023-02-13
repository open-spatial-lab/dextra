import { AsyncDuckDB } from "@duckdb/duckdb-wasm";
import { LitElement } from "lit";
import { use as sharedState } from "lit-shared-state";
import { property } from "lit/decorators.js";
import { nanoid } from "nanoid";
import { type Table } from "apache-arrow";
import { type RowLike, type IterableArrayLike } from "apache-arrow/type";
import { Analysis } from "../../../../dextra-utils/src/schemas/analysis";
import { DataSchema } from "../../../../dextra-utils/src/schemas/interfaces";
import { State, globalState, Dataset } from "../../../../dextra-utils/src/schemas/state";
import { getDb } from "../../../../dextra-utils/src/utils/getDb";
import { ANALYSIS_URL, getWorker } from "../../../../dextra-utils/src/utils/getWorker";

abstract class DataClass extends LitElement {
  protected abstract store: State;
  protected abstract dataSchema: DataSchema;
  protected abstract db(): AsyncDuckDB | null;
  protected abstract analyst(): Analysis | null;
  protected abstract init(): Promise<void>;
  protected abstract loadData(): Promise<Dataset | void>;
  protected abstract getTable(): Promise<{ data: IterableArrayLike<RowLike<any>>, dataset: Dataset }>;
  protected abstract query(sql: string): Promise<Table<any>>;
}

export class DataLayer extends DataClass {
  // ACCESSORS AND ATTRIBUTES
  /**
   * The data schema
   */
  @property({ type: Object })
  dataSchema: DataSchema = {
    type: "csv",
    url: "https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018)/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018).csv",
  };

  /**
   * The id of the element
   */
  public id = nanoid();

  /**
   * The data store shared by all instances of this class
   */
  @sharedState()
  protected store: State = globalState;

  /**
   * Whether data and the worker are initialized
   */
  @property({ type: Boolean })
  protected isInitialized = false;

  
  /**
   * The duckdb instance
   */
  db() {
    return this.store.db;
  }

  analyst() {
    return this.store.analysis!;
  }

  // INITIALIZATION

  constructor() {
    super();
    this.init();
  }

  protected async init() {
    if (this.store.dbWorkerstatus === undefined) {
      this.store.dbWorkerstatus = "loading";
      const [analysis, duckDb] = await Promise.all([
        getWorker<Analysis>(ANALYSIS_URL),
        this.db() || getDb(),
      ]);
      this.store.dbWorkerstatus = "loaded";
      this.store.analysis = analysis.api;
      this.store.db = duckDb;
    }
  }

  // DATA AND QUERY METHODS

  // @ts-ignore 
  protected async query(sql: string): Promise<Table<any>> {
    const db = this.db()!;
    const c = await db.connect();
    const result = await c.query(sql);
    c.close();
    // @ts-ignore
    return result;
  }

  protected async loadData() {
    if (this.store.datasets[this.dataSchema.url]) {
      return;
    }

    this.store.datasets[this.dataSchema.url] = {
      state: "loading",
    }

    const db = this.db()!;

    let dataLoadResult = null;
    switch (this.dataSchema.type) {
      case "csv":
        const text = await fetch(this.dataSchema.url).then((res) => res.text());
        await db.registerFileText(this.dataSchema.url, text);
        const columns = await this.query(
          `SELECT * FROM "${this.dataSchema.url}" LIMIT 1`
        );
        if (!columns) {
          throw new Error("Could not load data");
        }
        dataLoadResult = {
          // @ts-ignore
          columns: Object.keys(columns.get(0)),
          state: "loaded",
        } satisfies Dataset;
        break;
      default:
        break;
    }

    if (dataLoadResult) {
      this.store.datasets = {
        ...this.store.datasets,
        [this.dataSchema.url]: dataLoadResult
      };
    }
    console.log('loaded data', this.store.datasets[this.dataSchema.url])
  }
  protected async getTable() {
    if (!this.store.datasets[this.dataSchema.url]) {
      await this.loadData();
    }
    const dataset = this.store.datasets[this.dataSchema.url];

    if (!dataset) {
      throw new Error("Could not load data");
    }

    const data = await this.query(`SELECT * FROM "${this.dataSchema.url}"`);

    return {
      data: data.toArray(),
      dataset
    }
  }

  // LIT LIFECYCLE METHODS

  protected dataLayerUpdate() {
    if (this.isInitialized) {
      return;
    }

    if (!this.db()) {
      this.init();
      return;
    }
    if (!this.store.datasets[this.dataSchema.url]) {
      this.loadData();
      return;
    }
    this.isInitialized = true;
  }

  protected performUpdate(): void | Promise<unknown> {
    this.dataLayerUpdate();
    return super.performUpdate();
  }
}
