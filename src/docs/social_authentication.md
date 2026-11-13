# Social Account Authentication in the G3W-Suite with django-allauth

Since version 3.9 of the G3W-Suite authentication using social accounts is supported 
using the [django-allauth](https://django-allauth.readthedocs.io/en/latest/) library.

The Suite comes with all necessary django apps preinstalled and a few providers 
configured, but can be extended as per user needs with any provider supported 
by ```django-allauth```.

Once social applications have been added to the django settings, the login button 
for each added application will appear on the suite's login screen.

To be able to configure social account authentication, the user needs to have the 
priviledges of both superuser and staff (admin level 1). Make sure that the
user's ACL look like this:

![Screenshot: Socialauth Admin Settings](/img/manual-english-socialauth-admin-settings.png)

Let's have a look at the workflow to properly configure the social authentication in 
the suite.

## Add necessary providers

The first step is to make sure the needed provider modules are enabled. By default
the suite enbles the google and microsoft providers as they have been added 
together with the allauth modules in the base settings:

```python
THIRD_PARTY_APPS = [
    ...
    ...

    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "allauth.socialaccount.providers.microsoft",
    "allauth.socialaccount.providers.google",
    "allauth.usersessions"
]
```

To add additional providers (Gitlab, Github, Twitter, Facebook, etc) to the game,
we can just add them in the ```local_settings.py``` under the ```G3WADMIN_LOCAL_MORE_APPS```
sectting. For example, to add facebook as a provider, just add:

```python
G3WADMIN_LOCAL_MORE_APPS = [
    ...
    ...

    "allauth.socialaccount.providers.facebook",
]
```

Adding providers alone will not change anything visible in the authentication workflow.
It will be necessay to also acc social applications to the django settings.

## Set the site id

The base settings of the suite have a site id configured as 1.

```python
SITE_ID = 1
```

While this can be fine for some cases, usually one needs to differentiate at least 
two sites in development and production environments. 

![Screenshot: Socialauth Site Settings](/img/manual-english-socialauth-site-settings.png)

In these cases it is necessary to override the site setting with the currently used
site id.

## Add the social apps

Social apps are the settings that in fact enable providers to be used for authentication.

It is beyond the scope of this manual to explain how to enable social applications
on the provider's cloud consoles. The allauth documentation has a small entry for each 
provider. [The example at this link](https://docs.allauth.org/en/latest/socialaccount/providers/google.html), which describes how to configure a social application
using the Google provider can help the reader to understand the following 
image.

![Screenshot: Socialauth Applications Settings](/img/manual-english-socialauth-applications-settings.png)

Once the social application is (properly configured and) saved, the login button
of the chosen provider will appear on the suite's login screen.

![Screenshot: Socialauth Login Screen](/img/manual-english-socialauth-login-screen.png)

## Social account corner cases

### Automatic user registration via social account login

Authorized users (by the provider) that login for the first time to the suite,
transparently are registered to the system. For this to work, it is necessary to **assign them
to one of the user roles** available in the suite:

* Editor Level 1
* Editor Level 2
* Viewer Level 1
* Viewer Level 2

If no role is set, the _Viewer Level 1_ is automatically set to the new registered user.
It is possible to tweak this setting by overriding the setting:

```python
SOCIALACCOUNT_USER_ROLE = 'Editor Level 1'
```

The admin roles have to be manually set, if necessary. Any typo in this setting or 
admin role choice will fallback to the default viewer role.

**Note that the username in this case will be retrieved from the provider.**


Usually it is also necessary to **assign the user to an existing group**. This can be done
by overriding the setting:

```python
SOCIALACCOUNT_USER_GROUP = '<existing_user_group>'
```

Make sure that the user **group** you are trying to assing is compatibile with the user **role** assigned to the user, 
else the groupd setting will be ignored, leaving the user without an assigned group and the need for a manual intervention.


### Linking social authentication to existing suite users

It is also possible to connect social accounts to existing users. The match
in this case occurrs through the email address. The username of the original 
suite user is kept and the provider supplied username is ignored in this case.


# User Session Tracking

The social account integration also brings the possibility to enable 
user sessions tracking.

To enable it the following setting can be overridden in the local_settings.py:

```python
USERSESSIONS_TRACK_ACTIVITY = True
```

Once enabled the django admin will provide the following view:

![Screenshot: Socialauth User Sessions](/img/manual-english-socialauth-user-sessions.png)

<script type="application/json" data-i18n>
  {
    "it": {
      "**Note that the username in this case will be retrieved from the provider.**": "**In questo caso il nome utente verrà recuperato dal provider.**",
      "Add necessary providers": "Aggiungere i provider necessari",
      "Add the social apps": "Aggiungere le applicazioni social",
      "Adding providers alone will not change anything visible in the authentication workflow.": "La sola aggiunta dei provider non comporta alcuna modifica visibile nel flusso di autenticazione.",
      "admin role choice will fallback to the default viewer role.": "nella scelta del ruolo di amministratore faranno ricadere sul ruolo Viewer predefinito.",
      "Authorized users (by the provider) that login for the first time to the suite,": "Gli utenti autorizzati dal provider che accedono per la prima volta alla suite",
      "Automatic user registration via social account login": "Registrazione automatica degli utenti tramite accesso con account social",
      "by ```django-allauth```.": "da ```django-allauth```.",
      "by overriding the setting:": "sovrascrivendo l'impostazione:",
      "configured, but can be extended as per user needs with any provider supported": "ma può essere estesa in base alle esigenze con qualsiasi provider supportato",
      "Editor Level 1": "Editor di livello 1",
      "Editor Level 2": "Editor di livello 2",
      "else the groupd setting will be ignored, leaving the user without an assigned group and the need for a manual intervention.": "altrimenti l'impostazione del gruppo verrà ignorata, l'utente resterà senza gruppo e sarà necessario intervenire manualmente.",
      "for each added application will appear on the suite's login screen.": "per ciascuna applicazione aggiunta apparirà nella schermata di accesso della suite.",
      "If no role is set, the _Viewer Level 1_ is automatically set to the new registered user.": "Se non viene specificato un ruolo, al nuovo utente registrato viene assegnato automaticamente _Viewer Level 1_.",
      "image.": "immagine.",
      "In these cases it is necessary to override the site setting with the currently used": "In questi casi è necessario sovrascrivere l'impostazione del sito con l'ID attualmente utilizzato",
      "in this case occurrs through the email address. The username of the original": "in questo caso avviene tramite l'indirizzo e-mail. Il nome utente dell'utente originale",
      "It is also possible to connect social accounts to existing users. The match": "È anche possibile collegare account social a utenti esistenti. La corrispondenza",
      "It is beyond the scope of this manual to explain how to enable social applications": "Esula dagli obiettivi di questo manuale spiegare come abilitare le applicazioni social",
      "It is possible to tweak this setting by overriding the setting:": "È possibile modificare questa impostazione sovrascrivendo il valore:",
      "It will be necessay to also acc social applications to the django settings.": "È necessario aggiungere anche le applicazioni social alle impostazioni di Django.",
      "Let's have a look at the workflow to properly configure the social authentication in": "Vediamo il flusso di lavoro per configurare correttamente l'autenticazione social",
      "Linking social authentication to existing suite users": "Collegare l'autenticazione social agli utenti esistenti della suite",
      "Make sure that the user **group** you are trying to assing is compatibile with the user **role** assigned to the user,": "Assicurarsi che il **gruppo** a cui si intende assegnare l'utente sia compatibile con il **ruolo** assegnato all'utente,",
      "of the chosen provider will appear on the suite's login screen.": "del provider scelto apparirà nella schermata di accesso della suite.",
      "on the provider's cloud consoles. The allauth documentation has a small entry for each": "nelle console cloud dei provider. La documentazione di allauth contiene una breve sezione per ciascun",
      "Once enabled the django admin will provide the following view:": "Una volta abilitata, l'interfaccia di amministrazione di Django mostrerà la seguente schermata:",
      "Once social applications have been added to the django settings, the login button": "Dopo aver aggiunto le applicazioni social alle impostazioni di Django, il pulsante di accesso",
      "Once the social application is (properly configured and) saved, the login button": "Dopo aver salvato l'applicazione social (configurata correttamente), il pulsante di accesso",
      "priviledges of both superuser and staff (admin level 1). Make sure that the": "privilegi di superuser e staff (amministratore di livello 1). Verificare che",
      "provider. [The example at this link](https://docs.allauth.org/en/latest/socialaccount/providers/google.html), which describes how to configure a social application": "provider. [L'esempio a questo link](https://docs.allauth.org/en/latest/socialaccount/providers/google.html), che descrive come configurare un'applicazione social",
      "Screenshot: Socialauth Admin Settings": "Schermata: impostazioni di amministrazione Socialauth",
      "Screenshot: Socialauth Applications Settings": "Schermata: impostazioni delle applicazioni Socialauth",
      "Screenshot: Socialauth Login Screen": "Schermata: accesso Socialauth",
      "Screenshot: Socialauth Site Settings": "Schermata: impostazioni del sito Socialauth",
      "Screenshot: Socialauth User Sessions": "Schermata: sessioni utente Socialauth",
      "sectting. For example, to add facebook as a provider, just add:": "delle impostazioni. Ad esempio, per aggiungere Facebook come provider, basta inserire:",
      "Set the site id": "Impostare l'ID del sito",
      "Since version 3.9 of the G3W-Suite authentication using social accounts is supported": "Dalla versione 3.9, G3W-SUITE supporta l'autenticazione tramite account social",
      "site id.": "per il sito.",
      "Social Account Authentication in the G3W-Suite with django-allauth": "Autenticazione tramite account social in G3W-SUITE con django-allauth",
      "Social account corner cases": "Casi particolari degli account social",
      "Social apps are the settings that in fact enable providers to be used for authentication.": "Le app social sono le impostazioni che abilitano effettivamente i provider per l'autenticazione.",
      "suite user is kept and the provider supplied username is ignored in this case.": "della suite viene mantenuto e il nome utente fornito dal provider viene ignorato.",
      "The admin roles have to be manually set, if necessary. Any typo in this setting or": "Se necessario, i ruoli di amministrazione devono essere impostati manualmente. Eventuali errori di battitura in questa impostazione o",
      "The base settings of the suite have a site id configured as 1.": "Le impostazioni di base della suite prevedono l'ID del sito impostato su 1.",
      "The first step is to make sure the needed provider modules are enabled. By default": "Il primo passaggio consiste nel verificare che i moduli dei provider necessari siano abilitati. Per impostazione predefinita",
      "The social account integration also brings the possibility to enable": "L'integrazione degli account social consente anche di abilitare",
      "The Suite comes with all necessary django apps preinstalled and a few providers": "La suite include già tutte le app Django necessarie e alcuni provider preconfigurati,",
      "the suite enbles the google and microsoft providers as they have been added": "la suite abilita i provider Google e Microsoft, aggiunti",
      "the suite.": "della suite.",
      "To add additional providers (Gitlab, Github, Twitter, Facebook, etc) to the game,": "Per aggiungere altri provider (GitLab, GitHub, Twitter, Facebook ecc.),",
      "To be able to configure social account authentication, the user needs to have the": "Per configurare l'autenticazione tramite account social, l'utente deve disporre dei",
      "To enable it the following setting can be overridden in the local_settings.py:": "Per abilitarlo, è possibile sovrascrivere la seguente impostazione in local_settings.py:",
      "to one of the user roles** available in the suite:": "uno dei ruoli utente** disponibili nella suite:",
      "together with the allauth modules in the base settings:": "insieme ai moduli allauth nelle impostazioni di base:",
      "transparently are registered to the system. For this to work, it is necessary to **assign them": "vengono registrati automaticamente nel sistema. Perché ciò avvenga, è necessario **assegnare loro",
      "two sites in development and production environments.": "due siti negli ambienti di sviluppo e produzione.",
      "User Session Tracking": "Tracciamento delle sessioni utente",
      "user sessions tracking.": "il tracciamento delle sessioni utente.",
      "user's ACL look like this:": "l'ACL dell'utente sia simile alla seguente:",
      "using the [django-allauth](https://django-allauth.readthedocs.io/en/latest/) library.": "con la libreria [django-allauth](https://django-allauth.readthedocs.io/en/latest/).",
      "using the Google provider can help the reader to understand the following": "con il provider Google può aiutare a comprendere la seguente",
      "Usually it is also necessary to **assign the user to an existing group**. This can be done": "Di solito è anche necessario **assegnare l'utente a un gruppo esistente**. È possibile farlo",
      "Viewer Level 1": "Viewer di livello 1",
      "Viewer Level 2": "Viewer di livello 2",
      "we can just add them in the ```local_settings.py``` under the ```G3WADMIN_LOCAL_MORE_APPS```": "è sufficiente aggiungerli in ```local_settings.py``` nella sezione ```G3WADMIN_LOCAL_MORE_APPS```",
      "While this can be fine for some cases, usually one needs to differentiate at least": "Sebbene possa essere sufficiente in alcuni casi, di solito è necessario distinguere almeno"
    }
  }
</script>
