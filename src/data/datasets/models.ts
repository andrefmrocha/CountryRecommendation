export interface DisposableHouseholdIncome {
    Entity: string,
    Code: string,
    Year: number,
    "1st (Incomes across the Distribution Database (2016))": number
}

export interface AnnualFoodExpenditurePerPerson {
    Entity: string,
    Code: string,
    Year: number,
    "Population (historical estimates)": number,
    "Food expenditure (USDA (2017))": number,
}

export interface DisposableHouseholdIncome {
    Entity: string,
    Code: string,
    Year: number,
    "1st (Incomes across the Distribution Database (2016))": number
}

export interface AdolescentBirthRateRaw {
    Entity: string,
    Code: string,
    Year: number,
    "Indicator 3": AdolescentBirthRateIndicators[]
}

export interface AdolescentBirthRateIndicators {
    "2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled": number
}

export interface AdolescentBirthRate {
    Entity: string,
    Code: string,
    Year: number,
    "2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled": number
}

export function getAdolescentBirthRateDataTreated(raw: AdolescentBirthRateRaw[]): AdolescentBirthRate[] {
    return raw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            "2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled": item["Indicator 3"].filter(item => !item)[0]["2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled"]
        } as AdolescentBirthRate
    });
}

export interface AnnualFoodExpenditurePerPersonVsGDPPerCapita {
    Entity: string,
    Code: string,
    Year: number,
    "GDP per capita (current US$)": number,
    "Food expenditure (USDA (2017))": number,
    "Population (historical estimates)": number,
}

export interface AnnualHealthExpenditurePerPerson {
    Entity: string,
    Code: string,
    Year: number,
    "Health expenditure per capita, PPP (constant 2011 international $)": number
}

export interface AntibioticUseInLivestock {
    Entity: string,
    Code: string,
    Year: number,
    "Antibiotic use in livestock": number
}

export interface CompletionRateOfLowerSecondaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Lower secondary completion rate, both sexes (%)": number
}

export interface CostOfHealthyDiet {
    Entity: string,
    Code: string,
    Year: number,
    "Cost of healthy diet (2017 USD per day)": number
}

export interface DailyMeatConsumptionPerPerson {
    Entity: string,
    Code: string,
    Year: number,
    "Food Balance Sheets: Meat - Food supply quantity (kg/capita/yr) (FAO (2017))": number
}

export interface DailyPerCapitaFatSupply {
    Entity: string,
    Code: string,
    Year: number,
    "Fat supply quantity (g/capita/day) (FAO, 2020)": number
}

export interface DailyPerCapitaProteinSupply {
    Entity: string,
    Code: string,
    Year: number,
    "Protein supply quantity (g/capita/day) (FAO, 2020)": number
}

export interface DailyPerCapitaCaloriesSupply {
    Entity: string,
    Code: string,
    Year: number,
    "Daily caloric supply (FAO (2017) & Various historical sources)": number
}

export interface DailyPerCapitaAnimalProteinSupplyVsPlantProteinSupply {
    Entity: string,
    Code: string,
    Year: number,
    "Daily protein supply of plant origin (FAO (2017))": number
    "Daily protein supply of animal origin (FAO (2017))": number
}

export interface DeathRatesFromAmbientPollution {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)": number
}

export interface DeathRatesFromAirPollution {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Rate)": number
}

export interface DeathRatesByAgeGroup {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - All causes - Sex: Both - Age: Under 5 (Number)": number,
    "Deaths - All causes - Sex: Both - Age: 5-14 years (Number)": number,
    "Deaths - All causes - Sex: Both - Age: 15-49 years (Number)": number,
    "Deaths - All causes - Sex: Both - Age: 50-69 years (Number)": number,
    "Deaths - All causes - Sex: Both - Age: 70+ years (Number)": number,
}

export interface DeathsFromConflictAndTerrorism {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Conflict and terrorism - Sex: Both - Age: All Ages (Number)": number,
}

export interface DepressionLevelsIhmeVsWho {
    Entity: string,
    Code: string,
    Year: number,
    "Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Percent)": number,
    "Indicator:Estimated population-based prevalence of depression": number,
}

