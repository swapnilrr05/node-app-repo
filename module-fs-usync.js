const fs = require("fs"); // File System module

console.log(`=========== readFileSync() ===========`);

console.log("============== START ===================");

try {
  // Synchronously reading the file and storing the contents in 'data'

  const data = fs.readFileSync("./sample-file.txt", "utf8");

  console.log(`Reading the contents from the File: sample-file.txt`);

  console.log("====================================");

  console.log(data);
} catch (error) {
  console.log("Error:", error);
}

console.log("============== END ===================");

// nodemon start module-fs.js
console.log(`=========== writeFile() ===========`);

const content =
  "The issue in your code is that you're using fs.readFileSync() incorrectly with a callback. The method readFileSync() is a synchronous function, meaning it does not take a callback. It reads the file and returns the contents directly.";

fs.writeFile("output.txt", content, "utf8", (error) => {
  if (error) {
    console.log(error);

    return;
  }

  console.log("Content Written Successfully.");
});
