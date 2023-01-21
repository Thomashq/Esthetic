import { AiOutlineFolderView } from "react-icons/ai";

function ViewAction({ clientId }) {
  return (
    <div values={clientId}>
      <AiOutlineFolderView title="Visualizar" values={clientId} />
    </div>
  );
}

export default ViewAction;
