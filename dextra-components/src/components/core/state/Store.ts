import { proxy, subscribe } from "valtio/vanilla";
import { StateSchema } from "./types";
import {JSONLoader} from '@loaders.gl/json';
import {load} from '@loaders.gl/core';
import { CSVLoader } from "@loaders.gl/csv";

export const initialState: StateSchema = {
  datasets: {},
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
      return await load(url, CSVLoader, { dynamicTyping: true});
    default:
      return await load(url, JSONLoader);
  }
}

subscribe(store.datasets, async () => {
  const allDatasets = Object.keys(store.datasets);
  const fetchAllDatasets = allDatasets.map(async (key) => {
    const dataset = store.datasets[key];
    const currentParams = dataset.parameters
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
      const data = await handleLoad(url.toString())
      store.datasets[key].results[currentParamString] = data
    }
  });
  await Promise.all(fetchAllDatasets);
});
