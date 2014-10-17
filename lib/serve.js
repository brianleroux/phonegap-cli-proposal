var defaults = {port:3000, autoreload:true, localtunnel:false}
  , cordova = require('cordova-lib').cordova
  , server = require('connect-phonegap')
  , noop = function() {}

function start(opts, cb) {
  server.listen(opts)
    .on('error', console.error)
    .on('log', console.log)
    .on('complete', noop)
}

module.exports = function(options, callback) {
    
    if (!options) throw new Error('requires option parameter')

    options.port = options.port || defaults.port
    options.autoreload = (typeof options.autoreload === 'boolean') ? options.autoreload : defaults.autoreload
    options.localtunnel = (typeof options.localtunnel === 'boolean') ? options.localtunnel : defaults.localtunnel
    callback = callback || console.log

    try {
        cordova.prepare([], function(err, data) { 
            start(options, callback) 
        })
    } 
    catch (e) {
        start(options, callback)
    }
}
