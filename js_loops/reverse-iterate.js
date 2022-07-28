// Créer un fichier reverse-iterate.js et résoudre la fonction ci-dessous.
// Écrivez une fonction `reverseIterate` qui accepte une chaîne de caractères comme argument. 
// La fonction doit imprimer les caractères de la chaîne un par un, dans l'ordre inverse. 
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'afficher dans 
// le terminal.

// reverseIterate("carrot") ;
// imprime
// t
// o
// r
// r
// a
// c
// reverseIterate("box") ;
// imprime
// x
// o
// b

let reverseIterate = function(chaine) {
    for (i = chaine.length - 1; i >= 0; i--) {
        console.log(chaine[i]);
    }
}

reverseIterate("carrot");
console.log(" ");
reverseIterate("box");