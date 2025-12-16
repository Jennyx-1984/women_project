import { useState, useEffect } from "react";
import axios from "axios";

const galleryDefault = [
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
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765459501/wvqq5gvoufmprizknrkd.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788395/msjxv2we1zvywuvullqq.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788395/kmzfm9xzjchl48e2fnug.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788489/pq2mq1ir3jpm6hjcrdeh.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788847/rwodwihcdpb02kywdye3.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788847/atd39p3sjjal9glrvbkh.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788848/t0kbpzgl2mui1ikw1vvy.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788851/xkpzeqkhaxmmtkynyhdn.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788854/ijku48ktiwtdmrc8irj4.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788854/kq34mqez7qiekpthl3za.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788856/mdhfc4wwop75mmp6a3xk.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765788858/dgheatj8hmtxjmpango1.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765789148/hko0j9xvtfbbrxfhmhyk.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765789149/raqqcjj2fpnbmkjajied.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765789151/gwudss6gmkoaizditnvd.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765789154/whonukubdzbdnkwc3amj.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765789155/wtoxsev8e6ftuhlccwoc.jpg",
    "https://res.cloudinary.com/dhwkjld3e/image/upload/v1765789158/heddyghuvwpruw6shiiy.jpg"
    ]


const initialForm = { id: null, text: "", Author: "", photo: "" };

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, closeForm }) => {
  const [form, setForm] = useState(initialForm);
  const [preview, setPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (dataToEdit) {
      setForm({ ...dataToEdit });
      setPreview(dataToEdit.photo || null);
    } else {
      setForm(initialForm);
      setPreview(null);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.text || !form.photo) {
      alert("Agrega título y foto");
      return;
    }

    try {
      if (form.id) {
        await updateData(form);
      } else {
        await createData(form);
      }
      closeForm();
    } catch (err) {
      console.error("Error en submit:", err);
      alert("Ocurrió un error guardando los datos");
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "women-project");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dhwkjld3e/image/upload",
        formData
      );
      setForm((f) => ({ ...f, photo: res.data.secure_url }));
    } catch (err) {
      console.error(err);
      alert("No se pudo subir la imagen");
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setPreview(null);
    setDataToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="text" placeholder="Título" value={form.text} onChange={handleChange} />
      <input name="Author" placeholder="Autor" value={form.Author} onChange={handleChange} />
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={() => setIsModalOpen(true)}>Elegir imagen de la galería</button>
      {preview && <img src={preview} width="200" alt="preview" />}

      {isModalOpen && (
        <div style={{
          position: "fixed", top:0, left:0, width:"100%", height:"100%",
          backgroundColor:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center"
        }}>
          <div style={{ background:"white", padding:"20px", borderRadius:"10px" }}>
            {galleryDefault.map(url => (
              <img
                key={url}
                src={url}
                width="80"
                style={{ cursor:"pointer", border: form.photo===url ? "3px solid blue":"1px solid gray" }}
                onClick={() => { setForm({ ...form, photo: url }); setPreview(url); setIsModalOpen(false); }}
              />
            ))}
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button type="submit">{form.id ? "Actualizar" : "Agregar"}</button>
        <button type="button" onClick={closeForm}>Cancelar</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
      </div>
    </form>
  );
};

export default CrudForm;


