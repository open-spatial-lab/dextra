// @ts-ignore
import { AnalysisSchema, ColumnSchema, DataSchema } from "../schemas/data-schema";
import { DextraWorker } from "../schemas/worker-schema";
import { load } from "@loaders.gl/core";
import * as duckdb from '@duckdb/duckdb-wasm';
import { AsyncDuckDB } from "@duckdb/duckdb-wasm";

const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();

export class DataWorker extends DextraWorker {
  data: {[key: string]: any} = {};
  db: null | AsyncDuckDB;

  constructor() {
    super();
    this.data = {};
    this.db = null; 
    console.log('data worker initialized')
  }
  async initiDb() {
    if (!this.db) {
      const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
      const worker_url = URL.createObjectURL(
        new Blob([`importScripts("${bundle.mainWorker!}");`], {type: 'text/javascript'})
      );
      const worker = new Worker(worker_url);
      const logger = new duckdb.ConsoleLogger();
      const db = new duckdb.AsyncDuckDB(logger, worker);
      await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
      URL.revokeObjectURL(worker_url);
      this.db = db;
      return true
    } else {
        return true
    }
  }
  async loadData(dataSchema: DataSchema) {
    await this.initiDb();
    const db = this.db!;

    if (this.data[dataSchema.url]) {
      return this.data[dataSchema.url];
    }

    switch (dataSchema.type) {
      case "csv":
        const text = await fetch(dataSchema.url).then((res) => res.text());
        await db.registerFileText(dataSchema.url, text);
        const c = await db.connect();
        // ..., by specifying URLs in the SQL text
        const d = await c.query(`SELECT 'Year' FROM "${dataSchema.url}"`);
        console.log(d.data);
        // const loaders = await import("@loaders.gl/csv");
        // const response = await load(dataSchema.url, loaders.CSVLoader, {csv: {dynamicTyping: true, header: true}});
        // const length = response.length;
        // const columns = Object.keys(response[0]);
        // const data = columns.reduce((acc, cur, i) => {
        //     acc[i] = new Array(length);
        //     return acc;
        // }, new Array(columns.length));
        
        // for (let j = 0; j < columns.length; j++) {
        //     const col = columns[j];
        //     for (let i = 0; i < length; i++) {
        //         data[j][i] = response[i][col];
        //     }
        // }
        // this.data[dataSchema.url] = {
        //     data,
        //     columns,
        // }
        return false;
      default:
        return null;
    }
  }
  async runAnalysis(dataSchema: DataSchema, columnSchema: ColumnSchema, analysisSchema: AnalysisSchema) {
    const ss = await import('simple-statistics')
    const {data, columns} = this.data[dataSchema.url];
    const columnIndex = columns.indexOf(columnSchema.column);
    const columnData = data[columnIndex];
    this.emit()
    return ss[analysisSchema.type](columnData);
  }

  getTable(dataSchema: DataSchema) {
    return this.data[dataSchema.url];
  }

  emit(){
    const updateEvent = new Event("data-filter-update");
    self.dispatchEvent(updateEvent);
  }
}