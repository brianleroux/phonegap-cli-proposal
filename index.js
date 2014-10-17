// this is the module entry
// this does nothing other than expose the module functions
// as in, this is not the place to do CLI things, or composition
var create = require('./lib/create')
  , serve = require('./lib/serve')

module.exports = {
    create:create,
    serve:serve,
    help: function() {
        console.log('nyet')
    },
    version: function() {
        console.log(require('./package.json').version)
    }
}
