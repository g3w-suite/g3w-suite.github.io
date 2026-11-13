# Editing via IFRAME

## Overview

This section describes how to perform **online editing** when G3W-SUITE is embedded inside an `<iframe>` hosted by an external (parent) web application.

In this integration scenario, the parent application and the embedded G3W-SUITE client communicate through the browser's `postMessage` API, exchanging structured JSON messages. This channel allows the parent application to programmatically drive the standard editing operations exposed by G3W-SUITE — **add**, **update**, **delete**, and **draw** features — on the layers published in the QGIS project, and to receive back the results (success, errors, or the GeoJSON of the affected features).

The documentation that follows defines the message format, the initial handshake between the two contexts, and the payloads used for each supported editing operation.

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

## Examples

### Draw / Modify a Feature (Activate Map Drawing)

Activates the drawing tool on the map for a geometric layer.

**Request:**

```jsonc
{
  "id": "1784642571309",
  "action": "editing:json",
  "data": {
    "qgs_layer_id": "buildings_2f43dc1d_6725_42d2_a09b_dd446220104a",
    "method": "draw",
    "geojson": {}  // optional: GeoJSON of the feature to modify; omit when drawing a new feature
  }
}
```

Once the feature has been drawn, the iframe sends a message to the parent application containing the GeoJSON of the feature — without attributes, which will be added later by the application — and then calls the `add` method to save it to the database.

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
    "**Warning:** using `\"*\"` accepts/sends messages regardless of origin. Use this only in controlled environments. In production, it is recommended to restrict origins explicitly.": "**Attenzione:** l’uso di `\"*\"` consente di ricevere o inviare messaggi indipendentemente dall’origine. Usalo solo in ambienti controllati. In produzione, è consigliabile limitare esplicitamente le origini.",
    "`action`": "`action`",
    "`add`": "`add`",
    "`data.geojson`": "`data.geojson`",
    "`data.method`": "`data.method`",
    "`data.qgs_layer_id`": "`data.qgs_layer_id`",
    "`delete`": "`delete`",
    "`draw`": "`draw`",
    "`id`": "`id`",
    "`update`": "`update`",
    "A unique string identifying the request": "Stringa univoca che identifica la richiesta",
    "Activates the drawing tool on the map for a geometric layer.": "Attiva lo strumento di disegno sulla mappa per un layer geometrico.",
    "Add a Feature to a Layer": "Aggiungere un elemento a un layer",
    "Add a new feature": "Aggiunge un nuovo elemento",
    "Always `\"editing:json\"` — identifies this as an editing message": "Sempre `\"editing:json\"` — identifica il messaggio come richiesta di modifica",
    "Application → Iframe (Request)": "Applicazione → Iframe (richiesta)",
    "Before sending editing requests, the parent application and the iframe can perform an initial handshake using `postMessage` to confirm that both contexts are ready.": "Prima di inviare richieste di modifica, l’applicazione contenitore e l’iframe possono eseguire un handshake iniziale tramite `postMessage` per verificare che entrambi i contesti siano pronti.",
    "Delete a Feature": "Eliminare un elemento",
    "Delete an existing feature from the database": "Elimina dal database un elemento esistente",
    "Description": "Descrizione",
    "Draw / Modify a Feature (Activate Map Drawing)": "Disegnare/modificare un elemento (attivare il disegno sulla mappa)",
    "Draw a new feature or modify the geometry of an existing one": "Disegna un nuovo elemento o modifica la geometria di un elemento esistente",
    "Editing via IFRAME": "Modifica tramite IFRAME",
    "Examples": "Esempi",
    "Field": "Campo",
    "GeoJSON object of the feature to act upon": "Oggetto GeoJSON dell’elemento su cui operare",
    "Iframe → Application (Response)": "Iframe → Applicazione (risposta)",
    "In this example, no origin restriction is applied and messages are sent with `\"*\"` as `targetOrigin`.": "In questo esempio non viene applicata alcuna restrizione sull’origine e i messaggi vengono inviati con `\"*\"` come `targetOrigin`.",
    "In this integration scenario, the parent application and the embedded G3W-SUITE client communicate through the browser's `postMessage` API, exchanging structured JSON messages. This channel allows the parent application to programmatically drive the standard editing operations exposed by G3W-SUITE — **add**, **update**, **delete**, and **draw** features — on the layers published in the QGIS project, and to receive back the results (success, errors, or the GeoJSON of the affected features).": "In questo scenario di integrazione, l’applicazione contenitore e il client G3W-SUITE incorporato comunicano tramite l’API `postMessage` del browser e si scambiano messaggi JSON strutturati. Questo canale consente all’applicazione contenitore di richiamare programmaticamente le operazioni di modifica standard offerte da G3W-SUITE — **aggiungere**, **aggiornare**, **eliminare** e **disegnare** elementi — sui layer pubblicati nel progetto QGIS e di ricevere i risultati (esito, errori o GeoJSON degli elementi interessati).",
    "Initial Handshake (postMessage)": "Handshake iniziale (postMessage)",
    "Message Format": "Formato dei messaggi",
    "Method": "Metodo",
    "Once the feature has been drawn, the iframe sends a message to the parent application containing the GeoJSON of the feature — without attributes, which will be added later by the application — and then calls the `add` method to save it to the database.": "Dopo aver disegnato l’elemento, l’iframe invia all’applicazione contenitore un messaggio con il GeoJSON dell’elemento — senza attributi, che saranno aggiunti successivamente dall’applicazione — e poi richiama il metodo `add` per salvarlo nel database.",
    "Overview": "Panoramica",
    "The documentation that follows defines the message format, the initial handshake between the two contexts, and the payloads used for each supported editing operation.": "La documentazione seguente definisce il formato dei messaggi, la procedura iniziale di handshake tra i due contesti e i payload usati per ogni operazione di modifica supportata.",
    "The method/action to execute (see below)": "Metodo/azione da eseguire (vedi sotto)",
    "The QGIS layer ID": "ID del layer QGIS",
    "This section describes how to perform **online editing** when G3W-SUITE is embedded inside an `<iframe>` hosted by an external (parent) web application.": "Questa sezione descrive come eseguire **modifiche online** quando G3W-SUITE è incorporato in un `<iframe>` ospitato da un’applicazione web esterna (contenitore).",
    "Update a Feature": "Aggiornare un elemento",
    "Update an existing feature": "Aggiorna un elemento esistente"
  }
}
</script>
