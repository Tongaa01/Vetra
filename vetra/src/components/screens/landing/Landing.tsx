import { useNavigate } from "react-router-dom";
import { productosMock } from "../../../mock/productos.mock";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import style from "./Landing.module.css";

export const Landing = () => {

    const navigate = useNavigate()

    return (
        <div className={style.landingContainer}>
            <Header />

            <main className={style.mainContent}>
                {/* Carrusel principal */}
                <div className={style.heroCarousel}>
                    <div className={style.carouselItem}>
                        <div>
                            <img src="../../../../public/carousel.png" alt="Nueva Colección" />
                        </div>
                    </div>
                </div>

                {/* Productos destacados */}
                <div className={style.trendingProducts}>
                    <h2>LO MÁS VENDIDO</h2>
                    <div className={style.productGrid}>
                        {productosMock
                            .filter(
                                (item) =>
                                    typeof item.descuento_id === "number" &&  // CORREGIR
                                    item.descuento_id > 0
                            )
                            .slice(0, 4).map((item) => (
                                <div className={style.productCard}>
                                    <img src={item.image} alt={`Producto ${item}`} />
                                    <div className={style.productInfo}>
                                        <h3>{item.nombre}</h3>
                                        <p>{item.descripcion}</p>
                                        <div className={style.priceBlock}>
                                            <span className={style.originalPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                            <span className={style.discountPrice}>
                                                ${Math.floor(item.precio * ((100 - item.descuento_id) / 100)).toLocaleString('es-AR')}
                                            </span>
                                        </div>
                                        {/*<span>${item.precio} ${Math.floor(item.precio * ((100-item.id_descuento_producto)/100))}</span>*/}
                                        <button>AÑADIR AL CARRITO</button>
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
                        <button className={style.ctaButton} onClick={()=> navigate("/search/offers")}>VER OFERTAS</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};