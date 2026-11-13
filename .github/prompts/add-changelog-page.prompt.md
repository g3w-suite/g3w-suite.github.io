---
description: "Crea un articolo bilingue con le note di rilascio di G3W-Suite nella sezione News."
name: "Aggiungi note di rilascio"
argument-hint: "versione e data, es. 3.12, 2026-11-13"
agent: "agent"
---

Crea un articolo News con le note di rilascio di G3W-Suite versione **$ARGUMENTS**.

## Passi da eseguire

1. **Leggi la pagina di riferimento** [src/news/2025-07-30-changelog-v3.10.md](../../src/news/2025-07-30-changelog-v3.10.md) per seguire struttura e formattazione.

2. **Crea `src/news/YYYY-MM-DD-changelog-v3.X.md`** (usa la data di rilascio e sostituisci X con la versione fornita):
   - Scrivi in Markdown: il primo H1 e il paragrafo successivo diventano titolo e intro della pagina; usa Markdown per titoli, paragrafi ed elenchi
   - Mantieni HTML solo per layout o media che Markdown non può esprimere (per esempio schede sponsor, video e CTA)
   - Usa la pagina inglese come testo di base; aggiungi le traduzioni italiane in un blocco JSON `data-i18n` in fondo al file, usando ogni riga Markdown inglese completa come chiave esatta; per il testo Markdown non serve `{{t '...'}}`
   - Usa `{{t '...'}}` solo per testo inline come attributi e testi alternativi delle immagini
   - Definisci il titolo in un blocco `data-i18n-meta` in fondo alla pagina; aggiungi la traduzione italiana corrispondente al blocco `data-i18n`
   - Non definire `doctype`, `html`, `head`, `body` o `main`: il build genera lo scheletro automaticamente
   - Non inserire tag `rel="alternate"`: il build genera automaticamente gli URL hreflang dal percorso della pagina
   - Usa `{{#it}}...{{/it}}` o `{{#en}}...{{/en}}` solo per differenze di contenuto o markup non gestibili con le traduzioni
   - Inserisci un segnaposto Markdown se i dettagli della release non sono ancora disponibili

3. **Aggiorna `src/_header.html`** solo se serve e `src/download.md` se la nuova versione deve apparire nella tabella dei download.

## Regole da rispettare

- Non usare `style="..."` inline nei contenuti — usa solo classi CSS o gli stili già presenti negli articoli News
- Aggiungi `loading="lazy"` su tutte le immagini below-fold
- Usa le classi esistenti per gli articoli News senza introdurre stili inline
- Aggiorna `src/news/index.md` inserendo il nuovo articolo in ordine cronologico decrescente; i pulsanti nella home della documentazione si aggiornano dal nome del file
- Esegui `npm test` per verificare la build e i collegamenti
