var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var mongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var cakeData = require('./cakeData');

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

var mongoURL = 'mongodb://' + mongoUser+ ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
var mongoConnection = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.status(200).render('homePage', {
    cakesArray: cakeData,
  });
});

app.get('/aboutus', function(req, res, next) {
  res.status(200).render('aboutmePage');
});

app.get('/cakecart', function(req, res, next) {
  res.status(200).render('cakeCart');
});

app.get('/addcake', function(req, res, next) {
  res.status(200).render('addPage1');
});

app.get('/addcakeingredients', function(req, res, next) {
  res.status(200).render('addPage2');
});

app.get('/addcakedirections', function(req, res, next) {
  res.status(200).render('addPage3');
});

app.get('/addcakereview', function(req, res, next) {
  res.status(200).render('addPage3');
});

app.get('/recipe', function(req, res, next) {
  res.status(200).render('recipePage');
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
});

MongoClient.connect(mongoURL, function(err, connection){
	if(err){
		throw err;
	}
	mongoConnection = connection;
	app.listen(port, function () {
  	console.log("== Server is listening on port", port);
   });
});
