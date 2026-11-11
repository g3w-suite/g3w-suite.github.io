---
description: "Propaga una modifica all'header o al footer su tutti i file HTML del sito G3W-Suite (IT + EN). Usa questo prompt quando aggiungi una voce di menu, modifichi un link, aggiorni i social o cambi il footer."
name: "Aggiorna header/footer su tutte le pagine"
argument-hint: "descrivi la modifica da fare, es. 'aggiungi voce Blog nel menu Risorse'"
agent: "agent"
---

Devi propagare la seguente modifica a header o footer su **tutti** i file HTML del sito G3W-Suite:

**Modifica richiesta:** $ARGUMENTS

## Passi da eseguire

### 1. Individua le pagine di riferimento

Leggi [public/it/index.html](../../public/it/index.html) e [public/en/index.html](../../public/en/index.html) per capire la struttura attuale di header e footer prima di qualsiasi modifica.

### 2. Pianifica la modifica

- Identifica esattamente quale stringa HTML va sostituita nell'header IT, nell'header EN e (se la modifica tocca il footer) nel footer comune
- Ricorda che IT e EN hanno testi e link diversi nel nav: es. "Risorse" (IT) vs "Resources" (EN), `aria-label="Navigazione principale"` (IT) vs `aria-label="Main navigation"` (EN)
- Se la modifica riguarda solo il menu di navigazione, il footer probabilmente non va toccato, e viceversa

### 3. Elenca i file da modificare

Elenca tutti i file `.html` in:
- `public/it/` — applica la variante IT
- `public/en/` — applica la variante EN

### 4. Applica la modifica

Per ciascun file:
- Usa `replace_string_in_file` (o `multi_replace_string_in_file` per batch) includendo almeno 3 righe di contesto prima e dopo la stringa da sostituire
- **Non modificare** `public/assets/style.css`, `public/assets/app.js` o `public/index.html` (root redirect) a meno che la modifica lo richieda esplicitamente

### 5. Verifica

Dopo aver modificato tutti i file, elenca quanti file sono stati aggiornati per lingua e conferma che nessun file è stato saltato per errore.

## Regole

- Le modifiche IT e EN devono essere coerenti nella struttura HTML ma possono differire nel testo (traduzioni)
- Non aggiungere stili `inline` — usa le classi CSS esistenti
- Non rimuovere attributi di accessibilità (`aria-*`, `role`)
