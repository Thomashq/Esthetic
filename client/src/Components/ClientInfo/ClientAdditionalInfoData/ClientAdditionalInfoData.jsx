function ClientAdditionalInfoData({ additionalClientInfo }) {
  if (additionalClientInfo) {
    return additionalClientInfo.length === 0 ? (
      <p className="load-list">Carregando dados do paciente</p>
    ) : (
      <>
        <h3>Dados Adicionais</h3>
        <div className="clientinfofields">
          <div className="input-field" style={{ display: "none" }}></div>
          <div className="input-field">
            <label htmlFor="allergies">Alergia</label>
            <input
              type="text"
              id="allergies"
              value={
                additionalClientInfo[0].Allergies === false
                  ? "Nenhuma"
                  : additionalClientInfo[0].AllergiesDescription
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="chronicdisease">Doença Crônica</label>
            <input
              type="text"
              id="chronicdisease"
              value={
                additionalClientInfo[0].ChronicDisease === false
                  ? "Nenhuma"
                  : additionalClientInfo[0].ChronicDiseaseDescription
              }
              disabled
            />
          </div>
          <div
            className="input-field"
            style={
              additionalClientInfo[0].ChronicDisease === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <label htmlFor="chronicdiseasestatus">
              Status da Doença Crônica
            </label>
            <input
              type="text"
              id="chronicdiseasestatus"
              value={additionalClientInfo[0].ChronicDiseaseStatus}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="disease">Doença</label>
            <input
              type="text"
              id="disease"
              value={
                additionalClientInfo[0].Disease === false
                  ? "Nenhuma"
                  : additionalClientInfo[0].DiseaseDescription
              }
              disabled
            />
          </div>
          <div
            className="input-field"
            style={
              additionalClientInfo[0].Disease === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <label htmlFor="diseasesstatus">Status da Doença</label>
            <input
              type="text"
              id="diseasesstatus"
              value={additionalClientInfo[0].DiseasesStatus}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="chronicdisease">Medicação</label>
            <input
              type="text"
              id="chronicdisease"
              value={
                additionalClientInfo[0].Medications === false
                  ? "Nenhuma"
                  : additionalClientInfo[0].MedicationsDescription
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="medicalprocedures">Procedimento Médico</label>
            <input
              type="text"
              id="medicalprocedures"
              value={
                additionalClientInfo[0].MedicalProcedures === false
                  ? "Nenhuma"
                  : additionalClientInfo[0].MedicalProceduresDescription
              }
              disabled
            />
          </div>
          <div
            className="input-field"
            style={
              additionalClientInfo[0].MedicalProcedures === false
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <label htmlFor="medicalproceduresdate">Data do Procedimento</label>
            <input
              type="text"
              id="medicalproceduresdate"
              value={additionalClientInfo[0].MedicalProceduresDate}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="diet">Dieta</label>
            <input
              type="text"
              id="diet"
              value={
                additionalClientInfo[0].Diet === false
                  ? "Não está fazendo"
                  : "Está fazendo"
              }
              disabled
            />
          </div>
        </div>
      </>
    );
  }
}

export default ClientAdditionalInfoData;
