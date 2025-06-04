import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./Devoluciones.module.css";

export const Devoluciones = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.returnsContainer}>
                <button onClick={() => navigate("/")} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Devoluciones</h1>

                    <div className={style.returnsInfo}>
                        <h2>Política de devoluciones</h2>
                        <p>
                            Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del producto.
                            Los artículos deben estar en su estado original, sin usar y con todas las etiquetas adjuntas.
                        </p>

                        <h2>Proceso de devolución</h2>
                        <ol>
                            <li>Contacta a nuestro servicio al cliente para iniciar el proceso</li>
                            <li>Empaqueta el producto cuidadosamente con todos sus accesorios</li>
                            <li>Adjunta la factura o comprobante de compra</li>
                            <li>Envía el paquete a la dirección que te proporcionaremos</li>
                        </ol>

                        <h2>Reembolsos</h2>
                        <p>
                            Una vez recibido y verificado el producto, procesaremos tu reembolso en un plazo de 5-7 días hábiles.
                            El reembolso se realizará mediante el mismo método de pago utilizado originalmente.
                        </p>

                        <h2>Productos no elegibles</h2>
                        <ul>
                            <li>Productos personalizados o hechos a medida</li>
                            <li>Productos fuera de su etapa de garantia</li>
                            <li>Productos sin su empaque original</li>
                            <li>Productos comprados en promociones especiales o liquidaciones</li>
                        </ul>

                        <h2>Devoluciones por defectos</h2>
                        <p>
                            Para productos defectuosos, contáctanos dentro de los 7 días de recibido el pedido.
                            Cubriremos los costos de envío para el reemplazo o devolución del importe.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};