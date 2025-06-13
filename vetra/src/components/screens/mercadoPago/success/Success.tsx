import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../../store/useCartStore";
import { Footer } from "../../../ui/Footer/Footer";
import { Header } from "../../../ui/Header/Header";
import style from "./Success.module.css";

export const Success = () => {
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
                    <h1>PAGO REALIZADO CON ÉXITO</h1>

                    <div className={style.consumerText}>
                        <h2>😊 ¡Gracias por comprar con nosotros!</h2>
                        <p>
                            El pago se procesó con éxito y el pedido será enviado a su domicilio de acuerdo
                            con el tipo de envío seleccionado. Ante cualquier duda, consulte nuestra página de
                            ayuda o póngase en contacto con nuestro soporte.

                        </p>
                        <i><strong>¡Que tenga un buen día!</strong></i>
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