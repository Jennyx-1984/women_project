import { useState } from "react";
import CrudForm from "../parts/crud/CrudForm";
import CrudTable from "../parts/CrudTable";
import useCrud from "../hooks/useCrud";
import "../../css/crudForm.css";
import Footer from '../atomic/Footer';
import Header from '../atomic/Header';


function Home() {
  const { db, createData, updateData, deleteData } = useCrud("http://localhost:3000/posts");
  const [dataToEdit, setDataToEdit] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openCreateForm = () => {
    setDataToEdit(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setDataToEdit(null);
  };

  return (
    <>
    <main>
      <Header onCreate={openCreateForm} />

      <CrudTable
        db={db}
        setDataToEdit={(post) => {
          setDataToEdit(post);
          setIsFormOpen(true);
        }}
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
     <Footer />
     </>
  );
}


export default Home;