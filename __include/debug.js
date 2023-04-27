const status = {
    "404": "404: Not Found",
    "403": "403: Forbidden",
    "200": "200: Normal",
    "500": "500: Server Maintenance"
}

const {debug} = require("./options")

module.exports = (req, sts) => {
    let msg = `${req.method}: `
    msg+=`${status[sts]}, `
    msg+=`${req.path}`
    if (debug) console.log(msg);
}