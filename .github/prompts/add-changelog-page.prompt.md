---
description: "Crea una pagina changelog multilingua per G3W-Suite seguendo la struttura delle pagine esistenti."
name: "Aggiungi pagina changelog"
argument-hint: "numero versione, es. 3.12"
agent: "agent"
---

Crea una nuova pagina changelog per G3W-Suite versione **$ARGUMENTS**.

## Passi da eseguire

1. **Leggi la pagina di riferimento** [src/changelog/v3.10.md](../../src/changelog/v3.10.md) per seguire struttura e formattazione.

2. **Crea `src/changelog/v3.X.md`** (sostituisci X con la versione fornita):
   - Scrivi in Markdown: il primo H1 e il paragrafo successivo diventano titolo e intro della pagina; usa Markdown per titoli, paragrafi ed elenchi
   - Mantieni HTML solo per layout o media che Markdown non può esprimere (per esempio schede sponsor, video e CTA)
   - Usa la pagina inglese come testo di base; aggiungi le traduzioni italiane desiderate in un blocco JSON `data-i18n` in fondo al file, usando la stringa inglese esatta come chiave e marca i testi con `{{t '...'}}`
   - Definisci il titolo in un blocco `data-i18n-meta` in fondo alla pagina; aggiungi la traduzione italiana corrispondente al blocco `data-i18n`
   - Non definire `doctype`, `html`, `head`, `body` o `main`: il build genera lo scheletro automaticamente
   - Non inserire tag `rel="alternate"`: il build genera automaticamente gli URL hreflang dal percorso della pagina
   - Usa `{{#it}}...{{/it}}` o `{{#en}}...{{/en}}` solo per differenze di contenuto o markup non gestibili con le traduzioni
   - Inserisci un segnaposto Markdown se i dettagli della release non sono ancora disponibili

3. **Aggiorna `src/_header.html`** solo se serve e `src/download.md` se la nuova versione deve apparire nella tabella dei download.

## Regole da rispettare

- Non usare `style="..."` inline nei contenuti — usa solo classi CSS o gli stili già presenti nelle pagine changelog
- Aggiungi `loading="lazy"` su tutte le immagini below-fold
- Usa le classi changelog esistenti senza introdurre stili inline
- Esegui `npm test` per verificare la build e i collegamenti
