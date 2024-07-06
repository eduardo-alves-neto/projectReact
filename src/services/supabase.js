import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://okarrhzyhazsmtqbpnby.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rYXJyaHp5aGF6c210cWJwbmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyNzYxMDUsImV4cCI6MjAzNTg1MjEwNX0.fAm-Zpst9vJTLTUlgBFUZAsdGXowpOobVfLZ3olD2cU";
const supabase = createClient(supabaseUrl, supabaseKey);
export { supabase, supabaseUrl };
