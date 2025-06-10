import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart } from "../components/screens/cart/Cart"
import { Catalog } from "../components/screens/catalog/Catalog"
import { Checkout } from "../components/screens/checkout/Checkout"
import { Cambios } from "../components/screens/footerPages/ayuda/Cambio/Cambios"
import { ComoElegirTuTalle } from "../components/screens/footerPages/ayuda/ComoElegirTuTalle/ComoElegirTuTalle"
import { DefensaDelConsumidor } from "../components/screens/footerPages/ayuda/DefensaDelConsumidor/DefensaDelConsumidor"
import { Devoluciones } from "../components/screens/footerPages/ayuda/Devoluciones/Devoluciones"
import { Envios } from "../components/screens/footerPages/ayuda/Envios/Envios"
import { OpcionesPago } from "../components/screens/footerPages/ayuda/OpcionesPago/OpcionesPago"
import { Tips } from "../components/screens/footerPages/ayuda/Tips/Tips"
import { Noticias } from "../components/screens/footerPages/vetra/Noticias/Noticias"
import { Proposito } from "../components/screens/footerPages/vetra/Proposito/Proposito"
import { TrabajaConNosotros } from "../components/screens/footerPages/vetra/TrabajaConNosotros/TrabajaConNosotros"
import { Landing } from "../components/screens/landing/Landing"
import { Login } from "../components/screens/login/LogIn"
import { ProductView } from "../components/screens/productView/ProductView"
import { SingIn } from "../components/screens/singin/SignIn"
import ScrollToTop from "../functions/ScrollToTop/ScrollToTop"




export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <ScrollToTop />

            <Routes>
                // Landing, login y signin
                <Route path="/" element={
                    <Landing />
                } />
                <Route path="/login" element={
                    <Login />
                } />
                <Route path="/signin" element={
                    <SingIn />
                } />

                // Catalogo y busqueda
                <Route path="/search" element={
                    <Catalog />
                } />
                <Route path="/products/:id" element={
                    <ProductView />
                } />

                // Carrito y checkout
                <Route path="/cart" element={
                    <Cart />
                } />
                <Route path="/checkout" element={
                    <Checkout />
                } />

                // Footer: Ayuda
                <Route path="/ayuda/envios-y-entregas" element={
                    <Envios />
                } />
                <Route path="/ayuda/devoluciones" element={
                    <Devoluciones />
                } />
                <Route path="/ayuda/cambios" element={
                    <Cambios />
                } />
                <Route path="/ayuda/opciones-de-pago" element={
                    <OpcionesPago />
                } />
                <Route path="/ayuda/como-elegir-tu-talle" element={
                    <ComoElegirTuTalle />
                } />
                <Route path="/ayuda/defensa-del-consumidor" element={
                    <DefensaDelConsumidor />
                } />
                <Route path="/ayuda/tips" element={
                    <Tips />
                } />

                // Footer: Vetra
                <Route path="/vetra/noticias" element={
                    <Noticias />
                } />
                <Route path="/vetra/proposito" element={
                    <Proposito />
                } />
                <Route path="/vetra/trabaja-con-nosotros" element={
                    <TrabajaConNosotros />
                } />
            </Routes>
        </BrowserRouter>
    )
}
