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

                        <div className={style.carouselContent}>
                            <h2>NUEVA COLECCIÓN</h2>
                            <p>Descubre las últimas tendencias en ropa deportiva</p>
                            <button className={style.ctaButton}>COMPRAR AHORA</button>
                        </div>
                    </div>
                </div>

                {/* Categorías destacadas */}
                <div className={style.featuredCategories}>
                    <h2>COMPRAR POR CATEGORÍA</h2>
                    <div className={style.categoryGrid}>
                        <div className={style.categoryCard}>
                            <img src="/category-shoes.jpg" alt="Zapatos" />
                            <h3>Zapatos</h3>
                        </div>
                        <div className={style.categoryCard}>
                            <img src="/category-apparel.jpg" alt="Ropa" />
                            <h3>Ropa</h3>
                        </div>
                        <div className={style.categoryCard}>
                            <img src="/category-accessories.jpg" alt="Accesorios" />
                            <h3>Accesorios</h3>
                        </div>
                    </div>
                </div>

                {/* Productos destacados */}
                <div className={style.trendingProducts}>
                    <h2>LO MÁS VENDIDO</h2>
                    <div className={style.productGrid}>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={style.productCard}>
                                <img src={`/product-${item}.jpg`} alt={`Producto ${item}`} />
                                <div className={style.productInfo}>
                                    <h3>Producto {item}</h3>
                                    <p>Categoría</p>
                                    <span>$99.99</span>
                                    <button>AÑADIR RÁPIDO</button>
                                </div>
                            </div>
                        ))}
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