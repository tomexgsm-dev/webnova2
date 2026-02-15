
import { emailService } from '@/utils/emailService';
import { validateEmailConfig } from '@/config/emailConfig';

/**
 * Utility to test email configuration from the browser console
 * Usage: import { testEmailConnection } from '@/utils/emailDebug'; testEmailConnection();
 */
export const testEmailConnection = async () => {
  console.group('🔧 Email Configuration Diagnostics');
  
  // 1. Check Config
  const config = validateEmailConfig();
  console.log('Configuration Status:', config);

  if (!config.emailjs.configured) {
    console.error('❌ EmailJS is not fully configured. Missing:', config.emailjs.missing.join(', '));
    console.groupEnd();
    return;
  }

  // 2. Send Test Email
  console.log('📧 Sending test email...');
  const testParams = {
    to_email: config.admin.email,
    to_name: 'Admin',
    subject: 'WebNova Email Integration Test',
    message_html: '<h1>Integration Test</h1><p>If you see this, EmailJS is working correctly!</p>',
    from_name: 'System Test',
    reply_to: 'noreply@webnova.com'
  };

  try {
    const result = await emailService.send(testParams);
    
    if (result.success) {
      console.log('✅ TEST PASSED: Email sent successfully!');
    } else {
      console.error('❌ TEST FAILED: Service returned error.', result.error);
    }
  } catch (err) {
    console.error('❌ TEST CRASHED:', err);
  }

  console.groupEnd();
};
