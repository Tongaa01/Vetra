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
                        {productosMock.map((item) => (
                            <div className={style.productCard}>
                                <img src={item.imagen} alt={`Producto ${item}`} />
                                <div className={style.productInfo}>
                                    <h3>{item.nombre}</h3>
                                    <p>{item.categoria.map((cat)=>(
                                        <p>{cat.nombre}</p>
                                    ))}</p>
                                    <span>${item.precio}</span>
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
                            <button className={style.categoryButton}>HOMBRE</button>
                            <button className={style.categoryButton}>MUJER</button>
                            <button className={style.categoryButton}>NIÑOS</button>
                        </div>
                    </div>
                </div>

                {/* Banner promocional */}
                <div className={style.promoBanner}>
                    <div className={style.promoContent}>
                        <h2>OFERTA POR TIEMPO LIMITADO</h2>
                        <p>30% de descuento en todos los productos este fin de semana</p>
                        <button className={style.ctaButton}>VER OFERTAS</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};