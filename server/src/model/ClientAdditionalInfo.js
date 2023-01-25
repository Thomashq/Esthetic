const mongooseModel = require('mongoose')

const AdditionalInfo = mongooseModel.model('AdditionalInfo',{
    ClientId: String,
    Allergies: Boolean,
    AllergiesDescription: String,
    ChronicDisease: Boolean,
    ChronicDiseaseDescription: String,
    ChronicDiseaseStatus: String,
    Disease: Boolean,
    DiseaseDescription: String,
    DiseasesStatus: String,
    Medications: Boolean,
    MedicationsDescription: String,
    MedicalProcedures: Boolean,
    MedicalProceduresDescription: String,
    MedicalProceduresDate: String,
    Diet: Boolean,
})
module.exports = AdditionalInfo