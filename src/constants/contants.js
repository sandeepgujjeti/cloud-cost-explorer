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

export const dates = [
    "yesterday", "last_week", "last_month", "quarter_year", "half_year", "last_year"
];

export const services = [
    "AWS", "Azure", "Google_cloud", "IBM"
];


export const axisValues = [
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
] 