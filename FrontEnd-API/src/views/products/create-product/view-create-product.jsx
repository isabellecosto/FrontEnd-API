import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import styles from "./view-create-product.module.scss";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const CreateProduct = ({ fetchProducts }) => {
  const [visible, setVisible] = useState(false); 
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!name || !brand || !description) {
      Swal.fire({
        title: "Preencha todos os campos!",
        icon: "warning",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, brand, description }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar produto");
      }

      const data = await response.json();
      console.log("Produto criado:", data);
      
      setTimeout(() => setVisible(false), 100);

      Swal.fire({
        title: "Produto Criado com Sucesso!",
        icon: "success",
      });

      setName("");
      setBrand("");
      setDescription("");

      fetchProducts();

    } catch (error) {
      console.error("Erro ao criar produto:", error);
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
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Criar Produto"
        icon="pi pi-check"
        onClick={handleSubmit}
        className={styles.buttonSuccess}
      />
    </div>
  );

  return (
    <div className={styles.createProduct}>
      <Button label="Criar Produto" className={styles.buttonStyle} onClick={() => setVisible(true)} />
      
      <Dialog
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => setVisible(false)}
        draggable={false} 
        resizable={false}
        footer={footerContent}
      >
        <div className={styles.dialogContent}>
          <h3>Criação de Produto</h3>
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
    </div>
  );
};

CreateProduct.propTypes = {
  fetchProducts: PropTypes.func.isRequired, 
};

export default CreateProduct;
