import { proxy, subscribe } from "valtio/vanilla";
import { StateSchema } from "./types";
import { JSONLoader } from "@loaders.gl/json";
import { load } from "@loaders.gl/core";
import { CSVLoader } from "@loaders.gl/csv";

export const syncedMaps: { [key: string]: maplibregl.Map} = {};

export const initialState: StateSchema = {
  datasets: {}
};

export const store = proxy<StateSchema>(initialState);

const handleLoad = async (url: string) => {
  const filetype = url.split(".").pop();
  switch (filetype) {
    case "json":
      return await load(url, JSONLoader);
    case "dsv":
    case "tsv":
    case "csv":
      return await load(url, CSVLoader, { dynamicTyping: true });
    default:
      return await load(url, JSONLoader);
  }
};

const parseData = (data: Array<Record<string, unknown>>) => {
  const columns = Object.keys(data[0]);
  const parseRow = (row: Record<string, unknown>) => {
    for (let i = 0; i < columns.length; i++) {
      const key = columns[i];
      const value = row[key];
      if (typeof value === "string" && !isNaN(Number(value))) {
        row[key] = Number(value);
      } else if (typeof value === "string" && !isNaN(Date.parse(value))) {
        row[key] = new Date(value);
      }
    }
    return row;
  };
  return data.map(parseRow);
};

subscribe(store.datasets, async () => {
  const allDatasets = Object.keys(store.datasets);
  const fetchAllDatasets = allDatasets.map(async (key) => {
    const dataset = store.datasets[key];
    const currentParams = dataset.parameters;
    const currentParamString = JSON.stringify(currentParams);
    // todo add abort logic
    const shouldQuery = dataset.results[currentParamString] === undefined;
    if (shouldQuery) {
      const url = new URL(key);
      Object.entries(currentParams).forEach(([key, value]) => {
        url.searchParams.set(
          key,
          Array.isArray(value) ? value.join(",") : value.toString()
        );
      });
      try {
        const data = await handleLoad(url.toString());
        const parsedData = parseData(data);
        store.datasets[key].results[currentParamString] = parsedData;
      } catch (e) {
        console.error(e);
      }
    }
  });
  await Promise.all(fetchAllDatasets);
});

// // listen for all store updates and consle.log them
// subscribe(store, () => {
//   console.log(store);
// }
// );
