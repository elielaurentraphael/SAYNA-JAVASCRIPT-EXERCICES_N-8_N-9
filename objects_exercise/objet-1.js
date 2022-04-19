/*
Durée de l’exercice : 30min 
Objects

Alors que les tableaux utilisent des nombres pour indexer leurs valeurs, les objets utilisent 
 chaînes de caractères pour indexer leurs valeurs. Ces chaînes de caractères sont appelées clés.
{clé : valeur}

Objectif de l'exercice : Les objets sont une construction que les programmeurs utilisent pour 
représenter des entités et les propriétés qu'elles possèdent.

Enoncé : Suivez les étapes ci-dessous pour réaliser votre exercice. Prédisez d'abord le résultat 
puis exécutez le code dans le terminal et comparez votre prédiction.

# créer un dossier objects_exercise dans ce dossier créer les fichiers ci-dessous, taper le code, 
prédisez le résultat et comparez avec le résultat imprimé après avoir exécuté le code.

# object-1.js
*/

let movie = {
    title: "Fight Club",
    year: 1999,
    genre: ["drame", "thriller"],
    starring: ["Brad Pitt", "Edward Norton"],
};
console.log(movie.year); // 1999
console.log(movie["title"]); // Fight Club
console.log(movie.genre); // drame, thriller
console.log(movie.genre[0]); // drame
console.log(movie.genre[1]); // thriller
console.log(movie.duration);
console.log(movie["starring"][1]); // Edward Norton
console.log(movie.starring.length); // 2