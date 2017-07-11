// https://stackoverflow.com/questions/41477386/sql-server-connection-to-node-js

var sql = require('mssql');
// config for your database
var config = {
    user: 'dbo',
    password: '',
    // server: 'localhost',
    server: 'bospsns1.qas.com',
    database: 'StevePrax'
};

// connect to your database
sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    var sqlCall = `SELECT City, State, Zipcode
      FROM [StevePrax].[dbo].[PraxDataSheet-Name-Address-Email-Phone]
      WHERE City IN ('Boston', 'Waltham', 'Los Angeles')`;

    // query to the database and get the records
    // request.query('select * from Student', function (err, recordset) {
    request.query(sqlCall, function (err, recordset) {
        if (err) console.log(err)
        // send records as a response
        console.log(recordset);
        // res.send(recordset);
    });
});


///// With Express

var express = require('express');
var sql = require('mssql');
var http = require('http');

var webconfig = {
user: 'login',
password: 'sa@123',
server: 'localhost',
database: 'TestDB',
options: {
    encrypt: false // Use this if you're on Windows Azure
  }
}

var connection = new sql.Connection(webconfig, function(err) {
var request = new sql.Request(connection);
  request.query('select * from Users', function(err, recordset) {
     if(err)      // ... error checks
          console.log('Database connection error');

  console.dir("User Data: "+recordset);
  });
});

var app = express();
var port = process.env.PORT || 8000;


  // or visit here : https://nodejsbeginersprograms.blogspot.in/2017/02/nodejs-basic-tutorial-with-mssql.html
