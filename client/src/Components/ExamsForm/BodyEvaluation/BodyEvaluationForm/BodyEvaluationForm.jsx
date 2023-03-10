import { useRef, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "./Table/Table";

function BodyEvaluationForm() {
  const [lastClient, setLastClient] = useState([]);
  const [microvesselsOpeneded, setMicrovesselsOpeneded] =
    useState("hide-input");
  const formRef = useRef();
  const navigateUrl = useNavigate();

  const getLastClient = async () => {
    try {
      const lastClient = await axios
        .get("https://backend-esthetic-api.onrender.com/client/getLastClient")
        .then((res) => {
          return res.data;
        })
        .catch((res) => {
          return res;
        });
      setLastClient(lastClient);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLastClient();
  }, [setLastClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formRefSubmit = formRef.current;
    const objectSend = {
      ClientId: lastClient[0]._id,
      Complaint: formRefSubmit.Complaint.value,
      GeloidEdemaType: formRefSubmit.GeloidEdemaType.value,
      GeloidEdemaDegree: formRefSubmit.GeloidEdemaDegree.value,
      GeloidEdemaLocation: formRefSubmit.GeloidEdemaLocation.value,
      GeloidEdemaColor: formRefSubmit.GeloidEdemaColor.value,
      GeloidEdemaTemperature: formRefSubmit.GeloidEdemaTemperature.value,
      GeloidEdemaPain: formRefSubmit.GeloidEdemaPain.value,
      LockerTest: formRefSubmit.LockerTest.value,
      DigitPressureTest: formRefSubmit.DigitPressureTest.value,
      FatType: formRefSubmit.FatType.value,
      FatDistribution: formRefSubmit.FatDistribution.value,
      Biotype: formRefSubmit.Biotype.value,
      TissueFlaccidityDegree: formRefSubmit.TissueFlaccidityDegree.value,
      TissueFlaccidityPlace: formRefSubmit.TissueFlaccidityPlace.value,
      MuscularFlaccidityDegree: formRefSubmit.MuscularFlaccidityDegree.value,
      MuscularFlaccidityPlace: formRefSubmit.MuscularFlaccidityPlace.value,
      StriaeColor: formRefSubmit.StriaeColor.value,
      StriaeWidth: formRefSubmit.StriaeWidth.value,
      StriaeType: formRefSubmit.StriaeType.value,
      StriaeQuantity: formRefSubmit.StriaeQuantity.value,
      StriaeRegion: formRefSubmit.StriaeRegion.value,
      MicrovesselsTelangiectasias:
        formRefSubmit.MicrovesselsTelangiectasias.value,
      MicrovesselsTelangiectasiasPlace:
        formRefSubmit.MicrovesselsTelangiectasiasPlace.value,
      MicrovesselsTelangiectasiasColor:
        formRefSubmit.MicrovesselsTelangiectasiasColor.value,
      AdipometryDateLine1: formRefSubmit.AdipometryDateLine1.value,
      AbdominalAdipometryLine1: formRefSubmit.AbdominalAdipometryLine1.value,
      SupraIliacAdipometryLine1: formRefSubmit.SupraIliacAdipometryLine1.value,
      TricepsAdipometryLine1: formRefSubmit.TricepsAdipometryLine1.value,
      BicepsAdipometryLine1: formRefSubmit.BicepsAdipometryLine1.value,
      ToraxAdipometryLine1: formRefSubmit.ToraxAdipometryLine1.value,
      SubscapularAdipometryLine1:
        formRefSubmit.SubscapularAdipometryLine1.value,
      AdipometryDateLine2: formRefSubmit.AdipometryDateLine2.value,
      AbdominalAdipometryLine2: formRefSubmit.AbdominalAdipometryLine2.value,
      SupraIliacAdipometryLine2: formRefSubmit.SupraIliacAdipometryLine2.value,
      TricepsAdipometryLine2: formRefSubmit.TricepsAdipometryLine2.value,
      BicepsAdipometryLine2: formRefSubmit.BicepsAdipometryLine2.value,
      ToraxAdipometryLine2: formRefSubmit.ToraxAdipometryLine2.value,
      SubscapularAdipometryLine2:
        formRefSubmit.SubscapularAdipometryLine2.value,
      AdipometryDateLine3: formRefSubmit.AdipometryDateLine3.value,
      AbdominalAdipometryLine3: formRefSubmit.AbdominalAdipometryLine3.value,
      SupraIliacAdipometryLine3: formRefSubmit.SupraIliacAdipometryLine3.value,
      TricepsAdipometryLine3: formRefSubmit.TricepsAdipometryLine3.value,
      BicepsAdipometryLine3: formRefSubmit.BicepsAdipometryLine3.value,
      ToraxAdipometryLine3: formRefSubmit.ToraxAdipometryLine3.value,
      SubscapularAdipometryLine3:
        formRefSubmit.SubscapularAdipometryLine3.value,
    };

    axios
      .post("https://backend-esthetic-api.onrender.com/bodyProcedure/postBody", objectSend)
      .then((res) => toast.success(res.data.message))
      .catch((res) => toast.error(res.data));

    navigateUrl(`/listadepacientes/${lastClient[0]._id}`);
  };

  const handleChangeOpen = (inputId) => {
    const formRefClear = formRef.current;

    switch (inputId) {
      case "MicrovesselsTelangiectasias": {
        formRefClear.MicrovesselsTelangiectasias.value === "true"
          ? setMicrovesselsOpeneded("show-input")
          : setMicrovesselsOpeneded("hide-input");

        formRefClear.MicrovesselsTelangiectasiasPlace.value = "";

        for (
          let i = 0;
          i < formRefClear.MicrovesselsTelangiectasiasColor.length;
          i++
        ) {
          if (formRefClear.MicrovesselsTelangiectasiasColor[i].checked)
            formRefClear.MicrovesselsTelangiectasiasColor[i].checked = false;
        }
      }
    }
  };

  return (
    <form
      className="bodyevaluationfields"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div>
        <p>Qual ?? a principal queixa?</p>
        <textarea id="Complaint" />
      </div>
      <div>
        <p>FIBRO EDEMA GEL??IDE (FEG)</p>
        <div>
          <p>Tipo</p>
          <label htmlFor="GeloidEdemaType">Fl??cida</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaType"
            className={`GeloidEdemaType-checkbox`}
            type="radio"
            name="GeloidEdemaType"
            value="Fl??cida"
          />
          <label htmlFor="GeloidEdemaType">Edematosa</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaType"
            className={`GeloidEdemaType-checkbox`}
            type="radio"
            name="GeloidEdemaType"
            value="Edematosa"
          />
          <label htmlFor="GeloidEdemaType">Compacta</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaType"
            className={`GeloidEdemaType-checkbox`}
            type="radio"
            name="GeloidEdemaType"
            value="Compacta"
          />
          <label htmlFor="GeloidEdemaType">Mista</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaType"
            className={`GeloidEdemaType-checkbox`}
            type="radio"
            name="GeloidEdemaType"
            value="Mista"
          />
        </div>
        <div>
          <p>Grau</p>
          <label htmlFor="GeloidEdemaDegree">I</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaDegree"
            className={`GeloidEdemaDegree-checkbox`}
            type="radio"
            name="GeloidEdemaDegree"
            value="I"
          />
          <label htmlFor="GeloidEdemaDegree">II</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaDegree"
            className={`GeloidEdemaDegree-checkbox`}
            type="radio"
            name="GeloidEdemaDegree"
            value="II"
          />
          <label htmlFor="GeloidEdemaDegree">III</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaDegree"
            className={`GeloidEdemaDegree-checkbox`}
            type="radio"
            name="GeloidEdemaDegree"
            value="III"
          />
          <label htmlFor="GeloidEdemaDegree">IV</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaDegree"
            className={`GeloidEdemaDegree-checkbox`}
            type="radio"
            name="GeloidEdemaDegree"
            value="IV"
          />
        </div>
        <div>
          <p>Localiza????o</p>
          <input
            id="GeloidEdemaLocation"
            className="additionalinfo-input-text"
          />
        </div>
        <div>
          <p>Colora????o do tecido</p>
          <input id="GeloidEdemaColor" className="additionalinfo-input-text" />
        </div>
        <div>
          <p>Temperatura</p>
          <label htmlFor="GeloidEdemaTemperature">Fria</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaTemperature"
            className={`GeloidEdemaTemperature-checkbox`}
            type="radio"
            name="GeloidEdemaTemperature"
            value="Fria"
          />
          <label htmlFor="GeloidEdemaTemperature">Quente</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaTemperature"
            className={`GeloidEdemaTemperature-checkbox`}
            type="radio"
            name="GeloidEdemaTemperature"
            value="Quente"
          />
        </div>
        <div>
          <p>Presen??a de dor ?? palpa????o:</p>
          <label htmlFor="GeloidEdemaPain">Sim</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaPain"
            className={`GeloidEdemaPain-checkbox`}
            type="radio"
            name="GeloidEdemaPain"
            value={true}
          />
          <label htmlFor="GeloidEdemaPain">N??o</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="GeloidEdemaPain"
            className={`GeloidEdemaPain-checkbox`}
            type="radio"
            name="GeloidEdemaPain"
            value={false}
          />
        </div>
      </div>
      <div>
        <p>Edema</p>
        <div>
          <p>Teste do cacifo (tornozelo)</p>
          <label htmlFor="LockerTest">Positivo</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="LockerTest"
            className={`LockerTest-checkbox`}
            type="radio"
            name="LockerTest"
            value={true}
          />
          <label htmlFor="LockerTest">Negativo</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="LockerTest"
            className={`LockerTest-checkbox`}
            type="radio"
            name="LockerTest"
            value={false}
          />
        </div>
        <div>
          <p>Teste de digito-press??o</p>
          <label htmlFor="DigitPressureTest">Positivo</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="DigitPressureTest"
            className={`DigitPressureTest-checkbox`}
            type="radio"
            name="DigitPressureTest"
            value={true}
          />
          <label htmlFor="DigitPressureTest">Negativo</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="DigitPressureTest"
            className={`DigitPressureTest-checkbox`}
            type="radio"
            name="DigitPressureTest"
            value={false}
          />
        </div>
      </div>
      <div>
        <p>Gordura Localizada</p>
        <div>
          <p>Gordura</p>
          <label htmlFor="FatType">Compacta</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="FatType"
            className={`FatType-checkbox`}
            type="radio"
            name="FatType"
            value="Compacta"
          />
          <label htmlFor="FatType">Fl??cida</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="FatType"
            className={`FatType-checkbox`}
            type="radio"
            name="FatType"
            value="Fl??cida"
          />
        </div>
        <div>
          <p>Distribui????o de Gordura</p>
          <label htmlFor="FatDistribution">Localizada</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="FatDistribution"
            className={`FatDistribution-checkbox`}
            type="radio"
            name="FatDistribution"
            value="Localizada"
          />
          <label htmlFor="FatDistribution">Generalizada</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="FatDistribution"
            className={`FatDistribution-checkbox`}
            type="radio"
            name="FatDistribution"
            value="Generalizada"
          />
        </div>
        <div>
          <p>Biotipo</p>
          <label htmlFor="Biotype">Gin??ide</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="Biotype"
            className={`Biotype-checkbox`}
            type="radio"
            name="Biotype"
            value="Gin??ide"
          />
          <label htmlFor="Biotype">Andr??ide</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="Biotype"
            className={`Biotype-checkbox`}
            type="radio"
            name="Biotype"
            value="Andr??ide"
          />
          <label htmlFor="Biotype">Normol??neo</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="Biotype"
            className={`Biotype-checkbox`}
            type="radio"
            name="Biotype"
            value="Normol??neo"
          />
        </div>
      </div>
      <div>
        <p>Flacidez</p>
        <div>
          <p>Tissular</p>
          <div>
            <label>Grau</label>
            <input
              style={{ marginBottom: "30px" }}
              id="TissueFlaccidityDegree"
              className="additionalinfo-input-text"
            />
            <label>Localiza????o</label>
            <input
              id="TissueFlaccidityPlace"
              className="additionalinfo-input-text"
            />
          </div>
          <p>Muscular</p>
          <div>
            <label>Grau</label>
            <input
              style={{ marginBottom: "30px" }}
              id="MuscularFlaccidityDegree"
              className="additionalinfo-input-text"
            />
            <label>Localiza????o</label>
            <input
              id="MuscularFlaccidityPlace"
              className="additionalinfo-input-text"
            />
          </div>
        </div>
      </div>
      <div>
        <p>Estrias</p>
        <div>
          <p>Cor</p>
          <label htmlFor="StriaeColor">Rubra</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="StriaeColor"
            className={`StriaeColor-checkbox`}
            type="radio"
            name="StriaeColor"
            value="Rubra"
          />
          <label htmlFor="StriaeColor">Alba</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="StriaeColor"
            className={`StriaeColor-checkbox`}
            type="radio"
            name="StriaeColor"
            value="Alba"
          />
        </div>
        <div>
          <p>Largura</p>
          <label htmlFor="StriaeWidth">Fina</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="StriaeWidth"
            className={`StriaeWidth-checkbox`}
            type="radio"
            name="StriaeWidth"
            value="Fina"
          />
          <label htmlFor="StriaeWidth">Larga</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="StriaeWidth"
            className={`StriaeWidth-checkbox`}
            type="radio"
            name="StriaeWidth"
            value="Larga"
          />
        </div>
        <div>
          <p>Tipo</p>
          <label htmlFor="StriaeType">Atr??fica</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="StriaeType"
            className={`StriaeType-checkbox`}
            type="radio"
            name="StriaeType"
            value="Atr??fica"
          />
          <label htmlFor="StriaeType">Hipertr??fica</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="StriaeType"
            className={`StriaeType-checkbox`}
            type="radio"
            name="StriaeType"
            value="Hipertr??fica"
          />
        </div>
        <div>
          <label>Quantidade</label>
          <input id="StriaeQuantity" className="additionalinfo-input-text" />
        </div>
        <div>
          <label>Regi??o</label>
          <input id="StriaeRegion" className="additionalinfo-input-text" />
        </div>
      </div>
      <div>
        <p>Altera????es Vasculares</p>
        <div>
          <p>Microvasos/Telangiectasias</p>
          <label htmlFor="MicrovesselsTelangiectasias">Sim</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="MicrovesselsTelangiectasias"
            name="MicrovesselsTelangiectasias"
            type="radio"
            value={true}
            onClick={() => handleChangeOpen("MicrovesselsTelangiectasias")}
          />
          <label htmlFor="MicrovesselsTelangiectasias">N??o</label>
          <input
            style={{ marginLeft: 5, marginRight: 20 }}
            id="MicrovesselsTelangiectasias"
            name="MicrovesselsTelangiectasias"
            type="radio"
            value={false}
            onClick={() => handleChangeOpen("MicrovesselsTelangiectasias")}
          />
          <div className={microvesselsOpeneded}>
            <input
              id="MicrovesselsTelangiectasiasPlace"
              className={"additionalinfo-input-text  "}
              placeholder="Regi??o"
            />
            <p style={{ marginTop: "30px" }}>Colora????o</p>
            <label htmlFor="MicrovesselsTelangiectasiasColor">
              Avermelhados
            </label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="MicrovesselsTelangiectasiasColor"
              name="MicrovesselsTelangiectasiasColor"
              type="radio"
              value="Avermelhados"
            />
            <label htmlFor="MicrovesselsTelangiectasiasColor">Arroxeados</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="MicrovesselsTelangiectasiasColor"
              name="MicrovesselsTelangiectasiasColor"
              type="radio"
              value="Arroxeados"
            />
          </div>
        </div>
      </div>
      <div>
        <p>Adipometria</p>
        <Table />
      </div>
      <button className="submit-button-basic">Continuar</button>
    </form>
  );
}

export default BodyEvaluationForm;
