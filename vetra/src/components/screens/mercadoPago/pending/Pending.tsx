import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../../store/useCartStore";
import { Footer } from "../../../ui/Footer/Footer";
import { Header } from "../../../ui/Header/Header";
import style from "./Pending.module.css";

export const Pending = () => {
    const navigate = useNavigate();

    const deleteCart = useCartStore((state) => state.deleteCart)

    const handleGoHome = () => {
        navigate('/')
        deleteCart()
    }

    const handleGoCatalog = () => {
        navigate('/search')
        deleteCart()
    }

    return (
        <div>
            <Header />
            <div className={style.consumerContainer}>


                <div className={style.content}>
                    <h1>EL PAGO SE ENCUENTRA EN PROCESO</h1>

                    <div className={style.consumerText}>
                        <h2>⏳ ¡Su pago está en proceso!</h2>
                        <p>
                            El pago se encuentra siendo procesado. Una vez confirmado, recibirá un 
                            correo electrónico con los detalles de su pedido. Si el pago no se completa en 
                            las próximas horas, por favor revise su método de pago o contacte con nuestro soporte.
                        </p>
                        <i><strong>¡Gracias por su paciencia!</strong></i>
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