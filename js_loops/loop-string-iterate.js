// Écrivez une fonction `stringIterate` qui accepte une chaîne de caractères en tant qu’argument.
// La fonction doit imprimer chaque caractère de la chaîne, un par un. 
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'imprimer sur 
// le terminal.

// stringIterate("cement") ;
// imprime
// c
// e
// m
// e
// n
// t
// stringIterate("rat") ;
// imprime
// r
// a
// t

let stringIterate = function(chaine) {
    for (let i = 0; i < chaine.length; i++) {
        console.log(chaine[i]);
    }
}

stringIterate("cement");
console.log(" ");
stringIterate("rat");