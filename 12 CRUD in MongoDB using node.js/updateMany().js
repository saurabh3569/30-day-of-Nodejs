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
        const query = { name: "mishra" }  //query which we want to find
        const data = { $set: { name: "saurabh" } }  //data which we want to replace instead of query
        await database.collection('details').updateMany(query, data)
        console.log('Record updated successfully');
    } catch (error) {
        console.log(error);
    }
}

connect()