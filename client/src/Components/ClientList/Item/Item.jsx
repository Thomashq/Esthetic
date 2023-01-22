import "../../../Styles/ClientList/ClientList.css";
import DeleteAction from "../Actions/DeleteAction/DeleteAction";
import EditAction from "../Actions/EditAction/EditAction";
import ViewAction from "../Actions/ViewAction/ViewAction";

function Item({ clientList }) {
  if (clientList) {
    return clientList.length === 0 ? (
      <p className="load-list">Carregando lista de pacientes</p>
    ) : (
      clientList.map((client, index) => (
        <div className="line-item" key={index}>
          <div className="name-client">
            <p>{client.Name}</p>
          </div>
          <div className="actions-list">
            <EditAction clientId={client._id} />
            <ViewAction clientId={client._id} />
            <DeleteAction clientInfo={client} />
          </div>
        </div>
      ))
    );
  }
}

export default Item;
