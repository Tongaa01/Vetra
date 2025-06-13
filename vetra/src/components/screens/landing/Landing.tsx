import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../../http/productRequest";
import { getAllUsers } from "../../../http/userRequest";
import { tokenIsExpired } from "../../../services/jwtService";
import { refreshToken } from "../../../services/tokenService";
import { useUserStore } from "../../../store/userStore";
import type { IDiscount } from "../../../types/IDiscount";
import type { IProduct } from "../../../types/IProduct";
import type { IUser } from "../../../types/IUser";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import style from "./Landing.module.css";



export const Landing = () => {

    const navigate = useNavigate()
    
    const setActiveUser=useUserStore((state)=>state.setActiveUser)

    const activeUser=useUserStore((state)=>state.actireUser)

    const [products, setProducts] = useState<IProduct[]>([])

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
        }
    }

    useEffect(() => {
        refreshUser()
        const fetchProducts = async () => {
            const allProducts = await getAllProducts()
            setProducts(allProducts)
        }
        fetchProducts()
    }, [])

    useEffect(()=>{
        if(activeUser){
            setActiveUser(activeUser)
        }
    },[activeUser])

    return (
        <div className={style.landingContainer}>
            <Header />
            <main className={style.mainContent}>
                {/* Carrusel principal */}
                <div className={style.heroCarousel}>
                    <div className={style.carouselItem}>
                        <div>
                            <img src="https://res.cloudinary.com/danzaburou/image/upload/v1749489285/carousel_mvieps.png" alt="Nueva Colección" />
                        </div>
                    </div>
                </div>

                {/* Productos destacados */}
                <div className={style.trendingProducts}>
                    <h2>OFERTAS DESTACADAS</h2>
                    <div className={style.productGrid}>
                        {products
                            .filter(
                                (item): item is IProduct & { descuento: IDiscount } =>
                                    item.descuento.descuento !== 0 && item.descuento.descuento > 15
                            ).slice(0, 4)
                            .map((item) => (
                                <div className={style.productCard} key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
                                    <img src={item.imagen} alt={`Producto ${item.nombre}`} />
                                    <div className={style.productInfo}>
                                        <h3>{item.nombre}</h3>
                                        <div className={style.priceBlock}>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                                                <span className={style.originalPrice}>
                                                    ${item.precio.toLocaleString('es-AR')}
                                                </span>
                                                <span className={style.discountNote}>
                                                    -{item.descuento.descuento}% OFF
                                                </span>

                                            </div>
                                            <span className={style.discountPrice}>
                                                ${Math.floor(item.precio * ((100 - item.descuento.descuento) / 100)).toLocaleString('es-AR')}
                                            </span>
                                        </div>
                                        <button>VER OFERTA</button>
                                    </div>
                                </div>
                            ))}


                    </div>
                </div>

                {/* Categorías destacadas */}
                <div className={style.featuredCategories}>
                    <h2>COMPRAR POR CATEGORÍA</h2>
                    <div className={style.categoryGrid}>
                        {/* Primera fila (2 botones) */}
                        <div className={style.topRow}>
                            <button className={`${style.categoryButton} ${style.buttonPhoto1}`} onClick={() => navigate("/search?categoria=Zapatillas")}><p className={style.buttonText1}>ZAPATILLAS</p></button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto2}`} onClick={() => navigate("/search?categoria=Camperas")}><p className={style.buttonText2}>CAMPERAS</p></button>
                        </div>
                        {/* Segunda fila (3 botones) */}
                        <div className={style.bottomRow}>
                            <button className={`${style.categoryButton} ${style.buttonPhoto3}`} onClick={() => navigate("/search?categoria=Hombre")}><p className={style.buttonText3}>HOMBRE</p></button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto4}`} onClick={() => navigate("/search?categoria=Mujer")}><p className={style.buttonText4}>MUJER</p></button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto5}`} onClick={() => navigate("/search?categoria=Chicos")}><p className={style.buttonText5}>NIÑOS</p></button>
                        </div>
                    </div>
                </div>

                {/* Banner promocional */}
                <div className={style.promoBanner}>
                    <div className={style.promoContent}>
                        <h2>OFERTA POR TIEMPO LIMITADO</h2>
                        <p>Mirá los productos que tenemos para vos este finde.</p>
                        <button className={style.ctaButton} onClick={() => navigate("/search")}>VER OFERTAS</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};