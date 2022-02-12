const express = require('express');

const usuarioEstaLogado = require('../middlewares/usuarioEstaLogado');

const router = express.Router();

router.get('/', usuarioEstaLogado, (req, res) => {
  res.render('index')
});


module.exports = router;
