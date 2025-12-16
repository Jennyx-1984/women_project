const ImagePreview = ({ src }) => {
  if (!src) return null;

  return (
    <div>
      <p>Vista previa:</p>
      <img src={src} width="200" alt="preview" />
    </div>
  );
};

export default ImagePreview;