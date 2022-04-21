// object-add.js

// Écrivez une fonction `objectAdd` qui accepte deux objets comme arguments. 
// La fonction doit retourner un nouvel objet contenant les mêmes clés que les objets arguments. 
// Si une clé est trouvée dans les deux objets, sa valeur correspondante doit être la somme des valeurs 
// des arguments de l'objet. 
// Si une clé n'est trouvée que dans l'un des objets, la valeur correspondante doit être la même que 
// celle de ce seul objet.

// let objet1 = { x: 3, y: 10 };
// let objet2 = { y: 2, x: 1 };
// console.log(objectAdd(obj1, obj2)); // { x : 4, y : 12 };
// let obj3 = { a: 3, b: 2, c: -1 };
// let obj4 = { b: 5, c: 1, e: 4 };
// console.log(objectAdd(obj3, obj4)); // { a : 3, b : 7, c : 0, e : 4};

let objectAdd = function(objet1, objet2) {
    let glum1 = [];
    for (let x of Object.keys(objet1)) {
        glum1.push(x);
    }
    let glum2 = [];
    for (let x of Object.keys(objet2)) {
        glum2.push(x);
    }

}

let objet1 = { x: 3, y: 10 };
let objet2 = { y: 2, x: 1 };
console.log(objectAdd(objet1, objet2));