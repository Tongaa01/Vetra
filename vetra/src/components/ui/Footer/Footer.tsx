import { BsTwitterX } from "react-icons/bs";
import { CiFacebook, CiInstagram, CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import style from "./Footer.module.css";

export const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.contactColumn}>
                    <h3 className={style.footerTitle}>Contacto</h3>
                    <Link to="/">
                        <img className={style.vetraLogo} src="https://res.cloudinary.com/danzaburou/image/upload/v1749489284/vetra_logo_jqxtnh.png" alt="Logo de Vetra" />
                    </Link>
                    <div className={style.footerContact}>
                        <Link to="mailto:contact@vetra.com" ><CiMail style={{ color: '#141414' }} /></Link>
                        <Link to="http://www.instagram.com/vetra" ><CiInstagram style={{ color: '#141414' }} /></Link>
                        <Link to="http://www.facebook.com/vetra" ><CiFacebook style={{ color: '#141414' }} /></Link>
                        <Link to="https://x.com/vetra" ><BsTwitterX style={{ color: '#141414', fontSize: "21px" }} /></Link>
                    </div>
                </div>

                <div className={style.rightColumnsWrapper}>
                    <div className={style.footerColumn}>
                        <h3 className={style.footerTitle}>Ayuda</h3>
                        <div className={style.footerContent}>
                            <p onClick={() => navigate("/ayuda/como-elegir-tu-talle")}>Cómo elegir tu talle</p>
                            <p onClick={() => navigate("/ayuda/envios-y-entregas")}>Envío y entregas</p>
                            <p onClick={() => navigate("/ayuda/opciones-de-pago")}>Opciones de pago</p>
                            <p onClick={() => navigate("/ayuda/tips")}>Tips</p>
                            <p onClick={() => navigate("/ayuda/cambios")}>Cambios</p>
                            <p onClick={() => navigate("/ayuda/devoluciones")}>Devoluciones</p>
                            <p onClick={() => navigate("/ayuda/defensa-del-consumidor")}>Defensa del consumidor</p>
                        </div>
                    </div>
                    <div className={style.footerColumn}>
                        <h3 className={style.footerTitle}>Vetra</h3>
                        <div className={style.footerContent}>
                            <p onClick={() => navigate("/vetra/proposito")}>Propósito</p>
                            <p onClick={() => navigate("/vetra/noticias")}>Noticias</p>
                            <p onClick={() => navigate("/vetra/trabaja-con-nosotros")}>Trabaja con nosotros</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};