---
description: "Propaga una modifica all'header o al footer su tutti i file HTML del sito G3W-Suite (IT + EN). Usa questo prompt quando aggiungi una voce di menu, modifichi un link, aggiorni i social o cambi il footer."
name: "Aggiorna header/footer su tutte le pagine"
argument-hint: "descrivi la modifica da fare, es. 'aggiungi voce Blog nel menu Risorse'"
agent: "agent"
---

Applica la seguente modifica alle componenti condivise del sito G3W-Suite:

**Modifica richiesta:** $ARGUMENTS

## Passi da eseguire

### 1. Individua le componenti

Leggi `src/it/_header.html`, `src/en/_header.html`, `src/it/_footer.html` e `src/en/_footer.html`. Le pagine generate in `public/` non sono sorgenti.

### 2. Pianifica la modifica

- Modifica solo le componenti necessarie nelle versioni IT e EN
- Ricorda che IT e EN hanno testi e link diversi nel nav: es. "Risorse" (IT) vs "Resources" (EN), `aria-label="Navigazione principale"` (IT) vs `aria-label="Main navigation"` (EN)
- Se la modifica riguarda solo il menu di navigazione, il footer probabilmente non va toccato, e viceversa

### 3. Verifica

Esegui `npm test` per rigenerare il sito e verificare la struttura e l'accessibilità.

## Regole

- Le modifiche IT e EN devono essere coerenti nella struttura HTML ma possono differire nel testo (traduzioni)
- Non aggiungere stili `inline` — usa le classi CSS esistenti
- Non rimuovere attributi di accessibilità (`aria-*`, `role`)
