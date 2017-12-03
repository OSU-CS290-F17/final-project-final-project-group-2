var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

//var cakeData = require('./cakeData');

var mongoURL = 'mongodb://cs290_crawfama:cs290_crawfama@classmongo.engr.oregonstate.edu:27017/cs290_crawfama';

var mongoConnection = null;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
   var cakeDataCollection = mongoConnection.collection('cs290FinalProject');
   cakeDataCollection.find({}).toArray(function(err, results){
   	if(err){
		res.status(500).send("Error fetching cake Data from DB.");
	}else{
		console.log("== query results:", results);
		res.status(200).render('homePage',{
			cakesArray: results
		});
	}
   
   });
   
});

app.use(express.static('public'));
/*
app.get('/modal', function(req, res, next) {
  res.status(200).render('modalPage');
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

app.get('*', function (req, res) {
  res.status(404).render('404');
});
*/
MongoClient.connect(mongoURL, function(err, connection){
	if(err){
		throw err;
	}
	mongoConnection = connection;
	app.listen(port, function () {
  	console.log("== Server is listening on port", port);
	});
});
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
