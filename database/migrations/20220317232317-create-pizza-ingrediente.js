'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pizzas_has_ingredientes', {
      pizzas_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'pizzas',
          key: 'id'
        }
      },
      ingredientes_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'ingredientes',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      unidade_de_medida: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pizzas_has_ingredientes');
  }
};