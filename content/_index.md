---
title: "Photovoltaik, Speicher, EMS & Wärmepumpen in Hamburg & Schleswig-Holstein | OWN THE SUN"
description: "Hanseatische Autorität für PV, Speicher, EMS, Wallboxen & Wärmepumpen – ausschließlich im PLZ-Gebiet 200–204, 222, 224–228, 245, 253–255. Souveräne Beratung, geprüfte Meisterbetriebe, keine Vorkasse."
---

<section class="hero">
  <h1>30 Jahre Sonne – Ihr Vorteil aus dem Norden</h1>
  <p>Unabhängigkeit beginnt auf Ihrem Dach – mit unserer Erfahrung in Hamburg, Holstein & Dithmarschen (PLZ 200–204, 222, 224–228, 245, 253–255).</p>
  <a class="btn" href="/kontakt/">Kostenfreie Erstberatung</a>
</section>

<section class="trust" aria-label="Vertrauen">
  <ul>
    <li>Geprüfte Meisterbetriebe</li>
    <li>Bis 30 Jahre Leistungsgarantie</li>
    <li>Keine Vorkasse</li>
  </ul>
</section>

<section class="steps">
  <h2>So läuft es ab</h2>
  <ol>
    <li><strong>Erstberatung:</strong> Ziele, Dach/Objekt, Netz & Förderung im Zielgebiet.</li>
    <li><strong>Planung & Festpreis-Angebot:</strong> Technische Auslegung, Wirtschaftlichkeit, klare Timeline.</li>
    <li><strong>Installation & Abnahme:</strong> Meisterbetrieb, Zählerwechsel, Inbetriebnahme – sauber dokumentiert.</li>
  </ol>
</section>

<section class="region">
  <h2>Regional – von der Elbe bis zur Nordsee</h2>
  <p>Wir arbeiten ausschließlich im Norden: Hamburg, Schleswig-Holstein (nördlich der Elbe) & angrenzendes Niedersachsen – PLZ 200–204, 222, 224–228, 245, 253–255.</p>
</section>

<section class="products">
  <h2>Unsere Lösungen</h2>

  <h3>Photovoltaik (PV)</h3>
  <p>Langfristig stabile Erträge durch präzise ausgelegte Module. Mehr Autarkie, sinkende Stromkosten – fachgerecht geplant für hiesige Dächer.</p>

  <h3>Stromspeicher</h3>
  <p>Abendlasten intelligent abfedern und Eigenverbrauch erhöhen – optimal abgestimmt auf Ihr Verbrauchsprofil und Netzbedingungen vor Ort.</p>

  <h3>Wärmepumpen</h3>
  <p>Effiziente Wärme aus Umweltenergie – sinnvoll kombiniert mit PV und Speicher für niedrige Betriebskosten und mehr Unabhängigkeit.</p>

  <h3>Energiemanagement (EMS) & Wallbox</h3>
  <p>Erzeugung, Speicherung und Verbraucher orchestrieren – transparent per App, bereit für dynamische Tarife und Lastmanagement.</p>
</section>

<section class="inline-lead" aria-label="Schnellanfrage">
  <h2>Kurz anfragen & starten</h2>
  <form id="lead-inline" action="https://automation.ownthesun.de/webhook/lead" method="post" accept-charset="utf-8">
    <input type="text" name="name" placeholder="Ihr Name*" required>
    <input type="email" name="email" placeholder="E-Mail*" required>
    <input type="text" name="zip" placeholder="PLZ (optional)" pattern="[0-9]{5}">
    <input type="hidden" name="source" value="homepage-inline">
    <input type="hidden" name="page_url" value="{{ .Permalink }}">
    <input type="hidden" name="timestamp" value="{{ now }}">
    <label class="checkbox small">
      <input type="checkbox" name="legal_accept" value="yes" required>
      Ich akzeptiere <a href="/datenschutz/" target="_blank" rel="noopener">Datenschutz</a> & <a href="/nutzungsbedingungen/" target="_blank" rel="noopener">Nutzungsbedingungen</a>.
    </label>
    <label class="checkbox small">
      <input type="checkbox" name="partner_share_optin" value="yes">
      Anfrage optional an ausgewählte Fachpartner weitergeben
    </label>
    <div style="position:absolute; left:-5000px;" aria-hidden="true">
      <input type="text" name="website" tabindex="-1" autocomplete="off">
    </div>
    <button type="submit" class="btn">Kostenfreie Erstberatung anfragen</button>
  </form>
</section>

<section class="faq-teaser">
  <h2>Häufige Fragen</h2>
  <ul>
    <li><a href="/faq/#foerderung">Welche Förderungen gibt es aktuell?</a></li>
    <li><a href="/faq/#dach">Passt Ihr Dach für PV?</a></li>
    <li><a href="/faq/#zeit">Wie schnell ist die Inbetriebnahme?</a></li>
    <li><a href="/faq/#zahlung">Wie funktioniert die Zahlung ohne Vorkasse?</a></li>
  </ul>
  <a class="btn-secondary" href="/faq/">Alle FAQs ansehen</a>
</section>

<script>
  window.dataLayer = window.dataLayer || [];
  document.getElementById('lead-inline')?.addEventListener('submit', function(){
    window.dataLayer.push({
      event:'lead_submit', form_location:'homepage_inline',
      consent_partner_share: !!document.querySelector('#lead-inline input[name="partner_share_optin"]:checked')
    });
  });
</script>
