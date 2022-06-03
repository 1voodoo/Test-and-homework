let http = require('http');
let fs = require('fs');

// let url = require('url');
// let modemon = require('nodemon');
// let process = require('process')

console.log('Server Start');

http.createServer(function(request, response) {
    if(request.url != '/favicon.ico'){
        fs.readFile('pages/' + request.url + '.html', (error, data) => {
            response.setHeader["{ 'Content-Tupe': 'text/html' }"];
            if(!error) {
                response.statusCode = 200;
                response.write(data);
                response.end();
            } else {
                fs.readFile('pages/404.html', (err, data) => {
                    if(err) console.log(err);;
                        response.statusCode = 404;
                        response.write(data);
                        response.end();
                    
                })
            }
        });  
    };
}).listen(8888);
