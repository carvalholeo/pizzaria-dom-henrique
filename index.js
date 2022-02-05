const path = require('path');
const express = require('express');

const pizzasRoutes = require('./routes/pizzas');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(pizzasRoutes);

app.listen(5000, () => console.log('Servidor em execução'));
