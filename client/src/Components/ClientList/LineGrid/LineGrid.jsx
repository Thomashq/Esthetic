import "../../../Styles/ClientList/ClientList.css";
import Item from "../Item/Item";

function LineGrid({ clientList, setClientList }) {
  return (
    <div className="line-grid">
      <div className="line-grid-list">
        <Item clientList={clientList} setClientList={setClientList} />
      </div>
    </div>
  );
}

export default LineGrid;
