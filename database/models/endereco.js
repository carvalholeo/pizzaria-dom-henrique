'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Endereco.belongsTo(models.Usuario, {
        as: 'endereco_usuario',
        foreignKey: 'usuarios_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  Endereco.init({
    logradouro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ponto_referencia: DataTypes.STRING,
    usuarios_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Endereco',
    createdAt: 'data_criacao',
    updatedAt: 'data_atualizacao',
  });
  return Endereco;
};