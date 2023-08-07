import { proxy, subscribe } from "valtio/vanilla";
import { StateSchema } from "./types";
import { JSONLoader } from '@loaders.gl/json';
import { load } from '@loaders.gl/core';
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
      return await load(url, CSVLoader, { dynamicTyping: true });
    default:
      return await load(url, JSONLoader);
  }
}

interface PointGeometry {
  type: 'Point';
  coordinates: [number, number];
}

interface Feature {
  type: 'Feature';
  properties: Record<string, unknown>;
  geometry: PointGeometry;
}

interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}

const parseDataFeatureCollection = (data: FeatureCollection[]): FeatureCollection[] => {
  const parseRow = (row: FeatureCollection): FeatureCollection => {
    const features = row.features;
    const columns = Object.keys(features[0].properties);

    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      const properties = feature.properties;

      for (let j = 0; j < columns.length; j++) {
        const key = columns[j];
        const value = properties[key];

        if (typeof value === "string" && !isNaN(Number(value))) {
          properties[key] = Number(value);
        } else if (typeof value === "string" && !isNaN(Date.parse(value))) {
          properties[key] = new Date(value);
        }
      }
    }

    return row;
  };

  return data.map(parseRow);
};

// Previous parseData implementation
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
  }
  return data.map(parseRow);
};

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
      const data = await handleLoad(url.toString());

      // Check if the first object in data is a FeatureCollection
      if (data.length > 0 && data[0].type === "FeatureCollection") {
        // Use the new parseDataFeatureCollection implementation
        const parsedData = parseDataFeatureCollection(data);
        store.datasets[key].results[currentParamString] = parsedData;
      } else {
        // Use the previous parseData implementation
        const parsedData = parseData(data);
        store.datasets[key].results[currentParamString] = parsedData;
      }
    }
  });
  await Promise.all(fetchAllDatasets);
});
