import "../../Styles/Home/Home.css";
import flower from "../../img/flor.png";
import doubleFlower from "../../img/flor dupla.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [transitionPage, seTtransitionPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      seTtransitionPage(0);
    }, 3000);
  }, [transitionPage]);

  return (
    <>
      <div
        className={
          transitionPage === 1 ? "img-transition show" : "img-transition hide"
        }
      ></div>
      <section
        className={
          transitionPage === 0 ? "home-section show" : "home-section hide"
        }
      >
        <div className="home-title-group">
          <h1>Thailes Pinheiro</h1>
          <h2>Biomédica Esteta</h2>
        </div>
        <div className="home-button-group">
          <button>
            <Link to="/adicionarpaciente">Adicionar Paciente</Link>
          </button>
          <button>
            <Link to="/listadepacientes">Lista de Pacientes</Link>
          </button>
        </div>
        <img src={flower} className="flower"></img>
        <img src={doubleFlower} className="double-flower"></img>
      </section>
    </>
  );
}

export default Home;
