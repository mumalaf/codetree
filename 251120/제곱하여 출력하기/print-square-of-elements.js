const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = input[0];
const arr = input[1].split(' ');
let sum = '';

for (let i=0; i<arr.length; i++){
    sum += Number(arr[i])**2+' ';
}

console.log(sum);