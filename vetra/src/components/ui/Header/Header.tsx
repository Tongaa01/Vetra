import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";

export const Header = () => {
        const navigate = useNavigate();

    return (
        <div className={style.headerContainer}>
            <div>
                <Link to="/">
                    <img
                        src="../../../../public/vetra_banner.png"
                        alt="Vetra"
                        className={style.headerBanner}
                    />
                </Link>
            </div>
            <div className={style.headerComponents}>
                <div className={style.headerCategories}>
                    <button onClick={() => navigate("/search/featured")}>DESTACADOS</button>
                    <button onClick={() => navigate("/search/man")}>Hombre</button>
                    <button onClick={() => navigate("/search/woman")}>Mujer</button>
                    <button onClick={() => navigate("/search/kids")}>Niños</button>
                    <button onClick={() => navigate("/search/shoes")}>Zapatillas</button>
                    <button onClick={() => navigate("/search/jackets")}>Camperas</button>
                    
                </div>
                <div className={style.headerShoppingCart}>
                    <button><span className="material-icons">shopping_cart</span></button>
                </div>
                <div className={style.headerAccount}>
                    <button>Log In</button>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}
