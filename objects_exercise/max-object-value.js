// Ecrivez une fonction `maxObjectValue` qui accepte un objet comme argument.
// Ecrivez une fonction qui renvoie un tableau contenant la paire clé-valeur 
// la plus grande de l'objet. Vous pouvez supposer que toutes les valeurs sont des nombres et 
// qu'il n'y a pas d'égalité.

let maxObjectValue = function(myobjet) {
    let arr = Object.values(myobjet);
    arr.sort(function(a, b) { return b - a });
    for (const [key, value] of Object.entries(myobjet)) {
        if (value === arr[0]) {
            return "['" + key + "', " + arr[0] + "]";
        }
    }
}

console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ litchi: 11, ramboutan: 13, papaye: 9 })); // ['ramboutan', 13]