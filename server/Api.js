require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/controler/clientController.js");
const additionalInfoRoutes = require("./src/controler/additionalInfoController.js");
const capillaryRoutes = require("./src/controler/capillaryProcedureController.js");
const facialRoutes = require("./src/controler/facialProcedureController.js");
const bodyRoutes = require("./src/controler/bodyProcedureController.js");
const server = express();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;
//iniciar conexão com banco e abertura do servidor.
mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6ppaf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    server.listen(PORT);
    console.log("Conectado com sucesso");
    console.log(`Servidor está rodando na porta ${PORT}`);
  })
  .catch((err) => console.log(err));

server.use(cors());
server.use(express.json());
server.use("/client", routes);
server.use("/additionalInfo", additionalInfoRoutes);
server.use("/capillary", capillaryRoutes);
server.use("/facial", facialRoutes);
server.use("/bodyProcedure", bodyRoutes);
