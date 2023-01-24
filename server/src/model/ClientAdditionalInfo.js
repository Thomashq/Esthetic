const mongooseModel = require('mongoose')

const AdditionalInfo = mongooseModel.model('AdditionalInfo',{
    ClientId: String,
    Allergies: String,
    ChronicDiseases: String,
    Medications: String,
})
module.exports = AdditionalInfo