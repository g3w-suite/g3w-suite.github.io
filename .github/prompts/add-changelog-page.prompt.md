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
   - Usa la pagina inglese come testo di base; aggiungi le traduzioni italiane desiderate in un blocco JSON `data-i18n` nella pagina, usando la stringa inglese esatta come chiave e marca i testi con `{{t '...'}}`
   - Definisci il titolo in un blocco `data-i18n-meta` in fondo alla pagina; aggiungi la traduzione italiana corrispondente al blocco `data-i18n`
   - La pagina è un frammento: non definire `doctype`, `html`, `head` o `body`; il build inietta automaticamente header e footer condivisi
   - Non inserire tag `rel="alternate"`: il build genera automaticamente gli URL hreflang dal percorso della pagina
   - Non inserire include per `src/_header.html` o `src/_footer.html` e non copiare il markup dei componenti
   - Usa `{{#it}}...{{/it}}` o `{{#en}}...{{/en}}` solo per differenze di contenuto o markup non gestibili con le traduzioni
   - Body con segnaposto `<!-- TODO: insert changelog 3.X content -->`

3. **Aggiorna `src/_header.html`** solo se serve e `src/download.html` se la nuova versione deve apparire nella tabella dei download.

## Regole da rispettare

- Non usare `style="..."` inline nei contenuti — usa solo classi CSS o gli stili già presenti nelle pagine changelog
- Aggiungi `loading="lazy"` su tutte le immagini below-fold
- Il blocco `<style>` specifico per il changelog (`.changelog__feature`, `.changelog__text h2`, ecc.) deve essere copiato identico dalle pagine esistenti
- Esegui `npm test` per verificare la build e i collegamenti
