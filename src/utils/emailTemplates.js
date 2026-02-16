
export const getClientEmailTemplate = (clientData, quoteData) => {
  const { name } = clientData;
  const {
    projectType,
    pageCount,
    features,
    design,
    timeline,
    finalPrice
  } = quoteData;

  const featuresList = features && features.length > 0 
    ? features.map(f => `<li>${f.name} (+${f.price} PLN)</li>`).join('') 
    : '<li>Brak dodatkowych funkcji</li>';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fafafa;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #6d28d9; margin: 0;">Twoja Wycena Projektu - WebNova</h1>
        <p style="color: #666;">Dziękujemy za zainteresowanie naszymi usługami</p>
      </div>

      <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p>Cześć <strong>${name}</strong>,</p>
        <p>Otrzymaliśmy Twoje zapytanie i przygotowaliśmy wstępne podsumowanie wyceny na podstawie wybranych opcji w naszym kalkulatorze WebNova.</p>
        
        <h3 style="border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; color: #1f2937;">Szczegóły wyceny:</h3>
        
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
            <strong>Typ projektu:</strong> ${projectType?.name || '-'} (${projectType?.basePrice || 0} PLN)
          </li>
          <li style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
            <strong>Liczba podstron:</strong> ${pageCount?.name || '-'} (+${pageCount?.price || 0} PLN)
          </li>
          <li style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
            <strong>Design:</strong> ${design?.name || '-'} (+${design?.price || 0} PLN)
          </li>
          <li style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
            <strong>Czas realizacji:</strong> ${timeline?.name || '-'} (${timeline?.multiplier > 1 ? '+' + Math.round((timeline.multiplier - 1) * 100) + '%' : 'Standard'})
          </li>
        </ul>

        <h4 style="margin-bottom: 10px; color: #1f2937;">Wybrane funkcje dodatkowe:</h4>
        <ul style="margin-top: 0; color: #4b5563;">
          ${featuresList}
        </ul>

        <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 6px; text-align: center;">
          <p style="margin: 0; font-size: 14px; color: #666;">Szacunkowa cena netto:</p>
          <h2 style="margin: 5px 0 0; color: #6d28d9; font-size: 28px;">${finalPrice} PLN</h2>
          <p style="margin: 5px 0 0; font-size: 12px; color: #9ca3af;">+ 23% VAT</p>
        </div>
      </div>

      <div style="margin-top: 25px; font-size: 14px; color: #666; text-align: center;">
        <p><strong>Uwaga:</strong> To jest orientacyjna wycena automatyczna WebNova. Finalną ofertę przedstawimy po dokładnej konsultacji i analizie wymagań.</p>
        <p>Nasz zespół skontaktuje się z Tobą w ciągu 24 godzin, aby omówić szczegóły.</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
        &copy; ${new Date().getFullYear()} WebNova. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  `;
};

export const getAdminEmailTemplate = (clientData, quoteData) => {
  const { name, email, phone, description } = clientData;
  const {
    projectType,
    pageCount,
    features,
    design,
    timeline,
    finalPrice
  } = quoteData;

  const featuresList = features && features.length > 0 
    ? features.map(f => `<li>${f.name}</li>`).join('') 
    : '<li>Brak</li>';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #333;">
      <h2 style="color: #dc2626;">Nowy Lead WebNova</h2>
      
      <h3>Dane Klienta:</h3>
      <ul>
        <li><strong>Imię/Firma:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telefon:</strong> ${phone}</li>
        <li><strong>Opis:</strong> ${description || 'Brak opisu'}</li>
      </ul>

      <h3>Wybrana Konfiguracja:</h3>
      <ul>
        <li><strong>Typ:</strong> ${projectType?.name}</li>
        <li><strong>Strony:</strong> ${pageCount?.name}</li>
        <li><strong>Design:</strong> ${design?.name}</li>
        <li><strong>Czas:</strong> ${timeline?.name}</li>
        <li><strong>Funkcje:</strong>
          <ul>${featuresList}</ul>
        </li>
      </ul>

      <h3 style="color: #6d28d9;">Wycena Końcowa: ${finalPrice} PLN (netto)</h3>
    </div>
  `;
};
