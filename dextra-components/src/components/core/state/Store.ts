import { proxy } from "valtio";
import { StateSchema } from "./types";
import { subscribe } from "valtio";

export const initialState: StateSchema = {
  datasets: {},
};

export const store = proxy<StateSchema>(initialState);

subscribe(store.datasets, async () => {
  const allDatasets = Object.keys(store.datasets);
  allDatasets.forEach((key) => {
    const dataset = store.datasets[key];
    console.log(dataset.parameters)
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
      fetch(url.toString())
        .then((r) => r.json())
        .then(
          (table) => {
            store.datasets[key].results[currentParamString] = table
          }
        );
    }
  });
});
