const expressRoute = require('express')
const capillaryModelRoutes = require('../model/Capillary.js')

const router = expressRoute.Router()

router.get("/getCapillary", async (req, res) => {
    try{
        const capillary = await capillaryModelRoutes.find();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ capillary, message: "Lista de exames capilares carregada com sucesso!" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
})
router.post("/postCapillary", async (req, res) => {
    
    const {
        ClientId,
        SpecificDisease,
        SpecificDiseaseDescription,
        SpecificDiseaseAlteration,
        PreviousProcedure,
        PreviousProcedureDescription,
        AcessoryUse,
        CapillaryHygieneDescription,
        CapillaryProducts,
        HairType,
        HairAspect,
        HairLength,
        HairCurvature,
        HairDensity,
        HairPorosoty,
        HairTexture,
        HairElasticity,
        HairColor,
        HairFaults,
        AlopeciaPlace,
        AlopeciaForm,
        AlopeciaInjurePlace,
        AlopeciaInjureNumber,
        AlopeciaInjureSize,
        HairImplant,
        HairImplantDescription,
        HairImplantDate,
        HairPiece,
        HairPieceComplication,
        HairPieceComplicationDescription,
        PostHairPieceComplicationTreatment,
        PostHairPieceComplicationTreatmentDescription,
        FamilyBaldness,
        FamilyBaldnessGrade,
    } = req.body;
    
    const capillary = {
        ClientId,
        SpecificDisease,
        SpecificDiseaseDescription,
        SpecificDiseaseAlteration,
        PreviousProcedure,
        PreviousProcedureDescription,
        AcessoryUse,
        CapillaryHygieneDescription,
        CapillaryProducts,
        HairType,
        HairAspect,
        HairLength,
        HairCurvature,
        HairDensity,
        HairPorosoty,
        HairTexture,
        HairElasticity,
        HairColor,
        HairFaults,
        AlopeciaPlace,
        AlopeciaForm,
        AlopeciaInjurePlace,
        AlopeciaInjureNumber,
        AlopeciaInjureSize,
        HairImplant,
        HairImplantDescription,
        HairImplantDate,
        HairPiece,
        HairPieceComplication,
        HairPieceComplicationDescription,
        PostHairPieceComplicationTreatment,
        PostHairPieceComplicationTreatmentDescription,
        FamilyBaldness,
        FamilyBaldnessGrade,
    };

    try{
        const newCapillary = await capillaryModelRoutes.create(capillary);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ newCapillary, message: "Exame capilar cadastrado com sucesso!" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
})
module.exports = router