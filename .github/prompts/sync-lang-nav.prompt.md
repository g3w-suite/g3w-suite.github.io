---
description: "Controlla la sincronizzazione tra le pagine IT e EN del sito G3W-Suite: trova pagine mancanti in una delle due lingue e link del language-switcher rotti."
name: "Sincronizza navigazione IT/EN"
agent: "agent"
---

Verifica che il sito generato abbia link di navigazione e hreflang corretti per entrambe le lingue. Le pagine sorgenti sono condivise direttamente in `src/`.

## Passi da eseguire

### 1. Inventario pagine per lingua

Esegui `npm run build`, poi inventaria le pagine HTML generate in `public/it/` e `public/en/`. Segnala pagine generate mancanti in una delle lingue.

### 2. Verifica language-switcher in ogni pagina

Per ogni pagina generata, leggi gli URL alternates e i link del language-switcher, verificando che:
- Il link alla lingua corrente abbia `aria-current="true"`
- Il link all'altra lingua punti a un file che **esiste effettivamente** nel filesystem

Segnala ogni link rotto (file di destinazione non trovato).

### 3. Verifica `hreflang` nell'`<head>`

Per ogni pagina, leggi i tag `<link rel="alternate" hreflang="...">` e verifica che:
- Esistano due tag alternate (uno `it`, uno `en`)
- Ogni URL punti a un file che esiste

Segnala eventuali tag mancanti o URL non validi.

### 4. Produci il report

Restituisci un report strutturato in tre sezioni:

```
## Pagine mancanti
| Pagina | Presente in | Mancante in |
|--------|-------------|-------------|
| ...    | IT          | EN          |

## Link language-switcher rotti
| File | Link rotto | Destinazione mancante |
|------|------------|----------------------|

## Tag hreflang non validi
| File | Problema |
|------|---------|
```

Se tutto è corretto, scrivi "Nessun problema trovato" per quella sezione.

### 5. Proponi azioni correttive

Per ogni problema trovato, suggerisci l'azione correttiva specifica in `src/` o `src/i18n/it.js`.

Non applicare automaticamente le correzioni — mostra solo il report e le proposte.
