const fs = require('fs');
const filePath = 'sample.txt';

// Delete the file asynchronously
fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File has been deleted.');
});
