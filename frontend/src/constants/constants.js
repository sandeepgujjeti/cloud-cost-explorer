const Overall = "overall";
const Team = "team";
const Product = "product";
const Cloud = "cloud";

export const analysisTypes = {
  overall: Overall,
  team: Team,
  product: Product,
  cloud: Cloud,
};

export const teams = ["Finance", "DevOps", "Security", "R&D", "Analytics"];
// export const teams = [
//     "team_001",
//     "team_002",
//     "team_003",
//     "team_004",
//     "team_005"
// ];

export const dates = [
  "yesterday",
  "last_week",
  "last_month",
  "quarter_year",
  "half_year",
  "last_year",
];

export const services = ["AWS", "Azure", "Google_cloud", "IBM"];

export const xAxisValues = [
  "servicename",
  "sourcecloud",
  "billedcapacity",
  "billedamount",
  "usedcapacity",
  "serviceusedpercentage",
  "utilizedamount",
  "teamid",
  "monitoredstarttime",
  "monitoredendtime",
  "interval_mins",
];

export const yAxisValues = [
  "billedcapacity",
  "billedamount",
  "usedcapacity",
  "serviceusedpercentage",
  "utilizedamount",
  "interval_mins",
];

export const pieChartColors = {
  overall: 100,
  team: 200,
  product: 300,
  cloud: 10
};

export const barChartColor = {
  team: 20,
  product: 275,
  cloud: 10,
}

export const horizontalBarChartColor = {
  team: 20,
  product: 275,
  cloud: 50,
}

export const lineChartColor = {
  overall: 100,
  team: 200,
  product: 200,
  cloud: 300,
}
