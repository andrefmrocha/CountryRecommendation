import {
	getAdolescentBirthRateDataTreated,
	getDirectEconomicLossAttributedToDisastersDataTreated,
	getPm25DataTreated,
	getProportionOfWomenInSeniorAndMiddlePositionsDataTreated,
	getShareOfPopulationWithCompletedTertiaryEducationDataTreated,
	getStartingYearlyTeacherSalariesInPublicPrimaryEducationDataTreated,
	getUniversalHealthCoverageIndexDataTreated,
} from "./models"

export const datasetsMapping = {
	"https://ourworldindata.org/grapher/pm25-air-pollution":
		"PM25-air-pollution.json",
	"https://ourworldindata.org/grapher/death-rates-from-ambient-particulate-air-pollution":
		"death-rates-from-ambient-particulate-air-pollution.json",
	"https://ourworldindata.org/grapher/death-rates-total-air-pollution?yScale=log":
		"death-rates-total-air-pollution.json",
	"https://ourworldindata.org/grapher/outdoor-pollution-death-rate":
		"outdoor-pollution-death-rate.json",
	"https://ourworldindata.org/grapher/share-deaths-air-pollution":
		"share-deaths-air-pollution.json",
	"https://ourworldindata.org/grapher/share-deaths-outdoor-pollution":
		"share-deaths-outdoor-pollution.json",
	"https://ourworldindata.org/grapher/significant-earthquakes":
		"significant-earthquakes.json",
	"https://ourworldindata.org/grapher/direct-economic-loss-attributed-to-disasters":
		"direct-economic-loss-attributed-to-disasters.json",
	"https://ourworldindata.org/grapher/significant-volcanic-eruptions":
		"significant-volcanic-eruptions.json",
	"https://ourworldindata.org/grapher/internally-displaced-persons-from-disasters":
		"internally-displaced-persons-from-disasters.json",
	"https://ourworldindata.org/grapher/share-electricity-renewables":
		"share-electricity-renewables.json",
	"https://ourworldindata.org/grapher/fossil-fuel-production":
		"fossil-fuel-production.json",
	"https://ourworldindata.org/grapher/fossil-fuel-primary-energy":
		"fossil-fuel-primary-energy.json",
	"https://ourworldindata.org/grapher/share-electricity-fossil-fuels":
		"share-electricity-fossil-fuels.json",
	"https://ourworldindata.org/grapher/eat-lancet-diet-comparison?country=USA~GBR~EAT-Lancet~IND~KEN":
		"eat-lancet-diet-comparison.json",
	"https://ourworldindata.org/grapher/annual-food-expenditure-per-person-vs-gdp-per-capita":
		"annual-food-expenditure-per-person-vs-gdp-per-capita.json",
	"https://ourworldindata.org/grapher/cost-healthy-diet?country=USA~GBR~IND~CHN~AUT~MWI~MYS~BRA~FRA~SWE~CHE~BGD~JPN":
		"cost-healthy-diet.json",
	"https://ourworldindata.org/grapher/share-of-consumer-expenditure-spent-on-food":
		"share-of-consumer-expenditure-spent-on-food.json",
	"https://ourworldindata.org/grapher/daily-protein-supply-of-animal-origin-vs-plant-origin":
		"daily-protein-supply-of-animal-origin-vs-plant-origin.json",
	"https://ourworldindata.org/grapher/antibiotic-use-in-livestock":
		"antibiotic-use-in-livestock.json",
	"https://ourworldindata.org/grapher/daily-meat-consumption-per-person":
		"daily-meat-consumption-per-person.json",
	"https://ourworldindata.org/grapher/daily-per-capita-fat-supply":
		"daily-per-capita-fat-supply.json",
	"https://ourworldindata.org/grapher/daily-per-capita-supply-of-calories":
		"daily-per-capita-supply-of-calories.json",
	"https://ourworldindata.org/grapher/daily-per-capita-protein-supply?country=MDV~SUR":
		"daily-per-capita-protein-supply.json",
	"https://ourworldindata.org/grapher/per-capita-sugar-food-supply-vs-gdp-per-capita":
		"per-capita-sugar-food-supply-vs-gdp-per-capita.json",
	"https://ourworldindata.org/grapher/starting-yearly-teacher-salaries-in-public-primary-education":
		"starting-yearly-teacher-salaries-in-public-primary-education.json",
	"https://ourworldindata.org/grapher/gdp-per-capita-vs-economic-inequality":
		"gdp-per-capita-vs-economic-inequality.json",
	"https://ourworldindata.org/grapher/share-of-top-1-in-pre-tax-national-income":
		"share-of-top-1-in-pre-tax-national-income.json",
	"https://ourworldindata.org/grapher/1st-d": "1st-d.json",
	"https://ourworldindata.org/grapher/median-income-eeg":
		"median-income-EEG.json",
	"https://ourworldindata.org/grapher/maximum-marginal-tax-rates-on-individual-income?time=1979..2002":
		"maximum-marginal-tax-rates-on-individual-income.json",
	"https://ourworldindata.org/grapher/oecd-pisa-test-scores-for-selected-countries-2000-2012":
		"oecd-pisa-test-scores-for-selected-countries-2000-2012.json",
	"https://ourworldindata.org/grapher/gross-enrollment-ratio-in-secondary-education":
		"gross-enrollment-ratio-in-secondary-education.json",
	"https://ourworldindata.org/grapher/share-of-the-population-with-completed-tertiary-education":
		"share-of-the-population-with-completed-tertiary-education.json",
	"https://ourworldindata.org/grapher/number-of-teachers-across-education-levels?tab=table&country=~OWID_WRL":
		"number-of-teachers-across-education-levels.json",
	"https://ourworldindata.org/grapher/completion-rate-of-lower-secondary-education":
		"completion-rate-of-lower-secondary-education.json",
	"https://ourworldindata.org/grapher/duration-of-compulsory-education":
		"duration-of-compulsory-education.json",
	"https://ourworldindata.org/grapher/total-government-expenditure-on-education-gdp?country=KOR~CMR~~BGD~USA~GBR":
		"total-government-expenditure-on-education-gdp.json",
	"https://ourworldindata.org/grapher/national-average-learning-outcomes-vs-government-expenditure-per-primary-student":
		"national-average-learning-outcomes-vs-government-expenditure-per-primary-student.json",
	"https://ourworldindata.org/grapher/youth-not-in-education-employment-training":
		"youth-not-in-education-employment-training.json",
	"https://ourworldindata.org/grapher/political-regime-type-vs-human-rights-score":
		"political-regime-type-vs-human-rights-score.json",
	"https://ourworldindata.org/grapher/political-regime-updated2016":
		"political-regime-updated2016.json",
	"https://ourworldindata.org/grapher/political-regimes":
		"political-regimes.json",
	"https://ourworldindata.org/grapher/share-of-people-paying-bribes-vs-corruption-perception":
		"share-of-people-paying-bribes-vs-corruption-perception.json",
	"https://ourworldindata.org/grapher/human-rights-scores?country=~CHN~HUN~PRK~KOR~NOR~ALB":
		"human-rights-scores.json",
	"https://ourworldindata.org/grapher/human-rights-violations":
		"human-rights-violations.json",
	"https://ourworldindata.org/grapher/world-map-of-the-freedom-of-the-press-status":
		"world-map-of-the-freedom-of-the-press-status.json",
	"https://ourworldindata.org/grapher/refugee-population-by-country-or-territory-of-asylum":
		"refugee-population-by-country-or-territory-of-asylum.json",
	"https://ourworldindata.org/grapher/share-who-trust-government":
		"share-who-trust-government.json",
	"https://ourworldindata.org/grapher/political-participation":
		"political-participation.json",
	"https://ourworldindata.org/grapher/gdp-per-capita-vs-state-fragility":
		"gdp-per-capita-vs-state-fragility.json",
	"https://ourworldindata.org/grapher/world-press-freedom":
		"world-press-freedom.json",
	"https://ourworldindata.org/grapher/share-of-women-between-15-and-19-years-old-with-no-education":
		"share-of-women-between-15-and-19-years-old-with-no-education.json",
	"https://ourworldindata.org/grapher/total-net-enrollment-rate-in-primary-education-by-sex":
		"total-net-enrollment-rate-in-primary-education-by-sex.json",
	"https://ourworldindata.org/grapher/gender-inequality-index-from-the-human-development-report":
		"gender-inequality-index-from-the-human-development-report.json",
	"https://ourworldindata.org/grapher/proportion-of-women-in-senior-and-middle-management-positions?tab=chart":
		"proportion-of-women-in-senior-and-middle-management-positions.json",
	"https://ourworldindata.org/grapher/firms-with-female-top-manager-of-firms-bars":
		"firms-with-female-top-manager-of-firms-bars.json",
	"https://ourworldindata.org/grapher/womens-economic-rights":
		"womens-economic-rights.json",
	"https://ourworldindata.org/grapher/womens-economic-opportunity-2012-index":
		"womens-economic-opportunity-2012-index.json",
	"https://ourworldindata.org/grapher/gender-wage-gap-oecd?tab=map":
		"gender-wage-gap-oecd.json",
	"https://ourworldindata.org/grapher/law-mandate-equal-pay":
		"law-mandate-equal-pay.json",
	"https://ourworldindata.org/grapher/gpi-primary-education":
		"gpi-primary-education.json",
	"https://ourworldindata.org/grapher/gross-enrolment-gpi-secondary":
		"gross-enrolment-gpi-secondary.json",
	"https://ourworldindata.org/grapher/gpi-tertiary-education":
		"gpi-tertiary-education.json",
	"https://ourworldindata.org/grapher/share-of-male-vs-female-employment-in-agri":
		"share-of-male-vs-female-employment-in-agri.json",
	"https://ourworldindata.org/grapher/share-of-male-vs-female-employment-in-industry":
		"share-of-male-vs-female-employment-in-industry.json",
	"https://ourworldindata.org/grapher/share-of-male-vs-female-employment-in-services":
		"share-of-male-vs-female-employment-in-services.json",
	"https://ourworldindata.org/grapher/unemployment-rate-women":
		"unemployment-rate-women.json",
	"https://ourworldindata.org/grapher/maternal-mortality-slope-chart?tab=map":
		"maternal-mortality-slope-chart.json",
	"https://ourworldindata.org/grapher/adolescent-fertility-ihme":
		"adolescent-fertility-ihme.json",
	"https://ourworldindata.org/grapher/proportion-of-women-in-ministerial-positions":
		"proportion-of-women-in-ministerial-positions.json",
	"https://www.kaggle.com/dmi3kno/wikipedia-english-speaking-population":
		"wikipedia_eng_lng_pop.json",
	"https://ourworldindata.org/grapher/homicide-rate-ihme-vs-world-bank":
		"homicide-rate-ihme-vs-world-bank.json",
	"https://ourworldindata.org/grapher/suicide-vs-homicide-rate":
		"suicide-vs-homicide-rate.json",
	"https://ourworldindata.org/grapher/deaths-by-age-group-stacked?country=~OWID_WRL":
		"deaths-by-age-group-stacked.json",
	"https://ourworldindata.org/grapher/number-of-nuclear-warheads-in-the-inventory-of-the-nuclear-powers":
		"number-of-nuclear-warheads-in-the-inventory-of-the-nuclear-powers.json",
	"https://ourworldindata.org/grapher/deaths-from-conflict-and-terrorism":
		"deaths-from-conflict-and-terrorism.json",
	"https://ourworldindata.org/grapher/terrorist-incidents":
		"terrorist-incidents.json",
	"https://ourworldindata.org/grapher/share-of-children-ages-13-15-who-report-being-bullied":
		"share-of-children-ages-13-15-who-report-being-bullied.json",
	"https://ourworldindata.org/grapher/happiness-cantril-ladder":
		"happiness-cantril-ladder.json",
	"https://ourworldindata.org/grapher/depression-ihme-vs-who":
		"depression-ihme-vs-who.json",
	"https://ourworldindata.org/grapher/suicide-rates-vs-prevalence-of-depression":
		"suicide-rates-vs-prevalence-of-depression.json",
	"https://ourworldindata.org/grapher/hospital-beds-per-1000-people":
		"hospital-beds-per-1000-people.json",
	"https://ourworldindata.org/grapher/healthcare-access-and-quality-index":
		"healthcare-access-and-quality-index.json",
	"https://ourworldindata.org/grapher/universal-health-coverage-index?country=LBR~HND~LVA~KHM":
		"universal-health-coverage-index.json",
	"https://ourworldindata.org/grapher/haq-by-level-of-healthcare-spending-endpoints":
		"HAQ-by-level-of-healthcare-spending-endpoints.json",
	"https://ourworldindata.org/grapher/annual-healthcare-expenditure-per-capita":
		"annual-healthcare-expenditure-per-capita.json",
	"https://ourworldindata.org/grapher/share-of-out-of-pocket-expenditure-on-healthcare":
		"share-of-out-of-pocket-expenditure-on-healthcare.json",
	"https://ourworldindata.org/grapher/share-of-the-population-at-risk-of-catastrophic-expenditure-when-surgical-care-is-required":
		"share-of-the-population-at-risk-of-catastrophic-expenditure-when-surgical-care-is-required.json",
	"https://ourworldindata.org/grapher/health-protection-coverage":
		"health-protection-coverage.json",
	"https://ourworldindata.org/grapher/private-health-expenditure-per-person":
		"private-health-expenditure-per-person.json",
	"https://digitalcommons.unf.edu/datasets/1/": "lgbt.json",
}

