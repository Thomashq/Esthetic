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
      .post("http://localhost:3080/facial/postFacial", objectSend)
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
        <p>Biotipo Cutâneo</p>
        <label htmlFor="cutaneousbiotype">Eudérmico</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="cutaneousbiotype"
          className={`cutaneousbiotype-checkbox`}
          type="radio"
          name="cutaneousbiotype"
          value="Eudérmico"
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
        <label htmlFor="cutaneousbiotype">Sensível</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="cutaneousbiotype"
          className={`cutaneousbiotype-checkbox `}
          type="radio"
          name="cutaneousbiotype"
          value="Sensível"
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
        <label htmlFor="texture">Áspera</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="texture"
          className={`texture-checkbox `}
          type="radio"
          name="texture"
          value="Áspera"
        />
      </div>
      <div>
        <p>Óstios</p>
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
        <label htmlFor="ostios">Não aparentes</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="ostios"
          className={`ostios-checkbox `}
          type="radio"
          name="ostios"
          value="Não aparentes"
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
        <p>Fototipo Cutâneo Fitzpatrick</p>
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
        <p>Lesões de Pele</p>
        <label htmlFor="skininjuretype">Comedões</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox`}
          type="radio"
          name="skininjuretype"
          value="Comedões"
        />
        <label htmlFor="skininjuretype">Pápula</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Pápula"
        />
        <label htmlFor="skininjuretype">Pústula</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Pústula"
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
        <label htmlFor="skininjuretype">Nódulo</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Nódulo"
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
        <label htmlFor="skininjuretype">Nevo Melanocítico</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Nevo Melanocítico"
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
        <label htmlFor="skininjuretype">Ulceração</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Ulceração"
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
        <label htmlFor="skininjuretype">Psoríase</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="skininjuretype"
          className={`skininjuretype-checkbox `}
          type="radio"
          name="skininjuretype"
          value="Psoríase"
        />
      </div>
      <div>
        <p>Cicatriz</p>
        <label htmlFor="scars">Hipertrófica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox`}
          type="radio"
          name="scars"
          value="Hipertrófica"
        />
        <label htmlFor="scars">Atrófica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Atrófica"
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
        <label htmlFor="scars">Retrátil</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Retrátil"
        />
        <label htmlFor="scars">Hipercrômica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Hipercrômica"
        />
        <label htmlFor="scars">Hipocrômica</label>
        <input
          style={{ marginLeft: 5, marginRight: 20 }}
          id="scars"
          className={`scars-checkbox `}
          type="radio"
          name="scars"
          value="Hipocrômica"
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
