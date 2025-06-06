# Art Institute of Chicago API

## Install & Run
- Copy the contents of the .env.example file to a .env next to it.
- Run ```docker compose up``` to start the application.

## Guideline

### FR

Un collectionneur d'art souhaiterait connaitre les informations des oeuvres d'art de Picasso et Monet qui sont exposées à l'institut d'art de Chicago, il a essayé d'utiliser leur API pour développer son application avec NodeJS et TypeScript mais il n'a pas assez de connaissance technique et vous demande de l'aide.

Votre mission, si vous l'acceptez, sera d'aider ce collectionneur d'art, il vous demande de reprendre son application pour qu'elle soit fonctionnelle.

- Récupérer et enregistrer les informations des oeuvres d'art dans un fichier au format JSON avec les champs ```id```, ```image_id```, ```title```, ```description```, ```dimensions```, ```place_of_origin``` et ```date_display``` et enregistrer les images au format JPG.
Il faudra respecter une arborescence des dossiers:
```bash
/db
  /<artwork_id>
    <artwork_id>.json
    <image_id>.jpg
```

- Il souhaiterait aussi enregistrer les données dans MySQL pour faciliter la recherche des oeuvres d'art. Vous devrez trouver un moyen pour enregistrer les informations dans MySQL. Attention, il souhaite conserver l'enregistrement des images et des informations d'oeuvres d'art dans les fichiers JSON.

Pour vous aider, voici les URLs de l'API de l'institut d'art de Chicago:
- Rechercher une oeuvre d'art: https://api.artic.edu/docs/#get-artworks-search
- Informations d'une oeuvre d'art: https://api.artic.edu/docs/#get-artworks-id

**Bonus**

- Compléter les tests d'intégrations pour vérifier que les oeuvres d'art de Picasso et Monet sont retournées par l'API.
- Utiliser le timestamp des oeuvres d'art pour enregistrer les oeuvres d'art quand les indexes de la recherche de l'institut d'art de Chicago ont été mise à jour afin de mitiger les erreurs de limitations du nombre d'appels vers l'API.
- Implémenter une solution de cache sur une durée de une heure.

### EN

An art collector would like to know information about the works of art by Picasso and Monet that are on display at the Art Institute of Chicago. He has tried to use their API to develop his application with NodeJS and TypeScript but he doesn't have enough technical knowledge and is asking you for help.

Your mission, should you accept it, will be to help this art collector, who is asking you to get his application up and running again.

- Retrieve and save the information about the works of art in JSON format: ```id```, ```image_id```, ```title```, ```description```, ```dimensions```, ```place_of_origin``` and ```date_display``` then save the images in JPG format.
A folder tree must be respected:

```bash
/db
  /<artwork_id>
    <artwork_id>.json
    <image_id>.jpg                                                      
```
- He would also like to save the data in MySQL to make it easier to find the works of art. You will need to find a way of saving the information in MySQL. Note that he wants to keep the images and artwork information saved in JSON files.

To help you, here are the URLs of the Art Institute of Chicago's API:
- Search for a work of art: https://api.artic.edu/docs/#get-artworks-search
- Artwork information: https://api.artic.edu/docs/#get-artworks-id

**Bonus**

- Complete the integration tests to check that the Picasso and Monet works of art are returned by the API.
- Use the artwork timestamp to save artwork when the Art Institute of Chicago's search indexes were updated so as not to have errors limiting the number of calls to the API.
- Implement a one-hour cache solution.