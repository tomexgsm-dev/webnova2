
import React, { useState } from "react";
import { getClientEmailTemplate, getAdminEmailTemplate } from "@/utils/emailTemplates";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    projectType: ""
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
          subject: "Twoja wycena WebNova",
          html: getClientEmailTemplate(formData, { finalPrice: "—" })
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
          subject: "Nowy lead z formularza WebNova",
          html: getAdminEmailTemplate(formData, { finalPrice: "—" })
        })
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
        projectType: ""
      });

    } catch (err) {
      console.error(err);
      setError("Wystąpił błąd podczas wysyłania wiadomości.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="lead-form">

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Dziękujemy! Skontaktujemy się wkrótce.</p>}

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
        name="description"
        placeholder="Opis projektu"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Wysyłanie..." : "Wyślij"}
      </button>
    </form>
  );
}
