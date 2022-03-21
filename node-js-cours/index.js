const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = "GET", path,handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
    }
}

const server = http.createServer((req, res) => {
 

    res.end(req.url)

})

server.listen(PORT, () => console.log(`START SERVER PORT ${PORT}`))