const mongooseModel = require("mongoose");

const Body = mongooseModel.model("Body", {
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
  TissueFlaccidity: Boolean,
  TissueFlaccidityDegree: String,
  TissueFlaccidityPlace: String,
  MuscularFlaccidity: Boolean,
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
  AdipometryDateLine1: String,
  AbdominalAdipometryLine1: String,
  SupraIliacAdipometryLine1: String,
  TricepsAdipometryLine1: String,
  BicepsAdipometryLine1: String,
  ToraxAdipometryLine1: String,
  SubscapularAdipometryLine1: String,
  AdipometryDateLine2: String,
  AbdominalAdipometryLine2: String,
  SupraIliacAdipometryLine2: String,
  TricepsAdipometryLine2: String,
  BicepsAdipometryLine2: String,
  ToraxAdipometryLine2: String,
  SubscapularAdipometryLine2: String,
  AdipometryDateLine3: String,
  AbdominalAdipometryLine3: String,
  SupraIliacAdipometryLine3: String,
  TricepsAdipometryLine3: String,
  BicepsAdipometryLine3: String,
  ToraxAdipometryLine3: String,
  SubscapularAdipometryLine3: String,
});
module.exports = Body;
