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

export const lineChartdata = [
    { month: "Jan", Alpha: 900, Beta: 800, Gamma: 400, Delta: 500, Meu: 300 },
    { month: "Feb", Alpha: 850, Beta: 750, Gamma: 450, Delta: 550, Meu: 350 },
    { month: "Mar", Alpha: 800, Beta: 700, Gamma: 500, Delta: 600, Meu: 400 },
    { month: "Apr", Alpha: 850, Beta: 650, Gamma: 550, Delta: 650, Meu: 450 },
    { month: "May", Alpha: 700, Beta: 600, Gamma: 600, Delta: 700, Meu: 500 },
    { month: "Jun", Alpha: 650, Beta: 550, Gamma: 650, Delta: 750, Meu: 550 },
    { month: "Jul", Alpha: 900, Beta: 500, Gamma: 700, Delta: 800, Meu: 600 },
    { month: "Aug", Alpha: 350, Beta: 450, Gamma: 750, Delta: 850, Meu: 650 },
    { month: "Sep", Alpha: 500, Beta: 400, Gamma: 800, Delta: 900, Meu: 700 },
    { month: "Oct", Alpha: 750, Beta: 350, Gamma: 850, Delta: 950, Meu: 750 },
    { month: "Nov", Alpha: 600, Beta: 300, Gamma: 900, Delta: 1000, Meu: 800 },
    { month: "Dec", Alpha: 350, Beta: 250, Gamma: 950, Delta: 1050, Meu: 850 },
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
