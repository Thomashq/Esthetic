import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../../Styles/Additionalinfo/Additionalinfo.css";
import Checkbox from "../../Checkbox/Checkbox";
import CheckboxDate from "../../CheckboxDate/CheckboxDate";
import CheckboxSub from "../../CheckboxSub/CheckboxSub";
import CheckboxOnly from "../../CheckboxOnly/CheckboxOnly";

function AdditionalInfoForms() {
  const [lastClient, setLastClient] = useState([]);
  const [allergieTrue, setAllergieTrue] = useState("hide-input");
  const [chronicDiseasesTrue, setChronicDiseasesTrue] = useState("hide-input");
  const [medicationsTrue, setMedicationsTrue] = useState("hide-input");
  const [diseaseTrue, setDiseaseTrue] = useState("hide-input");
  const [medicalproceduresTrue, setMedicalproceduresTrue] =
    useState("hide-input");
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
      Allergies: formRefSubmit.allergies.value,
      AllergiesDescription: formRefSubmit.inputallergies.value,
      ChronicDisease: formRefSubmit.chronicDiseases.value,
      ChronicDiseaseDescription: formRefSubmit.inputchronicDiseases.value,
      ChronicDiseaseStatus: formRefSubmit.inputchronicDiseasesstatus.value,
      Disease: formRefSubmit.disease.value,
      DiseaseDescription: formRefSubmit.inputdisease.value,
      DiseasesStatus: formRefSubmit.inputdiseasestatus.value,
      Medications: formRefSubmit.medications.value,
      MedicationsDescription: formRefSubmit.inputmedications.value,
      MedicalProcedures: formRefSubmit.medicalprocedures.value,
      MedicalProceduresDescription: formRefSubmit.inputmedicalprocedures.value,
      MedicalProceduresDate: formRefSubmit.inputmedicalproceduresdate.value,
      Diet: formRefSubmit.diet.value,
    };

    axios
      .post(
        "https://backend-esthetic-api.onrender.com/additionalInfo/postAdditionalInfo",
        objectSend
      )
      .then((res) => toast.success(res.data.message))
      .catch((res) => toast.error(res.data));

    navigateUrl("/adicionarpaciente/informacoesadicionais/exames");
  };

  const handleChangeCheckbox = (additionalinfo) => {
    const formRefClear = formRef.current;
    switch (additionalinfo) {
      case "allergies": {
        allergieTrue === "hide-input"
          ? setAllergieTrue("show-input")
          : setAllergieTrue("hide-input");

        formRefClear.inputallergies.value = "";
        break;
      }
      case "chronicDiseases": {
        chronicDiseasesTrue === "hide-input"
          ? setChronicDiseasesTrue("show-input")
          : setChronicDiseasesTrue("hide-input");

        formRefClear.inputchronicDiseases.value = "";
        break;
      }
      case "medications": {
        medicationsTrue === "hide-input"
          ? setMedicationsTrue("show-input")
          : setMedicationsTrue("hide-input");

        formRefClear.inputmedications.value = "";
        break;
      }
      case "disease": {
        diseaseTrue === "hide-input"
          ? setDiseaseTrue("show-input")
          : setDiseaseTrue("hide-input");

        formRefClear.inputdisease.value = "";
        break;
      }
      case "medicalprocedures": {
        medicalproceduresTrue === "hide-input"
          ? setMedicalproceduresTrue("show-input")
          : setMedicalproceduresTrue("hide-input");

        formRefClear.inputmedicalproceduresdate.value = "";
        formRefClear.inputmedicalprocedures.value = "";
        break;
      }
    }
  };

  return (
    <form
      className="additionalinfofields"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Checkbox
        text="O paciente possui alguma alergia?"
        id="allergies"
        classNameTrue="allergies-true"
        classNameFalse="allergies-false"
        opened={allergieTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxSub
        text="O paciente possui alguma doença crônica?"
        id="chronicDiseases"
        classNameTrue="chronicDiseases-true"
        classNameFalse="chronicDiseases-false"
        opened={chronicDiseasesTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="O paciente está consumindo algum medicamento atualmente?"
        id="medications"
        classNameTrue="medications-true"
        classNameFalse="medications-false"
        opened={medicationsTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxSub
        text="O paciente possui alguma doença no momento?"
        id="disease"
        classNameTrue="disease-true"
        classNameFalse="disease-false"
        opened={diseaseTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxDate
        text="O paciente fez algum procedimento médico recentemente?"
        id="medicalprocedures"
        classNameTrue="medicalprocedures-true"
        classNameFalse="medicalprocedures-false"
        opened={medicalproceduresTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxOnly
        text="O paciente está fazendo dieta atualmente?"
        id="diet"
        classNameTrue="diet-true"
        classNameFalse="diet-false"
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <button className="submit-button-basic">Continuar</button>
    </form>
  );
}

export default AdditionalInfoForms;
