const express = require('express');
const app = express();
const port = 8000;

app.get('*', (req, res) => {
  res.send(req.url.slice(1));
});

app.listen(port, () => {
  console.log(`Server running at ${port} port...`);
});