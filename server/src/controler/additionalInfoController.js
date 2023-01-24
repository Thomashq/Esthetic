const expressRoute = require("express");
const clientModelRoutes = require("../model/Client.js");
const additionalInfoModelRoutes = require("../model/ClientAdditionalInfo.js");
const clientController = require("./clientController.js");

const router = expressRoute.Router();

router.get ("/getAdditionalInfo", async (req, res) => {
    try{
        const additionalInfo = await additionalInfoModelRoutes.find();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res
        .status(200)
        .json({ additionalInfo, message: "Informações adicionais carregadas com sucesso!" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }

});

router.post("/postAdditionalInfo", async (req, res) => {
    try{
        const { ClientId, Allergies, ChronicDiseases, Medications } = req.body;
        const additionalInfo = {
            ClientId,
            Allergies,
            ChronicDiseases,
            Medications,
        };
        const newAdditionalInfo = await additionalInfoModelRoutes.create(additionalInfo);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res
        .status(200)
        .json({message: "Informações adicionais cadastradas com sucesso!"});
    }
    catch(err){
        res.status(500).json({ error: err });
    }
});
module.exports = router;
