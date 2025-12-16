import ButtonForm from '../atomic/ButtonForm';

const ImageGalleryModal = ({
  isOpen,
  images,
  selected,
  onSelect,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Selecciona una imagen</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {images.map(url => (
            <img
              key={url}
              src={url}
              alt="galería"
              width="80"
              style={{
                cursor: "pointer",
                border: selected === url ? "3px solid blue" : "1px solid gray",
                borderRadius: "5px"
              }}
              onClick={() => onSelect(url)}
            />
          ))}
        </div>

        <ButtonForm onClick={onClose}>Cerrar</ButtonForm>
      </div>
    </div>
  );
};

const overlayStyle = {
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
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "80%",
  overflowY: "auto"
};

export default ImageGalleryModal;
