import axios from "axios";
import { useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

function DeleteAction({ clientId }) {
  const deleteRef = useRef();

  const handleDelete = async () => {
    const buttonDeleteRef = deleteRef.current;
    const deleteId = buttonDeleteRef.getAttribute("dataid");

    await axios
      .delete("http://localhost:3080/client/deleteClient", {
        _id: deleteId,
      })
      .then((res) => toast.success(res.data.message));
  };

  return (
    <div dataid={clientId} ref={deleteRef} onClick={handleDelete}>
      <AiFillDelete title="Deletar" />
    </div>
  );
}

export default DeleteAction;
