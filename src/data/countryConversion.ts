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
        default:
            return country;
    }
}

export function getCountryISOCode(country: string) {
    const name = getName(country);
    return countries.alpha3ToNumeric(countries.getAlpha3Code(name, "en"))
}
