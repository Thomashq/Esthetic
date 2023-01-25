const expressRoute = require("express");
const additionalInfoModelRoutes = require("../model/ClientAdditionalInfo.js");

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
        const { ClientId, 
            Allergies,
            AllergiesDescription,
            ChronicDisease,
            ChronicDiseaseDescription,
            ChronicDiseaseStatus,
            Disease,
            DiseaseDescription,
            DiseasesStatus,
            Medications,
            MedicationsDescription,
            MedicalProcedures,
            MedicalProceduresDescription,
            MedicalProceduresDate,
            Diet,
             
        } = req.body;
        const additionalInfo = {
            ClientId,
            Allergies,
            AllergiesDescription,
            ChronicDisease,
            ChronicDiseaseDescription,
            ChronicDiseaseStatus,
            Disease,
            DiseaseDescription,
            DiseasesStatus,
            Medications,
            MedicationsDescription,
            MedicalProcedures,
            MedicalProceduresDescription,
            MedicalProceduresDate,
            Diet,
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
