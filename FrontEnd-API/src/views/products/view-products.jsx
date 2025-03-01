import { useState, useEffect } from "react";
import styles from "./view-products.module.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ActionButtons from "../../components/app-actions/app-actions";
import CreateProduct from "./create-product/view-create-product";
import EditProduct from "./edit-product/view-edit-product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchProducts = async () => {
    await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const actionTemplate = (rowData) => {
    return (
      <ActionButtons
        itemId={rowData.id}
        onEdit={(id) => {
          setSelectedProductId(id);
          setEditModalVisible(true);
        }}
        fetchProducts={fetchProducts}
      />
    );
  };

  return (
    <div className={styles.products}>
      <h3>Products</h3>
      <CreateProduct fetchProducts={fetchProducts} />
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="brand" header="Brand"></Column>
        <Column field="description" header="Description"></Column>
        <Column header="Actions" body={actionTemplate}></Column>
      </DataTable>

      <EditProduct
        fetchProducts={fetchProducts}
        itemId={selectedProductId}
        visible={editModalVisible}
        onHide={() => setEditModalVisible(false)}
      />
    </div>
  );
};

export default Products;
