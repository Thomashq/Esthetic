import TableClientInfo from "./TableClientInfo/TableClientInfo";

function ClientInfoBodyEvaluation({ bodyExam }) {
  if (bodyExam) {
    return bodyExam.length === 0 ? (
      <p className="load-list" style={{ display: "none" }}></p>
    ) : (
      <>
        <h3>Exame Corporal</h3>
        <div className="clientinfofields">
          <div className="input-field" style={{ display: "none" }}></div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "5" }}
          >
            <label htmlFor="Complaint">Qual é a principal queixa?</label>
            <textarea
              type="text"
              id="Complaint"
              value={bodyExam[0].Complaint}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              FIBRO EDEMA GELÓIDE (FEG)
            </h4>
          </div>
          <div className="input-field">
            <label htmlFor="GeloidFibroEdema">Tipo</label>
            <input
              type="text"
              id="GeloidFibroEdema"
              value={bodyExam[0].GeloidEdemaType}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="GeloidEdemaDegree">Grau</label>
            <input
              type="text"
              id="GeloidEdemaDegree"
              value={bodyExam[0].GeloidEdemaDegree}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="GeloidEdemaLocation">Localização</label>
            <input
              type="text"
              id="GeloidEdemaLocation"
              value={bodyExam[0].GeloidEdemaLocation}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="GeloidEdemaColor">Coloração do tecido</label>
            <input
              type="text"
              id="GeloidEdemaColor"
              value={bodyExam[0].GeloidEdemaColor}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="GeloidEdemaTemperature">
              Temperatura do tecido
            </label>
            <input
              type="text"
              id="GeloidEdemaTemperature"
              value={bodyExam[0].GeloidEdemaTemperature}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="GeloidEdemaTemperature">
              Temperatura do tecido
            </label>
            <input
              type="text"
              id="GeloidEdemaTemperature"
              value={bodyExam[0].GeloidEdemaPain === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              EDEMA
            </h4>
          </div>
          <div className="input-field">
            <label htmlFor="LockerTest">Teste do cacifo (tornozelo)</label>
            <input
              type="text"
              id="LockerTest"
              value={bodyExam[0].LockerTest === true ? "Positivo" : "Negativo"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="DigitPressureTest">Teste de digito-pressão</label>
            <input
              type="text"
              id="DigitPressureTest"
              value={
                bodyExam[0].DigitPressureTest === true ? "Positivo" : "Negativo"
              }
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              Gordura Localizada
            </h4>
          </div>
          <div className="input-field">
            <label htmlFor="FatType">Gordura</label>
            <input
              type="text"
              id="FatType"
              value={bodyExam[0].FatType}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="FatDistribution">Distribuição de Gordura</label>
            <input
              type="text"
              id="FatDistribution"
              value={bodyExam[0].FatDistribution}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="Biotype">Biotipo</label>
            <input
              type="text"
              id="Biotype"
              value={bodyExam[0].Biotype}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              Flacidez
            </h4>
          </div>
          <div
            style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
            className="input-field"
          >
            <label htmlFor="TissueFlaccidityDegree">
              Grau Flacidez Tissular
            </label>
            <input
              type="text"
              id="TissueFlaccidityDegree"
              value={bodyExam[0].TissueFlaccidityDegree}
              disabled
            />
          </div>

          <div
            style={{ gridColumnStart: "3", gridColumnEnd: "5" }}
            className="input-field"
          >
            <label htmlFor="TissueFlaccidityPlace">
              Localização Flacidez Tissular
            </label>
            <input
              type="text"
              id="TissueFlaccidityPlace"
              value={bodyExam[0].TissueFlaccidityPlace}
              disabled
            />
          </div>
          <div
            style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
            className="input-field"
          >
            <label htmlFor="MuscularFlaccidityDegree">
              Grau Flacidez Muscular
            </label>
            <input
              type="text"
              id="MuscularFlaccidityDegree"
              value={bodyExam[0].MuscularFlaccidityDegree}
              disabled
            />
          </div>
          <div
            style={{ gridColumnStart: "3", gridColumnEnd: "5" }}
            className="input-field"
          >
            <label htmlFor="MuscularFlaccidityPlace">
              Localização Flacidez Muscular
            </label>
            <input
              type="text"
              id="MuscularFlaccidityPlace"
              value={bodyExam[0].MuscularFlaccidityPlace}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              Estrias
            </h4>
          </div>
          <div className="input-field">
            <label htmlFor="StriaeColor">Cor</label>
            <input
              type="text"
              id="StriaeColor"
              value={bodyExam[0].StriaeColor}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="StriaeWidth">Largura</label>
            <input
              type="text"
              id="StriaeWidth"
              value={bodyExam[0].StriaeWidth}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="StriaeColor">Tipo</label>
            <input
              type="text"
              id="StriaeType"
              value={bodyExam[0].StriaeType}
              disabled
            />
          </div>
          <div
            style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
            className="input-field"
          >
            <label htmlFor="StriaeQuantity">Quantidade</label>
            <input
              type="text"
              id="StriaeQuantity"
              value={bodyExam[0].StriaeQuantity}
              disabled
            />
          </div>
          <div
            style={{ gridColumnStart: "3", gridColumnEnd: "5" }}
            className="input-field"
          >
            <label htmlFor="StriaeRegion">Região</label>
            <input
              type="text"
              id="StriaeRegion"
              value={bodyExam[0].StriaeRegion}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
              }}
            >
              Alterações Vasculares
            </h4>
          </div>
          <div className="input-field">
            <label htmlFor="MicrovesselsTelangiectasias">
              Microvasos/Telangiectasias
            </label>
            <input
              type="text"
              id="MicrovesselsTelangiectasias"
              value={
                bodyExam[0].MicrovesselsTelangiectasias === true ? "Sim" : "Não"
              }
              disabled
            />
          </div>
          <div
            className={"input-field"}
            style={
              bodyExam[0].MicrovesselsTelangiectasias === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="MicrovesselsTelangiectasiasPlace">Região</label>
            <input
              type="text"
              id="MicrovesselsTelangiectasiasPlace"
              value={bodyExam[0].MicrovesselsTelangiectasiasPlace}
              disabled
            />
          </div>
          <div
            className={"input-field"}
            style={
              bodyExam[0].MicrovesselsTelangiectasias === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="MicrovesselsTelangiectasiasColor">Coloração</label>
            <input
              type="text"
              id="MicrovesselsTelangiectasiasColor"
              value={bodyExam[0].MicrovesselsTelangiectasiasColor}
              disabled
            />
          </div>
          <div style={{ gridColumnStart: "1", gridColumnEnd: "5" }}>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                paddingLeft: "10px",
                marginBottom: "20px",
              }}
            >
              Adipometria
            </h4>
            <TableClientInfo bodyExam={bodyExam} />
          </div>
        </div>
      </>
    );
  }
}

export default ClientInfoBodyEvaluation;
