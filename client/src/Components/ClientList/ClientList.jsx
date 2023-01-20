import { useState } from "react";
import axios from "axios";
import "../../Styles/ClientList/ClientList.css";
import imgEsthetic from "../../img/esthetic.png";
import LineGrid from "./LineGrid/LineGrid";
import { useEffect } from "react";

function ClientList() {
  const [clientList, setClientList] = useState([]);

  const getClientList = async () => {
    try {
      const clientList = await axios.get(
        "http://localhost:3080/client/getClient"
      );
      setClientList(clientList.data);
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
        <div className="clientlist-grid">
          <LineGrid clientList={clientList} />
        </div>
      </div>
    </section>
  );
}

export default ClientList;
