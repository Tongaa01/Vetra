import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <img
                src="../../../../public/vetra_banner.png"
                alt="Vetra"
                className={style.headerBanner}
            />
            <div className={style.headerSearchBar}>
                <input type="text" placeholder="Buscar productos..." />
            </div>
            <div className={style.headerComponents}>
                <div className={style.headerShoppingCart}>
                    <button><span className="material-icons">shopping_cart</span></button>
                </div>
                <div className={style.headerAccount}>
                    <button>Log In</button>
                    <button>Sign In</button>

                </div>
            </div>
        </div>
    )
}
