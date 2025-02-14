import pkg from "pg";
import express from "express";
import cors from "cors";
// import { analysisTypes } from "../src/constants/constants";
// import { analysisTypes } from "../src/constants/contants";

const { Client } = pkg;

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

const client = new Client({
    user: 'postgres',
    host: "localhost",
    database: "cloud_cost_db",
    password: 'pass123',
    port: 5432
});

client.connect();

const PORT = 3000;

// let query = `
//         SELECT servicename, ROUND(AVG(serviceusedpercentage)) as avg_serviceusedpercentage
//         FROM cloud_costs
//         GROUP BY servicename;
// `;
let query = `
        SELECT servicename, billedcapacity
        FROM cloud_costs
        GROUP BY servicename;
`;


async function fetchData(analysis, teamid) {
    console.log(analysis, teamid);

    switch (analysis) {
        case "team":
            query = "SELECT DISTINCT teamid FROM cloud_costs";
            // query = "SELECT DISTINCT teamid FROM cloud_costs";
            break;
        // default:
        //     query = `
        //         SELECT servicename, ROUND(AVG(serviceusedpercentage)) as avg_serviceusedpercentage
        //         FROM cloud_costs
        //         GROUP BY servicename;
        //     `;
        //     break;
    }

    const data = await client.query(query);
    return data.rows;
}

app.get("/", async (req, res) => {
    const { analysis, teamid } = req.query;
    console.log(req.query);
    try {
        const query = `
            SELECT servicename, billedcapacity
            FROM cloud_costs
            GROUP BY servicename;
        `;
        // const data = await client.query(query);
        const data = await fetchData(analysis, teamid);
        console.log(data);
        res.json(data);
    } catch (e) {
        console.error("Database query failed:", e);
        res.status(500).json({ error: "Database query failed" });
    }
});

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});
