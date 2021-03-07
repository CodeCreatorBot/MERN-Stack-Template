const express = require('express');
let MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// use when starting application locally
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "admin";

mongoose.connect(`${mongoUrlDocker}/${databaseName}`, mongoClientOptions).then(
    () => { console.log(`Mongooose Connection Succesful with ${databaseName}!`) }
).catch(
    console.log(`Mongooose Connection Unsuccesful :(`)
);

/*app.post('/update-profile', function(req, res) {
    let userObj = req.body;

    MongoClient.connect(mongoUrlDocker, mongoClientOptions, function(err, client) {
        if (err) throw err;

        let db = client.db(databaseName);
        userObj['userid'] = 1;

        let myquery = { userid: 1 };
        let newvalues = { $set: userObj };

        db.collection("users").updateOne(myquery, newvalues, { upsert: true }, function(err, res) {
            if (err) throw err;
            client.close();
        });

    });
    // Send response
    res.send(userObj);
});

app.get('/get-profile', function(req, res) {
    let response = {};
    // Connect to the db
    MongoClient.connect(mongoUrlDocker, mongoClientOptions, function(err, client) {
        if (err) throw err;

        let db = client.db(databaseName);

        let myquery = { userid: 1 };

        db.collection("users").findOne(myquery, function(err, result) {
            if (err) throw err;
            response = result;
            client.close();

            // Send response
            res.send(response ? response : {});
        });
    });
});
*/
app.listen(port, () => {
    console.log(`Server is up and runing on port ${port}`);
})