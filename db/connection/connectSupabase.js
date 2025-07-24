import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

const url = process.env.DB_SUPABASE_URL;
const key = process.env.DB_SUPABASE_KEY;
const supabase = createClient(url, key);

if (supabase) {
    console.log(`Connect to supabase.`)
}

export default supabase;
