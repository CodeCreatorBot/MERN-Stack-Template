const express = require('express');
let MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server is runing and listening to port ${port}`);
})