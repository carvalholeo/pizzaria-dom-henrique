const { Ingrediente } = require('../database/models');

Ingrediente.findAll({ raw: true})
  .then(console.log)

Ingrediente.create({
  nome: 'Muçarela'
});