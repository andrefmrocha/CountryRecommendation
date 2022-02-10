export interface AirPollutionPCA {
    "PM2": number
    "Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)": number
    "Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Rate)": number
    "Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Rate)": number
    "Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Percent)": number
    "Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Percent)": number
}

export const originalAirPollutionPCA: AirPollutionPCA = {
    "PM2": 0,
    "Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)": 0,
    "Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Rate)": 0,
    "Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Rate)": 0,
    "Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Percent)": 0,
    "Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Percent)": 0,
} as AirPollutionPCA

export interface NaturalDisastersPCA {
    "Significant earthquake events (NGDC-NASA)": number
    "2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS": number
    "Number of significant volcanic eruptions (NGDC-WDS)": number
    "Internally displaced persons, new displacement associated with disasters (number of cases)": number
}

export const originalNaturalDisasterPCA: NaturalDisastersPCA = {
    "Significant earthquake events (NGDC-NASA)": 0,
    "2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS": 0,
    "Number of significant volcanic eruptions (NGDC-WDS)": 0,
    "Internally displaced persons, new displacement associated with disasters (number of cases)": 0,
} as NaturalDisastersPCA

export interface ClimateChangePCA {
    "Renewables (% electricity)": number,
    "Coal Production - TWh": number,
    "Oil Production - TWh": number,
    "Gas Production - TWh": number,
    "Fossil Fuels (TWh)": number,
    "Fossil fuels (% electricity)": number,
}

export const originalClimateChangePCA: ClimateChangePCA = {
    "Renewables (% electricity)": 0,
    "Coal Production - TWh": 0,
    "Oil Production - TWh": 0,
    "Gas Production - TWh": 0,
    "Fossil Fuels (TWh)": 0,
    "Fossil fuels (% electricity)": 0,
}

export interface FoodPCA {
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
    "Food expenditure (USDA (2017))": number,
    "Cost of healthy diet (2017 USD per day)": number,
    "Share of consumer expenditure on food (USDA (2017))": number,
    "Daily protein supply of plant origin (FAO (2017))": number,
    "Daily protein supply of animal origin (FAO (2017))": number,
    "Antibiotic use in livestock": number,
    "Food Balance Sheets: Meat - Food supply quantity (kg/capita/yr) (FAO (2017))": number,
    "Fat supply quantity (g/capita/day) (FAO, 2020)": number,
    "Daily caloric supply (FAO (2017) & Various historical sources)": number,
    "Protein supply quantity (g/capita/day) (FAO, 2020)": number,
    "Food Balance Sheets: Sugar (Raw Equivalent) - Food supply (kcal/capita/day) (FAO (2017))": number,
}

export const originalFoodPCA: FoodPCA = {
    "cereals": 0,
    "roots_tubers": 0,
    "vegetables": 0,
    "fruits": 0,
    "milk_equivalents": 0,
    "poultry": 0,
    "eggs": 0,
    "seafood": 0,
    "legumes": 0,
    "nuts": 0,
    "oils": 0,
    "sugar": 0,
    "Food expenditure (USDA (2017))": 0,
    "Cost of healthy diet (2017 USD per day)": 0,
    "Share of consumer expenditure on food (USDA (2017))": 0,
    "Daily protein supply of plant origin (FAO (2017))": 0,
    "Daily protein supply of animal origin (FAO (2017))": 0,
    "Antibiotic use in livestock": 0,
    "Food Balance Sheets: Meat - Food supply quantity (kg/capita/yr) (FAO (2017))": 0,
    "Fat supply quantity (g/capita/day) (FAO, 2020)": 0,
    "Daily caloric supply (FAO (2017) & Various historical sources)": 0,
    "Protein supply quantity (g/capita/day) (FAO, 2020)": 0,
    "Food Balance Sheets: Sugar (Raw Equivalent) - Food supply (kcal/capita/day) (FAO (2017))": 0,
}

export interface IncomePCA {
    "Annual statutory teacher salaries in public institutions in USD": number,
    "Gini index (World Bank estimate)": number,
    "Share of Top 1% in Pre-tax national income": number,
    "1st (Incomes across the Distribution Database (2016))": number,
    "5th (Incomes across the Distribution Database (2016))": number,
    "Top marginal income tax rate (Reynolds (2008))": number,
}

export const originalIncomePCA: IncomePCA = {
    "Annual statutory teacher salaries in public institutions in USD": 0,
    "Gini index (World Bank estimate)": 0,
    "Share of Top 1% in Pre-tax national income": 0,
    "1st (Incomes across the Distribution Database (2016))": 0,
    "5th (Incomes across the Distribution Database (2016))": 0,
    "Top marginal income tax rate (Reynolds (2008))": 0,
}

