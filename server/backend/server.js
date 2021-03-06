const express = require('express');
let MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5000;

// use when starting application locally
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "test";

MongoClient.connect(mongoUrlLocal, mongoClientOptions, function(err, client) {
    if (err) throw err;

    let db = client.db(databaseName);

    let myquery = { userid: 1 };
    let newvalues = { $set: { "name": "abhilash" } };

    db.collection("users").updateOne(myquery, newvalues, { upsert: true }, function(err, res) {
        if (err) throw err;
        client.close();
    });

});

app.listen(port, () => {
    console.log(`Server is up and runing on port ${port}`);
})