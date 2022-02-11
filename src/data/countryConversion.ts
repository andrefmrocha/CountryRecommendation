import countries from "i18n-iso-countries"
import englishCountries from "i18n-iso-countries/langs/en.json"

countries.registerLocale(englishCountries)

function getName(country: string) {
    switch (country) {
        case 'Czechia':
            return "Czech Republic"
        case 'Laos':
            return "Lao People's Democratic Republic"
        case 'Moldova':
            return "Moldova, Republic of"
        case 'Timor':
            return "Timor-Leste"
        case 'Democratic Republic of Congo':
            return 'Democratic Republic of the Congo'
        default:
            return country;
    }
}

export function getCountryISOCode(country: string) {
    const name = getName(country);
    return countries.alpha3ToNumeric(countries.getAlpha3Code(name, "en"))
}
