
import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

// Validate credentials before initializing
// We check for both existence and ensure they aren't the string "undefined"
if (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'undefined' && supabaseAnonKey !== 'undefined') {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    // Optional: Log successful init in development
    if (import.meta.env.DEV) {
      console.log('✅ Supabase initialized successfully');
    }
  } catch (error) {
    console.error('❌ Failed to initialize Supabase client:', error.message);
  }
} else {
  console.warn('⚠️ Supabase credentials (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing or invalid. Database persistence features will be disabled.');
}

export { supabase };
