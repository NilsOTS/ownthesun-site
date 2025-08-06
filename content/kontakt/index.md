---
title: "Kontakt"
slug: "kontakt"
description: "Nimm Kontakt mit Own The Sun auf – wir beraten ehrlich & persönlich."
---

<img src="/images/OwnTheSun%20LOGO%20FINAL%202000.png" alt="Own The Sun Logo" class="logo" />

# Kontaktiere uns

Wir beraten dich ehrlich, persönlich und unverbindlich.  
Nutze das Kontaktformular – wir melden uns schnellstmöglich!

<form id="kontaktform" method="POST" action="https://YOUR-N8N-HOST/webhook/ownthesun-kontakt" autocomplete="on">
  <label>Name:<br>
    <input type="text" name="Name" required>
  </label>
  <label>E-Mail:<br>
    <input type="email" name="E-Mail" required>
  </label>
  <label>Telefonnummer (optional):<br>
    <input type="tel" name="Telefonnummer">
  </label>
  <label>Nachricht:<br>
    <textarea name="Nachricht" required></textarea>
  </label>
  <label for="dsgvo" style="display:flex;align-items:flex-start;font-size:0.97em;line-height:1.4;margin-bottom:10px;">
    <input id="dsgvo" type="checkbox" name="DSGVO" required style="margin:2px 10px 0 0;">
    <span>
      Ich habe die <a href="/datenschutz/" target="_blank" rel="noopener">Datenschutzerklärung</a> und die <a href="/nutzungsbedingungen/" target="_blank" rel="noopener">Nutzungsbedingungen</a> gelesen und akzeptiere sie.<br>
      Ich bin einverstanden, dass meine Kontaktdaten zur Vertragsanbahnung oder Vermittlung an geeignete Partner <b>weitergegeben oder verkauft</b> werden dürfen.
    </span>
  </label>
  <div class="dsgvo-trust">
    <strong>Deine Daten sind sicher:</strong><br>100 % DSGVO-konform.
  </div>
  <div style="display:flex;gap:12px;margin-top:8px;">
    <button type="submit">Absenden</button>
    <button type="button" onclick="window.location='/'" style="background:#eee;color:#003366;">Abbrechen</button>
  </div>
</form>

<script>
document.getElementById("kontaktform").onsubmit = function() {
  setTimeout(function() {
    window.location.href = "/thank-you/";
  }, 300);
};
</script>
