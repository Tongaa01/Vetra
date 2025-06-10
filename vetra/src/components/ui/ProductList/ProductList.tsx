
import { useEffect, useState } from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllCategories } from "../../../http/categorieRequest";
import { getAllDiscounts } from "../../../http/discountRequest";
import { getAllProducts } from "../../../http/productRequest";
import type { ICategories } from "../../../types/ICategories";
import type { IDiscount } from "../../../types/IDiscount";
import type { IProduct } from "../../../types/IProduct";
import style from "./ProductList.module.css";

export const ProductList = () => {

    const navigate = useNavigate()
    const [isGrid, setIsGrid] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [discounts, setDiscounts] = useState<IDiscount[]>([])

    const fetchProducts = async () => {
        const sizeFilters = searchParams.getAll('talle')

        const cateFilters = searchParams.getAll('categoria')

        const allProducts = await getAllProducts()

        //Filtrado creado con la ayuda de chatgpt

        const filteredProducts = allProducts.filter((product) => {
            // Coincidencia por categoría (por nombre)
            console.log(product)
            const matchesCategory =
                cateFilters.length === 0 ||
                product.categorias.some((cat) => cateFilters.includes(cat.nombre));

            // Coincidencia por talle (por talle string)
            const matchesSize =
                sizeFilters.length === 0 ||
                product.talles.some((talle) => sizeFilters.includes(talle.talle));

            return matchesCategory && matchesSize;
        });
        setProducts(filteredProducts)
    }

    const fetchCategories = async () => {

        const allCategories = await getAllCategories()
        setCategories(allCategories)
    }

    const fetchDiscounts = async () => {

        const allDiscounts = await getAllDiscounts()
        setDiscounts(allDiscounts)
    }


    useEffect(() => {
        fetchProducts()
        fetchCategories()
        fetchDiscounts()

    }, [searchParams])

    products.forEach((producto) => {
        if (producto.descuento !== 0) {
            //console.log(`Producto: ${producto.nombre}
            //Descuento: ${producto.descuento.descuento}%`);
        } else {
            //console.log(`Producto: ${producto.nombre}
            //Descuento: Sin descuento`);
        }
    });


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

            <div className={`${style.products} ${isGrid ? style.grid : style.list}`} >
                {products.map((item) => {
                    const precioFinal = Math.floor(item.precio * (1 - item.precio / 100)); // CORREGIR

                    return (
                        <div onClick={() => navigate(`/products/${item.id}`)}
                            key={item.id}
                            className={`${style.productCard} ${isGrid ? style.gridCard : style.listCard}`}
                        >
                            <img src={item.imagen} className={style.productImage} />

                            {isGrid ? (
                                <>
                                    <h3>{item.nombre}</h3>
                                    <div className={style.priceRow}>
                                        {item.precio !== 0 ? ( // CORREGIR
                                            <>
                                                <span className={style.originalPrice}>${Number(item.precio).toLocaleString('es-AR')}</span>
                                                <span className={style.discountPrice}>
                                                    ${precioFinal.toLocaleString('es-AR')}
                                                </span>
                                            </>
                                        ) : (
                                            <span className={style.discountPrice}>${item.precio.toLocaleString('es-AR')}</span>
                                        )}

                                    </div>
                                    <div className={style.actionsGrid}>
                                        <button className={style.buyButton} onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("Producto añadido al carrito:", item.nombre);
                                        }}>Comprar</button>
                                        <button className={style.cartButton}>Añadir al carrito</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={style.productDetails}>
                                        <h3>{item.nombre}</h3>
                                        <p>{item.descripcion}</p>
                                        <div className={style.actions}>
                                            <button className={style.buyButton} onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("Producto comprado:", item.nombre);
                                            }}>Comprar</button>
                                            <button className={style.cartButton} onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("Producto añadido al carrito:", item.nombre);
                                            }}>Añadir al carrito</button>
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