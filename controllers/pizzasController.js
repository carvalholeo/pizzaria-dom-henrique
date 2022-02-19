const fs = require('fs');
const path = require('path');


const pizzasController = {
  exibeFormulario: (req, res) => {
    res.render('formulario-pizzas');
  },
  cadastraPizza: (req, res) => {
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo)

    const novaPizza = {
      nome: req.body.nome,
      preco: req.body.preco,
      imagem: req.file.filename
    }

    objeto.pizzas.push(novaPizza);
    const objetoEmString = JSON.stringify(objeto);
    fs.writeFileSync(path.join(__dirname, '..', 'database', 'banco.json'), objetoEmString);

    res.redirect('/pizzas/lista');
  },
  exibeListaPizzas: (req, res) => {
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo)
    const meuLanchinho = objeto.pizzas;

    res.render('lista-edicao', {pizzas: meuLanchinho});
  }
}

module.exports = pizzasController;
