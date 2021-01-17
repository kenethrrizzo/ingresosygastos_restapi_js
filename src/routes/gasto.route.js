const { Router } = require("express");

const {
    getGastos,
    addGasto,
    updateGasto,
    deleteGasto,
} = require("../controllers/gasto.controller");

const router = Router();

router.route("/api/gasto")
    .get(getGastos)
    .post(addGasto);

router.route("/api/gasto/:id")
    .put(updateGasto)
    .delete(deleteGasto);

module.exports = router;