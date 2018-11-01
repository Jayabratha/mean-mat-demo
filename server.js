// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Get our API routes
//const api = require('./backend/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
//app.use('/api', api);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Environment Port
app.set('port', process.env.PORT || 3000);

/*Create Server and Listen on 1337*/
var server = app.listen(app.get('port'), function() {
	console.log('Server started on port' + server.address().port);
});