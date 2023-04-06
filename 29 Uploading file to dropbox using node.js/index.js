//Including the required moduless
require('dotenv').config()
const fs = require('fs');
const axios = require('axios');

//enter your access token
var access_token = process.env.access_token
//Name of the file to be uploaded
var filename = 'download.jpg';
//reading the contents 
var content = fs.readFileSync(filename);
//write your folder name in place of YOUR_PATH_TO_FOLDER
// For example if the folder name is file then we can write it in the following way :
// "Dropbox-API-Arg": "{\"path\": \"/file/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
options = {
  headers: {
    "Content-Type": "application/octet-stream",
    "Authorization": "Bearer " + access_token,
    "Dropbox-API-Arg": "{\"path\": \"/file/" + filename + "\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
  }
};

axios.post('https://content.dropboxapi.com/2/files/upload', { body: content }, options)
  .then(r => console.log(r.data))
