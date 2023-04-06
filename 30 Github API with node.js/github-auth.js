const express = require('express');
const axios = require('axios');

const app = express();

const config = {
  client_id: process.env.client_secret,
  client_secret: process.env.client_secret,
  redirect_url: 'http://localhost:3000/github/callback',
  authorize_url: 'https://github.com/login/oauth/authorize',
  token_url: 'https://github.com/login/oauth/access_token',
  user_url: 'https://api.github.com/user',
  scope: 'user'
};

app.get('/github/auth', function (req, res) {
  // redirect the user to github authorization url
  return res.redirect(config.authorize_url);
});

app.get('/github/callback', function (req, res) {
  // extract authorize code
  const code = req.query.code;

  // configure axios params for POST request to get access token
  const tokenParams = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    code: code
  };

  // make a POST request to get auth_token
  axios.post(config.token_url, tokenParams, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then((tokenResponse) => {
      const authToken = tokenResponse.data.access_token;

      // configure axios params for GET request to fetch user information
      const userParams = {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'custom',
          'Authorization': 'token ' + authToken
        }
      };

      // make a GET request to fetch user information using auth_token
      axios.get(config.user_url, userParams)
        .then((userResponse) => {
          const userData = userResponse.data;
          const resp = {
            name: userData.name,
            url: userData.url,
            id: userData.id,
            bio: userData.bio
          };
          return res.json(resp);
        })
        .catch((userError) => {
          console.log(userError);
          return res.json(userError);
        });
    })
    .catch((tokenError) => {
      console.log(tokenError);
      return res.json(tokenError);
    });
});

app.listen(5000, () => {
  console.log('Server started');
});
