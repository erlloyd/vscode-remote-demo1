'use strict';

const express = require('express');
const giveMeAJoke = require('give-me-a-joke');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  giveMeAJoke.getRandomCNJoke(joke => {
    res.send(joke);
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
