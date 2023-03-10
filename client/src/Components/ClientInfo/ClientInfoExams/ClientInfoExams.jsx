import { useState, useEffect } from "react";
import axios from "axios";
import ClientInfoFacialEvaluation from "./ClientInfoFacialEvaluation/ClientInfoFacialEvaluation";
import ClientInfoCapillaryEvaluation from "./ClientInfoCapillaryEvaluation/ClientInfoCapillaryEvaluation";
import ClientInfoGeneralEvaluation from "./ClientInfoGeneralEvaluation/ClientInfoGeneralEvaluation";
import ClientInfoBodyEvaluation from "./ClientInfoBodyEvaluation/ClientInfoBodyEvaluation";

function ClientInfoExams({ clientId }) {
  const [facialExam, setFacialExam] = useState([]);
  const [capillarExam, setCapillarExam] = useState([]);
  const [generalExam, setGeneralExam] = useState([]);
  const [bodyExam, setBodyExam] = useState([]);

  const getFacilExamList = async () => {
    try {
      const facialExam = await axios
        .get("https://backend-esthetic-api.onrender.com/facial/getFacial")
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
        .get("https://backend-esthetic-api.onrender.com/capillary/getCapillary")
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

  const getGeneralExamList = async () => {
    try {
      const generalExam = await axios
        .get(
          "https://backend-esthetic-api.onrender.com/general/getGeneralProcedure"
        )
        .then((res) => {
          return res.data.general;
        })
        .catch((res) => {
          return res;
        });
      setGeneralExam(generalExam.filter((data) => data.ClientId === clientId));
    } catch (error) {
      console.log(error);
    }
  };

  const getBodylExamList = async () => {
    try {
      const bodyExam = await axios
        .get("https://backend-esthetic-api.onrender.com/bodyProcedure/getBody")
        .then((res) => {
          return res.data.body;
        })
        .catch((res) => {
          return res;
        });
      setBodyExam(bodyExam.filter((data) => data.ClientId === clientId));
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

  useEffect(() => {
    getGeneralExamList();
  }, [setGeneralExam]);

  useEffect(() => {
    getBodylExamList();
  }, [setBodyExam]);

  return (
    <>
      <ClientInfoFacialEvaluation facialExam={facialExam} />
      <ClientInfoCapillaryEvaluation capillarExam={capillarExam} />
      <ClientInfoGeneralEvaluation generalExam={generalExam} />
      <ClientInfoBodyEvaluation bodyExam={bodyExam} />
    </>
  );
}

export default ClientInfoExams;
