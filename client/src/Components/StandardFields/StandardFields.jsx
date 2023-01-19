import Inputs from "../Inputs/Inputs";

function StandardFields() {
  return (
    <div className="standardfields">
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
        className="matricialstatus-person"
        id="matricialstatus"
        inputName="Estado Civil"
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
    </div>
  );
}

export default StandardFields;
