import { createClientComponentClient, createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = "https://jexluficpazfxobksszu.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClientComponentClient<Database>();