const { Usuario } = require('../database/models');

// Usuario.create({
//   nome: 'Josicleison',
//   data_nascimento: '1945-09-01',
//   email: 'josicleison@digitalhouse.com',
//   cpf: '12345678904',
//   senha: 'super secreta da NASA',
//   data_criacao: new Date()
// });

Usuario.findAll({raw: true})
  .then(console.log)