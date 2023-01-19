import "../../Styles/NewClient/NewClient.css";
import StandardFields from "../StandardFields/StandardFields";
import imgEsthetic from "../../img/esthetic.png";
import { Link } from "react-router-dom";

function NewClient() {
  return (
    <section className="newclient-section">
      <div className="newclient-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <Link to="/" className="return-button">
          <p>Voltar</p>
        </Link>
        <div className="newclient-forms">
          <h2>Dados do Paciente</h2>
          <StandardFields />
        </div>
      </div>
    </section>
  );
}

export default NewClient;
