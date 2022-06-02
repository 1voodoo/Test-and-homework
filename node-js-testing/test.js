let fs = require('fs');
let sameText = 'Hello World'
let arr = ['once', 'exits', 'urqial']
// let count = 1;
// setInterval(() => {
//     console.log(count++);
// },1000);

// let math = require('./math.js')
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
});

fs.rename('test.txt', 'folder/test.txt', (error) => {
    if(error) console.log(error);
    console.log('add file');
});
 


