import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createBuyOrder } from "../../../http/buyOrderRequest";
import { useCartStore } from "../../../store/useCartStore";
import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { useUserStore } from "../../../store/userStore";
import type { IBuyOrder } from "../../../types/IBuyOrder";
import type { IOrderDetail } from "../../../types/IOrderDetail";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import styles from "./Checkout.module.css";
import { tokenIsExpired } from "../../../services/jwtService";
import { refreshToken } from "../../../services/tokenService";
import type { IUser } from "../../../types/IUser";
import { getAllUsers } from "../../../http/userRequest";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { createOrderDetail } from "../../../http/orderDetailRequest";
import { getPreferenceId } from "../../../http/MP/mercadoPagoRequest";
import { getLocalDateTimeISO } from "../../../services/dateService";

interface IUserFormData {
    nombre: string,
    apellido: string,
    calle: string,
    codpost: number,
    telefono: number,
    email: string
}
const MP_PUBLIC_KEY=import.meta.env.VITE_MP_PUBLIC_KEY

initMercadoPago(MP_PUBLIC_KEY);

export const Checkout = () => {

    
    const navigate = useNavigate()

    const setActiveUser=useUserStore((state)=>state.setActiveUser)
    
    const cartItems = useCartStore((state) => state.activeCart)
    const checkout = useCheckoutStore((state) => state.activeCheckout)
    const user = useUserStore((state) => state.actireUser)

    const initalValues:IUserFormData = {
        nombre: user ? user.nombre : "",
        apellido: user ? user.apellido : "",
        calle: user?.direcciones[0] ? user.direcciones[0].calle : "",
        codpost: user?.direcciones[0] ? user.direcciones[0].codpost : 5500,
        telefono: 261111111,
        email: user ? user.email : ""
    }


    const summaryRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(0);
    const [userFormInputs, setUserFormInputs] = useState<IUserFormData>(initalValues)

    //Mercado Pago
    const [mpReady,setMpReady]=useState<boolean>(false)
    const [preferenceKey,setPreferenceKey]=useState<string>()

    if (cartItems.length == 0) {
        navigate(-1)
    }
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

    useEffect(() => {
        refreshUser()
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
    const shipping = checkout != 0 ? checkout.shippingCost : 0;
    const total = subtotal + shipping;

    const handleCreateReceip = async () => {

        let items: IOrderDetail[] = []

        cartItems.forEach((el) => {
            let itemProduct: IOrderDetail = {
                ordenCompraId: 4,
                producto: el.product,
                cantidad: el.amount,
                precioUnitario: el.product.precio
            }

            items.push(itemProduct)

        })


        const newBuyOrder: IBuyOrder = {
            pedidoId: 1,
            detalles: items,
            fechaOrden: new Date(),
            montoTotal: total,
            medioPago: "MERCADOPAGO"
        }

        await createBuyOrder(newBuyOrder)

        console.log(newBuyOrder)
    }
    



    const handlePayment = async() => {
        const date=getLocalDateTimeISO()

        const newBuyOrder:IBuyOrder={
            detalles:[],
            fechaOrden:date,
            montoTotal:total,
            medioPago:"MERCADOPAGO"
        }

        cartItems.forEach((el) => {
            let itemProduct: IOrderDetail = {
                producto: el.product,
                cantidad: el.amount,
                precioUnitario: el.product.precio
            }
            newBuyOrder.detalles.push(itemProduct)
        })

        const response=await createBuyOrder(newBuyOrder)

        if(response){
            console.log(response)
            const data=await getPreferenceId(response.id)
            if(data){
                console.log(data)
                setPreferenceKey(data)
                setMpReady(true)
                console.log(preferenceKey,mpReady)
            }
        }
    };

    const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        console.log(value, name)
        setUserFormInputs((prev) => ({ ...prev, [`${ name }`]: value }))
    }
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
                                        <input type="text" name="nombre" placeholder="Tu nombre" value={userFormInputs.nombre} onChange={handleChangeInputs} required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Apellido</label>
                                        <input type="text" name="apellido" placeholder="Tu apellido" value={userFormInputs.apellido} onChange={handleChangeInputs} required />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Calle</label>
                                        <input type="text" name="calle" placeholder="Calle" value={userFormInputs.calle} onChange={handleChangeInputs} required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Código Postal</label>
                                        <input type="text" name="codpost" placeholder="CP" value={userFormInputs.codpost} onChange={handleChangeInputs} required />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Teléfono</label>
                                    <input type="tel" name="telefono" placeholder="Número de contacto" value={userFormInputs.telefono} onChange={handleChangeInputs} required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="tu@email.com" value={userFormInputs.email} onChange={handleChangeInputs} required />
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
                                    <input type="radio" name="payment" disabled />
                                    <span><i style={{ color: "#777" }}>Tarjeta de crédito</i></span>
                                </label>
                                <label className={styles.paymentMethod}>
                                    <input type="radio" name="payment" disabled />
                                    <span><i style={{ color: "#777" }}>Transferencia bancaria</i></span>
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
                                {preferenceKey && mpReady?
                                    <Wallet initialization={{ preferenceId:preferenceKey  }} />
                                :<button

                                    className={styles.payButton}
                                    onClick={handlePayment}
                                >
                                    CONFIRMAR Y PAGAR
                                </button>}
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