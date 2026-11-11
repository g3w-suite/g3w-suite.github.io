---
description: "Crea una nuova pagina changelog per G3W-Suite (versione IT e EN) seguendo la struttura esatta delle pagine esistenti."
name: "Aggiungi pagina changelog"
argument-hint: "numero versione, es. 3.12"
agent: "agent"
---

Crea una nuova pagina changelog per G3W-Suite versione **$ARGUMENTS**.

## Passi da eseguire

1. **Leggi le pagine di riferimento** [public/it/changelog-3-10.html](../../public/it/changelog-3-10.html) e [public/en/changelog-3-10.html](../../public/en/changelog-3-10.html) per estrarre la struttura esatta di header, footer e stili inline del blocco `<style>` nel `<head>`.

2. **Crea `public/it/changelog-3-X.html`** (sostituisci X con la versione fornita):
   - `<html lang="it">`
   - `<title>Changelog 3.X - G3W-Suite</title>`
   - `hreflang` alternates: `../it/changelog-3-X.html` (it) e `../en/changelog-3-X.html` (en)
   - Header e footer identici a quelli di `changelog-3-10.html` versione IT
   - Nel language switcher: link IT con `aria-current="true"`, link EN punta a `../en/changelog-3-X.html`
   - Body con segnaposto `<!-- TODO: inserire contenuto changelog 3.X -->`

3. **Crea `public/en/changelog-3-X.html`**:
   - `<html lang="en">`
   - Header e footer identici a quelli di `changelog-3-10.html` versione EN
   - Nel language switcher: link EN con `aria-current="true"`, link IT punta a `../it/changelog-3-X.html`
   - Body con segnaposto `<!-- TODO: insert changelog 3.X content -->`

4. **Aggiorna i link di navigazione**: nel dropdown "Risorse" / "Resources" di **tutti** i file HTML in `public/it/` e `public/en/`, aggiorna il link della Demo e del Changelog affinché puntino alla nuova versione X (es. `demo-3-X.html`). Prima leggi un campione di file per capire il pattern attuale.

5. **Aggiorna `public/it/download.html` e `public/en/download.html`**: aggiungi la nuova versione alla tabella dei download.

## Regole da rispettare

- Non usare `style="..."` inline nei contenuti — usa solo classi CSS o il blocco `<style>` già presente nel `<head>` delle pagine changelog
- Aggiungi `loading="lazy"` su tutte le immagini below-fold
- Il blocco `<style>` specifico per il changelog (`.changelog__feature`, `.changelog__text h2`, ecc.) deve essere copiato identico dalle pagine esistenti
- Non modificare `public/assets/style.css` né `public/assets/app.js`
