const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim().split(' '));
let num = "";
if (input<0){
    num = "minus";
}

console.log(input);
console.log(num);