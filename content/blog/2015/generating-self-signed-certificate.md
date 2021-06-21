---
title: Generating self-signed certificate
date: 2015-09-01 
category: Sysadmin
tags: utils
slug: generating-self-signed-certificates
summary: You want SSL everywhere, including in development. Self-signed certificates are perfect for this. Here is a simple one-liner to generate the key and the certificate.
cover: /images/2015/lock.jpg
pictureCopyrightsText: The lock by xfact
pictureCopyrights: http://xfact.deviantart.com/art/The-Lock-89085863
status: published
language: en
---

You want SSL everywhere, including in development. Self-signed certificates are perfect for this. Here is a simple one-liner to generate the key and the certificate.

```bash
openssl req -nodes -x509 -newkey rsa:4096 -keyout key.pem -out cert.crt\
 -days 356 -subj “/C=CA/ST=Quebec/L=Montreal/O=IT/CN=www.example.com”
```

This will generate a new 4096 bits key named *key.pem* and a certificate named *cert.crt*.
The certificate will be generated for the domain name *www.exemple.com*, in Montreal Quebec Canada.
