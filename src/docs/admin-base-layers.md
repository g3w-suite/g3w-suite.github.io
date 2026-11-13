# Base layers and multilingual settings

[Back to Administration panel](g3wsuite_administration.md)

## Add custom Base layers

It is possible to add custom Base layers and make them available at the level of individual WebGis services.

![Screenshot: G3W-ADMIN Django Administration](/img/manual-english-g3wadmin-django-administration.png)

### Create new Base Layers starting from external services

In the **Django Administration** session, access the **Base Layers** sub-session and click on the **Add Base Layer** button.

![Screenshot: Django Base Layers](/img/manual-english-django-base-layers.png)

Assuming you want to add the following WMST service [http://qgistiles.webmapp.it](http://qgstiles.webmapp.it/) you fill in the form as follows:

 * **Name:** an internal identifier of the new Base Layer
 * **Title:** the descriptive, client-side visible name of the new Base Layer
 * **Icon:** a descriptive, client-side view of the new Base Layer
 * **Description:** an internal description of the new Base Layer
 * **Property:** the specifications of the new Base Layer; for example, for our case:

 {
 "crs": {
      "epsg":3857,
      "proj4":"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs",
      "geographic":False,
      "axisinverted":False
   },
 "url": "http://qgstiles.webmapp.it/tiles/{z}/{x}/{y}.png",
 "servertype": "TMS"
}

![Screenshot: G3W-ADMIN Django Administration Add](/img/manual-english-g3wadmin-django-administration-add.png)

The new Base Layer will then be available and can be activated at the level of individual Cartographic Groups.

### Create new Base Layers starting from your own layers

As a first step, you need to publish a new WebGis service based on a QGIS project containing a **single layer**, the layer that will need to be converted into a Base Layer.

As an example, remember that you can publish a set of orthophotos as a single VRT file produced in QGIS.

After publishing, you will need to activate the cache on that specific layer and and activate the **Save as Base layer** option in the form option.

![Screenshot: G3W-SUITE Administration Base Layer Cache](/img/manual-english-g3wsuite-administration-base-layer-cache.png)

Automatically a new **Base Layer** will be inserted into those present in the Base Layer subsession of the **Django Administration** session and it will be available and can be activated at the level of individual Cartographic Groups.

Remember to associate a thumbnail with the Base layer, as described in the previous paragraph, to make it available at the map client level.

## Multilinguage
The suite is translated in this languages:
 * Bulgarian
 * Deutsch
 * English
 * Spanish
 * Finnish
 * French
 * Italian
 * Portuguese
 * Romanian
 * Swedish

Other languages ​​can be added.

### Map client
On the top bar you can choose, through a drop-down menu, the language of the entire client interface.

![Screenshot: Language Client](/img/manual-english-language-client.png)

### Administration
Also for the Administration panel, through the same drop-down menu, it is possible to define the language of the entire interface of the console.

![Screenshot: Language Admin](/img/manual-english-language-admin.png)

### Front end
Fixed front end content is already available in the four basic languages.

Variable contents, i.e. user-definable contents, are instead translated:
 * Sessions **`Home`**, **`About`**, **`Maps`** and **`Login`**: content that can be defined and translated in the [**Edit General Data**](admin-interface.md) session of the Control Panel Administration
 * Sessions **`Cartographic MacroGroups`**, **`Cartographic Groups`** and **`WebGis Services`**: contents definable and translatable in the form defining these elements, limited to the items:

   * **Public Title**
   * **Description**

To carry out the translation of these contents, proceed as follows:
 * access to the form for creating the element (**MacroGroup, Group or WebGis Service**)
 * define one of the available languages from the drop-down menu at the top right
 * fill in the form in the chosen language
 * save the settings

![Screenshot: Language Form](/img/manual-english-language-form.png)

Then:
 * access the form again in modification
 * change the language
 * fill in the translatable content in the new language
 * save the new settings
 
 **Titles and Descriptions of the various elements in the defined languages ​​will be available on the front.**




<script type="application/json" data-i18n>
  {
  "it": {
    "**Description**": "**Descrizione**",
    "**Description:** an internal description of the new Base Layer": "**Description:** una descrizione interna del nuovo Base Layer",
    "**Icon:** a descriptive, client-side view of the new Base Layer": "**Icon:** un'immagine descrittiva del nuovo Base Layer visualizzata nel client",
    "**Name:** an internal identifier of the new Base Layer": "**Name:** un identificatore interno del nuovo Base Layer",
    "**Property:** the specifications of the new Base Layer; for example, for our case:": "**Property:** le specifiche del nuovo Base Layer; nel nostro caso, ad esempio:",
    "**Public Title**": "**Public Title**",
    "**Title:** the descriptive, client-side visible name of the new Base Layer": "**Title:** il nome descrittivo del nuovo Base Layer visibile nel client",
    "**Titles and Descriptions of the various elements in the defined languages ​​will be available on the front.**": "**I titoli e le descrizioni dei vari elementi nelle lingue definite saranno disponibili nel front end.**",
    "Add custom Base layers": "Aggiungere livelli di base personalizzati",
    "Administration": "Amministrazione",
    "After publishing, you will need to activate the cache on that specific layer and and activate the **Save as Base layer** option in the form option.": "Dopo la pubblicazione, è necessario attivare la cache su quel layer e selezionare l'opzione **Save as Base layer** nel modulo.",
    "Also for the Administration panel, through the same drop-down menu, it is possible to define the language of the entire interface of the console.": "Anche per il pannello di amministrazione è possibile impostare la lingua dell'intera interfaccia della console tramite lo stesso menu a discesa.",
    "As a first step, you need to publish a new WebGis service based on a QGIS project containing a **single layer**, the layer that will need to be converted into a Base Layer.": "Per prima cosa, è necessario pubblicare un nuovo servizio WebGis basato su un progetto QGIS contenente un **solo layer**, quello da convertire in un Base Layer.",
    "As an example, remember that you can publish a set of orthophotos as a single VRT file produced in QGIS.": "Ad esempio, è possibile pubblicare un insieme di ortofoto come singolo file VRT creato con QGIS.",
    "Assuming you want to add the following WMST service [http://qgistiles.webmapp.it](http://qgstiles.webmapp.it/) you fill in the form as follows:": "Supponendo di voler aggiungere il seguente servizio WMST [http://qgistiles.webmapp.it](http://qgstiles.webmapp.it/), compilare il modulo come segue:",
    "Automatically a new **Base Layer** will be inserted into those present in the Base Layer subsession of the **Django Administration** session and it will be available and can be activated at the level of individual Cartographic Groups.": "Un nuovo **Base Layer** verrà inserito automaticamente tra quelli presenti nella sottosezione Base Layers di **Django Administration**; sarà quindi disponibile per l'attivazione nei singoli Gruppi cartografici.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Base layers and multilingual settings": "Livelli di base e impostazioni multilingue",
    "Bulgarian": "Bulgaro",
    "Create new Base Layers starting from external services": "Creare nuovi Base Layer a partire da servizi esterni",
    "Create new Base Layers starting from your own layers": "Creare nuovi Base Layer a partire dai propri layer",
    "Deutsch": "Tedesco",
    "English": "Inglese",
    "Finnish": "Finlandese",
    "Fixed front end content is already available in the four basic languages.": "I contenuti fissi del front end sono già disponibili nelle quattro lingue di base.",
    "French": "Francese",
    "Front end": "Front end",
    "In the **Django Administration** session, access the **Base Layers** sub-session and click on the **Add Base Layer** button.": "Nella sezione **Django Administration**, accedere alla sottosezione **Base Layers** e fare clic sul pulsante **Add Base Layer**.",
    "It is possible to add custom Base layers and make them available at the level of individual WebGis services.": "È possibile aggiungere livelli di base personalizzati e renderli disponibili per i singoli servizi WebGis.",
    "Italian": "Italiano",
    "Map client": "Client cartografico",
    "Multilinguage": "Multilinguismo",
    "On the top bar you can choose, through a drop-down menu, the language of the entire client interface.": "Dalla barra superiore è possibile scegliere, tramite un menu a discesa, la lingua dell'intera interfaccia del client.",
    "Other languages ​​can be added.": "È possibile aggiungere altre lingue.",
    "Portuguese": "Portoghese",
    "Remember to associate a thumbnail with the Base layer, as described in the previous paragraph, to make it available at the map client level.": "Ricordarsi di associare una miniatura al Base Layer, come descritto nel paragrafo precedente, per renderlo disponibile nel client cartografico.",
    "Romanian": "Rumeno",
    "Screenshot: Django Base Layers": "Schermata: livelli di base di Django",
    "Screenshot: G3W-ADMIN Django Administration": "Schermata: amministrazione Django di G3W-ADMIN",
    "Screenshot: G3W-ADMIN Django Administration Add": "Schermata: aggiunta nell'amministrazione Django di G3W-ADMIN",
    "Screenshot: G3W-SUITE Administration Base Layer Cache": "Schermata: cache del livello di base nell'amministrazione di G3W-SUITE",
    "Screenshot: Language Admin": "Schermata: lingua del pannello di amministrazione",
    "Screenshot: Language Client": "Schermata: lingua del client",
    "Screenshot: Language Form": "Schermata: modulo delle lingue",
    "Sessions **`Cartographic MacroGroups`**, **`Cartographic Groups`** and **`WebGis Services`**: contents definable and translatable in the form defining these elements, limited to the items:": "Le sezioni **`Cartographic MacroGroups`**, **`Cartographic Groups`** e **`WebGis Services`**: contenuti definibili e traducibili nel modulo di definizione di questi elementi, limitatamente ai campi:",
    "Sessions **`Home`**, **`About`**, **`Maps`** and **`Login`**: content that can be defined and translated in the [**Edit General Data**](admin-interface.md) session of the Control Panel Administration": "Le sezioni **`Home`**, **`About`**, **`Maps`** e **`Login`**: contenuti definibili e traducibili nella sezione [**Edit General Data**](admin-interface.md) del pannello di amministrazione",
    "Spanish": "Spagnolo",
    "Swedish": "Svedese",
    "The new Base Layer will then be available and can be activated at the level of individual Cartographic Groups.": "Il nuovo Base Layer sarà quindi disponibile e potrà essere attivato nei singoli Gruppi cartografici.",
    "The suite is translated in this languages:": "La suite è tradotta nelle seguenti lingue:",
    "Then:": "Quindi:",
    "To carry out the translation of these contents, proceed as follows:": "Per tradurre questi contenuti, procedere come segue:",
    "Variable contents, i.e. user-definable contents, are instead translated:": "I contenuti variabili, ovvero quelli definibili dagli utenti, vengono invece tradotti:",
    "access the form again in modification": "accedere nuovamente al modulo in modalità di modifica",
    "access to the form for creating the element (**MacroGroup, Group or WebGis Service**)": "accedere al modulo per creare l'elemento (**MacroGroup, Group o WebGis Service**)",
    "change the language": "cambiare la lingua",
    "define one of the available languages from the drop-down menu at the top right": "selezionare una delle lingue disponibili dal menu a discesa in alto a destra",
    "fill in the form in the chosen language": "compilare il modulo nella lingua scelta",
    "fill in the translatable content in the new language": "compilare i contenuti traducibili nella nuova lingua",
    "save the new settings": "salvare le nuove impostazioni",
    "save the settings": "salvare le impostazioni"
  }
}
</script>
