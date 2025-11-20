const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = input.split("");

arr[2] = 'a';
arr[arr.length-2] = 'a';
let str = arr.join("");

console.log(str);
