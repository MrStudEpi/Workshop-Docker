# Workshop Docker
Dans ce workshop, nous allons apprendre les différents avantages qu'apporte Docker pour la création, le déploiement et la gestion d'applications dans des conteneurs logiciels.

## Pour commencer
Dans un premier temps, nous allons voir ce qu'est Docker et comment il peut être utilisé pour empaqueter et déployer des applications de manière simple et rapide. Ensuite, nous verrons comment utiliser Docker pour créer des images de conteneurs et les déployer sur différentes plateformes, ainsi que comment gérer et maintenir ces conteneurs en cours d'exécution. Nous apprendrons également à utiliser Docker Compose pour définir et gérer des ensembles de conteneurs qui travaillent ensemble pour exécuter une application. Nous terminerons en explorant quelques-unes des fonctionnalités avancées de Docker, telles que la gestion des volumes de données et la mise en réseau de conteneurs.

### Pré-requis

- Docker:           https://docs.docker.com/engine/install/
- Docker-compose:   https://docs.docker.com/compose/install/

### Installation et configuration

A ce stade vous avez déjà installer docker sur votre machine.

## Exercices

**INFORMATIONS**

Pour chaque exercice à partir du 2 un flag est caché, resolver l'exercice pour le trouver.
Quand ce dernier est trouvée garder le de coté et si l'envie vous en prend n'hesitez pas
à savoir ce qu'il cache (Indice: ça ressemble à la fin d'un lien). Les flags sont sous la forme:

```bash
FLAG{..}
```

I. Docker

1. Hello World !

**TODO**
Trouver le moyen de lancer un conteneur docker qui dis: Hello World !

Tips:
    - 'Hello World' is a valid docker image, maybe you can run it ?

2. Encrypted (Votre premier Dockerfile)

**TODO**
Trouver le moyen de créer un dockerfile qui setup un environment node qui puisse executer le code javascript situé dans src/encrypted
Transformer ce dockerfile en image et deployer le dans un conteneur

**Warning**
La variable PRIVATE_KEY n'est pas setup, trouvez un moyen avec votre Dockerfile de la définir sur:

```bash
-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAsyhFLbHQBprq40y7GEesDc9k3oM7LipzcKj+Mek8cJTF3C1G\n3v3SijFbe+ns/47R8zxl2YUJii1XN3gdvtbuZvvT0jCZ4u3COR06yoGWKXCnZNF9\nDlVr+NOAQUq59c1Ye6oUufVQgVfY+ZfZHpiJdygz+2bvnE3uD4hEKKvhHR3kIKmP\n8RQUNo5YYFHAIDaVJJull4zac9n532oEtvmEyQK2ENfHpRC549xrEFKkF2Ns+Vvo\n+RwA433zBH6bub+qLaRhWK5ANkUrw0702VIbfUyS4KvaQpud2YTfSmQNWa1juN6k\nS3XYFj6c8/fLnhp3mNPrUY3CIjzV3ODkVe5o3QIDAQABAoIBABPjNYK0CV6iVc6z\nltVEJ4JE8nKM6MXgKn5oFAegV3g725bsY8CfNn7mqbwgpJFd3kp8+uVhkkSHcfYT\nXGHx4/cEn2fmwz5gnD3Q09Tk+7FP8xUK+DHeI6U0fTlCPVBe4iKgJ7rY0334LXrP\nc2elESVsDhErRQ/5yqJowwAszEl59z+n5mOICxyALqdiktgKxM9+E5RM4McFUdcn\nNpjIPUk65n5MbT5qMxq2toMnvSl1kg4Bxa8pmSVWlRBJAauMzs1IkE55aiQ2BN0Y\nL44aF/tFl5gYlyC/n16lrbdbQBZH+/A1boOfN9YSRjv4cM7NOIuIMPXrX55KrsPZ\n+ngHz2ECgYEA6Tzbe5rQj9mwjF5W50N74x8bEsoYpFsqnoh3vlMYqN4V/Rt65NVp\nz165kEqOHYbmDQ8NBbB8RXHn+XeE5LkUX589iGaq8nhr0O/vxE02XqPBmy+3rj8T\nKmy0phjAFJb3dUjX5lzpT2fa0PsLODY/FGIgn0DJRGO6SyPYHNQS72kCgYEAxKRI\nmyGADgDENYUEBfzw20D5wwiOLZWRPWmPOgn56UXht9NNfULhYcdVRcBx/wtqErC1\nuJEIcZ6RI8g7NAJyadYIoC8lYVHiL0H4GSLw1uB0c4hE0TbY7Ik+kDcPkGgPsNmd\nkl2vbN8obBLerxdF7Xre6gZpBBuJ//0rUtr7M1UCgYAaphltxgKObRD++Mh1JADD\nsoolW3H1VXVJJ86GsHfg038vrDQecUPlra0GD36tYPxoAZA7Vi7cwGcA2ecVOxBY\n3JjrPM/LZHbtKHz8sNXFenBkis8x2YMXFdSOJcXMlHMxs2D3sSX3LKaTuhtOEOSk\nL5IKoBxe9AYVD8Nhh9miAQKBgQCHlQpmxANqJEck67DpfAyJ8FQFkKmPbpf08wqJ\nJwXEPKW0PKIqIuoJpAn8jQNMqg8aEfNJ7d4XkRBbzpxbcPB4XtYVtEwevPmqQd8R\nXdEXJy3D1wo0ApAxDzQu9XfqxoVDF9iYabYh6AAT/DLEINTbOCPo0kCoT2CoO2Qa\nvdgD/QKBgQCDdkvc7qpoUPtC4MoKcssBcrLg/dBOP++MwCd5O8kR7U7GH9tM4E3I\nkSUYDCMA45sDnId3Pt5H2AqgvwRy67UioNGxS2rXYRWUK3UQn0XmmXmbyugAWOQ0\nmvL9dtUH8W6ZmiDiv+nMSfVGV0AlN+jE6KmZfAzQxwYgvkD2WzTikQ==\n-----END RSA PRIVATE KEY-----\n
```

Tips:
    - Tout sur le dockerfile: https://docs.docker.com/engine/reference/builder/

3. Awesome (Votre premier docker-compose)

**TODO**
Trouver le moyen de relié une image mongodb (https://hub.docker.com/_/mongo) à l'application dans le dossier app afin de retrouver le flag via docker compose

**Warning**
Le MongoDB User doit avoir pour valeur: admin. Et le mongo db password doit etre egal au flag que vous avez trouvé à l'exercice d'avant.
N'oubliez également pas de passer ces deux valeurs via DB_USER et DB_PASSWORD dans l'app sinon cela ne marchera pas

Tips:
    - Tout sur docker compose: https://docs.docker.com/compose/

## Bonus

Vous pourriez essayer de déveloper votre propre service (server, client) et de faire en sorte qu'il puissent communiquer entre eux

## Documentations

[Docker Hub](https://hub.docker.com) | [Docker Commands (Made by Me)](https://bit.ly/3WuAfce)