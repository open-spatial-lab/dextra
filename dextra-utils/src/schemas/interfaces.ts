import * as ss from 'simple-statistics';

export type DataSchema = {
    type: "csv",
    url: string
} | {
    type: "json",
    url: string
} | {
    type: "tsv",
    url: string
} | null

export type ColumnSchema = {
    column: string,
    derive?: {
        operation: "sum" | "multiply" | "divide" | "subtract",
        value?: number,
        column?: ColumnSchema
    }
} | null

export type AnalysisSchema = {
    type: keyof typeof ss,
    kwargs?: Record<any, any>,
    derive?: {
        operation: "sum" | "multiply" | "divide" | "subtract",
        schema?: AnalysisSchema,
        value?: number,
        column?: ColumnSchema
    }
} | null