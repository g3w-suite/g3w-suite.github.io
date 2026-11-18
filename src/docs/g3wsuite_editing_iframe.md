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
