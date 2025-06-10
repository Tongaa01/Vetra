import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import styles from "./Cart.module.css"; // Asumo que tienes CSS modules

export const Cart = () => {

    const shippingOptions = [ // si, lo creé de esta forma, me parece más ordenado
        {
            id: 1,
            description: "Envío estándar",
            price: 8000
        },{
            id: 2,
            description: "Envío express",
            price: 17000
        },{
            id: 3,
            description: "Retiro en el local",
            price: 0
        }
    ]

    // Datos de ejemplo para el carrito
    const cartItems = [
        {
            id: 1,
            name: "Runner Velocity 4.0",
            image: "https://res.cloudinary.com/danzaburou/image/upload/v1749473424/camp03_eo659i.jpg",
            price: 25990,
            quantity: 1,
            size: "42",
            color: "Negro"
        },
        {
            id: 21,
            name: "Winter Shield Pro",
            image: "https://res.cloudinary.com/danzaburou/image/upload/v1749473424/camp03_eo659i.jpg",
            price: 45990,
            quantity: 1,
            size: "L",
            color: "Negro"
        }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 1500; // Costo de envío fijo
    const total = subtotal + shipping;

    return (
        <div className={styles.cartContainer}>
            <Header />

            <main className={styles.cartMain}>
                <h1 className={styles.cartTitle}>TU CARRITO</h1>

                <div className={styles.cartContent}>
                    {/* Lista de productos */}
                    <section className={styles.itemsSection}>
                        {cartItems.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <div className={styles.itemImage}>
                                    <img src={item.image || "/placeholder-product.jpg"} alt={item.name} />
                                </div>

                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p>Color: {item.color}</p>
                                    <p>Talle: {item.size}</p>

                                    <div className={styles.quantityControls}>
                                        <button className={styles.quantityBtn}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className={styles.quantityBtn}>+</button>
                                    </div>

                                    <p className={styles.itemPrice}>${(item.price * item.quantity).toLocaleString()}</p>

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
                            <span>${shipping.toLocaleString()}</span>
                        </div>

                        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                            <span>Total</span>
                            <span>${total.toLocaleString()}</span>
                        </div>

                        <button className={styles.checkoutBtn}>
                            FINALIZAR COMPRA
                        </button>

                        <button className={styles.continueBtn}>
                            SEGUIR COMPRANDO
                        </button>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};