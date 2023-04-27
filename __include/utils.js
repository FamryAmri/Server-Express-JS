var execPath = process.execPath;
var realpath = execPath.split("\\");
realpath.shift();
var runner = realpath.pop();

realpath = realpath.join("/");

module.exports.path = require('path');
module.exports.runner = runner;
module.exports.realpath = realpath;
module.exports.execPath = execPath;

module.exports.isDir = isDir = (d) => {
    var {statSync, existsSync} = require ('fs');
    if (existsSync(d) && statSync(d).size == 0) return true;
    return false;
}

module.exports.readDir = (d) => {
    var {readdirSync, existsSync} = require('fs');
    var fs = [];

    if (!this.isDir(d[0])) return fs;
    if (existsSync(d[0])) fs = readdirSync (d[0], "utf-8");
    return fs
}

module.exports.checkDir = (d) => {
    var {readdirSync, existsSync} = require('fs');
    var fs = false;

    if (existsSync(d[0])) fs = true;
    return fs;
}

module.exports.__check = () => {
    var path = require('path');
    path = path.join(__dirname, "/../");
    var dtb = this.readDir([path]);

    // no need extract node modules
    dtb.forEach(v => {
        if (this.isDir(v)) {
            if (v == "node_modules") return;
            console.log(`./extract/${v}`);
            var d = this.readDir([path + v])
            d.forEach(f => {
                console.log(`./extract/${v}/${f}`);
            });
        } else {
            console.log(`./extract/${v}`)
        }
    })
}

// you just checking here?