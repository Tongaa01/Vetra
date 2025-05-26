import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./TrabajaConNosotros.module.css";

export const TrabajaConNosotros = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.jobsContainer}>
                <button onClick={() => navigate('/')} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Trabaja con nosotros</h1>

                    <div className={style.jobsInfo}>
                        <h2>Oportunidades laborales</h2>
                        <p className={style.noJobsMessage}>
                            Actualmente no tenemos puestos disponibles.
                        </p>

                        <h2>Envíanos tu CV</h2>
                        <p>
                            Si deseas formar parte de nuestro equipo en el futuro, puedes enviarnos tu currículum a:
                        </p>
                        <p className={style.email}>
                            rrhh@vetra.com.ar
                        </p>

                        <h2>¿Qué buscamos?</h2>
                        <p>
                            Cuando tengamos vacantes, buscaremos personas apasionadas por:
                        </p>
                        <ul>
                            <li>Moda y tendencias</li>
                            <li>Atención al cliente</li>
                            <li>Innovación en retail</li>
                            <li>Sustentabilidad</li>
                        </ul>

                        <h2>Beneficios</h2>
                        <p>
                            En Vetra ofrecemos:
                        </p>
                        <ul>
                            <li>Ambiente de trabajo dinámico</li>
                            <li>Descuentos en productos</li>
                            <li>Capacitaciones constantes</li>
                            <li>Oportunidades de crecimiento</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};