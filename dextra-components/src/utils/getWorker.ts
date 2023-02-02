// @ts-ignore
import { wrap } from "comlink";
// @ts-ignore
import SharedWorker from "@okikio/sharedworker";
import { dextraState, actions } from "../components/core/dextra-state";
import nanoid from "nanoid";

// @ts-ignore
const WORKER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8765/dextra-worker.js"
    : "TODO: prod url";
// @ts-ignore
export const getWorker =
  process.env.NODE_ENV === "development" ? getWorkerDev : getWorkerProd;
let url = "";

export type PromisifyClass<T> = {
  [P in keyof T]: T[P] extends (...args: any) => any
    ? (...args: Parameters<T[P]>) => Promise<ReturnType<T[P]>>
    : T[P];
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const randomDelay = () => delay(1000 * Math.random());

export async function getWorkerProd<WorkerClass>() {
  await randomDelay();
  const worker = new SharedWorker(WORKER_URL);
  const api = wrap(worker.port);
  return { api: api as PromisifyClass<WorkerClass>, worker: worker };
}

export async function getWorkerDev<WorkerClass>() {
  await randomDelay();

  if (!url.length) {
    const code = await fetch(WORKER_URL).then((r) => r.text());
    const blob = new Blob([code], { type: "application/javascript" });
    url = URL.createObjectURL(blob);
  }
  const worker = new SharedWorker(url);
  const api = wrap(worker.port);
  return { api: api as PromisifyClass<WorkerClass>, worker: worker };
}
