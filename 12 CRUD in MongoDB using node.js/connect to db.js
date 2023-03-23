// Load environment variables from a .env file
require('dotenv').config()
const { MongoClient } = require('mongodb');
// Retrieve the MongoDB connection string from an environment variable
const uri = process.env.MONGO_URI    // mongodb url
// creates a new instance of the MongoClient
const client = new MongoClient(uri);

async function connect() {     // connect to mongodb
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

async function disconnect() {        // disconnect to mongodb
  try {
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Failed to disconnect from MongoDB', error);
  }
}

// Use connect() and disconnect() functions to connect/disconnect to/from MongoDB.

// Example usage:
(async () => {
  await connect();
  await disconnect();
})();
