import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";

export const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className={style.headerContainer}>
            <div className={style.headerTop}>
                <Link to="/">
                    <img
                        src="https://res.cloudinary.com/danzaburou/image/upload/v1749489285/vetra_banner_wflubd.png"
                        alt="Vetra"
                        className={style.headerBanner}
                    />
                </Link>
                <button className={style.hamburgerButton} onClick={toggleMenu}>
                    <span className="material-icons">menu</span>
                </button>
            </div>

            <div className={`${style.headerComponents} ${menuOpen ? style.menuOpen : ""}`}>
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
                    <button>Log-In</button>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    );
};
