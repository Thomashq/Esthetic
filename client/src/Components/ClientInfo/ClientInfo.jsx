import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import imgEsthetic from "../../img/esthetic.png";
import "../../Styles/ClientInfo/ClientInfo.css";
import ClientInfoData from "./ClientInfoData/ClientInfoData";
import ClientAdditionalInfoData from "./ClientAdditionalInfoData/ClientAdditionalInfoData";
import ClientInfoExams from "./ClientInfoExams/ClientInfoExams";

function ClientInfo() {
  const { clientId } = useParams();
  const [client, setClient] = useState([]);
  const [additionalClientInfo, setAdditionalClientInfo] = useState([]);

  const getClientList = async () => {
    try {
      const clientList = await axios
        .get("https://backend-esthetic-api.onrender.com/client/getClient")
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
        .get("https://backend-esthetic-api.onrender.com/additionalInfo/getAdditionalInfo")
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
          <ClientAdditionalInfoData
            additionalClientInfo={additionalClientInfo}
          />
          <ClientInfoExams clientId={clientId} />
        </div>
      </div>
    </section>
  );
}

export default ClientInfo;
