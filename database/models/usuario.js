'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(11),
      unique: true,
      allowNull: false
    },
    senha: DataTypes.STRING,
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    data_atualizacao:  {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    freezeTableName: true,
    tableName: 'usuarios',
    timestamps: false
  });
  return Usuario;
};