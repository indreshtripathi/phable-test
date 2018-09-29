var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/PhableDB";

MongoClient.connect(url)
.then(() => {
  console.log("Database created!");
  db.close();
});