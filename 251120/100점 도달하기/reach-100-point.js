const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i=input; i<=100; i++){
    if(i>=90){
        str += 'A'+' ';
    }else if(i>=80){
        str += 'B'+' ';
    }else if(i>=70){
        str += 'C'+' ';
    }else if(i>=60){
        str += 'D'+' ';
    }else{
        str += 'F'+' ';
    }
}

console.log(str);