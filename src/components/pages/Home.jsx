import { useState } from "react";
import CrudForm from "../parts/crud/CrudForm";
import CrudTable from "../parts/CrudTable";
import useCrud from "../hooks/useCrud";
import "../../css/crudForm.css";

function Home() {
  const { db, createData, updateData, deleteData } = useCrud("http://localhost:3000/posts");
  const [dataToEdit, setDataToEdit] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);


  
  const openFormForEdit = (post) => {
    setDataToEdit(post);
    setIsFormOpen(true);
  };


  const closeForm = () => {
    setIsFormOpen(false);
    setDataToEdit(null);
  };
console.log("DB EN HOME:", db);
  return (
    <main>

      <CrudTable
        db={db}
        setDataToEdit={openFormForEdit}
        deleteData={deleteData}
      />

      {isFormOpen && (
        <div className="modal-overlay">
          <div className="modal-form">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
              closeForm={closeForm}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
