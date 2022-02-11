const fs = require('fs');
const path = require('path');

const usuariosController = {
  cadastrar: (req, res) => {
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo)

    const novoUsuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
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
