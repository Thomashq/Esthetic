function ClientInfoGeneralEvaluation({ generalExam }) {
  if (generalExam) {
    return generalExam.length === 0 ? (
      <p className="load-list" style={{ display: "none" }}></p>
    ) : (
      <>
        <h3>Exame Geral</h3>
        <div className="clientinfofields">
          <div className="input-field" style={{ display: "none" }}></div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "5" }}
          >
            <label htmlFor="Complaint">Qual é a principal queixa?</label>
            <textarea
              type="text"
              id="Complaint"
              value={generalExam[0].Complaint}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="EstheticTreatment">
              Já fez tratamento estético
            </label>
            <input
              type="text"
              id="EstheticTreatment"
              value={
                generalExam[0].EstheticTreatment === true
                  ? generalExam[0].EstheticTreatmentDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="ContactLens">Usa lente de contato</label>
            <input
              type="text"
              id="ContactLens"
              value={generalExam[0].ContactLens === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Cosmetics">Utiliza cosméticos</label>
            <input
              type="text"
              id="Cosmetics"
              value={
                generalExam[0].Cosmetics === true
                  ? generalExam[0].CosmeticsDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="SunExposure">Exposição ao Sol</label>
            <input
              type="text"
              id="SunExposure"
              value={generalExam[0].SunExposure === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Sunscreen">Filtro Solar</label>
            <input
              type="text"
              id="Sunscreen"
              value={
                generalExam[0].Sunscreen === true
                  ? generalExam[0].SunscreenFrequency
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Smoking">Paciente fuma?</label>
            <input
              type="text"
              id="Smoking"
              value={
                generalExam[0].Smoking === true
                  ? generalExam[0].SmokingQuantity
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Alcohol">Paciente ingere bebida alcoólica?</label>
            <input
              type="text"
              id="Alcohol"
              value={
                generalExam[0].Alcohol === true
                  ? generalExam[0].AlcoholFrequency
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="IntestinalFunction">Funcionamento intestinal</label>
            <input
              type="text"
              id="IntestinalFunction"
              value={generalExam[0].IntestinalFunction}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="SleepQuality">Qualidade de Sono</label>
            <input
              type="text"
              id="SleepQuality"
              value={generalExam[0].SleepQuality}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="SleepTime">Tempo dormindo</label>
            <input
              type="text"
              id="SleepTime"
              value={generalExam[0].SleepTime}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="StandTime">
              Paciente passa muito tempo em pé/sentado?
            </label>
            <input
              type="text"
              id="StandTime"
              value={generalExam[0].StandTime === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="WaterIntake">Ingestão de Água</label>
            <input
              type="text"
              id="WaterIntake"
              value={generalExam[0].WaterIntake}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="FoodType">Tipo de Alimentação</label>
            <input
              type="text"
              id="FoodType"
              value={generalExam[0].FoodType}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="FoodPreference">Alimentação preferêncial</label>
            <input
              type="text"
              id="FoodPreference"
              value={generalExam[0].FoodPreference}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="PhysicalActivity">Pratica atividade física</label>
            <input
              type="text"
              id="PhysicalActivity"
              value={
                generalExam[0].PhysicalActivity === true
                  ? generalExam[0].PhysicalActivityType
                  : "Não"
              }
              disabled
            />
          </div>
          <div
            className={"input-field"}
            style={
              generalExam[0].PhysicalActivity === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="PhysicalActivity">Pratica atividade física</label>
            <input
              type="text"
              id="PhysicalActivity"
              value={generalExam[0].PhysicalActivityFrequency}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Contraceptive">Uso de anticoncepcional</label>
            <input
              type="text"
              id="Contraceptive"
              value={
                generalExam[0].Contraceptive === true
                  ? generalExam[0].ContraceptiveDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="LastMenstruation">Última menstruação</label>
            <input
              type="text"
              id="LastMenstruation"
              value={generalExam[0].LastMenstruation}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="LastMenstruation">Está grávida?</label>
            <input
              type="text"
              id="LastMenstruation"
              value={generalExam[0].Pregnant === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Gestations">Teve gestações?</label>
            <input
              type="text"
              id="Gestations"
              value={generalExam[0].Gestations === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div
            className={"input-field"}
            style={
              generalExam[0].Gestations === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="GestationsQuantity">Quantas vezes?</label>
            <input
              type="text"
              id="GestationsQuantity"
              value={generalExam[0].GestationsQuantity}
              disabled
            />
          </div>
          <div
            className={"input-field"}
            style={
              generalExam[0].Gestations === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="GestationsTime">A quanto tempo?</label>
            <input
              type="text"
              id="GestationsTime"
              value={generalExam[0].GestationsTime}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              Histórico Clínico
            </h4>
          </div>
          <div className="input-field">
            <label htmlFor="Anticoagulants">Uso de anticoagulantes</label>
            <input
              type="text"
              id="Anticoagulants"
              value={
                generalExam[0].Anticoagulants === true
                  ? generalExam[0].AnticoagulantsDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Allergies">Apresenta alergias</label>
            <input
              type="text"
              id="Allergies"
              value={
                generalExam[0].Allergies === true
                  ? generalExam[0].AllergiesDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="AllergicReaction">
              Reação alérgica a anestésicos
            </label>
            <input
              type="text"
              id="AllergicReaction"
              value={
                generalExam[0].AllergicReaction === true
                  ? generalExam[0].AllergiesDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Pacemaker">Portador de marcapasso</label>
            <input
              type="text"
              id="Pacemaker"
              value={generalExam[0].Pacemaker === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="CardiacAlterations">Alterações cardíacas</label>
            <input
              type="text"
              id="CardiacAlterations"
              value={
                generalExam[0].CardiacAlterations === true
                  ? generalExam[0].CardiacAlterationsDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="BloodPressureAlteration">
              Hipo/hipertensão arterial
            </label>
            <input
              type="text"
              id="BloodPressureAlteration"
              value={
                generalExam[0].BloodPressureAlteration === true ? "Sim" : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="BloodPressureAlteration">
              Distúrbio circulatório
            </label>
            <input
              type="text"
              id="BloodPressureAlteration"
              value={
                generalExam[0].CirculatoryAlteration === true
                  ? generalExam[0].CirculatoryAlterationDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="RenalAlteration">Distúrbio renal</label>
            <input
              type="text"
              id="RenalAlteration"
              value={
                generalExam[0].RenalAlteration === true
                  ? generalExam[0].RenalAlterationDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="HormonalAlteration">Distúrbio hormonal</label>
            <input
              type="text"
              id="HormonalAlteration"
              value={
                generalExam[0].HormonalAlteration === true
                  ? generalExam[0].HormonalAlterationDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="GastrointestinalAlteration">
              Distúrbio gastro-intestinal
            </label>
            <input
              type="text"
              id="GastrointestinalAlteration"
              value={
                generalExam[0].GastrointestinalAlteration === true
                  ? generalExam[0].GastrointestinalAlterationDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Epilepsy">Epilepsia-convulsões</label>
            <input
              type="text"
              id="Epilepsy"
              value={generalExam[0].Epilepsy === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div
            className={"input-field"}
            style={
              generalExam[0].Epilepsy === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="EpilepsyFrequency">Frequência de Convulsões</label>
            <input
              type="text"
              id="EpilepsyFrequency"
              value={generalExam[0].EpilepsyFrequency}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="PsychologicalAlteration">
              Alterações psicológicas/ psiquiátricas
            </label>
            <input
              type="text"
              id="PsychologicalAlteration"
              value={
                generalExam[0].PsychologicalAlteration === true
                  ? generalExam[0].PsychologicalAlterationDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Stress">Estresse</label>
            <input
              type="text"
              id="Stress"
              value={generalExam[0].Stress === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="OncologicalHistory">Antecedentes oncológicos</label>
            <input
              type="text"
              id="OncologicalHistory"
              value={
                generalExam[0].OncologicalHistory === true
                  ? generalExam[0].OncologicalHistoryDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Diabetes">Diabetes</label>
            <input
              type="text"
              id="Diabetes"
              value={
                generalExam[0].Diabetes === true
                  ? generalExam[0].DiabetesType
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="AutoimmuneDisease">Doença autoimune</label>
            <input
              type="text"
              id="AutoimmuneDisease"
              value={
                generalExam[0].AutoimmuneDisease === true
                  ? generalExam[0].AutoimmuneDiseaseDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="HIV">Apresenta Soropositivo</label>
            <input
              type="text"
              id="HIV"
              value={generalExam[0].HIV === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="LastCheckUp">Data do último Check-Up</label>
            <input
              type="text"
              id="LastCheckUp"
              value={generalExam[0].LastCheckUp}
              disabled
            />
          </div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "5" }}
          >
            <label htmlFor="OtherCondition">
              Outra condição não abordada no questionário ou doença
              pré-existente
            </label>
            <textarea
              type="text"
              id="OtherCondition"
              value={generalExam[0].OtherCondition}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              Tratamento da Medicina Estética e Cirúrgica
            </h4>
            <div className="input-field">
              <label htmlFor="AutoimmuneDisease">Doença autoimune</label>
              <input
                type="text"
                id="AutoimmuneDisease"
                value={
                  generalExam[0].AutoimmuneDisease === true
                    ? generalExam[0].AutoimmuneDiseaseDescription
                    : "Não"
                }
                disabled
              />
            </div>
            <div className="input-field">
              <label htmlFor="DermatologicalTreatment">
                Tratamento Dermatológico/ Estético
              </label>
              <input
                type="text"
                id="DermatologicalTreatment"
                value={
                  generalExam[0].DermatologicalTreatment === true
                    ? generalExam[0].DermatologicalTreatmentDescription
                    : "Não"
                }
                disabled
              />
            </div>
            <div className="input-field">
              <label htmlFor="PlasticSurgery">Cirurgia Plástica Estética</label>
              <input
                type="text"
                id="PlasticSurgery"
                value={
                  generalExam[0].PlasticSurgery === true
                    ? generalExam[0].PlasticSurgeryDescription
                    : "Não"
                }
                disabled
              />
            </div>
            <div className="input-field">
              <label htmlFor="RepairSurgery">Cirurgia Reparadora</label>
              <input
                type="text"
                id="RepairSurgery"
                value={
                  generalExam[0].RepairSurgery === true
                    ? generalExam[0].RepairSurgeryDescription
                    : "Não"
                }
                disabled
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientInfoGeneralEvaluation;
