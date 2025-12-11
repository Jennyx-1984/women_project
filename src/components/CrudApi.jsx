import React, { useEffect, useState } from "react";
import helpCrud from "./helpers/helpCrud.jsx";
import Loader from "./Loader.jsx";
import Message from "./Message.jsx";
import CrudForm from "./CrudForm.jsx";

const CrudApi = () => {
  const [db, setDB] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoading] = useState(false);
  const generateId = () => Math.floor(Math.random() * 1000000);

  const api = helpCrud();
  const url = "http://localhost:3000/posts";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDB(res);
        setError(null);
      } else {
        setDB([]);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  const createData = (data) => {
  data.id = generateId().toString();

  api.post(url, { body: data, headers: { "content-type": "application/json" } })
     .then((res) => {
       if (!res.err) setDB([...db, res]);
       else setError(res);
     });
};

  const updateData = (data) => {
  const endpoint = `${url}/${data.id}`;

  api.put(endpoint, { body: data, headers: { "Content-Type": "application/json" } })
     .then(res => {
         if (!res.err) {
             const updated = res || data;
             setDB(db.map(el => el.id === data.id ? updated : el));
         } else {
             setError(res);
         }
     });
};

  const deleteData = (id) => {
    const isDelete = window.confirm("¿Seguro que quieres eliminar este post?");
    if (isDelete) {
      const endpoint = `${url}/${id}`;
      api.del(endpoint, { headers: { "content-type": "application/json" } }).then((res) => {
        if (!res.err) {
          setDB(db.filter((el) => el.id !== id));
        } else setError(res);
      });
    }
  };

  return (
    <div>
      <h1>Lista de Posts</h1>

      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        generateId={generateId}
      />

      {loader && <Loader />}
      {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}

      {!loader && !error && (
        <>
          {db.length === 0 ? (
            <p>No hay datos disponibles.</p>
          ) : (
            db.map((post) => (
              <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                <h3>{post.text}</h3>
                <img src={post.photo} alt="" style={{ maxWidth: "200px" }} />
                <p>{post.Author}</p>
                <button onClick={() => setDataToEdit(post)}>Editar</button>
                <button onClick={() => deleteData(post.id)}>Eliminar</button>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default CrudApi;
