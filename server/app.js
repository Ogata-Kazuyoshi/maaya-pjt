const express = require('express');

const temp = {
  1: 100,
  2: 200,
  3: 300,
};

const app = express();

app.get('/data', (req, res) => {
  res.send(temp);
});

app.listen(3000, () => {
  console.log('server is running');
});
