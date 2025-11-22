const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let num = "";

for (let i=0; i<input.length; i++){
    if(Number(input[i])==0){
        break;
    }
    num += input[i]+'\n';
}

console.log(num);