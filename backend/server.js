import express, { json } from 'express';
import "dotenv/config";
import client from './connection.js';
import cors from "cors";
import queries from './queries.js';

const app = express();
const port = 3000;

// Middleware
app.use(json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("<h1>This is The Home Page Send a request to different API</h1>");
})

//! APIs for Pie Chart

// API for overall pie chart
app.get('/overall/pie', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.overall.pie;
    const data = await client.query(query);
    res.send(data.rows);
});

// API for team pie chart
app.get('/team/pie', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.team.pie;
    const data = await client.query(query);
    res.send(data.rows);
});

// API for product pie chart
app.get('/product/pie', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.product.pie;
    const data = await client.query(query);
    res.send(data.rows);
});

//! APIs for Line Chart

// API for overall line chart
app.get("/overall/line", async (req, res) => {
    const query = queries.overall.line;
    const data = await client.query(query);
    res.send(data.rows);
});

// API for team line chart
app.get('/team/line', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.team.line;
    const data = await client.query(query);
    res.send(data.rows);
});

// API for product line chart
app.get('/product/line', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.product.line;
    const data = await client.query(query);
    res.send(data.rows);
});

//! APIs for Table Chart

// API for overall table chart
app.get('/overall/table', async (req, res) => {
    // res.send('Hello World!');
    res.send("<h1>There is no Table Data in Overall</h1>");
});

// API for team table chart
app.get('/team/table', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.team.table;
    const data = await client.query(query);
    res.send(data.rows);
});


// API for product table chart
app.get('/product/table', async (req, res) => {
    // res.send('Hello World!');
    const query = queries.product.table;
    const data = await client.query(query);
    res.send(data.rows);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});