let fs = require('fs');
let sameText = 'Hello World';
let arr = ['once', 'exits', 'urqial'];


// let count = 1;
// setInterval(() => {
//     console.log(count++);
// },1000);

// let math = require('./math.js');
// console.log(math.cub4(10));


fs.readFile('read.txt', 'utf-8', (error, data) => {
    if(error) console.log(error); 
    let result = data.split(',');
    let res = 0;
    for (const num of result) {
        res = res + Number(num);
    };
    let midiamNumber = res / result.length
    fs.writeFileSync('read.txt', midiamNumber.toString());
    fs.writeFileSync('newRead.txt', sameText + ' ' + 'what');
    for (let i = 0; i < arr.length; i++) {
        fs.writeFileSync(arr[i] + '.txt', '');
    }
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            fs.unlinkSync(arr[i] + '.txt', '');
        }
    },5000)
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            fs.writeFileSync(arr[i] + '.txt', '');
        }
    },7000)  
});
fs.writeFileSync('newTestFileSecond.txt', '');
setTimeout(() => {
    fs.writeFileSync('newTestFileSecond.txt', 'I come back');
},3000);

// fs.copyFileSync('test.txt', 'newTest.txt');
// fs.writeFileSync('newTest.txt', '18');
// fs.copyFileSync('newTest.txt', 'newTestFileSecond.txt');
// fs.readFile('newTest.txt', 'utf-8', (error, data) => {
//     if (error) console.log(error);
//     let res = data * data
//     fs.writeFileSync('newTest.txt', res.toString())
// })
// fs.rename('test.txt', 'folder/test.txt', (error) => {
//     if(error) console.log(error);
//     console.log('add file');
// });
fs.writeFileSync('file.txt', '');
setTimeout(() => {
    fs.unlinkSync('file.txt');
}, 3000);

fs.readFile('ConuterFile.txt', 'utf-8', (error, data) => {
    if(error) console.log(error);
    let counter = 0;

    let stopCount = setInterval(() => {
        counter++
        if (counter > 10) {
            clearInterval(stopCount);
        }
    },1000);

    let stop = setInterval(() => {
        fs.writeFileSync('ConuterFile.txt', counter.toString());
        if (counter > 10) {
            fs.writeFileSync('ConuterFile.txt', '');
            clearInterval(stop);
            
        }
    },1000);
   
});
setTimeout(() => {
    fs.mkdir('foldeNumberTwo', (error) => {
        if(error) console.log(error);
        for (const name of arr) {
            fs.mkdirSync(name);
        }
    });
}, 3000);

setTimeout(() => {
    fs.rmdir('foldeNumberTwo', (error) => {
        if(error) console.log(error);
        for (const name of arr) {
            fs.rmdirSync(name);
        }
    });
}, 9000);

// fs.readdir('folder', (error, data) => {
//     if(error) console.log(error);
//     for (const key in data) {
//         console.log(typeof data[key]);
        
//     }
// });
// fs.stat('newTest.txt', (error, data) => {
//     if(error) console.log(error);
//     console.log(data.size / 1024 /1024 /1024);
// });
// const lol = fs.statSync('folder');
// console.log(lol);
fs.readdir('folder/inFolder', (error, data) => {
    if(error) console.log(error);
   console.log(data);
});