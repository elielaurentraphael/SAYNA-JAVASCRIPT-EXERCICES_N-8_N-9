// objet-2.js

let restaurant = {
    nom: "Bob's Burgers",
    location: "123 Ocean Avenue",
    propriétaires: ["Bob Belcher", "Linda Belcher"],
    création: 2011,
    menu: ["burgers", "frites", "milk-shakes"],
};
console.log(restaurant["propriétaires"]); // ["Bob Belcher", "Linda Belcher"]
console.log(restaurant["employés"]); // undefined
let someKey = "menu";
console.log(restaurant.menu); // ["burgers", "frites", "milk-shakes"]
console.log(restaurant["menu"]); // ["burgers", "frites", "milk-shakes"]
console.log(restaurant[someKey]); // ["burgers", "frites", "milk-shakes"]
console.log(restaurant.someKey); // undefined
console.log(restaurant.menu.includes("fries")); // false