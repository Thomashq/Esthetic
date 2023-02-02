import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LineGrid from "./LineGrid/LineGrid";
import imgEsthetic from "../../img/esthetic.png";
import "../../Styles/ClientList/ClientList.css";

function ClientList() {
  const [clientList, setClientList] = useState([]);

  const getClientList = async () => {
    try {
      const clientList = await axios
        .get("https://backend-esthetic-api.onrender.com/client/getClient")
        .then((res) => {
          toast.success(res.data.message);
          return res.data.client;
        })
        .catch((res) => toast.error(res.data.message));
      setClientList(clientList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClientList();
  }, [setClientList]);

  return (
    <section className="clientlist-section">
      <div className="clientlist-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <Link to="/" className="return-button">
          <p>Voltar</p>
        </Link>
        <div className="clientlist-grid">
          <LineGrid clientList={clientList} setClientList={setClientList} />
        </div>
      </div>
    </section>
  );
}

export default ClientList;
