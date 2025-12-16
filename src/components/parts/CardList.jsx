const CardList = ({ post, setDataToEdit, deleteData }) => {
  return (
    <div className="card">
      <img src={post.photo} alt={post.text} width="200" />
      <p>{post.text}</p>
      <p>{post.Author}</p>
      <button onClick={() => setDataToEdit(post)}>Editar</button>
      <button onClick={() => deleteData(post.id)}>Eliminar</button>
    </div>
  );
};

export default CardList;