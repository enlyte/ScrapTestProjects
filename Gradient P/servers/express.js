const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
// ObjectId = mongo.ObjectID;
var ObjectId = require('mongodb').ObjectID;
// var mongoose = require('mongoose');

var fs = require('fs');
var tools = require('./logAndDate.js');

var writeFile = require("../js/writeDBToFile.js");

// var db;
var database;
var collection;

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('cache-control', 'x-requested-with');
  //"Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
})


function getClientIP(req){
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

        // GET //

app.get('/api/links', function getMessages(req, res) {
  // database.collection('DocObjects').find({}).exec(function(err, result){
  //   res.send(result);
  // var coll = database.collection('DocObjects');
  collection.find({}).toArray(function (err,result) {
                  if(err){

                    res.send(err);
                  } else {
                    // console.log("IP");
          					var userIP = getClientIP(req);
                    userIP += " - Visit";
                    tools.writeToUsageLog(userIP);

          					var todaysDate = tools.getDate();
                    fs.writeFile('docObjects.json', "var docObjectsJSON = " + JSON.stringify(result, null, 3));

                    fs.writeFile('../docHistory/docObjects-'+ todaysDate +'.json', JSON.stringify(result, null, 3));
                    // writeFile.writeObjectsToJSONFile(result);

                    // res.send(JSON.stringify(result));
                    res.send(result);
                  }
              })
});

                // Mongo Post //

app.post('/api/links', function(req, res){
  // database.collection('DocObjects').insertOne(req.body, function(){
    collection.insertOne(req.body, function(){
    // writeFile.writeObjectsToJSONFile(res);

    var userIP = getClientIP(req);
    userIP += " - Create New";
    tools.writeToUsageLog(userIP);

    console.log("Worked");

    res.send("Complete");
  });
})


//          Delete File

app.post('/api/links/delete/:id', function(req, res){
    var id = req.params.id;
    database.collection('DocObjects').remove({"linkID": id }, function(){
      // writeFile.writeObjectsToJSONFile(res);
      var userIP = getClientIP(req);
      userIP += " - Delete";
      tools.writeToUsageLog(userIP);

      res.send("Completed Delete");
    });
})

// UPDATE File

app.post('/api/links/update/:id', function(req, res) {

    var linkIDToUpdate = req.params.id;

    var body = req.body;
    // console.log(body);
    database.collection('DocObjects').update({"linkID" : linkIDToUpdate},{$set:{'name':body.name, 'hyperlink': body.hyperlink, 'description': body.description, arraySearchWords: body.arraySearchWords}}, function (err, result) {

      var userIP = getClientIP(req);
  	  userIP += " - Update";
  	  tools.writeToUsageLog(userIP);

        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});




// var mongoEndpoint = 'mongodb://boskb.qas.com:27017/QuickDocs';
// var mongoEndpoint = "mongodb://admin:Hello123@localhost:27017/QuickDocs";
var mongoEndpoint = "mongodb://admin:Hello123@boskb.qas.com:27017/QuickDocs";
mongo.connect(mongoEndpoint, function(err, db) {
  if(!err) {
    console.log("We are connected to Mongo");
    database = db;
    collection = db.collection('DocObjects');

  } else {
    console.log("Error connecting to Mongo");
  }
});

// app.set('port', process.env.PORT || 3000); // Set port or default to 3000
app.set('port', process.env.PORT || 8080); // Set port or default to 3000

var server = app.listen(app.get('port'), function () {
  console.log('Express is connected and listening on port ' + app.get('port'));
  console.log("Go to http://localhost:" + app.get('port') + " on your browser"); // Out to Terminal

})
