// key-pair.js

// Écrivez une fonction `keyPair(obj1, obj2, key)` qui accepte deux objets et une chaîne de caractères 
// comme arguments.
// La fonction doit retourner un tableau contenant les valeurs de la clé donnée dans `obj1` et `obj2`.
// Voir les exemples.

let keyPair = function(obj1, obj2, key) {
    return "[ '" + obj1[key] + "', '" + obj2[key] + "' ]"
}

let cat1 = { name: "jinkee", breed: "calico" };
let cat2 = { name: "garfield", breed: "redtabby" };
console.log(keyPair(cat1, cat2, "breed")); // [ 'calico', 'redtabby' ]
console.log(keyPair(cat1, cat2, "name")); // [ 'jinkee', 'garfield' ]
let sport1 = { nom: "volleyball", équipe: true };
let sport2 = { nom: "golf", équipe: false };
console.log(keyPair(sport1, sport2, "équipe")); // [ true, false ]