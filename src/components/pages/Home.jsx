import { useState } from "react";
import CrudForm from "../parts/crud/CrudForm";
import CrudTable from "../parts/CrudTable";
import useCrud from "../hooks/useCrud";

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
        <div style={modalOverlay}>
          <div style={modalContent}>
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

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalContent = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "80%",
  overflowY: "auto"
};

export default Home;
