
import { emailService } from '@/utils/emailService';
import { supabase } from '@/config/supabaseConfig';
import { ADMIN_EMAIL } from '@/config/emailConfig';
import { getClientEmailTemplate, getAdminEmailTemplate } from '@/utils/emailTemplates';

// Validate email format
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const sendQuoteEmails = async (clientData, quoteData) => {
  if (!isValidEmail(clientData.email)) {
    return { success: false, message: 'Nieprawidłowy adres email.' };
  }

  try {
    const clientHtml = getClientEmailTemplate(clientData, quoteData);
    const adminHtml = getAdminEmailTemplate(clientData, quoteData);

    // Email to Client
    const clientParams = {
      to_email: clientData.email,
      to_name: clientData.name,
      subject: `Wycena Twojego projektu WebNova: ${quoteData.projectType?.name || 'Nowy Projekt'}`,
      message_html: clientHtml,
      project_type: quoteData.projectType?.name || 'N/A',
      final_price: quoteData.finalPrice || '0',
      reply_to: ADMIN_EMAIL
    };

    // Email to Admin
    const adminParams = {
      to_email: ADMIN_EMAIL,
      to_name: "Admin",
      subject: `Nowy Lead WebNova: ${clientData.name} - ${quoteData.finalPrice || '0'} PLN`,
      message_html: adminHtml,
      client_name: clientData.name,
      client_email: clientData.email,
      client_phone: clientData.phone,
      reply_to: clientData.email
    };

    console.log('📤 Sending Quote Emails...', { client: clientData.email, admin: ADMIN_EMAIL });

    // Send emails in parallel but handle failures individually to report better errors
    const [clientRes, adminRes] = await Promise.all([
      emailService.send(clientParams),
      emailService.send(adminParams)
    ]);

    // If at least one succeeded, we consider it a partial success, but ideally both should work.
    // Prioritize client email success for user feedback.
    if (!clientRes.success) {
      console.error('❌ Failed to send client email:', clientRes.error);
      // We still return success if admin email worked, but ideally warn user
      if (adminRes.success) {
         return { success: true, message: 'Wysłano zgłoszenie do administratora, ale wystąpił problem z potwierdzeniem dla Ciebie.' };
      }
      return { 
        success: false, 
        message: `Nie udało się wysłać wyceny: ${clientRes.error || 'Błąd połączenia'}. Spróbuj ponownie.` 
      };
    }

    if (!adminRes.success) {
      console.warn('⚠️ Failed to send admin notification (non-critical):', adminRes.error);
    }

    return { success: true, message: 'Wycena została wysłana pomyślnie!' };

  } catch (error) {
    console.error('❌ Unexpected error in sendQuoteEmails:', error);
    return { 
      success: false, 
      message: 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie za chwilę.' 
    };
  }
};

export const sendContactEmail = async (formData) => {
  let messageId = null;
  const timestamp = new Date().toISOString();

  // 1. Validation
  if (!isValidEmail(formData.email)) {
    return { success: false, message: 'Nieprawidłowy adres email.' };
  }

  try {
    // 2. DB Save (Status: Pending) - If Supabase is connected
    if (supabase) {
      const { data, error } = await supabase
        .from('messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          project_type: formData.projectType || 'Kontakt',
          status: 'pending',
          read: false,
          created_at: timestamp
        }])
        .select()
        .single();
      
      if (data) messageId = data.id;
      if (error) console.warn('Supabase backup failed (non-critical):', error.message);
    }

    // 3. Prepare Email Params for Admin
    const emailParams = {
      to_email: ADMIN_EMAIL,
      to_name: 'WebNova Admin',
      subject: `Nowe zapytanie: ${formData.projectType || 'Kontakt'} od ${formData.name}`,
      reply_to: formData.email,
      message_html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Nowe zapytanie ofertowe</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Od:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #2563eb;">${formData.email}</a></p>
            <p><strong>Telefon:</strong> ${formData.phone || 'Nie podano'}</p>
            <p><strong>Typ:</strong> ${formData.projectType || 'Ogólne zapytanie'}</p>
          </div>
          
          <div style="margin-top: 20px; background: white; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1;">
            <h3 style="margin-top: 0; font-size: 16px; color: #475569;">Treść wiadomości:</h3>
            <p style="white-space: pre-wrap; color: #1e293b; margin-bottom: 0;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
            Wysłano: ${new Date(timestamp).toLocaleString()}
          </div>
        </div>
      `,
      // EmailJS specific fields mapping
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
      project_type: formData.projectType || 'Kontakt'
    };

    console.log('📤 Sending Contact Email to Admin...', { to: ADMIN_EMAIL, from: formData.email });

    // 4. Send Email via Service
    const result = await emailService.send(emailParams);

    if (!result.success) {
      throw new Error(result.error || 'Email service failed');
    }

    // 5. Update DB (Status: Sent)
    if (messageId && supabase) {
      await supabase
        .from('messages')
        .update({ status: 'sent' })
        .eq('id', messageId);
    }

    return { success: true, message: 'Wiadomość została wysłana!' };

  } catch (error) {
    console.error('❌ Contact flow failed:', error);
    
    // 6. Update DB (Status: Failed)
    if (messageId && supabase) {
      await supabase
        .from('messages')
        .update({ status: 'failed' })
        .eq('id', messageId);
    }

    return { 
      success: false, 
      message: error.message || 'Wystąpił błąd serwera. Spróbuj ponownie.' 
    };
  }
};
