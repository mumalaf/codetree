const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i=0; i<N; i++){
    str = "";
    for (let j=0; j<2*i+1; j++){
        str += "*";
    }
    
    console.log(str);
}