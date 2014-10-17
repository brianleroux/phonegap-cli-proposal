var path    = require('path')
  , cordova = path.join(__dirname, '..', 'node_modules', 'cordova', 'bin', 'cordova')
  , hello   = path.join(__dirname, '..', 'node_modules', 'phonegap-app-hello-world')
  , exec    = require('child_process').exec


module.exports = function(options, callback) {
    
    if (!options) throw new Error('requires option parameter')
    if (!options.path) throw new Error('requires option.path parameter')
    
    cb = callback || console.log

    options.path = path.resolve(options.path.toString())
    options.name = options.name || 'HelloWorld'
    options.id = options.id || 'com.phonegap.helloworld'

    var cdv = cordova + ' create ' + options.path + ' ' + options.id + ' ' + options.name + ' --copy-from ' + hello

    exec(cdv, cb)    
}
