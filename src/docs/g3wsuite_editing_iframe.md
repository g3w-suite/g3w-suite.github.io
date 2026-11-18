# Editing via IFRAME

## Overview

Use **online editing** when G3W-SUITE is embedded in an `<iframe>` hosted by an external parent application.

In this integration scenario, the parent application and the embedded G3W-SUITE client communicate through the browser's `postMessage` API, exchanging structured JSON messages. This channel allows the parent application to programmatically drive the standard editing operations exposed by G3W-SUITE — **add**, **update**, **delete**, and **draw** features — on the layers published in the QGIS project, and to receive back the results (success, errors, or the GeoJSON of the affected features).

The following sections cover the message format, initial handshake and payloads for each supported editing operation.

Before sending editing requests, wait for the iframe to send an `app:ready` message. It includes the project layers, and the parent application can then send editing requests using `postMessage`.

### Initial Handshake (postMessage)

This example waits for the iframe's ready message, then starts the drawing tool. It does not validate the message origin and uses `"*"` as `targetOrigin`.

```javascript
const iframe = document.querySelector('iframe');

window.addEventListener('message', (event) => {
  if (event.data?.action !== 'app:ready') return;

  const layers = event.data.response?.data?.layers ?? [];
  console.log(layers);

  iframe.contentWindow.postMessage({
    id: 'draw-request-1',
    action: 'editing:json',
    data: {
      qgs_layer_id: 'QGIS_LAYER_ID',
      method: 'draw'
    }
  }, '*');
});
```

> **Warning:** using `"*"` accepts/sends messages regardless of origin. Use this only in controlled environments. In production, validate the sender's origin and restrict `targetOrigin` explicitly.

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
| `data.geojson` | GeoJSON object of the feature to act upon; required for `add`, `update` and `delete`, optional when starting a new `draw` |

**Available methods:**

| Method | Description |
| --- | --- |
| `add` | Add a new feature |
| `delete` | Delete an existing feature from the database |
| `update` | Update an existing feature |
| `draw` | Draw a new feature or modify the geometry of an existing one |
| `save` | Stop the active drawing/modification interaction and return its current GeoJSON; it does not commit the feature |

---

### Iframe → Application (Response)

