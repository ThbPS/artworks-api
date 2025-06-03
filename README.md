# Art Institute of Chicago API

## Install
```bash
npm i
```

## Build & Run
- Copy the contents of the .env.example file to a .env next to it, and edit it with your values.
- Run ```npm run dev``` to start the application.

## Run with Docker

- Build:
```bash
docker build -t my-app .
```

- Run:
```bash
docker run -it -p 3000:3000 my-app
```

## Guideline

### FR

Un collectioneur d'art souhaiterai connaitre les informations des oeuvres d'art de Picasso et Monet qui sont exposées à l'institut d'art de Chicago, il a essayé d'utiliser leur API pour développer son application avec NodeJS et TypeScript mais il n'a pas assez de connaissance technique et vous demande de l'aide.

Votre mission, si vous l'acceptez, sera d'aider ce collectionneur d'art, il vous demande de reprendre son application pour qu'elle soit fonctionnelle.

Récupérer et enregistrer les informations des oeuvres d'art au format JSON: ```id```, ```image_id```, ```title```, ```description```, ```dimensions```, ```lieu``` et ```date``` puis enregistrer les images au format JPG.
Il faudra respecter une arboresence des dossiers:
```bash
/db
  /<artwork_id>
    <artwork_id>.json
    <image_id>.jpg                                          
```

Pour vous aidez, voici les URLs de l'API de l'institut d'art de Chicago:
- Rechercher une oeuvre d'art: https://api.artic.edu/docs/#get-artworks-search
- Informations d'une oeuvre d'art: https://api.artic.edu/docs/#get-artworks-id

**Bonus**

Utiliser le timestamp des oeuvres d'art pour enregistrer les oeuvres d'art au format JSON
quand les indexes de la recherche de l'institut d'art de Chicago ont étaient mise à jour afin de mitiger les erreurs de limitations du nombre d'appels vers l'API.

### EN

An art collector would like to know information about the works of art by Picasso and Monet that are on display at the Art Institute of Chicago. He has tried to use their API to develop his application with NodeJS and TypeScript but he doesn't have enough technical knowledge and is asking you for help.

Your mission, should you accept it, will be to help this art collector, who is asking you to get his application up and running again.

Retrieve and save the information about the works of art in JSON format: ```id```, ```image_id```, ```title```, ```description```, ```dimensions```, ```place``` and ```date``` then save the images in JPG format.
A folder tree must be respected:

```bash
/db
  /<artwork_id>
    <artwork_id>.json
    <image_id>.jpg                                                      
```

To help you, here are the URLs of the Art Institute of Chicago's API:
- Search for a work of art: https://api.artic.edu/docs/#get-artworks-search
- Artwork information: https://api.artic.edu/docs/#get-artworks-id

**Bonus**

Use the artwork timestamp to save artwork in JSON format
when the Art Institute of Chicago's search indexes were updated so as not to have errors limiting the number of calls to the API.