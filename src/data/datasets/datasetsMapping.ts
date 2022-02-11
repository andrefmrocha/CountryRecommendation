import {
    getAdolescentBirthRateDataTreated, getDirectEconomicLossAttributedToDisastersDataTreated,
    getPm25DataTreated,
    getProportionOfWomenInSeniorAndMiddlePositionsDataTreated,
    getShareOfPopulationWithCompletedTertiaryEducationDataTreated,
    getStartingYearlyTeacherSalariesInPublicPrimaryEducationDataTreated, getUniversalHealthCoverageIndexDataTreated
} from "./models";

export const datasetsMapping = {
    "https://ourworldindata.org/grapher/pm25-air-pollution": "PM25-air-pollution.json",
    "https://ourworldindata.org/grapher/death-rates-from-ambient-particulate-air-pollution": "death-rates-from-ambient-particulate-air-pollution.json",
    "https://ourworldindata.org/grapher/death-rates-total-air-pollution?yScale=log": "death-rates-total-air-pollution.json",
    "https://ourworldindata.org/grapher/outdoor-pollution-death-rate": "outdoor-pollution-death-rate.json",
    "https://ourworldindata.org/grapher/share-deaths-air-pollution": "share-deaths-air-pollution.json",
    "https://ourworldindata.org/grapher/share-deaths-outdoor-pollution": "share-deaths-outdoor-pollution.json",
    "https://ourworldindata.org/grapher/significant-earthquakes": "significant-earthquakes.json",
    "https://ourworldindata.org/grapher/direct-economic-loss-attributed-to-disasters": "direct-economic-loss-attributed-to-disasters.json",
    "https://ourworldindata.org/grapher/significant-volcanic-eruptions": "significant-volcanic-eruptions.json",
    "https://ourworldindata.org/grapher/internally-displaced-persons-from-disasters": "internally-displaced-persons-from-disasters.json",
    "https://ourworldindata.org/grapher/share-electricity-renewables": "share-electricity-renewables.json",
    "https://ourworldindata.org/grapher/fossil-fuel-production": "fossil-fuel-production.json",
    "https://ourworldindata.org/grapher/fossil-fuel-primary-energy": "fossil-fuel-primary-energy.json",
    "https://ourworldindata.org/grapher/share-electricity-fossil-fuels": "share-electricity-fossil-fuels.json",
    "https://ourworldindata.org/grapher/eat-lancet-diet-comparison?country=USA~GBR~EAT-Lancet~IND~KEN": "eat-lancet-diet-comparison.json",
    "https://ourworldindata.org/grapher/annual-food-expenditure-per-person-vs-gdp-per-capita": "annual-food-expenditure-per-person-vs-gdp-per-capita.json",
    "https://ourworldindata.org/grapher/cost-healthy-diet?country=USA~GBR~IND~CHN~AUT~MWI~MYS~BRA~FRA~SWE~CHE~BGD~JPN": "cost-healthy-diet.json",
    "https://ourworldindata.org/grapher/share-of-consumer-expenditure-spent-on-food": "share-of-consumer-expenditure-spent-on-food.json",
    "https://ourworldindata.org/grapher/daily-protein-supply-of-animal-origin-vs-plant-origin": "daily-protein-supply-of-animal-origin-vs-plant-origin.json",
    "https://ourworldindata.org/grapher/antibiotic-use-in-livestock": "antibiotic-use-in-livestock.json",
    "https://ourworldindata.org/grapher/daily-meat-consumption-per-person": "daily-meat-consumption-per-person.json",
    "https://ourworldindata.org/grapher/daily-per-capita-fat-supply": "daily-per-capita-fat-supply.json",
    "https://ourworldindata.org/grapher/daily-per-capita-supply-of-calories": "daily-per-capita-supply-of-calories.json",
    "https://ourworldindata.org/grapher/daily-per-capita-protein-supply?country=MDV~SUR": "daily-per-capita-protein-supply.json",
    "https://ourworldindata.org/grapher/per-capita-sugar-food-supply-vs-gdp-per-capita": "per-capita-sugar-food-supply-vs-gdp-per-capita.json",
    "https://ourworldindata.org/grapher/starting-yearly-teacher-salaries-in-public-primary-education": "starting-yearly-teacher-salaries-in-public-primary-education.json",
    "https://ourworldindata.org/grapher/gdp-per-capita-vs-economic-inequality": "gdp-per-capita-vs-economic-inequality.json",
    "https://ourworldindata.org/grapher/share-of-top-1-in-pre-tax-national-income": "share-of-top-1-in-pre-tax-national-income.json",
    "https://ourworldindata.org/grapher/1st-d": "1st-d.json",
    "https://ourworldindata.org/grapher/median-income-eeg": "median-income-EEG.json",
    "https://ourworldindata.org/grapher/maximum-marginal-tax-rates-on-individual-income?time=1979..2002": "maximum-marginal-tax-rates-on-individual-income.json",
    "https://ourworldindata.org/grapher/oecd-pisa-test-scores-for-selected-countries-2000-2012": "oecd-pisa-test-scores-for-selected-countries-2000-2012.json",
    "https://ourworldindata.org/grapher/gross-enrollment-ratio-in-secondary-education": "gross-enrollment-ratio-in-secondary-education.json",
    "https://ourworldindata.org/grapher/share-of-the-population-with-completed-tertiary-education": "share-of-the-population-with-completed-tertiary-education.json",
    "https://ourworldindata.org/grapher/number-of-teachers-across-education-levels?tab=table&country=~OWID_WRL": "number-of-teachers-across-education-levels.json",
    "https://ourworldindata.org/grapher/completion-rate-of-lower-secondary-education": "completion-rate-of-lower-secondary-education.json",
    "https://ourworldindata.org/grapher/duration-of-compulsory-education": "duration-of-compulsory-education.json",
    "https://ourworldindata.org/grapher/total-government-expenditure-on-education-gdp?country=KOR~CMR~~BGD~USA~GBR": "total-government-expenditure-on-education-gdp.json",
    "https://ourworldindata.org/grapher/national-average-learning-outcomes-vs-government-expenditure-per-primary-student": "national-average-learning-outcomes-vs-government-expenditure-per-primary-student.json",
    "https://ourworldindata.org/grapher/youth-not-in-education-employment-training": "youth-not-in-education-employment-training.json",
    "https://ourworldindata.org/grapher/political-regime-type-vs-human-rights-score": "political-regime-type-vs-human-rights-score.json",
    "https://ourworldindata.org/grapher/political-regime-updated2016": "political-regime-updated2016.json",
    "https://ourworldindata.org/grapher/political-regimes": "political-regimes.json",
    "https://ourworldindata.org/grapher/share-of-people-paying-bribes-vs-corruption-perception": "share-of-people-paying-bribes-vs-corruption-perception.json",
    "https://ourworldindata.org/grapher/human-rights-scores?country=~CHN~HUN~PRK~KOR~NOR~ALB": "human-rights-scores.json",
    "https://ourworldindata.org/grapher/human-rights-violations": "human-rights-violations.json",
    "https://ourworldindata.org/grapher/world-map-of-the-freedom-of-the-press-status": "world-map-of-the-freedom-of-the-press-status.json",
    "https://ourworldindata.org/grapher/refugee-population-by-country-or-territory-of-asylum": "refugee-population-by-country-or-territory-of-asylum.json",
    "https://ourworldindata.org/grapher/share-who-trust-government": "share-who-trust-government.json",
    "https://ourworldindata.org/grapher/political-participation": "political-participation.json",
    "https://ourworldindata.org/grapher/gdp-per-capita-vs-state-fragility": "gdp-per-capita-vs-state-fragility.json",
    "https://ourworldindata.org/grapher/world-press-freedom": "world-press-freedom.json",
    "https://ourworldindata.org/grapher/share-of-women-between-15-and-19-years-old-with-no-education": "share-of-women-between-15-and-19-years-old-with-no-education.json",
    "https://ourworldindata.org/grapher/total-net-enrollment-rate-in-primary-education-by-sex": "total-net-enrollment-rate-in-primary-education-by-sex.json",
    "https://ourworldindata.org/grapher/gender-inequality-index-from-the-human-development-report": "gender-inequality-index-from-the-human-development-report.json",
    "https://ourworldindata.org/grapher/proportion-of-women-in-senior-and-middle-management-positions?tab=chart": "proportion-of-women-in-senior-and-middle-management-positions.json",
    "https://ourworldindata.org/grapher/firms-with-female-top-manager-of-firms-bars": "firms-with-female-top-manager-of-firms-bars.json",
    "https://ourworldindata.org/grapher/womens-economic-rights": "womens-economic-rights.json",
    "https://ourworldindata.org/grapher/womens-economic-opportunity-2012-index": "womens-economic-opportunity-2012-index.json",
    "https://ourworldindata.org/grapher/gender-wage-gap-oecd?tab=map": "gender-wage-gap-oecd.json",
    "https://ourworldindata.org/grapher/law-mandate-equal-pay": "law-mandate-equal-pay.json",
    "https://ourworldindata.org/grapher/gpi-primary-education": "gpi-primary-education.json",
    "https://ourworldindata.org/grapher/gross-enrolment-gpi-secondary": "gross-enrolment-gpi-secondary.json",
    "https://ourworldindata.org/grapher/gpi-tertiary-education": "gpi-tertiary-education.json",
    "https://ourworldindata.org/grapher/share-of-male-vs-female-employment-in-agri": "share-of-male-vs-female-employment-in-agri.json",
    "https://ourworldindata.org/grapher/share-of-male-vs-female-employment-in-industry": "share-of-male-vs-female-employment-in-industry.json",
    "https://ourworldindata.org/grapher/share-of-male-vs-female-employment-in-services": "share-of-male-vs-female-employment-in-services.json",
    "https://ourworldindata.org/grapher/unemployment-rate-women": "unemployment-rate-women.json",
    "https://ourworldindata.org/grapher/maternal-mortality-slope-chart?tab=map": "maternal-mortality-slope-chart.json",
    "https://ourworldindata.org/grapher/adolescent-fertility-ihme": "adolescent-fertility-ihme.json",
    "https://ourworldindata.org/grapher/proportion-of-women-in-ministerial-positions": "proportion-of-women-in-ministerial-positions.json",
    "https://www.kaggle.com/dmi3kno/wikipedia-english-speaking-population": "wikipedia_eng_lng_pop.json",
    "https://ourworldindata.org/grapher/homicide-rate-ihme-vs-world-bank": "homicide-rate-ihme-vs-world-bank.json",
    "https://ourworldindata.org/grapher/suicide-vs-homicide-rate": "suicide-vs-homicide-rate.json",
    "https://ourworldindata.org/grapher/deaths-by-age-group-stacked?country=~OWID_WRL": "deaths-by-age-group-stacked.json",
    "https://ourworldindata.org/grapher/number-of-nuclear-warheads-in-the-inventory-of-the-nuclear-powers": "number-of-nuclear-warheads-in-the-inventory-of-the-nuclear-powers.json",
    "https://ourworldindata.org/grapher/deaths-from-conflict-and-terrorism": "deaths-from-conflict-and-terrorism.json",
    "https://ourworldindata.org/grapher/terrorist-incidents": "terrorist-incidents.json",
    "https://ourworldindata.org/grapher/share-of-children-ages-13-15-who-report-being-bullied": "share-of-children-ages-13-15-who-report-being-bullied.json",
    "https://ourworldindata.org/grapher/happiness-cantril-ladder": "happiness-cantril-ladder.json",
    "https://ourworldindata.org/grapher/depression-ihme-vs-who": "depression-ihme-vs-who.json",
    "https://ourworldindata.org/grapher/suicide-rates-vs-prevalence-of-depression": "suicide-rates-vs-prevalence-of-depression.json",
    "https://ourworldindata.org/grapher/hospital-beds-per-1000-people": "hospital-beds-per-1000-people.json",
    "https://ourworldindata.org/grapher/healthcare-access-and-quality-index": "healthcare-access-and-quality-index.json",
    "https://ourworldindata.org/grapher/universal-health-coverage-index?country=LBR~HND~LVA~KHM": "universal-health-coverage-index.json",
    "https://ourworldindata.org/grapher/haq-by-level-of-healthcare-spending-endpoints": "HAQ-by-level-of-healthcare-spending-endpoints.json",
    "https://ourworldindata.org/grapher/annual-healthcare-expenditure-per-capita": "annual-healthcare-expenditure-per-capita.json",
    "https://ourworldindata.org/grapher/share-of-out-of-pocket-expenditure-on-healthcare": "share-of-out-of-pocket-expenditure-on-healthcare.json",
    "https://ourworldindata.org/grapher/share-of-the-population-at-risk-of-catastrophic-expenditure-when-surgical-care-is-required": "share-of-the-population-at-risk-of-catastrophic-expenditure-when-surgical-care-is-required.json",
    "https://ourworldindata.org/grapher/health-protection-coverage": "health-protection-coverage.json",
    "https://ourworldindata.org/grapher/private-health-expenditure-per-person": "private-health-expenditure-per-person.json",
    "https://digitalcommons.unf.edu/datasets/1/": "lgbt.json"
}

