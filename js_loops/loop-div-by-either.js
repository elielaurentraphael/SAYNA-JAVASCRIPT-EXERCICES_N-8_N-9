// Créer un fichier loop-div-by-either.js et résoudre la fonction ci-dessous.
// Écrivez une fonction nommée `divByEither(num1, num2, max)`. Elle accepte trois nombres comme 
// arguments.
// La fonction doit afficher tous les nombres positifs inférieurs à max qui sont divisibles par 
// num1 ou num2.
// La fonction n'a pas besoin de renvoyer de valeur. Elle doit simplement s'afficher dans 
// le terminal.

// divByEither(4, 3, 16) ;
// imprime
// 4
// 6
// 8
// 9
// 12
// 15
// divByEither(7, 5, 20) ;
// imprime
// 5
// 7
// 10
// 14
// 15

function divByEither(num1, num2, max) {
    for (i = 1; i < max; i++) {
        if (i % num1 == 0 || i % num2 == 0) {
            console.log(i);
        }
    }
}

divByEither(4, 3, 16);
console.log(" ");
divByEither(7, 5, 20);