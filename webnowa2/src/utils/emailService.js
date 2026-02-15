import emailjs from 'emailjs-com';
import { 
  EMAILJS_SERVICE_ID, 
  EMAILJS_TEMPLATE_ID, 
  EMAILJS_PUBLIC_KEY, 
  validateEmailConfig
} from '@/config/emailConfig';

export class EmailError extends Error {
  constructor(message, provider, originalError = null, context = {}) {
    super(message);
    this.name = 'EmailError';
    this.provider = provider;
    this.originalError = originalError;
    this.context = context;
  }
}

/**
 * Wait for a specified amount of time
 */
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Sends email using EmailJS with retry logic
 */
const sendWithEmailJS = async (templateParams, attempt = 1, maxAttempts = 3) => {
  const configStatus = validateEmailConfig();
  
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'public_key_placeholder') {
    throw new EmailError('EmailJS Public Key is missing', 'EmailJS', null, { config: configStatus });
  }

  try {
    console.log(`📧 EmailJS Send Attempt ${attempt}/${maxAttempts}...`);
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status && response.status !== 200) {
      throw new Error(`EmailJS responded with status ${response.status}: ${response.text}`);
    }




    return response;
  } catch (error) {
    console.warn(`⚠️ EmailJS Attempt ${attempt} failed:`, error);
    
    // Check if we should retry
    if (attempt < maxAttempts) {
      const delay = 1000 * Math.pow(2, attempt - 1); // Exponential backoff: 1s, 2s, 4s
      console.log(`⏳ Retrying in ${delay}ms...`);
      await wait(delay);
      return sendWithEmailJS(templateParams, attempt + 1, maxAttempts);
    }

    // Identify specific error types for better feedback
    let errorMessage = 'Failed to send email after multiple attempts.';
    if (error.text && error.text.includes('service')) errorMessage = 'Email Service ID is invalid or service is down.';
    if (error.text && error.text.includes('template')) errorMessage = 'Email Template ID is invalid.';
    if (error.text && error.text.includes('user')) errorMessage = 'User/Public Key is invalid.';
    
    throw new EmailError(errorMessage, 'EmailJS', error, { 
      attempt, 
      maxAttempts,
      templateParams: { ...templateParams, message_html: '[TRUNCATED]' } // Don't log full HTML
    });
  }
};

/**
 * Main email sending service
 */
export const emailService = {
  send: async (params) => {
    try {
      console.log('🚀 Starting email send process...', { to: params.to_email, subject: params.subject });
      
      const result = await sendWithEmailJS(params);
      
      console.log('✅ Email sent successfully:', result);
      return { success: true, provider: 'EmailJS', data: result };
    } catch (error) {
      console.error('❌ Critical Email Failure:', error);
      
      // Return a structured error response rather than throwing, so UI can handle it gracefully
      return { 
        success: false, 
        provider: 'EmailJS', 
        error: error.message || 'Unknown error occurred',
        details: error.originalError ? JSON.stringify(error.originalError) : null
      };
    }
  }
};