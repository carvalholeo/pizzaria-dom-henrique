const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const { Usuario } = require('../database/models');

const saltRounds = 10;

const usuariosController = {
  cadastrar: async (req, res) => {
    const { nome, data_nascimento, email, cpf, senha } = req.body;

    const hash = bcrypt.hashSync(senha, saltRounds);
    
    const novoUsuario = await Usuario.create({
      nome,
      data_nascimento,
      email,
      cpf,
      senha: hash,
    });

    res.send(novoUsuario);
  },
  
  exibeFormularioCadastro: (req, res) => {
    res.render('cadastrar');
  },
  
  exibeFormularioLogin: (req, res) => {
    res.render('login');
  },
  
  fazerLogin: async (req, res) => {
    const { usuario, senha } = req.body;

    const meuUsuario = await Usuario.findOne({ where: { email: usuario } });

    if (!meuUsuario) {
      return res.send('Usuário ou senha inválidos');
    }

    const senhaEstaCorreta = bcrypt.compareSync(senha, meuUsuario.senha)

    if (!senhaEstaCorreta) {
      return res.send('Usuário ou senha inválidos');
    }

    delete meuUsuario.senha;
    
    req.session.usuario = meuUsuario;

    res.redirect('/');
  }
};

module.exports = usuariosController;
