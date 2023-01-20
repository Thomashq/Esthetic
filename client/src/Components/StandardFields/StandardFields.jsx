import { useRef } from "react";
import Inputs from "../Inputs/Inputs";

function StandardFields() {
  const formRef = useRef();

  const handleSubmit = (e) => {
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
      Matricialstatus: formRefCurrent.matricialstatus.value,
      Cellphone: formRefCurrent.cellphone.value,
    };
  };

  return (
    <>
      <form className="standardfields" ref={formRef}>
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
      </form>
      <button className="submit-button-basic" onClick={handleSubmit}>
        Continuar
      </button>
    </>
  );
}

export default StandardFields;
