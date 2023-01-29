const mongooseModel = require('mongoose');

const Body = mongooseModel.model('Body', {
    ClientId: String,
    //Queixa principal
    Complaint: String,
    //FIBRO EDEMA GELÓIDE (FEG)
    //Tipo: ( ) Flácida ( ) Edematosa ( ) Compacta ( ) Mista
    // Grau: ( ) I ( ) II ( ) III ( ) IV
    // Localização: ________________________________ Coloração do tecido: ______________________
    // Temperatura: ( ) Fria ( ) Quente Presença de dor à palpação: ( ) Sim ( ) Não
    GeloidFibroEdema: String,
    GeloidEdemaType: String,
    GeloidEdemaDegree: String,
    GeloidEdemaLocation: String,
    GeloidEdemaColor: String,
    GeloidEdemaTemperature: String,
    GeloidEdemaPain: Boolean,
    // EDEMA
    // Teste do cacifo (tornozelo): ( ) Positivo ( ) Negativo
    // Teste de digito-pressão (3 segundos): ( ) Positivo ( ) Negativo
    LockerTest: Boolean,
    DigitPressureTest: Boolean,
    // GORDURA REGIONALIZADA
    // Gordura: ( ) Compacta ( ) Flácida
    // Distribuição de Gordura: ( ) Localizada ( ) Generalizada
    // Biotipo: ( ) Ginóide ( ) Andróide ( ) Normolíneo
    FatType: String,
    FatDistribution: String,
    Biotype: String,
    // FLACIDEZ
    // ( ) Tissular Grau: ____________ (+ leve, ++ moderado, +++ Intenso, ++++ grave)
    // ( ) Muscular Grau de Força: ____________(+ leve, ++ moderado, +++ Intenso, ++++ grave)
    // Localização da flacidez tissular: _______________________________________________________
    // Localização da flacidez muscular: _____________________________________________________
    TissueFlaccidityDegree: String,
    TissueFlaccidityPlace: String,
    MuscularFlaccidityDegree: String,
    MuscularFlaccidityPlace: String,
    // ESTRIAS
    // Cor: ( ) Rubra ( ) Alba
    // Largura: ( ) Fina ( ) Larga
    // Tipo: ( ) Atrófica ( ) Hipertrófica
    // Quantidade: _____________ (+ leve, ++ moderado, +++ Intenso, ++++ grave)
    // Região: _________________________________________________________________________________________
    StriaeColor: String,
    StriaeWidth: String,
    StriaeType: String,
    StriaeQuantity: String,
    StriaeRegion: String,
    // Alterações vasculares
    // Microvasos/Telangiectasias
    // ( ) NÃO
    // ( ) SIM Local: _____________________________
    // Coloração dos microvasos/telangiectasias
    // ( ) Avermelhados
    // ( ) Arroxeados
    MicrovesselsTelangiectasias: Boolean,
    MicrovesselsTelangiectasiasPlace: String,
    MicrovesselsTelangiectasiasColor: String,
    //Tabela de Adipometria
    AdipometryDate: String,
    AbdominalAdipometry: String,
    SupraIliacAdipometry: String,
    TricepsAdipometry: String,
    BicepsAdipometry: String,
    ToraxAdipometry: String,
    SubscapularAdipometry: String, 
});
module.exports = Body;