import imgEsthetic from "../../img/esthetic.png";
import "../../Styles/Additionalinfo/Additionalinfo.css";
import AdditionalInfoForms from "./AdditionalInfoForms/AdditionalInfoForms";

function AdditionalInfo() {
  return (
    <section className="additionalinfo-section">
      <div className="additionalinfo-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <div className="additionalinfo-forms">
          <h1>Informações Adicionais</h1>
          <AdditionalInfoForms />
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfo;
