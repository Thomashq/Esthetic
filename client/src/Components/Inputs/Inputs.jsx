function Inputs({ id, type, inputName, className, isRequired }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{inputName}</label>
      <input type={type} id={id} className={className} required={isRequired} />
    </div>
  );
}

export default Inputs;
