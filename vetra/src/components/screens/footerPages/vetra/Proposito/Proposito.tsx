import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./Proposito.module.css";

export const Proposito = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.purposeContainer}>
                <button onClick={() => navigate("/")} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Nuestro Propósito</h1>

                    <div className={style.purposeInfo}>
                        <h2>Quiénes Somos</h2>
                        <p>
                            Vetra nace de la pasión por el deporte y la moda, con el objetivo de crear productos que
                            combinen rendimiento, estilo y sustentabilidad. Somos una marca argentina comprometida
                            con la calidad y la innovación.
                        </p>

                        <h2>Nuestra Misión</h2>
                        <p>
                            Ofrecer indumentaria y calzado deportivo de alto desempeño que inspire a las personas
                            a superar sus límites, sin comprometer el cuidado del medio ambiente.
                        </p>

                        <h2>Visión</h2>
                        <p>
                            Ser reconocidos como la marca líder en moda deportiva sustentable de Latinoamérica,
                            siendo referentes en diseño, tecnología y prácticas responsables.
                        </p>

                        <h2>Nuestros Valores</h2>
                        <ul>
                            <li><strong>Pasión:</strong> Amamos lo que hacemos y eso se refleja en cada producto</li>
                            <li><strong>Innovación:</strong> Buscamos constantemente mejorar y reinventarnos</li>
                            <li><strong>Sustentabilidad:</strong> Utilizamos materiales reciclados y procesos eco-amigables</li>
                            <li><strong>Autenticidad:</strong> Creemos en la transparencia y honestidad con nuestros clientes</li>
                            <li><strong>Comunidad:</strong> Apoyamos el deporte local y las causas sociales</li>
                        </ul>

                        <h2>Compromiso Ambiental</h2>
                        <p>
                            El 60% de nuestros productos están fabricados con materiales reciclados. Para 2026,
                            nos comprometemos a alcanzar el 100% en packaging sustentable y reducir nuestra huella
                            de carbono en un 40%.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};