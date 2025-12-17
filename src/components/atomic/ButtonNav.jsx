import '../../css/ButtonNav.css';
import { useNavigate } from 'react-router-dom';

const Button=({texto, BtnClass, path, children})=>{
    const navigate = useNavigate();
    
    return(
        <>
            <button className={BtnClass} onClick={() => navigate(path)}>
                {children}  
                {texto}
            </button>
        </>
    )
}

export default Button;