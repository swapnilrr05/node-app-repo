const fs = require('fs');
const filePath = "output.txt";
const dataToAppend = "\nThis data will be appended to the file.";

// Append data to the filePath asynchronously
fs.appendFile(filePath, dataToAppend, (err) => {
  if (err) {
    console.error('Data has not been appended to the file.');
    return;
  }
  console.log('Data has been appended to the file.');
});
