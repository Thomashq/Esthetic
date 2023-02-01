const routes = require("express").Router();
const loginRoute = require("../model/Login");

routes.post("/registeruser", async (req, res) => {
  const { Token, Password } = req.body;

  const login = {
    Token,
    Password,
  };

  try {
    const newLogin = await loginRoute.create(login);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({
      newLogin,
      message: "Procedimento geral cadastrado com sucesso!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

routes.get("/getlogin", async (req, res) => {
  try {
    const login = await loginRoute.find();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({
      login,
      message: "Procedimento geral carregado com sucesso!",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = routes;
