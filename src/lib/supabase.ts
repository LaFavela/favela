import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types";

const supabaseUrl = "https://jexluficpazfxobksszu.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey as string);
