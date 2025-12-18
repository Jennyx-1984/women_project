import "../../css/nodata.css";
import DontStop from "../../assets/images/dont-stop.png"
function NoData(){
    return(
        <>
        <div className="no-data"><p>Este espacio está listo para tus frases empoderadoras. Agrega una cita y ayuda a 
            inspirar a otras personas. Pincha en el botón <strong>CREATE</strong> y rellena los campos con el autor y tu frase.
            En caso de no saber el autor, déjalo vacío y se guardará como <strong>Anónimom</strong>. Elige una foto de la Galería 
            de imagenes por defecto o sube la tuya propia. Puedes Editar los posts si hay información errónea. </p>
            <img src={DontStop} alt="No te detengas de crear" className="dont-stop"/></div>
        </>
    )
}

export default NoData;