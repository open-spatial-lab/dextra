import * as ss from 'simple-statistics'

// types
// asdf
export type Accessor = (data: Record<any, any>) => number;
export type Data = Record<any, any>[]

export const sum = (data: Data, accessor: Accessor ) => {
    const arr = data.map(accessor)
    const res = ss.sum(arr)
    return res
}
