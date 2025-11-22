const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const fruit = ["apple", "banana", "grape", "blueberry", "orange"];

let count = 0;

for (let i=0; i<fruit.length; i++){
    if(fruit[i][2]==input || fruit[i][3]==input){
        console.log(fruit[i]);
        count++;
    }
}
console.log(count);