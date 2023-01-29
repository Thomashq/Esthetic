function ClientInfoFacialEvaluation({ facialExam }) {
  if (facialExam) {
    return facialExam.length === 0 ? (
      <p className="load-list">Carregando dados do paciente</p>
    ) : (
      <div className="clientinfofields">
        <div className="input-field" style={{ display: "none" }}></div>
        <div className="input-field">
          <label htmlFor="cutaneousbiotype">Biotipo Cutâneo</label>
          <input
            type="text"
            id="cutaneousbiotype"
            value={facialExam[0].CutaneousBiotype}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="texture">Textura</label>
          <input
            type="text"
            id="texture"
            value={facialExam[0].Texture}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="ostios">Óstios</label>
          <input
            type="text"
            id="ostios"
            value={facialExam[0].Ostios}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="acne">Acne</label>
          <input type="text" id="acne" value={facialExam[0].Acne} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="texture">Textura</label>
          <input
            type="text"
            id="texture"
            value={facialExam[0].Texture}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="fitzpatrickskinphototype">
            Fototipo Cutâneo Fitzpatrick
          </label>
          <input
            type="text"
            id="fitzpatrickskinphototype"
            value={facialExam[0].FitzPatrickSkinPhototype}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="skininjuretype">Lesões de Pele</label>
          <input
            type="text"
            id="skininjuretype"
            value={facialExam[0].SkinInjureType}
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="scars">Cicatriz</label>
          <input type="text" id="scars" value={facialExam[0].Scars} disabled />
        </div>
        <div className="input-field">
          <label htmlFor="darkcircles">Olheiras</label>
          <input
            type="text"
            id="darkcircles"
            value={
              facialExam[0].DarkCircles === false
                ? "Não Possui"
                : facialExam[0].DarkCirclesType
            }
            disabled
          />
        </div>
        <div className="input-field">
          <label htmlFor="flaccidity">Flácida</label>
          <input
            type="text"
            id="flaccidity"
            value={
              facialExam[0].Flaccidity === true
                ? "Pele flácida"
                : "Pele não é flácida"
            }
            disabled
          />
        </div>
        <div
          className="input-field"
          style={{ gridColumnStart: "1", gridColumnEnd: "5" }}
        >
          <label htmlFor="treatment">Tratamento</label>
          <textarea id="treatment" value={facialExam[0].Treatment} disabled />
        </div>
        <div
          className="input-field"
          style={{ gridColumnStart: "1", gridColumnEnd: "5" }}
        >
          <label htmlFor="treatmentobjectives">Objetivo do Tratamento</label>
          <textarea
            type="text"
            id="treatmentobjectives"
            value={facialExam[0].TreatmentObjectives}
            disabled
          />
        </div>
      </div>
    );
  }
}

export default ClientInfoFacialEvaluation;
