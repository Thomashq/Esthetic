import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

function DeleteAction({ clientInfo, clientList, setClientList }) {
  const handleDelete = async (clientInfo) => {
    await axios
      .delete("http://localhost:3080/client/deleteClient", {
        data: clientInfo,
      })
      .then((res) => {
        const newArrayList = clientList.filter(
          (client) => client._id !== clientInfo._id
        );
        toast.success(res.data.message);
        setClientList(newArrayList);
      })
      .catch((res) => toast.error(res.data));
  };

  return (
    <div values={clientInfo._id} onClick={() => handleDelete(clientInfo)}>
      <AiFillDelete title="Deletar" />
    </div>
  );
}

export default DeleteAction;
