const path = require('path');
const express = require('express');
const session = require('express-session');

const baseRoutes = require('./routes/index');
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
    secure: false
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(baseRoutes);
app.use('/pizzas', pizzasRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(5000, () => console.log('Servidor em execução'));
