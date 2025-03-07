import express, { json } from 'express';
import "dotenv/config";
import client from './connection.js';
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(json());
app.use(cors());

// Routes
app.get('/overall', async (req, res) => {
    // res.send('Hello World!');
    const query = `
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
    `;
    const data = client.query(query);
    res.send((await data).rows);
});

app.get('/team', async (req, res) => {
    // res.send('Hello World!');
    const query = `
        select distinct
            "TeamId",
            SUM("UtilizedAmount") as total_cost
        from
            cloud_costs
        group by 
            "TeamId"
        order by
            "TeamId";
    `;
    const data = client.query(query);
    res.send((await data).rows);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});