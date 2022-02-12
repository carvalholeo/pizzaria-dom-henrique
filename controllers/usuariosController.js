const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usuariosController = {
  cadastrar: (req, res) => {
    const saltRounds = 10;
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo)

    const hash = bcrypt.hashSync(req.body.senha, saltRounds);

    const novoUsuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: hash,
      eh_admin: false
    }
    objeto.usuarios.push(novoUsuario);
    const objetoEmString = JSON.stringify(objeto);

    fs.writeFileSync(path.join(__dirname, '..', 'database', 'banco.json'), objetoEmString);

    console.log(req.body)
    res.send(objeto.usuarios)
  },
  exibeFormularioCadastro: (req, res) => {
    res.render('cadastrar');
  }
};

module.exports = usuariosController;
