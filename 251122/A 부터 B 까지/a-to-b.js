const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
let num = "";
let i = A;

while(i<=B){
    num += i + ' ';
    if(i%2!=0){
        i*=2;
    }else if(i%2==0){
        i+=3;
    }
    if(i>B){
        break;
    }
}

console.log(num);