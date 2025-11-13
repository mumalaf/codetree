const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let number = [];
number.push(Number(input[0]));
number.push(Number(input[1]));
number.push(Number(input[2]));

number.sort();
console.log(number[1]);