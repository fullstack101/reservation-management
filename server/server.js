const express = require('express');

const app = express();

const fs = require('fs');

const indexHTML = fs.readFileSync('./client/index.html');

app.get('/', (req, res) => {
  res.end(indexHTML);
});

app.listen(8080);
