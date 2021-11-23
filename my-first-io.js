var fs = require("fs");
var readfile = fs.readFileSync(process.argv[2]);
var arr = readfile.toString().split("\n");
console.log(arr.length - 1);
