import { Worker } from "./worker-class";
import { expose } from "comlink";

const AnalysisWorker = new Worker();

// @ts-ignore
onconnect = (e: MessageEvent) => expose(AnalysisWorker, e.ports[0]);
