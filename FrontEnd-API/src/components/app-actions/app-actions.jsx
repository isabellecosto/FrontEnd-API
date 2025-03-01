import Swal from "sweetalert2";
import PropTypes from "prop-types";
import "./app-actions.scss";

const ActionButtons = ({ itemId, onEdit, fetchProducts }) => {
  const deleteItem = (id) => {
    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchProducts();  
      })
      .catch((error) => {
        console.error("Erro ao deletar produto:", error);
      });
  };

  const deleteItemModal = () => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Essa ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(itemId);
        Swal.fire("Deletado!", "O item foi removido.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "O item não foi removido.", "info");
      }
    });
  };

  return (
    <div className="action-buttons">
      <span
        onClick={() => onEdit(itemId)}
        className="pi pi-pencil"
        style={{ color: "#64B5F6" }}
      ></span>
      <span
        onClick={deleteItemModal}
        className="pi pi-trash"
        style={{ color: "#e53935" }}
      ></span>
    </div>
  );
};

ActionButtons.propTypes = {
  itemId: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired, 
};

export default ActionButtons;
