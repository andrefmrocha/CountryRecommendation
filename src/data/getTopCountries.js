import { getCountryNameFromISOCode } from "./countryConversion";

export default function getTopCountries(countriesPercentiles, countriesValues, topListLength){
    const sortedCountries = Array.from(countriesPercentiles, ([country, value]) => ({ country, value }));
    
    const topCountries = []
    for(let i=0; i<topListLength; i++) {
        const country = getCountryNameFromISOCode(sortedCountries[i].country);
        const value = countriesValues.get(sortedCountries[i].country);
        topCountries.push({country: country, value: value});
    } 

    return topCountries
}
