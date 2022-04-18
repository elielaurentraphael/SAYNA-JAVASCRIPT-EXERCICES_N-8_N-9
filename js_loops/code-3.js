let foo = function() {
    for (let num = 10; num > 0; num -= 2) {
        console.log(num);
    }
};
console.log("début");
foo();
console.log("end");
foo();

// début
// 10
// 8
// 6
// 4
// 2
// end
// 10
// 8
// 6
// 4
// 2