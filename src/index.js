const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const sequelize = require("./database");
const gastoRoute = require("./routes/gasto.route");
const ingresoRoute = require("./routes/ingreso.route");

//settings
const PORT = process.env.PORT || 3000;

app = express();
app.set("port", PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use(gastoRoute);
app.use(ingresoRoute);

app.listen(app.get("port"), () => {
  console.log("Server in port " + app.get("port"));
  sequelize
    .sync()
    .then(() => {
      console.log("Base de datos conectada con éxito");
    })
    .catch((err) => {
      console.error(err);
    });
});