export const datasetsMappingByTheme: ThemeMapping = {
	"Air Pollution": [
		{
			name: "Exposure to air pollution with fine particulate matter",
			isUsed: false,
			dataset: "PM25-air-pollution.json",
			fields: ["PM2"],
			treatData: getPm25DataTreated,
		},
		{
			name: "Death Rates from Ambient Air Pollution",
			isUsed: false,
			dataset: "death-rates-from-ambient-particulate-air-pollution.json",
			fields: [
				"Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)",
			],
		},
		{
			name: "Death Rates from Total Air Pollution",
			isUsed: false,
			dataset: "death-rates-total-air-pollution.json",
			fields: [
				"Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Rate)",
			],
		},
		{
			name: "Death Rates from Outdoor Air Pollution",
			isUsed: false,
			dataset: "outdoor-pollution-death-rate.json",
			fields: [
				"Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Rate)",
			],
		},
		{
			name: "Death Rates from Air Pollution",
			isUsed: false,
			dataset: "share-deaths-air-pollution.json",
			fields: [
				"Deaths - Cause: All causes - Risk: Air pollution - Sex: Both - Age: Age-standardized (Percent)",
			],
		},
		{
			name: "Share of Deaths from Outdoor Air Pollution",
			isUsed: false,
			dataset: "share-deaths-outdoor-pollution.json",
			fields: [
				"Deaths - Cause: All causes - Risk: Outdoor air pollution - OWID - Sex: Both - Age: Age-standardized (Percent)",
			],
		},
	],
	"Natural Disasters": [
		{
			name: "Number of Significant Earthquakes",
			isUsed: false,
			dataset: "significant-earthquakes.json",
			fields: ["Significant earthquake events (NGDC-NASA)"],
		},
		{
			name: "Direct Economic Loss Attributed to Disasters",
			isUsed: false,
			dataset: "direct-economic-loss-attributed-to-disasters.json",
			fields: [
				"2 - Direct economic loss attributed to disasters (millions of current United States dollars) - VC_DSR_GDPLS",
			],
			treatData: getDirectEconomicLossAttributedToDisastersDataTreated,
		},
		{
			name: "Significant Volcanic Eruptions",
			isUsed: false,
			dataset: "significant-volcanic-eruptions.json",
			fields: ["Number of significant volcanic eruptions (NGDC-WDS)"],
		},
		{
			name: "Internally Displaced Persons From Disasters",
			isUsed: false,
			dataset: "internally-displaced-persons-from-disasters.json",
			fields: [
				"Internally displaced persons, new displacement associated with disasters (number of cases)",
			],
		},
	],
	"Climate Change": [
		{
			name: "Share Electricity From Renewables",
			isUsed: false,
			dataset: "share-electricity-renewables.json",
			fields: ["Renewables (% electricity)"],
		},
		{
			name: "Fossil Fuel Production",
			isUsed: false,
			dataset: "fossil-fuel-production.json",
			fields: [
				"Coal Production - TWh",
				"Oil Production - TWh",
				"Gas Production - TWh",
			],
		},
		{
			name: "Fossil Fuel Primary Energy",
			isUsed: false,
			dataset: "fossil-fuel-primary-energy.json",
			fields: ["Fossil Fuels (TWh)"],
		},
		{
			name: "Share Electricity From Fossil Fuels",
			isUsed: false,
			dataset: "share-electricity-fossil-fuels.json",
			fields: ["Fossil fuels (% electricity)"],
		},
	],
	Food: [
		{
			name: "LANCET Diet Comparison",
			isUsed: false,
			dataset: "eat-lancet-diet-comparison.json",
			fields: [
				"cereals",
				"roots_tubers",
				"vegetables",
				"fruits",
				"milk_equivalents",
				"poultry",
				"eggs",
				"seafood",
				"legumes",
				"nuts",
				"oils",
				"sugar",
			],
		},
		{
			name: "Annual Food Expenditure",
			isUsed: false,
			dataset: "annual-food-expenditure-per-person-vs-gdp-per-capita.json",
			fields: ["Food expenditure (USDA (2017))"],
		},
		{
			name: "Cost Healthy Diet",
			isUsed: false,
			dataset: "cost-healthy-diet.json",
			fields: ["Cost of healthy diet (2017 USD per day)"],
		},
		{
			name: "Share Of Consumer Expenditure Spent on Food",
			isUsed: false,
			dataset: "share-of-consumer-expenditure-spent-on-food.json",
			fields: ["Share of consumer expenditure on food (USDA (2017))"],
		},
		{
			name: "Daily Protein Supply Of Animal Origin vs Plant Origin",
			isUsed: false,
			dataset: "daily-protein-supply-of-animal-origin-vs-plant-origin.json",
			fields: [
				"Daily protein supply of plant origin (FAO (2017))",
				"Daily protein supply of animal origin (FAO (2017))",
			],
		},
		{
			name: "Antibiotic Use In Livestock",
			isUsed: false,
			dataset: "antibiotic-use-in-livestock.json",
			fields: ["Antibiotic use in livestock"],
		},
		{
			name: "Daily Meat Consumption",
			isUsed: false,
			dataset: "daily-meat-consumption-per-person.json",
			fields: [
				"Food Balance Sheets: Meat - Food supply quantity (kg/capita/yr) (FAO (2017))",
			],
		},
		{
			name: "Daily Fat Supply",
			isUsed: false,
			dataset: "daily-per-capita-fat-supply.json",
			fields: ["Fat supply quantity (g/capita/day) (FAO, 2020)"],
		},
		{
			name: "Daily Calories Supply",
			isUsed: false,
			dataset: "daily-per-capita-supply-of-calories.json",
			fields: [
				"Daily caloric supply (FAO (2017) & Various historical sources)",
			],
		},
		{
			name: "Daily Protein Supply",
			isUsed: false,
			dataset: "daily-per-capita-protein-supply.json",
			fields: ["Protein supply quantity (g/capita/day) (FAO, 2020)"],
		},
		{
			name: "Daily Sugar Supply",
			isUsed: false,
			dataset: "per-capita-sugar-food-supply-vs-gdp-per-capita.json",
			fields: [
				"Food Balance Sheets: Sugar (Raw Equivalent) - Food supply (kcal/capita/day) (FAO (2017))",
			],
		},
	],
	Income: [
		{
			name: "Starting Yearly Teacher Salaries In Public Primary Education",
			isUsed: false,
			dataset:
				"starting-yearly-teacher-salaries-in-public-primary-education.json",
			fields: [
				"Annual statutory teacher salaries in public institutions in USD",
			],
			treatData:
				getStartingYearlyTeacherSalariesInPublicPrimaryEducationDataTreated,
		},
		{
			name: "Economic Inequality",
			isUsed: false,
			dataset: "gdp-per-capita-vs-economic-inequality.json",
			fields: ["Gini index (World Bank estimate)"],
		},
		{
			name: "Share of Top 1% in Pre-tax national income",
			isUsed: false,
			dataset: "share-of-top-1-in-pre-tax-national-income.json",
			fields: ["Share of Top 1% in Pre-tax national income"],
		},
		{
			name: "Disposable Household Income",
			isUsed: false,
			dataset: "1st-d.json",
			fields: ["1st (Incomes across the Distribution Database (2016))"],
		},
		{
			name: "Median Income",
			isUsed: false,
			dataset: "median-income-EEG.json",
			fields: ["5th (Incomes across the Distribution Database (2016))"],
		},
		{
			name: "Maximum Marginal Tax Rates on Individual Income",
			isUsed: false,
			dataset: "maximum-marginal-tax-rates-on-individual-income.json",
			fields: ["Top marginal income tax rate (Reynolds (2008))"],
		},
	],
	Education: [
		{
			name: "OECD Pisa Test Scores",
			isUsed: false,
			dataset: "oecd-pisa-test-scores-for-selected-countries-2000-2012.json",
			fields: ["OECD PISA education score (PISA (2015))"],
		},
		{
			name: "Gross Enrollment Ratio in Secondary Education",
			isUsed: false,
			dataset: "gross-enrollment-ratio-in-secondary-education.json",
			fields: ["Gross enrolment ratio, secondary, both sexes (%)"],
		},
		{
			name: "Share of Population With Completed Tertiary Education",
			isUsed: false,
			dataset: "share-of-the-population-with-completed-tertiary-education.json",
			fields: [
				"Barro-Lee: Percentage of population age 15+ with tertiary schooling",
			],
			treatData: getShareOfPopulationWithCompletedTertiaryEducationDataTreated,
		},
		{
			name: "Number of Teachers across Education Levels",
			isUsed: false,
			dataset: "number-of-teachers-across-education-levels.json",
			fields: [
				"Teachers in pre-primary education, both sexes (number)",
				"Teachers in primary education, both sexes (number)",
				"Teachers in lower secondary education, both sexes (number)",
				"Teachers in upper secondary education, both sexes (number)",
				"Teachers in tertiary education programmes, both sexes (number)",
			],
		},
		{
			name: "Completion Rate of Lower Secondary Education",
			isUsed: false,
			dataset: "completion-rate-of-lower-secondary-education.json",
			fields: ["Lower secondary completion rate, both sexes (%)"],
		},
		{
			name: "Duration of Compulsory Education",
			isUsed: false,
			dataset: "duration-of-compulsory-education.json",
			fields: ["Duration of compulsory education (years)"],
		},
		{
			name: "Total Government Expenditure on Education",
			isUsed: false,
			dataset: "total-government-expenditure-on-education-gdp.json",
			fields: ["Government expenditure on education, total (% of GDP)"],
		},
		{
			name: "National Average Learning Outcomes",
			isUsed: false,
			dataset:
				"national-average-learning-outcomes-vs-government-expenditure-per-primary-student.json",
			fields: [
				"Average harmonised learning outcome score in 2005-2015 (Altinok, Angrist, and Patrinos, 2018)",
			],
		},
		{
			name: "Share of Youth not in Education, Employment or Training",
			isUsed: false,
			dataset: "youth-not-in-education-employment-training.json",
			fields: [
				"Share of youth not in education, employment or training, total (% of youth population)",
			],
		},
	],
	Democracy: [
		{
			name: "Political Regime Type and Humans Rights Score",
			isUsed: false,
			dataset: "political-regime-type-vs-human-rights-score.json",
			fields: ["Regimes of the world -- the RoW measure"],
		},
		{
			name: "Political Regimes - 2016",
			isUsed: false,
			dataset: "political-regime-updated2016.json",
			fields: ["Political Regime (OWID based on Polity IV and Wimmer & Min)"],
		},
		{
			name: "Political Regimes",
			isUsed: false,
			dataset: "political-regimes.json",
			fields: ["Political regime"],
		},
		{
			name: "Share of People Paying Bribes and Corruption Perception",
			isUsed: false,
			dataset: "share-of-people-paying-bribes-vs-corruption-perception.json",
			fields: [
				"Corruption Perception Index - Transparency International (2018)",
				"Bribery Rate (%)",
			],
		},
		{
			name: "Human Rights Scores",
			isUsed: false,
			dataset: "human-rights-scores.json",
			fields: [
				"Human Rights Score (Schnakenberg & Fariss, 2014; Fariss, 2019)",
			],
		},
		{
			name: "Human Rights Violations",
			isUsed: false,
			dataset: "human-rights-violations.json",
			fields: [
				"Fund for Peace (Fragile States Index (Human Rights Dimension))",
			],
		},
		{
			name: "Freedom of Press",
			isUsed: false,
			dataset: "world-map-of-the-freedom-of-the-press-status.json",
			fields: ["Freedom of the Press Status"],
		},
		{
			name: "Refugee Population",
			isUsed: false,
			dataset: "refugee-population-by-country-or-territory-of-asylum.json",
			fields: ["Refugee population by country or territory of asylum"],
		},
		{
			name: "Share of People who Trust the Government",
			isUsed: false,
			dataset: "share-who-trust-government.json",
			fields: ["Share of people who trust their national government"],
		},
		{
			name: "Political Participation",
			isUsed: false,
			dataset: "political-participation.json",
			fields: ["Political Participation (Vanhanen (2015))"],
		},
		{
			name: "State Fragility",
			isUsed: false,
			dataset: "gdp-per-capita-vs-state-fragility.json",
			fields: ["Fragile States Index - ffp_fsi"],
		},
		{
			name: "World Press Freedom",
			isUsed: false,
			dataset: "world-press-freedom.json",
			fields: ["Press Freedom Score"],
		},
	],
	"Gender Rights": [
		{
			name: "Share of Young Women With No Education",
			isUsed: false,
			dataset:
				"share-of-women-between-15-and-19-years-old-with-no-education.json",
			fields: [
				"Barro-Lee: Percentage of female population age 15-19 with no education",
			],
		},
		{
			name: "Total net Enrollment Rate in Primary Education",
			isUsed: false,
			dataset: "total-net-enrollment-rate-in-primary-education-by-sex.json",
			fields: ["Total net enrolment rate, primary, female (%)"],
		},
		{
			name: "Gender Inequality Index",
			isUsed: false,
			dataset: "gender-inequality-index-from-the-human-development-report.json",
			fields: ["Gender Inequality Index (Human Development Report (2015))"],
		},
		{
			name: "Proportion of Women in Senior and Middle Management Positions",
			isUsed: false,
			dataset:
				"proportion-of-women-in-senior-and-middle-management-positions.json",
			fields: [
				"2 - Proportion of women in senior and middle management positions (%) - IC_GEN_MGTN",
			],
			treatData: getProportionOfWomenInSeniorAndMiddlePositionsDataTreated,
		},
		{
			name: "Firms with Female Top Managers",
			isUsed: false,
			dataset: "firms-with-female-top-manager-of-firms-bars.json",
			fields: ["Firms with female top manager (% of firms)"],
		},
		{
			name: "Womens Economic Rights",
			isUsed: false,
			dataset: "womens-economic-rights.json",
			fields: ["Women's Economic Rights - ciri_wecon"],
		},
		{
			name: "Womens Economic Opportunity",
			isUsed: false,
			dataset: "womens-economic-opportunity-2012-index.json",
			fields: ["WEO Index overall score (Economist Intelligence Unit (2012))"],
		},
		{
			name: "Gender Wage Gap",
			isUsed: false,
			dataset: "gender-wage-gap-oecd.json",
			fields: ["Gender wage gap (OECD 2017)"],
		},
		{
			name: "Law Mandated Equal Pay",
			isUsed: false,
			dataset: "law-mandate-equal-pay.json",
			fields: [
				"Law mandates equal remuneration for females and males for work of equal value (1=yes; 0=no)",
			],
		},
		{
			name: "Gender Parity Index Primary Education",
			isUsed: false,
			dataset: "gpi-primary-education.json",
			fields: ["Gross enrolment ratio, primary, gender parity index (GPI)"],
		},
		{
			name: "Gender Parity Index Secondary Education",
			isUsed: false,
			dataset: "gross-enrolment-gpi-secondary.json",
			fields: ["Gross enrolment ratio, secondary, both sexes (%)"],
		},
		{
			name: "Gender Parity Index Tertiary Education",
			isUsed: false,
			dataset: "gpi-tertiary-education.json",
			fields: ["Gross enrolment ratio, tertiary, gender parity index (GPI)"],
		},
		{
			name: "Share Female Employment in Agriculture",
			isUsed: false,
			dataset: "share-of-male-vs-female-employment-in-agri.json",
			fields: [
				"Employment in agriculture, female (% of female employment) (modeled ILO estimate)",
			],
		},
		{
			name: "Share Female Employment in Industry",
			isUsed: false,
			dataset: "share-of-male-vs-female-employment-in-industry.json",
			fields: [
				"Employment in industry, female (% of female employment) (modeled ILO estimate)",
			],
		},
		{
			name: "Share Female Employment in Services",
			isUsed: false,
			dataset: "share-of-male-vs-female-employment-in-services.json",
			fields: [
				"Employment in services, female (% of female employment) (modeled ILO estimate)",
			],
		},
		{
			name: "Unemployment Rate Women",
			isUsed: false,
			dataset: "unemployment-rate-women.json",
			fields: [
				"Unemployment rate, women -- ILO modelled estimates, May 2017 (%)",
			],
		},
		{
			name: "Maternal Mortality",
			isUsed: false,
			dataset: "maternal-mortality-slope-chart.json",
			fields: [
				"Maternal mortality ratio (modeled estimate, per 100,000 live births)",
			],
		},
		{
			name: "Adolescent Birth Rate",
			isUsed: false,
			dataset: "adolescent-fertility-ihme.json",
			fields: [
				"2: Number of livebirths per 1,000 women aged 10-14 years and women aged 15-19 years - Past - Unscaled",
			],
			treatData: getAdolescentBirthRateDataTreated,
		},
		{
			name: "Proportion of Women in Ministerial Positions",
			isUsed: false,
			dataset: "proportion-of-women-in-ministerial-positions.json",
			fields: ["Proportion of women in ministerial level positions (%)"],
		},
	],
	Language: [
		{
			name: "Share Of English Speaking Population",
			isUsed: false,
			dataset: "wikipedia_eng_lng_pop.json",
			fields: ["Total English speakers (%)"],
		},
	],
	Safety: [
		{
			name: "Homicide Rate",
			isUsed: false,
			dataset: "homicide-rate-ihme-vs-world-bank.json",
			fields: [
				"Deaths - Interpersonal violence - Sex: Both - Age: All Ages (Rate)",
				"Intentional homicides (per 100,000 people)",
			],
		},
		{
			name: "Suicide Rate",
			isUsed: false,
			dataset: "suicide-vs-homicide-rate.json",
			fields: ["Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)"],
		},
		{
			name: "Deaths by Age Group",
			isUsed: false,
			dataset: "deaths-by-age-group-stacked.json",
			fields: [
				"Deaths - All causes - Sex: Both - Age: Under 5 (Number)",
				"Deaths - All causes - Sex: Both - Age: 5-14 years (Number)",
				"Deaths - All causes - Sex: Both - Age: 15-49 years (Number)",
				"Deaths - All causes - Sex: Both - Age: 50-69 years (Number)",
				"Deaths - All causes - Sex: Both - Age: 70+ years (Number)",
			],
		},
		{
			name: "Number Of Nuclear Warheads In Inventory of Nuclear Powers",
			isUsed: false,
			dataset:
				"number-of-nuclear-warheads-in-the-inventory-of-the-nuclear-powers.json",
			fields: ["Nuclear weapons inventory by country (FAS Nuclear Notebook)"],
		},
		{
			name: "Deaths From Conflict And Terrorism",
			isUsed: false,
			dataset: "deaths-from-conflict-and-terrorism.json",
			fields: [
				"Deaths - Conflict and terrorism - Sex: Both - Age: All Ages (Number)",
			],
		},
		{
			name: "Terrorist Incidents",
			isUsed: false,
			dataset: "terrorist-incidents.json",
			fields: ["Number of terrorist incidents (GDT, 2018)"],
		},
		{
			name: "Share Of Children who Report Being Bullied",
			isUsed: false,
			dataset: "share-of-children-ages-13-15-who-report-being-bullied.json",
			fields: ["Children (13-15) who reported being bullied"],
		},
	],
	Happiness: [
		{
			name: "Happiness Cantril Ladder",
			isUsed: false,
			dataset: "happiness-cantril-ladder.json",
			fields: [
				"Life satisfaction in Cantril Ladder (World Happiness Report 2021)",
			],
		},
		{
			name: "Depression Rate",
			isUsed: false,
			dataset: "depression-ihme-vs-who.json",
			fields: [
				"Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Percent)",
				"Indicator:Estimated population-based prevalence of depression",
			],
		},
		{
			name: "Suicide Rate",
			isUsed: false,
			dataset: "suicide-rates-vs-prevalence-of-depression.json",
			fields: ["Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)"],
		},
	],
	Health: [
		{
			name: "Hospital Beds",
			isUsed: false,
			dataset: "hospital-beds-per-1000-people.json",
			fields: ["Hospital beds (per 1,000 people)"],
		},
		{
			name: "Healthcare Access and Quality",
			isUsed: false,
			dataset: "healthcare-access-and-quality-index.json",
			fields: ["HAQ Index (IHME (2017))"],
		},
		{
			name: "Universal Health Coverage Index",
			isUsed: false,
			dataset: "universal-health-coverage-index.json",
			fields: [
				"1 - Universal health coverage (UHC) service coverage index - SH_ACS_UNHC",
			],
			treatData: getUniversalHealthCoverageIndexDataTreated,
		},
		{
			name: "Level Of Healthcare Spending",
			isUsed: false,
			dataset: "HAQ-by-level-of-healthcare-spending-endpoints.json",
			fields: [
				"Current health expenditure per capita, PPP (current international $)",
			],
		},
		{
			name: "Annual Healthcare Expenditure",
			isUsed: false,
			dataset: "annual-healthcare-expenditure-per-capita.json",
			fields: [
				"Health expenditure per capita, PPP (constant 2011 international $)",
			],
		},
		{
			name: "Share of Out of Pocket Expenditure on Healthcare",
			isUsed: false,
			dataset: "share-of-out-of-pocket-expenditure-on-healthcare.json",
			fields: [
				"Out-of-pocket health expenditure (% of total expenditure on health)",
			],
		},
		{
			name: "Share of Population at Risk of Catastrophic Expenditure on Healthcare",
			isUsed: false,
			dataset:
				"share-of-the-population-at-risk-of-catastrophic-expenditure-when-surgical-care-is-required.json",
			fields: [
				"Risk of catastrophic expenditure for surgical care (% of people at risk)",
			],
		},
		{
			name: "Health Protection Coverage",
			isUsed: false,
			dataset: "health-protection-coverage.json",
			fields: ["Share of population covered by health insurance (ILO (2014))"],
		},
		{
			name: "Private Health Expenditure",
			isUsed: false,
			dataset: "private-health-expenditure-per-person.json",
			fields: [
				"Domestic private health expenditure per capita, PPP (current international $)",
			],
		},
	],
	"LGBTQI+ Rights": [
		{
			name: "LGBTQI+ Rights",
			isUsed: false,
			dataset: "lgbt.json",
			fields: [
				"Religiosity",
				"SHI",
				"legality of sam-sex sexual-activity",
				"marriage/ civil unions",
				"serving in the military",
				"antidiscrimination laws",
			],
		},
	],
}

