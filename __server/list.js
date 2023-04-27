const utils = require("../__include/utils")
const path = require("path")
const config = require("../__include/options");
const { link } = require("fs");
const express = require('express');

module.exports = (req, res, next) => {
    var p = req.path;
    if (p.split("/").pop() !== "") p = p + "/";
    var list = utils.readDir([`${config.path}${req.path}`]);
    
    if (utils.isDir(`${config.path}${req.path}`)) return res.render (path.join(__dirname, "/../__main/list.ejs"), {
        title: p,
        list: list,
        back: p + ".."
    });
    next();
}