export interface DirectEconomicLossAttributedToDisastersRaw {
    Entity: string,
    Code: string,
    Year: number,
    "1": DirectEconomicLossAttributedToDisastersRawIndicator[]
}

export interface DirectEconomicLossAttributedToDisastersRawIndicator {
    "2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS": number
}

export interface DirectEconomicLossAttributedToDisasters {
    Entity: string,
    Code: string,
    Year: number,
    "2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS": number
}

export function getDirectEconomicLossAttributedToDisastersDataTreated(raw: DirectEconomicLossAttributedToDisastersRaw[]): DirectEconomicLossAttributedToDisasters[] {
    return raw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            "2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS": item["1"].filter(item => !item)[0]["2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS"]
        } as DirectEconomicLossAttributedToDisasters
    });
}

export interface DurationOfCompulsoryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Duration of compulsory education (years)": number
}

export interface EatLancetDietComparison {
    Entity: string,
    Code: string,
    Year: number,
    "cereals": number,
    "roots_tubers": number,
    "vegetables": number,
    "fruits": number,
    "milk_equivalents": number,
    "poultry": number,
    "eggs": number,
    "seafood": number,
    "legumes": number,
    "nuts": number,
    "oils": number,
    "sugar": number,
}

export interface FirmsWithFemaleTopManagersOfFirms {
    Entity: string,
    Code: string,
    Year: number,
    "Firms with female top manager (% of firms)": number
}

export interface FossilFuelPrimaryEnergy {
    Entity: string,
    Code: string,
    Year: number,
    "Fossil Fuels (TWh)": number
}

export interface FossilFuelProduction {
    Entity: string,
    Code: string,
    Year: number,
    "Coal Production - TWh": number,
    "Oil Production - TWh": number,
    "Gas Production - TWh": number,
}

export interface GdpPerCapitaVsEconomicInequality {
    Entity: string,
    Code: string,
    Year: number,
    "Gini index (World Bank estimate)": number,
}

export interface GdpPerCapitaVsStateFragility {
    Entity: string,
    Code: string,
    Year: number,
    "Fragile States Index - ffp_fsi": number,
}

export interface GenderInequality {
    Entity: string,
    Code: string,
    Year: number,
    "Gender Inequality Index (Human Development Report (2015))": number,
}


export interface GenderWageGapOecd {
    Entity: string,
    Code: string,
    Year: number,
    "Gender wage gap (OECD 2017)": number,
}

export interface GpiPrimaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Gross enrolment ratio, primary, gender parity index (GPI)": number,
}

export interface GpiTertiaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Gross enrolment ratio, tertiary, gender parity index (GPI)": number,
}

export interface GrossEnrollmentSecondaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Gross enrolment ratio, secondary, both sexes (%)": number,
}

export interface GpiSecondaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Gross enrolment ratio, secondary, gender parity index (GPI)": number,
}

export interface HappinessCantrilLadder {
    Entity: string,
    Code: string,
    Year: number,
    "Life satisfaction in Cantril Ladder (World Happiness Report 2021)": number,
}

export interface HAQByLevelOfHealthcareSpending {
    Entity: string,
    Code: string,
    Year: number,
    "Current health expenditure per capita, PPP (current international $)": number,
    "HAQ Index (IHME (2017))": number,
}

export interface HealthProtectionCoverage {
    Entity: string,
    Code: string,
    Year: number,
    "Share of population covered by health insurance (ILO (2014))": number,
}

export interface HAQ {
    Entity: string,
    Code: string,
    Year: number,
    "HAQ Index (IHME (2017))": number,
}

export interface HomicideRateIhmeVsWorldBank {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Interpersonal violence - Sex: Both - Age: All Ages (Rate)": number,
    "Intentional homicides (per 100,000 people)": number,
}

export interface HospitalBedsPer1000People {
    Entity: string,
    Code: string,
    Year: number,
    "Hospital beds (per 1,000 people)": number,
}

export interface HumanRightsScores {
    Entity: string,
    Code: string,
    Year: number,
    "Human Rights Score (Schnakenberg & Fariss, 2014; Fariss, 2019)": number,
}

export interface HumanRightsViolations {
    Entity: string,
    Code: string,
    Year: number,
    "Fund for Peace (Fragile States Index (Human Rights Dimension))": number,
}

