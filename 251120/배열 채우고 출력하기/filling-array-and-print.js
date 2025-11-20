const array = [];
let str = '';
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

for (let i=input.length-1; i>=0; i--){
    array.push(input[i]);
    str += input[i];
}

console.log(str);