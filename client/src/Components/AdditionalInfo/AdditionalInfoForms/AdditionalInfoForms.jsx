import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../../Styles/Additionalinfo/Additionalinfo.css";
import Checkbox from "../../Checkbox/Checkbox";

function AdditionalInfoForms() {
  const [allergieTrue, setAllergieTrue] = useState("hide-input");
  const [chronicDiseasesTrue, setChronicDiseasesTrue] = useState("hide-input");
  const [medicationsTrue, setMedicationsTrue] = useState("hide-input");
  const [diseaseTrue, setDiseaseTrue] = useState("hide-input");
  const [medicalproceduresTrue, setMedicalproceduresTrue] =
    useState("hide-input");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formRefSubmit = formRef.current;
    const objectSend = {
      ClientId: "63d0898229135211d8963407",
      Allergies: formRefSubmit.allergies.value,
      AllergiesDescription: formRefSubmit.inputallergies.value,
      ChronicDisease: formRefSubmit.chronicDiseases.value,
      ChronicDiseaseDescription: formRefSubmit.inputchronicDiseases.value,
      ChronicDiseaseStatus: "",
      Disease: formRefSubmit.disease.value,
      DiseaseDescription: formRefSubmit.inputdisease.value,
      DiseasesStatus: "",
      Medications: formRefSubmit.medications.value,
      MedicationsDescription: formRefSubmit.inputmedications.value,
      MedicalProcedures: formRefSubmit.medicalprocedures.value,
      MedicalProceduresDescription: formRefSubmit.inputmedicalprocedures.value,
      MedicalProceduresDate: formRefSubmit.inputdata.value,
      Diet: false,
    };

    axios
      .post(
        "http://localhost:3080/additionalInfo/postAdditionalInfo",
        objectSend
      )
      .then((res) => toast.success(res.data.message))
      .catch((res) => toast.error(res.data));
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
      <Checkbox
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
      <Checkbox
        text="O paciente possui alguma doença no momento?"
        id="disease"
        classNameTrue="disease-true"
        classNameFalse="disease-false"
        opened={diseaseTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="O paciente fez algum procedimento médico recentemente?"
        id="medicalprocedures"
        classNameTrue="medicalprocedures-true"
        classNameFalse="medicalprocedures-false"
        opened={medicalproceduresTrue}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <button className="submit-button-basic">Continuar</button>
    </form>
  );
}

export default AdditionalInfoForms;
