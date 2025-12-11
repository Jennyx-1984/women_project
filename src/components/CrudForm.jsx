import { useState, useEffect } from "react";
import axios from "axios";

const galeriaDefault = [
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459505/cdrhpvabtcmmlqj3nxjs.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459505/racvqtrag6tpq1oayyvl.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459505/w53emgkjw6bdvalbwifv.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459505/v49b6wy3ihr0wtegyn07.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459502/ge58e3ukohdhvkjljlxe.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459502/u5d2zv7sefpv43gjrdqc.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459502/edx1wijhbugokmq1wxe3.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459501/opbio3otkcoivryn4aqm.png",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459502/zc8p3jxyc34ukeyhkfaw.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459501/ydvoovzxp8xa1x4li0lb.png",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459501/vkjszyg4fypxmhrnini8.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459501/wvqq5gvoufmprizknrkd.jpg"
    ]

const initialForm = { id: null, text: "", photo: "", Author: "" };


const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, generateId }) => {
  const [form, setForm] = useState(initialForm);
  const [preview, setPreview] = useState(null);
  const [galeriaSeleccionada, setGaleriaSeleccionada] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    if (dataToEdit) {
      setForm({ ...dataToEdit });
      setPreview(dataToEdit.photo);
    } else {
      setForm(initialForm);
      setPreview(null);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setPreview(URL.createObjectURL(file));

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "women-project");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dhwkjld3e/image/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log("Cloudinary response:", res.data);
    setForm({ ...form, photo: res.data.secure_url });
  } catch (error) {
    console.error("Error subiendo la imagen:", error.response?.data || error.message);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.text || !form.photo){
      return alert("añade una frase o foto"); 
    }  
   else if(!form.Author) {
  form.Author = "Anónimo";
}

    if (form.id) {
      updateData(form);
    } else {
      form.id = generateId();
      createData(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setPreview(null);
    setDataToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{dataToEdit ? "Editar Post" : "Agregar Post"}</h2>

      <input type="text" name="text" placeholder="Título" onChange={handleChange} value={form.text} />
      <br />

      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={() => setIsModalOpen(true)}>Elegir imagen de la galería</button>
      
      


      {preview && (
        <div>
          <p>Vista previa:</p>
          <img src={preview} width="200" alt="preview" />
        </div>
      )}

      <input type="text" name="Author" placeholder="Autor" onChange={handleChange} value={form.Author} />
      <br />

      <button type="submit">Guardar</button>
      <button type="button" onClick={handleReset}>
        Limpiar
      </button>
      {isModalOpen && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "600px",
      width: "90%",
      maxHeight: "80%",
      overflowY: "auto"
    }}>
      <h3>Selecciona una imagen</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {galeriaDefault.map(url => (
          <img
            key={url}
            src={url}
            alt="galería"
            width="80"
            style={{
              cursor: "pointer",
              border: form.photo === url ? "3px solid blue" : "1px solid gray",
              borderRadius: "5px"
            }}
            onClick={() => {
              setForm({ ...form, photo: url });
              setPreview(url);
              setIsModalOpen(false); // cerrar modal al elegir
            }}
          />
        ))}
      </div>
      <button style={{ marginTop: "10px" }} onClick={() => setIsModalOpen(false)}>
        Cerrar
      </button>
    </div>
  </div>
)}

    </form>
  );
};

export default CrudForm;

