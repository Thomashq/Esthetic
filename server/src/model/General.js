const moongoose = require('mongoose');

const General = moongoose.model('General', {
    ClientId: String,
    //Queixa: _________________________________________________ 
    Complaint: String,
    //Duração: __________________________
    ComplaintDuration: String,
    //Tratamento estético anterior: ( ) Sim ( ) Não Qual: ______________________________  
    EstheticTreatment: Boolean,
    EstheticTreatmentDescription: String,
    //Usa lentes de contato: ( ) Sim ( ) Não
    ContactLens: Boolean,
    //Utilização de cosméticos: ( ) Sim ( ) Não Qual: ______________________________
    Cosmetics: Boolean,
    CosmeticsDescription: String,
    //Exposição solar: ( ) Sim ( ) Não
    SunExposure: Boolean,
    //Filtro Solar: ( ) Sim ( ) Não Frequência: ______________________________
    Sunscreen: Boolean,
    SunscreenFrequency: String,
    //Tabagismo: ( ) Sim ( ) Não Quantidade: ______________________________
    Smoking: Boolean,
    SmokingQuantity: String,
    //Ingere bebidas alcoólicas: ( ) Sim ( ) Não Frequência: ______________________________
    Alcohol: Boolean,
    AlcoholFrequency: String,
    //Funcionamento intestinal:( ) 1-2 vezes / semana ( ) 3-4 vezes / semana
                               //( ) 1-2 vezes / dia ( ) mais de 3 vezes / dia
    IntestinalFunction: String,
    //Qualidade do Sono: ( ) Boa ( ) Regular ( ) Péssima Quanto tempo: ______________________________
    SleepQuality: String,
    SleepTime: String,
    // Passa muito tempo em pé e/ou sentada? ( ) Sim ( ) Não Quanto tempo? ________________
    StandTime: Boolean,
    StandTimeQuantity: String,
    //Ingestão de Água: (copos / dia): ______________ 
    WaterIntake: String,
    //Tipo de alimentação: ( ) Vegano ( ) Vegetariano ( ) Convencional ( ) Low Carb ( )Outro _______
    FoodType: String,
    //Alimentos de preferência: __________________________ 
    FoodPreference: String,
    // Pratica Atividades física? ( ) Sim ( ) Não Que Tipo: _______________________________ qual frequência: _____________________________
    PhysicalActivity: Boolean,
    PhysicalActivityType: String,
    PhysicalActivityFrequency: String,
    //Uso de anticoncepcional: ( ) Sim ( ) Não Qual: ________________________________________
    Contraceptive: Boolean,
    ContraceptiveDescription: String,
    //Data do primeiro dia da última menstruação: ___ /___ /___ Gestante: ( ) Sim ( ) Não
    LastMenstruation: String,
    Pregnant: Boolean,
    //Gestações: ( ) Sim ( ) Não Quantas: _____________ A quanto tempo: __________________
    Gestations: Boolean,
    GestationsQuantity: String,
    GestationsTime: String,
    //Uso de anticoagulantes: ( ) Sim ( ) Não Quais? ___________________________________
    Anticoagulants: Boolean,
    AnticoagulantsDescription: String,
    //Antecedentes alérgicos: ( ) Sim ( ) Não Quais? ___________________________________
    Allergies: Boolean,
    AllergiesDescription: String,
    //Reação alérgica a anestésicos. Ex.: lidocaína: ( ) Sim ( ) Não
    AllergicReaction: Boolean,
    //Portador de marcapasso: ( ) Sim ( ) Não
    Pacemaker: Boolean,
    //Alterações cardíacas: ( ) Sim ( ) Não Quais: _____________________________________
    CardiacAlterations: Boolean,
    CardiacAlterationsDescription: String,
    //Hipo/hipertensão arterial: ( ) Sim ( ) Não
    BloodPressureAlteration: Boolean,
    //Distúrbio circulatório: ( ) Sim ( ) Não Qual: _____________________________________
    CirculatoryAlteration: Boolean,
    CirculatoryAlterationDescription: String,
    //Distúrbio renal: ( ) Sim ( ) Não Qual: __________________________________________
    RenalAlteration: Boolean,
    RenalAlterationDescription: String,
    //Distúrbio hormonal: ( ) Sim ( ) Não Qual: ______________________________________
    HormonalAlteration: Boolean,
    HormonalAlterationDescription: String,
    //Distúrbio gastro-intestinal: ( ) Sim ( ) Não Qual: _________________________________
    GastrointestinalAlteration: Boolean,
    GastrointestinalAlterationDescription: String,
    //Epilepsia-convulsões: ( ) Sim ( ) Não Frequência: ________________________________
    Epilepsy: Boolean,
    EpilepsyFrequency: String,
    //Alterações psicológicas/ psiquiátricas: ( ) Sim ( ) Não Quais: _______________________
    PsychologicalAlteration: Boolean,
    PsychologicalAlterationDescription: String,
    //Estresse: ( ) Sim ( ) Não Obs: ________________________________
    Stress: Boolean,
    StressDescription: String,
    //Antecedentes oncológicos: ( ) Sim ( ) Não Qual: ________________________________
    OncologicalHistory: Boolean,
    OncologicalHistoryDescription: String,
    //Diabetes: ( ) Sim ( ) Não Tipo: ________________________________
    Diabetes: Boolean,
    DiabetesType: String,
    //Doença autoimune: ( ) Sim ( ) Não Qual: ________________
    AutoimmuneDisease: Boolean,
    AutoimmuneDiseaseDescription: String,
    //Soropositivo: ( ) Sim ( ) Não 
    HIV: Boolean,
    //Outra condição não abordada no questionário ou doença pré-existente: 
    OtherCondition: String,
    //Data do último Check-Up: __________
    LastCheckUp: String,
    //Tratamento Dermatológico/ Estético: ( ) Sim ( ) Não Qual: ________________________________
    DermatologicalTreatment: Boolean,
    DermatologicalTreatmentDescription: String,
    //Cirurgia Plástica Estética: ( ) Sim ( ) Não Qual: __________________________________
    PlasticSurgery: Boolean,
    PlasticSurgeryDescription: String,
    //Cirurgia Reparadora: ( ) Sim ( ) Não Qual: ___________
    RepairSurgery: Boolean,
    RepairSurgeryDescription: String,

});
module.exports = General;