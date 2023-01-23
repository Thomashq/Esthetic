import { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Inputs from "../Inputs/Inputs";
import { useNavigate } from "react-router-dom";

function StandardFields() {
  const formRef = useRef();
  const navigateUrl = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRefCurrent = formRef.current;
    const objectSend = {
      Name: formRefCurrent.name.value,
      Age: formRefCurrent.age.value,
      Address: formRefCurrent.address.value,
      Cep: formRefCurrent.cep.value,
      District: formRefCurrent.district.value,
      City: formRefCurrent.city.value,
      State: formRefCurrent.state.value,
      Birthdate: formRefCurrent.birthdate.value,
      Profession: formRefCurrent.profession.value,
      Mail: formRefCurrent.mail.value,
      Cellphone: formRefCurrent.cellphone.value,
    };

    await axios
      .post("http://localhost:3080/client/insertNewClient", objectSend)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((res) => toast.error(res.data));

    navigateUrl("/adicionarpaciente/exames");
  };

  return (
    <>
      <form className="standardfields" ref={formRef} onSubmit={handleSubmit}>
        <Inputs
          className="name-person"
          id="name"
          inputName="Nome"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="age-person"
          id="age"
          inputName="Idade"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="address-person"
          id="address"
          inputName="Endereço"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="cep-person"
          id="cep"
          inputName="CEP"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="district-person"
          id="district"
          inputName="Bairro"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="city-person"
          id="city"
          inputName="Cidade"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="state-person"
          id="state"
          inputName="Estado"
          type="text"
          isRequired={true}
        />
        <Inputs
          className="birthdate-person"
          id="birthdate"
          inputName="Data de Nascimento"
          type="date"
          isRequired={true}
        />
        <Inputs
          className="profession-person"
          id="profession"
          inputName="Profissão"
          type="text"
          isRequired={false}
        />
        <Inputs
          className="mail-person"
          id="mail"
          inputName="E-mail"
          type="email"
          isRequired={true}
        />
        <Inputs
          className="cellphone-person"
          id="cellphone"
          inputName="Celular"
          type="text"
          isRequired={true}
        />
        <button className="submit-button-basic">Continuar</button>
      </form>
    </>
  );
}

export default StandardFields;
