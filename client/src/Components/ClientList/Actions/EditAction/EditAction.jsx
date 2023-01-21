import { AiTwotoneEdit } from "react-icons/ai";

function EditAction({ clientId }) {
  return (
    <div values={clientId}>
      <AiTwotoneEdit title="Editar" values={clientId} />
    </div>
  );
}

export default EditAction;
