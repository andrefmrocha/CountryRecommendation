import {json} from "d3"


export default async function openJson<T>(path: string): Promise<T[] | undefined> {
    return await json(`datasets/${path}`)
}
