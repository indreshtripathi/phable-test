var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbOperation = {
    connection: '',
    instance: null,
    createConnection: function () {    
        MongoClient.connect(url);
    },

    closeConnection: function () {
        database.close();
    },

    insertRows: function (tableName, records) {
        dbo.collection(tableName).insertMany(records);
    },

    findAll: function() {
        dbo.collection(tableName).find({});
    },

    updateRows: function (query, records) {
        dbo.collection(tableName).updateOne(query, records);
    }
}