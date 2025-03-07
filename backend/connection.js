import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 6543,
    database: "postgres",
    user: "postgres.ocmofybqmclyaqiftkha",
    password: "cloud-cost-explorer",
    pool_mode: "transaction",
    ssl: { rejectUnauthorized: false }
});

const client = await pool.connect();

export default client;


