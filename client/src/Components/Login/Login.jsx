import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../Styles/Login/Login.css";
import { useRef } from "react";
import { useEffect } from "react";

function Login() {
  const [login, setLogin] = useState([]);
  const formRef = useRef();

  const getUserLogin = () => {
    axios
      .get("http://localhost:3080/login/getlogin")
      .then((res) => {
        setLogin(res.data.login);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formSubmit = formRef.current;

    const logged =
      formSubmit.token.value === login[0].Token &&
      formSubmit.password.value === login[0].Password
        ? true
        : false;

    if (logged) {
      localStorage.setItem("@user", JSON.stringify(login[0]));
      toast.success("Login realizado com sucesso!");
      window.location.reload();
    } else toast.error("Senha ou Token Incorretos");
  };

  useEffect(() => {
    getUserLogin();
  }, [setLogin]);

  return (
    <section className="login-section">
      <div className="login-content">
        <div className="login-img">
          <h1>Login</h1>
        </div>
        <form className="login-input" ref={formRef} onSubmit={handleSubmit}>
          <input id="token" type="number" placeholder="Token" />
          <input id="password" type="password" placeholder="Senha" />
          <button className="submit-login">Continuar</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
