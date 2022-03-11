require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');

const baseRoutes = require('./routes/index');
const pizzasRoutes = require('./routes/pizzas');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: process.env.SENHA_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use(baseRoutes);
app.use('/pizzas', pizzasRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(PORT, () => console.log('Servidor em execução'));
