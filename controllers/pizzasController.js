const fs = require('fs');
const path = require('path');

const { Pizza } = require('../database/models');

const pizzasController = {
  exibeFormulario: (req, res) => {
    res.render('formulario-pizzas');
  },
  
  cadastraPizza: async (req, res) => {
    const { nome, preco } = req.body;
    const imagem = req.file.filename;

    const usuario = req.session.usuario;

    await Pizza.create({
      nome,
      preco,
      imagem,
      tamanho: '8 Pedaços',
      usuarios_id: usuario.id,  
    });

    res.redirect('/pizzas/lista');
  },
  
  exibeListaPizzas: async (req, res) => {
    const pizzas = await Pizza.findAll({ include: 'pizza_usuario' });

    res.render('lista-edicao', { pizzas });
  },
  
  apagarPizza: async (req, res) => {
    const { id } = req.params;

    await Pizza.destroy({ where: { id } });

    res.redirect('/pizzas/lista');
  },
  
  exibePizzaEdicao: async (req, res) => {
    const { id } = req.params;

    const pizza = await Pizza.findOne({ where: { id } });

    res.render('editar-pizza', { pizza });
  },
  
  salvaPizzaEditada: async (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const imagem = req.file.filename;

    const usuario = req.session.usuario;

    const pizza = await Pizza.findOne({ where: { id } });

    if(pizza.usuarios_id !== usuario.id)
      res.send('Você não tem permissão para editar essa pizza');

    pizza.nome = nome;
    pizza.preco = preco;
    pizza.imagem = imagem;

    await pizza.save();

    // await Pizza.update({
    //   nome,
    //   preco,
    //   imagem,
    //   usuarios_id: usuario.id,
    // }, { where: { id }});

    res.redirect('/pizzas/lista')
  }
}

module.exports = pizzasController;
