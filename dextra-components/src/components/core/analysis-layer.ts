import { PropertyValueMap } from "lit";
import { property } from "lit/decorators.js";
import {
  AnalysisSchema,
  ColumnSchema,
} from "../../../../dextra-utils/src/schemas/interfaces";
import { DataLayer } from "./worker-data-layer";

const sqlHelpers = {
  sum: (column: string, table: string) =>
    `SELECT SUM("${column}") FROM "${table}" as 'result'`,
  stddev: (column: string, table: string) =>
    `SELECT STDEV("${column}") FROM "${table}"`,
  min: (column: string, table: string) =>
    `SELECT MIN("${column}") FROM "${table}"`,
  max: (column: string, table: string) =>
    `SELECT MAX("${column}") FROM "${table}"`,
  mode: (column: string, table: string) =>
    `SELECT mode() WITHIN GROUP (ORDER BY "${column}") as 'result'
      FROM "${table}"`,
  percentile: (
    column: string,
    table: string,
    kwargs: { percentile?: number }
  ) =>
    `SELECT 
        percentile_cont(${
          kwargs.percentile || 0.5
        }) WITHIN GROUP (ORDER BY "${column}") AS 'result'
        FROM "${table}"`,
  mean: (column: string, table: string) =>
    `SELECT AVG("${column}") FROM "${table}"`,
  median: (column: string, table: string) =>
    `SELECT 
          percentile_cont(0.5) WITHIN GROUP (ORDER BY "${column}") AS 'result'
          FROM "${table}"`,
} as const;

export abstract class AnalysisClass extends DataLayer {
  protected abstract shouldRunAnalysis: boolean;
  protected abstract columnSchema: ColumnSchema;
  protected abstract analysisSchema: AnalysisSchema;

  public abstract runAnalysis(): Promise<any>;
}

export class AnalysisLayer extends AnalysisClass {
  @property({ type: Boolean })
  protected shouldRunAnalysis: boolean = true;

  /**
   * Schema for column to access
   */
  @property({ type: Object })
  columnSchema: ColumnSchema = {
    column: "Capital city population (UN Urbanization Prospects, 2018)",
  };

  /**
   * Schema for analysis to run
   */
  @property({ type: Object })
  analysisSchema: AnalysisSchema = {
    type: "max",
  };

  @property({ type: Object })
  result: any = null;

  protected hasRunAnalysis = false;

  protected updateTriggers: Array<keyof AnalysisLayer | string> = [
    "dataSchema",
    "columnSchema",
    "analysisSchema",
  ];

  public async runAnalysis() {
    if (!this.shouldRunAnalysis) return;
    const [analysisType, columnSchema, dataUrl] = [
      this?.analysisSchema?.type,
      this?.columnSchema?.column,
      this?.dataSchema?.url,
    ];
    const [hasAnalysisType, hasColumnSchema, hasDataSchema] = [
      Boolean(analysisType),
      Boolean(columnSchema),
      Boolean(dataUrl),
    ];
    if (!hasAnalysisType || !hasColumnSchema || !hasDataSchema) return;
    if (analysisType && sqlHelpers.hasOwnProperty(analysisType)) {
      const query = sqlHelpers[analysisType as keyof typeof sqlHelpers](
        columnSchema!,
        dataUrl!,
        this.analysisSchema!.kwargs || {}
      );
      try {
        const result = await this.query(query);
        const tableResult = result.toArray();
        const keys = Object.keys(tableResult[0]);
        const isSummaryStat = tableResult.length === 1 && keys.length === 1;
        this.result = isSummaryStat
          ? tableResult[0][Object.keys(tableResult[0])[0]]
          : tableResult;
      } catch (e) {
        console.error("Error running analysis", e);
        // @ts-ignore
        this.result = e.toString();
      }
    } else {
      const table = await this.query(`SELECT * FROM "${dataUrl}"`);
      const data = JSON.parse(JSON.stringify(table.toArray())) as Array<
        Record<any, any>
      >;

      this.result = await this.analyst().runAnalysis(
        data,
        this.dataSchema,
        this.columnSchema,
        this.analysisSchema
      );
    }
  }

  protected performUpdate(): void | Promise<unknown> {
    if (this.isInitialized && !this.hasRunAnalysis) {
      this.runAnalysis();
      this.hasRunAnalysis = true;
    }
    return super.performUpdate();
  }

  protected willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const dbActiveButNotAnalysis = this.store.db && !this.hasRunAnalysis;
    const updateTriggered =
      this.isInitialized &&
      this.updateTriggers.some((trigger) => _changedProperties.has(trigger));
    if (dbActiveButNotAnalysis || updateTriggered) {
      this.runAnalysis();
    }
    super.willUpdate(_changedProperties);
  }
}
