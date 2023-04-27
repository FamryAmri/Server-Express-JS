const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const os = require('os');

const utils = require("./utils")
const config = require("./options")
const debug = require('./debug')

var app = express();

app.set('view engine', 'ejs')

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(require("../__server/error"));
app.use(express.static(config.path));
app.use(require("../__server/list"));


module.exports.start = () => {
    app.listen(config.port, () => {
        console.log(`Server started\t: http://localhost:${config.port}`)
        console.log(`Work on\t\t: ${config.path}`)
        console.log(`More details\t: (CTRL + C) to stop | ${utils.runner} --help`)

        console.log("\t\t --- DEBUG | ERROR ---")
    });
}