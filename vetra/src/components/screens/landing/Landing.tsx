import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../../http/categorieRequest";
import { getAllDiscounts } from "../../../http/discountRequest";
import { getAllProducts } from "../../../http/productRequest";
import type { ICategories } from "../../../types/ICategories";
import type { IDiscount } from "../../../types/IDiscount";
import type { IProduct } from "../../../types/IProduct";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import style from "./Landing.module.css";

export const Landing = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [discounts, setDiscounts] = useState<IDiscount[]>([])


    useEffect(() => {
        const fetchProducts = async () => {

            const allProducts = await getAllProducts()
            setProducts(allProducts)
        }

        const fetchCategories = async () => {

            const allCategories = await getAllCategories()
            setCategories(allCategories)
        }

        const fetchDiscounts = async () => {

            const allDiscounts = await getAllDiscounts()
            setDiscounts(allDiscounts)
        }


        fetchProducts()
        fetchCategories()
        fetchDiscounts()

    }, [])

    const navigate = useNavigate()

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
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("Producto añadido al carrito:", item.nombre);
                                        }}>AÑADIR AL CARRITO</button>
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
                            <button className={`${style.categoryButton} ${style.buttonPhoto1}`}><p className={style.buttonText1}>ZAPATILLAS</p></button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto2}`}><p className={style.buttonText2}>CAMPERAS</p></button>
                        </div>
                        {/* Segunda fila (3 botones) */}
                        <div className={style.bottomRow}>
                            <button className={`${style.categoryButton} ${style.buttonPhoto3}`}><p className={style.buttonText3}>HOMBRE</p></button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto4}`}><p className={style.buttonText4}>MUJER</p></button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto5}`}><p className={style.buttonText5}>NIÑOS</p></button>
                        </div>
                    </div>
                </div>

                {/* Banner promocional */}
                <div className={style.promoBanner}>
                    <div className={style.promoContent}>
                        <h2>OFERTA POR TIEMPO LIMITADO</h2>
                        <p>Mirá los productos que tenemos para vos este finde.</p>
                        <button className={style.ctaButton} onClick={() => navigate("/search/offers")}>VER OFERTAS</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};