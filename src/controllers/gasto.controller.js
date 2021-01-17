const { where } = require("sequelize");
const Gasto = require("../models/gasto");

async function getGastos(req, res) {
    const gastos = await Gasto.findAll();
    if (!gastos) {
        return res.status(404).json({
            status: 404,
            message: "No data found",
        });
    }
    return res.status(200).json(gastos);
}

async function addGasto(req, res) {
    const newGasto = Gasto.build({
        detalle: req.body.detalle,
        precio: req.body.precio,
    });
    await newGasto.save();
    if (!newGasto) {
        return res.status(404).json({
            status: 404,
            message: "No data found",
        });
    }
    return res.status(200).json({
        status: 200,
        message: "Data saved successfully",
    });
}

async function updateGasto(req, res) {
    const id = req.params.id;
    const gasto = await Gasto.update(
        {
            detalle: req.body.detalle,
            precio: req.body.precio,
        },
        {
            where: { id: id },
        }
    );
    if (!gasto) {
        return res.status(404).json({
            status: 404,
            message: "No data found",
        });
    }
    return res.status(200).json({
        status: 200,
        message: "Data updated successfully",
    });
}

async function deleteGasto(req, res) {
    const id = req.params.id;
    const gasto = await Gasto.destroy({
        where: { id: id },
    });
    if (!gasto) {
        return res.status(404).json({
            status: 404,
            message: "No data found",
        });
    }
    return res.status(200).json({
        status: 200,
        message: "Data deleted successfully",
    });
}

module.exports = { getGastos, addGasto, updateGasto, deleteGasto };
