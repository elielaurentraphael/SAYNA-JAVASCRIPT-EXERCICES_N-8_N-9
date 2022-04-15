// Écrivez une fonction `minToMax(min, max)` qui accepte deux nombres comme arguments. 
// La fonction doit imprimer tous les nombres de min à max inclus. 
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement imprimer sur 
// le terminal.

// minToMax(4, 12);
// imprime
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// minToMax(11, 14);
// imprime
// 11
// 12
// 13
// 14

/*
let minToMax = function(min, max) {
    for (let i = min; i <= max; i++) {
        console.log(i);
    }
}
*/

function minToMax(min, max) {
    for (let i = min; i <= max; i++) {
        console.log(i);
    }
}

minToMax(4, 12);
minToMax(11, 14);