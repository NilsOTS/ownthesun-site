---
title: "Kontakt & kostenfreie Erstberatung"
description: "Unabhängige Energie mit Own The Sun: PV, Speicher, Wärmepumpe & Wallbox. Kostenfreie Erstberatung – jetzt anfragen."
h1: "Kostenfreie Erstberatung anfragen"
layout: "single"
url: "/kontakt/"
---

<section class="form-wrap">
  <p class="lead">
    Persönliche Beratung für Hamburg & Schleswig-Holstein. Wir melden uns i.d.R. <strong>binnen 24h</strong>.
  </p>

  <!-- Formular -->
  <form id="ots-contact" class="ots-form" method="post" action="https://automation.ownthesun.de/webhook/lead" novalidate>
    <!-- Anti-Spam (Honeypot: muss leer bleiben) -->
    <input type="text" name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">

    <!-- Metadaten -->
    <input type="hidden" name="form_version" value="qs-v1">
    <input type="hidden" name="submitted_at" value="">
    <input type="hidden" name="page_url" value="">
    <input type="hidden" name="utm_source" value="">
    <input type="hidden" name="utm_campaign" value="">
    <input type="hidden" name="utm_medium" value="">

    <fieldset class="grid-2">
      <div class="field">
        <label for="fname">Vorname*</label>
        <input id="fname" name="first_name" type="text" required inputmode="text" autocomplete="given-name">
      </div>
      <div class="field">
        <label for="lname">Nachname*</label>
        <input id="lname" name="last_name" type="text" required inputmode="text" autocomplete="family-name">
      </div>
    </fieldset>

    <fieldset class="grid-2">
      <div class="field">
        <label for="email">E-Mail*</label>
        <input id="email" name="email" type="email" required autocomplete="email">
      </div>
      <div class="field">
        <label for="phone">Telefon*</label>
        <input id="phone" name="phone" type="tel" required inputmode="tel" autocomplete="tel">
      </div>
    </fieldset>

    <fieldset class="grid-2">
      <div class="field">
        <label for="zip">PLZ*</label>
        <input id="zip" name="zip" type="text" required pattern="[0-9]{5}" inputmode="numeric">
      </div>
      <div class="field">
        <label for="city">Ort*</label>
        <input id="city" name="city" type="text" required>
      </div>
    </fieldset>

    <fieldset class="grid-1">
      <div class="field">
        <label for="street">Straße & Nr. (optional)</label>
        <input id="street" name="street" type="text" autocomplete="address-line1">
      </div>
    </fieldset>

    <fieldset class="grid-1">
      <legend>Wofür interessieren Sie sich?*</legend>
      <label class="opt"><input type="checkbox" name="interest[]" value="pv" required> Photovoltaik</label>
      <label class="opt"><input type="checkbox" name="interest[]" value="speicher"> Stromspeicher</label>
      <label class="opt"><input type="checkbox" name="interest[]" value="wp"> Wärmepumpe</label>
      <label class="opt"><input type="checkbox" name="interest[]" value="wallbox"> Wallbox</label>
      <label class="opt"><input type="checkbox" name="interest[]" value="ems"> Energiemanagement</label>
    </fieldset>

    <fieldset class="grid-1">
      <div class="field">
        <label for="message">Kurze Beschreibung (optional)</label>
        <textarea id="message" name="message" rows="4" placeholder="Dachform, Baujahr, Stromverbrauch, Ziele..."></textarea>
      </div>
    </fieldset>

    <fieldset class="grid-1">
      <label class="opt">
        <input type="checkbox" name="legal_accept" value="yes" required>
        Ich akzeptiere die <a href="/datenschutz/" target="_blank" rel="noopener">Datenschutzbestimmungen</a> und
        <a href="/nutzungsbedingungen/" target="_blank" rel="noopener">Nutzungsbedingungen</a>.*
      </label>
      <label class="opt">
        <input type="checkbox" name="partner_share_optin" value="yes">
        Optional: Ich erlaube die Weitergabe meiner Anfrage an ausgewählte, geprüfte Fachpartner in meiner Region (widerruflich).
      </label>
      <label class="opt">
        <input type="checkbox" name="consent_marketing" value="yes">
        Optional: Ich möchte Updates & Angebote per E-Mail erhalten (widerruflich).
      </label>
    </fieldset>

    <div class="actions">
      <button type="submit" class="cta-button">Kostenfreie Erstberatung anfragen</button>
      <p class="legal-hint">*Pflichtfelder</p>
    </div>
  </form>
</section>

<!-- Hidden-Felder befüllen (stört den 302-Redirect nicht) -->
<script>
  (function () {
    var qs = new URLSearchParams(location.search);
    function set(name, val){ var el = document.querySelector('input[name="'+name+'"]'); if (el) el.value = val || ""; }
    set("page_url", location.href);
    set("submitted_at", new Date().toISOString());
    set("utm_source", qs.get("utm_source"));
    set("utm_medium", qs.get("utm_medium"));
    set("utm_campaign", qs.get("utm_campaign"));
  })();
</script>