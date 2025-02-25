const Team = "Team Wise Analysis";
const Date = "Date Wise Analysis";
const Service = "Service Wise Analysis";

export const analysisTypes = {
    team: Team,
    date: Date,
    service: Service
};


export const teams = [
    "Finance", "DevOps", "Security", "R&D", "Analytics"
];
// export const teams = [
//     "team_001",
//     "team_002",
//     "team_003",
//     "team_004",
//     "team_005"
// ];


export const dates = [
    "yesterday", "last_week", "last_month", "quarter_year", "half_year", "last_year"
];

export const services = [
    "AWS", "Azure", "Google_cloud", "IBM"
];


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
] 

