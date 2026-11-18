---
title: Social login
description: Since version 3.9, G3W-SUITE supports social authentication through django-allauth.
---

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

The default role is _Viewer Level 1_. The adapter accepts only the three roles above for `SOCIALACCOUNT_USER_ROLE`; unsupported values fall back to _Viewer Level 1_. Assign admin roles manually.
It is possible to tweak this setting by overriding the setting:

```python
SOCIALACCOUNT_USER_ROLE = 'Editor Level 1'
```

**Note that the username in this case will be retrieved from the provider.**


Usually it is also necessary to **assign the user to an existing group**. This can be done
by overriding the setting:

```python
SOCIALACCOUNT_USER_GROUP = '<existing_user_group>'
```

When `SOCIALACCOUNT_USER_GROUP` is configured, the adapter assigns that group if it exists. For a _Viewer Level 1_ user, the group must have a viewer role; missing or incompatible group assignments are logged and skipped.


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
