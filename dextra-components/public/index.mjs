// src/index.ts
import * as ss from "simple-statistics";
var sum2 = (data, accessor) => {
  const arr = data.map(accessor);
  const res = ss.sum(arr);
  return res;
};
export {
  sum2 as sum
};
