var minimist = require('minimist')
  , path     = require('path')
  , cordova  = path.join(__dirname, '..', 'node_modules', 'cordova', 'bin', 'cordova')
  , opts     = process.argv.slice(2)
  , argz     = minimist(opts)
  , cmd      = argz._[0]
  , exec     = require('child_process').exec
  , serve    = require('./serve')
  , create   = require('./create')
   

module.exports = function() {

    if (cmd === 'serve') {
        // TODO
        // localtunnel
        // autoreload options
        // need to refactor connect-phonegap useragent to know about brwoser as a platform
        serve({port:3000})
    }
    else if (cmd === 'create') {
        create({path:opts[1], id:opts[2], name:opts[3]})
    }
    else if (cmd === 'version') {
        console.log(require('./../package.json').version)    
    }
    else if (cmd === 'help') {
        console.log('beta! need to reconsider the docs')    
    }
    else {
        var cdv = cordova + ' ' + opts.join(' ')

        exec(cdv, function(err, stdout, stderr) {
          if (err) console.error(stderr.replace('Cordova', 'PhoneGap').replace('cordova', 'phonegap'))
        })
    }
}
