function ClientInfoData({ client }) {
  if (client) {
    return client.length === 0 ? (
      <p className="load-list">Carregando dados do paciente</p>
    ) : (
      <div className="clientinfofields">
        <div className="input-field">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" value={client[0].Name} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="age">Idade</label>
          <input type="text" id="age" value={client[0].Age} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="address">Endereço</label>
          <input type="text" id="address" value={client[0].Address} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" value={client[0].Cep} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="district">Bairro</label>
          <input
            type="text"
            id="district"
            value={client[0].District}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" value={client[0].City} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="state">Estado</label>
          <input type="text" id="state" value={client[0].State} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="birthdate">Data de Nascimento</label>
          <input
            type="text"
            id="birthdate"
            value={client[0].Birthdate}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="profession">Profissão</label>
          <input
            type="text"
            id="profession"
            value={client[0].Profession}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="mail">E-mail</label>
          <input type="text" id="mail" value={client[0].Mail} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="cellphone">Celular</label>
          <input
            type="text"
            id="cellphone"
            value={client[0].Cellphone}
            disabled
          />
        </div>
      </div>
    );
  }
}

export default ClientInfoData;
