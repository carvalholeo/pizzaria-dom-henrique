'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pizza.belongsTo(models.Usuario, {
        as: 'pizza_usuario',
        foreignKey: 'usuarios_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      });

      Pizza.belongsToMany(models.Ingrediente, {
        through: 'PizzaIngrediente',
        as: 'pizza_ingrediente',
        foreignKey: 'pizzas_id'
      })
    }
  }
  Pizza.init({
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    descricao: {
      type: DataTypes.STRING,
      unique: true
    },
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tamanho: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING
    },
    usuarios_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Pizza',
    tableName: 'pizzas',
    createdAt: 'data_criacao',
    updatedAt: 'data_atualizacao',
  });
  return Pizza;
};