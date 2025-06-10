import { Filter } from '../../ui/Filter/FIlter'
import { Footer } from '../../ui/Footer/Footer'
import { Header } from '../../ui/Header/Header'
import { ProductList } from '../../ui/ProductList/ProductList'
import style from "./Catalog.module.css"

export const Catalog = () => {

    return (
        <div>
            <Header />
            <div className={style.catalogOrganizer}>
                <div style={{ width: "20vw", boxShadow: "0 2px 8px #0000001a", paddingLeft: "0.5rem" }}>
                    <Filter/>
                </div>
                <div style={{ width: "80vw" }}>
                    <ProductList />
                </div>
            </div>
            <Footer />
        </div>
    )
}
