import imgEsthetic from "../../../img/esthetic.png";
import GeneralEvaluationForm from "./GeneralEvaluationForm/GeneralEvaluationForm";
import "../../../Styles/Exams/GeneralEvaluation/GeneralEvaluation.css";

function GeneralEvaluation() {
  return (
    <section className="generalevaluation-section">
      <div className="generalevaluation-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <div className="generalevaluation-forms">
          <h1>Avaliação Geral</h1>
          <GeneralEvaluationForm />
        </div>
      </div>
    </section>
  );
}

export default GeneralEvaluation;
