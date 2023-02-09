type Accessor = (data: Record<any, any>) => number;
type Data = Record<any, any>[];
declare const sum: (data: Data, accessor: Accessor) => number;

export { Accessor, Data, sum };
