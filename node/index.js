console.log("Hello");

const { add, subtract, multiply, divide } = require("./maths"); // import everything from maths.js


console.log("2 + 2 =", add(2, 2));

console.log("2 - 2 =", subtract(2, 2));

console.log("2 * 2 =", multiply(2, 2));

console.log("2 / 2 =", divide(2, 2));

const getPoke = require("./poke");

getPoke();