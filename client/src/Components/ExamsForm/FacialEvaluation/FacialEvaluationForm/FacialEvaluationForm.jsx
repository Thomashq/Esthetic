import { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "../../../Checkbox/Checkbox";
import CheckboxOnly from "../../../CheckboxOnly/CheckboxOnly";

function FacialEvaluationForm() {
  const [lastClient, setLastClient] = useState([]);
  const [darkCircleOpened, setDarkCircleOpened] = useState("hide-input");
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
      CutaneousBiotype: formRefSubmit.cutaneousbiotype.value,
      CutaneousStatus: "",
      Texture: formRefSubmit.texture.value,
      Ostios: formRefSubmit.ostios.value,
      Acne: formRefSubmit.acne.value,
      FitzPatrickSkinPhototype: formRefSubmit.fitzpatrickskinphototype.value,
      SkinInjureType: formRefSubmit.skininjuretype.value,
      Scars: formRefSubmit.scars.value,
      DarkCircles: formRefSubmit.darkcircles.value,
      DarkCirclesType: formRefSubmit.inputdarkcircles.value,
      Flaccidity: formRefSubmit.flaccidity.value,
      TreatmentObjectives: formRefSubmit.treatmentobjectives.value,
      Treatment: formRefSubmit.treatment.value,
    };

    axios
      .post(
        "https://backend-esthetic-api.onrender.com/facial/postFacial",
        objectSend
      )
      .then((res) => toast.success(res.data.message))
      .catch((res) => toast.error(res.data));

    navigateUrl(`/listadepacientes/${lastClient[0]._id}`);
  };

  const handleChangeCheckbox = (facialInfo) => {
    const formRefClear = formRef.current;

    darkCircleOpened === "hide-input"
      ? setDarkCircleOpened("show-input")
      : setDarkCircleOpened("hide-input");

    formRefClear.inputdarkcircles.value = "";
  };

  return (
    <form
      className="facialevaluationfields"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div>
        <p>Biotipo Cut??neo</p>
        <label htmlFor="cutaneousbiotype">Eud??rmico</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="cutaneousbiotype"
          className={`cutaneousbiotype-checkbox`}
          type="radio"
          name="cutaneousbiotype"
          value="Eud??rmico"
        />
        <label htmlFor="cutaneousbiotype">Mista</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="cutaneousbiotype"
          className={`cutaneousbiotype-checkbox `}
          type="radio"
          name="cutaneousbiotype"
          value="Mista"
        />
        <label htmlFor="cutaneousbiotype">Oleosa</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="cutaneousbiotype"
          className={`cutaneousbiotype-checkbox`}
          type="radio"
          name="cutaneousbiotype"
          value="Oleosa"
        />
        <label htmlFor="cutaneousbiotype">Sens??vel</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="cutaneousbiotype"
          className={`cutaneousbiotype-checkbox `}
          type="radio"
          name="cutaneousbiotype"
          value="Sens??vel"
        />
      </div>
      <div>
        <p>Textura</p>
        <label htmlFor="texture">Lisa</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="texture"
          className={`texture-checkbox`}
          type="radio"
          name="texture"
          value="Lisa"
        />
        <label htmlFor="texture">??spera</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="texture"
          className={`texture-checkbox `}
          type="radio"
          name="texture"
          value="??spera"
        />
      </div>
      <div>
        <p>??stios</p>
        <label htmlFor="ostios">Dilatados na zona</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="ostios"
          className={`ostios-checkbox`}
          type="radio"
          name="ostios"
          value="Dilatados na Zona"
        />
        <label htmlFor="ostios">Dilatados em toda face</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="ostios"
          className={`ostios-checkbox `}
          type="radio"
          name="ostios"
          value="Dilatados em toda face"
        />
        <label htmlFor="ostios">N??o aparentes</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="ostios"
          className={`ostios-checkbox `}
          type="radio"
          name="ostios"
          value="N??o aparentes"
        />
      </div>
      <div>
        <p>Acne</p>
        <label htmlFor="acne">Grau 1</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acne"
          className={`acne-checkbox`}
          type="radio"
          name="acne"
          value="Grau 1"
        />
        <label htmlFor="acne">Grau 2</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acne"
          className={`acne-checkbox `}
          type="radio"
          name="acne"
          value="Grau 2"
        />
        <label htmlFor="acne">Grau 3</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acne"
          className={`acne-checkbox `}
          type="radio"
          name="acne"
          value="Grau 3"
        />
        <label htmlFor="acne">Grau 4</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acne"
          className={`acne-checkbox `}
          type="radio"
          name="acne"
          value="Grau 4"
        />
        <label htmlFor="acne">Grau 5</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="acne"
          className={`acne-checkbox `}
          type="radio"
          name="acne"
          value="Grau 5"
        />
      </div>
      <div>
        <p>Fototipo Cut??neo Fitzpatrick</p>
        <label htmlFor="fitzpatrickskinphototype">Fototipo 1</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="fitzpatrickskinphototype"
          className={`fitzpatrickskinphototype-checkbox`}
          type="radio"
          name="fitzpatrickskinphototype"
          value="Fototipo 1"
        />
        <label htmlFor="fitzpatrickskinphototype">Fototipo 2</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="fitzpatrickskinphototype"
          className={`fitzpatrickskinphototype-checkbox `}
          type="radio"
          name="fitzpatrickskinphototype"
          value="Fototipo 2"
        />
        <label htmlFor="fitzpatrickskinphototype">Fototipo 3</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="fitzpatrickskinphototype"
          className={`fitzpatrickskinphototype-checkbox `}
          type="radio"
          name="fitzpatrickskinphototype"
          value="Fototipo 3"
        />
        <label htmlFor="fitzpatrickskinphototype">Fototipo 4</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="fitzpatrickskinphototype"
          className={`fitzpatrickskinphototype-checkbox `}
          type="radio"
          name="fitzpatrickskinphototype"
          value="Fototipo 4"
        />
        <label htmlFor="fitzpatrickskinphototype">Fototipo 5</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="fitzpatrickskinphototype"
          className={`fitzpatrickskinphototype-checkbox `}
          type="radio"
          name="fitzpatrickskinphototype"
          value="Fototipo 5"
        />
        <label htmlFor="fitzpatrickskinphototype">Fototipo 6</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="fitzpatrickskinphototype"
          className={`fitzpatrickskinphototype-checkbox `}
          type="radio"
          name="fitzpatrickskinphototype"
          value="Fototipo 6"
        />
      </div>
      <div>
        <p>Les??es de Pele</p>
        <label htmlFor="skininjuretype">Comed??es</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox`}
          type="radio"
          name="skininjuretype"
          value="Comed??es"
        />
        <label htmlFor="skininjuretype">P??pula</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="P??pula"
        />
        <label htmlFor="skininjuretype">P??stula</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="P??stula"
        />
        <label htmlFor="skininjuretype">Milium</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Milium"
        />
        <label htmlFor="skininjuretype">Cisto</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Cisto"
        />
        <label htmlFor="skininjuretype">N??dulo</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="N??dulo"
        />
        <label htmlFor="skininjuretype">Siringoma</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Siringoma"
        />
        <label htmlFor="skininjuretype">Nevo Melanoc??tico</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Nevo Melanoc??tico"
        />
        <label htmlFor="skininjuretype">Dermatite</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Dermatite"
        />
        <label htmlFor="skininjuretype">Ulcera????o</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Ulcera????o"
        />
        <label htmlFor="skininjuretype">Hiperqueratose</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Hiperqueratose"
        />
        <label htmlFor="skininjuretype">Psor??ase</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Psor??ase"
        />
      </div>
      <div>
        <p>Cicatriz</p>
        <label htmlFor="scars">Hipertr??fica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox`}
          type="radio"
          name="scars"
          value="Hipertr??fica"
        />
        <label htmlFor="scars">Atr??fica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Atr??fica"
        />
        <label htmlFor="scars">Queloidiana</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Queloidiana"
        />
        <label htmlFor="scars">Retr??til</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Retr??til"
        />
        <label htmlFor="scars">Hipercr??mica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Hipercr??mica"
        />
        <label htmlFor="scars">Hipocr??mica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Hipocr??mica"
        />
      </div>
      <Checkbox
        id="darkcircles"
        text="Olheiras"
        opened={darkCircleOpened}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <CheckboxOnly id="flaccidity" text="Flacidez" />
      <div>
        <p>Objetivos do Tratamento</p>
        <textarea id="treatmentobjectives" />
      </div>
      <div>
        <p>Tratamento Proposto</p>
        <textarea id="treatment" />
      </div>
      <button className="submit-button-basic">Continuar</button>
    </form>
  );
}

export default FacialEvaluationForm;
