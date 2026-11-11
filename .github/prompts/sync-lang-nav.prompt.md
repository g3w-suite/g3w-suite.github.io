---
description: "Controlla la sincronizzazione tra le pagine IT e EN del sito G3W-Suite: trova pagine mancanti in una delle due lingue e link del language-switcher rotti."
name: "Sincronizza navigazione IT/EN"
agent: "agent"
---

Esegui una verifica completa della sincronizzazione multilingua del sito G3W-Suite.

## Passi da eseguire

### 1. Inventario pagine per lingua

Elenca le pagine sorgenti `.html` presenti in:
- `src/it/`
- `src/en/`

Costruisci due elenchi e calcola:
- Pagine presenti in IT ma mancanti in EN
- Pagine presenti in EN ma mancanti in IT

### 2. Verifica language-switcher in ogni pagina

Per ogni pagina sorgente in entrambe le cartelle, leggi gli URL alternates e i link generati dal componente `src/{lang}/header.html`, verificando che:
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

Per ogni problema trovato, suggerisci l'azione correttiva specifica nei file sorgenti `src/it/` o `src/en/`.

Non applicare automaticamente le correzioni — mostra solo il report e le proposte.
