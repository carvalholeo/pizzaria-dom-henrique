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
  },
  apagarPizza: (req, res) => {
    const {id} = req.params;
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo);
    const pizzasNaoApagadas = objeto.pizzas.filter(pizza => pizza.id !== Number(id));

    objeto.pizzas = pizzasNaoApagadas;
    const objetoEmString = JSON.stringify(objeto);
    fs.writeFileSync(path.join(__dirname, '..', 'database', 'banco.json'), objetoEmString);

    res.redirect('/pizzas/lista');
  },
  exibePizzaEdicao: (req, res) => {
    const {id} = req.params;
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo);

    const pizza = objeto.pizzas.find(pizza => pizza.id === Number(id));

    res.render('editar-pizza', {pizza: pizza});
  },
  salvaPizzaEditada: (req, res) => {
    const {id} = req.params;
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
      encoding: 'utf-8'
    });
    const objeto = JSON.parse(arquivo);

    const posicao = objeto.pizzas.findIndex(pizza => pizza.id === Number(id));

    objeto.pizzas[posicao] = {
      ...objeto.pizzas[posicao],
      nome: req.body.nome,
      preco: req.body.preco,
      imagem: req.file.filename
    }

    const objetoEmString = JSON.stringify(objeto);
    fs.writeFileSync(path.join(__dirname, '..', 'database', 'banco.json'), objetoEmString);

    res.redirect('/pizzas/lista')
  }
}

module.exports = pizzasController;
