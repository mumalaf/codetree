const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let rep = "";
for (let i=0; i<8; i++){
    rep = rep + input;    
}
console.log(rep);