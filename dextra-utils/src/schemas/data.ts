import { AsyncDuckDB } from "@duckdb/duckdb-wasm";
import { type Table } from "apache-arrow";
import { Analysis, AnalysisClass } from "./analysis";
import { AnalysisSchema, ColumnSchema, DataSchema } from "./interfaces";
import {
  ANALYSIS_URL,
  getWorker,
  STATE_URL,
  type PromisifyClass,
} from "../utils/getWorker";
import { getDb } from "../utils/getDb";
import { Dataset, DataState, store } from "./state";

declare global {
  interface Window {
    duckdbWorker: AsyncDuckDB | undefined;
  }
}

export abstract class DataClass {
  protected abstract data: DataState;
  protected abstract db: AsyncDuckDB | null;
  protected abstract analysis: PromisifyClass<Analysis> | null;
  protected abstract init(
    analysisUrl?: string,
    stringUrl?: string
  ): Promise<AsyncDuckDB>;
  public abstract loadData(dataSchema: DataSchema): Promise<void>;
  public abstract getTable(dataSchema: DataSchema): Promise<{data: Array<any>, columns: Array<string>}>;
  public abstract query(sql: string): Promise<Table<any>>;
  public abstract runAnalysis(
    dataSchema: DataSchema,
    columnSchema: ColumnSchema,
    analysisSchema: AnalysisSchema
  ): Promise<any>;
}

export class Data extends DataClass {
  analysis: PromisifyClass<Analysis> | null = null;
  db: AsyncDuckDB | null = null;
  data: DataState = {};

  constructor() {
    super();
    this.init();
    store.on("setData", (state) => {
      this.data = state.data;
    })
  }

  async init() {
    const [analysis, db] = await Promise.all([
      getWorker<Analysis>(ANALYSIS_URL),
      getDb(),
    ]);
    this.analysis = analysis.api;
    this.db = db;
    typeof window !== "undefined" && (window.duckdbWorker = db);
    return db;
  }

  public async loadData(dataSchema: DataSchema) {
    const db = this.db!;
    if (this.data[dataSchema.url]) {
      return;
    }

    switch (dataSchema.type) {
      case "csv":
        const text = await fetch(dataSchema.url).then((res) => res.text());
        await db.registerFileText(dataSchema.url, text);
        const columns = await this.query(
          `SELECT * FROM "${dataSchema.url}" LIMIT 1`
        );
        if (!columns) {
          throw new Error("Could not load data");
        }
        const dataset = {
          // @ts-ignore
          columns: Object.keys(columns.get(0)),
          state: "loaded",
        } satisfies Dataset;
        
        store.dispatch("setData", {
          [dataSchema.url]: dataset,
        });

        break;
      default:
        break;
    }
  }

  // @ts-ignore
  public async query(sql: string) {
    const db = this.db!;
    const c = await db.connect();
    const result = await c.query(sql);
    c.close();
    return result;
  }

  public async getTable(dataSchema: DataSchema) {
    const dataInfo = this.data[dataSchema.url];
    if (!dataInfo) {
      await this.loadData(dataSchema);
    }
    const data = await this.query(`SELECT * FROM "${dataSchema.url}"`);

    return {
      data: data.toArray(),
      columns: dataInfo?.columns || []
    }
  }

  public async runAnalysis(
    dataSchema: DataSchema,
    columnSchema: ColumnSchema,
    analysisSchema: AnalysisSchema
  ) {
    const table = await this.query(`SELECT * FROM "${dataSchema.url}"`);
    const data = JSON.parse(JSON.stringify(table.toArray()));

    return await this.analysis!.runAnalysis(
      // @ts-ignore
      data,
      dataSchema,
      columnSchema,
      analysisSchema
    );
  }
}
