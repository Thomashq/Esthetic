import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

function DeleteAction({ clientInfo, clientList, setClientList }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleDelete = async (clientInfo) => {
        await axios
            .delete("http://localhost:3080/client/deleteClient", {
                data: clientInfo,
            })
            .then((res) => {
                const newArrayList = clientList.filter(
                    (client) => client._id !== clientInfo._id
                );
                setModalOpen(false);
                toast.success(res.data.message);
                setClientList(newArrayList);
            })
            .catch((res) => toast.error(res.data));
    };

    return (
        <div values={clientInfo._id}>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Exemplo"
                overlayClassName="modal-delete"
                className="modal-content"
            >
                <p>
                    Tem certeza que deseja retirar o(a) paciente
                    <strong> {clientInfo.Name}</strong> da lista?
                </p>
                <button
                    className="confirm-button"
                    onClick={() => handleDelete(clientInfo)}
                >
                    Confirmar
                </button>
                <button className="cancel-button" onClick={closeModal}>
                    Cancelar
                </button>
            </Modal>
            <AiFillDelete title="Deletar" onClick={openModal} />
        </div>
    );
}

export default DeleteAction;
