'use strict';

// Load required packages
const express = require('express'),
      morgan = require('morgan'),
      compression = require('compression'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      cookieParser = require('cookie-parser'),
      errorHandler = require('errorhandler'),
      path = require('path');

    
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Setup server
const app = express(),
      port = process.env.PORT || 3000,
      router = express.Router();

const staticOptions = {
      dotfiles: 'ignore',
      etag: true,
      extensions: ['htm', 'html'],
      index: 'index.html',
      lastModified:true,
      maxAge: '1d',
      setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
        res.header('Cache-Control', 'public, max-age=1d');
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      }
}


app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
//app.use(cookieParser());

//app.use("/scripts/", express.static(__dirname + '/node_modules/'));
app.use("/scripts/", express.static(__dirname + '/public/'));

//app.use('/api', path);
app.use('/', express.static('public', staticOptions ));
app.use('*', express.static('public', staticOptions ));

app.use(morgan('dev'));

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// Start the server
app.listen(port, function(){
  console.log('server running on port ' + port);
});


// Expose app
//exports = module.exports = app;
module.exports = app;