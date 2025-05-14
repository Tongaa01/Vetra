import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./Envios.module.css";

export const Envios = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.shippingContainer}>
                <button onClick={() => navigate(-1)} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Envío y entregas</h1>

                    <div className={style.shippingInfo}>
                        <h2>Política de envíos</h2>
                        <p>
                            Todos los pedidos son procesados dentro de 1-2 días hábiles. Los envíos se realizan de lunes a viernes,
                            excepto días feriados.
                        </p>

                        <h2>Opciones de envío</h2>
                        <ul>
                            <li><strong>Envío estándar:</strong> 3-5 días hábiles - $8000</li>
                            <li><strong>Envío express:</strong> 1-2 días hábiles - $17000</li>
                            <li><strong>Retiro en tienda:</strong> Gratis - Disponible en 24 horas</li>
                        </ul>

                        <h2>Cobertura de envíos</h2>
                        <p>
                            Realizamos envíos a todo el territorio argentino. Para envíos al interior, el tiempo de entrega puede
                            extenderse 1-2 días hábiles adicionales.
                        </p>

                        <h2>Seguimiento de pedidos</h2>
                        <p>
                            Una vez despachado tu pedido, recibirás un email con el número de seguimiento para que puedas monitorear
                            el estado de tu envío en tiempo real.
                        </p>

                        <h2>Zonas de entrega</h2>
                        <p>
                            En CABA y GBA ofrecemos entregas el mismo día para pedidos realizados antes de las 12hs (sujeto a
                            disponibilidad).
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};