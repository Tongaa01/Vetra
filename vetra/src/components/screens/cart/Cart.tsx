import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/useCartStore";
import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import styles from "./Cart.module.css";

export const Cart = () => {

    const cartItems = useCartStore((state) => state.activeCart)
    const checkout = useCheckoutStore((state) => state.setActiveCheckout)
    const [shipping, setShipping] = useState<number>(0)

    const navigate = useNavigate()


    const shippingOptions = [ // si, lo creé de esta forma, me parece más ordenado
        {
            id: 1,
            description: "Envío estándar",
            price: 8000
        }, {
            id: 2,
            description: "Envío express",
            price: 17000
        }, {
            id: 3,
            description: "Retiro en el local",
            price: 0
        }
    ]

    const handleNextStep = () => {

        checkout({
            subPrice: subtotal,
            shippingCost: shipping,
            totalPrice: total
        })

        navigate("/checkout")
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.amount), 0);
    let total = subtotal + shipping

    return (
        <div className={styles.cartContainer}>
            <Header />

            {cartItems.length == 0
                ? <div style={{ paddingLeft: "2rem" }}>
                    <h2>No hay productos dentro del carrito</h2>
                    <p>Agregue productos y luego vuelva aquí para continuar con el pago</p>
                </div>
                : <main className={styles.cartMain}>
                    <h1 className={styles.cartTitle}>TU CARRITO</h1>



                    <div className={styles.cartContent}>
                        {/* Lista de productos */}
                        <section className={styles.itemsSection}>
                            {cartItems.map(item => (
                                <div key={item.product.id} className={styles.cartItem}>
                                    <div className={styles.itemImage}>
                                        <img src={item.product.imagen} alt={item.product.nombre} />
                                    </div>

                                    <div className={styles.itemDetails}>
                                        <h3>{item.product.nombre}</h3>
                                        <p>Marca: {item.product.marca}</p>
                                        <p>Talle: {item.size}</p>

                                        <p className={styles.itemPrice}>${(item.price * item.amount).toLocaleString()}</p>

                                        <button className={styles.removeBtn}>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Resumen de compra */}
                        <section className={styles.summarySection}>
                            <h2>RESUMEN DE COMPRA</h2>

                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${subtotal.toLocaleString()}</span>
                            </div>

                            <div className={styles.summaryRow}>
                                
                                <span>Envío</span>
                                <select onChange={(e) => setShipping(Number(e.target.value))}>
                                    {shippingOptions.map(shipp => (
                                        <option key={shipp.id} value={shipp.price}>
                                            {shipp.description}: ${shipp.price.toLocaleString()}
                                        </option>
                                    ))}
                                </select>
                                <span>${shipping.toLocaleString()}</span>

                            </div>

                            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                                <span>Total</span>
                                <span>${total.toLocaleString()}</span>
                            </div>

                            <button className={styles.checkoutBtn} onClick={handleNextStep}>
                                FINALIZAR COMPRA
                            </button>

                            <button className={styles.continueBtn} onClick={() => navigate("/search")}>
                                SEGUIR COMPRANDO
                            </button>
                        </section>
                    </div>
                </main>
            }


            <Footer />
        </div>
    );
};