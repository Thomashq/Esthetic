import "../../../Styles/ClientList/ClientList.css";
import {
  AiTwotoneEdit,
  AiOutlineFolderView,
  AiFillDelete,
} from "react-icons/ai";

function Item({ clientList }) {
  if (clientList) {
    return clientList.length === 0 ? (
      <p className="load-list">Carregando lista de pacientes</p>
    ) : (
      clientList.map((client) => (
        <div className="line-item">
          <div className="name-client">
            <p>{client.Name}</p>
          </div>
          <div className="actions-list">
            <AiTwotoneEdit title="Editar" />
            <AiFillDelete title="Deletar" />
            <AiOutlineFolderView title="Visualizar" />
          </div>
        </div>
      ))
    );
  }
}

export default Item;
