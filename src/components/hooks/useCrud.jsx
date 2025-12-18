import { useState, useEffect } from "react";
import helpCrud from "../helpers/helpCrud";
const useCrud = (url) => {
  console.log("useCrud ejecutado");
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoading] = useState(false);
  const api = helpCrud();
  const generateId = () => Math.floor(Math.random() * 1000000).toString();
  const readData = async () => {
  setLoading(true);
  try {
    const res = await api.get(url);
    if (!res.err) {
      setDB(res);
      setError(null);
    } else {
      setDB([]);
      setError(res);
    }
  } catch (err) {
    setError(err);
    setDB([]);
  } finally {
    setLoading(false);
  }
};

  const createData = async (data) => {
    data.id = generateId();
    try {
      const res = await api.post(url, {
        body: data,
        headers: { "content-type": "application/json" }
      });
      if (!res.err) {
        setDB([...db, res]);
      } else {
        setError(res);
      }
      return res;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const updateData = async (data) => {
    const endpoint = `${url}/${data.id}`;
    try {
      const res = await api.put(endpoint, {
        body: data,
        headers: { "Content-Type": "application/json" }
      });
      if (!res.err) {
        setDB(db.map(el => el.id === data.id ? res : el));
      } else {
        setError(res);
      }
      return res;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const deleteData = async (id) => {
    const endpoint = `${url}/${id}`;
    try {
      const res = await api.del(endpoint);
      if (!res.err) {
        setDB(db.filter(el => el.id !== id));
      } else {
        setError(res);
      }
      return res;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  useEffect(() => {
  readData();
}, [url]);

  return { db, loader, error, createData, updateData, deleteData, readData };
};

export default useCrud;
