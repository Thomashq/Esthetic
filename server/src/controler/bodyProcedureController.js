const routes = require("express").Router();
const bodyModelRoutes = require("../model/Body");

routes.post("/postBody", async (req, res) => {
  const {
    ClientId,
    Complaint,
    GeloidFibroEdema,
    GeloidEdemaType,
    GeloidEdemaDegree,
    GeloidEdemaLocation,
    GeloidEdemaColor,
    GeloidEdemaTemperature,
    GeloidEdemaPain,
    LockerTest,
    DigitPressureTest,
    FatType,
    FatDistribution,
    Biotype,
    TissueFlaccidity,
    TissueFlaccidityDegree,
    TissueFlaccidityPlace,
    MuscularFlaccidity,
    MuscularFlaccidityDegree,
    MuscularFlaccidityPlace,
    StriaeColor,
    StriaeWidth,
    StriaeType,
    StriaeQuantity,
    StriaeRegion,
    MicrovesselsTelangiectasias,
    MicrovesselsTelangiectasiasPlace,
    MicrovesselsTelangiectasiasColor,
    AdipometryDateLine1,
    AbdominalAdipometryLine1,
    SupraIliacAdipometryLine1,
    TricepsAdipometryLine1,
    BicepsAdipometryLine1,
    ToraxAdipometryLine1,
    SubscapularAdipometryLine1,
    AdipometryDateLine2,
    AbdominalAdipometryLine2,
    SupraIliacAdipometryLine2,
    TricepsAdipometryLine2,
    BicepsAdipometryLine2,
    ToraxAdipometryLine2,
    SubscapularAdipometryLine2,
    AdipometryDateLine3,
    AbdominalAdipometryLine3,
    SupraIliacAdipometryLine3,
    TricepsAdipometryLine3,
    BicepsAdipometryLine3,
    ToraxAdipometryLine3,
    SubscapularAdipometryLine3,
  } = req.body;
  const body = {
    ClientId,
    Complaint,
    GeloidFibroEdema,
    GeloidEdemaType,
    GeloidEdemaDegree,
    GeloidEdemaLocation,
    GeloidEdemaColor,
    GeloidEdemaTemperature,
    GeloidEdemaPain,
    LockerTest,
    DigitPressureTest,
    FatType,
    FatDistribution,
    Biotype,
    TissueFlaccidity,
    TissueFlaccidityDegree,
    TissueFlaccidityPlace,
    MuscularFlaccidity,
    MuscularFlaccidityDegree,
    MuscularFlaccidityPlace,
    StriaeColor,
    StriaeWidth,
    StriaeType,
    StriaeQuantity,
    StriaeRegion,
    MicrovesselsTelangiectasias,
    MicrovesselsTelangiectasiasPlace,
    MicrovesselsTelangiectasiasColor,
    AdipometryDateLine1,
    AbdominalAdipometryLine1,
    SupraIliacAdipometryLine1,
    TricepsAdipometryLine1,
    BicepsAdipometryLine1,
    ToraxAdipometryLine1,
    SubscapularAdipometryLine1,
    AdipometryDateLine2,
    AbdominalAdipometryLine2,
    SupraIliacAdipometryLine2,
    TricepsAdipometryLine2,
    BicepsAdipometryLine2,
    ToraxAdipometryLine2,
    SubscapularAdipometryLine2,
    AdipometryDateLine3,
    AbdominalAdipometryLine3,
    SupraIliacAdipometryLine3,
    TricepsAdipometryLine3,
    BicepsAdipometryLine3,
    ToraxAdipometryLine3,
    SubscapularAdipometryLine3,
  };
  try {
    const bodyModel = await bodyModelRoutes.create(body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({
      bodyModel,
      message: "Avaliação corporal Cadastrada com sucesso",
    });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});
<<<<<<< HEAD
routes.get("/getBodyByClientId", async (req, res) => {
    const id = req.body.ClientId;
    try{
        const body = await bodyModelRoutes.find({ ClientId: id });
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(body);
    } catch (err) {
        return res.status(400).send({ error: err });
    }
});
routes.get("/getBodyProcedures", async (req, res) => {
    try {
        const body = await bodyModelRoutes.find();
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(200).json({
            body,
            message: "Lista de avaliações corporais carregada com sucesso!",
        });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
});

routes.delete("/deleteBody", async (req, res) => {
    const {id} = req.body._id;
    try{
        await bodyModelRoutes.deleteOne({ _id: id });
        res.setHeader("Access-Control-Allow-Origin", "*");
        res
        .status(200)
        .json({ message: "Avaliação corporal deletada com sucesso" });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
=======

router.get("/getBodyByClientId", async (req, res) => {
  const id = req.body.ClientId;
  try {
    const body = await bodyModelRoutes.find({ ClientId: id });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(body);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.get("/getBody", async (req, res) => {
  try {
    const body = await bodyModelRoutes.find();
    console.log(2);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({
      body,
      message: "Lista de avaliações corporais carregada com sucesso!",
    });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.delete("/deleteBody", async (req, res) => {
  const { id } = req.body._id;
  try {
    await bodyModelRoutes.deleteOne({ _id: id });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res
      .status(200)
      .json({ message: "Avaliação corporal deletada com sucesso" });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
>>>>>>> fab117d5dc1568aeef487b3397010f461b3bb0d6
});

module.exports = routes;
