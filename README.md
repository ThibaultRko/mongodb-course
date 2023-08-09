# ia-mongodb-cours-2021

## installation

Bonjour, voici mon cours, c'est cool.

Voilà le GIT, add ., commit -m "", tout ça, tout ça.
Rappel du comment, du pourquoi ?

Si le lien avec github a déjà été fait:
git add .
git commit -m "texte pour expliquer les changements"
git push

Si pas:
aller sur github et créer un repository.
aller dans <code> et copier le lien html ou ssh.

docker compse up

## se connecter à la machine docker

docker exec -it mongo-db /bin/bash

## se connecter au serveur mongodb avec mongosh

mongosh --username root --authenticationDatabase admin --password

(le mdp est test123*)

## commande utiles

- show dbs : lister les bases de données
- use <db> : se connecter a une base de données
- show collections : lister les collections

db => représente le contexte courant (la db courante)

## dossier workspace

le dossier worksapce est monté dans le container, à la place de taper mongosh --username root --authenticationDatabase admin --password.
vous pouvez utiliser 'bash connect.sh'