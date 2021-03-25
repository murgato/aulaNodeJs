const express = require('express')
const App = express()
var logger = require('morgan');
const helmet = require('helmet');
var http = require('http');
const morgan = require('morgan')
const routes = require('./routers/index.routes')
const cors = require('cors')

App.use(cors());
App.use(helmet());
App.use(morgan('combined'));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(routes);
 
var server = http.createServer(App);

module.exports = server