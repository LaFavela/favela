import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = "https://jexluficpazfxobksszu.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey as string, {
   auth : {
      // storage: AsyncStorage as any,
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: true,
   }
});
