import imgEsthetic from "../../../img/esthetic.png";
import "../../../Styles/Exams/FacialEvaluation/FacialEvaluation.css";
import FacialEvaluationForm from "./FacialEvaluationForm/FacialEvaluationForm";

function FacialEvaluation() {
  return (
    <section className="facialevaluation-section">
      <div className="facialevaluation-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <div className="facialevaluation-forms">
          <h1>Avaliação Facial</h1>
          <FacialEvaluationForm />
        </div>
      </div>
    </section>
  );
}

export default FacialEvaluation;
