'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pizzas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      descricao: {
        type: Sequelize.STRING,
        unique: true
      },
      preco: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      tamanho: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING
      },
      usuarios_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_atualizacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pizzas');
  }
};