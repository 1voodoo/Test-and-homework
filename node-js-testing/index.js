let http = require('http');
let fs = require('fs');

// let url = require('url');
// let modemon = require('nodemon');
// let process = require('process')

console.log('Server Start');

http.createServer(function(request, response) {
    if(request.url != '/favicon.ico'){
        if(request.url.endsWith('.css')) {
            fs.readFile('pages/style.css', (error, data) => {
                if(error) throw error;
                response.setHeader["{ 'Content-Tupe', 'text/css' }"];
                response.statusCode = 200;
                response.write(data);
                response.end();
            });
            
        }
        else if(request.url.endsWith('.js')) {
            fs.readFile('newFile.js', (error, data) => {
                if(error) throw error;
                response.setHeader["{ 'Content-Tupe', 'text/js' }"];
                response.statusCode = 200;
                response.write(data);
                response.end();
            });
        }
        else if(request.url.endsWith('.jpg')) {
            fs.readFile('images.jpg', (error, data) => {
                if(error) throw error;
                response.setHeader["{ 'Content-Tupe', 'image/jpg' }"];
                response.statusCode = 200;
                response.write(data);
                response.end();
            });
        }
        else {
            getPage(request.url, response);
        }
    };
}).listen(8888);

function getPage(name, response, statusCode = 200) {
    if(name === '/') {
        name = 'index';
    };

    fs.readFile('pages/' + name + '.html', 'utf-8', (error, data) => {
        if(!error) {
            fs.readFile('elems/menu.html', 'utf-8', (error, elems) => {
                if(error) throw error;
                data = data.replace(/\{\{menu\}\}/g, elems);
                fs.readFile('elems/footer.html', 'utf-8', (error, footer) => {
                    if(error) throw error;
                    data = data.replace(/\{\{footer\}\}/g, footer);
                    
                    response.setHeader["{ 'Content-Tupe': 'text/html' }"];
                    response.statusCode = statusCode;
                    response.write(data);
                    response.end();
                });
            });    
        } 
        else {
            if (name != '404') {
                getPage('404', response, 404)
            } else {
                throw error;
            }
        }
    });
};