export interface InternallyDisplacedPersonsFromDisasters {
    Entity: string,
    Code: string,
    Year: number,
    "Internally displaced persons, new displacement associated with disasters (number of cases)": number,
}

export interface LawMandateEqualPay {
    Entity: string,
    Code: string,
    Year: number,
    "Law mandates equal remuneration for females and males for work of equal value (1=yes; 0=no)": number,
}

export interface LGBT {
    country: string,
    Code: string,
    Year: number,
    "Religiosity": number,
    "SHI": number,
    "legality of sam-sex sexual-activity": number,
    "marriage/ civil unions": number,
    "serving in the military": number,
    "antidiscrimination laws": number,
}

export interface MaternalMortality {
    Entity: string,
    Code: string,
    Year: number,
    "Maternal mortality ratio (modeled estimate, per 100,000 live births)": number,
}

export interface MaximumMarginalTaxRatesOnIndividualIncome {
    Entity: string,
    Code: string,
    Year: number,
    "Top marginal income tax rate (Reynolds (2008))": number,
}

export interface MedianIncomeEEG {
    Entity: string,
    Code: string,
    Year: number,
    "5th (Incomes across the Distribution Database (2016))": number,
}

export interface NationalAverageLearningOutcomesVsGovernmentExpenditurePerPrimaryStudent {
    Entity: string,
    Code: string,
    Year: number,
    "Average harmonised learning outcome score in 2005-2015 (Altinok, Angrist, and Patrinos, 2018)": number,
    "Government expenditure per primary student (PPP$, 2006-2014)": number,
}

export interface NumberOfNuclearWarheads {
    Entity: string,
    Code: string,
    Year: number,
    "Nuclear weapons inventory by country (FAS Nuclear Notebook)": number,
}

export interface NumberOfTeachersAcrossEducationLevels {
    Entity: string,
    Code: string,
    Year: number,
    "Teachers in pre-primary education, both sexes (number)": number,
    "Teachers in primary education, both sexes (number)": number,
    "Teachers in lower secondary education, both sexes (number)": number,
    "Teachers in upper secondary education, both sexes (number)": number,
    "Teachers in tertiary education programmes, both sexes (number)": number,
}

export interface OECDPisaTestScores {
    Entity: string,
    Code: string,
    Year: number,
    "OECD PISA education score (PISA (2015))": number,
}

export interface OutdoorPollutionDeathRate {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Rate)": number,
}

export interface PerCapitaSugarFoodSupply {
    Entity: string,
    Code: string,
    Year: number,
    "Food Balance Sheets: Sugar (Raw Equivalent) - Food supply (kcal/capita/day) (FAO (2017))": number,
}

export interface PM2 {
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

export interface PoliticalParticipation {
    Entity: string,
    Code: string,
    Year: number,
    "Political Participation (Vanhanen (2015))": number,
}

export interface PoliticalRegimeTypeVsHumanRightsScore {
    Entity: string,
    Code: string,
    Year: number,
    "Regimes of the world -- the RoW measure": number,
    "Human Rights Score (Schnakenberg & Fariss, 2014; Fariss, 2019)": number,
}

export interface PoliticalRegime2016 {
    Entity: string,
    Code: string,
    Year: number,
    "Political Regime (OWID based on Polity IV and Wimmer & Min)": number,
}

export interface PoliticalRegime {
    Entity: string,
    Code: string,
    Year: number,
    "Political regime": number,
}

export interface PrivateHealthExpenditurePerPerson {
    Entity: string,
    Code: string,
    Year: number,
    "Domestic private health expenditure per capita, PPP (current international $)": number,
}

export interface ProportionOfWomenInMinisterialPositions {
    Entity: string,
    Code: string,
    Year: number,
    "Proportion of women in ministerial level positions (%)": number,
}

export interface ProportionOfWomenInSeniorAndMiddlePositionsRaw {
    Entity: string,
    Code: string,
    Year: number,
    "5": ProportionOfWomenInSeniorAndMiddlePositionsProportion[],
}

export interface ProportionOfWomenInSeniorAndMiddlePositionsProportion {
    "2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN": number
}

export interface ProportionOfWomenInSeniorAndMiddlePositions {
    Entity: string,
    Code: string,
    Year: number,
    "2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN": number,
}

export function getProportionOfWomenInSeniorAndMiddlePositionsDataTreated(raw: ProportionOfWomenInSeniorAndMiddlePositionsRaw[]): ProportionOfWomenInSeniorAndMiddlePositions[] {
    return raw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            "2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN": item["5"].filter(item => !item)[0]["2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN"]
        } as ProportionOfWomenInSeniorAndMiddlePositions
    });
}

