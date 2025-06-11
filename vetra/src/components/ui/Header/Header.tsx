import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserStore } from "../../../store/userStore";
import style from "./Header.module.css";

export const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const activeUser = useUserStore((state) => state.actireUser)
    const deleteUser = useUserStore((state) => state.deleteUser)
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogOut = () => {

        deleteUser()
        localStorage.clear()

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sesión cerrada",
            showConfirmButton: false,
            timer: 1500
        });

        navigate("/login")

    }

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

                    <button onClick={() => navigate("/search")}>DESTACADOS</button>
                    <button onClick={() => navigate("/search?categoria=Hombre")}>Hombre</button>
                    <button onClick={() => navigate("/search?categoria=Mujer")}>Mujer</button>
                    <button onClick={() => navigate("/search?categoria=Chicos")}>Niños</button>
                    <button onClick={() => navigate("/search?categoria=Zapatillas")}>Zapatillas</button>
                    <button onClick={() => navigate("/search?categoria=Camperas")}>Camperas</button>
                </div>

                <div className={style.headerShoppingCart}>
                    <button onClick={() => navigate("/cart")}><span className="material-icons">shopping_cart</span></button>
                </div>

                <div className={style.headerAccount}>
                    {activeUser
                        ? <div style={{whiteSpace:'nowrap'}}>
                            {activeUser.nombre} <CiLogout style={{cursor:'pointer'}} onClick={handleLogOut} />
                        </div>
                        : <div className={style.headerAccount}>
                            <button onClick={() => navigate("/login")}>Log-In</button>
                            <button onClick={() => navigate("/signin")}>Sign In</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
