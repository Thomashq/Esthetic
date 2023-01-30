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
        TissueFlaccidityDegree,
        TissueFlaccidityPlace,
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
        AdipometryDate,
        AbdominalAdipometry,
        SupraIliacAdipometry,
        TricepsAdipometry,
        BicepsAdipometry,
        ToraxAdipometry,
        SubscapularAdipometry,
    } = req.body;
    const body ={
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
        TissueFlaccidityDegree,
        TissueFlaccidityPlace,
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
        AdipometryDate,
        AbdominalAdipometry,
        SupraIliacAdipometry,
        TricepsAdipometry,
        BicepsAdipometry,
        ToraxAdipometry,
        SubscapularAdipometry,
    }
    try{
        const bodyModel = await bodyModelRoutes.create(body);
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res
        .status(200)
        .json({ bodyModel, message: "Avaliação corporal Cadastrada com sucesso" });
    }catch(err){
        return res.status(400).send({ error: err });
    }
});
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
});
module.exports = routes;