export interface EducationPCA {
    "OECD PISA education score (PISA (2015))": number,
    "Gross enrolment ratio, secondary, both sexes (%)": number,
    "Barro-Lee: Percentage of population age 15+ with tertiary schooling": number,
    "Teachers in pre-primary education, both sexes (number)": number,
    "Teachers in primary education, both sexes (number)": number,
    "Teachers in lower secondary education, both sexes (number)": number,
    "Teachers in upper secondary education, both sexes (number)": number,
    "Teachers in tertiary education programmes, both sexes (number)": number,
    "Lower secondary completion rate, both sexes (%)": number,
    "Duration of compulsory education (years)": number,
    "Government expenditure on education, total (% of GDP)": number,
    "Average harmonised learning outcome score in 2005-2015 (Altinok, Angrist, and Patrinos, 2018)": number,
    "Share of youth not in education, employment or training, total (% of youth population)": number,
}

export const originalEducationPCA: EducationPCA = {
    "OECD PISA education score (PISA (2015))": 0,
    "Gross enrolment ratio, secondary, both sexes (%)": 0,
    "Barro-Lee: Percentage of population age 15+ with tertiary schooling": 0,
    "Teachers in pre-primary education, both sexes (number)": 0,
    "Teachers in primary education, both sexes (number)": 0,
    "Teachers in lower secondary education, both sexes (number)": 0,
    "Teachers in upper secondary education, both sexes (number)": 0,
    "Teachers in tertiary education programmes, both sexes (number)": 0,
    "Lower secondary completion rate, both sexes (%)": 0,
    "Duration of compulsory education (years)": 0,
    "Government expenditure on education, total (% of GDP)": 0,
    "Average harmonised learning outcome score in 2005-2015 (Altinok, Angrist, and Patrinos, 2018)": 0,
    "Share of youth not in education, employment or training, total (% of youth population)": 0,
}

export interface DemocracyPCA {
    "Regimes of the world -- the RoW measure": number
    "Political Regime (OWID based on Polity IV and Wimmer & Min)": number
    "Political regime": number
    "Corruption Perception Index - Transparency International (2018)": number
    "Bribery Rate (%)": number
    "Human Rights Score (Schnakenberg & Fariss, 2014; Fariss, 2019)": number
    "Fund for Peace (Fragile States Index (Human Rights Dimension))": number
    "Freedom of the Press Status": number
    "Refugee population by country or territory of asylum": number
    "Share of people who trust their national government": number
    "Political Participation (Vanhanen (2015))": number
    "Fragile States Index - ffp_fsi": number
    "Press Freedom Score": number
}

export const originalDemocracyPCA: DemocracyPCA = {
    "Regimes of the world -- the RoW measure": 0,
    "Political Regime (OWID based on Polity IV and Wimmer & Min)": 0,
    "Political regime": 0,
    "Corruption Perception Index - Transparency International (2018)": 0,
    "Bribery Rate (%)": 0,
    "Human Rights Score (Schnakenberg & Fariss, 2014; Fariss, 2019)": 0,
    "Fund for Peace (Fragile States Index (Human Rights Dimension))": 0,
    "Freedom of the Press Status": 0,
    "Refugee population by country or territory of asylum": 0,
    "Share of people who trust their national government": 0,
    "Political Participation (Vanhanen (2015))": 0,
    "Fragile States Index - ffp_fsi": 0,
    "Press Freedom Score": 0,
}

export interface GenderRightsPCA {
    "Barro-Lee: Percentage of female population age 15-19 with no education": number,
    "Total net enrolment rate, primary, female (%)": number,
    "Gender Inequality Index (Human Development Report (2015))": number,
    "2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN": number,
    "Firms with female top manager (% of firms)": number,
    "Women's Economic Rights - ciri_wecon": number,
    "WEO Index overall score (Economist Intelligence Unit (2012))": number,
    "Gender wage gap (OECD 2017)": number,
    "Law mandates equal remuneration for females and males for work of equal value (1=yes; 0=no)": number,
    "Gross enrolment ratio, primary, gender parity index (GPI)": number,
    "Gross enrolment ratio, secondary, both sexes (%)": number,
    "Gross enrolment ratio, tertiary, gender parity index (GPI)": number,
    "Employment in agriculture, female (% of female employment) (modeled ILO estimate)": number,
    "Employment in industry, female (% of female employment) (modeled ILO estimate)": number,
    "Employment in services, female (% of female employment) (modeled ILO estimate)": number,
    "Unemployment rate, women -- ILO modelled estimates, May 2017 (%)": number,
    "Maternal mortality ratio (modeled estimate, per 100,000 live births)": number,
    "2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled": number,
    "Proportion of women in ministerial level positions (%)": number,
}

