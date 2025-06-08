
import { useState } from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { productosMock } from "../../../mock/productos.mock";
import style from "./ProductList.module.css";

export const ProductList = () => {

    const navigate = useNavigate()
    const [isGrid, setIsGrid] = useState(true);



    // console.log("Valores de descuento:", productosMock.map(p => p.id_descuento_producto))

    return (
        <div className={style.container}>
            <div className={style.viewToggle}>
                <button
                    onClick={() => setIsGrid(!isGrid)}
                    className={style.toggleButton}
                    aria-label={isGrid ? "Ver como lista" : "Ver como grilla"}
                >
                    {isGrid ? (
                        <>
                            <span>Ver como lista</span>
                            <CiGrid2H size={24} />
                        </>
                    ) : (
                        <>
                            <span>Ver como grilla</span>
                            <CiGrid41 size={24} />
                        </>
                    )}

                </button>
            </div>

            <div className={`${style.products} ${isGrid ? style.grid : style.list}`}>
                {productosMock.map((item) => {
                    const precioFinal = Math.floor(item.precio * (1 - item.precio / 100)); // CORREGIR

                    return (
                        <div
                            key={item.id}
                            className={`${style.productCard} ${isGrid ? style.gridCard : style.listCard}`}
                        >
                            <img src={item.image} className={style.productImage} />

                            {isGrid ? (
                                <>
                                    <h3>{item.nombre}</h3>
                                    <p>{item.descripcion}</p>
                                    <div className={style.priceRow}>
                                        {item.precio !== 0 ? ( // CORREGIR
                                            <>
                                                <span className={style.originalPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                                <span className={style.discountPrice}>
                                                    ${precioFinal.toLocaleString('es-AR')}
                                                </span>
                                            </>
                                        ) : (
                                            <span className={style.discountPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                        )}
                                        
                                    </div>
                                    <div className={style.actionsGrid}>
                                            <button className={style.buyButton} onClick={()=>navigate("/vetra/noticias")}>Comprar</button>
                                            <button className={style.cartButton}>Añadir al carrito</button>
                                        </div>
                                </>
                            ) : (
                                <>
                                    <div className={style.productDetails}>
                                        <h3>{item.nombre}</h3>
                                        <p>{item.descripcion}</p>
                                        <div className={style.actions}>
                                            <button className={style.buyButton}>Comprar</button>
                                            <button className={style.cartButton}>Añadir al carrito</button>
                                        </div>
                                    </div>
                                    <div className={style.priceBlock}>
                                        {item.precio !== 0 ? ( // CORREGIR
                                            <>
                                                <span className={style.originalPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                                <span className={style.discountPrice}>
                                                    ${precioFinal.toLocaleString('es-AR')}
                                                </span>
                                            </>
                                        ) : (
                                            <span className={style.discountPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>

                    );
                })}
            </div>

        </div>
    )
}