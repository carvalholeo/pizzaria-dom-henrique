const express = require('express');

const usuariosController = require('../controllers/usuariosController');

const router = express.Router();

router.get('/cadastrar', usuariosController.exibeFormularioCadastro);
router.post('/cadastrar', usuariosController.cadastrar)

router.get('/login', usuariosController.exibeFormularioLogin)
router.post('/login', usuariosController.fazerLogin);


module.exports = router;
