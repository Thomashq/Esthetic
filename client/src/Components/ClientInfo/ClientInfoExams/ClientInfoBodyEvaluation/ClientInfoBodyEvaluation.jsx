function ClientInfoBodyEvaluation({ bodyExam }) {
  if (bodyExam) {
    return bodyExam.length === 0 ? (
      <p className="load-list" style={{ display: "none" }}></p>
    ) : (
      <>
        <h3>{bodyExam[0].ClientId}</h3>
      </>
    );
  }
}

export default ClientInfoBodyEvaluation;
