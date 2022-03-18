'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ingrediente.belongsToMany(models.Pizza, {
        through: 'PizzaIngrediente',
        as: 'ingrediente_pizza',
        foreignKey: 'ingredientes_id'
      })
    }
  }
  Ingrediente.init({
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Ingrediente',
    tableName: 'ingredientes',
    freezeTableName: true
  });
  return Ingrediente;
};