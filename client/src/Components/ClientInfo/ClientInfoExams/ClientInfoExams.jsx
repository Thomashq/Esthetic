import { useState, useEffect } from "react";
import axios from "axios";
import ClientInfoFacialEvaluation from "./ClientInfoFacialEvaluation/ClientInfoFacialEvaluation";

function ClientInfoExams({ clientId }) {
  const [facialExam, setFacialExam] = useState([]);

  const getFacilExamList = async () => {
    try {
      const facialExam = await axios
        .get("http://localhost:3080/facial/getFacial")
        .then((res) => {
          return res.data.facial;
        })
        .catch((res) => {
          return res;
        });
      setFacialExam(facialExam.filter((data) => data.ClientId === clientId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilExamList();
  }, [setFacialExam]);

  return (
    <>
      <h3>Dados do Exame</h3>
      <ClientInfoFacialEvaluation facialExam={facialExam} />
    </>
  );
}

export default ClientInfoExams;