```jsonc
{
  "id": "...",
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

The response `id` matches the request. When drawing or modifying finishes, the iframe also sends a separate `editing:json` message containing the resulting GeoJSON; that event does not include a request `id`.

---

See [Message examples](#message-examples) for complete requests and responses.

## Message examples

### Draw / Modify a Feature (Activate Map Drawing)

Activates the drawing tool on the map for a geometric layer.

**Request:**

```jsonc
{
  "id": "1784642571309",
  "action": "editing:json",
  "data": {
    "qgs_layer_id": "buildings_2f43dc1d_6725_42d2_a09b_dd446220104a",
    "method": "draw"
  }
}
```

When modifying an existing feature, include its GeoJSON (with its feature ID) in the request. Omit `geojson` when drawing a new feature. Once drawing finishes, the iframe sends the parent application the feature's GeoJSON — without attributes, which the application can add before calling `add` to save it to the database.

**Response example (Polygon):**

```json
{
  "action": "editing:json",
  "response": {
    "result": true,
    "data": {
      "method": "draw",
      "geojson": {
        "type": "Feature",
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [1252200.7608101263, 5433648.920573661],
                [1252036.0663704963, 5433472.356264507],
                [1252331.329374878,  5433291.340754284],
                [1252460.4142059393, 5433509.449606767],
                [1252200.7608101263, 5433648.920573661]
              ]
            ]
          ]
        },
        "properties": null,
        "id": "_new_1784646052597"
      }
    }
  }
}
```

> **Note:** Pay attention to the `"id": "_new_1784646052597"` value — in particular the `_new_` prefix, which is required to generate a new ID when the feature IDs stored in the database are auto-incremented.

---

### Add a Feature to a Layer

**Request:**

```json
{
  "id": "1784642571309",
  "action": "editing:json",
  "data": {
    "qgs_layer_id": "buildings_2f43dc1d_6725_42d2_a09b_dd446220104a",
    "method": "add",
    "geojson": {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [1252200.7608101263, 5433648.920573661],
              [1252036.0663704963, 5433472.356264507],
              [1252331.329374878,  5433291.340754284],
              [1252460.4142059393, 5433509.449606767],
              [1252200.7608101263, 5433648.920573661]
            ]
          ]
        ]
      },
      "properties": null,
      "id": "_new_1784646052598"
    }
  }
}
```

**Success response:**

```jsonc
{
  "id": "1784647113405",
  "action": "editing:json",
  "response": {
    "result": true,
    "data": {
      "method": "add",
      "fid": "70",
      "geojson": {}  // GeoJSON of the newly created and saved feature
    }
  }
}
```

**Error response:**

```json
{
  "id": "1784647182919",
  "action": "editing:json",
  "response": {
    "result": false,
    "data": {
      "buildings": {
        "add": {
          "id": "_new_1784647180034",
          "fields": {
            "year": ["Field value must be NOT NULL"],
            "high":  ["Field value must be NOT NULL"],
            "type":  ["Field value must be NOT NULL"]
          }
        }
      }
    }
  }
}
```

---

### Update a Feature

**Request:**

```jsonc
{
  "id": "1784642571309",
  "action": "editing:json",
  "data": {
    "qgs_layer_id": "buildings_2f43dc1d_6725_42d2_a09b_dd446220104a",
    "method": "update",
    "geojson": {}  // GeoJSON of the feature to update (attributes and/or geometry)
  }
}
```

---

### Delete a Feature

**Request:**

```jsonc
{
  "id": "1784642571309",
  "action": "editing:json",
  "data": {
    "qgs_layer_id": "buildings_2f43dc1d_6725_42d2_a09b_dd446220104a",
    "method": "delete",
    "geojson": {
      "id": "..."  // ID of the feature to delete
    }
  }
}
```

<script type="application/json" data-i18n>
{
  "it": {
    "**Available methods:**": "**Metodi disponibili:**",
    "**Error response:**": "**Risposta di errore:**",
    "**Note:** Pay attention to the `\"id\": \"_new_1784646052597\"` value — in particular the `_new_` prefix, which is required to generate a new ID when the feature IDs stored in the database are auto-incremented.": "**Nota:** presta attenzione al valore `\"id\": \"_new_1784646052597\"`, in particolare al prefisso `_new_`, necessario per generare un nuovo ID quando gli ID degli elementi nel database sono autoincrementali.",
    "**Request:**": "**Richiesta:**",
    "**Response example (Polygon):**": "**Esempio di risposta (poligono):**",
    "**Success response:**": "**Risposta positiva:**",
    "**Warning:** using `\"*\"` accepts/sends messages regardless of origin. Use this only in controlled environments. In production, validate the sender's origin and restrict `targetOrigin` explicitly.": "**Attenzione:** l’uso di `\"*\"` consente di ricevere o inviare messaggi indipendentemente dall’origine. Usalo solo in ambienti controllati. In produzione, convalida l’origine del mittente e limita esplicitamente `targetOrigin`.",
    "A unique string identifying the request": "Stringa univoca che identifica la richiesta",
    "Activates the drawing tool on the map for a geometric layer.": "Attiva lo strumento di disegno sulla mappa per un layer geometrico.",
    "Add a Feature to a Layer": "Aggiungere un elemento a un layer",
    "Add a new feature": "Aggiunge un nuovo elemento",
    "Always `\"editing:json\"` — identifies this as an editing message": "Sempre `\"editing:json\"` — identifica il messaggio come richiesta di modifica",
    "Application → Iframe (Request)": "Applicazione → Iframe (richiesta)",
    "Before sending editing requests, wait for the iframe to send an `app:ready` message. It includes the project layers, and the parent application can then send editing requests using `postMessage`.": "Prima di inviare richieste di modifica, attendi che l’iframe invii un messaggio `app:ready`, che include i layer del progetto. L’applicazione contenitore può quindi inviare richieste di modifica tramite `postMessage`.",
    "Delete a Feature": "Eliminare un elemento",
    "Delete an existing feature from the database": "Elimina dal database un elemento esistente",
    "Description": "Descrizione",
    "Draw / Modify a Feature (Activate Map Drawing)": "Disegnare/modificare un elemento (attivare il disegno sulla mappa)",
    "Draw a new feature or modify the geometry of an existing one": "Disegna un nuovo elemento o modifica la geometria di un elemento esistente",
    "Editing via IFRAME": "Modifica tramite IFRAME",
    "Field": "Campo",
    "GeoJSON object of the feature to act upon; required for `add`, `update` and `delete`, optional when starting a new `draw`": "Oggetto GeoJSON dell’elemento su cui operare; obbligatorio per `add`, `update` e `delete`, facoltativo quando si avvia un nuovo `draw`",
    "Iframe → Application (Response)": "Iframe → Applicazione (risposta)",
    "In this integration scenario, the parent application and the embedded G3W-SUITE client communicate through the browser's `postMessage` API, exchanging structured JSON messages. This channel allows the parent application to programmatically drive the standard editing operations exposed by G3W-SUITE — **add**, **update**, **delete**, and **draw** features — on the layers published in the QGIS project, and to receive back the results (success, errors, or the GeoJSON of the affected features).": "In questo scenario di integrazione, l’applicazione contenitore e il client G3W-SUITE incorporato comunicano tramite l’API `postMessage` del browser e si scambiano messaggi JSON strutturati. Questo canale consente all’applicazione contenitore di richiamare programmaticamente le operazioni di modifica standard offerte da G3W-SUITE — **aggiungere**, **aggiornare**, **eliminare** e **disegnare** elementi — sui layer pubblicati nel progetto QGIS e di ricevere i risultati (esito, errori o GeoJSON degli elementi interessati).",
    "Initial Handshake (postMessage)": "Handshake iniziale (postMessage)",
    "Message Format": "Formato dei messaggi",
    "Message examples": "Esempi di messaggi",
    "Method": "Metodo",
    "Overview": "Panoramica",
    "See [Message examples](#message-examples) for complete requests and responses.": "Consulta gli [esempi di messaggi](#message-examples) per richieste e risposte complete.",
    "Stop the active drawing/modification interaction and return its current GeoJSON; it does not commit the feature": "Interrompe l’interazione di disegno o modifica attiva e restituisce il GeoJSON corrente; non salva l’elemento nel database",
    "The QGIS layer ID": "ID del layer QGIS",
    "The following sections cover the message format, initial handshake and payloads for each supported editing operation.": "Le sezioni seguenti descrivono il formato dei messaggi, l'handshake iniziale e i payload delle operazioni di modifica supportate.",
    "The method/action to execute (see below)": "Metodo/azione da eseguire (vedi sotto)",
    "The response `id` matches the request. When drawing or modifying finishes, the iframe also sends a separate `editing:json` message containing the resulting GeoJSON; that event does not include a request `id`.": "L’`id` della risposta corrisponde a quello della richiesta. Al termine del disegno o della modifica, l’iframe invia anche un messaggio `editing:json` separato con il GeoJSON risultante; questo evento non include l’`id` della richiesta.",
    "This example waits for the iframe's ready message, then starts the drawing tool. It does not validate the message origin and uses `\"*\"` as `targetOrigin`.": "Questo esempio attende il messaggio di disponibilità dell’iframe e poi avvia lo strumento di disegno. Non convalida l’origine del messaggio e usa `\"*\"` come `targetOrigin`.",
    "Update a Feature": "Aggiornare un elemento",
    "Update an existing feature": "Aggiorna un elemento esistente",
    "Use **online editing** when G3W-SUITE is embedded in an `<iframe>` hosted by an external parent application.": "Usa la **modifica online** quando G3W-SUITE è incorporato in un `<iframe>` ospitato da un'applicazione esterna.",
    "When modifying an existing feature, include its GeoJSON (with its feature ID) in the request. Omit `geojson` when drawing a new feature. Once drawing finishes, the iframe sends the parent application the feature's GeoJSON — without attributes, which the application can add before calling `add` to save it to the database.": "Per modificare un elemento esistente, includi nella richiesta il relativo GeoJSON con l’ID dell’elemento. Per disegnare un nuovo elemento, ometti `geojson`. Al termine del disegno, l’iframe invia all’applicazione contenitore il GeoJSON dell’elemento — senza attributi, che l’applicazione può aggiungere prima di richiamare `add` per salvarlo nel database.",
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
