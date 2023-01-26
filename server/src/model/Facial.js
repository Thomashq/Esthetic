const mongooseModel = require('mongoose')

const Facial = mongooseModel.model('Facial',{
    ClientId: String,
    CutaneousBiotype: String,
    CutaneousStatus: String,
    Texture: String,
    Ostios: String,
    Acne: String,
    FitzPatrickSkinPhototype: String,
})
module.exports = Facial