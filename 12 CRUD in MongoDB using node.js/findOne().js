require('dotenv').config()
const {MongoClient} = require('mongodb')
// Retrieve the MongoDB connection string from an environment variable
const uri = process.env.MONGO_URI
// creates a new instance of the MongoClient
const client = new MongoClient(uri)

async function connect(){
    try { 
       await client.connect() // connect database
       const database = client.db("demo")  
       const query = {name:"saurabh"} //query which we want to find
       const result = await database.collection("details").findOne(query)
       console.log(result); 
    } catch (error) {
       console.error('Failed to find data to MongoDB', error); 
    }
}

connect()