import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/useCartStore";
import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import styles from "./Checkout.module.css";

export const Checkout = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const cartItems = useCartStore((state) => state.activeCart)
    const checkout = useCheckoutStore((state) => state.activeCheckout)

    const summaryRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(0);

    if (cartItems.length == 0) {
        navigate(-1)
    }


    useEffect(() => {
        const handleScroll = () => {
            if (!summaryRef.current) return;

            const summaryRect = summaryRef.current.getBoundingClientRect();
            const footerHeight = 100; // Ajusta según tu footer
            const viewportHeight = window.innerHeight;

            // Calcular si el elemento está pegado al fondo
            const shouldStick =
                summaryRect.bottom + footerHeight > viewportHeight &&
                summaryRect.top < viewportHeight - footerHeight;

            setIsSticky(shouldStick);

            // Calcular espacio disponible para el sticky
            const availableSpace = viewportHeight - footerHeight - summaryRect.height;
            setBottomOffset(Math.max(0, availableSpace));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar al montar

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.amount), 0);
    const shipping = 1500;
    const total = subtotal + shipping;

    const handlePayment = () => {
        // Lógica para procesar el pago
        console.log("Procesando pago...");
        navigate("/payment-success");
    };

    return (
        <div className={styles.checkoutContainer}>
            <Header />

            <main className={styles.checkoutMain}>
                <h1 className={styles.checkoutTitle}>FINALIZAR COMPRA</h1>

                <div className={styles.checkoutContent}>
                    {/* Sección de información */}
                    <section className={styles.infoSection}>
                        <div className={styles.sectionBlock}>
                            <h2>DATOS DE ENVÍO</h2>
                            <form className={styles.checkoutForm}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Nombre</label>
                                        <input type="text" placeholder="Tu nombre" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Apellido</label>
                                        <input type="text" placeholder="Tu apellido" required />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Dirección</label>
                                    <input type="text" placeholder="Dirección completa" required />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Ciudad</label>
                                        <input type="text" placeholder="Ciudad" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Código Postal</label>
                                        <input type="text" placeholder="CP" required />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Teléfono</label>
                                    <input type="tel" placeholder="Número de contacto" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="tu@email.com" required />
                                </div>
                            </form>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h2>MÉTODO DE PAGO</h2>
                            <div className={styles.paymentMethods}>
                                <label className={styles.paymentMethod}>
                                    <input type="radio" name="payment" defaultChecked />
                                    <span>Mercado Pago</span>
                                </label>
                                <label className={styles.paymentMethod}>
                                    <input type="radio" name="payment" disabled/>
                                    <span><i style={{color: "#777"}}>Tarjeta de crédito</i></span>
                                </label>
                                <label className={styles.paymentMethod}>
                                    <input type="radio" name="payment" disabled/>
                                    <span><i style={{color: "#777"}}>Transferencia bancaria</i></span>
                                </label>
                                <p><i>Por el momento el único medio disponible es Mercado Pago</i></p>
                            </div>
                        </div>
                    </section>

                    {/* Resumen de compra con sticky */}
                    <section
                        ref={summaryRef}
                        className={`${styles.summarySection} ${isSticky ? styles.sticky : ''}`}
                    >
                        <div className={styles.summaryBlock}>
                            <h2>TU PEDIDO</h2>

                            <div className={styles.orderItems}>
                                {cartItems.map(item => (
                                    <div key={item.product.id} className={styles.orderItem}>
                                        <div>
                                            <p>{item.product.nombre}</p>
                                            <small>{item.product.marca} | Talle: {item.size} | Cantidad: {item.amount}</small>
                                        </div>
                                        <p>${(item.price * item.amount).toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${subtotal.toLocaleString()}</span>
                            </div>

                            <div className={styles.summaryRow}>
                                <span>Envío</span>
                                <span>${shipping.toLocaleString()}</span>
                            </div>

                            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                                <span>Total</span>
                                <span>${total.toLocaleString()}</span>
                            </div>

                            <div className={styles.payButtonWrapper}>
                                <button
                                    
                                    className={styles.payButton}
                                    onClick={handlePayment}
                                >
                                    CONFIRMAR Y PAGAR
                                </button>
                            </div>

                            <div className={styles.securityInfo}>
                                <p>Compra protegida por Vetra</p>
                                <small>Datos cifrados con SSL</small>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};