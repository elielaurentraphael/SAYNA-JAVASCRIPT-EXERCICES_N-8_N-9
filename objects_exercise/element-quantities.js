// element-quantities.js

// Créez une fonction `elementQuantities` qui accepte un objet comme argument. L'objet contient des 
// éléments comme clés et des quantités comme valeurs. 
// La fonction doit retourner un tableau contenant les éléments qui apparaissant avec les quantités 
// correctes. 
// Voir les exemples.

let elementQuantities = function(objet) {
    let arr = [];
    for (let x in objet) {
        let i = 0;
        do {
            arr.push(x);
            i++
        } while (i < objet[x]);
    }
    return arr;
}

let quantities1 = { cat: 3, oiseau: 1, chien: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'oiseau', 'chien', 'chien']
let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']