'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PizzaIngrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PizzaIngrediente.belongsTo(models.Pizza, {
        as: 'pizza_para_ingrediente',
        foreignKey: 'pizzas_id',
        onDelete: 'CASCADE'
      });

      PizzaIngrediente.belongsTo(models.Ingrediente, {
        as: 'ingrediente_para_pizza',
        foreignKey: 'ingredientes_id',
        onDelete: 'RESTRICT'
      });
    }
  }
  PizzaIngrediente.init({
    pizzas_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    ingredientes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    quantidade: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unidade_de_medida: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PizzaIngrediente',
    tableName: 'pizzas_has_ingredientes',
    freezeTableName: true,
    timestamps: false,
  });
  // PizzaIngrediente.removeAttribute('id');
  return PizzaIngrediente;
};