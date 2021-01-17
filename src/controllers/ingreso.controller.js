const Ingreso = require("../models/ingreso");

async function getIngresos(req, res) {
  const ingresos = await Ingreso.findAll();
  if (!ingresos) {
    return res.status(404).json({ message: "Data not found" });
  }
  return res.status(200).json(ingresos);
}

async function addIngreso(req, res) {
  const newIngreso = await Ingreso.build({
    detalle: req.body.detalle,
    monto: req.body.monto,
  });
  await newIngreso.save();
  if (!newIngreso) {
    return res.status(500).json({ message: "Data can't be added" });
  }
  return res.status(200).json({ message: "Data added successfully" });
}

async function updateIngreso(req, res) {
  const ingreso = await Ingreso.update(
    {
      detalle: req.body.detalle,
      monto: req.body.monto,
    },
    {
      where: { id: req.params.id },
    }
  );
  if (!ingreso) {
    return res.status(500).json({ message: "Data can't be updated" });
  }
  return res.status(200).json({ message: "Data updated successfully" });
}

async function deleteIngreso(req, res) {
  const ingreso = await Ingreso.destroy({
    where: { id: req.params.id },
  });
  if (!ingreso) {
    return res.status(500).json({ message: "Data can't be deleted" });
  }
  return res.status(200).json({ message: "Data deleted successfully" });
}

module.exports = { addIngreso, getIngresos, updateIngreso, deleteIngreso };
