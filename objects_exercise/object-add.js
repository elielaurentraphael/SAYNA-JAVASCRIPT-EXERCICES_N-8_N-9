// object-add.js

// Écrivez une fonction `objectAdd` qui accepte deux objets comme arguments. 
// La fonction doit retourner un nouvel objet contenant les mêmes clés que les objets arguments. 
// Si une clé est trouvée dans les deux objets, sa valeur correspondante doit être la somme des valeurs 
// des arguments de l'objet. 
// Si une clé n'est trouvée que dans l'un des objets, la valeur correspondante doit être la même que 
// celle de ce seul objet.

let objectAdd = function(objet1, objet2) {
    let objet = {};
    Object.entries(objet1);
    Object.entries(objet2);
    for (Object.keys(objet1) in objet1) {
        if (Object.keys(objet1) == Object.keys(objet2)) {
            objet += [Object.keys(objet1), Object.values(objet1) + Object.values(objet2)]
        } else { objet += [Object.keys(objet1), Object.values(objet1)] }
    }
    return objet;
}


let obj1 = { x: 3, y: 10 };
let obj2 = { y: 2, x: 1 };
console.log(objectAdd(obj1, obj2)); // { x : 4, y : 12 }
let obj3 = { a: 3, b: 2, c: -1 };
let obj4 = { b: 5, c: 1, e: 4 };
console.log(objectAdd(obj3, obj4)); // { a : 3, b : 7, c : 0, e : 4}