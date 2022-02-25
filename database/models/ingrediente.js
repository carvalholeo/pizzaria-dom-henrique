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
    }
  }
  Ingrediente.init({
    nome: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Ingrediente',
    tableName: 'ingredientes',
    freezeTableName: true
  });
  return Ingrediente;
};