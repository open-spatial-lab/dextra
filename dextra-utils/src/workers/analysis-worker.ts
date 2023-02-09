import { Analysis } from "../schemas/analysis";
import { expose } from "comlink";

const AnalysisWorker = new Analysis();

// @ts-ignore
onconnect = (e: MessageEvent) => expose(AnalysisWorker, e.ports[0]);
