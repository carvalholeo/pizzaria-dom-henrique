const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
  res.send('chegou aqui')
})

app.listen(5000, () => console.log('Servidor em execução'));
