import Logo from '../../assets/images/LogoSHe.png';
import ButtonNav from './ButtonNav';
import { useState } from "react";
import useCrud from '../hooks/useCrud';
import CrudForm from "../parts/crud/CrudForm";
import "../../css/crudForm.css";   
import "../../css/header-modal.css";
import { FaHome, FaHeart, FaPlus } from 'react-icons/fa';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { createData } = useCrud("http://localhost:3000/posts");
  const closeForm = () => {
    setIsFormOpen(false);
    location.reload();  
  };

  return (
    <header>
      <div className='cabecera'>
        <img src={Logo} alt="Logo SHE MANIFESTS"/>
      </div>
      <nav>
        <ul>
            <li> 
                <ButtonNav texto="HOME" BtnClass="btn-nav" path="/"> 
                    <FaHome /> 
                </ButtonNav>
            </li>
            
            <li>
                <ButtonNav texto="FAVORITES" BtnClass="btn-nav" path="/Favorites">
                    <FaHeart /> 
                </ButtonNav>
            </li>
            
            <li>
                <button type="button" className='btn-nav' onClick={() => setIsFormOpen(true)}>
                    <FaPlus /> 
                    CREATE
                </button>
            </li>
        </ul>
      </nav>

      {isFormOpen && (
        <div className='modal-overlay'>
          <div className='modal-form'>
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
export default Header;
