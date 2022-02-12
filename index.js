const path = require('path');
const express = require('express');
const session = require('express-session');

const pizzasRoutes = require('./routes/pizzas');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'SENHA DE INVASÃO DA UCRÂNIA',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(pizzasRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(5000, () => console.log('Servidor em execução'));
