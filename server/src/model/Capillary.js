const mongooseModel = require('mongoose')

const Capilar = mongooseModel.model('Capilar',{
    ClientId: String,
    hairType: String,
    Teste: String,
})
module.exporsts = Capilar