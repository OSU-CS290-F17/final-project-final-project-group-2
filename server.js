 var path = require('path');
 var express = require('express');
 var exphbs = require('express-handlebars');
 var bodyParser = require('body-parser');
 var MongoClient = require('mongodb').MongoClient;


 var app = express();
 var port = process.env.PORT || 3001;
 var cakeData = require('./cakeData');

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

 app.get('/cakecart', function(req, res, next) {
    var cart = true;
    var cakeDataCollection = mongoConnection.collection('cakeCart');
    cakeDataCollection.find({}).toArray(function(err, results){
    	if(err){
 		     res.status(500).send("Error fetching cake Data from DB.");
 	    }else{
 		     console.log("== query results:", results);
 		      res.status(200).render('homePage',{
 			        cakesArray: results,
              cartTrue: cart
 		      });
 	    }
    });
 });

 app.get('/aboutus', function(req, res, next) {
   res.status(200).render('aboutmePage');
 });

 app.get('/recipe/:cakeId', function(req, res, next) {
    var cakeDataCollection = mongoConnection.collection('cs290FinalProject');
    cakeDataCollection.find({cakeId: req.params.cakeId}).toArray(function(err, results){
    	if(err){
 		     res.status(500).send("Error fetching cake Data from DB.");
 	    }else if (results.length > 0){
 		     console.log("== query results:", results);
 		      res.status(200).render('recipePage', results[0]);
 	    }
      else{
        next();
      }
    });
 });

 app.get('/modal/:cakeId', function(req, res, next) {
    var cakeDataCollection = mongoConnection.collection('cs290FinalProject');
    cakeDataCollection.find({cakeId: req.params.cakeId}).toArray(function(err, results){
    	if(err){
 		     res.status(500).send("Error fetching cake Data from DB.");
 	    }else if (results.length > 0){
 		     console.log("== query results:", results);
 		      res.status(200).render('modalPage', results[0]);
 	    }
      else{
        next();
      }
    });
 });

 app.get('*', function (req, res) {
   res.status(404).render('404');
 });

app.post('/addCake', function (req, res, next){
  if (req.body && req.body.title) {
    var cakeDataCollection = mongoConnection.collection('cs290FinalProject');

    cakeDataCollection.insertOne(
      {
        cakeId: req.body.cakeId,
        type: req.body.type,
        dietaryTag: req.body.dietaryTag,
        serves: req.body.serves,
        prepTime: req.body.prepTime,
        cookTime: req.body.cookTime,
        photoURL: req.body.photoURL,
        directions: req.body.directions,
        ingredients: req.body.ingredients,
        title: req.body.title
      },
      function (err, result) {
        if (err) {
          res.status(500).send("Error fetching cakes from DB");
        } else {
          res.status(200).send("Success");
        }
      }
    );

  } else {
    res.status(400).send("Request body needs a `title` field.");
  }
});

app.post('/addCakeToCart', function (req, res, next){
  if (req.body && req.body.cakeId) {
    var cakeDataCollection = mongoConnection.collection('cakeCart');

    cakeDataCollection.insertOne(
      {
        cakeId: req.body.cakeId,
        photoURL: req.body.photoURL
      },
      function (err, result) {
        if (err) {
          res.status(500).send("Error fetching cakes from DB");
        } else {
          res.status(200).send("Success");
        }
      }
    );

  } else {
    res.status(400).send("Request body needs a `cakeId` field.");
  }
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
