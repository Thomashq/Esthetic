import { IMaskInput } from "react-imask";

function Inputs({ id, type, inputName, className, isRequired }) {
  switch (id) {
    case "cellphone": {
      return (
        <div className="input-field">
          <label htmlFor="cellphone">Celular</label>
          <IMaskInput
            mask="(00) 0 0000-0000"
            type="string"
            id="cellphone"
            className="cellphone-person"
            required
          />
        </div>
      );
    }
    case "age": {
      return (
        <div className="input-field">
          <label htmlFor="age">Idade</label>
          <IMaskInput
            mask="00"
            type="string"
            id="age"
            className="age-person"
            required
          />
        </div>
      );
    }
    default: {
      return (
        <div className="input-field">
          <label htmlFor={id}>{inputName}</label>
          <input
            type={type}
            id={id}
            className={className}
            required={isRequired}
          />
        </div>
      );
    }
  }
}

export default Inputs;
