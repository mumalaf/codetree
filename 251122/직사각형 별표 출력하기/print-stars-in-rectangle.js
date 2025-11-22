const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const N = Number(input[0]);
const M = Number(input[1]);
let str = "";

for (let i=0; i<N; i++){
    for (let j=0; j<M; j++){
        str += '* ';
    }
    str += '\n';

}

console.log(str);