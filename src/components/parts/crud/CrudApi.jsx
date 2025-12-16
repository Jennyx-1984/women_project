import React, { useState } from "react";
import CrudForm from "../../pages/CrudForm";
import CrudTable from "../CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import useCrud from "../../hooks/useCrud";

const CrudApi = () => {
  const { db, loader, error, createData, updateData, deleteData } = useCrud("http://localhost:3000/posts");
  const [dataToEdit, setDataToEdit] = useState(null);
console.log("createData en CrudApi:", createData);
  return (
    <div>
      <h1>Lista de Posts</h1>

      {loader && <Loader />}
      {error && <Message msg={`Error: ${error.status || error.message}`} bgColor="#dc3545" />}

      {!loader && !error && (
        <>
          <CrudTable
            db={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />

          {dataToEdit !== null && (
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
              closeForm={closeForm}
            />
          )}
        </>
      )}
    </div>
  );
};


export default CrudApi;

