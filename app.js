
const liveServer = require("live-server");
const nodemon = require('nodemon');
nodemon({
  script: __dirname+'/index.js',
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});

var params = {
    port: 8080, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    open: false, // When false, it won't load your browser by default.
    file: "rss.xml", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    "entry-file": "rss.xml",
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { 
        next(); 
    }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);