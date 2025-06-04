import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./Cambios.module.css";

export const Cambios = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.cambiosContainer}>
                <button onClick={() => navigate("/")} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Cambios</h1>

                    <div className={style.cambiosInfo}>
                        <h2>Política de cambios</h2>
                        <p>
                            Aceptamos cambios dentro de los 30 días posteriores a la compra. Los productos deben estar en perfecto estado, con sus etiquetas originales y sin haber sido utilizados.
                        </p>

                        <h2>¿Cómo realizar un cambio?</h2>
                        <ol>
                            <li>Comunícate con nuestro servicio al cliente para solicitar el cambio</li>
                            <li>Prepara el producto con su empaque original y todos sus accesorios</li>
                            <li>Envía el paquete a nuestra dirección o acércate a nuestra tienda física</li>
                            <li>Una vez recibido, procesaremos tu cambio en un plazo de 3-5 días hábiles</li>
                        </ol>

                        <h2>Condiciones para cambios</h2>
                        <ul>
                            <li>El producto debe estar en su estado original</li>
                            <li>Se debe presentar el comprobante de compra</li>
                            <li>Los cambios están sujetos a disponibilidad de stock</li>
                            <li>No aplica para productos de la sección de liquidación</li>
                        </ul>

                        <h2>Cambios por talles</h2>
                        <p>
                            Si necesitas cambiar el talle de tu producto, cubriremos el costo de envío del nuevo artículo. El producto original debe estar en perfectas condiciones.
                        </p>

                        <h2>Cambios en tienda</h2>
                        <p>
                            Puedes realizar cambios directamente en nuestra tienda física presentando tu comprobante de compra y el producto en su estado original.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};