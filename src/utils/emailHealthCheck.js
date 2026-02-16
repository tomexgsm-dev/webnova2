
import { validateEmailConfig } from '@/config/emailConfig';
import { supabase } from '@/config/supabaseConfig';

/**
 * Performs a health check on email and database services.
 * Logs results to console and returns status object.
 */
export const checkServicesHealth = async () => {
  const health = {
    timestamp: new Date().toISOString(),
    email: {
      provider: 'unknown',
      status: 'unknown',
      details: {}
    },
    database: {
      connected: false,
      status: 'unknown'
    }
  };

  // 1. Check Email Configuration
  const emailConfig = validateEmailConfig();
  health.email.details = emailConfig;

  if (emailConfig.resend.configured) {
    health.email.provider = 'Resend (Primary)';
    health.email.status = 'configured';
  } else if (emailConfig.emailjs.configured) {
    health.email.provider = 'EmailJS (Fallback)';
    health.email.status = 'configured';
  } else {
    health.email.provider = 'None';
    health.email.status = 'misconfigured';
    console.error('❌ Email Configuration missing. Check VITE_EMAILJS_* or VITE_RESEND_* variables.');
  }

  // 2. Check Database Connection
  if (supabase) {
    try {
      const { error } = await supabase.from('messages').select('count', { count: 'exact', head: true });
      if (error) {
        health.database.status = 'error';
        health.database.error = error.message;
        console.warn('⚠️ Supabase connected but query failed:', error.message);
      } else {
        health.database.connected = true;
        health.database.status = 'healthy';
      }
    } catch (err) {
      health.database.status = 'error';
      health.database.error = err.message;
    }
  } else {
    health.database.status = 'not_configured';
  }

  console.group('🔧 Service Health Check');
  console.log('Email Service:', health.email.status === 'configured' ? '✅ Ready' : '❌ Failed', `(${health.email.provider})`);
  console.log('Database:', health.database.status === 'healthy' ? '✅ Ready' : '⚠️ Issue', `(${health.database.status})`);
  console.groupEnd();

  return health;
};
