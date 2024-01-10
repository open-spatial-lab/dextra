
export const abbrs = [
 {"value": "*", label:"All"},
  {"value":"AL", label:"AL"},
  {"value":"AK", label:"AK"},
  {"value":"AZ", label:"AZ"},
  {"value":"AR", label:"AR"},
  {"value":"CA", label:"CA"},
  // {"value":"CZ", label:"CZ"},
  {"value":"CO", label:"CO"},
  {"value":"CT", label:"CT"},
  {"value":"DE", label:"DE"},
  {"value":"DC", label:"DC"},
  {"value":"FL", label:"FL"},
  {"value":"GA", label:"GA"},
  {"value":"GU", label:"GU"},
  {"value":"HI", label:"HI"},
  {"value":"ID", label:"ID"},
  {"value":"IL", label:"IL"},
  {"value":"IN", label:"IN"},
  {"value":"IA", label:"IA"},
  {"value":"KS", label:"KS"},
  {"value":"KY", label:"KY"},
  {"value":"LA", label:"LA"},
  {"value":"ME", label:"ME"},
  {"value":"MD", label:"MD"},
  {"value":"MA", label:"MA"},
  {"value":"MI", label:"MI"},
  {"value":"MN", label:"MN"},
  {"value":"MS", label:"MS"},
  {"value":"MO", label:"MO"},
  {"value":"MT", label:"MT"},
  {"value":"NE", label:"NE"},
  {"value":"NV", label:"NV"},
  {"value":"NH", label:"NH"},
  {"value":"NJ", label:"NJ"},
  {"value":"NM", label:"NM"},
  {"value":"NY", label:"NY"},
  {"value":"NC", label:"NC"},
  {"value":"ND", label:"ND"},
  {"value":"OH", label:"OH"},
  {"value":"OK", label:"OK"},
  {"value":"OR", label:"OR"},
  {"value":"PA", label:"PA"},
  {"value":"PR", label:"PR"},
  {"value":"RI", label:"RI"},
  {"value":"SC", label:"SC"},
  {"value":"SD", label:"SD"},
  {"value":"TN", label:"TN"},
  {"value":"TX", label:"TX"},
  {"value":"UT", label:"UT"},
  {"value":"VT", label:"VT"},
  {"value":"VI", label:"VI"},
  {"value":"VA", label:"VA"},
  {"value":"WA", label:"WA"},
  {"value":"WV", label:"WV"},
  {"value":"WI", label:"WI"},
  {"value":"WY", label:"WY"}
];
export const specialties = [
  { value: "*", label: "All" },
  { value: "%207W00000X%", label: "All Ophthalmology Specializations" },
  {
    value: "%207WX0120X%",
    label: "	- Cornea and External Diseases Specialist",
  },
  { value: "%207WX0009X%", label: "- Glaucoma Specialist" },
  { value: "%207WX0109X%", label: "- Neuro-ophthalmology" },
  {
    value: "%207WX0200X%",
    label: "- Ophthalmic Plastic and Reconstructive Surgery",
  },
  {
    value: "%207WX0110X%",
    label: "- Pediatric Ophthalmology and Strabismus Specialist",
  },
  { value: "%207WX0107X%", label: "- Retina Specialist" },
  {
    value: "%207WX0108X%",
    label: "- Uveitis and Ocular Inflammatory Disease",
  },
  { value: "%152W00000X%", label: "All Optometrist Specializations" },
  {
    value: "%152WC0802X%",
    label: "- Corneal and Contact Management",
  },
  { value: "%152WL0500X%", label: "- Low Vision Rehabilitation" },
  { value: "%152WX0102X%", label: "- Occupational Vision" },
  { value: "%152WP0200X%", label: "- Pediatrics" },
  { value: "%152WS0006X%", label: "- Sports Vision" },
  { value: "%152WV0400X%", label: "- Vision Therapy" },
  {
    value: "%156F00000X%",
    label: "All Technician/Technologist Specializations",
  },
  { value: "%156FC0800X%", label: "- Contact Lens" },
  {
    value: "%156FC0801X%",
    label: "- Contact Lens Fitter",
  },
  { value: "%156FX1700X%", label: "- Ocularist" },
  { value: "%156FX1100X%", label: "- Ophthalmic" },
  {
    value: "%156FX1101X%",
    label: "- Ophthalmic Assistant",
  },
  { value: "%156FX1800X%", label: "- Optician" },
  {
    value: "%156FX1201X%",
    label: "- Optometric Assistant",
  },
  {
    value: "%156FX1202X%",
    label: "- Optometric Technician",
  },
  { value: "%156FX1900X%", label: "- Orthoptist" },
];
export const countyStatTable = `'${JSON.stringify([
  "providers_per_100k",
  "providers_count",
  "Vision Difficulty Rate",
  "Percent Without Health Insurance",
  "Percent Less than High School",
  "Total Population",
])}'`
export const zipStatTable = `'${JSON.stringify([
  "Providers Per 100k",
  "providers_count",
  "Vision Difficulty Rate",
  "Percent Without Health Insurance",
  "Percent Less than High School",
  "Total Population",
])}'`
export const congressStatTable = `'${JSON.stringify([
  "Providers Per 100k",
  "providers_count",
  "Vision Difficulty Rate",
  "Percent Without Health Insurance",
  "Percent Less than High School",
  "Total Population",
])}'`
export const countyData =
  "https://d36q6zt0rhsb35.cloudfront.net/data-query/655e3148b52ed80008d79518";
export const zipData =
  "https://d36q6zt0rhsb35.cloudfront.net/data-query/655d2a1d6a8a3000080b3050";
export const CongressionalDistrictData =
  "https://d36q6zt0rhsb35.cloudfront.net/data-query/655d301777b38300088750c7";
export const visionProvidersData =
  "https://d36q6zt0rhsb35.cloudfront.net/data-query/65303831181b4500089e4fe6";
export const fqhcData = "https://d36q6zt0rhsb35.cloudfront.net/data-query/65666e47e8daf40008705c87"
export const allDatasets = `'${JSON.stringify([
  countyData,
  zipData,
  CongressionalDistrictData,
  visionProvidersData,
  fqhcData
])}'`

export const tableColumns = `'${JSON.stringify([
  "NPI",
  "Provider First Name",
  "Provider Last Name (Legal Name)",
  "Provider Credential Text",
  "Full Address",
  "Taxonomy",
  "County Name",
  "Congressional District GEOID",
  "Zip Code (ZCTA)",
  "County GEOID",
])}'`

export const tooltipSpec = `'${JSON.stringify([
  {
    column: "NAME",
    label: "County",
  },
  {
    column: "providers_per_100k",
    label: "Providers / 100k Pop",
  },
  {
    column: "providers_count",
    label: "Total Providers",
  },
  {
    column: "Total Population",
  },
  {
    column: "Vision Difficulty Rate",
    format: "percent",
  },
  {
    column: "Percent Less than High School",
    format: "percent",
  },
  {
    column: "Percent Without Health Insurance",
    format: "percent",
  },
])}'`
