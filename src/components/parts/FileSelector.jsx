import ButtonForm from '../atomic/ButtonForm';

const FileSelector = ({ onFileChange, onOpenGallery }) => {
  return (
    <>
      <input type="file" onChange={onFileChange} />
      <ButtonForm onClick={onOpenGallery}>
        Elegir imagen de la galería
      </ButtonForm>
    </>
  );
};

export default FileSelector;