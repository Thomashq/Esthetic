import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import imgEsthetic from "../../img/esthetic.png";
import "../../Styles/ClientInfo/ClientInfo.css";
import ClientInfoData from "./ClientInfoData/ClientInfoData";
import ClientAdditionalInfoData from "./ClientAdditionalInfoData/ClientAdditionalInfoData";

function ClientInfo() {
  const { clientId } = useParams();
  const [client, setClient] = useState([]);
  const [additionalClientInfo, setAdditionalClientInfo] = useState([]);

  const getClientList = async () => {
    try {
      const clientList = await axios
        .get("http://localhost:3080/client/getClient")
        .then((res) => {
          return res.data.client;
        })
        .catch((res) => {
          return res;
        });
      setClient(clientList.filter((data) => data._id === clientId));
    } catch (error) {
      console.log(error);
    }
  };

  const getAdditionalInfoByClientId = async () => {
    try {
      const additionalInfo = await axios
        .get("http://localhost:3080/additionalInfo/getAdditionalInfo")
        .then((res) => {
          return res.data.additionalInfo;
        })
        .catch((res) => {
          return res;
        });
      setAdditionalClientInfo(
        additionalInfo.filter((data) => data.ClientId === clientId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClientList();
    getAdditionalInfoByClientId();
  }, [setClient]);

  console.log(additionalClientInfo);

  return (
    <section className="clientinfo-section">
      <div className="clientinfo-content">
        <img className="imgforms" src={imgEsthetic} alt="imagem esteta"></img>
        <Link to="/listadepacientes" className="return-button">
          <p>Voltar</p>
        </Link>
        <div className="clientinfo-data">
          <h1>Dados do Paciente</h1>
          <ClientInfoData client={client} />
          <h3>Dados Adicionais</h3>
          <ClientAdditionalInfoData
            additionalClientInfo={additionalClientInfo}
          />
        </div>
      </div>
    </section>
  );
}

export default ClientInfo;
