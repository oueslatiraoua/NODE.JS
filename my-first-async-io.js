var fs = require("fs");
fs.readFile(process.argv[2], (error, data) =>
  error
    ? console.log(error)
    : console.log(data.toString().split("\n").length - 1)
);
