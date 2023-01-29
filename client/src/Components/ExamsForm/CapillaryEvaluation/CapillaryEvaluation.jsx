import imgEsthetic from "../../../img/esthetic.png";
import "../../../Styles/Exams/CapillaryEvaluation/CapillaryEvaluation.css";
import CapillaryEvaluationForm from "./CapillaryEvaluationForm/CapillaryEvaluationForm";

function CapillaryEvaluation() {
  return (
    <section className="capillaryevaluation-section">
      <div className="capillaryevaluation-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <div className="capillaryevaluation-forms">
          <h1>Avaliação Capilar</h1>
          <CapillaryEvaluationForm />
        </div>
      </div>
    </section>
  );
}

export default CapillaryEvaluation;
