let recette = {
    nom: "Crêpes à l'ancienne",
    difficulté: "facile",
    savoureux: true,
    ingrédients: ["œufs", "lait", "beurre", "farine", "sucre"],
};
console.log(recette.nom); // Crêpes à l'ancienne
console.log(recette["nom"]); // Crêpes à l'ancienne
console.log(recette.ingrédients.length); // 5
console.log(recette.calories); // undefined
let someVariable = "difficulté";
console.log(recette[someVariable]); // facile
console.log(recette.someVariable); // undefined
for (let i = 0; i < recette.ingrédients.length; i++) {
    console.log(recette.ingrédients[i]);
} // œufs // lait // beurre // farine // sucre