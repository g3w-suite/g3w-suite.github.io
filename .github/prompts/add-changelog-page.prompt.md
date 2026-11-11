---
description: "Crea una pagina changelog multilingua per G3W-Suite seguendo la struttura delle pagine esistenti."
name: "Aggiungi pagina changelog"
argument-hint: "numero versione, es. 3.12"
agent: "agent"
---

Crea una nuova pagina changelog per G3W-Suite versione **$ARGUMENTS**.

## Passi da eseguire

1. **Leggi la pagina di riferimento** [src/changelog/v3.10.html](../../src/changelog/v3.10.html) per estrarre la struttura e gli stili specifici.

2. **Crea `src/changelog/v3.X.html`** (sostituisci X con la versione fornita):
   - Usa la pagina inglese come testo di base; aggiungi a `src/assets/i18n/it.json` le traduzioni desiderate usando la stringa inglese esatta come chiave e marca i testi con `{{t '...'}}`
   - `<title>Changelog 3.X - G3W-Suite</title>`
   - Nel `<head>`, inserisci `<!--#include file="../_meta.html"-->` per charset, viewport e stylesheet condivisi
   - Usa URL alternates dalla radice (`/it/changelog/v3.X/` per IT, `/en/changelog/v3.X/` per EN), senza `.html`
   - Inserisci `<!--#include file="../_header.html"-->` e `<!--#include file="../_footer.html"-->`; non copiare il markup dei componenti
   - Usa `{{#it}}...{{/it}}` o `{{#en}}...{{/en}}` solo per differenze di contenuto o markup non gestibili con le traduzioni
   - Body con segnaposto `<!-- TODO: insert changelog 3.X content -->`

3. **Aggiorna `src/_header.html`** solo se serve e `src/download.html` se la nuova versione deve apparire nella tabella dei download.

## Regole da rispettare

- Non usare `style="..."` inline nei contenuti — usa solo classi CSS o il blocco `<style>` già presente nel `<head>` delle pagine changelog
- Aggiungi `loading="lazy"` su tutte le immagini below-fold
- Il blocco `<style>` specifico per il changelog (`.changelog__feature`, `.changelog__text h2`, ecc.) deve essere copiato identico dalle pagine esistenti
- Esegui `npm test` per verificare la build e i collegamenti
