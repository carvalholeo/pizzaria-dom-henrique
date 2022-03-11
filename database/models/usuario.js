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
      Usuario.hasMany(models.Pizza, {
        as: 'usuario_pizza',
        foreignKey: 'usuarios_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION',
      });

      Usuario.hasMany(models.Telefone, {
        as: 'usuario_telefones',
        foreignKey: 'usuarios_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });

      Usuario.hasMany(models.Endereco, {
        as: 'usuario_enderecos',
        foreignKey: 'usuarios_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
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
    // data_criacao: {
    //   type: DataTypes.DATE,
    //   defaultValue: new Date(),
    // },
    // data_atualizacao:  {
    //   type: DataTypes.DATE,
    //   defaultValue: new Date(),
    // },
    // destroyTime:  {
    //   type: DataTypes.DATE,
    //   defaultValue: new Date(),
    // }
  }, {
    sequelize,
    modelName: 'Usuario',
    freezeTableName: true,
    tableName: 'usuarios',
    timestamps: true,
    paranoid: true,
    deletedAt: 'destroyTime',
    updatedAt: 'data_atualizacao',
    createdAt: 'data_criacao',
  });
  return Usuario;
};