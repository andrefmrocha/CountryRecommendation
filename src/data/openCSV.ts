import * as fs from "fs";
import csvParser from "csv-parser";

export default function <T>(path: string) {
    const results: T[] = []
    return new Promise<T[]>(function (resolve, reject) {
        fs.createReadStream(path)
            .pipe(csvParser())
            .on('data', data => results.push(data))
            .on('end', () => resolve(results))
    })
}
