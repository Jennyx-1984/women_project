import Header from "../atomic/Header";
import Footer from "../atomic/Footer";
import Construction from "../../assets/images/const1.gif";
import "../../css/favorites.css";

function Favorites(){
    return(
        <>
        <Header />
        <img src={Construction} alt="En construcción..." className="construction" />;
        <Footer />
        </>
    )
}

export default Favorites;