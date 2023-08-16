const { MongoClient } = require('mongodb');
const config = require("./configmongo.json");
const client = new MongoClient(config.connectionString, { useNewUrlParser: true });
const db = client.db("Emotiva")
module.exports = db;