const yargs = require('yargs');

const options = yargs;
options.usage("Usage: $0 --path [path]")

options.option('port', {
    describe: "The port to bind on",
    default: 8001
});

options.option('path', {
    desc: "The path to server on to",
    default: '.'
});

options.option('debug', {
    desc: "Debug mode is usually false",
    default: false
});

var webserver_path = options.argv.path;
var port = options.argv.port;

module.exports = {
    path: webserver_path,
    port: port,
    debug: options.argv.debug,
    keys: options.argv.extract
}