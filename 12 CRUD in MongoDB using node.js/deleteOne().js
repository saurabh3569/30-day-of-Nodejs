// Load environment variables from a .env file
require('dotenv').config()
const { MongoClient } = require('mongodb')
// Retrieve the MongoDB connection string from an environment variable
const uri = process.env.MONGO_URI
// creates a new instance of the MongoClient
const client = new MongoClient(uri)

const connect = async () => {
    try {
        await client.connect()    // connect database
        const database = client.db('demo')   // get db collection
        const query = { name: "mishra" }   //query which we want to delete
        await database.collection('details').deleteOne(query)
        console.log('Successfully Deleted');
    } catch (error) {
        console.log(error);
    }
}

connect()