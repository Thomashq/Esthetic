import imgEsthetic from "../../../img/esthetic.png";
import BodyEvaluationForm from "./BodyEvaluationForm/BodyEvaluationForm";
import "../../../Styles/Exams/BodyEvaluation/BodyEvaluation.css";

function BodyEvaluation() {
  return (
    <section className="bodyevaluation-section">
      <div className="bodyevaluation-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <div className="bodyevaluation-forms">
          <h1>Avaliação Corporal</h1>
          <BodyEvaluationForm />
        </div>
      </div>
    </section>
  );
}

export default BodyEvaluation;
