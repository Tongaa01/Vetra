import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductById, updateProduct } from "../../../http/productRequest";
import { getAllUsers } from "../../../http/userRequest";
import { tokenIsExpired } from "../../../services/jwtService";
import { refreshToken } from "../../../services/tokenService";
import { useCartStore } from "../../../store/useCartStore";
import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { useUserStore } from "../../../store/userStore";
import type { IProduct } from "../../../types/IProduct";
import type { IUser } from "../../../types/IUser";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import styles from "./Cart.module.css";

export const Cart = () => {

    const cartItems = useCartStore((state) => state.activeCart)
    const setCart = useCartStore((state) => state.setActiveCart)
    const deleteCart = useCartStore((state) => state.deleteCart)

    const checkout = useCheckoutStore((state) => state.setActiveCheckout)
    const [shipping, setShipping] = useState<number>(0)

    const navigate = useNavigate()

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2300,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    })
    const setActiveUser=useUserStore((state)=>state.setActiveUser)

    const refreshUser=async()=>{
        const token=localStorage.getItem('token')
        if(token){
            if(tokenIsExpired(token)){
                refreshToken()
            }
            const userId=localStorage.getItem('userId')
            const users: IUser[] = await getAllUsers();
            const user = users.find(user => user.id?.toString() === userId);
            setActiveUser(user!)
        }else{
            navigate('/login')
        }
    }
    useEffect(()=>{
        refreshUser()
    },[])


    const shippingOptions = [ // si, lo creé de esta forma, me parece más ordenado  - ilegal lo tuyo
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

    const handleDeleteAndRestock = async (id: number, amount: number) => {

        const productToRestock: IProduct = await getProductById(id.toString())
        const restock = productToRestock.stock + amount

        await updateProduct({ ...productToRestock, stock: restock })

        const newCart = cartItems.filter((el) => el.product.id !== productToRestock.id)

        Toast.fire({
            icon: "warning",
            title: "Producto eliminado del carrito",
        });

        setCart(newCart)
    }

    const handleDeleteEntireCartAndRestock = async () => {

        await Promise.all(
            cartItems.map(async (items) => {

                const productToRestock: IProduct = await getProductById(items.product.id!.toString())
                const restock = productToRestock.stock + items.amount

                await updateProduct({ ...productToRestock, stock: restock })
            })
        )

        Toast.fire({
            icon: "warning",
            title: "Carrito vaciado exitosamente",
        });

        deleteCart()
    }

    return (
        <div className={styles.cartContainer} >
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
                                        {item.product.categorias[0].nombre == 'Zapatillas'
                                            ? <p>Cantidad de pares de esta zapatilla: {item.amount}</p>
                                            : <p>Cantidad de esta campera: {item.amount}</p>}

                                        <p className={styles.itemPrice}>${(item.price * item.amount).toLocaleString()}</p>

                                        <button className={styles.removeBtn}
                                            onClick={() => { handleDeleteAndRestock(item.product.id!, item.amount) }}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button className={styles.deleteCartBtn} onClick={handleDeleteEntireCartAndRestock}>ELIMINAR CARRITO</button>
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


            < Footer />
        </div >
    );
};