export const datasetsMappingByTheme = {
    "Air Pollution": [
        {
            name: "Exposure to air pollution with fine particulate matter",
            dataset: "PM25-air-pollution.json",
            fields: ["PM2"],
            treatData: getPm25DataTreated
        },
        {
            name: "Death Rates from Ambient Air Pollution",
            dataset: "death-rates-from-ambient-particulate-air-pollution.json",
            fields: ["Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)"]
        },
        {
            name: "Death Rates from Total Air Pollution",
            dataset: "death-rates-total-air-pollution.json",
            fields: ["Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Rate)"]
        },
        {
            name: "Death Rates from Outdoor Air Pollution",
            dataset: "outdoor-pollution-death-rate.json",
            fields: ["Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Rate)"]
        },
        {
            name: "Death Rates from Air Pollution",
            dataset: "share-deaths-air-pollution.json",
            fields: ["Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Percent)"]
        },
        {
            name: "Share of Deaths from Outdoor Air Pollution",
            dataset: "share-deaths-outdoor-pollution.json",
            fields: ["Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Percent)"]
        },
    ],
    "Natural Distaster": [
        {
            name: "Number of Significant Earthquakes",
            dataset: "significant-earthquakes.json",
            fields: ["Significant earthquake events (NGDC-NASA)"]
        },
        {
            name: "Direct Economic Loss Attributed to Disasters",
            dataset: "direct-economic-loss-attributed-to-disasters.json",
            fields: ["2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS"],
            treatData: getDirectEconomicLossAttributedToDisastersDataTreated
        },
        {
            name: "Significant Volcanic Eruptions",
            dataset: "significant-volcanic-eruptions.json",
            fields: ["Number of significant volcanic eruptions (NGDC-WDS)"]
        },
        {
            name: "Internally Displaced Persons From Disasters",
            dataset: "internally-displaced-persons-from-disasters.json",
            fields: ["Internally displaced persons, new displacement associated with disasters (number of cases)"]
        },
    ],
    "Climate Change": [
        {
            name: "Share Electricity From Renewables",
            dataset: "share-electricity-renewables.json",
            fields: ["Renewables (% electricity)"]
        },
        {
            name: "Fossil Fuel Production",
            dataset: "fossil-fuel-production.json",
            fields: ["Coal Production - TWh", "Oil Production - TWh", "Gas Production - TWh"]
        },
        {
            name: "Fossil Fuel Primary Energy",
            dataset: "fossil-fuel-primary-energy.json",
            fields: ["Fossil Fuels (TWh)"]
        },
        {
            name: "Share Electricity From Fossil Fuels",
            dataset: "share-electricity-fossil-fuels.json",
            fields: ["Fossil fuels (% electricity)"]
        },
    ],
    "Food": [
        {
            name: "LANCET Diet Comparison",
            dataset: "eat-lancet-diet-comparison.json",
            fields: ["cereals", "roots_tubers", "vegetables", "fruits", "milk_equivalents", "poultry", "eggs", "seafood", "legumes", "nuts", "oils", "sugar"]
        },
        {
            name: "Annual Food Expenditure",
            dataset: "annual-food-expenditure-per-person-vs-gdp-per-capita.json",
            fields: ["Food expenditure (USDA (2017))"]
        },
        {
            name: "Cost Healthy Diet",
            dataset: "cost-healthy-diet.json",
            fields: ["Cost of healthy diet (2017 USD per day)"]
        },
        {
            name: "Share Of Consumer Expenditure Spent on Food",
            dataset: "share-of-consumer-expenditure-spent-on-food.json",
            fields: ["Share of consumer expenditure on food (USDA (2017))"]
        },
        {
            name: "Daily Protein Supply Of Animal Origin vs Plant Origin",
            dataset: "daily-protein-supply-of-animal-origin-vs-plant-origin.json",
            fields: ["Daily protein supply of plant origin (FAO (2017))", "Daily protein supply of animal origin (FAO (2017))"]
        },
        {
            name: "Antibiotic Use In Livestock",
            dataset: "antibiotic-use-in-livestock.json",
            fields: ["Antibiotic use in livestock"]
        },
        {
            name: "Daily Meat Consumption",
            dataset: "daily-meat-consumption-per-person.json",
            fields: ["Food Balance Sheets: Meat - Food supply quantity (kg/capita/yr) (FAO (2017))"]
        },
        {
            name: "Daily Fat Supply",
            dataset: "daily-per-capita-fat-supply.json",
            fields: ["Fat supply quantity (g/capita/day) (FAO, 2020)"]
        },
        {
            name: "Daily Calories Supply",
            dataset: "daily-per-capita-supply-of-calories.json",
            fields: ["Daily caloric supply (FAO (2017) & Various historical sources)"]
        },
        {
            name: "Daily Protein Supply",
            dataset: "daily-per-capita-protein-supply.json",
            fields: ["Protein supply quantity (g/capita/day) (FAO, 2020)"]
        },
        {
            name: "Daily Sugar Supply",
            dataset: "per-capita-sugar-food-supply-vs-gdp-per-capita.json",
            fields: ["Food Balance Sheets: Sugar (Raw Equivalent) - Food supply (kcal/capita/day) (FAO (2017))"]
        },
    ],
    "Income": [
        {
            name: "Starting Yearly Teacher Salaries In Public Primary Education",
            dataset: "starting-yearly-teacher-salaries-in-public-primary-education.json",
            fields: ["Annual statutory teacher salaries in public institutions in USD"],
            treatData: getStartingYearlyTeacherSalariesInPublicPrimaryEducationDataTreated
        },
        {
            name: "Economic Inequality",
            dataset: "gdp-per-capita-vs-economic-inequality.json",
            fields: ["Gini index (World Bank estimate)"]
        },
        {
            name: "Share of Top 1% in Pre-tax national income",
            dataset: "share-of-top-1-in-pre-tax-national-income.json",
            fields: ["Share of Top 1% in Pre-tax national income"]
        },
        {
            name: "Disposable Household Income",
            dataset: "1st-d.json",
            fields: ["1st (Incomes across the Distribution Database (2016))"]
        },
        {
            name: "Median Income",
            dataset: "median-income-EEG.json",
            fields: ["5th (Incomes across the Distribution Database (2016))"]
        },
        {
            name: "Maximum Marginal Tax Rates on Individual Income",
            dataset: "maximum-marginal-tax-rates-on-individual-income.json",
            fields: ["Top marginal income tax rate (Reynolds (2008))"]
        },
    ],
    "Education": [
        {
            name: "OECD Pisa Test Scores",
            dataset: "oecd-pisa-test-scores-for-selected-countries-2000-2012.json",
            fields: ["OECD PISA education score (PISA (2015))"]
        },
        {
            name: "Gross Enrollment Ratio in Secondary Education",
            dataset: "gross-enrollment-ratio-in-secondary-education.json",
            fields: ["Gross enrolment ratio, secondary, both sexes (%)"]
        },
        {
            name: "Share of Population With Completed Tertiary Education",
            dataset: "share-of-the-population-with-completed-tertiary-education.json",
            fields: ["Barro-Lee: Percentage of population age 15+ with tertiary schooling"],
            treatData: getShareOfPopulationWithCompletedTertiaryEducationDataTreated
        },
        {
            name: "Number of Teachers across Education Levels",
            dataset: "number-of-teachers-across-education-levels.json",
            fields: ["Teachers in pre-primary education, both sexes (number)", "Teachers in primary education, both sexes (number)", "Teachers in lower secondary education, both sexes (number)", "Teachers in upper secondary education, both sexes (number)", "Teachers in tertiary education programmes, both sexes (number)",]
        },
        {
            name: "Completion Rate of Lower Secondary Education",
            dataset: "completion-rate-of-lower-secondary-education.json",
            fields: ["Lower secondary completion rate, both sexes (%)"]
        },
        {
            name: "Duration of Compulsory Education",
            dataset: "duration-of-compulsory-education.json",
            fields: ["Duration of compulsory education (years)"]
        },
        {
            name: "Total Government Expenditure on Education",
            dataset: "total-government-expenditure-on-education-gdp.json",
            fields: ["Government expenditure on education, total (% of GDP)"]
        },
        {
            name: "National Average Learning Outcomes",
            dataset: "national-average-learning-outcomes-vs-government-expenditure-per-primary-student.json",
            fields: ["Average harmonised learning outcome score in 2005-2015 (Altinok, Angrist, and Patrinos, 2018)"]
        },
        {
            name: "Share of Youth not in Education, Employment or Training",
            dataset: "youth-not-in-education-employment-training.json",
            fields: ["Share of youth not in education, employment or training, total (% of youth population)"]
        },
    ],
    "Democracy": [
        {
            name: "Political Regime Type and Humans Rights Score",
            dataset: "political-regime-type-vs-human-rights-score.json",
            fields: ["Regimes of the world -- the RoW measure"]
        },
        {
            name: "Political Regimes - 2016",
            dataset: "political-regime-updated2016.json",
            fields: ["Political Regime (OWID based on Polity IV and Wimmer & Min)"]
        },
        {
            name: "Political Regimes",
            dataset: "political-regimes.json",
            fields: ["Political regime"]
        },
        {
            name: "Share of People Paying Bribes and Corruption Perception",
            dataset: "share-of-people-paying-bribes-vs-corruption-perception.json",
            fields: ["Corruption Perception Index - Transparency International (2018)", "Bribery Rate (%)"]
        },
        {
            name: "Human Rights Scores",
            dataset: "human-rights-scores.json",
            fields: ["Human Rights Score (Schnakenberg & Fariss, 2014; Fariss, 2019)"]
        },
        {
            name: "Human Rights Violations",
            dataset: "human-rights-violations.json",
            fields: ["Fund for Peace (Fragile States Index (Human Rights Dimension))"]
        },
        {
            name: "Freedom of Press",
            dataset: "world-map-of-the-freedom-of-the-press-status.json",
            fields: ["Freedom of the Press Status"]
        },
        {
            name: "Refugee Population",
            dataset: "refugee-population-by-country-or-territory-of-asylum.json",
            fields: ["Refugee population by country or territory of asylum"]
        },
        {
            name: "Share of People who Trust the Government",
            dataset: "share-who-trust-government.json",
            fields: ["Share of people who trust their national government"]
        },
        {
            name: "Political Participation",
            dataset: "political-participation.json",
            fields: ["Political Participation (Vanhanen (2015))"]
        },
        {
            name: "State Fragility",
            dataset: "gdp-per-capita-vs-state-fragility.json",
            fields: ["Fragile States Index - ffp_fsi"]
        },
        {
            name: "World Press Freedom",
            dataset: "world-press-freedom.json",
            fields: ["Press Freedom Score"]
        },
    ],
    "Gender Rights": [
        {
            name: "Share of Young Women With No Education",
            dataset: "share-of-women-between-15-and-19-years-old-with-no-education.json",
            fields: ["Barro-Lee: Percentage of female population age 15-19 with no education"]
        },
        {
            name: "Total net Enrollment Rate in Primary Education",
            dataset: "total-net-enrollment-rate-in-primary-education-by-sex.json",
            fields: ["Total net enrolment rate, primary, female (%)"]
        },
        {
            name: "Gender Inequality Index",
            dataset: "gender-inequality-index-from-the-human-development-report.json",
            fields: ["Gender Inequality Index (Human Development Report (2015))"]
        },
        {
            name: "Proportion of Women in Senior and Middle Management Positions",
            dataset: "proportion-of-women-in-senior-and-middle-management-positions.json",
            fields: ["2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN"],
            treatData: getProportionOfWomenInSeniorAndMiddlePositionsDataTreated
        },
        {
            name: "Firms with Female Top Managers",
            dataset: "firms-with-female-top-manager-of-firms-bars.json",
            fields: ["Firms with female top manager (% of firms)"]
        },
        {
            name: "Womens Economic Rights",
            dataset: "womens-economic-rights.json",
            fields: ["Women's Economic Rights - ciri_wecon"]
        },
        {
            name: "Womens Economic Opportunity",
            dataset: "womens-economic-opportunity-2012-index.json",
            fields: ["WEO Index overall score (Economist Intelligence Unit (2012))"]
        },
        {
            name: "Gender Wage Gap",
            dataset: "gender-wage-gap-oecd.json",
            fields: ["Gender wage gap (OECD 2017)"]
        },
        {
            name: "Law Mandated Equal Pay",
            dataset: "law-mandate-equal-pay.json",
            fields: ["Law mandates equal remuneration for females and males for work of equal value (1=yes; 0=no)"]
        },
        {
            name: "Gender Parity Index Primary Education",
            dataset: "gpi-primary-education.json",
            fields: ["Gross enrolment ratio, primary, gender parity index (GPI)"]
        },
        {
            name: "Gender Parity Index Secondary Education",
            dataset: "gross-enrolment-gpi-secondary.json",
            fields: ["Gross enrolment ratio, secondary, both sexes (%)"]
        },
        {
            name: "Gender Parity Index Tertiary Education",
            dataset: "gpi-tertiary-education.json",
            fields: ["Gross enrolment ratio, tertiary, gender parity index (GPI)"]
        },
        {
            name: "Share Female Employment in Agriculture",
            dataset: "share-of-male-vs-female-employment-in-agri.json",
            fields: ["Employment in agriculture, female (% of female employment) (modeled ILO estimate)"]
        },
        {
            name: "Share Female Employment in Industry",
            dataset: "share-of-male-vs-female-employment-in-industry.json",
            fields: ["Employment in industry, female (% of female employment) (modeled ILO estimate)"]
        },
        {
            name: "Share Female Employment in Services",
            dataset: "share-of-male-vs-female-employment-in-services.json",
            fields: ["Employment in services, female (% of female employment) (modeled ILO estimate)"]
        },
        {
            name: "Unemployment Rate Women",
            dataset: "unemployment-rate-women.json",
            fields: ["Unemployment rate, women -- ILO modelled estimates, May 2017 (%)"]
        },
        {
            name: "Maternal Mortality",
            dataset: "maternal-mortality-slope-chart.json",
            fields: ["Maternal mortality ratio (modeled estimate, per 100,000 live births)"]
        },
        {
            name: "Adolescent Birth Rate",
            dataset: "adolescent-fertility-ihme.json",
            fields: ["2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled"],
            treatData: getAdolescentBirthRateDataTreated
        },
        {
            name: "Proportion of Women in Ministerial Positions",
            dataset: "proportion-of-women-in-ministerial-positions.json",
            fields: ["Proportion of women in ministerial level positions (%)"]
        },
    ],
    "Language": [
        {
            name: "Share Of English Speaking Population",
            dataset: "wikipedia_eng_lng_pop.json",
            fields: ["Total English speakers (%)"]
        }
    ],
    "Safety": [
        {
            name: "Homicide Rate",
            dataset: "homicide-rate-ihme-vs-world-bank.json",
            fields: ["Deaths - Interpersonal violence - Sex: Both - Age: All Ages (Rate)", "Intentional homicides (per 100,000 people)"]
        },
        {
            name: "Suicide Rate",
            dataset: "suicide-vs-homicide-rate.json",
            fields: ["Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)"]
        },
        {
            name: "Deaths by Age Group",
            dataset: "deaths-by-age-group-stacked.json",
            fields: ["Deaths - All causes - Sex: Both - Age: Under 5 (Number)", "Deaths - All causes - Sex: Both - Age: 5-14 years (Number)", "Deaths - All causes - Sex: Both - Age: 15-49 years (Number)", "Deaths - All causes - Sex: Both - Age: 50-69 years (Number)", "Deaths - All causes - Sex: Both - Age: 70+ years (Number)"]
        },
        {
            name: "Number Of Nuclear Warheads In Inventory of Nuclear Powers",
            dataset: "number-of-nuclear-warheads-in-the-inventory-of-the-nuclear-powers.json",
            fields: ["Nuclear weapons inventory by country (FAS Nuclear Notebook)"]
        },
        {
            name: "Deaths From Conflict And Terrorism",
            dataset: "deaths-from-conflict-and-terrorism.json",
            fields: ["Deaths - Conflict and terrorism - Sex: Both - Age: All Ages (Number)"]
        },
        {
            name: "Terrorist Incidents",
            dataset: "terrorist-incidents.json",
            fields: ["Number of terrorist incidents (GDT, 2018)"]
        },
        {
            name: "Share Of Children who Report Being Bullied",
            dataset: "share-of-children-ages-13-15-who-report-being-bullied.json",
            fields: ["Children (13-15) who reported being bullied"]
        },
    ],
    "Happiness": [
        {
            name: "Happiness Cantril Ladder",
            dataset: "happiness-cantril-ladder.json",
            fields: ["Life satisfaction in Cantril Ladder (World Happiness Report 2021)"]
        },
        {
            name: "Depression Rate",
            dataset: "depression-ihme-vs-who.json",
            fields: ["Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Percent)", "Indicator:Estimated population-based prevalence of depression"]
        },
        {
            name: "Suicide Rate",
            dataset: "suicide-rates-vs-prevalence-of-depression.json",
            fields: ["Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)"]
        },
    ],
    "Health": [
        {
            name: "Hospital Beds",
            dataset: "hospital-beds-per-1000-people.json",
            fields: ["Hospital beds (per 1,000 people)"]
        },
        {
            name: "Healthcare Access and Quality",
            dataset: "healthcare-access-and-quality-index.json",
            fields: ["HAQ Index (IHME (2017))"]
        },
        {
            name: "Universal Health Coverage Index",
            dataset: "universal-health-coverage-index.json",
            fields: ["1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC"],
            treatData: getUniversalHealthCoverageIndexDataTreated
        },
        {
            name: "Level Of Healthcare Spending",
            dataset: "HAQ-by-level-of-healthcare-spending-endpoints.json",
            fields: ["Current health expenditure per capita, PPP (current international $)"]
        },
        {
            name: "Annual Healthcare Expenditure",
            dataset: "annual-healthcare-expenditure-per-capita.json",
            fields: ["Health expenditure per capita, PPP (constant 2011 international $)"]
        },
        {
            name: "Share of Out of Pocket Expenditure on Healthcare",
            dataset: "share-of-out-of-pocket-expenditure-on-healthcare.json",
            fields: ["Out-of-pocket health expenditure (% of total expenditure on health)"]
        },
        {
            name: "Share of Population at Risk of Catastrophic Expenditure on Healthcare",
            dataset: "share-of-the-population-at-risk-of-catastrophic-expenditure-when-surgical-care-is-required.json",
            fields: ["Risk of catastrophic expenditure for surgical care (% of people at risk)"]
        },
        {
            name: "Health Protection Coverage",
            dataset: "health-protection-coverage.json",
            fields: ["Share of population covered by health insurance (ILO (2014))"]
        },
        {
            name: "Private Health Expenditure",
            dataset: "private-health-expenditure-per-person.json",
            fields: ["Domestic private health expenditure per capita, PPP (current international $)"]
        },
    ],
    "LGBTQI+ Rights": [
        {
            name: "LGBTQI+ Rights",
            dataset: "lgbt.json",
            fields: ["Religiosity", "SHI", "legality of sam-sex sexual-activity", "marriage/ civil unions", "serving in the military", "antidiscrimination laws",]
        }
    ],
}

export interface ThemeMappingItem {
    name: string,
    dataset: string,
    fields: string[],
    treatData?: (raw: any) => any
}
