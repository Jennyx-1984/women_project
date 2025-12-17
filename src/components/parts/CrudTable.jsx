import { useEffect, useState } from "react";
//import "@fontsource/poppins/400.css";//
const CrudCarousel = ({ db, setDataToEdit, deleteData }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!Array.isArray(db) || db.length === 0) return;
    if (index > db.length - 1) setIndex(db.length - 1);
  }, [db, index]);
  if (!Array.isArray(db) || db.length === 0) return <p>No hay datos disponibles</p>;
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
        }}
      >
        <img
          src={post.photo}
          alt={phrase}
          style={{ objectFit: "cover", height: 340, width: 440, borderRadius: 32, }}
        />
        <p style={{ fontSize: 48, margin: "15px 0 6px" }}>
          <strong>Frase:</strong> {phrase}
        </p>
        <p style={{ fontSize: 26, margin: 0 }}>
          <strong>Autor:</strong> {author}
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <button onClick={() => setDataToEdit(post)}>Editar</button>
          <button onClick={() => deleteData(post.id)}>Eliminar</button>
        </div>
        <p style={{ marginTop: 12, fontSize: 16 }}>
          {index + 1} / {db.length}
        </p>
      </div>
      <button onClick={goNext} disabled={db.length === 1}>›</button>
    </div>
  );
};
export default CrudCarousel;
