import Logo from '../../assets/images/LogoSHe.png';
import ButtonNav from './ButtonNav';
import { useState } from "react";
import useCrud from '../hooks/useCrud';
import CrudForm from "../parts/crud/CrudForm";
// Asegúrate de haber instalado react-icons: npm install react-icons
import { FaHome, FaStar, FaPlus } from 'react-icons/fa'; 

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { createData } = useCrud("http://localhost:3000/posts");
  const closeForm = () => {
    setIsFormOpen(false);
    location.reload();  
  };

  return (
    <header>
      {/* WRAPPER PARA EL LAYOUT HORIZONTAL */}
      <div className='header-content-wrapper'> 
        
        <div className='cabecera'>
          <img src={Logo} alt="Logo SHE MANIFESTS"/>
          {/* Si el texto no está en tu imagen de logo, añádelo aquí */}
        </div>
        
        <nav>
          <ul>
            {/* 1. HOME */}
            <li>
              <ButtonNav texto="HOME" BtnClass="btn-nav" path="/">
                <FaHome /> 
              </ButtonNav>
            </li>
            
            {/* 2. FAVORITES */}
            <li>
              <ButtonNav texto="FAVORITES" BtnClass="btn-nav" path="/Favorites">
                <FaStar />
              </ButtonNav>
            </li>
            
            {/* 3. CREATE */}
            <li>
              <button type="button" className='btn-nav' onClick={() => setIsFormOpen(true)}>
                <FaPlus className="button-icon" /> 
                CREATE
              </button>
            </li>
          </ul>
        </nav>

      </div> 
      {/* FIN DEL WRAPPER */}

      {/* CÓDIGO DEL MODAL */}
      {isFormOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <CrudForm
              createData={createData}
              closeForm={closeForm}
            />
          </div>
        </div>
      )}
    </header>
  );
};

const modalOverlay = {
  position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
};

const modalContent = {
  backgroundColor: "white", padding: "20px", borderRadius: "10px", 
  maxWidth: "600px", width: "90%", maxHeight: "80%", overflowY: "auto"
};

export default Header;
