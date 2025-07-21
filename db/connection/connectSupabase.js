import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

const supabase = createClient(process.env.DB_SUPABASE_URL, process.env.DB_SUPABASE_KEY);
export default supabase;