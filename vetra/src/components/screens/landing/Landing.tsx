import { productosMock } from "../../../mock/productos.mock";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import style from "./Landing.module.css";

export const Landing = () => {
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
                                    typeof item.id_descuento_producto === "number" &&
                                    item.id_descuento_producto > 20
                            )
                            .slice(0, 4).map((item) => (
                                <div className={style.productCard}>
                                    <img src={item.imagen} alt={`Producto ${item}`} />
                                    <div className={style.productInfo}>
                                        <h3>{item.nombre}</h3>
                                        <p>{item.descripcion}</p>
                                        <p><i>Precio con descuento:</i></p>
                                        <div className={style.priceBlock}>
                                            <span className={style.originalPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                            <span className={style.discountPrice}>
                                                ${Math.floor(item.precio * ((100 - item.id_descuento_producto) / 100)).toLocaleString('es-AR')}
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
                            <button className={style.categoryButton}>ZAPATILLAS</button>
                            <button className={style.categoryButton}>CAMPERAS</button>
                        </div>
                        {/* Segunda fila (3 botones) */}
                        <div className={style.bottomRow}>
                            <button className={`${style.categoryButton} ${style.buttonPhoto3}`}>HOMBRE</button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto4}`}>MUJER</button>
                            <button className={`${style.categoryButton} ${style.buttonPhoto5}`}>NIÑOS</button>
                        </div>
                    </div>
                </div>

                {/* Banner promocional */}
                <div className={style.promoBanner}>
                    <div className={style.promoContent}>
                        <h2>OFERTA POR TIEMPO LIMITADO</h2>
                        <p>Mirá los productos que tenemos para vos este finde.</p>
                        <button className={style.ctaButton}>VER OFERTAS</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};