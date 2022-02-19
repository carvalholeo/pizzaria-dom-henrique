const express = require('express');

const pizzasController = require('../controllers/pizzasController');

const usuarioEhAdmin = require('../middlewares/usuarioEhAdmin');
const uploadFotos = require('../middlewares/uploadFotos');

const router = express.Router();

router.use(usuarioEhAdmin);

router.get('/cadastrar', pizzasController.exibeFormulario);
router.post('/cadastrar', uploadFotos, pizzasController.cadastraPizza);
router.get('/lista', pizzasController.exibeListaPizzas);
router.delete('/:id', pizzasController.apagarPizza);
router.get('/:id', pizzasController.exibePizzaEdicao);
router.patch('/:id', uploadFotos, pizzasController.salvaPizzaEditada);

module.exports = router;
