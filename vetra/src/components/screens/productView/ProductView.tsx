import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductById, updateProduct } from "../../../http/productRequest";
import { tokenIsExpired } from "../../../services/jwtService";
import { getLocalToken } from "../../../services/tokenService";
import { useCartStore } from "../../../store/useCartStore";
import type { ICartBody } from "../../../types/ICartBody";
import type { IProduct } from "../../../types/IProduct";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";
import style from "./productView.module.css";

export const ProductView = () => {
    const [product, setProduct] = useState<IProduct>();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const { id } = useParams();
    const setCart = useCartStore((state) => state.setActiveCart)
    let activeCart = useCartStore((state) => state.activeCart)

    const navigate = useNavigate()

    const fetchProduct = async () => {
        if (!id) return;
        const prod = await getProductById(id);
        setProduct(prod);
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        if(!handleCheckToken()){
            Toast.fire({
                icon: "error",
                title: "Debes iniciar sesion para hacer eso."
            })
            navigate('/login')
            return
        }
        if (!product || quantity > product.stock) return (

            Toast.fire({
                icon: "error",
                title: "No se puede agregar una cantidad mayor al stock."
            }));;

        if (!selectedSize) return (

            Toast.fire({
                icon: "warning",
                title: "Seleccioná un talle antes de continuar."
            }));

        const updatedStock = product.stock - quantity;
        setProduct({ ...product, stock: updatedStock });
        console.log("Producto agregado al carrito:", {
            producto: product.nombre,
            cantidad: quantity,
            talle: selectedSize,
        });

        if (product) {
            await updateProduct({ ...product, stock: updatedStock })
            fetchProduct()
        }

        const newCartItem: ICartBody = {
            product: product,
            amount: quantity,
            size: selectedSize,
            price: discountedPrice ? discountedPrice : product.precio,
        }

        activeCart = [...activeCart, newCartItem]

        setCart(activeCart)

        Toast.fire({
            icon: "success",
            title: "Añadido al carrito con éxito!",
        });

        navigate("/search")
    };

    const handleBuy = () => {
        if(!handleCheckToken()){
            Toast.fire({
                icon: "error",
                title: "Debes iniciar sesion para hacer eso."
            })
            navigate('/login')
            return
        }
        if (!product || quantity > product.stock) return (
            Toast.fire({
                icon: "error",
                title: "No se puede agregar una cantidad mayor al stock."
            }));

        if (!selectedSize) return (
            Toast.fire({
                icon: "warning",
                title: "Seleccioná un talle antes de continuar."
            }));

        const updatedStock = product.stock - quantity;
        setProduct({ ...product, stock: updatedStock });
        console.log("Producto agregado al carrito:", {
            producto: product.nombre,
            cantidad: quantity,
            talle: selectedSize,
        });

        if (product) updateProduct({ ...product, stock: updatedStock })

        const newCartItem: ICartBody = {
            product: product,
            amount: quantity,
            size: selectedSize,
            price: discountedPrice ? discountedPrice : product.precio,
        }

        activeCart = [...activeCart, newCartItem]

        setCart(activeCart)

        navigate("/cart")
    };

    const handleCheckToken = ()=>{
        const token=getLocalToken()
        console.log(token)
        if (token && !tokenIsExpired(token ? token : "")) {
            return true
        }else{
            return false
        }
    }

    const formatPrice = (price: number | undefined) => {
        return `$${(price ?? 0).toLocaleString("es-AR")}`;
    };

    const discountedPrice = product && product.descuento.descuento !== 0
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
                        {product?.descuento.descuento !== 0 ? (
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
                            <button className={style.buyButton} onClick={handleBuy}>Comprar ahora</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
