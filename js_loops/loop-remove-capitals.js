// Créez un fichier loop-remove-capitals.js et résolvez la fonction ci-dessous.
// Écrivez une fonction `removeCapitals` qui accepte une chaîne de caractères comme argument. 
// La fonction doit retourner une nouvelle version de la chaîne avec toutes les majuscules enlevées.

function removeCapitals(chaine) {
    let chaino = "";
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] === chaine[i].toLowerCase()) {
            chaino += chaine[i];
        }
    }
    return "'" + chaino + "'";
};

console.log(removeCapitals("fOrEver")); // 'frver'.
console.log(" ");
console.log(removeCapitals("raiNCoat")); // "raioat".
console.log(" ");
console.log(removeCapitals("clr Door")); // "clr oor