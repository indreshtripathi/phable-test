var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var instance = null;

var DBOperations = () => {
    return new Promise((resolve, reject) => {
        this.createConnection()
            .then((conn) => {
                this.connection = conn.db('PhableDB');
                resolve(this);
            });
    });
}

DBOperations.getInstance = () => {
    if (!instance) {
        return new Promise((resolve, reject) => {
            new DBOperations()
                .then((obj) => {
                    instance = obj;
                    resolve(instance);
                });
        });
    }

    return new Promise((resolve) => {
        resolve(instance);
    })
}

DBOperations.prototype.createConnection =  function () {    
    return MongoClient.connect(url);
},

DBOperations.prototype.closeConnection =  function () {
    this.connection.close();
},

DBOperations.prototype.insertRows =  function (tableName, records) {
    return this.connection.collection(tableName).insertMany(records);
},

DBOperations.prototype.findAll =  function() {
    return this.connection.collection(tableName).find({});
},

DBOperations.prototype.updateRows =  function (tableName, query, records) {
    return this.connection.collection(tableName).updateOne(query, records);
}

module.exports = DBOperations;