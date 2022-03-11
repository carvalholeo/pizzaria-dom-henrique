const { Usuario } = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Usuario.create({
//   nome: 'Josicleison',
//   data_nascimento: '1945-09-01',
//   email: 'josicleison@digitalhouse.com',
//   cpf: '12345678904',
//   senha: 'super secreta da NASA',
//   data_criacao: new Date()
// });

// Usuario.findAndCountAll({
//   raw: true,
//   where: {
//     nome: {
//       [Op.like]: '%le%'
//     }
//   },
//   order: [
//     ['data_nascimento', 'ASC'],
//     ['id', 'DESC']
//   ]
// })
//   .then(console.log);

// const pagina = req.query.page || 0;
// const offset = (quantidade / 2) * pagina;

// Usuario.findOne({
//   where: {
//     admin: 1
//   }
// })
//   .then(console.log)

// Usuario.update({
//   nome: 'Nelson da Silva'
// }, {
//   where: {
//     id: 4
//   }
// })
//   .then(console.log)

// Usuario.findOne({where: {id:4}})
//   .then(result => {
//     result.nome = 'João Guimarães Rosa';
//     result.email = 'joao.guimaraes@embaixadaalemanha.com'

//     result.save()
//   })

// Usuario.destroy({
//   where: {
//     id: 1
//   }
// })
//   .then(console.log)

Usuario.findAll({
  include: 'usuario_pizza'
})
  .then(console.log)