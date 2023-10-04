export const utils = {
  filterUnique: (value: unknown, idx: number, arr: unknown[]) =>{
    return arr.indexOf(value) === idx;
  }
}