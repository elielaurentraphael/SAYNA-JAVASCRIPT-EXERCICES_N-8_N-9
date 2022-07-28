// Créer un fichier loop-five-multiples-of.js et résoudre la fonction ci-dessous :
// Ecrivez une fonction nommée `fiveMultiplesOf` qui accepte un nombre comme argument. 
// La fonction doit imprimer les cinq premiers multiples du nombre donné. 
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'afficher dans 
// le terminal.

// cinqMultiplesOf(7) ;
// imprime
// 7
// 14
// 21
// 28
// 35
// cinqMultiplesDe(3) ;
// imprime
// 3
// 6
// 9
// 12
// 15

let fiveMultiplesOf = function(nombre) {
    for (let i = 1; i <= 5; i++) {
        console.log(nombre * i);
    }
};

fiveMultiplesOf(7);
console.log(" ");
fiveMultiplesOf(3);