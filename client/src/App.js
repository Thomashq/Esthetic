import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import NewClient from "./Components/NewClient/NewClient";
import ClientList from "./Components/ClientList/ClientList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adicionarpaciente" element={<NewClient />}></Route>
        <Route path="/listadepacientes" element={<ClientList />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
