// Load environment variables from a .env file
require('dotenv').config()
const { MongoClient } = require('mongodb');
// Retrieve the MongoDB connection string from an environment variable
const uri = process.env.MONGO_URI
// creates a new instance of the MongoClient
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();  // connect database
    const database = client.db("demo");
    var data = { name : "saurabh" , age : "25" , mobile : "1111111111" }  //data which we want to insert into db
    await database.collection("details").insertOne(data);
    console.log("Record inserted successfully");
  } catch (error) {
    console.error('Failed to insert data to MongoDB', error);
  }
}

connect(); 
