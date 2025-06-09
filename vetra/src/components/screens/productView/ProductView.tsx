import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../http/productRequest";
import type { IProduct } from "../../../types/IProduct";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import style from "./productView.module.css";

export const ProductView = () => {
    const [product, setProduct] = useState<IProduct>();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            const prod = await getProductById(id);
            setProduct(prod);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!product || quantity > product.stock) return;
        if (!selectedSize) return alert("Seleccioná un talle antes de continuar.");

        const updatedStock = product.stock - quantity;
        setProduct({ ...product, stock: updatedStock });
        console.log("Producto agregado al carrito:", {
            producto: product.nombre,
            cantidad: quantity,
            talle: selectedSize,
        });
    };

    const formatPrice = (price: number | undefined) => {
        return `$${(price ?? 0).toLocaleString("es-AR")}`;
    };

    const discountedPrice = product && product.descuento !== 0
        ? Math.floor(product.precio * ((100 - product.descuento.descuento) / 100))
        : null;

    return (
        <div>
            <Header />
            <div className={style.mainContainer}>
                <div className={style.productContent}>
                    <div className={style.productImage}>
                        <img src={product?.imagen} alt={product?.nombre} />
                    </div>
                    <div className={style.productDetails}>
                        <h1>{product?.nombre}</h1>
                        <p className={style.brand}>{product?.marca}</p>
                        {product?.descuento !== 0 ? (
                            <div className={style.priceBlock}>
                                <span className={style.originalPrice}>{formatPrice(product?.precio)}</span>
                                <span className={style.discountPrice}>{formatPrice(discountedPrice!)}</span>
                                <span className={style.percentOff}>- {product?.descuento.descuento}% OFF</span>
                            </div>
                        ) : (
                            <div className={style.priceBlock}>
                                <span className={style.discountPrice}>{formatPrice(product?.precio || 0)}</span>
                            </div>
                        )}
                        <p className={style.description}>{product?.descripcion}</p>
                        <div className={style.selectorBlock}>
                            <label>Talle:</label>
                            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                <option value="">Elegí un talle</option>
                                {product?.talles.map((talle) => (
                                    <option key={talle.id} value={talle.talle}>{talle.talle}</option>
                                ))}
                            </select>
                        </div>
                        <div className={style.selectorBlock}>
                            <label>Cantidad:</label>
                            <input
                                type="number"
                                min={1}
                                max={product?.stock || 1}
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <span className={style.stockInfo}>Stock disponible: {product?.stock}</span>
                        </div>
                        <div className={style.buttonGroup}>
                            <button className={style.cartButton} onClick={handleAddToCart}>Agregar al carrito</button>
                            <button className={style.buyButton}>Comprar ahora</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
