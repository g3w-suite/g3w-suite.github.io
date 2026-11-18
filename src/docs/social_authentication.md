# Social login

Since version 3.9, G3W-SUITE supports social authentication through [django-allauth](https://django-allauth.readthedocs.io/en/latest/).

The required Django apps and some providers are preconfigured. You can add other providers supported by ```django-allauth```.

After adding social applications to the Django settings, their login buttons appear on the suite's login screen.

Configuring social authentication requires both superuser and staff privileges (admin level 1). Check that the user's ACL matches this example:

![Screenshot: Socialauth Admin Settings](/img/manual-english-socialauth-admin-settings.avif)

## Add necessary providers

Enable the required provider modules. The default settings include Google and Microsoft alongside the allauth modules:

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

![Screenshot: Socialauth Site Settings](/img/manual-english-socialauth-site-settings.avif)

In these cases it is necessary to override the site setting with the currently used
site id.

## Add the social apps

Social apps are the settings that in fact enable providers to be used for authentication.

It is beyond the scope of this manual to explain how to enable social applications
on the provider's cloud consoles. The allauth documentation has a small entry for each 
provider. [The example at this link](https://docs.allauth.org/en/latest/socialaccount/providers/google.html), which describes how to configure a social application
using the Google provider can help the reader to understand the following 
image.

![Screenshot: Socialauth Applications Settings](/img/manual-english-socialauth-applications-settings.avif)

Once the social application is (properly configured and) saved, the login button
of the chosen provider will appear on the suite's login screen.

![Screenshot: Socialauth Login Screen](/img/manual-english-socialauth-login-screen.avif)

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

![Screenshot: Socialauth User Sessions](/img/manual-english-socialauth-user-sessions.avif)

<script type="application/json" data-i18n>
  {
    "it": {
      "**Note that the username in this case will be retrieved from the provider.**": "**In questo caso il nome utente verrà recuperato dal provider.**",
      "Add necessary providers": "Aggiungere i provider necessari",
      "Add the social apps": "Aggiungere le applicazioni social",
      "Adding providers alone will not change anything visible in the authentication workflow.": "La sola aggiunta dei provider non comporta alcuna modifica visibile nel flusso di autenticazione.",
      "After adding social applications to the Django settings, their login buttons appear on the suite's login screen.": "Dopo aver aggiunto le applicazioni social alle impostazioni Django, i relativi pulsanti appaiono nella schermata di accesso della suite.",
      "Authorized users (by the provider) that login for the first time to the suite,": "Gli utenti autorizzati dal provider che accedono per la prima volta alla suite",
      "Automatic user registration via social account login": "Registrazione automatica degli utenti tramite accesso con account social",
      "Configuring social authentication requires both superuser and staff privileges (admin level 1). Check that the user's ACL matches this example:": "Per configurare l'autenticazione social servono i privilegi di superuser e staff (amministratore di livello 1). Verifica che l'ACL dell'utente corrisponda a questo esempio:",
      "Editor Level 1": "Editor di livello 1",
      "Editor Level 2": "Editor di livello 2",
      "Enable the required provider modules. The default settings include Google and Microsoft alongside the allauth modules:": "Abilita i moduli dei provider necessari. Le impostazioni predefinite includono Google e Microsoft insieme ai moduli allauth:",
      "If no role is set, the _Viewer Level 1_ is automatically set to the new registered user.": "Se non viene specificato un ruolo, al nuovo utente registrato viene assegnato automaticamente _Viewer Level 1_.",
      "In these cases it is necessary to override the site setting with the currently used": "In questi casi è necessario sovrascrivere l'impostazione del sito con l'ID attualmente utilizzato",
      "It is also possible to connect social accounts to existing users. The match": "È anche possibile collegare account social a utenti esistenti. La corrispondenza",
      "It is beyond the scope of this manual to explain how to enable social applications": "Esula dagli obiettivi di questo manuale spiegare come abilitare le applicazioni social",
      "It is possible to tweak this setting by overriding the setting:": "È possibile modificare questa impostazione sovrascrivendo il valore:",
      "It will be necessay to also acc social applications to the django settings.": "È necessario aggiungere anche le applicazioni social alle impostazioni di Django.",
      "Linking social authentication to existing suite users": "Collegare l'autenticazione social agli utenti esistenti della suite",
      "Make sure that the user **group** you are trying to assing is compatibile with the user **role** assigned to the user,": "Assicurarsi che il **gruppo** a cui si intende assegnare l'utente sia compatibile con il **ruolo** assegnato all'utente,",
      "Once enabled the django admin will provide the following view:": "Una volta abilitata, l'interfaccia di amministrazione di Django mostrerà la seguente schermata:",
      "Once the social application is (properly configured and) saved, the login button": "Dopo aver salvato l'applicazione social (configurata correttamente), il pulsante di accesso",
      "Screenshot: Socialauth Admin Settings": "Schermata: impostazioni di amministrazione Socialauth",
      "Screenshot: Socialauth Applications Settings": "Schermata: impostazioni delle applicazioni Socialauth",
      "Screenshot: Socialauth Login Screen": "Schermata: accesso Socialauth",
      "Screenshot: Socialauth Site Settings": "Schermata: impostazioni del sito Socialauth",
      "Screenshot: Socialauth User Sessions": "Schermata: sessioni utente Socialauth",
      "Set the site id": "Impostare l'ID del sito",
      "Since version 3.9, G3W-SUITE supports social authentication through [django-allauth](https://django-allauth.readthedocs.io/en/latest/).": "Dalla versione 3.9, G3W-SUITE supporta l'autenticazione social tramite [django-allauth](https://django-allauth.readthedocs.io/en/latest/).",
      "Social account corner cases": "Casi particolari degli account social",
      "Social apps are the settings that in fact enable providers to be used for authentication.": "Le app social sono le impostazioni che abilitano effettivamente i provider per l'autenticazione.",
      "Social login": "Accesso con account social",
      "The admin roles have to be manually set, if necessary. Any typo in this setting or": "Se necessario, i ruoli di amministrazione devono essere impostati manualmente. Eventuali errori di battitura in questa impostazione o",
      "The base settings of the suite have a site id configured as 1.": "Le impostazioni di base della suite prevedono l'ID del sito impostato su 1.",
      "The required Django apps and some providers are preconfigured. You can add other providers supported by ```django-allauth```.": "Le app Django necessarie e alcuni provider sono preconfigurati. Puoi aggiungere altri provider supportati da ```django-allauth```.",
      "The social account integration also brings the possibility to enable": "L'integrazione degli account social consente anche di abilitare",
      "To add additional providers (Gitlab, Github, Twitter, Facebook, etc) to the game,": "Per aggiungere altri provider (GitLab, GitHub, Twitter, Facebook ecc.),",
      "To enable it the following setting can be overridden in the local_settings.py:": "Per abilitarlo, è possibile sovrascrivere la seguente impostazione in local_settings.py:",
      "User Session Tracking": "Tracciamento delle sessioni utente",
      "Usually it is also necessary to **assign the user to an existing group**. This can be done": "Di solito è anche necessario **assegnare l'utente a un gruppo esistente**. È possibile farlo",
      "Viewer Level 1": "Viewer di livello 1",
      "Viewer Level 2": "Viewer di livello 2",
      "While this can be fine for some cases, usually one needs to differentiate at least": "Sebbene possa essere sufficiente in alcuni casi, di solito è necessario distinguere almeno",
      "admin role choice will fallback to the default viewer role.": "nella scelta del ruolo di amministratore faranno ricadere sul ruolo Viewer predefinito.",
      "by overriding the setting:": "sovrascrivendo l'impostazione:",
      "else the groupd setting will be ignored, leaving the user without an assigned group and the need for a manual intervention.": "altrimenti l'impostazione del gruppo verrà ignorata, l'utente resterà senza gruppo e sarà necessario intervenire manualmente.",
      "image.": "immagine.",
      "in this case occurrs through the email address. The username of the original": "in questo caso avviene tramite l'indirizzo e-mail. Il nome utente dell'utente originale",
      "of the chosen provider will appear on the suite's login screen.": "del provider scelto apparirà nella schermata di accesso della suite.",
      "on the provider's cloud consoles. The allauth documentation has a small entry for each": "nelle console cloud dei provider. La documentazione di allauth contiene una breve sezione per ciascun",
      "provider. [The example at this link](https://docs.allauth.org/en/latest/socialaccount/providers/google.html), which describes how to configure a social application": "provider. [L'esempio a questo link](https://docs.allauth.org/en/latest/socialaccount/providers/google.html), che descrive come configurare un'applicazione social",
      "sectting. For example, to add facebook as a provider, just add:": "delle impostazioni. Ad esempio, per aggiungere Facebook come provider, basta inserire:",
      "site id.": "per il sito.",
      "suite user is kept and the provider supplied username is ignored in this case.": "della suite viene mantenuto e il nome utente fornito dal provider viene ignorato.",
      "to one of the user roles** available in the suite:": "uno dei ruoli utente** disponibili nella suite:",
      "transparently are registered to the system. For this to work, it is necessary to **assign them": "vengono registrati automaticamente nel sistema. Perché ciò avvenga, è necessario **assegnare loro",
      "two sites in development and production environments.": "due siti negli ambienti di sviluppo e produzione.",
      "user sessions tracking.": "il tracciamento delle sessioni utente.",
      "using the Google provider can help the reader to understand the following": "con il provider Google può aiutare a comprendere la seguente",
      "we can just add them in the ```local_settings.py``` under the ```G3WADMIN_LOCAL_MORE_APPS```": "è sufficiente aggiungerli in ```local_settings.py``` nella sezione ```G3WADMIN_LOCAL_MORE_APPS```"
    }
  }
</script>
