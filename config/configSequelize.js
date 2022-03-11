require('dotenv').config();

module.exports = {
  "username": process.env.USUARIO_DB,
  "password": process.env.SENHA_DB,
  "database": process.env.NOME_DB,
  "port": process.env.PORTA_DB,
  "host": process.env.HOST_DB,
  "dialect": process.env.DIALETO_DB
};
