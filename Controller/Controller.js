var express = require('express');
var controller = express.Router();
var services = require('../Services/services')
var Services = new services()

/* GET users listing. */
controller.post('/post/folio/concat', Services.requestFolio);

module.exports = controller;