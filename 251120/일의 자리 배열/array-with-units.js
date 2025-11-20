const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

let arr = [];
let num1 = Number(input[0]);
let num2 = Number(input[1]);
let str = '';
arr.push(num1);
arr.push(num2);

for(let i=0; i<10; i++){
    if(Number(arr[i])+Number(arr[i+1])>=10){
        arr.push(Number(arr[i])+Number(arr[i+1])-10);
    }else{
        arr.push(Number(arr[i])+Number(arr[i+1]));
    }
    str += Number(arr[i])+' ';
}

console.log(str);
