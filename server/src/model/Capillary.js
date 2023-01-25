const mongooseModel = require('mongoose')
//o tipo boolean é especifico para perguntas de sim ou não
//os que vem com Description são para descrição de perguntas que são sim ou não.
//os que vem com Date são para datas de procedimentos
//os dois ultimos são para imagens de cabelos.
const Capillary = mongooseModel.model('Capilar',{
    ClientId: String,
    SpecificDisease: Boolean,
    SpecificDiseaseDescription: String,
    SpecificDiseaseAlteration: String,
    PreviousProcedure: Boolean,
    PreviousProcedureDescription: String,
    AcessoryUse: Boolean,
    CapillaryHygieneDescription: String,
    CapillaryProducts: String,
    HairType: String,
    HairAspect: String,
    HairLength: String,
    HairCurvature: String,
    HairDensity: String,
    HairPorosoty: String,
    HairTexture: String,
    HairElasticity: String,
    HairColor: Boolean,
    HairFaults: String,
    AlopeciaPlace: String,
    AlopeciaForm: String,
    AlopeciaInjurePlace: String,
    AlopeciaInjureNumber: String,
    AlopeciaInjureSize: String,
    HairImplant: Boolean,
    HairImplantDescription: String,
    HairImplantDate: String,
    HairPiece: Boolean,
    HairPieceComplication: Boolean,
    HairPieceComplicationDescription: String,
    PostHairPieceComplicationTreatment: Boolean,
    PostHairPieceComplicationTreatmentDescription: String,
    FamilyBaldness: Boolean,
    FamilyBaldnessGrade: String,
});
module.exports = Capillary