const os = require('os');

console.log("=============== Built in Module - OS ===============");
console.log(`Arch: ${os.arch()}`);
console.log("Cpus:");
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`Type: ${os.type()}`);
console.log(`Uptime: ${os.uptime()}`);
console.log("User Info:", os.userInfo());
