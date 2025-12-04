const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let N = Number(input[0]);

for (let i = 1; i <= N; i++){
    let x = input[i].split(" ");
    let a = Number(x[0]);
    let b = Number(x[1]);
    let ans = 0;

    for (let j=a; j<=b; j++){
        if (j%2 === 0){
            ans += j;
        }
    }

    console.log(ans);
}