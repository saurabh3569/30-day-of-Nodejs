// Load environment variables from a .env file
require('dotenv').config()
const { MongoClient } = require('mongodb')
// Retrieve the MongoDB connection string from an environment variable
const uri = process.env.MONGO_URI
// creates a new instance of the MongoClient
const client = new MongoClient(uri)

const connect = async () => {
    try {
        await client.connect()  // connect database
        const database = client.db('demo')
        const query = { name: "saurabh" }      //query which we want to delete
        await database.collection('details').deleteMany(query)
        console.log('deleted');
    } catch (error) {
        console.log(error);
    }
}

connect()