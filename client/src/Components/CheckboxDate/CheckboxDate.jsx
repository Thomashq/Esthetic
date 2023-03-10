import "../../Styles/Additionalinfo/Additionalinfo.css";

function CheckboxDate({
  id,
  classNameTrue,
  classNameFalse,
  text,
  opened,
  handleChangeCheckbox,
}) {
  return (
    <div>
      <p>{text}</p>
      <label htmlFor={id}>Sim</label>
      <input
        style={{ marginLeft: 5, marginRight: 10 }}
        id={id}
        className={`additionalinfo-checkbox ${classNameTrue}`}
        type="radio"
        name={id}
        value={true}
        onClick={() => handleChangeCheckbox(id)}
      />
      <label htmlFor={id}>Não</label>
      <input
        style={{ marginLeft: 5 }}
        id={id}
        className={`additionalinfo-checkbox ${classNameFalse}`}
        type="radio"
        name={id}
        value={false}
        defaultChecked
        onClick={() => handleChangeCheckbox(id)}
      />
      <input
        className={`additionalinfo-input-text ${opened}`}
        type="text"
        id={`input${id}`}
        placeholder="Qual?"
        noValidate
      />
      <input
        className={`additionalinfo-input-text ${opened}`}
        type="date"
        id={`input${id}date`}
        placeholder="Data"
      />
    </div>
  );
}

export default CheckboxDate;
