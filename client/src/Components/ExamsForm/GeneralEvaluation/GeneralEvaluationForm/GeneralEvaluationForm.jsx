import { useRef } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "../../../Checkbox/Checkbox";
import CheckboxOnly from "../../../CheckboxOnly/CheckboxOnly";

function GeneralEvaluationForm() {
  const [estheticTreatmentOpened, setestheticTreatmentOpened] =
    useState("hide-input");
  const [anticoagulantsOpened, setAnticoagulantsOpened] =
    useState("hide-input");
  const [cosmeticsOpened, setCosmeticsOpened] = useState("hide-input");
  const [allergicReactionOpened, setAllergicReactionOpened] =
    useState("hide-input");
  const [allergiesOpened, setAllergiesOpened] = useState("hide-input");
  const [cardiacAlterationsOpened, setCardiacAlterationsOpened] =
    useState("hide-input");
  const [circulatoryAlterationOpened, setCirculatoryAlterationOpened] =
    useState("hide-input");
  const [renalAlterationOpened, setRenalAlterationOpened] =
    useState("hide-input");
  const [
    gastrointestinalAlterationOpened,
    setGastrointestinalAlterationOpened,
  ] = useState("hide-input");
  const [epilepsyOpened, setEpilepsyOpened] = useState("hide-input");
  const [psychologicalAlterationOpened, setPsychologicalAlterationOpened] =
    useState("hide-input");
  const [stressOpened, setStressOpened] = useState("hide-input");
  const [oncologicalHistoryOpened, setOncologicalHistoryOpened] =
    useState("hide-input");
  const [diabetesOpened, setDiabetesOpened] = useState("hide-input");
  const [autoimmuneDiseaseOpened, setAutoimmuneDiseaseOpened] =
    useState("hide-input");
  const [hormonalAlterationOpened, setHormonalAlterationOpened] =
    useState("hide-input");
  const [dermatologicalTreatmentOpened, setDermatologicalTreatmentOpened] =
    useState("hide-input");
  const [plasticSurgeryOpened, setPlasticSurgeryOpened] =
    useState("hide-input");
  const [repairSurgeryOpened, setRepairSurgeryOpened] = useState("hide-input");
  const [sunscreenOpened, setSunscreenOpened] = useState("hide-input");
  const [smokingOpened, setSmokingOpened] = useState("hide-input");
  const [alcoholOpened, setAlcoholOpened] = useState("hide-input");
  const [contraceptiveOpened, setContraceptiveOpened] = useState("hide-input");
  const [lastClient, setLastClient] = useState([]);
  const formRef = useRef();
  const navigateUrl = useNavigate();

  const getLastClient = async () => {
    try {
      const lastClient = await axios
        .get("https://backend-esthetic-api.onrender.com/client/getLastClient")
        .then((res) => {
          return res.data;
        })
        .catch((res) => {
          return res;
        });
      setLastClient(lastClient);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLastClient();
  }, [setLastClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formRefSubmit = formRef.current;
    const objectSend = {
      ClientId: lastClient[0]._id,
      Complaint: formRefSubmit.Complaint.value,
      EstheticTreatment: formRefSubmit.EstheticTreatment.value,
      EstheticTreatmentDescription: formRefSubmit.inputEstheticTreatment.value,
      ContactLens: formRefSubmit.ContactLens.value,
      Cosmetics: formRefSubmit.Cosmetics.value,
      CosmeticsDescription: formRefSubmit.inputCosmetics.value,
      SunExposure: formRefSubmit.SunExposure.value,
      Sunscreen: formRefSubmit.Sunscreen.value,
      SunscreenFrequency: formRefSubmit.inputSunscreen.value,
      Smoking: formRefSubmit.Smoking.value,
      SmokingQuantity: formRefSubmit.inputSmoking.value,
      Alcohol: formRefSubmit.Alcohol.value,
      AlcoholFrequency: formRefSubmit.inputAlcohol.value,
      IntestinalFunction: formRefSubmit.IntestinalFunction.value,
      SleepQuality: formRefSubmit.SleepQuality.value,
      SleepTime: formRefSubmit.SleepTime.value,
      StandTime: formRefSubmit.StandTime.value,
      StandTimeQuantity: formRefSubmit.StandTimeQuantity.value,
      WaterIntake: formRefSubmit.WaterIntake.value,
      FoodType: formRefSubmit.FoodType.value,
      FoodPreference: formRefSubmit.FoodPreference.value,
      PhysicalActivity: formRefSubmit.PhysicalActivity.value,
      PhysicalActivityType: formRefSubmit.PhysicalActivityType.value,
      PhysicalActivityFrequency: formRefSubmit.PhysicalActivityFrequency.value,
      Contraceptive: formRefSubmit.Contraceptive.value,
      ContraceptiveDescription: formRefSubmit.inputContraceptive.value,
      LastMenstruation: formRefSubmit.LastMenstruation.value,
      Pregnant: formRefSubmit.Pregnant.value,
      Gestations: formRefSubmit.Gestations.value,
      GestationsQuantity: formRefSubmit.GestationsQuantity.value,
      GestationsTime: formRefSubmit.GestationsTime.value,
      Anticoagulants: formRefSubmit.Anticoagulants.value,
      AnticoagulantsDescription: formRefSubmit.inputAnticoagulants.value,
      Allergies: formRefSubmit.Allergies.value,
      AllergiesDescription: formRefSubmit.inputAllergies.value,
      AllergicReaction: formRefSubmit.AllergicReaction.value,
      AllergicReactionDescription: formRefSubmit.inputAllergicReaction.value,
      Pacemaker: formRefSubmit.Pacemaker.value,
      CardiacAlterations: formRefSubmit.CirculatoryAlteration.value,
      CardiacAlterationsDescription:
        formRefSubmit.inputCirculatoryAlteration.value,
      CirculatoryAlteration: formRefSubmit.CirculatoryAlteration.value,
      CirculatoryAlterationDescription:
        formRefSubmit.inputCirculatoryAlteration.value,
      BloodPressureAlteration: formRefSubmit.BloodPressureAlteration.value,
      RenalAlteration: formRefSubmit.RenalAlteration.value,
      RenalAlterationDescription: formRefSubmit.inputRenalAlteration.value,
      HormonalAlteration: formRefSubmit.HormonalAlteration.value,
      HormonalAlterationDescription:
        formRefSubmit.inputHormonalAlteration.value,
      GastrointestinalAlteration:
        formRefSubmit.GastrointestinalAlteration.value,
      GastrointestinalAlterationDescription:
        formRefSubmit.inputGastrointestinalAlteration.value,
      Epilepsy: formRefSubmit.Epilepsy.value,
      EpilepsyFrequency: formRefSubmit.inputEpilepsy.value,
      PsychologicalAlteration: formRefSubmit.PsychologicalAlteration.value,
      PsychologicalAlterationDescription:
        formRefSubmit.inputPsychologicalAlteration.value,
      Stress: formRefSubmit.Stress.value,
      StressDescription: formRefSubmit.inputStress.value,
      OncologicalHistory: formRefSubmit.OncologicalHistory.value,
      OncologicalHistoryDescription:
        formRefSubmit.inputOncologicalHistory.value,
      Diabetes: formRefSubmit.Diabetes.value,
      DiabetesType: formRefSubmit.inputDiabetes.value,
      AutoimmuneDisease: formRefSubmit.AutoimmuneDisease.value,
      AutoimmuneDiseaseDescription: formRefSubmit.inputAutoimmuneDisease.value,
      HIV: formRefSubmit.HIV.value,
      OtherCondition: formRefSubmit.OtherCondition.value,
      LastCheckUp: formRefSubmit.LastCheckUp.value,
      DermatologicalTreatment: formRefSubmit.DermatologicalTreatment.value,
      DermatologicalTreatmentDescription:
        formRefSubmit.inputDermatologicalTreatment.value,
      PlasticSurgery: formRefSubmit.PlasticSurgery.value,
      PlasticSurgeryDescription: formRefSubmit.inputPlasticSurgery.value,
      RepairSurgery: formRefSubmit.RepairSurgery.value,
      RepairSurgeryDescription: formRefSubmit.inputRepairSurgery.value,
    };

    axios
      .post(
        "https://backend-esthetic-api.onrender.com/general/insertNewGeneralProcedure",
        objectSend
      )
      .then((res) => toast.success(res.data.message))
      .catch((res) => toast.error(res.data));

    navigateUrl(`/listadepacientes/${lastClient[0]._id}`);
  };

  const handleChangeCheckbox = (generalInfo) => {
    const formRefClear = formRef.current;

    switch (generalInfo) {
      case "EstheticTreatment": {
        estheticTreatmentOpened === "hide-input"
          ? setestheticTreatmentOpened("show-input")
          : setestheticTreatmentOpened("hide-input");

        formRefClear.inputEstheticTreatment.value = "";
        break;
      }
      case "Cosmetics": {
        cosmeticsOpened === "hide-input"
          ? setCosmeticsOpened("show-input")
          : setCosmeticsOpened("hide-input");

        formRefClear.inputCosmetics.value = "";
        break;
      }
      case "Anticoagulants": {
        anticoagulantsOpened === "hide-input"
          ? setAnticoagulantsOpened("show-input")
          : setAnticoagulantsOpened("hide-input");

        formRefClear.inputCosmetics.value = "";
        break;
      }
      case "Allergies": {
        allergiesOpened === "hide-input"
          ? setAllergiesOpened("show-input")
          : setAllergiesOpened("hide-input");

        formRefClear.inputAllergies.value = "";
        break;
      }
      case "AllergicReaction": {
        allergicReactionOpened === "hide-input"
          ? setAllergicReactionOpened("show-input")
          : setAllergicReactionOpened("hide-input");

        formRefClear.inputAllergicReaction.value = "";
        break;
      }
      case "CardiacAlterations": {
        cardiacAlterationsOpened === "hide-input"
          ? setCardiacAlterationsOpened("show-input")
          : setCardiacAlterationsOpened("hide-input");

        formRefClear.inputCardiacAlterations.value = "";
        break;
      }
      case "CirculatoryAlteration": {
        circulatoryAlterationOpened === "hide-input"
          ? setCirculatoryAlterationOpened("show-input")
          : setCirculatoryAlterationOpened("hide-input");

        formRefClear.inputCirculatoryAlteration.value = "";
        break;
      }
      case "RenalAlteration": {
        renalAlterationOpened === "hide-input"
          ? setRenalAlterationOpened("show-input")
          : setRenalAlterationOpened("hide-input");

        formRefClear.inputRenalAlteration.value = "";
        break;
      }
      case "HormonalAlteration": {
        hormonalAlterationOpened === "hide-input"
          ? setHormonalAlterationOpened("show-input")
          : setHormonalAlterationOpened("hide-input");

        formRefClear.inputCardiacAlterations.value = "";
        break;
      }
      case "GastrointestinalAlteration": {
        gastrointestinalAlterationOpened === "hide-input"
          ? setGastrointestinalAlterationOpened("show-input")
          : setGastrointestinalAlterationOpened("hide-input");

        formRefClear.inputGastrointestinalAlteration.value = "";
        break;
      }
      case "Epilepsy": {
        epilepsyOpened === "hide-input"
          ? setEpilepsyOpened("show-input")
          : setEpilepsyOpened("hide-input");

        formRefClear.inputEpilepsy.value = "";
        break;
      }
      case "PsychologicalAlteration": {
        psychologicalAlterationOpened === "hide-input"
          ? setPsychologicalAlterationOpened("show-input")
          : setPsychologicalAlterationOpened("hide-input");

        formRefClear.inputPsychologicalAlteration.value = "";
        break;
      }
      case "Stress": {
        stressOpened === "hide-input"
          ? setStressOpened("show-input")
          : setStressOpened("hide-input");

        formRefClear.inputStress.value = "";
        break;
      }
      case "OncologicalHistory": {
        oncologicalHistoryOpened === "hide-input"
          ? setOncologicalHistoryOpened("show-input")
          : setOncologicalHistoryOpened("hide-input");

        formRefClear.inputOncologicalHistory.value = "";
        break;
      }
      case "Diabetes": {
        diabetesOpened === "hide-input"
          ? setDiabetesOpened("show-input")
          : setDiabetesOpened("hide-input");

        formRefClear.inputDiabetes.value = "";
        break;
      }
      case "AutoimmuneDisease": {
        autoimmuneDiseaseOpened === "hide-input"
          ? setAutoimmuneDiseaseOpened("show-input")
          : setAutoimmuneDiseaseOpened("hide-input");

        formRefClear.inputAutoimmuneDisease.value = "";
        break;
      }
      case "DermatologicalTreatment": {
        dermatologicalTreatmentOpened === "hide-input"
          ? setDermatologicalTreatmentOpened("show-input")
          : setDermatologicalTreatmentOpened("hide-input");

        formRefClear.inputDermatologicalTreatment.value = "";
        break;
      }
      case "PlasticSurgery": {
        plasticSurgeryOpened === "hide-input"
          ? setPlasticSurgeryOpened("show-input")
          : setPlasticSurgeryOpened("hide-input");

        formRefClear.inputPlasticSurgery.value = "";
        break;
      }
      case "RepairSurgery": {
        repairSurgeryOpened === "hide-input"
          ? setRepairSurgeryOpened("show-input")
          : setRepairSurgeryOpened("hide-input");

        formRefClear.inputRepairSurgery.value = "";
        break;
      }
      case "Sunscreen": {
        sunscreenOpened === "hide-input"
          ? setSunscreenOpened("show-input")
          : setSunscreenOpened("hide-input");

        formRefClear.inputSunscreen.value = "";
        break;
      }
      case "Smoking": {
        smokingOpened === "hide-input"
          ? setSmokingOpened("show-input")
          : setSmokingOpened("hide-input");

        formRefClear.inputSmoking.value = "";
        break;
      }
      case "Alcohol": {
        alcoholOpened === "hide-input"
          ? setAlcoholOpened("show-input")
          : setAlcoholOpened("hide-input");

        formRefClear.inputAlcohol.value = "";
        break;
      }
      case "Contraceptive": {
        contraceptiveOpened === "hide-input"
          ? setContraceptiveOpened("show-input")
          : setContraceptiveOpened("hide-input");

        formRefClear.inputAlcohol.value = "";
        break;
      }
    }
  };
  return (
    <form
      className="generalevaluationfields"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div>
        <p>Queixa</p>
        <textarea id="Complaint" />
      </div>
      <Checkbox
        text="Tratamento estético anterior"
        id="EstheticTreatment"
        handleChangeCheckbox={handleChangeCheckbox}
        opened={estheticTreatmentOpened}
      />
      <CheckboxOnly
        text="Usa lentes de contato"
        id="ContactLens"
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="Utilização de cosméticos"
        id="Cosmetics"
        handleChangeCheckbox={handleChangeCheckbox}
        opened={cosmeticsOpened}
      />
      <CheckboxOnly
        text="Exposição ao sol"
        id="SunExposure"
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="Filtro Solar"
        id="Sunscreen"
        handleChangeCheckbox={handleChangeCheckbox}
        opened={sunscreenOpened}
      />
      <Checkbox
        text="Tabagismo"
        id="Smoking"
        handleChangeCheckbox={handleChangeCheckbox}
        opened={smokingOpened}
      />
      <Checkbox
        text="Ingere bebida alcoólica"
        id="Alcohol"
        handleChangeCheckbox={handleChangeCheckbox}
        opened={alcoholOpened}
      />
      <div>
        <p>Funcionamento intestinal</p>
        <label>1-2 vezes / semana</label>
        <input
          style={{ marginLeft: 10, marginRight: 20 }}
          type="radio"
          id="IntestinalFunction"
          value="1-2 vezes / semana"
        />
        <label>3-4 vezes / semana</label>
        <input
          style={{ marginLeft: 10, marginRight: 20 }}
          type="radio"
          id="IntestinalFunction"
          value="3-4 vezes / semana"
        />
        <label>1-2 vezes / dia</label>
        <input
          style={{ marginLeft: 10, marginRight: 20 }}
          type="radio"
          id="IntestinalFunction"
          value="1-2 vezes / dia"
        />
        <label>Mais de 3 vezes / dia</label>
        <input
          style={{ marginLeft: 10, marginRight: 20 }}
          type="radio"
          id="IntestinalFunction"
          value="Mais de 3 vezes / dia"
        />
      </div>
      <div>
        <p>Qualidade do sono</p>
        <label>Boa</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="SleepQuality"
          name="SleepQuality"
          value="Boa"
        />
        <label>Regular</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="SleepQuality"
          name="SleepQuality"
          value="Regular"
        />
        <label>Péssima</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="SleepQuality"
          name="SleepQuality"
          value="Péssima"
        />
        <input
          id="SleepTime"
          type="text"
          placeholder="Horas por noite"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>Passa muito tempo em pé e/ou sentada?</p>
        <label>Sim</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          id="StandTime"
          name="StandTime"
          type="radio"
          value="true"
        />
        <label>Não</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          id="StandTime"
          name="StandTime"
          type="radio"
          value="false"
        />
        <input
          id="StandTimeQuantity"
          type="text"
          placeholder="Quanto tempo"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>Ingestão de água</p>
        <input
          id="WaterIntake"
          type="text"
          placeholder="Copos por dia"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>Tipo de alimentação</p>
        <label>Vegano</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="FoodType"
          name="FoodType"
          value="Vegano"
        />
        <label>Vegetariano</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="FoodType"
          name="FoodType"
          value="Vegetariano"
        />
        <label>Convencional</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="FoodType"
          name="FoodType"
          value="Convencional"
        />
        <label>Low Carb </label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          type="radio"
          id="FoodType"
          name="FoodType"
          value="Low Carb "
        />
        <input
          id="FoodType"
          type="text"
          placeholder="Outro"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>Alimentos de preferência:</p>
        <input
          id="FoodPreference"
          type="text"
          placeholder="Qual?"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>Pratica Atividades física</p>
        <label>Sim</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          id="PhysicalActivity"
          name="PhysicalActivity"
          type="radio"
          value="true"
        />
        <label>Não</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          id="PhysicalActivity"
          name="PhysicalActivity"
          type="radio"
          value="false"
        />
        <input
          id="PhysicalActivityType"
          type="text"
          placeholder="Qual?"
          className="additionalinfo-input-text"
        />
        <input
          id="PhysicalActivityFrequency"
          type="text"
          placeholder="Frequência"
          className="additionalinfo-input-text"
        />
      </div>
      <Checkbox
        id="Contraceptive"
        text="Uso de anticoncepcional"
        handleChangeCheckbox={handleChangeCheckbox}
        opened={contraceptiveOpened}
      />
      <div>
        <p>Data do primeiro dia da última menstruação</p>
        <input
          type="date"
          id="LastMenstruation"
          className="additionalinfo-input-text"
        />
      </div>
      <CheckboxOnly
        id="Pregnant"
        text="Gestante"
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <div>
        <p>Gestações</p>
        <label>Sim</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          id="Gestations"
          name="Gestations"
          type="radio"
          value="true"
        />
        <label>Não</label>
        <input
          style={{ marginLeft: 5, marginRight: 10 }}
          id="Gestations"
          name="Gestations"
          type="radio"
          value="false"
        />
        <input
          id="GestationsQuantity"
          type="text"
          placeholder="Quantas?"
          className="additionalinfo-input-text"
        />
        <input
          id="GestationsTime"
          type="text"
          placeholder="A quanto tempo?"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>Histórico Clínico</p>
        <Checkbox
          text="Uso de anticoagulantes"
          id="Anticoagulants"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={anticoagulantsOpened}
        />
        <Checkbox
          text="Antecedentes alérgicos"
          id="Allergies"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={allergiesOpened}
        />
        <Checkbox
          text="Reação alérgica a anestésicos"
          id="AllergicReaction"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={allergicReactionOpened}
        />
        <CheckboxOnly
          text="Portador de marcapasso"
          id="Pacemaker"
          handleChangeCheckbox={handleChangeCheckbox}
        />
        <Checkbox
          text="Alterações cardíacas"
          id="CardiacAlterations"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={cardiacAlterationsOpened}
        />
        <CheckboxOnly
          text="Hipo/hipertensão arterial"
          id="BloodPressureAlteration"
          handleChangeCheckbox={handleChangeCheckbox}
        />
        <Checkbox
          text="Distúrbio circulatório"
          id="CirculatoryAlteration"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={circulatoryAlterationOpened}
        />
        <Checkbox
          text="Distúrbio renal"
          id="RenalAlteration"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={renalAlterationOpened}
        />
        <Checkbox
          text="Distúrbio hormonal"
          id="HormonalAlteration"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={hormonalAlterationOpened}
        />
        <Checkbox
          text="Distúrbio gastro-intestinal"
          id="GastrointestinalAlteration"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={gastrointestinalAlterationOpened}
        />
        <Checkbox
          text="Epilepsia-convulsões"
          id="Epilepsy"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={epilepsyOpened}
        />
        <Checkbox
          text="Alterações psicológicas/ psiquiátricas"
          id="PsychologicalAlteration"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={psychologicalAlterationOpened}
        />
        <Checkbox
          text="Estresse"
          id="Stress"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={stressOpened}
        />
        <Checkbox
          text="Antecedentes oncológicos"
          id="OncologicalHistory"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={oncologicalHistoryOpened}
        />
        <Checkbox
          text="Diabetes"
          id="Diabetes"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={diabetesOpened}
        />
        <Checkbox
          text="Doença autoimune"
          id="AutoimmuneDisease"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={autoimmuneDiseaseOpened}
        />
        <CheckboxOnly
          text="Soropositivo"
          id="HIV"
          handleChangeCheckbox={handleChangeCheckbox}
        />
        <div>
          <p>
            Outra condição não abordada no questionário ou doença pré-existente
          </p>
          <textarea id="OtherCondition" />
        </div>
        <div>
          <p>Data do último Check-Up</p>
          <input
            type="date"
            id="LastCheckUp"
            className="additionalinfo-input-text"
          />
        </div>
      </div>
      <div>
        <p>Tratamento da Medicina Estética e Cirúrgica</p>
        <Checkbox
          text="Tratamento Dermatológico/ Estético"
          id="DermatologicalTreatment"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={dermatologicalTreatmentOpened}
        />
        <Checkbox
          text="Cirurgia Plástica Estética"
          id="PlasticSurgery"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={plasticSurgeryOpened}
        />
        <Checkbox
          text="Cirurgia Reparadora"
          id="RepairSurgery"
          handleChangeCheckbox={handleChangeCheckbox}
          opened={repairSurgeryOpened}
        />
      </div>
      <button className="submit-button-basic">Continuar</button>
    </form>
  );
}

export default GeneralEvaluationForm;
