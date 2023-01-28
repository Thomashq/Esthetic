import { AiOutlineFolderView } from "react-icons/ai";

function ViewAction({ clientId, handleClickNavigate }) {
  return (
    <div values={clientId}>
      <AiOutlineFolderView
        title="Visualizar"
        values={clientId}
        onClick={() => handleClickNavigate(clientId)}
      />
    </div>
  );
}

export default ViewAction;
