const { Router } = require("express");

const {
  getIngresos,
  addIngreso,
  updateIngreso,
  deleteIngreso,
} = require("../controllers/ingreso.controller");

const router = Router();

router.route("/api/ingreso").get(getIngresos).post(addIngreso);

router.route("/api/ingreso/:id").put(updateIngreso).delete(deleteIngreso);

module.exports = router;
