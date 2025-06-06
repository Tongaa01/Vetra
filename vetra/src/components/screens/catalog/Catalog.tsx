import { Filter } from '../../ui/Filter/Filter'
import { Footer } from '../../ui/Footer/Footer'
import { Header } from '../../ui/Header/Header'
import { ProductList } from '../../ui/ProductList/ProductList'

export const Catalog = () => {
    return (
        <div>
            <Header />
            <div>
                <Filter />
                <ProductList />
            </div>
            <Footer />
        </div>
    )
}
