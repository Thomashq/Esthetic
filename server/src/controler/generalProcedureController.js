const routes = require('express').Router();
const generalModelRoutes = require('../model/General');
const router = require('./additionalInfoController.js');


routes.post('/insertNewGeneralProcedure', async (req, res) => {
    const {
        ClientId,
        Complaint,
        ComplaintDuration,
        EstheticTreatment,
        EstheticTreatmentDescription,
        ContactLens,
        Cosmetics,
        CosmeticsDescription,
        SunExposure,
        Sunscreen,
        SunscreenFrequency,
        Smoking,
        SmokingQuantity,
        Alcohol,
        AlcoholFrequency,
        IntestinalFunction,
        SleepQuality,
        SleepTime,
        StandTime,
        StandTimeQuantity,
        WaterIntake,
        FoodType,
        FoodPreference,
        PhysicalActivity,
        PhysicalActivityType,
        PhysicalActivityFrequency,
        Contraceptive,
        ContraceptiveDescription,
        LastMenstruation,
        Pregnant,
        Gestations,
        GestationsQuantity,
        GestationsTime,
        Anticoagulants,
        AnticoagulantsDescription,
        Allergies,
        AllergiesDescription,
        AllergicReaction,
        Pacemaker,
        CardiacAlterations,
        CardiacAlterationsDescription,
        HormonalAlteration,
        HormonalAlterationDescription,
        GastrointestinalAlteration,
        GastrointestinalAlterationDescription,
        Epilepsy,
        EpilepsyFrequency,
        PsychologicalAlteration,
        PsychologicalAlterationDescription,
        Stress,
        StressDescription,
        OncologicalHistory,
        OncologicalHistoryDescription,
        Diabetes,
        DiabetesType,
        AutoimmuneDisease,
        AutoimmuneDiseaseDescription,
        HIV,
        OtherCondition,
        LastCheckUp,
        DermatologicalTreatment,
        DermatologicalTreatmentDescription,
        PlasticSurgery,
        PlasticSurgeryDescription,
        RepairSurgery,
        RepairSurgeryDescription,
    } = req.body;
    const general = {
        ClientId,
        Complaint,
        ComplaintDuration,
        EstheticTreatment,
        EstheticTreatmentDescription,
        ContactLens,
        Cosmetics,
        CosmeticsDescription,
        SunExposure,
        Sunscreen,
        SunscreenFrequency,
        Smoking,
        SmokingQuantity,
        Alcohol,
        AlcoholFrequency,
        IntestinalFunction,
        SleepQuality,
        SleepTime,
        StandTime,
        StandTimeQuantity,
        WaterIntake,
        FoodType,
        FoodPreference,
        PhysicalActivity,
        PhysicalActivityType,
        PhysicalActivityFrequency,
        Contraceptive,
        ContraceptiveDescription,
        LastMenstruation,
        Pregnant,
        Gestations,
        GestationsQuantity,
        GestationsTime,
        Anticoagulants,
        AnticoagulantsDescription,
        Allergies,
        AllergiesDescription,
        AllergicReaction,
        Pacemaker,
        CardiacAlterations,
        CardiacAlterationsDescription,
        HormonalAlteration,
        HormonalAlterationDescription,
        GastrointestinalAlteration,
        GastrointestinalAlterationDescription,
        Epilepsy,
        EpilepsyFrequency,
        PsychologicalAlteration,
        PsychologicalAlterationDescription,
        Stress,
        StressDescription,
        OncologicalHistory,
        OncologicalHistoryDescription,
        Diabetes,
        DiabetesType,
        AutoimmuneDisease,
        AutoimmuneDiseaseDescription,
        HIV,
        OtherCondition,
        LastCheckUp,
        DermatologicalTreatment,
        DermatologicalTreatmentDescription,
        PlasticSurgery,
        PlasticSurgeryDescription,
        RepairSurgery,
        RepairSurgeryDescription,
    };
    try{
        const newGeneral = await generalModelRoutes.create(general);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            newGeneral,
            message: 'Procedimento geral cadastrado com sucesso!'
        });
    }catch(err){
        res.status(500).json({ error: err });
    }
});
router.get('/getGeneralProcedure', async (req, res) => {
    try{
        const general = await generalModelRoutes.find();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            general,
            message: 'Procedimento geral carregado com sucesso!'
        });
    }catch(err){
        res.status(500).json({ error: err });
    }
});
router.get('/getGeneralProcedureByClientId', async (req, res) => {
    const { ClientId } = req.body.ClientId;
    try{
        const general = await generalModelRoutes.find({ClientId});
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            general,
            message: 'Procedimento geral carregado com sucesso!'
        });
    }catch(err){
        res.status(500).json({ error: err });
    }
});
router.put('/updateGeneralProcedure', async (req, res) => {
    const {
        _id,
        ClientId,
        Complaint,
        ComplaintDuration,
        EstheticTreatment,
        EstheticTreatmentDescription,
        ContactLens,
        Cosmetics,
        CosmeticsDescription,
        SunExposure,
        Sunscreen,
        SunscreenFrequency,
        Smoking,
        SmokingQuantity,
        Alcohol,
        AlcoholFrequency,
        IntestinalFunction,
        SleepQuality,
        SleepTime,
        StandTime,
        StandTimeQuantity,
        WaterIntake,
        FoodType,
        FoodPreference,
        PhysicalActivity,
        PhysicalActivityType,
        PhysicalActivityFrequency,
        Contraceptive,
        ContraceptiveDescription,
        LastMenstruation,
        Pregnant,
        Gestations,
        GestationsQuantity,
        GestationsTime,
        Anticoagulants,
        AnticoagulantsDescription,
        Allergies,
        AllergiesDescription,
        AllergicReaction,
        Pacemaker,
        CardiacAlterations,
        CardiacAlterationsDescription,
        HormonalAlteration,
        HormonalAlterationDescription,
        GastrointestinalAlteration,
        GastrointestinalAlterationDescription,
        Epilepsy,
        EpilepsyFrequency,
        PsychologicalAlteration,
        PsychologicalAlterationDescription,
        Stress,
        StressDescription,
        OncologicalHistory,
        OncologicalHistoryDescription,
        Diabetes,
        DiabetesType,
        AutoimmuneDisease,
        AutoimmuneDiseaseDescription,
        HIV,
        OtherCondition,
        LastCheckUp,
        DermatologicalTreatment,
        DermatologicalTreatmentDescription,
        PlasticSurgery,
        PlasticSurgeryDescription,
        RepairSurgery,
        RepairSurgeryDescription,
    } = req.body;
    const general = {
        _id,
        ClientId,
        Complaint,
        ComplaintDuration,
        EstheticTreatment,
        EstheticTreatmentDescription,
        ContactLens,
        Cosmetics,
        CosmeticsDescription,
        SunExposure,
        Sunscreen,
        SunscreenFrequency,
        Smoking,
        SmokingQuantity,
        Alcohol,
        AlcoholFrequency,
        IntestinalFunction,
        SleepQuality,
        SleepTime,
        StandTime,
        StandTimeQuantity,
        WaterIntake,
        FoodType,
        FoodPreference,
        PhysicalActivity,
        PhysicalActivityType,
        PhysicalActivityFrequency,
        Contraceptive,
        ContraceptiveDescription,
        LastMenstruation,
        Pregnant,
        Gestations,
        GestationsQuantity,
        GestationsTime,
        Anticoagulants,
        AnticoagulantsDescription,
        Allergies,
        AllergiesDescription,
        AllergicReaction,
        Pacemaker,
        CardiacAlterations,
        CardiacAlterationsDescription,
        HormonalAlteration,
        HormonalAlterationDescription,
        GastrointestinalAlteration,
        GastrointestinalAlterationDescription,
        Epilepsy,
        EpilepsyFrequency,
        PsychologicalAlteration,
        PsychologicalAlterationDescription,
        Stress,
        StressDescription,
        OncologicalHistory,
        OncologicalHistoryDescription,
        Diabetes,
        DiabetesType,
        AutoimmuneDisease,
        AutoimmuneDiseaseDescription,
        HIV,
        OtherCondition,
        LastCheckUp,
        DermatologicalTreatment,
        DermatologicalTreatmentDescription,
        PlasticSurgery,
        PlasticSurgeryDescription,
        RepairSurgery,
        RepairSurgeryDescription,
    }
    try{
        const newGeneral = await generalModelRoutes.findByIdAndUpdate(general._id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            newGeneral,
            message: 'Procedimento geral atualizado com sucesso!'
        });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
});

router.delete('/deleteGeneralProcedure', async (req, res) => {
    const { id } = req.body._id;
    try{
        const general = await generalModelRoutes.findByIdAndDelete(id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            general,
            message: 'Procedimento geral deletado com sucesso!'
        });
    }catch(err){
        res.status(500).json({ error: err });
    }
});