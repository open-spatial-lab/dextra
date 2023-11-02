import { proxy, subscribe } from "valtio/vanilla";
import { DataResult, StateSchema } from "./types";
import { JSONLoader } from "@loaders.gl/json";
import { load } from "@loaders.gl/core";
import { CSVLoader } from "@loaders.gl/csv";
import {unpack} from 'msgpackr/unpack';
import { convertToGeojsonLike } from "../utils/parseGeo";
// import * as Comlink from "comlink"
// const geoWorker = Comlink.wrap(new Worker("/osl-geo-worker.umd.cjs")) as any;


export const syncedMaps: { [key: string]: maplibregl.Map} = {};

export const initialState: StateSchema = {
  datasets: {},
  geoListeners: [],
  usingMsgPack: true
};

export const store = proxy<StateSchema>(initialState);

const handleLoad = async (url: string, signal: AbortSignal) => {
  const filetype = url.split(".").pop();
  switch (filetype) {
    case "json":
      return await load(url, JSONLoader, { fetch:{ signal } });
    case "dsv":
    case "tsv":
    case "csv":
      return await load(url, CSVLoader, { dynamicTyping: true, fetch:{ signal } });
    default:
      return await load(url, JSONLoader, {fetch:{ signal }});
  }
};

const datePatterns = [
  /^\d{4}-\d{2}-\d{2}$/,
  /^\d{4}-\d{2}$/,
  /^\d{2}\/\d{2}\/\d{4}$/,
  /^\d{2}\/\d{2}\/\d{2}$/,
];

const parseData = (data: Array<Record<string, unknown>>) => {
  const columns = Object.keys(data[0]);
  const parseRow = (row: Record<string, unknown>) => {
    for (let i = 0; i < columns.length; i++) {
      const key = columns[i];
      const value = row[key];
      if (typeof value === "string" && !isNaN(Number(value))) {
        row[key] = Number(value);
      } else if (typeof value === "string" && datePatterns.some((pattern) => pattern.test(value))) {
        row[key] = new Date(value);
      }
    }
    return row;
  };
  return data.map(parseRow);
};

let queryControllers: {
  [key: string]: {
    paramstring: string;
    controller: AbortController;
  };
} = {}

const buildDatasetPromise = async (key: string) => {
  // console.log('BUILDING PROMISE...', key)
    const dataset = store.datasets[key];
    const currentParams = dataset.parameters;
    const currentParamString = JSON.stringify(currentParams);
    const currentControllerParamString = queryControllers[key]?.paramstring;
    const queryIsDuplicate = currentParamString === currentControllerParamString;
    // todo add abort logic
    const shouldQuery = dataset.results[currentParamString] === undefined && !queryIsDuplicate;
    // const datasetId = JSON.stringify(key).split('/').pop();
    // console.log('DATASET PARAMS', datasetId, JSON.parse(JSON.stringify(currentParams)))
    if (shouldQuery) {
      queryControllers?.[key]?.controller?.abort();
      queryControllers[key] = {
        paramstring: currentParamString,
        controller: new AbortController()
      }
      const signal = queryControllers[key].controller.signal;
      const url = new URL(key);
      Object.entries(currentParams).forEach(([key, value]) => {
        url.searchParams.set(
          key,
          Array.isArray(value) ? value.join(",") : value.toString()
        );
      });
      if (store.usingMsgPack) {
        try {
          url.searchParams.set("format", "msgpack");
          const buffer = await fetch(url.toString(), { signal }
          ).then((res) => {
            return res.arrayBuffer()
          });
          // @ts-ignore
          const data = unpack(buffer);
          store.datasets[key].results[currentParamString] = data;
          return 
        } catch (e) {
          console.error(e);
        }
      } 
      try {
        url.searchParams.set("format", "json");
        const data = await handleLoad(url.toString(), signal);
        // console.log('data', data)
        const t0 = performance.now()
        const parsedData = parseData(data);
        console.log('parsed data in', performance.now() - t0, 'ms')
        store.datasets[key].results[currentParamString] = parsedData;
        store.usingMsgPack = false;
        return
      } catch (e) {
        console.error(e);
      }
    }
}

const buildGeoPromise = async (
  key: string,
  geoColumn: string,
  geoType: 'WKT' | 'WKB' | 'GeoJSON',
  geoId?: string
) => {
  const dataset = store.datasets[key];
  const currentParamString = JSON.stringify(dataset.parameters);
  const geoKey = `${currentParamString}/geo/${geoColumn}`
  const currentResults = dataset.results[currentParamString]
  const shouldParse = currentResults !== undefined && 
    dataset.results[geoKey] === undefined;
  if (shouldParse) {
    dataset['results'][geoKey] = 'pending'
    const t0 = performance.now()
    convertToGeojsonLike(
      key,
      currentResults as DataResult,
      geoType,
      geoColumn,
      geoId
    ).then((geoData: any) => {
      dataset['results'][geoKey] = geoData;
      const t1 = performance.now()
      console.log(`Geojson conversion took ${t1 - t0} milliseconds.`)
    })
  }
}

const parseGeoDatasets = async () => {
  const geoListeners = store.geoListeners;
  const allGeoListeners = geoListeners.map((listener) => {
    const { dataset, geoColumn, geoType, geoId } = listener;
    return buildGeoPromise(dataset, geoColumn, geoType, geoId);
  })
  await Promise.all(allGeoListeners);
}

subscribe(store.datasets, async () => {
  const allDatasets = Object.keys(store.datasets);
  console.log(store)
  const fetchAllDatasets = allDatasets.map(buildDatasetPromise);
  await Promise.all(fetchAllDatasets).then(() => {
    parseGeoDatasets()
  })
});

subscribe(store.geoListeners, async () => {
  parseGeoDatasets()
});
