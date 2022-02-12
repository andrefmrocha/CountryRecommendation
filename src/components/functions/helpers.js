export const isEmptyObj = (obj) => {
    return (
        obj && // 👈 null and undefined check
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
    )
}

export const getNumbersFromMap = (countriesValues) => {
    return Array.from(countriesValues, ([country, value]) => value*100);
}