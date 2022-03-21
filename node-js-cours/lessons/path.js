const path = require('path');

console.log(path.join(__dirname, 'first', 'second', 'third'));
console.log(path.resolve('first', 'second', 'third'));