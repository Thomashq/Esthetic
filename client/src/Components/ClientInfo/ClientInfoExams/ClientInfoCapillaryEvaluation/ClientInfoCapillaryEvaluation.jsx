function ClientInfoCapillaryEvaluation({ capillarExam }) {
  if (capillarExam) {
    return capillarExam.length === 0 ? (
      <p className="load-list" style={{ display: "none" }}></p>
    ) : (
      <>
        <h3>Exame Capilar</h3>
        <div className="clientinfofields">
          <div className="input-field" style={{ display: "none" }}></div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "5" }}
          >
            <label htmlFor="specificdiseasedescription">
              Qual é a principal queixa?
            </label>
            <textarea
              type="text"
              id="specificdiseasedescription"
              value={capillarExam[0].SpecificDiseaseDescription}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="previousprocedure">
              Já fez algum tratamento anti-queda?
            </label>
            <input
              type="text"
              id="previousprocedure"
              value={
                capillarExam[0].PreviousProcedure === true
                  ? capillarExam[0].PreviousProcedureDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="acessoryuse">Acessório usual</label>
            <input
              type="text"
              id="acessoryuse"
              value={capillarExam[0].AcessoryUse}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairfaults">
              Quanto ao couro cabeludo, apresenta
            </label>
            <input
              type="text"
              id="hairfaults"
              value={capillarExam[0].HairFaults}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairtype">Tipo do Cabelo</label>
            <input
              type="text"
              id="hairtype"
              value={capillarExam[0].HairType}
              disabled
            />
          </div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
          >
            <label htmlFor="capillaryhygienedescription">
              Quantas vezes lava os cabelos, por semana?
            </label>
            <input
              type="text"
              id="capillaryhygienedescription"
              value={capillarExam[0].CapillaryHygieneDescription}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairaspect">Aspecto do Cabelo</label>
            <input
              type="text"
              id="hairaspect"
              value={capillarExam[0].HairAspect}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairlength">Comprimento do Cabelo</label>
            <input
              type="text"
              id="hairlength"
              value={capillarExam[0].HairLength}
              disabled
            />
          </div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
          >
            <label htmlFor="capillaryproducts">
              Quais shampoos, condicionadores e outros produtos capilares que
              está usando?
            </label>
            <input
              type="text"
              id="capillaryproducts"
              value={capillarExam[0].CapillaryProducts}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="haircurvature">Curvatura do Cabelo</label>
            <input
              type="text"
              id="haircurvature"
              value={capillarExam[0].HairCurvature}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairdensity">Densidade do Cabelo</label>
            <input
              type="text"
              id="hairdensity"
              value={capillarExam[0].HairDensity}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairporosoty">Porosidade do Cabelo</label>
            <input
              type="text"
              id="hairporosoty"
              value={capillarExam[0].HairPorosoty}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairtexture">Textura do Cabelo</label>
            <input
              type="text"
              id="hairtexture"
              value={capillarExam[0].HairTexture}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairelasticity">Elasticidade do Cabelo</label>
            <input
              type="text"
              id="hairelasticity"
              value={capillarExam[0].HairElasticity}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="haircolor">Cor do Cabelo</label>
            <input
              type="text"
              id="haircolor"
              value={capillarExam[0].HairColor}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairimplant">Já fez implante de cabelos?</label>
            <input
              type="text"
              id="hairimplant"
              value={
                capillarExam[0].HairImplant === true
                  ? capillarExam[0].HairImplantDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div
            className={`input-field`}
            style={
              capillarExam[0].HairImplant === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <label htmlFor="inputhairimplantdate">Data do Implante</label>
            <input
              type="text"
              id="inputhairimplantdate"
              value={capillarExam[0].HairImplantDate}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairpiece">Usa aplique?</label>
            <input
              type="text"
              id="hairpiece"
              value={capillarExam[0].HairPiece === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="hairpiececomplication">
              Teve alguma complicação pós implante?
            </label>
            <input
              type="text"
              id="hairpiececomplication"
              value={
                capillarExam[0].HairPieceComplication === true
                  ? capillarExam[0].HairPieceComplicationDescription
                  : "Não"
              }
              disabled
            />
          </div>
          <div
            className="input-field"
            style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
          >
            <label htmlFor="familybaldness">
              Alguém da família tem algum tipo de calvície?
            </label>
            <input
              type="text"
              id="familybaldness"
              value={capillarExam[0].FamilyBaldness === true ? "Sim" : "Não"}
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="baldness">Grau de Calvíce</label>
            <input
              type="text"
              id="baldness"
              value={capillarExam[0].FamilyBaldnessGrade}
              disabled
            />
          </div>
        </div>
      </>
    );
  }
}

export default ClientInfoCapillaryEvaluation;
