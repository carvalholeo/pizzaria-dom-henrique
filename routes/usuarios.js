const express = require('express');

const usuariosController = require('../controllers/usuariosController');

const router = express.Router();

router.get('/cadastrar', usuariosController.exibeFormularioCadastro);

router.post('/cadastrar', usuariosController.cadastrar)


module.exports = router;
