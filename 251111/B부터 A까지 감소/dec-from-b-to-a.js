const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let num = "";

for (b; b>=a; b--){
    num += b + " ";
}

console.log(num);