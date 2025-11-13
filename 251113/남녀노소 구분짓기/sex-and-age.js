const fs = require ("fs");
let info = fs.readFileSync(0).toString().trim().split('\n');

if (info[0]==0){
    if (info[1]>=19){
        console.log("MAN");
    }else{
        console.log("BOY");
    }
}else{
    if (info[1]>=19){
        console.log("WOMAN");
    }else{
        console.log("GIRL");
    }
}
