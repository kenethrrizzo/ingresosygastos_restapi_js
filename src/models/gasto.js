const { Model, DataTypes } = require("sequelize")
const sequelize = require("../database")

class Gasto extends Model {}

Gasto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detalle: DataTypes.STRING,
    precio: DataTypes.DOUBLE
},{
    sequelize,
    modelName: "gasto"
})

module.exports = Gasto;