export const originalGenderRightsPCA: GenderRightsPCA = {
    "Barro-Lee: Percentage of female population age 15-19 with no education": 0,
    "Total net enrolment rate, primary, female (%)": 0,
    "Gender Inequality Index (Human Development Report (2015))": 0,
    "2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN": 0,
    "Firms with female top manager (% of firms)": 0,
    "Women's Economic Rights - ciri_wecon": 0,
    "WEO Index overall score (Economist Intelligence Unit (2012))": 0,
    "Gender wage gap (OECD 2017)": 0,
    "Law mandates equal remuneration for females and males for work of equal value (1=yes; 0=no)": 0,
    "Gross enrolment ratio, primary, gender parity index (GPI)": 0,
    "Gross enrolment ratio, secondary, both sexes (%)": 0,
    "Gross enrolment ratio, tertiary, gender parity index (GPI)": 0,
    "Employment in agriculture, female (% of female employment) (modeled ILO estimate)": 0,
    "Employment in industry, female (% of female employment) (modeled ILO estimate)": 0,
    "Employment in services, female (% of female employment) (modeled ILO estimate)": 0,
    "Unemployment rate, women -- ILO modelled estimates, May 2017 (%)": 0,
    "Maternal mortality ratio (modeled estimate, per 100,000 live births)": 0,
    "2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled": 0,
    "Proportion of women in ministerial level positions (%)": 0,
}

export interface LanguagePCA {
    "Total English speakers (%)": number
}

export const originalLanguagePCA: LanguagePCA = {
    "Total English speakers (%)": 0
}

export interface SafetyPCA {
    "Deaths - Interpersonal violence - Sex: Both - Age: All Ages (Rate)": number
    "Intentional homicides (per 100,000 people)": number
    "Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)": number
    "Deaths - All causes - Sex: Both - Age: Under 5 (Number)": number
    "Deaths - All causes - Sex: Both - Age: 5-14 years (Number)": number
    "Deaths - All causes - Sex: Both - Age: 15-49 years (Number)": number
    "Deaths - All causes - Sex: Both - Age: 50-69 years (Number)": number
    "Deaths - All causes - Sex: Both - Age: 70+ years (Number)": number
    "Nuclear weapons inventory by country (FAS Nuclear Notebook)": number
    "Deaths - Conflict and terrorism - Sex: Both - Age: All Ages (Number)": number
    "Number of terrorist incidents (GDT, 2018)": number
    "Children (13-15) who reported being bullied": number
}

export const originalSafetyPCA: SafetyPCA = {
    "Deaths - Interpersonal violence - Sex: Both - Age: All Ages (Rate)": 0,
    "Intentional homicides (per 100,000 people)": 0,
    "Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)": 0,
    "Deaths - All causes - Sex: Both - Age: Under 5 (Number)": 0,
    "Deaths - All causes - Sex: Both - Age: 5-14 years (Number)": 0,
    "Deaths - All causes - Sex: Both - Age: 15-49 years (Number)": 0,
    "Deaths - All causes - Sex: Both - Age: 50-69 years (Number)": 0,
    "Deaths - All causes - Sex: Both - Age: 70+ years (Number)": 0,
    "Nuclear weapons inventory by country (FAS Nuclear Notebook)": 0,
    "Deaths - Conflict and terrorism - Sex: Both - Age: All Ages (Number)": 0,
    "Number of terrorist incidents (GDT, 2018)": 0,
    "Children (13-15) who reported being bullied": 0,
}

export interface HappinessPCA {
    "Life satisfaction in Cantril Ladder (World Happiness Report 2021)": number
    "Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Percent)": number
    "Indicator:Estimated population-based prevalence of depression": number
    "Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)": number
}

export const originalHappinessPCA: HappinessPCA = {
    "Life satisfaction in Cantril Ladder (World Happiness Report 2021)": 0,
    "Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Percent)": 0,
    "Indicator:Estimated population-based prevalence of depression": 0,
    "Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)": 0,
}

export interface HealthPCA {
    "Hospital beds (per 1,000 people)": number
    "HAQ Index (IHME (2017))": number
    "1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC": number
    "Current health expenditure per capita, PPP (current international $)": number
    "Health expenditure per capita, PPP (constant 2011 international $)": number
    "Out-of-pocket health expenditure (% of total expenditure on health)": number
    "Risk of catastrophic expenditure for surgical care (% of people at risk)": number
    "Share of population covered by health insurance (ILO (2014))": number
    "Domestic private health expenditure per capita, PPP (current international $)": number
}

export const originalHealthPCA: HealthPCA = {
    "Hospital beds (per 1,000 people)": 0,
    "HAQ Index (IHME (2017))": 0,
    "1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC": 0,
    "Current health expenditure per capita, PPP (current international $)": 0,
    "Health expenditure per capita, PPP (constant 2011 international $)": 0,
    "Out-of-pocket health expenditure (% of total expenditure on health)": 0,
    "Risk of catastrophic expenditure for surgical care (% of people at risk)": 0,
    "Share of population covered by health insurance (ILO (2014))": 0,
    "Domestic private health expenditure per capita, PPP (current international $)": 0,
}

export interface LGBTQIRightsPCA {
    "Religiosity": number
    "SHI": number
    "legality of sam-sex sexual-activity": number
    "marriage/ civil unions": number
    "serving in the military": number
    "antidiscrimination laws": number
}

export const originalLGBTQIRightsPCA: LGBTQIRightsPCA = {
    "Religiosity": 0,
    "SHI": 0,
    "legality of sam-sex sexual-activity": 0,
    "marriage/ civil unions": 0,
    "serving in the military": 0,
    "antidiscrimination laws": 0,
}
