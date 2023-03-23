// Load environment variables from a .env file
require('dotenv').config()
const { MongoClient } = require('mongodb')
// Retrieve the MongoDB connection string from an environment variable
const uri = process.env.MONGO_URI
// creates a new instance of the MongoClient
const client = new MongoClient(uri)

async function connect(){
    try {
        await client.connect();   // connect database
        const database = client.db('demo')
        const result = await database.collection("details").find({}).toArray()   // got all data in array form
        console.log(result);
    } catch (error) {
     console.log(error);   
    }
}

connect()