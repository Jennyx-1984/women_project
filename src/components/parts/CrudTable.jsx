import { useEffect, useState } from "react";
//import "@fontsource/poppins/400.css";//
import CardActionButton from "../atomic/CardActionButton";
import "../../css/buttonRight.css";
import NoData from "../atomic/NoData";
const CrudCarousel = ({ db, setDataToEdit, deleteData }) => {

  const handleDelete = (id) => {
  setIndex((i) => (i > 0 ? i - 1 : 0));
  deleteData(id);
};

  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!Array.isArray(db) || db.length === 0) return;
    if (index > db.length - 1) setIndex(db.length - 1);
  }, [db, index]);
  if (!Array.isArray(db) || db.length === 0) return <p><NoData/></p>;
  const post = db[index];
  const phrase =
    post.text ?? post.frase ?? post.phrase ?? post.quote ?? post.Frase ?? "";
  const author =
    post.Author ?? post.author ?? post.autor ?? post.Autor ?? "";
  const goNext = () => setIndex((i) => (i + 1) % db.length);
  const goPrev = () => setIndex((i) => (i - 1 + db.length) % db.length);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <button onClick={goPrev} disabled={db.length === 1}>‹</button>
      <div
        key={post.id}
        style={{
          width: 620,
          border: "4px solid #000000ff",
          padding: 22,
          backgroundColor: "#14807C",
          borderRadius: 35,
          overflow: "hidden",
          marginTop: 67,
          marginRight: 620,
          marginBottom: 67,
          fontFamily: '',
          position : "relative",
        }}
      >
        <div style={{ position: "absolute", top: 20, right: 20 }}>
          <CardActionButton action="favorite" ariaLabel="Favorito" title="Favorito" onClick={() => console.log("favorite", post.id)} />
        </div>
        <img
          src={post.photo}
          alt={phrase}
          style={{ objectFit: "cover", height: 340, width: 440, borderRadius: 32, }}
        />
        <p style={{ fontSize: 48, margin: "15px 0 6px" }}> "{phrase}"</p>
        <p style={{ fontSize: 26, margin: 0 }}>
          <i>{author}</i>
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <CardActionButton action="edit" ariaLabel="Editar" title="Editar" onClick={() => setDataToEdit(post)} />
          <CardActionButton action="delete" ariaLabel="Eliminar" title="Eliminar" onClick={() => handleDelete(post.id)} />
        </div>
        <p style={{ marginTop: 12, fontSize: 16 }}>
          {index + 1} / {db.length}
        </p>
      </div>
      <button onClick={goNext} className="right" disabled={db.length === 1}>›</button>
    </div>
  );
};
export default CrudCarousel;
