import { BackgroundColor } from "@cloudinary/url-gen/actions/background/actions/BackgroundColor";

const CrudTable = ({ db, setDataToEdit, deleteData }) => {
  if (!Array.isArray(db) || db.length === 0) return <p>No hay datos disponibles</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 620px)", gap: 16 }}>
      {db.map((post) => (
        <div key={post.id} style={{ border: "9px solid #000000ff", padding: 12, backgroundColor: "#fbfbfbff", borderRadius: 35, overflow: "hidden" }}>
          <img src={post.photo} alt={post.text} width="300" height="300" style={{ objectFit: "cover", height: 340, width: 440, borderRadius: 32 }} />
          <p style={{ fontSize: 48, margin: "10px 0 6px" }}>
            <strong>Frase:</strong> {post.text}
          </p>
          <p style={{ fontSize: 26, margin: 0 }}>
            <strong>Autor:</strong> {post.Author}
          </p>
          <button onClick={() => setDataToEdit(post)}>Editar</button>
          <button onClick={() => deleteData(post.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CrudTable;
