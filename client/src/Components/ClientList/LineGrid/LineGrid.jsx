import "../../../Styles/ClientList/ClientList.css";
import Item from "../Item/Item";

function LineGrid({ clientList }) {
  return (
    <div className="line-grid">
      <div className="line-grid-list">
        <Item clientList={clientList} />
      </div>
    </div>
  );
}

export default LineGrid;
