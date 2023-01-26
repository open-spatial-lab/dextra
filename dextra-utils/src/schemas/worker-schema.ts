import { AnalysisSchema, ColumnSchema, DataSchema } from "./data-schema";
type DataTable = {
  [key: string]: {
    data: Array<Array<any>>;
    columns: string[];
  };
};
export abstract class DextraWorker {
  protected abstract data: DataTable;
  public abstract loadData(dataSchema: DataSchema): Promise<any>;
  public abstract runAnalysis(
    dataSchema: DataSchema,
    columnSchema: ColumnSchema,
    analysisSchema: AnalysisSchema
  ): any;
  public abstract getTable(dataSchema: DataSchema): DataTable;
}
