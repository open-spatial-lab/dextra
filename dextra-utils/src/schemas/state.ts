import { AsyncDuckDB } from "@duckdb/duckdb-wasm";
import { state, type ReadonlyStateVar } from "lit-shared-state";
import { PromisifyClass } from "../utils/getWorker";
import { Analysis } from "./analysis";

const DEBUG = false;

export type DataState = {
  [key: string]: Dataset;
};

export type Dataset = {
  columns?: string[];
  state: "loading" | "loaded";
} 

// State structure

const dbWorkerStatus = [undefined, 'loading', 'loaded', 'error'] as const

function observer(changed:Set<ReadonlyStateVar>) {
  for(let {key, value} of changed) {
      console.log('new value:', value, 'for', key);
      // console.log('window', window.db)
  }
}
@state({ observers: DEBUG ? [observer] : [] })
export class State {
  datasets: DataState = {};
  db: AsyncDuckDB | null = null;
  analysis: PromisifyClass<Analysis> | null = null;
  dbWorkerstatus: typeof dbWorkerStatus[number] = undefined;
}

export const globalState = new State();
