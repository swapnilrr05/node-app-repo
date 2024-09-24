const fs = require('fs');
const filePath = 'output.txt';

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  // Access the properties of stats object
  console.log('File size:', stats.size + ' bytes');
  console.log('Is a directory:', stats.isDirectory());
  console.log('File modification time:', stats.mtime);
  console.log('File birth time (creation time):', stats.birthtime);
});
