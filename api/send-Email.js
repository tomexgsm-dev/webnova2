import { Resend } from "resend";
import { getClientEmailTemplate, getAdminEmailTemplate } from "@/utils/emailTemplates";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, topic } = req.body;

  if (!name || !email || !message || !topic) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // MAIL DO KLIENTA
    await resend.emails.send({
      from: "WebNova <tomasz.szymanski@webnovaapp.com>",
      to: email,
      subject: "Dziękujemy za kontakt — WebNova",
      html: getClientEmailTemplate(
        {
          name,
          email,
          phone,
          description: message,
          topic
        },
        { finalPrice: "—" }
      )
    });

    // MAIL DO ADMINA
    await resend.emails.send({
      from: "WebNova <tomasz.szymanski@webnovaapp.com>",
      to: "tomasz.szymanski@webnovaapp.com",
      subject: "Nowa wiadomość z formularza WebNova",
      html: getAdminEmailTemplate(
        {
          name,
          email,
          phone,
          description: message,
          topic
        },
        { finalPrice: "—" }
      )
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Email sending failed" });
  }
}

