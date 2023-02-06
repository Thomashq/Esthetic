import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CheckboxSub from "../../../CheckboxSub/CheckboxSub";
import Checkbox from "../../../Checkbox/Checkbox";
import CheckboxDate from "../../../CheckboxDate/CheckboxDate";
import CheckboxOnly from "../../../CheckboxOnly/CheckboxOnly";
import mainHair from "../../../../img/man-hair.png";
import womanHair from "../../../../img/woman-hair.png";

function CapillaryEvaluationForm() {
  const formRef = useRef();
  const [openedDisease, setOpenedDisease] = useState("hide-input");
  const [openedPrevious, setOpenedPrevious] = useState("hide-input");
  const [openedImplant, setOpenedImplant] = useState("hide-input");
  const [openedComplication, setOpenedComplication] = useState("hide-input");
  const [openedTreatment, setOpenedTreatment] = useState("hide-input");
  const [manHairContent, setManHairContent] = useState("hide-input");
  const [womanHairContent, setWomanHairContent] = useState("hide-input");
  const [manBaldnessValue, setManBaldnessValue] = useState(false);
  const [womanBaldnessValue, setWomanBaldnessValue] = useState(false);
  const [lastClient, setLastClient] = useState([]);
  const navigateUrl = useNavigate();

  const getLastClient = async () => {
    try {
      const lastClient = await axios
        .get("http://localhost:3080/client/getLastClient")
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
      SpecificDisease: formRefSubmit.specificdisease.value,
      SpecificDiseaseDescription:
        formRefSubmit.specificdiseasedescription.value,
      PreviousProcedure: formRefSubmit.previousprocedure.value,
      PreviousProcedureDescription: formRefSubmit.inputpreviousprocedure.value,
      AcessoryUse: formRefSubmit.acessoryuse.value,
      CapillaryHygieneDescription:
        formRefSubmit.capillaryhygienedescription.value,
      CapillaryProducts: formRefSubmit.capillaryproducts.value,
      HairType: formRefSubmit.hairtype.value,
      HairAspect: formRefSubmit.hairaspect.value,
      HairLength: formRefSubmit.hairlength.value,
      HairCurvature: formRefSubmit.haircurvature.value,
      HairDensity: formRefSubmit.hairdensity.value,
      HairPorosoty: formRefSubmit.hairporosoty.value,
      HairTexture: formRefSubmit.hairtexture.value,
      HairElasticity: formRefSubmit.hairelasticity.value,
      HairColor: formRefSubmit.haircolor.value,
      HairFaults: formRefSubmit.hairfaults.value,
      AlopeciaPlace: formRefSubmit.alopeciaplace.value,
      AlopeciaForm: formRefSubmit.alopeciaform.value,
      AlopeciaInjurePlace: formRefSubmit.alopeciainjureplace.value,
      AlopeciaInjureNumber: formRefSubmit.alopeciainjurenumber.value,
      AlopeciaInjureSize: formRefSubmit.alopeciainjuresize.value,
      HairImplant: formRefSubmit.hairimplant.value,
      HairImplantDescription: formRefSubmit.inputhairimplant.value,
      HairImplantDate: formRefSubmit.inputhairimplantdate.value,
      HairPiece: formRefSubmit.hairpiece.value,
      HairPieceComplication: formRefSubmit.hairpiececomplication.value,
      HairPieceComplicationDescription:
        formRefSubmit.inputhairpiececomplication.value,
      PostHairPieceComplicationTreatment:
        formRefSubmit.hairpiececomplication.value,
      PostHairPieceComplicationTreatmentDescription:
        formRefSubmit.inputposthairpiececomplicationtreatment.value,
      FamilyBaldness: formRefSubmit.familybaldness.value,
      WomanBaldness: formRefSubmit.womanbaldness.value,
      ManBaldness: formRefSubmit.manbaldness.value,
      FamilyBaldnessGrade: formRefSubmit.familybaldnessgrade.value,
    };

    axios
      .post(
        "http://localhost:3080/capillary/postCapillary",
        objectSend
      )
      .then((res) => toast.success(res.data.message))
      .catch((res) => toast.error(res.data));

    navigateUrl(`/listadepacientes/${lastClient[0]._id}`);
  };

  const handleChangeCheckbox = (capillaryInfo) => {
    const formRefClear = formRef.current;

    switch (capillaryInfo) {
      case "specificdisease": {
        openedDisease === "hide-input"
          ? setOpenedDisease("show-input")
          : setOpenedDisease("hide-input");

        formRefClear.specificdisease.value = "";
        break;
      }
      case "previousprocedure": {
        openedPrevious === "hide-input"
          ? setOpenedPrevious("show-input")
          : setOpenedPrevious("hide-input");

        formRefClear.previousprocedure.value = "";
        break;
      }
      case "hairimplant": {
        openedImplant === "hide-input"
          ? setOpenedImplant("show-input")
          : setOpenedImplant("hide-input");

        formRefClear.hairimplant.value = "";
        break;
      }
      case "hairpiececomplication": {
        openedComplication === "hide-input"
          ? setOpenedComplication("show-input")
          : setOpenedComplication("hide-input");

        formRefClear.hairpiececomplication.value = "";
        break;
      }
      case "posthairpiececomplicationtreatment": {
        openedTreatment === "hide-input"
          ? setOpenedTreatment("show-input")
          : setOpenedTreatment("hide-input");

        formRefClear.posthairpiececomplicationtreatment.value = "";
        break;
      }
      case "man": {
        manHairContent === "hide-input"
          ? setManHairContent("show-input")
          : setManHairContent("hide-input");

        if (womanHairContent === "show-input")
          setWomanHairContent("hide-input");

        for (let i = 0; i < formRefClear.familybaldnessgrade.length; i++) {
          if (formRefClear.familybaldnessgrade[i].checked)
            formRefClear.familybaldnessgrade[i].checked = false;
        }

        setManBaldnessValue(true);
        setWomanBaldnessValue(false);

        break;
      }
      case "woman": {
        womanHairContent === "hide-input"
          ? setWomanHairContent("show-input")
          : setWomanHairContent("hide-input");

        if (manHairContent === "show-input") setManHairContent("hide-input");

        for (let i = 0; i < formRefClear.familybaldnessgrade.length; i++) {
          if (formRefClear.familybaldnessgrade[i].checked)
            formRefClear.familybaldnessgrade[i].checked = false;
        }

        setManBaldnessValue(false);
        setWomanBaldnessValue(true);

        break;
      }
    }
  };
  return (
    <form
      className="capillaryevaluationfields"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div>
        <p>Qual é a principal queixa?</p>
        <textarea id="specificdiseasedescription" />
      </div>
      <CheckboxSub
        text="Possui algum problema de saúde?"
        id="specificdisease"
        opened={openedDisease}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="Já fez algum tratamento anti-queda?"
        id="previousprocedure"
        opened={openedPrevious}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <div>
        <p>Acessórios</p>
        <label htmlFor="acessoryuse">Gel</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox`}
          type="radio"
          name="acessoryuse"
          value="Gel"
        />
        <label htmlFor="acessoryuse">Bonés</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox `}
          type="radio"
          name="acessoryuse"
          value="Bonés"
        />
        <label htmlFor="acessoryuse">Chapéu</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox `}
          type="radio"
          name="acessoryuse"
          value="Chapéu"
        />
        <label htmlFor="acessoryuse">Penteados presos</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox `}
          type="radio"
          name="acessoryuse"
          value="Penteados presos"
        />
        <label htmlFor="acessoryuse">Escovas</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox `}
          type="radio"
          name="acessoryuse"
          value="Escovas"
        />
        <label htmlFor="acessoryuse">Capacetes</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox `}
          type="radio"
          name="acessoryuse"
          value="Capacetes"
        />
        <label htmlFor="acessoryuse">Chapinhas</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acessoryuse"
          className={`acessoryuse-checkbox `}
          type="radio"
          name="acessoryuse"
          value="Chapinhas"
        />
      </div>
      <div>
        <p>Quantas vezes lava os cabelos, por semana?</p>
        <input
          id="capillaryhygienedescription"
          className="additionalinfo-input-text"
        />
      </div>
      <div>
        <p>
          Quais shampoos, condicionadores e outros produtos capilares que está
          usando?
        </p>
        <input id="capillaryproducts" className="additionalinfo-input-text" />
      </div>
      <div>
        <p>Quanto ao couro cabeludo, apresenta</p>
        <label htmlFor="hairfaults">Falhas</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairfaults"
          className={`acessoryuse-checkbox`}
          type="radio"
          name="hairfaults"
          value="Falhas"
        />
        <label htmlFor="hairfaults">Entradas</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairfaults"
          className={`hairfaults-checkbox `}
          type="radio"
          name="hairfaults"
          value="Entradas"
        />
        <label htmlFor="hairfaults">Calvície</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairfaults"
          className={`hairfaults-checkbox `}
          type="radio"
          name="hairfaults"
          value="Calvície"
        />
      </div>
      <div>
        <p>Tipo do Cabelo</p>
        <label htmlFor="hairtype">Normal</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtype"
          className={`hairtype-checkbox`}
          type="radio"
          name="hairtype"
          value="Normal"
        />
        <label htmlFor="hairtype">Oleoso</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtype"
          className={`hairtype-checkbox`}
          type="radio"
          name="hairtype"
          value="Oleoso"
        />
        <label htmlFor="hairtype">Seco</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtype"
          className={`hairtype-checkbox`}
          type="radio"
          name="hairtype"
          value="Seco"
        />
        <label htmlFor="hairtype">Misto</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtype"
          className={`hairtype-checkbox`}
          type="radio"
          name="hairtype"
          value="Misto"
        />
      </div>
      <div>
        <p>Aspecto do Cabelo</p>
        <label htmlFor="hairaspect">Macio</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairaspect"
          className={`hairaspect-checkbox`}
          type="radio"
          name="hairaspect"
          value="Macio"
        />
        <label htmlFor="hairaspect">Áspero</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairaspect"
          className={`hairaspect-checkbox`}
          type="radio"
          name="hairaspect"
          value="Áspero"
        />
        <label htmlFor="hairaspect">Brilhante</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairaspect"
          className={`hairaspect-checkbox`}
          type="radio"
          name="hairaspect"
          value="Brilhante"
        />
        <label htmlFor="hairaspect">Opacos</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairaspect"
          className={`hairaspect-checkbox`}
          type="radio"
          name="hairaspect"
          value="Opacos"
        />
      </div>
      <div>
        <p>Comprimento do Cabelo</p>
        <label htmlFor="hairlength">Curto</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairlength"
          className={`hairlength-checkbox`}
          type="radio"
          name="hairlength"
          value="Curto"
        />
        <label htmlFor="hairlength">Médio</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairlength"
          className={`hairlength-checkbox`}
          type="radio"
          name="hairlength"
          value="Médio"
        />
        <label htmlFor="hairlength">Longo</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairlength"
          className={`hairlength-checkbox`}
          type="radio"
          name="hairlength"
          value="Longo"
        />
      </div>
      <div>
        <p>Curvatura do Cabelo</p>
        <label htmlFor="haircurvature">Liso</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="haircurvature"
          className={`haircurvature-checkbox`}
          type="radio"
          name="haircurvature"
          value="Curto"
        />
        <label htmlFor="haircurvature">Ondulado</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="haircurvature"
          className={`haircurvature-checkbox`}
          type="radio"
          name="haircurvature"
          value="Ondulado"
        />
        <label htmlFor="haircurvature">Crespo</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="haircurvature"
          className={`haircurvature-checkbox`}
          type="radio"
          name="haircurvature"
          value="Crespo"
        />
      </div>
      <div>
        <p>Densidade do Cabelo</p>
        <label htmlFor="hairdensity">Pouco</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairdensity"
          className={`hairdensity-checkbox`}
          type="radio"
          name="hairdensity"
          value="Pouco"
        />
        <label htmlFor="hairdensity">Muito</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairdensity"
          className={`hairdensity-checkbox`}
          type="radio"
          name="hairdensity"
          value="Muito"
        />
        <label htmlFor="hairdensity">Moderado</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairdensity"
          className={`hairdensity-checkbox`}
          type="radio"
          name="hairdensity"
          value="Moderado"
        />
      </div>
      <div>
        <p>Porosidade do Cabelo</p>
        <label htmlFor="hairporosoty">Poroso</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairporosoty"
          className={`hairporosoty-checkbox`}
          type="radio"
          name="hairporosoty"
          value="Poroso"
        />
        <label htmlFor="hairporosoty">Pouco Poroso</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairporosoty"
          className={`hairporosoty-checkbox`}
          type="radio"
          name="hairporosoty"
          value="Pouco Poroso"
        />
        <label htmlFor="hairporosoty">Muito Poroso</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairporosoty"
          className={`hairporosoty-checkbox`}
          type="radio"
          name="hairporosoty"
          value="Muito Poroso"
        />
      </div>
      <div>
        <p>Textura do Cabelo</p>
        <label htmlFor="hairtexture">Fino</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtexture"
          className={`hairtexture-checkbox`}
          type="radio"
          name="hairtexture"
          value="Fino"
        />
        <label htmlFor="hairtexture">Médio</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtexture"
          className={`hairtexture-checkbox`}
          type="radio"
          name="hairtexture"
          value="Médio"
        />
        <label htmlFor="hairtexture">Grosso</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairtexture"
          className={`hairtexture-checkbox`}
          type="radio"
          name="hairtexture"
          value="Grosso"
        />
      </div>
      <div>
        <p>Elasticidade do Cabelo</p>
        <label htmlFor="hairelasticity">Boa</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairelasticity"
          className={`hairelasticity-checkbox`}
          type="radio"
          name="hairelasticity"
          value="Boa"
        />
        <label htmlFor="hairelasticity">Médio</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairelasticity"
          className={`hairelasticity-checkbox`}
          type="radio"
          name="hairelasticity"
          value="Médio"
        />
        <label htmlFor="hairelasticity">Ausência</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="hairelasticity"
          className={`hairelasticity-checkbox`}
          type="radio"
          name="hairelasticity"
          value="Ausência"
        />
      </div>
      <div>
        <p>Cor do Cabelo</p>
        <label htmlFor="haircolor">Natural</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="haircolor"
          className={`haircolor-checkbox`}
          type="radio"
          name="haircolor"
          value="Natural"
        />
        <label htmlFor="haircolor">Artificial</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="haircolor"
          className={`haircolor-checkbox`}
          type="radio"
          name="haircolor"
          value="Artificial"
        />
      </div>
      <div>
        <p> Apenas para os casos de Alopécia Areata e/ou Cicatricial:</p>
        <div>
          <p>Localização da Lesão</p>
          <input id="alopeciaplace" className="additionalinfo-input-text" />
          <p style={{ marginTop: "30px" }}>Formato</p>
          <input id="alopeciaform" className="additionalinfo-input-text" />
          <p style={{ marginTop: "30px" }}>Nº de Lesões</p>
          <input
            id="alopeciainjurenumber"
            className="additionalinfo-input-text"
          />
          <p style={{ marginTop: "30px" }}>Qual Região?</p>
          <input
            id="alopeciainjureplace"
            className="additionalinfo-input-text"
          />
          <p style={{ marginTop: "30px" }}>Tamanho</p>
          <input
            id="alopeciainjuresize"
            className="additionalinfo-input-text"
          />
        </div>
      </div>
      <CheckboxDate
        text="Já fez implante de cabelos?"
        id="hairimplant"
        opened={openedImplant}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxOnly
        id="hairpiece"
        text="Usa aplique?"
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="Teve alguma complicação pós implante?"
        id="hairpiececomplication"
        opened={openedComplication}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Checkbox
        text="Fez algum tratamento capilar pós implante?"
        id="posthairpiececomplicationtreatment"
        opened={openedTreatment}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxOnly
        id="familybaldness"
        text="Alguém da família tem algum tipo de calvície?"
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <div>
        <p>Selecione o grau de calvíce</p>
        <label htmlFor="manbaldness">Homem</label>
        <input
          id="manbaldness"
          name="radiobaldness"
          type="radio"
          style={{ marginLeft: 5, marginRight: 20 }}
          onClick={() => handleChangeCheckbox("man")}
          value={manBaldnessValue}
        />
        <label htmlFor="womanbaldness">Mulher</label>
        <input
          id="womanbaldness"
          name="radiobaldness"
          type="radio"
          style={{ marginLeft: 5, marginRight: 20 }}
          onClick={() => handleChangeCheckbox("woman")}
          value={womanBaldnessValue}
        />
        <div className={`${manHairContent}  man-hair`}>
          <img src={mainHair} alt="grau de calvice homem" />
          <div>
            <label htmlFor="familybaldnessgrade">I</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="I"
            />
            <label htmlFor="familybaldnessgrade">II</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="II"
            />
            <label htmlFor="familybaldnessgrade">IIa</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="IIa"
            />
            <label htmlFor="familybaldnessgrade">III</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="III"
            />
            <label htmlFor="familybaldnessgrade">IIIa</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="IIIa"
            />
            <label htmlFor="familybaldnessgrade">III vertex</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="III vertex"
            />
            <label htmlFor="familybaldnessgrade">IV</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="IV"
            />
            <label htmlFor="familybaldnessgrade">V</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="V"
            />
            <label htmlFor="familybaldnessgrade">Va</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="Va"
            />
            <label htmlFor="familybaldnessgrade">VI</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="VI"
            />
            <label htmlFor="familybaldnessgrade">VII</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="VII"
            />
          </div>
        </div>
        <div className={`${womanHairContent} woman-hair`}>
          <img src={womanHair} alt="grau de calvice mulher" />
          <div>
            <label htmlFor="familybaldnessgrade">I-1</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="I-1"
            />
            <label htmlFor="familybaldnessgrade">I-2</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="I-2"
            />
            <label htmlFor="familybaldnessgrade">I-3</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="I-3"
            />
            <label htmlFor="familybaldnessgrade">I-4</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="I-4"
            />
            <label htmlFor="familybaldnessgrade">II-1</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="II-1"
            />
            <label htmlFor="familybaldnessgrade">II-2</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="II-2"
            />
            <label htmlFor="familybaldnessgrade">III</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="III"
            />
            <label htmlFor="familybaldnessgrade">Avançado</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="Avançado"
            />
            <label htmlFor="familybaldnessgrade">Frontal</label>
            <input
              style={{ marginLeft: 5, marginRight: 20 }}
              id="familybaldnessgrade"
              className={`familybaldnessgrade-checkbox`}
              type="radio"
              name="familybaldnessgrade"
              value="Frontal"
            />
          </div>
        </div>
      </div>
      <button className="submit-button-basic">Continuar</button>
    </form>
  );
}

export default CapillaryEvaluationForm;
