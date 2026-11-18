# Editing via IFRAME

## Overview

Use **online editing** when G3W-SUITE is embedded in an `<iframe>` hosted by an external parent application.

In this integration scenario, the parent application and the embedded G3W-SUITE client communicate through the browser's `postMessage` API, exchanging structured JSON messages. This channel allows the parent application to programmatically drive the standard editing operations exposed by G3W-SUITE — **add**, **update**, **delete**, and **draw** features — on the layers published in the QGIS project, and to receive back the results (success, errors, or the GeoJSON of the affected features).

The following sections cover the message format, initial handshake and payloads for each supported editing operation.

Before sending editing requests, the parent application and the iframe can perform an initial handshake using `postMessage` to confirm that both contexts are ready.

### Initial Handshake (postMessage)

In this example, no origin restriction is applied and messages are sent with `"*"` as `targetOrigin`.

```javascript

// Iframe -> Parent container
window.parent.postMessage(
  {
    id:        null,
    action:   'app:ready',
    response: {
      result: true,
      data: {
        layers: [ ... ] // Array of objects contains { id: Layer Id, name: Layer Name }
      }
    },
  }
  "*"
);

```

> **Warning:** using `"*"` accepts/sends messages regardless of origin. Use this only in controlled environments. In production, it is recommended to restrict origins explicitly.

---

## Message Format

### Application → Iframe (Request)

```jsonc
{
  "id": "...",              // unique string identifying the request
  "action": "editing:json",
  "data": {
    "qgs_layer_id": "...",  // QGIS layer ID
    "method": "...",         // method to execute: "add" | "delete" | "update" | "draw"
    "geojson": {}            // GeoJSON object of the target feature
  }
}
```

| Field | Description |
| --- | --- |
| `id` | A unique string identifying the request |
| `action` | Always `"editing:json"` — identifies this as an editing message |
| `data.qgs_layer_id` | The QGIS layer ID |
| `data.method` | The method/action to execute (see below) |
| `data.geojson` | GeoJSON object of the feature to act upon |

**Available methods:**

| Method | Description |
| --- | --- |
| `add` | Add a new feature |
| `delete` | Delete an existing feature from the database |
| `update` | Update an existing feature |
| `draw` | Draw a new feature or modify the geometry of an existing one |

---

### Iframe → Application (Response)

```jsonc
{
  "action": "editing:json",
  "response": {
    "result": true,      // boolean: true on success, false on failure
    "data": {
      "method": "...",   // executed method name
      "geojson": {}      // GeoJSON of the affected feature
    }
  }
}
```

---

See [Iframe editing examples](iframe-editing-examples.md) for complete message examples.

<script type="application/json" data-i18n>
{
  "it": {
    "**Available methods:**": "**Metodi disponibili:**",
    "**Warning:** using `\"*\"` accepts/sends messages regardless of origin. Use this only in controlled environments. In production, it is recommended to restrict origins explicitly.": "**Attenzione:** l’uso di `\"*\"` consente di ricevere o inviare messaggi indipendentemente dall’origine. Usalo solo in ambienti controllati. In produzione, è consigliabile limitare esplicitamente le origini.",
    "A unique string identifying the request": "Stringa univoca che identifica la richiesta",
    "Add a new feature": "Aggiunge un nuovo elemento",
    "Always `\"editing:json\"` — identifies this as an editing message": "Sempre `\"editing:json\"` — identifica il messaggio come richiesta di modifica",
    "Application → Iframe (Request)": "Applicazione → Iframe (richiesta)",
    "Before sending editing requests, the parent application and the iframe can perform an initial handshake using `postMessage` to confirm that both contexts are ready.": "Prima di inviare richieste di modifica, l’applicazione contenitore e l’iframe possono eseguire un handshake iniziale tramite `postMessage` per verificare che entrambi i contesti siano pronti.",
    "Delete an existing feature from the database": "Elimina dal database un elemento esistente",
    "Description": "Descrizione",
    "Draw a new feature or modify the geometry of an existing one": "Disegna un nuovo elemento o modifica la geometria di un elemento esistente",
    "Editing via IFRAME": "Modifica tramite IFRAME",
    "Field": "Campo",
    "GeoJSON object of the feature to act upon": "Oggetto GeoJSON dell’elemento su cui operare",
    "Iframe → Application (Response)": "Iframe → Applicazione (risposta)",
    "In this example, no origin restriction is applied and messages are sent with `\"*\"` as `targetOrigin`.": "In questo esempio non viene applicata alcuna restrizione sull’origine e i messaggi vengono inviati con `\"*\"` come `targetOrigin`.",
    "In this integration scenario, the parent application and the embedded G3W-SUITE client communicate through the browser's `postMessage` API, exchanging structured JSON messages. This channel allows the parent application to programmatically drive the standard editing operations exposed by G3W-SUITE — **add**, **update**, **delete**, and **draw** features — on the layers published in the QGIS project, and to receive back the results (success, errors, or the GeoJSON of the affected features).": "In questo scenario di integrazione, l’applicazione contenitore e il client G3W-SUITE incorporato comunicano tramite l’API `postMessage` del browser e si scambiano messaggi JSON strutturati. Questo canale consente all’applicazione contenitore di richiamare programmaticamente le operazioni di modifica standard offerte da G3W-SUITE — **aggiungere**, **aggiornare**, **eliminare** e **disegnare** elementi — sui layer pubblicati nel progetto QGIS e di ricevere i risultati (esito, errori o GeoJSON degli elementi interessati).",
    "Initial Handshake (postMessage)": "Handshake iniziale (postMessage)",
    "Message Format": "Formato dei messaggi",
    "Method": "Metodo",
    "Overview": "Panoramica",
    "See [Iframe editing examples](iframe-editing-examples.md) for complete message examples.": "Consulta gli [esempi di modifica via iframe](iframe-editing-examples.md) per i messaggi completi.",
    "The QGIS layer ID": "ID del layer QGIS",
    "The following sections cover the message format, initial handshake and payloads for each supported editing operation.": "Le sezioni seguenti descrivono il formato dei messaggi, l'handshake iniziale e i payload delle operazioni di modifica supportate.",
    "The method/action to execute (see below)": "Metodo/azione da eseguire (vedi sotto)",
    "Update an existing feature": "Aggiorna un elemento esistente",
    "Use **online editing** when G3W-SUITE is embedded in an `<iframe>` hosted by an external parent application.": "Usa la **modifica online** quando G3W-SUITE è incorporato in un `<iframe>` ospitato da un'applicazione esterna.",
    "`action`": "`action`",
    "`add`": "`add`",
    "`data.geojson`": "`data.geojson`",
    "`data.method`": "`data.method`",
    "`data.qgs_layer_id`": "`data.qgs_layer_id`",
    "`delete`": "`delete`",
    "`draw`": "`draw`",
    "`id`": "`id`",
    "`update`": "`update`"
  }
}
</script>
