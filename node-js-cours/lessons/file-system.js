const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()

// console.log('satrt');

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Succes');
// })

// console.log('end');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.appendFile(path.resolve(__dirname, 'text.txt'), 'kjgfkefdjg', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('succes');
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err){
            return reject(err.massage)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err){
            return reject(err.massage)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err){
            return reject(err.massage)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err){
            return reject(err.massage)
        }
        resolve(data)
    }))
}

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
// .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'123'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'12312121112'))
// .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
// .then(data => console.log(data))
// .catch(err => console.log('err'))

// removeFileAsync(path.resolve(__dirname, 'te.txt'))
//     .then(() => console.log('file was delet'))

// const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)

// .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
// .then(data => data.split(' ').length)
// .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Number words ${count}`))
// .then(removeFileAsync(path.resolve(__dirname, 'text.txt')))
