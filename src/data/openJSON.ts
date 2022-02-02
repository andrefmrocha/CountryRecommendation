import {json} from "d3"


export default async function openJson<T>(path: string) {
    const result: T[] | undefined = await json(`datasets/${path}`)
    return result
}
