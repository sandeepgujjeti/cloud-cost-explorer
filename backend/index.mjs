import pkg from "pg";
import express from "express";
import cors from "cors";

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
app.get("/", async (req, res) => {
    const columns = req.query.columns;
    try {
        const data = await client.query(`SELECT ${columns} FROM cloud_costs`);
        console.log(data.rows);

        res.json(data.rows);
    } catch (e) {
        console.error("Database query failed:", e);
        res.status(500).json({ error: "Database query failed" });
    }
});

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});
