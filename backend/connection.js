// import { createClient } from "@supabase/supabase-js";

// const supabaseURL = 'https://ocmofybqmclyaqiftkha.supabase.co';
// const supabaseAPI_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jbW9meWJxbWNseWFxaWZ0a2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTU5NjQsImV4cCI6MjA1NTg5MTk2NH0.kb101UUEwV341fnAbWF59Xutl-wGyA2xXQGmu_JsRnU';
// const supabase = createClient(supabaseURL, supabaseAPI_KEY);

// export default supabase;

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


