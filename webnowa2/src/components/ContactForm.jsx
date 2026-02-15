
import React, { useState } from "react";
import { getClientEmailTemplate, getAdminEmailTemplate } from "@/utils/emailTemplates";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    topic: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // MAIL DO KLIENTA
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer re_Gp6YoUZm_5bMWVd2VhJ8GgdUL2NDACtB8"
        },
        body: JSON.stringify({
          from: "WebNova <tomasz.szymanski@webnovaapp.com>",
          to: formData.email,
          subject: "Dziękujemy za kontakt — WebNova",
          html: getClientEmailTemplate(
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              description: formData.message
            },
            { finalPrice: "—" }
          )
        })
      });

      // MAIL DO CIEBIE (ADMINA)
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer re_Gp6YoUZm_5bMWVd2VhJ8GgdUL2NDACtB8"
        },
        body: JSON.stringify({
          from: "WebNova <tomasz.szymanski@webnovaapp.com>",
          to: "tomasz.szymanski@webnovaapp.com",
          subject: "Nowa wiadomość z formularza kontaktowego WebNova",
          html: getAdminEmailTemplate(
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              description: formData.message
            },
            { finalPrice: "—" }
          )
        })
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        topic: ""
      });

    } catch (err) {
      console.error(err);
      setError("Wystąpił błąd podczas wysyłania wiadomości.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Dziękujemy! Odezwiemy się wkrótce.</p>}

      <select
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        required
      >
        <option value="">Wybierz temat</option>
        <option value="Strona firmowa">Strona firmowa</option>
        <option value="Sklep internetowy">Sklep internetowy</option>
        <option value="Aplikacja webowa">Aplikacja webowa</option>
        <option value="Projekt UI/UX">Projekt UI/UX</option>
        <option value="Inne">Inne</option>
      </select>

      <input
        type="text"
        name="name"
        placeholder="Imię i nazwisko / Firma"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Telefon"
        value={formData.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Opis projektu / Wiadomość"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>
    </form>
  );
}
