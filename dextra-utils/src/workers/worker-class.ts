// @ts-ignore
import { AnalysisSchema, ColumnSchema, DataSchema } from "../schemas/data-schema";
import { DextraWorker } from "../schemas/worker-schema";
import { load } from "@loaders.gl/core";

export class DataWorker extends DextraWorker {
  data: {[key: string]: any} = {};

  constructor() {
    super();
    this.data = {};
    console.log('data worker initialized')
  }

  async loadData(dataSchema: DataSchema) {
    if (this.data[dataSchema.url]) {
      return this.data[dataSchema.url];
    }

    switch (dataSchema.type) {
      case "csv":
        const loaders = await import("@loaders.gl/csv");
        const response = await load(dataSchema.url, loaders.CSVLoader, {csv: {dynamicTyping: true, header: true}});
        const length = response.length;
        const columns = Object.keys(response[0]);
        const data = columns.reduce((acc, cur, i) => {
            acc[i] = new Array(length);
            return acc;
        }, new Array(columns.length));
        
        for (let j = 0; j < columns.length; j++) {
            const col = columns[j];
            for (let i = 0; i < length; i++) {
                data[j][i] = response[i][col];
            }
        }
        this.data[dataSchema.url] = {
            data,
            columns,
        }
        return true
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