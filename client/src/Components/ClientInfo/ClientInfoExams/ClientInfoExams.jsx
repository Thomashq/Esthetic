import { useState, useEffect } from "react";
import axios from "axios";
import ClientInfoFacialEvaluation from "./ClientInfoFacialEvaluation/ClientInfoFacialEvaluation";
import ClientInfoCapillaryEvaluation from "./ClientInfoCapillaryEvaluation/ClientInfoCapillaryEvaluation";

function ClientInfoExams({ clientId }) {
  const [facialExam, setFacialExam] = useState([]);
  const [capillarExam, setCapillarExam] = useState([]);

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

  const getCapillaryExamList = async () => {
    try {
      const capillarExam = await axios
        .get("http://localhost:3080/capillary/getCapillary")
        .then((res) => {
          return res.data.capillary;
        })
        .catch((res) => {
          return res;
        });
      setCapillarExam(
        capillarExam.filter((data) => data.ClientId === clientId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilExamList();
  }, [setFacialExam]);

  useEffect(() => {
    getCapillaryExamList();
  }, [setCapillarExam]);

  if (facialExam.length !== 0)
    return <ClientInfoFacialEvaluation facialExam={facialExam} />;
  else return <ClientInfoCapillaryEvaluation capillarExam={capillarExam} />;
}

export default ClientInfoExams;
