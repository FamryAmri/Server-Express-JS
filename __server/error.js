const path = require('path');
const utils = require('../__include/utils')
const fs = require('fs');
const config = require('../__include/options')
const debug = require("../__include/debug")

process.httpstatuscode = "0";

module.exports = (req, res, next) => {

    var chk = utils.checkDir([`${config.path}${req.path}`]);

    var _404 = fs.readFileSync(path.join(__dirname, "/../__main/404.html"), "utf-8");
    var _403 = fs.readFileSync(path.join(__dirname, "/../__main/403.html"), "utf-8");

    if (req.path == `/${utils.runner}` && chk == true) {
        process.httpstatuscode = "403";
        debug(req, process.httpstatuscode)
        return res.status(403).send(_403);
    }
    if (req.path == "/favicon.ico" && !chk) {
        chk = true;
        return res.sendFile(path.join(__dirname, "/../__main/favicon.ico"));
    }
    if (!chk) {
        process.httpstatuscode = "404";
        debug(req, process.httpstatuscode)
        return res.status(404).send(_404);
    }

    process.httpstatuscode = "200";
    debug(req, process.httpstatuscode);
    next();
}