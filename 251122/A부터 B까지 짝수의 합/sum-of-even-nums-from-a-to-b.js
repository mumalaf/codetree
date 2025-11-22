const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
let sum = 0;

for (let i=A; i<=B; i++){
    if (i%2==0){
        sum += i;
    }else{
        continue;
    }
}

console.log(sum);