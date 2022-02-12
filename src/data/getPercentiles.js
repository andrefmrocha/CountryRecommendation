
export default function getPercentiles(countriesValues, percentiles){
    if (countriesValues.size > 0) {

        const countriesArray = Array.from(countriesValues, ([country, value]) => ({ country, value }));
        const sortedCountries = countriesArray.sort((a,b) => b.value - a.value);
        
        const n = sortedCountries.length;
        const percentileIndeces = percentiles.map(value => Math.ceil(value*n/100)); 
        
        const getPercentile = (index) => {
            for(let i=0; i<percentileIndeces.length; i++) {
                if (index < percentileIndeces[i] ) {
                    return percentiles[i]
                }
            }
        }
        
        const countriesPercentiles = new Map();

        for(let i=0; i<sortedCountries.length; i++) {
            const country = sortedCountries[i].country;
            const value = getPercentile(i);
            countriesPercentiles.set(country, value);
        }   
        return countriesPercentiles;
    }
    return {}
}