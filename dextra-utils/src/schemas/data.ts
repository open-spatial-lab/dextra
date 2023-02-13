// import { AsyncDuckDB } from "@duckdb/duckdb-wasm";
// import { type Table } from "apache-arrow";
// import { Analysis, AnalysisClass } from "./analysis";
// import { AnalysisSchema, ColumnSchema, DataSchema } from "./interfaces";
// import {
//   ANALYSIS_URL,
//   getWorker,
//   STATE_URL,
//   type PromisifyClass,
// } from "../utils/getWorker";
// import { getDb } from "../utils/getDb";
// import { Dataset, DataState } from "./state";

// declare global {
//   interface Window {
//     duckdbWorker: AsyncDuckDB | undefined;
//   }
// }

// export abstract class DataClass {
//   protected abstract db: AsyncDuckDB | null;
//   protected abstract analysis: PromisifyClass<Analysis> | null;
//   protected abstract init(db?: AsyncDuckDB | null): Promise<AsyncDuckDB>;
//   public abstract loadData(db: AsyncDuckDB, dataSchema: DataSchema): Promise<Dataset | void>;
//   public abstract getTable(dataInfo: Dataset, dataSchema: DataSchema): Promise<{ data: Array<any>, dataset: Dataset }>;
//   public abstract query(sql: string): Promise<Table<any>>;
//   public abstract runAnalysis(
//     dataSchema: DataSchema,
//     columnSchema: ColumnSchema,
//     analysisSchema: AnalysisSchema
//   ): Promise<any>;
// }

// export class Data extends DataClass {
//   analysis: PromisifyClass<Analysis> | null = null;

//   constructor() {
//     super();
//   }

//   async init(db?: AsyncDuckDB | null) {
//     const [analysis, duckDb] = await Promise.all([
//       getWorker<Analysis>(ANALYSIS_URL),
//       db || getDb(),
//     ]);
//     this.analysis = analysis.api;
//     return duckDb;
//   }

//   public async loadData(db: AsyncDuckDB, dataSchema: DataSchema) {

//     switch (dataSchema.type) {
//       case "csv":
//         const text = await fetch(dataSchema.url).then((res) => res.text());
//         await db.registerFileText(dataSchema.url, text);
//         const columns = await this.query(
//           db,
//           `SELECT * FROM "${dataSchema.url}" LIMIT 1`
//         );
//         if (!columns) {
//           throw new Error("Could not load data");
//         }
//         return {
//           // @ts-ignore
//           columns: Object.keys(columns.get(0)),
//           state: "loaded",
//         } satisfies Dataset;

//       default:
//         break;
//     }
//   }

//   // @ts-ignore
//   public async query(db: AsyncDuckDB, sql: string) {
//     const c = await db.connect();
//     const result = await c.query(sql);
//     c.close();
//     return result;
//   }

//   public async getTable(db: AsyncDuckDB, dataInfo: Dataset, dataSchema: DataSchema) {
//     const dataset = !dataInfo
//       ? await this.loadData(db, dataSchema)
//       : dataInfo

//     if (!dataset) {
//       throw new Error("Could not load data");
//     }

//     const data = await this.query(db, `SELECT * FROM "${dataSchema.url}"`);

//     return {
//       data: data.toArray(),
//       dataset
//     }
//   }

//   public async runAnalysis(
//     db: AsyncDuckDB,
//     dataSchema: DataSchema,
//     columnSchema: ColumnSchema,
//     analysisSchema: AnalysisSchema
//   ) {
//     const table = await this.query(db, `SELECT * FROM "${dataSchema.url}"`);
//     const data = JSON.parse(JSON.stringify(table.toArray()));

//     return await this.analysis!.runAnalysis(
//       // @ts-ignore
//       data,
//       dataSchema,
//       columnSchema,
//       analysisSchema
//     );
//   }
// }
