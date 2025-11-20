const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ');
let str ='';

for(let i=arr.length-1; i>=0; i--){
    if(Number(arr[i])%2==0){
        str += arr[i] + ' ';
    }
}

console.log(str);