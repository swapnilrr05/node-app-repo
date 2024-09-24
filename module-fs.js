const fs = require("fs");

//fs --> File System

console.log(`=========== readFile() ===========`);

fs.readFile("./sample-file.txt", "utf8", (error, data) => {
  console.log(`Reading the contents from the File: sample-file.txt`);

  console.log("====================================");

  if (error) {
    console.log(error);

    return;
  }

  console.log(data);
});

// nodemon start module-fs.js

