import { wrap } from "comlink";
import SharedWorker from "@okikio/sharedworker";

export const ANALYSIS_URL =
  process.env.NODE_ENV === "development"
    ? window.location.origin + "/analysis-worker.js"
    : "TODO: prod url";

export const STATE_URL =
  process.env.NODE_ENV === "development"
    ? window.location.origin + "/state-worker.js"
    : "TODO: prod url";

export type PromisifyClass<T> = {
  [P in keyof T]: T[P] extends (...args: any) => any
    ? (...args: Parameters<T[P]>) => Promise<ReturnType<T[P]>>
    : T[P];
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const randomDelay = () => delay(1000 * Math.random());

export async function getWorker<WorkerClass>(url: string) {
  await randomDelay();
  const worker = new SharedWorker(url);
  const api = wrap(worker.port);
  return {
    api: api as PromisifyClass<WorkerClass>,
    worker: worker,
  };
}
