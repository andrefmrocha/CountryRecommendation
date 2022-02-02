export interface DisposableHouseholdIncome{
    Entity: string,
    Code: string,
    Year: number,
    "1st (Incomes across the Distribution Database (2016))": number
}

export interface AnnualFoodExpenditurePerPerson{
    Entity: string,
    Code: string,
    Year: number,
    "Population (historical estimates)": number
}

export interface PM2{
    "5 air pollution, mean annual exposure (micrograms per cubic meter)": number
}

export interface PM25AirPollutionRaw {
    Entity: string,
    Code: string,
    Year: number,
    PM2: PM2
}

export interface PM25AirPollution {
    Entity: string,
    Code: string,
    Year: number,
    PM2: number
}

export function getPm25DataTreated(pm25DataRaw: PM25AirPollutionRaw[]): PM25AirPollution[] {
    return pm25DataRaw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            PM2: item.PM2["5 air pollution, mean annual exposure (micrograms per cubic meter)"]
        } as PM25AirPollution
    });
}

export interface DeathRatesFromAmbientPollution {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)": number
}
