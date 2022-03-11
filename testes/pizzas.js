const {Pizza} = require('../database/models');

// Pizza.findAll({
//   include: 'pizza_usuario'
// })
//   .then(console.log)

Pizza.findOne({
  where: {
    nome: 'Aliche'
  },
  include: 'pizza_usuario'
})
  .then(resposta => resposta.toJSON())
  .then(console.log)