const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log("Папка создана");
// })

// const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.appendFile(filePath, 'Helloy NideJS', err => {
//     if(err) {
//         throw err
//     }
//     console.log("Файл создан");
// })

// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     }
//     const data = Biffer.from(content)
//     console.log("Content", data.toString());
// })