import { AsyncDuckDB } from "@duckdb/duckdb-wasm";
import { Table } from "apache-arrow";
import { AnalysisSchema, ColumnSchema, DataSchema } from "./interfaces";
import * as ss from "simple-statistics";

export abstract class AnalysisClass {
  public abstract runAnalysis(
    data: Array<Record<string, any>>,
    dataSchema: DataSchema,
    columnSchema: ColumnSchema,
    analysisSchema: AnalysisSchema
  ): any;
}

export class Analysis extends AnalysisClass {
  runAnalysis(
    data: Array<Record<string, any>>,
    dataSchema: DataSchema,
    columnSchema: ColumnSchema,
    analysisSchema: AnalysisSchema
  ) {
    console.log('running analysis...')
    const accessor = (row: number) => data?.[row]?.[columnSchema.column];
    const columnData = []
    // @ts-ignore
    for (let i = 0; i < data.length; i++) {
      columnData.push(accessor(i));
    }
    // @ts-ignore
    return ss[analysisSchema.type](columnData);
  }
}