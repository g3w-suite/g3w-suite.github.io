---
description: "Crea una nuova pagina changelog per G3W-Suite (versione IT e EN) seguendo la struttura esatta delle pagine esistenti."
name: "Aggiungi pagina changelog"
argument-hint: "numero versione, es. 3.12"
agent: "agent"
---

Crea una nuova pagina changelog per G3W-Suite versione **$ARGUMENTS**.

## Passi da eseguire

1. **Leggi le pagine di riferimento** [src/it/changelog/v3.10.html](../../src/it/changelog/v3.10.html) e [src/en/changelog/v3.10.html](../../src/en/changelog/v3.10.html) per estrarre la struttura della pagina e gli stili specifici.

2. **Crea `src/it/changelog/v3.X.html`** (sostituisci X con la versione fornita):
   - `<html lang="it">`
   - `<title>Changelog 3.X - G3W-Suite</title>`
   - Mantieni gli URL alternates relativi alla pagina (`v3.X.html` per IT, `../../en/changelog/v3.X.html` per EN)
   - Inserisci `<!--#include file="../header.html"-->` e `<!--#include file="../footer.html"-->`; non copiare il markup dei componenti
   - Body con segnaposto `<!-- TODO: inserire contenuto changelog 3.X -->`

3. **Crea `src/en/changelog/v3.X.html`**:
   - `<html lang="en">`
   - Mantieni gli URL alternates relativi alla pagina (`../../it/changelog/v3.X.html` per IT, `v3.X.html` per EN)
   - Inserisci `<!--#include file="../header.html"-->` e `<!--#include file="../footer.html"-->`
   - Body con segnaposto `<!-- TODO: insert changelog 3.X content -->`

4. **Aggiorna la navigazione** solo se serve, modificando `src/it/header.html` e `src/en/header.html`.

5. **Aggiorna `src/it/download.html` e `src/en/download.html`** se la nuova versione deve apparire nella tabella dei download.

## Regole da rispettare

- Non usare `style="..."` inline nei contenuti — usa solo classi CSS o il blocco `<style>` già presente nel `<head>` delle pagine changelog
- Aggiungi `loading="lazy"` su tutte le immagini below-fold
- Il blocco `<style>` specifico per il changelog (`.changelog__feature`, `.changelog__text h2`, ecc.) deve essere copiato identico dalle pagine esistenti
- Esegui `npm test` per verificare la build e i collegamenti
