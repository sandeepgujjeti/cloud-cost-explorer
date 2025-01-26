const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const client = new Client({
    user: 'postgres',
    host: "localhost",
    database: "cloud_cost_db",
    password: 'pass123',
    port: 5432
});

client.connect();

app.get("/", async (req, res) => {
    try {
        const data = await client.query("SELECT * FROM cloud_costs");
        res.send(data.rows);
        console.log(data.rows);
        
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Database query Failed" });
    }
});

app.get("/data", async (req, res) => {
    try {
        res.send("GET is done at /data");
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Database query Failed" });
    }
})

app.listen(3000, () => {
    console.log("App is listening at port " + 3000);
});
