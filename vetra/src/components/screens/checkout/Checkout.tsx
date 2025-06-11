import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/useCartStore";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import styles from "./Checkout.module.css";

export const Checkout = () => {

    const navigate = useNavigate()

    const activeCart = useCartStore((state) => state.activeCart)

    const summaryRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(0);

    if (activeCart.length == 0 || navigate(-1) !== navigate("/cart")) {
        navigate(-1)
    }

    // Datos de ejemplo
    const cartItems = [
        {
            id: 1,
            name: "Runner Velocity 4.0",
            price: 25990,
            quantity: 1,
            size: "42",
            color: "Negro"
        },
        {
            id: 21,
            name: "Winter Shield Pro",
            price: 45990,
            quantity: 1,
            size: "L",
            color: "Negro"
        }
    ];

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

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 1500;
    const total = subtotal + shipping;

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
                                        <input type="text" placeholder="Tu nombre" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Apellido</label>
                                        <input type="text" placeholder="Tu apellido" />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Dirección</label>
                                    <input type="text" placeholder="Dirección completa" />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Ciudad</label>
                                        <input type="text" placeholder="Ciudad" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Código Postal</label>
                                        <input type="text" placeholder="CP" />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Teléfono</label>
                                    <input type="tel" placeholder="Número de contacto" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="tu@email.com" />
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
                                    <input type="radio" name="payment" />
                                    <span>Tarjeta de crédito</span>
                                </label>
                                <label className={styles.paymentMethod}>
                                    <input type="radio" name="payment" />
                                    <span>Transferencia bancaria</span>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Resumen de compra */}
                    <section className={styles.summarySection}>
                        <div className={styles.summaryBlock}>
                            <h2>TU PEDIDO</h2>

                            <div className={styles.orderItems}>
                                {cartItems.map(item => (
                                    <div key={item.id} className={styles.orderItem}>
                                        <div>
                                            <p>{item.name}</p>
                                            <small>{item.color} | Talle: {item.size}</small>
                                        </div>
                                        <p>${(item.price * item.quantity).toLocaleString()}</p>
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

                            <button className={styles.payButton}>
                                CONFIRMAR Y PAGAR
                            </button>

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