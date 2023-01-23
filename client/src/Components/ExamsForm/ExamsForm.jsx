import "../../Styles/Exams/Exams.css";
import { Link } from "react-router-dom";
import imgEsthetic from "../../img/esthetic.png";

function ExamsForm() {
  return (
    <section className="exams-section">
      <div className="exams-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <div className="exams-form">
          <h1>Escolher Exame</h1>
          <div className="exams-select">
            <Link to="/adicionarpaciente/exames/avaliacaocorporal">
              <button>Avaliação Corporal</button>
            </Link>
            <Link to="/adicionarpaciente/exames/avaliacaocapilar">
              <button>Avaliação Capilar</button>
            </Link>
            <Link to="/adicionarpaciente/exames/avaliacaogeral">
              <button>Avaliação Geral</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExamsForm;
