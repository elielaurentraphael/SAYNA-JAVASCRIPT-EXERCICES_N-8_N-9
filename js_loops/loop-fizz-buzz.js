// Créez un fichier loop-fizz-buzz.js et résolvez la fonction ci-dessous.
// Ecrivez une fonction `fizzBuzz` qui accepte un nombre max comme argument. 
// La fonction doit imprimer tous les nombres inférieurs ou égaux à max qui sont divisibles par 3 
// ou 5, mais pas par 3 et 5.
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'afficher dans 
// le terminal.

// fizzBuzz(18) ;
// imprime
// 3
// 5
// 6
// 9
// 10
// 12
// 15
// 18
// fizzBuzz(33) ;
// imprime
// 3
// 5
// 6
// 9
// 10
// 12
// 15
// 18
// 20
// 21
// 24
// 25
// 27
// 30
// 33

let fizzBuzz = function(max) {
    for (i = 1; i <= max; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
}

fizzBuzz(18);
console.log(" ");
fizzBuzz(33);