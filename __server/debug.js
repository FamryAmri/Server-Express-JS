const debug = require("./../__include/debug")
module.exports = (req, res, next) => {
    debug(req, process.httpstatuscode)
    next();
}