export interface RefugeePopulation {
    Entity: string,
    Code: string,
    Year: number,
    "Refugee population by country or territory of asylum": number,
}

export interface ShareDeathsAirPollution {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Percent)": number,
}

export interface ShareDeathsOutdoorPollution {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Percent)": number,
}

export interface ShareElectricityFossilFuels {
    Entity: string,
    Code: string,
    Year: number,
    "Fossil fuels (% electricity)": number,
}

export interface ShareElectricityRenewables {
    Entity: string,
    Code: string,
    Year: number,
    "Renewables (% electricity)": number,
}

export interface ShareOfChildrenWhoReportBeingBullied {
    Entity: string,
    Code: string,
    Year: number,
    "Children (13-15) who reported being bullied": number,
}

export interface ShareOfConsumerExpenditureSpentOnFood {
    Entity: string,
    Code: string,
    Year: number,
    "Share of consumer expenditure on food (USDA (2017))": number,
}

export interface ShareOfMaleVsFemaleEmploymentInAgri {
    Entity: string,
    Code: string,
    Year: number,
    "Employment in agriculture, male (% of male employment) (modeled ILO estimate)": number,
    "Employment in agriculture, female (% of female employment) (modeled ILO estimate)": number,
}

export interface ShareOfMaleVsFemaleEmploymentInIndustry {
    Entity: string,
    Code: string,
    Year: number,
    "Employment in industry, male (% of male employment) (modeled ILO estimate)": number,
    "Employment in industry, female (% of female employment) (modeled ILO estimate)": number,
}

export interface ShareOfMaleVsFemaleEmploymentInServices {
    Entity: string,
    Code: string,
    Year: number,
    "Employment in services, male (% of male employment) (modeled ILO estimate)": number,
    "Employment in services, female (% of female employment) (modeled ILO estimate)": number,
}

export interface ShareOfOutOfPocketExpenditureOnHealthcare {
    Entity: string,
    Code: string,
    Year: number,
    "Out-of-pocket health expenditure (% of total expenditure on health)": number,
}

export interface ShareOfPeoplePayingBribesVsCorruptionPerception {
    Entity: string,
    Code: string,
    Year: number,
    "Corruption Perception Index - Transparency International (2018)": number,
    "Bribery Rate (%)": number,
}

export interface ShareOfPopulationAtRiskOfCatastrophicExpenditureWhenSurgicalCareIsRequired {
    Entity: string,
    Code: string,
    Year: number,
    "Risk of catastrophic expenditure for surgical care (% of people at risk)": number,
}

export interface ShareOfPopulationWithCompletedTertiaryEducationRaw {
    Entity: string,
    Code: string,
    Year: number,
    "Barro-Lee: Percentage of population age 15+ with tertiary schooling": ShareOfPopulationWithCompletedTertiaryEducationIndicator,
}

export interface ShareOfPopulationWithCompletedTertiaryEducationIndicator {
    " Completed Tertiary": number
}

export interface ShareOfPopulationWithCompletedTertiaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Barro-Lee: Percentage of population age 15+ with tertiary schooling": number,
}

export function getShareOfPopulationWithCompletedTertiaryEducationDataTreated(raw: ShareOfPopulationWithCompletedTertiaryEducationRaw[]): ShareOfPopulationWithCompletedTertiaryEducation[] {
    return raw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            "Barro-Lee: Percentage of population age 15+ with tertiary schooling": item["Barro-Lee: Percentage of population age 15+ with tertiary schooling"][" Completed Tertiary"]
        } as ShareOfPopulationWithCompletedTertiaryEducation
    });
}


export interface ShareOfTop1PercentInPreTaxNationalIncome {
    Entity: string,
    Code: string,
    Year: number,
    "Share of Top 1% in Pre-tax national income": number,
}

export interface ShareOfWomenWithNoEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Barro-Lee: Percentage of female population age 15-19 with no education": number,
}

export interface ShareWhoTrustGovernment {
    Entity: string,
    Code: string,
    Year: number,
    "Share of people who trust their national government": number,
}

export interface SignificantEarthquakes {
    Entity: string,
    Code: string,
    Year: number,
    "Significant earthquake events (NGDC-NASA)": number,
}

export interface SignificantVolcanicEruptions {
    Entity: string,
    Code: string,
    Year: number,
    "Number of significant volcanic eruptions (NGDC-WDS)": number,
}

export interface StartingYearlyTeacherSalariesInPublicPrimaryEducationRaw {
    Entity: string,
    Code: string,
    Year: number,
    "Annual statutory teacher salaries in public institutions in USD": {
        " Primary": {
            " Starting salary": number
        }
    },
}

export interface StartingYearlyTeacherSalariesInPublicPrimaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Annual statutory teacher salaries in public institutions in USD": number
}

export function getStartingYearlyTeacherSalariesInPublicPrimaryEducationDataTreated(raw: StartingYearlyTeacherSalariesInPublicPrimaryEducationRaw[]): StartingYearlyTeacherSalariesInPublicPrimaryEducation[] {
    return raw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            "Annual statutory teacher salaries in public institutions in USD": item["Annual statutory teacher salaries in public institutions in USD"][" Primary"][" Starting salary"]
        } as StartingYearlyTeacherSalariesInPublicPrimaryEducation
    });
}

export interface SuicideRatesVsPrevalenceOfDepression {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)": number,
    "Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Rate)": number,
}

export interface SuicideRatesVsHomicideRates {
    Entity: string,
    Code: string,
    Year: number,
    "Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)": number,
    "Deaths - Interpersonal violence - Sex: Both - Age: Age-standardized (Rate)": number,
}

export interface TerroristIncidents {
    Entity: string,
    Code: string,
    Year: number,
    "Number of terrorist incidents (GDT, 2018)": number,
}

export interface TotalGovernmentExpenditureOnEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Government expenditure on education, total (% of GDP)": number,
}

export interface TotalNetEnrollmentRateInPrimaryEducation {
    Entity: string,
    Code: string,
    Year: number,
    "Total net enrolment rate, primary, male (%)": number,
    "Total net enrolment rate, primary, female (%)": number,
}

export interface UnemploymentRateWomen {
    Entity: string,
    Code: string,
    Year: number,
    "Unemployment rate, women -- ILO modelled estimates, May 2017 (%)": number,
}

export interface UniversalHealthCoverageIndexRaw {
    Entity: string,
    Code: string,
    Year: number,
    "3": {
        "1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC": number
    },
}

export interface UniversalHealthCoverageIndex {
    Entity: string,
    Code: string,
    Year: number,
    "1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC": number
}


export function getUniversalHealthCoverageIndexDataTreated(raw: UniversalHealthCoverageIndexRaw[]): UniversalHealthCoverageIndex[] {
    return raw.map(item => {
        return {
            Entity: item.Entity,
            Code: item.Code,
            Year: item.Year,
            "1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC": item["3"]["1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC"]
        } as UniversalHealthCoverageIndex
    });
}

export interface TotalEnglishSpeakers {
    Entity: string,
    Code: string,
    Year: number,
    "Total English speakers (%)": number
}

export interface WomensEconomicOpportunityIndex {
    Entity: string,
    Code: string,
    Year: number,
    "WEO Index overall score (Economist Intelligence Unit (2012))": number
}

export interface WomensEconomicRights {
    Entity: string,
    Code: string,
    Year: number,
    "Women's Economic Rights - ciri_wecon": number
}

export interface WorldMapOfFreedomOfPress {
    Entity: string,
    Code: string,
    Year: number,
    "Freedom of the Press Status": number
}

export interface WorldPressFreedom {
    Entity: string,
    Code: string,
    Year: number,
    "Press Freedom Score": number
}

export interface YouthNotInEducationEmploymentOrTraining {
    Entity: string,
    Code: string,
    Year: number,
    "Share of youth not in education, employment or training, total (% of youth population)": number
}

