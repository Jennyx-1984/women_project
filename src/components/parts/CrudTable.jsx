import { useEffect, useState } from "react";
import CardActionButton from "../atomic/CardActionButton";
import "../../css/buttonSlider.css";
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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom:50 }}>
      <button onClick={goPrev} disabled={db.length === 1} className="button-left">‹</button>
      <div
        key={post.id}
        style={{
          width: "37%",
          border: "4px solid #000000ff",
          padding: 22,
          backgroundColor: "rgba(75, 0, 130, 0.75)",
          borderRadius: 35,
          marginTop: 67,
          marginRight: 620,
          marginBottom: 67,
          position:"relative",
        }}
      >
        <div style={{ position: "absolute", top: -50, right: -40, zIndex:5 }}>
          <CardActionButton action="favorite" ariaLabel="Favorito" title="Favorito" onClick={() => console.log("favorite", post.id)} />
        </div>
        <img
          src={post.photo}
          alt={phrase}
          style={{ objectFit: "cover", height: 500, width: "90%", borderRadius: 32, filter: "brightness(60%) contrast(160%)"}}
        />
        <p style={{ 
          fontSize: 48, 
          margin: "15px 0 6px", 
          position:"absolute", 
          top:"3%", 
          left:"5%", 
          color:"white", 
          width:"80%",
          height:"auto",
          overflowWrap:"break-word"  }}>"{phrase}"</p>
        <p style={{ 
          fontSize: 26, 
          margin: 0, 
          position:"absolute",
          backgroundColor:"#E8DEF8",
          borderRadius:"8px",
          textAlign:"center",
          width:"fit-content",
          paddingLeft:10,
          paddingRight:10,
          top:"75%",
          left:"60%"
          }}>
          <i>{author}</i>
        </p>
        <div style={{ position:"absolute", top:550, right:350 }}>
          <CardActionButton action="edit" ariaLabel="Editar" title="Editar" onClick={() => setDataToEdit(post)} />
         </div>   
         <div style={{ position:"absolute", top:550, right:200 }}>
          <CardActionButton action="delete" ariaLabel="Eliminar" title="Eliminar" style={{
            position:"absolute",
            top:100,
            right: 20
          }} onClick={() => handleDelete(post.id)} />
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
