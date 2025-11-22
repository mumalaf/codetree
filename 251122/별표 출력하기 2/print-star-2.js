const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

for (let i=N; i>0; i--){
    str = "";
    for (let j=0; j<i; j++){
        str += "*" + " ";
    }
    console.log(str);
}