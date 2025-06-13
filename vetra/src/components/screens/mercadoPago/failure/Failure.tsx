import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../../store/useCartStore";
import { Footer } from "../../../ui/Footer/Footer";
import { Header } from "../../../ui/Header/Header";
import style from "./Failure.module.css";

export const Failure = () => {
    const navigate = useNavigate();

    const deleteCart = useCartStore((state) => state.deleteCart)

    const handleGoHome = () => {
        navigate('/')
        deleteCart
    }

    const handleGoCatalog = () => {
        navigate('/search')
        deleteCart
    }

    return (
        <div>
            <Header />
            <div className={style.consumerContainer}>


                <div className={style.content}>
                    <h1>OCURRIÓ UN ERROR EN EL PAGO</h1>

                    <div className={style.consumerText}>
                        <h2>😢 No se pudo completar el pago</h2>
                        <p>
                            No pudimos procesar su pago correctamente. Por favor, verifique los 
                            datos de su tarjeta o método de pago e inténtelo nuevamente. Si el problema 
                            persiste, contáctenos para asistencia.

                        </p>
                        <i><strong>Disculpe las molestias.</strong></i>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                    <button onClick={handleGoHome} className={style.backButton}>
                        Volver al inicio
                    </button>
                    <button onClick={handleGoCatalog} className={style.backButton}>
                        Volver al catálogo
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};