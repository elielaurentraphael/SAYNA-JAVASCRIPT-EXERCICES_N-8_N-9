let dog = {
    nom: "Manny",
    âge: 5,
    race: "carlin",
    couleur: "fawn",
    favoriteFoods: ["bacon"],
};
console.log(dog.âge); // 5
console.log(dog.race); // carlin
console.log(dog.favoriteFoods); // ["bacon"],
dog.âge++;
// dog.breed = dog.breed.toUpperCase();
dog.favoriteFoods.push("saucisse"); // ["bacon", "saucisse"],
console.log(dog.âge); // 6
console.log(dog.race); // "carlin"
console.log(dog.favoriteFoods); // ["bacon", "saucisse"],
for (let property in dog) {
    console.log(property + " est " + dog[property]);
} // nom est Manny // âge est 6 // race est carlin // couleur est fawn // favoriteFoods est bacon,saucisse