export interface ThemeMappingItem {
	name: string
	dataset: string
	fields: string[]
	isUsed: boolean
	treatData?: (raw: any) => any
}

export interface ThemeMapping {
	"Air Pollution": ThemeMappingItem[]
	"Natural Disasters": ThemeMappingItem[]
	"Climate Change": ThemeMappingItem[]
	Food: ThemeMappingItem[]
	Income: ThemeMappingItem[]
	Education: ThemeMappingItem[]
	Democracy: ThemeMappingItem[]
	"Gender Rights": ThemeMappingItem[]
	Language: ThemeMappingItem[]
	Safety: ThemeMappingItem[]
	Happiness: ThemeMappingItem[]
	Health: ThemeMappingItem[]
	"LGBTQI+ Rights": ThemeMappingItem[]
}

export type Category =
	| "Air Pollution"
	| "Natural Disasters"
	| "Climate Change"
	| "Food"
	| "Income"
	| "Education"
	| "Democracy"
	| "Gender Rights"
	| "Language"
	| "Safety"
	| "Happiness"
	| "Health"
	| "LGBTQI+ Rights"

export type CategoryFilterState = {
	category: Category
	importanceFactor: number
	matrix: Map<string, number>
}

export type Percentile = "1%" | "10%" | "50%" | "100%"

