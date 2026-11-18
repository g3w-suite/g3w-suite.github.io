# Iframe editing examples

For the message format and handshake, see [Editing via iframe](g3wsuite_editing_iframe.md).

## Draw / Modify a Feature (Activate Map Drawing)

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

## Add a Feature to a Layer

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

## Update a Feature

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

## Delete a Feature

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
    "**Error response:**": "**Risposta di errore:**",
    "**Note:** Pay attention to the `\"id\": \"_new_1784646052597\"` value — in particular the `_new_` prefix, which is required to generate a new ID when the feature IDs stored in the database are auto-incremented.": "**Nota:** presta attenzione al valore `\"id\": \"_new_1784646052597\"`, in particolare al prefisso `_new_`, necessario per generare un nuovo ID quando gli ID degli elementi nel database sono autoincrementali.",
    "**Request:**": "**Richiesta:**",
    "**Response example (Polygon):**": "**Esempio di risposta (poligono):**",
    "**Success response:**": "**Risposta positiva:**",
    "Activates the drawing tool on the map for a geometric layer.": "Attiva lo strumento di disegno sulla mappa per un layer geometrico.",
    "Add a Feature to a Layer": "Aggiungere un elemento a un layer",
    "Delete a Feature": "Eliminare un elemento",
    "Draw / Modify a Feature (Activate Map Drawing)": "Disegnare/modificare un elemento (attivare il disegno sulla mappa)",
    "Field": "Campo",
    "For the message format and handshake, see [Editing via iframe](g3wsuite_editing_iframe.md).": "Per il formato dei messaggi e il collegamento iniziale, consulta [Modifica tramite iframe](g3wsuite_editing_iframe.md).",
    "Iframe editing examples": "Esempi di modifica via iframe",
    "Once the feature has been drawn, the iframe sends a message to the parent application containing the GeoJSON of the feature — without attributes, which will be added later by the application — and then calls the `add` method to save it to the database.": "Dopo aver disegnato l’elemento, l’iframe invia all’applicazione contenitore un messaggio con il GeoJSON dell’elemento — senza attributi, che saranno aggiunti successivamente dall’applicazione — e poi richiama il metodo `add` per salvarlo nel database.",
    "Update a Feature": "Aggiornare un elemento",
    "`add`": "`add`"
  }
}
</script>
