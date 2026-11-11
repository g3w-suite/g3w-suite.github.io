---
description: "Modifica l'header o il footer condiviso del sito G3W-Suite in entrambe le lingue."
name: "Aggiorna header/footer su tutte le pagine"
argument-hint: "descrivi la modifica da fare, es. 'aggiungi voce Blog nel menu Risorse'"
agent: "agent"
---

Applica la seguente modifica alle componenti condivise del sito G3W-Suite:

**Modifica richiesta:** $ARGUMENTS

## Passi da eseguire

### 1. Individua le componenti

Leggi `src/_header.html` e `src/_footer.html`. Le pagine generate in `public/` non sono sorgenti.

### 2. Pianifica la modifica

- Modifica solo la componente condivisa necessaria
- Aggiungi a `src/assets/i18n/it.json` le traduzioni usando la stringa inglese esatta come chiave e marca i testi con `{{t '...'}}`; usa blocchi di lingua soltanto per differenze strutturali o attributi localizzati
- Se la modifica riguarda solo il menu di navigazione, il footer probabilmente non va toccato, e viceversa

### 3. Verifica

Esegui `npm test` per rigenerare il sito e verificare la struttura e l'accessibilità.

## Regole

- Le modifiche devono mantenere coerenti le versioni IT e EN generate
- Non aggiungere stili `inline` — usa le classi CSS esistenti
- Non rimuovere attributi di accessibilità (`aria-*`, `role`)
