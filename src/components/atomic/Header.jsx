import Logo from '../../assets/images/LogoSHe.png';
import ButtonNav from './ButtonNav';
import "../../css/crudForm.css";   
import "../../css/header-modal.css";
import { FaHome, FaHeart, FaPlus } from 'react-icons/fa';


const Header = ({ onCreate }) => {
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
            <button type="button" className="btn-nav" onClick={onCreate}>
              <FaPlus /> CREATE
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
