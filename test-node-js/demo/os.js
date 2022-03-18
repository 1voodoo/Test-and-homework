const os = require('os');

console.log("Операционная система", os.platform());
console.log("Архиртектура процессорак", os.arch());
console.log("Инфа по  процессорам", os.cpus());
console.log("свободная память", os.freemem());
console.log("вся память", os.totalmem());
console.log("домашняя директория", os.homedir());
console.log("включен", os.uptime());
