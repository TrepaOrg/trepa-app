import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

console.log('VITE_SUPABASE_PROJECT_URL:', import.meta.env.VITE_SUPABASE_PROJECT_URL);
console.log('VITE_SUPABASE_API_KEY:', import.meta.env.VITE_SUPABASE_API_KEY);

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseApiKey) {
    throw new Error('supabaseUrl and supabaseApiKey are required');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseApiKey);
