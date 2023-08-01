const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;
const password = 'password';

app.get('/encode/:password', (req, res) => {
  const userPassword = req.params.password;

  res.send(Vigenere.Cipher(password).crypt(userPassword));
});

app.get('/decode/:password', (req, res) => {
  const userPassword = req.params.password;

  res.send(Vigenere.Decipher(password).crypt(userPassword));
});

app.get('*', (req, res) => {
  res.status(404);
  res.send('Not Found!');
});

app.listen(port, () => console.log(`Server running at ${port} port...`));