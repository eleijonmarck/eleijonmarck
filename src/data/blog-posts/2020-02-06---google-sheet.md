---
title: "Google Sheets API"
date: "2020-02-06"
template: "post"
draft: false
slug: "sheets"
category: "data-engineering"
tags:
  - "data-engineering"
description: "A tutorial on how to setup the correct credentials and service account for creation of sheets"
socialImage: ""
---

Recently I had to create reports for external partners for a job I had.
> "well how hard can it be to create a sheet and share it."

Turns out, extremely non-accessible to play around and to find relevant material for how to setup the correct permissions or grants for a account.
This tutorial will show a non-technical perspective to setup the correct `service-account` and `credentials` and APIs to be able to create a sheet in your drive.
This is for anyone struggling with finding a good resource for how to actually create a sheet programmatically with simple gifs, as they are invaluable.

---
gist:
- create a project in google
- enable APIs for consumption
- setup a service account with correct priviliges
- download the key
- python application to create a sheet and share to anyone in your organization

## Create / use project

We need to have a project setup in google to be able to create service accounts and enable apis to be called. This could also be connected to your exisiting project within google of course.
> This could also be connected to your exisiting project within google of course!

![project](/assets/blog/google-sheet/project.gif)


## Enable APIs

When we have our project to within our organization, this project enables us to grant access or your admin to the apis for Google Drive and Google Sheets. This essentially starts the apis on googles end to be able to be consumed. For instructions follow the video:

![apis](/assets/blog/google-sheet/enable_api.gif)


## Service Account

This is the part which is missed in most of the tutorials or guides out there. Even googles own documentation does not give a hint on how the access rights should be granted.
What we will do is basically tell google to:
- create a new service account
- a service account (an email and a user within the platform with extra priviliges) exist with access rights
- the service account is granted access over the g-suite instance (meaning sharing, creating, deleting)

![service-account](/assets/blog/google-sheet/service-account.gif)

---
<center><h3 style="color:#ff6f69">Warning</h3></center>

Be wary that this service account has now been granted access across the organizations documents. Proceed with caution of how to deal with the authentication of this user. Next we will create a key to be able to verify that we are the service account user.

---
## Key

Create the key and download the key. Please again be wary and store this key in an approriate place like 1password and do not version control it.
Best way is to encrypt the file with GPG.

![key](/assets/blog/google-sheet/key.gif)

The key is going to look something like this:

```json
{
  "type": "service_account",
  "project_id": "rugged-precept-269618",
  "private_key_id": "ccc84c9d562d73a666472f8a2cf557aa8d8573b7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5OAOst7kQvdWe\nTOsOCaNzQG+q5EN4sRdZDpvxaCBorkt9rqViLkYNTnPIRymQmKlA2ciJN2rzHVFw\nYBgpltYJvospaY/GKgvZmjMKWeCTOk+hq7cg0clE+2em7Pj5Bd4UrhIounJebO5X\nnGFPXUtTG9miah+z8xuDtt3y4cxOPFUdiU4uzYzoODU7nRzHYZa+hfx05ZVco4Az\nbdXJFsWyYDz5kgdBLg/aNYjY8jMCXlVKiKymU0QiPo1AfO9euDzYc5lbnjm5xzdv\n0S75dRTrfOMglTluInjTL3hcH2cUekFtu8b3jz07JmzdB6vdrNKmE6T8nU/4jG/Z\ntzkE4CqpAgMBAAECggEAAuYhSpgCjcRG3mgqSqk0dXaV+NkDRFWTPbnYj333eeP2\newRbgs6iGo22irUwbZqyFXmDJcCoDB+SmX1ri2UYuwTQNUj5btrUHicHcvtGpE9G\nlUt0fY9DBPEhZW+ykuU4XV7/GkOWzCsMzPK95Cnb5rRaIuxhzCV7MgPP8//8PGI3\nCaLpZy9o0pNeDJShksyDhdPgp5aORZkBk1oggZNkEDV8khTRFM76s3qqMuaPey/8\nqQpFRDku4sW7UBR+5tBwDMK7DqnHC/F7S55sGTRFSPtgRlKcLmTvaB0HwhOCh/5D\nJErWp3RYc4hS1hMLQwLkMtl2ENh7gL8JbmJfqbfIgQKBgQDh+EbWz7ucI6MTC+zd\nC9dnDjAbkeBwXx/xstIToqe4iUkvq+sTgSQymPiIk6AywZEIqF15/AkTrv13t7Yd\nW1zL8/np3AN5GnOnUH89Z28eNoFaSkQmg5rBVWJwGqkOeHAtzGt9Vg97H5VVG/zW\nOOWYBFOOKkRY7/kt2CIHiOx/6QKBgQDR1VirIjiPYCTrSwi/KEUJW0F68dE0rNUP\nwSKQP0rEIqask5+MlSi/IROm+DMlULhfiCr/ITlg0PCTTczgiSsutLyd3hv6p84L\nQwRllywWttBrRoda6sArh+yipxi6sO4nNUDT0kpvd4dEdAQzCGHZjM8FtjIxsEdX\n3RGoAjxcwQKBgQDPx0Az4z1KHAaly9BXjLza2NPpdeAe04kG8Ht0bJq19x5hhD4a\naCPFlpzo0H18Tjoy8MVLFjGudLhCLZ16LvkL3GHO5GwZHfZ8QWtOJd6ptEqKoEE7\n/MT+wqlKFWmfkaTsp8uqqsh/WRIx+RMqU5ThjBDcZwcDlFzWB6d6sC9uiQKBgFWE\n1Cx7N/4HO0TCQgBWkzxq+tb2s0L6paNUHZgYk4o4bSGs0LvlFsQ+4NmOEppEucAF\nqTBuBAqXXVVLwhJJFVZlxvG4UkLoHSut1p7o68keHPd7uTKutj+HmEP6QjPkZEuK\ngq9R55BicLjPZ968rdSSdNVpGi/yHkGLEeUddCiBAoGAZwFcrmOUyVdbuqaYHZM8\npKnsln7YEmD/K+Cp+VHX8jO1xbsZ1v7qy1QKDwOXDfPjiYnAFZRAC/V0FnOKWxTj\nmmfL/6P1LK983+8hX999d47JxuHWMItn0CffYoTPGaX8bGDWoMMvn+ukrImF0S/s\ndio3nNMwUZhbTcN/X24AUo4=\n-----END PRIVATE KEY-----\n",
  "client_email": "google-sheet@rugged-precept-269618.iam.gserviceaccount.com",
  "client_id": "111643005080740887457",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-sheet%40rugged-precept-269618.iam.gserviceaccount.com"
}
```

## API setup

Now for the final touch on how to create a google sheet with your newly created account and the credentials.

```python
import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive",
]

credentials_file = "path_to_credentials.json"
creds = ServiceAccountCredentials.from_json_keyfile_name(creds_json, scope)

client = gspread.authorize(creds)

sheet = client.create("tutorial")                           # create
sheet.share('share@to.me', perm_type='user', role='writer') # share to user of choice
```

## Conclusion

We have now setup the way in which we can programmatically call on google sheet api to be able to create, share, **delete** documents within your organization.
I understand why Google does not want it to be easily accessible to be able to perform these kind of operations, so be wary.

**EDIT**: one thing that could be done is to place another organization within the organization that the service account can access freely to not be able to see/delete/create any valuable documents that are within the organization itself.