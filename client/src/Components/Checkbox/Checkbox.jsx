function Checkbox({
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
      {id !== "diet" ? (
        <input
          className={`additionalinfo-input-text ${opened}`}
          type="text"
          id={`input${id}`}
          placeholder="Qual?"
          noValidate
        />
      ) : (
        ""
      )}
      {id === "medicalprocedures" ? (
        <input
          className={`additionalinfo-input-text ${opened}`}
          type="date"
          id={`inputdata`}
          placeholder="Data"
        />
      ) : (
        ""
      )}
      {id === "disease" || id === "chronicDiseases" ? (
        <div className={`${opened}`}>
          <p>O problema está?</p>
          <label>Aumentando</label>
          <input
            style={{ marginLeft: 5, marginRight: 10 }}
            value="Aumentando"
            type="radio"
            name={`${id}status`}
            id={`input${id}status`}
          ></input>
          <label>Diminuindo</label>
          <input
            style={{ marginLeft: 5, marginRight: 10 }}
            type="radio"
            value="Diminuindo"
            name={`${id}status`}
            id={`input${id}status`}
          ></input>
          <label>Estável</label>
          <input
            style={{ marginLeft: 5, marginRight: 10 }}
            value="Estável"
            type="radio"
            name={`${id}status`}
            id={`input${id}status`}
          ></input>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Checkbox;
