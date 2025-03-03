const Overall = "overall";
const Team = "team";
const Product = "product";

export const analysisTypes = {
    overall: Overall,
    team: Team,
  Product: Product,
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

export const pieData = [
  { name: "Product A", value: 9.9 },
  { name: "Product B", value: 13.2 },
  { name: "Product C", value: 10.2 },
  { name: "Product D", value: 12.6 },
  { name: "Product E", value: 8.1 },
  { name: "Product F", value: 7.3 },
  { name: "Product G", value: 7.9 },
  { name: "Product H", value: 10.9 },
  { name: "Product I", value: 10.8 },
  { name: "Product J", value: 9.0 },
];

export const COLORS = [
  "#1b5e2",
  "#2e7d32",
  "#388e3c",
  "#43a047",
  "#4caf50",
  "#66bb6a",
  "#81c784",
  "#a5d6a7",
  "#c8e6c9",
  "#e8f5e9",
];

export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  0;
};
