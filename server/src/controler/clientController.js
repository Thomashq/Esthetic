const expressRoute = require("express");
const clientModelRoutes = require("../model/Client.js");

const router = expressRoute.Router();

//rota de get
router.get("/getClient", async (req, res) => {
  try {
    const client = await clientModelRoutes.find();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res
      .status(200)
      .json({ client, message: "Lista de pacientes carregada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/getClientByName", async (req, res) => {
  const name = req.body.Name;
  try {
    const client = await clientModelRoutes.findOne({ Name: name });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/getClientById", async (req, res) => {
  const id = req.body._id;
  try {
    const client = await clientModelRoutes.findOne({ _id: id });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//entrada de dados
router.post("/insertNewClient", async (req, res) => {
  const {
    Address,
    Age,
    Birthdate,
    Cellphone,
    Cep,
    City,
    District,
    Mail,
    Name,
    Profession,
    State,
  } = req.body;

  const client = {
    Address,
    Age,
    Birthdate,
    Cellphone,
    Cep,
    City,
    District,
    Mail,
    Name,
    Profession,
    State,
  };
  if (!Name) {
    res.status(422);
  }
  try {
    await clientModelRoutes.create(client);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(201).json({ message: "Paciente adicionado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/deleteClient", async (req, res) => {
  const id = req.body._id;
  try {
    await clientModelRoutes.deleteOne({ _id: id });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ message: "Paciente deletado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
