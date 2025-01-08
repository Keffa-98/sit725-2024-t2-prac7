const {MongoClient} = require('mongodb')

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"

const client = new MongoClient(uri)
try {
    client.connect()
    console.log("Connected to Mongo Database");
} catch (error) {
    throw error
}

module.exports = client