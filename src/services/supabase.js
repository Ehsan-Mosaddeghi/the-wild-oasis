import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eecuwgzpzycqrdwwclgu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlY3V3Z3pwenljcXJkd3djbGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NzI3NTUsImV4cCI6MjA0MDE0ODc1NX0.idcV77qEpkJQAHREnaECbWL-QG8NME5Qo7R7zzLWbxg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
