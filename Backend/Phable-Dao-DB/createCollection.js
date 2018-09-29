var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url)
    .then((db) => {
        var dbo = db.db("mydb");
        dbo.createCollection("userDetails").then(()=>{console.log('collection created')});
        dbo.createCollection("authDB").then(()=>{console.log('collection created')});
        dbo.createCollection("sessionDB").then(()=>{console.log('collection created')});
});



/**
 * 1.  request_domain => 
 *  a. Check if input email is registered, if not throw apropriate error
 *  b. Check if input domain is registered, if not throw appropriate error
 *  c. Send an email to the regstered input email id with proper HTML 
 *      and having url in the form https://{host}/register_domain/{hex_encode_of_hash}
 *      random_iv = rand()
 *      key => config 
 *      user_data = {
 *          "email" : "mz@gmail.com",
 *          "domain" : "phable"
 *      }
 *      hash = aesEncryption(user_data, random_iv, key)
 *      final_hash = {"iv":"{random_iv}","hash":"{hash}"}
 *      hex_encode_of_hash = hex_encode(final_hash)     
 * 
 * 2. Host verify_domain_email API
 *      a. Check if input email is registered, if not throw apropriate error
 *      b. Check if input domain is registered, if not throw appropriate error
 *      do opposite of above
 *      Get domain and verify whether the domain is registered or email is registered, otherwise throw error
 * 
 * 3. create_domain API
 *    do opposite of above
 *      {
 *          "hash" : "hash",
 *          "password" : "password"
 *      }
 *    register in domain table
 *    add in auth db
 *    return 200
 * 
 * 2. login => 
 *      {
 *          'email' : 'email',
 *          'password' : 'password'
 *      }
 *      
 *      Add in session table with ts_expiry '8 hours'
 *      
 *      {
 *          '200',
 *          'session_id'
 *      }
 * 
 */