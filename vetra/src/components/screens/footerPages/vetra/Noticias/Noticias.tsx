import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./Noticias.module.css";

export const Noticias = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.newsContainer}>
                <button onClick={() => navigate("/")} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Noticias</h1>

                    <div className={style.newsList}>
                        <div className={style.newsItem}>
                            <h2>Nueva colección de invierno 2025</h2>
                            <div className={style.newsMeta}>
                                <span className={style.newsDate}>19 de Mayo, 2025</span>
                                <span className={style.newsCategory}>Colecciones</span>
                            </div>
                            <p>
                                Presentamos nuestra nueva línea de invierno con diseños modernos y tejidos aislantes.
                                Disponible en todas nuestras tiendas a partir del 2 de Junio.
                            </p>
                        </div>

                        <div className={style.newsItem}>
                            <h2>Ampliación de horarios en tiendas</h2>
                            <div className={style.newsMeta}>
                                <span className={style.newsDate}>3 de Mayo, 2025</span>
                                <span className={style.newsCategory}>Tiendas</span>
                            </div>
                            <p>
                                A partir de junio, nuestras tiendas en Buenos Aires extenderán su horario de atención
                                hasta las 21hs de lunes a sábados.
                            </p>
                        </div>

                        <div className={style.newsItem}>
                            <h2>Promoción especial para el Día del Padre</h2>
                            <div className={style.newsMeta}>
                                <span className={style.newsDate}>21 de Abril, 2025</span>
                                <span className={style.newsCategory}>Promociones</span>
                            </div>
                            <p>
                                Celebra el Día del Padre con un 20% de descuento en toda nuestra línea de accesorios.
                                Válido del 9 al 16 de Junio en compras online y en tienda.
                            </p>
                        </div>

                        <div className={style.newsItem}>
                            <h2>Nuevo sistema de seguimiento de pedidos</h2>
                            <div className={style.newsMeta}>
                                <span className={style.newsDate}>14 de Octubre, 2024</span>
                                <span className={style.newsCategory}>Categorias</span>
                            </div>
                            <p>
                                Presentamos nuestra nueva línea de verano con diseños frescos y tejidos transpirables.
                                Disponible en todas nuestras tiendas a partir del 4 de Noviembre.
                            </p>
                        </div>

                        <div className={style.newsItem}>
                            <h2>Vetra participará en la Feria de Moda Buenos Aires</h2>
                            <div className={style.newsMeta}>
                                <span className={style.newsDate}>28 de Marzo, 2024</span>
                                <span className={style.newsCategory}>Eventos</span>
                            </div>
                            <p>
                                Estaremos presentes en la próxima edición de la Feria de Moda BA los días 15 y 16 de Julio,
                                donde presentaremos nuestros nuevos diseños exclusivos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};