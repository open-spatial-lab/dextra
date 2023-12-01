const getCprYears = () => {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const years = ["2017", "2018", "2019", "2020", "2021"];
  let dates: string[] = [];
  years.forEach((year) =>
    months.forEach((month) => dates.push(`${year}-${month}`))
  );
  return dates;
};

export const yearLabels = getCprYears();

// DATA
export const townshipData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6568f4ca16faa30008555613";
export const censusTractData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65405d96c1356c000878d9f8";
export const schoolDistrictData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6567764c2aa95c0008fc60f5";
export const countyData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6567863eb678c50008c549ff";
export const monthlyByAiClass =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65410c3b5c8aac0008d57dbf";
export const monthlyByAiType =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65411c780611480008f7ecd2";
// export const monthlyByAiProduct =
//   "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65411d990611480008f7ecd4";
export const monthlyByAgNonAg =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65411d590611480008f7ecd3";
export const yearlyByAiClass =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/656a184586ce4600082f1a4f";
export const yearlyByAiType =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/656a1d0b7ec37d000880178e";
export const yearlyByAgNonAg =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/656a1c9d0e307800080dbc9d";

  // LABELS / OPTIONS
export const aiClassOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6567637aaeb11300087fbd82";
export const aiTypeOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6567630eaeb11300087fbd80";
export const aiTypeSpecificOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/656763b1aeb11300087fbd83";
export const siteLocationOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65676456aeb11300087fbd85";
export const townshipCodesOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6569009ee5a32a0008930614";
export const censusTractsOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/656763f6aeb11300087fbd84";
export const countiesOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6567683eafda330008b8c256";
export const productOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983";
export const chemicalOptionsData =
  "https://d3lsdszfx9jqxt.cloudfront.net/data-query/65675fb7b041550008c7b6ba";
export const schoolDistrictOptionsData = "https://d3lsdszfx9jqxt.cloudfront.net/data-query/656789dcb678c50008c54a00";

export const filteredDatasets = JSON.stringify([
  townshipData,
  censusTractData,
  schoolDistrictData,
  countyData
]);

export const timeSeriesData = JSON.stringify([
  monthlyByAiClass,
  monthlyByAiType,
  monthlyByAgNonAg,
  yearlyByAiClass,
  yearlyByAiType,
  yearlyByAgNonAg,
]);

export const monthlyData = JSON.stringify([
  monthlyByAiClass,
  monthlyByAiType,
  monthlyByAgNonAg,
]);

export const censusTractColumns = JSON.stringify([
  "FIPS",
  "lbs_prd_used",
  "lbs_chm_used",
  "Total Population",
]);
export const zipCodeColumns = JSON.stringify([
  "ZIP",
  "lbs_prd_used",
  "lbs_chm_used",
  "COUNTY",
  "USPS_ZIP_PREF_CITY",
  "Total Population",
]);
export const demogZipCodeColumns = JSON.stringify([
  "ZIP",
  "lbs_prd_used",
  "lbs_chm_used",
  "COUNTY",
  "USPS_ZIP_PREF_CITY",
  "Total Population",
  "Total Population",
  "NH White",
  "NH Black",
  "NH AIAN",
  "NH Asian",
  "NH NHPI",
  "NH Other",
  "NH Two or More",
  "Pop Hispanic or Latino",
  "Less than HS",
  "Median Income",
  "Pct Hispanic",
  "Pct Black",
]);

export const demogTractColumns = JSON.stringify([
  "FIPS",
  "lbs_prd_used",
  "lbs_chm_used",
  "Total Population",
  "Total Population",
  "NH White",
  "NH Black",
  "NH AIAN",
  "NH Asian",
  "NH NHPI",
  "NH Other",
  "NH Two or More",
  "Pop Hispanic or Latino",
  "Less than HS",
  "Median Income",
  "Pct Hispanic",
  "Pct Black",
]);


export const zeroPesticideColor = "#95d599";