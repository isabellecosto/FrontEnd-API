import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ActionButtons from "../../components/app-actions/app-actions";
import styles from "./view-users.module.scss";

const Users = () => {
  const users = [
    { code: "001", name: "Usuário 1", category: "Category 1", quantity: 10 },
    { code: "002", name: "Usuário 2", category: "Category 2", quantity: 20 },
    { code: "003", name: "Usuário 3", category: "Category 3", quantity: 30 },
    { code: "004", name: "Usuário 4", category: "Category 4", quantity: 40 },
    { code: "005", name: "Usuário 5", category: "Category 5", quantity: 50 },
  ];
  const actionTemplate = (rowData) => {
      return (
        <ActionButtons
          itemId={rowData.code}
          onEdit={(id) => console.log(`Editar item ${id}`)}
          onDelete={(id) => console.log(`Item ${id} deletado`)}
        />
      );
  };

  return (
    <div className={styles.users}>
      <h1>Usuários</h1>
      <DataTable value={users} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column header="Actions" body={actionTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default Users;
