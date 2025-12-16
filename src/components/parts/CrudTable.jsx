import CardActionButton from "../atomic/CardActionButton";

const CrudTable = ({ db, setDataToEdit, deleteData }) => {
  if (!Array.isArray(db) || db.length === 0)
    return <p>No hay datos disponibles</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 220px)",
        gap: 16,
      }}
    >
      {db.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ddd", padding: 12 }}
        >
          <img
            src={post.photo}
            alt={post.text}
            width="200"
            height="140"
            style={{ objectFit: "cover" }}
          />
          <p>
            <strong>Título:</strong> {post.text}
          </p>
          <p>
            <strong>Autor:</strong> {post.Author}
          </p>
          <button onClick={() => setDataToEdit(post)}>Editar</button>
          <button onClick={() => deleteData(post.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default CrudTable;
