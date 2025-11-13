const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let number = [];
number.push(parseInt(input[0]));
number.push(parseInt(input[1]));
number.push(parseInt(input[2]));

number.sort((a, b) => a - b);
console.log(number[1]);