export type CountryScore = {
	overallScore: number
	scores: Map<Category, number>
	percentile: Percentile
	isIncluded: boolean
}

export const countryCodes = [
	"004",
	"008",
	"012",
	"024",
	"028",
	"032",
	"051",
	"036",
	"040",
	"031",
	"044",
	"050",
	"052",
	"112",
	"056",
	"084",
	"204",
	"068",
	"070",
	"072",
	"076",
	"100",
	"854",
	"116",
	"120",
	"124",
	"132",
	"140",
	"148",
	"152",
	"156",
	"170",
	"178",
	"188",
	"384",
	"191",
	"192",
	"196",
	"203",
	"208",
	"262",
	"212",
	"214",
	"218",
	"818",
	"222",
	"233",
	"748",
	"231",
	"242",
	"246",
	"250",
	"258",
	"266",
	"270",
	"268",
	"276",
	"288",
	"300",
	"308",
	"320",
	"324",
	"624",
	"328",
	"332",
	"340",
	"344",
	"348",
	"352",
	"356",
	"360",
	"364",
	"368",
	"372",
	"376",
	"380",
	"388",
	"392",
	"400",
	"398",
	"404",
	"296",
	"414",
	"417",
	"418",
	"428",
	"422",
	"426",
	"430",
	"440",
	"442",
	"446",
	"450",
	"454",
	"458",
	"462",
	"466",
	"470",
	"478",
	"480",
	"484",
	"498",
	"496",
	"499",
	"504",
	"508",
	"104",
	"516",
	"524",
	"528",
	"540",
	"554",
	"558",
	"562",
	"566",
	"408",
	"807",
	"578",
	"512",
	"586",
	"591",
	"600",
	"604",
	"608",
	"616",
	"620",
	"642",
	"643",
	"646",
	"659",
	"662",
	"670",
	"882",
	"678",
	"682",
	"686",
	"688",
	"694",
	"703",
	"705",
	"090",
	"710",
	"410",
	"724",
	"144",
	"729",
	"740",
	"752",
	"756",
	"158",
	"762",
	"834",
	"764",
	"626",
	"768",
	"780",
	"788",
	"792",
	"795",
	"800",
	"804",
	"784",
	"826",
	"840",
	"858",
	"860",
	"548",
	"862",
	"704",
	"887",
	"894",
	"716",
	"016",
	"020",
	"660",
	"010",
	"533",
	"048",
	"060",
	"064",
	"074",
	"086",
	"108",
	"136",
	"162",
	"174",
	"184",
	"180",
	"226",
	"232",
	"254",
	"260",
	"292",
	"304",
	"312",
	"316",
	"831",
	"334",
	"833",
	"832",
	"983",
	"434",
	"438",
	"584",
	"474",
	"175",
	"492",
	"500",
	"520",
	"570",
	"574",
	"580",
	"585",
	"275",
	"598",
	"612",
	"630",
	"634",
	"638",
	"652",
	"654",
	"663",
	"666",
	"674",
	"690",
	"702",
	"534",
	"706",
	"239",
	"728",
	"744",
	"772",
	"776",
	"796",
	"798",
	"581",
	"876",
	"732",
	"248",
] as const

export type CountryCode = typeof countryCodes[number]
