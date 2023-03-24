//Including the required files
require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb')
const path = require('path')
const bodyParser = require('body-parser')
const crypto = require('crypto')

const app = express()

const uri = process.env.MONGO_URI  // mongodb url
// creates a new instance of the MongoClient
const client = new MongoClient(uri)

app.get('/', function (req, res) {     //route for signup page
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    return res.redirect('/public/index.html')
}).listen(5000)


app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const getHash = (pass) => {    // function for encrypt password
    const hash = crypto.createHash('sha256')
    const data = hash.update(pass)
    const gen_hash = data.digest("hex")
    return gen_hash
}

app.post('/sign_up', async (req, res) => {      
    let { name, email, pass, phone } = req.body   // getting data from frontend
    password = getHash(pass)       // hashing password
    const data = { name, email, password, phone }
    try {
        await client.connect()    // connect database
        const database = client.db('demo')
        database.collection('details').insertOne(data)   // storing user details in db
        console.log('Success');
        res.set({
            'Access-Control-Allow-Origin': '*'
        });
        return res.redirect('/public/success.html')   // after signup redirect user to success page
    } catch (error) {
        console.log(error);
    }
})