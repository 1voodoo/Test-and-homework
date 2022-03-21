const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
        
//     }
//     cluster.on('exit', (worker) => {
//         console.log(`Worker c pid = ${worker.process.pid } dead`);
//         cluster.fork()
//     })

// } else {
//     console.log(`Vorker c pid= ${process.pid}`);
//     setInterval(() => {
//         console.log(`Vorker c pid= ${process.pid} steale worker`);
//     }, 5000)
// }

