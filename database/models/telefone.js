'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Telefone.belongsTo(models.Usuario, {
        as: 'telefone_usuario',
        foreignKey: 'usuarios_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  Telefone.init({
    ddd: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    usuarios_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Telefone',
    createdAt: 'data_criacao',
    updatedAt: 'data_atualizacao'
  });
  return Telefone;
};