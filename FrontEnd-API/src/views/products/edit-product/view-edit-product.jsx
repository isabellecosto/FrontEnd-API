import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import styles from "./view-edit-product.module.scss";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const EditProduct = ({ fetchProducts, itemId, visible, onHide }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const fetchProductData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar produto");
      }

      const data = await response.json();
      setName(data.name);
      setBrand(data.brand);
      setDescription(data.description);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  const handleSubmit = async () => {
    if (!name || !brand || !description) {
      Swal.fire({
        title: "Preencha todos os campos!",
        icon: "warning",
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/product/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, brand, description }),
      });

      if (!response.ok) {
        throw new Error("Erro ao editar produto");
      }

      const data = await response.json();
      console.log("Produto editado:", data);

      setTimeout(() => onHide(), 100);

      Swal.fire({
        title: "Produto editado com Sucesso!",
        icon: "success",
      });

      setName("");
      setBrand("");
      setDescription("");

      fetchProducts();
    } catch (error) {
      console.error("Erro ao Editar produto:", error);
      Swal.fire({
        title: "Erro ao criar produto",
        icon: "error",
      });
    }
  };

  const footerContent = (
    <div className={styles.footerContent}>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={() => onHide()}
        className="p-button-text"
      />
      <Button
        label="Editar Produto"
        icon="pi pi-check"
        onClick={handleSubmit}
        className={styles.buttonSuccess}
      />
    </div>
  );

  useEffect(() => {
    if (visible && itemId) {
      fetchProductData(itemId);
    }
  }, [visible, itemId]);

  useEffect(() => {
    if (!visible) {
      setName("");
      setBrand("");
      setDescription("");
    }
  }, [visible]);

  return (
    <Dialog
      visible={visible}
      style={{ width: "40vw" }}
      onHide={onHide}
      draggable={false}
      resizable={false}
      footer={footerContent}
    >
      <div className={styles.dialogContent}>
        <h3>Edição de Produto</h3>
        <div className={styles.formControll}>
          <label htmlFor="name">Nome do Produto</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formControll}>
          <label htmlFor="brand">Marca</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className={styles.formControll}>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </Dialog>
  );
};

EditProduct.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default EditProduct;
