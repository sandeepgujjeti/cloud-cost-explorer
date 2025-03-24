const queries = {
    overall: {
        pie: `
            SELECT 
                TRIM(TO_CHAR("MonitoredStartTime", 'Month')) AS month_name,
                COUNT(*) AS total_sales,  
                SUM("UtilizedAmount") AS total_cost,
                EXTRACT(MONTH FROM "MonitoredStartTime") AS month_number
            FROM cloud_costs
            WHERE 
                "MonitoredStartTime" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '12 months'
            GROUP BY month_name, month_number
            ORDER BY month_number;
        `,
        line: `
            SELECT 
                TRIM(TO_CHAR("MonitoredStartTime", 'Month')) AS month_name,
                COUNT(*) AS total_sales,  
                SUM("UtilizedAmount") AS total_cost,
                EXTRACT(MONTH FROM "MonitoredStartTime") AS month_number
            FROM cloud_costs
            WHERE 
                "MonitoredStartTime" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '12 months'
            GROUP BY month_name, month_number
            ORDER BY month_number;        `
    },
    team: {
        pie: `
            select distinct
                "TeamId",
                SUM("UtilizedAmount") as total_cost
            from
                cloud_costs
            group by 
                "TeamId"
            order by
                "TeamId";
        `,
        line: `
            SELECT distinct
                "TeamId",
                SUM("UtilizedAmount") as total_cost
            from
                cloud_costs
            group by 
                "TeamId"
            order by
                "TeamId";        `,
        table: `
            SELECT 
                "TeamId",
                "BilledCapacity",
                "BilledAmount",
                "UsedCapacity",
                "ServiceUsedPercentage",
                "UtilizedAmount",
                "MonitoredStartTime",
                "MonitoredEndTime" 
            FROM 
                cloud_costs
            ORDER BY
                "MonitoredStartTime" DESC
        `,
        individualTeam: `
            select
                "TeamId",
                SUM("UtilizedAmount") as total_cost,
                TRIM(TO_CHAR("MonitoredStartTime", 'Month')) as month_name,
                EXTRACT(month from "MonitoredStartTime") as month_number
            from
                cloud_costs
            where
                "MonitoredStartTime" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '12 months'
            group by
                "TeamId",
                EXTRACT(month from "MonitoredStartTime"), 
                TRIM(TO_CHAR("MonitoredStartTime", 'Month'))
            order by
                month_number,
                "TeamId";
        `,
    },
    product: {
        pie: `
            SELECT
                "ServiceName",
                SUM("UtilizedAmount") as total_cost
            FROM
                cloud_costs
            GROUP BY 
                "ServiceName"
            ORDER BY 
                "ServiceName"
        `,
        line: `
            SELECT
                "ServiceName",
                SUM("UtilizedAmount") as total_cost
            FROM
                cloud_costs
            GROUP BY 
                "ServiceName"
            ORDER BY 
                "ServiceName"        
        `,
        table: `
            SELECT
                "ServiceName",
                "BilledCapacity",
                "BilledAmount",
                "UsedCapacity",
                "ServiceUsedPercentage",
                "UtilizedAmount",
                "MonitoredStartTime",
                "MonitoredEndTime" 
            FROM 
                cloud_costs
            ORDER BY
                "MonitoredStartTime" DESC
        `
    },
};

export default queries;
