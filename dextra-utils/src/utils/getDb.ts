import * as duckdb from "@duckdb/duckdb-wasm";
import { AsyncDuckDB } from "@duckdb/duckdb-wasm";

const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();

export async function getDb(): Promise<AsyncDuckDB> {
  if (typeof window !== "undefined" && window.duckdbWorker !== undefined){
    // console.log('reusing duckdb from window', window)
    return window.duckdbWorker;
  }
  
  const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
  const worker_url = URL.createObjectURL(
    new Blob([`importScripts("${bundle.mainWorker!}");`], {
      type: "text/javascript",
    })
  );
  const worker = new Worker(worker_url);
  const logger = new duckdb.ConsoleLogger();
  const db = new duckdb.AsyncDuckDB(logger, worker);
  await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
  URL.revokeObjectURL(worker_url);
  return db;
}
