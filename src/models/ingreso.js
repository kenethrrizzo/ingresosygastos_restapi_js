const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Ingreso extends Model {}

Ingreso.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    detalle: DataTypes.STRING,
    monto: DataTypes.DOUBLE,
  },
  {
    sequelize,
    modelName: "gasto",
  }
);

module.exports = Ingreso;
