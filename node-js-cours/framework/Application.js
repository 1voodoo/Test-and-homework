const htpp = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlwares = [];
    }
    use(middlware) {
        this.middlwares.push(middlware);
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emitter.on(this._getRoutMask(path.method), (req, res) => {
                    const handler = endpoint[method]
                    handler(req, res)
                })
            })
        })
    }

    _createServer() {
        return htpp.createServer((req, res) => {
            let body = "";
            req.on('data', (chank) => {
                body +=chank
            })
            req.on('end', () => {
                if(body) {
                    req.body = JSON.parse(body);
                }
                this.middlwares.forEach(middlware => middlware(req, res))
                const emitted = this.emitter.emit(this._getRoutMask(req.pathname, req.method), req, res);
                if(!emitted) {
                      res.end()
                }
            });                     
        });
    }
    _getRoutMask(path, method) {
        return `[${path}]:[${method}]`
    }
}