const fs = require("fs");
const path = require("path");
var mypath = process.argv[2];
var extension = `.${process.argv[3]}`;
fs.readdir(mypath, (error, list) =>
  error
    ? console.log(error)
    : console.log(
        list.filter((file) => path.extname(file) === extension).join("\n")
      )
);
