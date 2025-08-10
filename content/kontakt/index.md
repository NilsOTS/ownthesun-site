---
title: "Kontakt – Kostenfreie Erstberatung"
slug: "kontakt"
description: "Souveräne Beratung für Eigentümer:innen in Hamburg & Schleswig-Holstein – OWN THE SUN."
---

<img src="/images/OwnTheSun%20LOGO%20FINAL%202000.png" alt="OWN THE SUN Logo" class="logo" />

# Kontakt

Wir melden uns in der Regel **innerhalb von 24 Stunden** – telefonisch oder per E-Mail.

<form id="lead-form" action="https://automation.ownthesun.de/webhook/lead" method="post" accept-charset="utf-8" autocomplete="on">
  <label for="name">Ihr Name*</label>
  <input id="name" name="name" type="text" required>

  <label for="email">E-Mail*</label>
  <input id="email" name="email" type="email" required>

  <label for="phone">Telefon (optional)</label>
  <input id="phone" name="phone" type="tel" inputmode="tel" placeholder="+49 ...">

  <label for="zip">PLZ (optional)</label>
  <input id="zip" name="zip" type="text" inputmode="numeric" pattern="[0-9]{5}" placeholder="z. B. 25469">

  <label for="message">Worum geht es?</label>
  <textarea id="message" name="message" rows="5" placeholder="Dach, gewünschte Lösung (PV/Speicher/Wärmepumpe/EMS), Zeithorizont"></textarea>

  <!-- Pflicht-Checkbox: Legal -->
  <label class="checkbox">
    <input type="checkbox" name="legal_accept" value="yes" required>
    Ich habe die <a href="/datenschutz/" target="_blank" rel="noopener">Datenschutzerklärung</a> und die
    <a href="/nutzungsbedingungen/" target="_blank" rel="noopener">Nutzungsbedingungen</a> gelesen und akzeptiere sie.
  </label>

  <!-- Optionale Einwilligung: Partnerweitergabe (separat, NICHT vorangekreuzt) -->
  <label class="checkbox">
    <input type="checkbox" name="partner_share_optin" value="yes">
    Ich möchte, dass meine Anfrage – falls sinnvoll – an ausgewählte, geprüfte Fachpartner in meiner Region weitergegeben wird
    (widerruflich per E-Mail an info@ownthesun.de).
  </label>

  <!-- Honeypot gegen Spam -->
  <div style="position:absolute; left:-5000px;" aria-hidden="true">
    <label for="website">Bitte freilassen</label>
    <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
  </div>

  <!-- Metadaten für n8n -->
  <input type="hidden" name="page_url" value="{{ .Permalink }}">
  <input type="hidden" name="source" value="kontakt">
  <input type="hidden" name="timestamp" value="{{ now }}">

  <button type="submit" class="btn">Kostenfreie Erstberatung anfragen</button>
</form>

<p class="microcopy">Zielgebiet: PLZ 200–204, 222, 224–228, 245, 253–255. Keine Vorkasse. Faire, transparente Angebote.</p>

<script>
  // GTM/Analytics-Event (optional)
  window.dataLayer = window.dataLayer || [];
  document.getElementById('lead-form')?.addEventListener('submit', function(){
    window.dataLayer.push({
      event: 'lead_submit',
      form_location: 'kontakt',
      consent_partner_share: !!document.querySelector('input[name="partner_share_optin"]:checked')
    });
  });
</script>
