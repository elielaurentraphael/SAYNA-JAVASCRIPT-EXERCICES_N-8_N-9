// Écrivez une fonction nommée `sumUpTo(max)` qui accepte un nombre max comme argument.
// La fonction doit renvoyer la somme totale de tous les nombres entiers compris entre 1 et le max, inclus.
// Par exemple, sumUpTo(4) doit renvoyer 10 car 1 + 2 + 3 + 4 = 10.




function sumUpTo(max) {
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumUpTo(4)); // 10
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(2)); // 3