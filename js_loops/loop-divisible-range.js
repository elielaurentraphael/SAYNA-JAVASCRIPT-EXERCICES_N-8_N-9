// Créez un fichier loop-divisible-range.js et résolvez la fonction ci-dessous.
// Écrivez une fonction `divisibleRange(min, max, num)` qui accepte trois nombres comme arguments.
// La fonction doit imprimer tous les nombres compris entre `min` et `max` (exclusif) qui sont 
// également divisibles par num.

// divisibleRange(17, 40, 9) ;
// imprime
// 18
// 27
// 36
// divisibleRange(10, 24, 4) ;
// imprime
// 12
// 16
// 20

function divisibleRange(min, max, num) {
    for (let i = min - 1; i < max; i++) {
        if (i % num == 0) {
            console.log(i);
        }
    }
}

divisibleRange(17, 40, 9);
console.log(" ");
divisibleRange(10, 24, 4);