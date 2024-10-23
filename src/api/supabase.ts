import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const url = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const api_key = import.meta.env.VITE_SUPABASE_API_KEY;

console.log(url, api_key);

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(url, api_key);
