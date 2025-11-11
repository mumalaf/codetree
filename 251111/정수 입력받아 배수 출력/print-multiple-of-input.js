const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());
let num = "";

for (let i=1; i<6; i++){
    num += (N*i + " ");
}

console.log(num);