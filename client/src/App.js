import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewClient from "./Components/NewClient/NewClient";
import ClientList from "./Components/ClientList/ClientList";
import ExamsForm from "./Components/ExamsForm/ExamsForm";
import BodyEvaluation from "./Components/ExamsForm/BodyEvaluation/BodyEvaluation";
import CapillaryEvaluation from "./Components/ExamsForm/CapillaryEvaluation/CapillaryEvaluation";
import GeneralEvaluation from "./Components/ExamsForm/GeneralEvaluation/GeneralEvaluation";
import AdditionalInfo from "./Components/AdditionalInfo/AdditionalInfo";
import FacialEvaluation from "./Components/ExamsForm/FacialEvaluation/FacialEvaluation";
import ClientInfo from "./Components/ClientInfo/ClientInfo";
import Login from "./Components/Login/Login";

function App() {
  const getLocalStorage = localStorage.getItem("@user");
  let logged = "";

  if (getLocalStorage) {
    logged = getLocalStorage.includes("estetathailes123") ? true : false;
  } else logged = false;

  return (
    <Router>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      <Switch>
        {!logged && <Route path="/" element={<Login />} />}
        {logged && (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adicionarpaciente" element={<NewClient />}></Route>
            <Route path="/listadepacientes" element={<ClientList />}></Route>
            <Route
              path="/listadepacientes/:clientId"
              element={<ClientInfo />}
            ></Route>
            <Route
              path="/adicionarpaciente/informacoesadicionais"
              element={<AdditionalInfo />}
            ></Route>
            <Route
              path="/adicionarpaciente/informacoesadicionais/exames"
              element={<ExamsForm />}
            ></Route>
            <Route
              path="/adicionarpaciente/informacoesadicionais/exames/avaliacaocorporal"
              element={<BodyEvaluation />}
            ></Route>
            <Route
              path="/adicionarpaciente/informacoesadicionais/exames/avaliacaocapilar"
              element={<CapillaryEvaluation />}
            ></Route>
            <Route
              path="/adicionarpaciente/informacoesadicionais/exames/avaliacaogeral"
              element={<GeneralEvaluation />}
            ></Route>
            <Route
              path="/adicionarpaciente/informacoesadicionais/exames/avaliacaofacial"
              element={<FacialEvaluation />}
            ></Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
