const mongooseModel = require('mongoose')

const Facial = mongooseModel.model('Facial',{
    ClientId: String,
    CutaneousBiotype: String,
    CutaneousStatus: String,
    Texture: String,
    Ostios: String,
    Acne: String,
    FitzPatrickSkinPhototype: String,
    SkinInjureType: String,
    Scars: String,
    DarkCircles: Boolean,
    DarkCirclesType: String,
    Flaccidity: String,
    TreatmentObjectives: String,
    Treatment: String,

})
module.exports = Facial