import { proxy, subscribe } from "valtio/vanilla";
import { DataResult, StateSchema, nonReactiveStoreSchema } from "./types";
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
export const nonReactiveStore: nonReactiveStoreSchema = {}

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
    const statuses = store.datasets[key].statuses;
    const currentParams = store.datasets[key].parameters;
    const currentParamString = JSON.stringify(currentParams);
    const currentControllerParamString = queryControllers[key]?.paramstring;
    const queryIsDuplicate = currentParamString === currentControllerParamString;
    const shouldQuery = statuses?.[currentParamString] === undefined && !queryIsDuplicate;
    if (shouldQuery) {
      statuses[currentParamString] = 'pending';
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
          nonReactiveStore[key][currentParamString] = data;
          statuses[currentParamString] = 'success';
          return 
        } catch (e) {
          console.error(e);
        }
      } 
      try {
        url.searchParams.set("format", "json");
        const data = await handleLoad(url.toString(), signal);
        const parsedData = parseData(data);
        nonReactiveStore[key][currentParamString] = parsedData;
        statuses[currentParamString] = 'success';
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
  geoId?: string,
  operation?: string
) => {
  
  const storeDataset = store.datasets[key];
  const statuses = storeDataset.statuses
  const currentParamString = JSON.stringify(storeDataset.parameters);
  const geoKey = `${currentParamString}/geo/${geoColumn}${operation ? `/${operation}`: ''}`
  const status = statuses[currentParamString];

  const dataset = nonReactiveStore[key];
  const currentResults = dataset[currentParamString]
  
  const shouldParse = status === "success" && statuses[geoKey] === undefined;

  if (shouldParse) {
    statuses[geoKey] = 'pending'
    // const t0 = performance.now()
    convertToGeojsonLike(
      key,
      currentResults as DataResult,
      geoType,
      geoColumn,
      geoId,
      operation
    ).then((geoData: any) => {
      dataset[geoKey] = geoData;
      statuses[geoKey] = 'success'
      // const t1 = performance.now()
      // console.log(`Geojson conversion took ${t1 - t0} milliseconds.`)
    })
  }
}

const parseGeoDatasets = async () => {
  const geoListeners = store.geoListeners;
  const allGeoListeners = geoListeners.map((listener) => {
    const { dataset, geoColumn, geoType, geoId, operation } = listener;
    return buildGeoPromise(dataset, geoColumn, geoType, geoId, operation);
  })
  await Promise.all(allGeoListeners);
}

subscribe(store.datasets, async () => {
  // const datasets = Object.keys(store.datasets)
  // console.log('PARAMETERS', JSON.stringify(datasets.map((dataset) => store.datasets[dataset].parameters)))
  // console.log('STATUSES', JSON.stringify(datasets.map((dataset) => store.datasets[dataset].statuses)))
  // console.log('DATA', JSON.stringify(datasets.map((dataset) => Object.keys(nonReactiveStore[dataset]))))
  const allDatasets = Object.keys(store.datasets);
  const fetchAllDatasets = allDatasets.map(buildDatasetPromise);
  await Promise.all(fetchAllDatasets).then(() => {
    parseGeoDatasets()
  }).then(() => {
    // console.log(store.geoListeners)
    // console.log(nonReactiveStore)
  })
});

subscribe(store.geoListeners, async () => {
  parseGeoDatasets().then(() => {
    // console.log(store.geoListeners)
    // console.log(nonReactiveStore)
  })
});
