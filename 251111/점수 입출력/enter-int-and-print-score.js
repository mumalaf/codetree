const fs = require("fs");
let age = Number(fs.readFileSync(0).toString().trim());
console.log("Your score is "+age+" point.");