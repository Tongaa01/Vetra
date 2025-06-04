import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./OpcionesPago.module.css";

export const OpcionesPago = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.paymentContainer}>
                <button onClick={() => navigate("/")} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Opciones de pago</h1>

                    <div className={style.paymentInfo}>
                        <h2>Métodos de pago aceptados</h2>
                        <p>
                            Aceptamos los siguientes métodos de pago para tu comodidad:
                        </p>

                        <h3>Tarjetas de crédito/débito</h3>
                        <ul>
                            <li>Visa</li>
                            <li>Mastercard</li>
                            <li>American Express</li>
                            <li>Tarjeta Naranja</li>
                            <li>Tarjeta Cabal</li>
                        </ul>
                        <p>Hasta 12 cuotas sin interés según promociones vigentes.</p>

                        <h3>Transferencia bancaria</h3>
                        <p>
                            Realiza la transferencia a nuestra cuenta corriente y envía el comprobante por email.
                            Tu pedido será despachado una vez confirmado el pago (24-48 horas hábiles).
                        </p>

                        <h3>Mercado Pago</h3>
                        <p>
                            Puedes pagar con tu cuenta de Mercado Pago o en efectivo a través de Rapipago/Pago Fácil.
                        </p>

                        <h3>Efectivo</h3>
                        <p>
                            Solo disponible para compras en nuestro local físico con descuento del 5%.
                        </p>

                        <h2>Seguridad en pagos</h2>
                        <p>
                            Todas las transacciones en línea son procesadas a través de gateway de pagos con certificación PCI DSS.
                            No almacenamos información de tarjetas de crédito en nuestros servidores.
                        </p>

                        <h2>Promociones bancarias</h2>
                        <p>
                            Consulta las promociones vigentes con tu banco para cuotas sin interés y descuentos especiales.
                        </p>

                        <h2>Problemas con pagos</h2>
                        <p>
                            Si experimentas dificultades al procesar tu pago, contáctanos inmediatamente a ventas@vetra.com.ar
                            o al +54 11 1234-5678 de lunes a viernes de 9 a 18hs.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};