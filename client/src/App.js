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

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adicionarpaciente" element={<NewClient />}></Route>
        <Route path="/listadepacientes" element={<ClientList />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
